"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow text-white/60 text-[11px] mb-4">
              Get in Touch
            </p>
            <h2 className="tracked-heading text-white text-xl md:text-2xl lg:text-[26px] mb-8">
              Speak with a broker
            </h2>
            <p className="text-white/70 leading-relaxed font-light max-w-md">
              Tell us what you are looking for — buying, selling, or chartering.
              A dedicated broker will be in touch within one business day.
            </p>

            <dl className="mt-12 space-y-6">
              <ContactRow label="Head Office" value="Port Vauban, Antibes, France" />
              <ContactRow label="Telephone" value="+33 4 00 00 00 00" />
              <ContactRow label="Email" value="hello@marine.example" />
            </dl>
          </div>

          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" wide />
            <div className="sm:col-span-2">
              <label className="eyebrow text-[10px] text-white/60 block mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-2 text-white font-light resize-none"
              />
            </div>
            <div className="sm:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center gap-3 border border-white/50 hover:border-white hover:bg-white hover:text-ink transition-colors px-10 py-4"
              >
                <span className="eyebrow text-[11px]">Send Enquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-[10px] text-white/50 mb-1">{label}</dt>
      <dd className="text-sm text-white/90 font-light">{value}</dd>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  wide,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label className="eyebrow text-[10px] text-white/60 block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-2 text-white font-light"
      />
    </div>
  );
}
