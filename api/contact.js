export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, contactMethod, telegram, phone, message } = req.body || {};

    if (!name || !message || !contactMethod) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    if (contactMethod === 'telegram' && !telegram) {
      return res.status(400).json({ ok: false, error: 'Telegram username required' });
    }
    if (contactMethod === 'phone' && !phone) {
      return res.status(400).json({ ok: false, error: 'Phone required' });
    }

    // читаем оба варианта имён переменных
    const token =
      process.env.TELEGRAM_BOT_TOKEN ||
      process.env.BOT_TOKEN ||
      '';
    const chatId =
      process.env.TELEGRAM_CHAT_ID ||
      process.env.CHAT_ID ||
      '';

    const lines = [
      '🧠 Новая заявка на консультацию',
      `• Имя: ${name}`,
      `• Способ связи: ${contactMethod === 'telegram' ? 'Telegram' : 'Телефон'}`,
      contactMethod === 'telegram'
        ? `• Ник: ${telegram?.startsWith('@') ? telegram : '@' + telegram}`
        : null,
      contactMethod === 'phone' ? `• Телефон: ${phone}` : null,
      '',
      'Сообщение:',
      message,
    ].filter(Boolean);

    const text = lines.join('\n');

    if (!token || !chatId) {
      // Помогаем диагностике
      return res.status(500).json({
        ok: false,
        error:
          'Missing TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID (или BOT_TOKEN/CHAT_ID) в переменных окружения Vercel',
      });
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    const data = await r.json();

    if (!data.ok) {
      // возвр. подробности от Telegram, чтобы было понятно, что не так
      return res
        .status(500)
        .json({ ok: false, error: 'Telegram API error', details: data });
    }

    return res.status(200).json({ ok: true, via: 'telegram' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}
