import { useState, type FormEvent } from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: '', email: '', message: '' };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

function buildMailto(to: string, values: FormState) {
  const subject = `Portfolio enquiry from ${values.name.trim()}`;
  const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const { email, phone, github, linkedin } = profile.social;

  const updateField = (field: keyof FormState) => (value: string) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }
    window.location.href = buildMailto(email, values);
    setSent(true);
    setValues(initialState);
  };

  const fields: { id: keyof FormState; label: string; type: string; autoComplete: string }[] = [
    { id: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  ];

  return (
    <section id="contact" className="content-section section-wrap contact" aria-labelledby="contact-title">
      <ScrollReveal>
        <div className="contact__card">
          <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>
          <h2 id="contact-title">
            Let&apos;s build something
            <br />
            <span className="gradient-text">meaningful.</span>
          </h2>
          <p className="contact__lead">
            I&apos;m open to Java backend roles, collaboration, and interesting engineering
            challenges.
          </p>

          <div className="contact__grid">
            <ul className="contact__channels accent-cycle">
              <li>
                <a href={`mailto:${email}`}>
                  <Mail size={18} aria-hidden="true" />
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s/g, '')}`}>
                  <Phone size={18} aria-hidden="true" />
                  {phone}
                </a>
              </li>
              <li>
                <span>
                  <MapPin size={18} aria-hidden="true" />
                  {profile.location}
                </span>
              </li>
              {linkedin ? (
                <li>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
              ) : null}
              {github ? (
                <li>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} aria-hidden="true" />
                    GitHub
                  </a>
                </li>
              ) : null}
              <li className="contact__cta">
                <Button href={`mailto:${email}`}>
                  <Mail size={18} aria-hidden="true" />
                  Email Me
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </li>
            </ul>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {fields.map((field) => (
                <div key={field.id} className="field">
                  <label htmlFor={field.id}>{field.label}</label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    value={values[field.id]}
                    onChange={(event) => updateField(field.id)(event.target.value)}
                    aria-invalid={Boolean(errors[field.id])}
                    aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                  />
                  {errors[field.id] ? (
                    <p id={`${field.id}-error`} className="field__error" role="alert">
                      {errors[field.id]}
                    </p>
                  ) : null}
                </div>
              ))}

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => updateField('message')(event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="field__error" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit">
                <Send size={16} aria-hidden="true" />
                Send Message
              </Button>

              <p className={sent ? 'field__success' : 'field__note'} role="status">
                {sent
                  ? 'Your email app should open with the message filled in.'
                  : 'Sending opens your email app with this message pre-filled.'}
              </p>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
