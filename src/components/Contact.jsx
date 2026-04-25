import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons'

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon />,
      tone: 'mint',
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
      icon: <PhoneIcon />,
      tone: 'gold',
    },
    {
      label: 'LinkedIn',
      value: 'Eunjin Ahn',
      href: profile.linkedin,
      icon: <LinkedinIcon />,
      tone: 'blue',
    },
    {
      label: 'GitHub',
      value: 'euenjin',
      href: profile.github,
      icon: <GithubIcon />,
      tone: 'plum',
    },
  ]

  return (
    <section id="contact">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Let&apos;s Build Useful Models</p>
          <h2>Contact</h2>
        </div>
        <span className="section-icon mint"><MailIcon /></span>
      </div>
      <p className="contact-intro">
        I am open to health analytics, clinical data science, and applied machine learning opportunities.
      </p>

      <div className="contact-links">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
            className="contact-link"
          >
            <span className={`contact-icon ${contact.tone}`}>{contact.icon}</span>
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
          </a>
        ))}
      </div>
    </section>
  )
}
