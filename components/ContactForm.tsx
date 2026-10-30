"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { needs, site } from "@/lib/data";

type Fields = {
  name: string;
  email: string;
  phone: string;
  need: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const offerMap: Record<string, string> = {
  sprint: "Focused build",
  partnership: "Product partnership",
  advisory: "Technical advisory",
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  need: "",
  message: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  const name = fields.name.trim();
  if (name.length < 2) errors.name = "Enter your name.";
  else if (!/^[A-Za-z][A-Za-z .'-]{1,60}$/.test(name)) errors.name = "Use letters, spaces, hyphens, or apostrophes.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const phone = fields.phone.replace(/[\s-]/g, "");
  if (!/^0\d{9}$/.test(phone) && !/^\+233\d{9}$/.test(phone)) {
    errors.phone = "Use a Ghana number, such as 024 000 0000 or +233 24 000 0000.";
  }

  if (!fields.need) errors.need = "Choose what you need.";

  const message = fields.message.trim();
  if (message.length < 20) errors.message = "Tell me a little more, at least 20 characters.";
  else if (message.length > 1000) errors.message = "Keep the message under 1000 characters.";

  return errors;
}

export function ContactForm() {
  const params = useSearchParams();
  const offered = offerMap[params.get("offer") ?? ""] ?? "";
  const [fields, setFields] = useState<Fields>({ ...empty, need: offered });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (offered) setFields((current) => ({ ...current, need: offered }));
  }, [offered]);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[28px] bg-white p-6 shadow-card sm:p-8" role="status">
        <p className="text-sm font-bold tracking-[0.16em] text-forest uppercase">Thank you</p>
        <h2 className="mt-1 text-2xl font-extrabold">Message noted, {fields.name.trim().split(" ")[0]}.</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          This is a static site, so the note stays in your browser and is not emailed. For a reply today, call{" "}
          <a className="font-bold text-sky" href={`tel:${site.phones[0].tel}`}>
            {site.phones[0].display}
          </a>{" "}
          or{" "}
          <a className="font-bold text-sky" href={`tel:${site.phones[1].tel}`}>
            {site.phones[1].display}
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-6 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:bg-lime-deep"
          onClick={() => {
            setSent(false);
            setFields({ ...empty, need: offered });
          }}
        >
          Write another note
        </button>
      </div>
    );
  }

  const invalid = Object.keys(errors).length > 0;

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-[28px] bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-xl font-extrabold">Send a note</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        The form checks your details in the browser. It does not send them to a server.
      </p>
      {invalid ? (
        <p role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          Please fix the highlighted fields.
        </p>
      ) : null}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={fields.name}
          error={errors.name}
          autoComplete="name"
          onChange={(value) => update("name", value)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={fields.email}
          error={errors.email}
          autoComplete="email"
          onChange={(value) => update("email", value)}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={fields.phone}
          error={errors.phone}
          autoComplete="tel"
          onChange={(value) => update("phone", value)}
        />
        <label className="block text-sm font-bold" htmlFor="need">
          What do you need?
          <select
            id="need"
            value={fields.need}
            onChange={(event) => update("need", event.target.value)}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "need-error" : undefined}
            className={`mt-2 w-full rounded-2xl border bg-mist px-3 py-3 font-medium text-ink outline-none ${
              errors.need ? "border-red-500" : "border-line focus:border-sky"
            }`}
          >
            <option value="">Choose one</option>
            {needs.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
          {errors.need ? (
            <span id="need-error" className="mt-1 block text-xs font-semibold text-red-600">
              {errors.need}
            </span>
          ) : null}
        </label>
      </div>
      <label className="mt-4 block text-sm font-bold" htmlFor="message">
        Message
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`mt-2 w-full resize-y rounded-2xl border bg-mist px-3 py-3 font-medium text-ink outline-none ${
            errors.message ? "border-red-500" : "border-line focus:border-sky"
          }`}
        />
        {errors.message ? (
          <span id="message-error" className="mt-1 block text-xs font-semibold text-red-600">
            {errors.message}
          </span>
        ) : null}
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex rounded-full bg-lime px-6 py-3 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:bg-lime-deep"
      >
        Submit message
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-bold" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 w-full rounded-2xl border bg-mist px-3 py-3 font-medium text-ink outline-none ${
          error ? "border-red-500" : "border-line focus:border-sky"
        }`}
      />
      {error ? (
        <span id={`${id}-error`} className="mt-1 block text-xs font-semibold text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
