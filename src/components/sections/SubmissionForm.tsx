'use client';

import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const TECH_CATEGORIES = [
  'SaaS / Software', 'AI / Machine Learning', 'Data & Analytics',
  'Healthcare Technology', 'Enterprise Technology', 'Intellectual Property', 'Other',
];

const TECH_STAGES = [
  'Early Stage / MVP', 'Growth Stage', 'Mature / Established',
  'Revenue Generating', 'Profitable', 'Pre-Revenue',
];

const OPPORTUNITY_OPTIONS = [
  'Technology Acquisition', 'Strategic Partnership', 'Technology Licensing',
  'Investment', 'Technical Due Diligence', 'Technology Valuation', 'Other',
];

const COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Netherlands', 'Singapore', 'India', 'Other',
];

type FormData = {
  name: string; email: string; phone: string;
  company: string; website: string; country: string;
  techCategory: string; techDesc: string; techStage: string;
  opportunity: string;
};

export default function SubmissionForm() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '',
    company: '', website: '', country: '',
    techCategory: '', techDesc: '', techStage: '',
    opportunity: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { ref: headRef, visible: headVis } = useScrollReveal(0.1);
  const { ref: formRef, visible: formVis } = useScrollReveal(0.06);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section
      id="submit"
      style={{ background: 'var(--sand)', padding: '120px 0', borderTop: '1px solid var(--hairline)' }}
    >
      <div className="cx">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>

          {/* Left — context */}
          <div ref={headRef} style={{ position: 'sticky', top: 120 }}>
            <span className={`tag rv ${headVis ? 'in' : ''}`} style={{ color: 'var(--muted)', display: 'block', marginBottom: 28 }}>
              Technology Submission
            </span>
            <h2
              className={`rv ${headVis ? 'in' : ''} d1`}
              style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.0,
                letterSpacing: '-0.03em', color: 'var(--ink)', margin: '0 0 28px',
              }}
            >
              {"LET'S EXPLORE WHAT'S POSSIBLE."}
            </h2>
            <p
              className={`rv ${headVis ? 'in' : ''} d2`}
              style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: 40 }}
            >
              Tell Acquiring Technology about your technology and we&apos;ll review the opportunity for strategic fit. All submissions are treated with complete confidentiality.
            </p>

            {[
              'Reviewed by our acquisition team within 5 business days',
              'Complete confidentiality throughout the process',
              'No obligation — explore the opportunity at your pace',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--copper)', marginTop: 7, flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--ink-60)' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div ref={formRef}>
            {submitted ? (
              <SuccessState />
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--surface)', border: '1px solid var(--hairline)',
                  borderRadius: 12, overflow: 'hidden',
                }}
              >
                {/* Section: Your Information */}
                <FormSection label="Your Information">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Field label="Full Name" name="name" type="text" value={form.name} onChange={handleChange} required />
                    <Field label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                </FormSection>

                {/* Section: Your Company */}
                <FormSection label="Your Company">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Field label="Company Name" name="company" type="text" value={form.company} onChange={handleChange} required />
                    <Field label="Website" name="website" type="url" value={form.website} onChange={handleChange} />
                  </div>
                  <SelectField label="Country" name="country" value={form.country} options={COUNTRIES} onChange={handleChange} />
                </FormSection>

                {/* Section: Your Technology */}
                <FormSection label="Your Technology">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <SelectField label="Technology Category" name="techCategory" value={form.techCategory} options={TECH_CATEGORIES} onChange={handleChange} required />
                    <SelectField label="Technology Stage" name="techStage" value={form.techStage} options={TECH_STAGES} onChange={handleChange} />
                  </div>
                  <TextareaField
                    label="Technology Description"
                    name="techDesc"
                    value={form.techDesc}
                    onChange={handleChange}
                    placeholder="Describe what your technology does, the problem it solves, and what makes it valuable..."
                  />
                </FormSection>

                {/* Section: Your Opportunity */}
                <FormSection label="Your Opportunity">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
                      What are you looking for?<span style={{ color: 'var(--copper)', marginLeft: 2 }}>*</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                      {OPPORTUNITY_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, opportunity: opt }))}
                          style={{
                            padding: '11px 14px',
                            background: form.opportunity === opt ? 'var(--ink)' : 'transparent',
                            color: form.opportunity === opt ? 'var(--fg-white)' : 'var(--ink)',
                            border: `1px solid ${form.opportunity === opt ? 'var(--ink)' : 'var(--hairline)'}`,
                            borderRadius: 4,
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8125rem',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'background 0.25s, color 0.25s, border-color 0.25s',
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </FormSection>

                {/* Section: Optional */}
                <FormSection label="Optional">
                  <FileUpload />
                </FormSection>

                {/* Submit */}
                <div style={{ padding: '0 40px 40px' }}>
                  <button
                    type="submit"
                    disabled={submitting || !form.opportunity}
                    style={{
                      width: '100%', padding: '16px 28px',
                      background: submitting || !form.opportunity ? 'var(--hairline)' : 'var(--ink)',
                      color: submitting || !form.opportunity ? 'var(--muted)' : 'var(--fg-white)',
                      border: 'none', borderRadius: 4,
                      fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
                      fontWeight: 600, letterSpacing: '0.08em',
                      cursor: submitting || !form.opportunity ? 'not-allowed' : 'pointer',
                      transition: 'background 0.3s, color 0.3s',
                    }}
                  >
                    {submitting ? 'SUBMITTING...' : 'SUBMIT TECHNOLOGY'}
                  </button>
                  <p style={{
                    marginTop: 14, textAlign: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: '0.5625rem',
                    letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase',
                  }}>
                    Your information will be treated confidentially.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .form-outer { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .form-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

function FormSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '32px 40px', borderBottom: '1px solid var(--hairline)' }}>
      <span
        className="tag"
        style={{ color: 'var(--copper)', display: 'block', marginBottom: 20 }}
      >
        {label}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {children}
      </div>
    </div>
  );
}

function Field({ label, name, type, value, onChange, required, placeholder }: {
  label: string; name: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
        {label}{required && <span style={{ color: 'var(--copper)', marginLeft: 2 }}>*</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '12px 14px', background: 'transparent',
          border: `1px solid ${focused ? 'var(--ink)' : 'var(--hairline)'}`,
          borderRadius: 4, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem',
          color: 'var(--ink)', outline: 'none', transition: 'border-color 0.25s',
        }}
      />
    </div>
  );
}

function SelectField({ label, name, value, options, onChange, required }: {
  label: string; name: string; value: string; options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
        {label}{required && <span style={{ color: 'var(--copper)', marginLeft: 2 }}>*</span>}
      </label>
      <select
        name={name} value={value} onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '12px 14px', background: 'transparent',
          border: `1px solid ${focused ? 'var(--ink)' : 'var(--hairline)'}`,
          borderRadius: 4, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem',
          color: value ? 'var(--ink)' : 'var(--muted)', outline: 'none',
          transition: 'border-color 0.25s', appearance: 'none', cursor: 'pointer',
        }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function TextareaField({ label, name, value, onChange, placeholder }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
        {label}
      </label>
      <textarea
        name={name} value={value} onChange={onChange} placeholder={placeholder} rows={5}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '12px 14px', background: 'transparent',
          border: `1px solid ${focused ? 'var(--ink)' : 'var(--hairline)'}`,
          borderRadius: 4, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem',
          color: 'var(--ink)', outline: 'none', resize: 'vertical', minHeight: 110,
          transition: 'border-color 0.25s', lineHeight: 1.65,
        }}
      />
    </div>
  );
}

function FileUpload() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
        Upload Company / Technology Information
      </label>
      <label
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) setFileName(f.name); }}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 8, padding: '24px',
          border: `1.5px dashed ${dragging ? 'var(--ink)' : 'var(--hairline)'}`,
          borderRadius: 6, cursor: 'pointer',
          transition: 'border-color 0.25s, background 0.25s',
          background: dragging ? 'var(--sand)' : 'transparent',
        }}
      >
        <input type="file" accept=".pdf,.pptx,.docx,.xlsx" style={{ display: 'none' }}
          onChange={(e) => { const f = e.target.files?.[0]; if (f) setFileName(f.name); }} />
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M19 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="15 7 11 3 7 7" />
          <line x1="11" y1="3" x2="11" y2="14" />
        </svg>
        <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
          {fileName ?? 'Drop file or click to upload — PDF, PPTX, DOCX'}
        </span>
      </label>
    </div>
  );
}

function SuccessState() {
  const NEXT_STEPS = [
    { num: '01', label: 'Information received', desc: 'Your submission has been securely logged.' },
    { num: '02', label: 'Initial strategic review', desc: 'Our team evaluates for strategic fit within 5 business days.' },
    { num: '03', label: 'Follow-up conversation', desc: 'We reach out to schedule a confidential discussion.' },
    { num: '04', label: 'Opportunity assessment', desc: 'We begin the deeper evaluation process together.' },
  ];

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--hairline)', borderRadius: 12, overflow: 'hidden', animation: 'step-enter 0.55s ease both' }}>
      {/* Top confirmation */}
      <div style={{ padding: '56px 48px 48px', borderBottom: '1px solid var(--hairline)', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            border: '1.5px solid var(--copper)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--copper)" strokeWidth="1.5" strokeLinecap="round">
              <polyline points="3,9 7,13 15,5" />
            </svg>
          </div>
          <span className="tag" style={{ color: 'var(--copper)' }}>SUBMISSION RECEIVED</span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-sans)', fontWeight: 700,
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.025em',
          lineHeight: 1.1, color: 'var(--ink)', margin: 0,
        }}>
          THANK YOU. WE&apos;VE RECEIVED YOUR TECHNOLOGY.
        </h3>

        <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.72, color: 'var(--muted)', maxWidth: 420 }}>
          Acquiring Technology will review the information you&apos;ve provided and determine the appropriate next step. All information is treated with complete confidentiality.
        </p>
      </div>

      {/* Next steps timeline */}
      <div style={{ padding: '36px 48px' }}>
        <span className="tag" style={{ color: 'var(--muted)', display: 'block', marginBottom: 24 }}>What happens next</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {NEXT_STEPS.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: 'flex', gap: 20,
                paddingBottom: 20, paddingTop: i === 0 ? 0 : 20,
                borderBottom: i < NEXT_STEPS.length - 1 ? '1px solid var(--hairline)' : 'none',
                alignItems: 'flex-start',
              }}
            >
              <span className="tag" style={{ color: i === 0 ? 'var(--copper)' : 'var(--muted)', paddingTop: 2, minWidth: 24 }}>
                {step.num}
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink)', marginBottom: 3 }}>{step.label}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.55 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', background: 'var(--ink)', color: 'var(--fg-white)',
              textDecoration: 'none', borderRadius: 3,
              fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
            }}
          >
            RETURN TO ACQUIRING TECHNOLOGY
          </a>
          <a
            href="#insights"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', background: 'transparent', color: 'var(--ink)',
              textDecoration: 'none', borderRadius: 3,
              border: '1px solid var(--hairline)',
              fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em',
            }}
          >
            EXPLORE OUR INSIGHTS
          </a>
        </div>
      </div>
    </div>
  );
}
