export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' })
  }

  try {
    const { name, contactMethod, telegram, phone, message } = req.body || {}

    if (!name || !message || !contactMethod) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' })
    }
    if (contactMethod === 'telegram' && !telegram) {
      return res.status(400).json({ ok: false, error: 'Telegram username required' })
    }
    if (contactMethod === 'phone' && !phone) {
      return res.status(400).json({ ok: false, error: 'Phone required' })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    const lines = [
      '🧠 Новая заявка на консультацию',
      `• Имя: ${name}`,
      `• Способ связи: ${contactMethod === 'telegram' ? 'Telegram' : 'Телефон'}`,
      contactMethod === 'telegram' ? `• Ник: ${telegram.startsWith('@') ? telegram : '@' + telegram}` : null,
      contactMethod === 'phone' ? `• Телефон: ${phone}` : null,
      '',
      'Сообщение:',
      message,
    ].filter(Boolean)

    const text = lines.join('\n')

    if (token && chatId) {
      const url = `https://api.telegram.org/bot${token}/sendMessage`
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      })
      const data = await r.json()
      if (!data.ok) return res.status(500).json({ ok: false, error: 'Telegram API error' })
      return res.status(200).json({ ok: true, via: 'telegram' })
    } else {
      console.log('Contact request (no Telegram envs):', { name, contactMethod, telegram, phone, message })
      return res.status(200).json({ ok: true, via: 'console' })
    }
  } catch (e) {
    console.error(e)
    return res.status(500).json({ ok: false, error: 'Server error' })
  }
}
