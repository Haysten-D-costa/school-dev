"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const inputBase =
  "w-full bg-cream border border-primary/15 rounded-lg px-4 py-3 font-body text-sm text-primary placeholder:text-neutral/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200";

function Field({
  label, name, type = "text", placeholder, value, onChange, required = false,
}: {
  label: string; name: keyof FormState; type?: string;
  placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-[10px] font-bold tracking-[0.2em] uppercase text-primary/50 mb-1.5">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name} name={name} type={type}
        placeholder={placeholder} value={value}
        onChange={onChange} required={required}
        className={inputBase}
      />
    </div>
  );
}

function SelectField({
  label, name, value, onChange,
}: {
  label: string; name: keyof FormState; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-[10px] font-bold tracking-[0.2em] uppercase text-primary/50 mb-1.5">
        {label}
      </label>
      <select
        id={name} name={name} value={value} onChange={onChange}
        className={`${inputBase} appearance-none cursor-pointer`}
      >
        <option value="">Select a subject</option>
        <option value="General Enquiry">General Enquiry</option>
        <option value="Admissions">Admissions</option>
        <option value="Academics">Academics</option>
        <option value="School Life">School Life</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

function TextareaField({
  label, name, placeholder, value, onChange,
}: {
  label: string; name: keyof FormState; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-[10px] font-bold tracking-[0.2em] uppercase text-primary/50 mb-1.5">
        {label}<span className="text-accent ml-1">*</span>
      </label>
      <textarea
        id={name} name={name} placeholder={placeholder}
        value={value} onChange={onChange} required rows={5}
        className={`${inputBase} resize-none`}
      />
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-14 gap-4">
      <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center">
        <CheckCircle size={28} className="text-primary" />
      </div>
      <h3 className="font-heading font-bold text-primary text-xl">Message Sent!</h3>
      <p className="font-body text-neutral/55 text-sm max-w-xs leading-relaxed">
        Thank you for reaching out. We&apos;ll get back to you as soon as possible.
      </p>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const handleInput  = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name"     name="name"  placeholder="Maria D&apos;Souza"           value={form.name}  onChange={handleInput} required />
        <Field label="Email Address" name="email" type="email" placeholder="yourname@example.com" value={form.email} onChange={handleInput} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field       label="Phone Number" name="phone"   type="tel" placeholder="+91 98765 43210" value={form.phone}   onChange={handleInput} />
        <SelectField label="Subject"      name="subject"             value={form.subject} onChange={handleSelect} />
      </div>
      <TextareaField label="Your Message" name="message" placeholder="How can we help you?" value={form.message} onChange={handleInput} />

      {error && (
        <p className="font-body text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <div className="pt-1">
        <button
          type="submit" disabled={loading}
          className="w-full bg-primary hover:bg-primary-light text-cream font-body font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-60 hover:shadow-lg hover:shadow-primary/20"
        >
          {loading ? (
            <span className="flex items-center gap-2.5">
              <span className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
              Sending…
            </span>
          ) : (
            <> Send Message <Send size={14} /> </>
          )}
        </button>
      </div>
    </form>
  );
}
