import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { profile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import { Reveal, RevealGroup, RevealItem } from "./Motion.jsx";

const methods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: FiMail, copy: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, Icon: FiPhone },
  { label: "WhatsApp", value: profile.whatsapp, href: profile.whatsappHref, Icon: FaWhatsapp, external: true },
  { label: "Location", value: profile.location, Icon: FiMapPin },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const input =
    "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <SectionHeading title="Contact">
            Have a project, a job opening or a question? Email, call or message me on WhatsApp.
          </SectionHeading>

          <RevealGroup as="ul" className="space-y-3">
            {methods.map(({ label, value, href, Icon, copy, external }) => (
              <RevealItem
                as="li"
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-lg text-brand">
                  <Icon aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="block truncate font-semibold hover:text-brand"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold">{value}</p>
                  )}
                </div>
                {copy && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-muted hover:bg-paper hover:text-ink"
                    aria-label={copied ? "Email copied" : "Copy email address"}
                  >
                    {copied ? <FiCheck className="text-brand" /> : <FiCopy />}
                  </button>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="sr-only" aria-live="polite">{copied ? "Email address copied" : ""}</p>
        </div>

        <Reveal as="form" delay={0.15} onSubmit={submit} className="min-w-0 rounded-3xl border border-line bg-surface p-6 sm:p-10 lg:col-span-7">
          <h3 className="text-2xl font-bold">Send a message</h3>
          <p className="mt-2 text-muted">This opens your email app with the message ready to send.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Your name
              <input required name="name" value={form.name} onChange={update} className={input} autoComplete="name" />
            </label>
            <label className="block text-sm font-medium">
              Your email
              <input required type="email" name="email" value={form.email} onChange={update} className={input} autoComplete="email" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium">
            Message
            <textarea
              required
              name="message"
              rows="6"
              value={form.message}
              onChange={update}
              className={`${input} resize-y`}
              placeholder="Tell me about your project or role"
            />
          </label>

          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
            <FiSend aria-hidden="true" /> Send message
          </button>
          {sent && (
            <p className="mt-4 text-sm text-muted" role="status">
              If your email app didn't open, write to me directly at{" "}
              <a className="font-semibold text-brand underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
