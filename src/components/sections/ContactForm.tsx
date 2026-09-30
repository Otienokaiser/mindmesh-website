"use client";

import { useState, type FormEvent } from "react";
import { budgets, projectTypes } from "@/lib/content";
import { validateContact, type FieldErrors } from "@/lib/contact";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const { errors: found } = validateContact(raw);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(raw),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        if (json.errors) setErrors(json.errors);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.done} role="status">
        <h2>Thank you. We&rsquo;ve got your message.</h2>
        <p>We&rsquo;ll reply to the email address you gave, usually within one or two working days.</p>
      </div>
    );
  }

  const err = (k: keyof FieldErrors) =>
    errors[k] ? (
      <p className={styles.err} id={`${k}-err`}>{errors[k]}</p>
    ) : null;
  const aria = (k: keyof FieldErrors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-err` : undefined,
  });

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required {...aria("name")} />
          {err("name")}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required {...aria("email")} />
          {err("email")}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="organization">Organization <span>(optional)</span></label>
          <input id="organization" name="organization" autoComplete="organization" />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone / WhatsApp <span>(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="need">What do you need help with?</label>
          <select id="need" name="need" required defaultValue="" {...aria("need")}>
            <option value="" disabled>Select one</option>
            {projectTypes.map((p) => <option key={p}>{p}</option>)}
          </select>
          {err("need")}
        </div>
        <div className={styles.field}>
          <label htmlFor="budget">Budget range <span>(optional)</span></label>
          <select id="budget" name="budget" defaultValue="" {...aria("budget")}>
            <option value="">Prefer not to say</option>
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required placeholder="What are you trying to solve?" {...aria("message")} />
        {err("message")}
      </div>

      {/* Honeypot, hidden from people and assistive tech */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.submit}>
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className={styles.fail}>
            We couldn&rsquo;t send that just now. Please email us directly at{" "}
            <a href={`mailto:${email}`}>{email}</a> and we&rsquo;ll pick it up from there.
          </p>
        )}
      </div>
    </form>
  );
}
