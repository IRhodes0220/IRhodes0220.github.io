import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [log, setLog] = useState<string[]>([]);

  function addLog(msg: string) {
    setLog((prev) => [...prev, msg]);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    addLog("> INITIATING_SECURE_TRANSMISSION...");
    await delay(600);
    addLog("> ENCRYPTING_PAYLOAD...");
    await delay(700);
    addLog("> ROUTING_THROUGH_SECURE_CHANNEL...");
    await delay(800);
    addLog("> MESSAGE_DELIVERED_SUCCESSFULLY ✓");
    setStatus("sent");
  }

  function delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono-cyber text-[10px] text-[var(--primary)]">04/</span>
        <h1 className="font-display font-bold text-3xl tracking-widest">CONTACT</h1>
        <span className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid md:grid-cols-[1fr_340px] gap-10">
        {/* form */}
        <div>
          {status !== "sent" ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="NAME" id="name" type="text" value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="EMAIL" id="email" type="email" value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })} required />
              </div>
              <Field label="SUBJECT" id="subject" type="text" value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })} required />
              <div>
                <label htmlFor="message" className="block font-mono-cyber text-[10px] text-[var(--muted-foreground)] tracking-widest mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[var(--card)] border border-[var(--border)] px-4 py-3 font-mono-cyber text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-all duration-200 resize-none placeholder:text-[var(--muted-foreground)]/40"
                  placeholder="Type your message here..."
                />
              </div>

              {/* terminal log */}
              {log.length > 0 && (
                <div className="border border-[var(--border)] bg-[var(--muted)] p-4 font-mono-cyber text-[10px] space-y-1">
                  {log.map((l, i) => (
                    <div key={i} className={i === log.length - 1 ? "text-[var(--neon-cyan)]" : "text-[var(--muted-foreground)]"}>
                      {l}
                    </div>
                  ))}
                  {status === "sending" && <div className="cursor-blink text-[var(--primary)]" />}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="font-mono-cyber text-xs tracking-widest px-8 py-3.5 bg-[var(--primary)] text-white neon-border hover:bg-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {status === "sending" ? "TRANSMITTING..." : "SEND_MESSAGE →"}
              </button>
            </form>
          ) : (
            <div className="border border-[var(--primary)] bg-[var(--card)] p-8 neon-border text-center">
              <div className="font-display font-bold text-3xl text-[var(--primary)] neon-text mb-3">
                TRANSMISSION_COMPLETE
              </div>
              <p className="font-mono-cyber text-xs text-[var(--muted-foreground)] mb-2">
                Message received. I'll get back to you within 24–48 hours.
              </p>
              <div className="border border-[var(--border)] bg-[var(--muted)] p-4 font-mono-cyber text-[10px] text-left mt-6 space-y-1">
                {log.map((l, i) => (
                  <div key={i} className={i === log.length - 1 ? "text-[var(--neon-cyan)]" : "text-[var(--muted-foreground)]"}>
                    {l}
                  </div>
                ))}
              </div>
              <button
                onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setStatus("idle"); setLog([]); }}
                className="mt-6 font-mono-cyber text-xs tracking-widest px-6 py-2.5 border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200"
              >
                SEND_ANOTHER →
              </button>
            </div>
          )}
        </div>

        {/* info sidebar */}
        <div className="space-y-5">
          <div className="relative border border-[var(--border)] bg-[var(--card)] p-5 neon-border">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--primary)]" />
            <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-4 tracking-widest">CONTACT_INFO</p>
            {[
              { label: "EMAIL", value: "Isa.Rhodes0220@gmail.com", href: "Isa.Rhodes0220@gmail.com" },
              { label: "LOCATION", value: "Augusta, GA", href: null },
              { label: "TIMEZONE", value: "GMT-4 (EST)", href: null },
              { label: "AVAILABILITY", value: "Open to Work", href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex justify-between py-2 border-b border-[var(--border)]/40 last:border-0">
                <span className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">{label}</span>
                {href ? (
                  <a href={href} className="font-mono-cyber text-[10px] text-[var(--primary)] hover:underline">{value}</a>
                ) : (
                  <span className="font-mono-cyber text-[10px] text-[var(--foreground)]">{value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-4 tracking-widest">SOCIAL_LINKS</p>
            {[
              { platform: "GitHub", handle: "@IRhodes0220", url: "https://github.com" },
            ].map(({ platform, handle, url }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between py-2.5 border-b border-[var(--border)]/40 last:border-0 hover:text-[var(--primary)] transition-colors duration-200 group"
              >
                <span className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] group-hover:text-[var(--primary)]">{platform}</span>
                <span className="font-mono-cyber text-[10px] text-[var(--foreground)] group-hover:text-[var(--primary)]">{handle} ↗</span>
              </a>
            ))}
          </div>

          <div className="border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-3 tracking-widest">PREFERRED_CONTACT</p>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Email is the fastest way to reach me for serious inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, id, type, value, onChange, required,
}: {
  label: string; id: string; type: string; value: string;
  onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono-cyber text-[10px] text-[var(--muted-foreground)] tracking-widest mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[var(--card)] border border-[var(--border)] px-4 py-3 font-mono-cyber text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-all duration-200 placeholder:text-[var(--muted-foreground)]/40"
      />
    </div>
  );
}

