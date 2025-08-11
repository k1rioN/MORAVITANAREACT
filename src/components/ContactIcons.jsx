import React from 'react';
import Lottie from 'react-lottie-player';

import phoneAnim from '../assets/animations/phone.json';
import telegramAnim from '../assets/animations/telegram.json';
import emailAnim from '../assets/animations/email.json';

export default function ContactIcons() {
  const icons = [
    { anim: phoneAnim, label: 'Позвонить', href: 'tel:+79990000000' },
    { anim: telegramAnim, label: 'Написать в Telegram', href: 'https://t.me/username' },
    { anim: emailAnim, label: 'Отправить email', href: 'mailto:mail@example.com' },
  ];

  return (
    <div className="contact-icons">
      {icons.map((icon, i) => (
        <a
          key={i}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <Lottie
            loop
            animationData={icon.anim}
            play
            style={{ width: 50, height: 50 }}
          />
          <span>{icon.label}</span>
        </a>
      ))}
    </div>
  );
}
