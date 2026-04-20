import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { translations, languages, type Lang } from "@/lib/i18n";
import { bragaAreas } from "@/lib/bragaAreas";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: EDMaisonWaitlist,
});



const IMG = {
  hero: "https://cdn.shipper.now/image/users/cmi8klm2u0000l50423d6cdpq/1776712157657-iyiayac8sqe-edmaison-hero.webp",
  laundry: "https://cdn.shipper.now/image/users/cmi8klm2u0000l50423d6cdpq/1776712099542-4yjv7feq6p4-edmaison-laundry.webp",
  folding: "https://cdn.shipper.now/image/users/cmi8klm2u0000l50423d6cdpq/1776712099689-y96xeprnp2-edmaison-folding.webp",
  moving: "https://cdn.shipper.now/image/users/cmi8klm2u0000l50423d6cdpq/1776712100013-gasx9w4lu95-edmaison-moving.webp",
  detail: "https://cdn.shipper.now/image/users/cmi8klm2u0000l50423d6cdpq/1776712119656-rd3ezf754ek-edmaison-detail.webp",
  essentials: "https://cdn.shipper.now/image/users/cmi8klm2u0000l50423d6cdpq/1776712138599-kbnvg965tpf-edmaison-essentials.webp",
  living: "https://cdn.shipper.now/image/users/cmi8klm2u0000l50423d6cdpq/1776712199519-dfl6bv7mdq6-edmaison-living.webp",
};

const SERVICE_IMAGES = [IMG.living, IMG.laundry, IMG.folding, IMG.moving, IMG.detail, IMG.essentials];

// Brand palette derived from logo
// Deep navy/ink, warm gold, cream
const C = {
  bg: "#f5efe4",        // warm cream background
  bgSoft: "#faf6ee",    // softer cream
  ink: "#0f2033",       // deep navy (logo base)
  inkSoft: "#1a2e45",   // softened navy
  gold: "#c9a55b",      // signature gold
  goldDeep: "#a8863f",  // deeper gold
  goldLight: "#e0c07a", // light gold
};

function EDMaisonWaitlist() {
  const [lang, setLang] = useState<Lang>("en");
  const [langOpen, setLangOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.phone) {
      toast.error(lang === "en" ? "Please fill email and phone" : lang === "fr" ? "Veuillez remplir l'e-mail et le téléphone" : lang === "it" ? "Inserisci e-mail e telefono" : "Preencha e-mail e telefone");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", city: "" });
    setSubmitted(false);
  };

  const activeLang = languages.find((l) => l.code === lang)!;

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: C.bg, color: C.ink }}
    >
      {/* ============ NAV ============ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ backgroundColor: `${C.bg}dd`, borderBottom: `1px solid ${C.ink}1a` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-3 group">
            <div className="flex flex-col items-start leading-none">
              <span
                className="text-xl md:text-2xl tracking-[0.18em] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: C.ink }}
              >
                ED MAISON
              </span>
              <span
                className="text-[9px] tracking-[0.4em] mt-1"
                style={{ color: C.goldDeep }}
              >
                ATELIER · EST. 2025
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.15em] uppercase">
            <button
              onClick={() => scrollTo("services")}
              className="transition-colors"
              style={{ color: C.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.goldDeep)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.ink)}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollTo("story")}
              className="transition-colors"
              style={{ color: C.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.goldDeep)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.ink)}
            >
              {t.nav.story}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-[11px] tracking-[0.25em] uppercase transition-all"
                style={{ border: `1px solid ${C.ink}33`, color: C.ink }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <span>{activeLang.flag}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 shadow-xl rounded-sm overflow-hidden"
                  style={{ backgroundColor: C.bgSoft, border: `1px solid ${C.ink}1a` }}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-[12px] tracking-[0.15em] uppercase flex items-center justify-between transition-colors"
                      style={
                        l.code === lang
                          ? { backgroundColor: C.ink, color: C.bg }
                          : { color: C.ink }
                      }
                    >
                      <span>{l.label}</span>
                      <span className="text-[10px] opacity-60">{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("waitlist")}
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase transition-colors"
              style={{ backgroundColor: C.ink, color: C.bg }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.goldDeep)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.ink)}
            >
              {t.nav.waitlist}
            </button>
          </div>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={IMG.hero}
          alt="Luxury interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${C.ink}e6, ${C.ink}4d 50%, ${C.ink}80)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-32 pt-32 w-full">
          <div className="max-w-3xl" style={{ color: C.bg }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10" style={{ backgroundColor: C.gold }} />
              <span
                className="text-[11px] tracking-[0.4em] uppercase font-semibold"
                style={{ color: C.ink }}
              >
                {t.hero.eyebrow}
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.hero.title}
            </h1>
            <p
              className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10"
              style={{ color: `${C.bg}d9` }}
            >
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollTo("waitlist")}
                className="group inline-flex items-center gap-3 px-8 py-4 text-[12px] tracking-[0.3em] uppercase font-medium transition-all"
                style={{ backgroundColor: C.gold, color: C.ink }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.bg)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.gold)}
              >
                {t.hero.cta}
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="inline-flex items-center gap-3 px-8 py-4 text-[12px] tracking-[0.3em] uppercase transition-all"
                style={{
                  border: `1px solid ${C.bg}66`,
                  color: C.bg,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.bg;
                  e.currentTarget.style.color = C.ink;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = C.bg;
                }}
              >
                {t.hero.secondary}
              </button>
            </div>
            <p
              className="mt-8 text-[11px] tracking-[0.2em] uppercase"
              style={{ color: `${C.bg}99` }}
            >
              {t.hero.note}
            </p>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section style={{ backgroundColor: C.ink, color: C.bg }} className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div
                className="text-4xl md:text-5xl font-light mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: C.gold }}
              >
                {s.k}
              </div>
              <div
                className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase"
                style={{ color: `${C.bg}99` }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: C.bg }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: C.goldDeep }} />
              <span
                className="text-[11px] tracking-[0.4em] uppercase"
                style={{ color: C.goldDeep }}
              >
                {t.services.eyebrow}
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-light leading-[1.1] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.services.title}
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: `${C.ink}b3` }}
            >
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: `${C.ink}1a` }}>
            {t.services.items.map((item, i) => (
              <div
                key={i}
                className="group p-8 md:p-10 transition-all cursor-default"
                style={{ backgroundColor: C.bg }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.bgSoft)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.bg)}
              >
                <div
                  className="aspect-[4/3] overflow-hidden mb-6"
                  style={{ backgroundColor: `${C.ink}0d` }}
                >
                  <img
                    src={SERVICE_IMAGES[i]}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="text-xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: C.goldDeep }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-2xl md:text-[1.75rem] font-light leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: `${C.ink}a6` }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section
        id="story"
        className="py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: C.ink, color: C.bg }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={IMG.detail} alt="Artisan detail" className="h-full w-full object-cover" />
            </div>
            <div
              className="absolute -bottom-6 -right-6 md:-right-12 w-32 md:w-44 aspect-square overflow-hidden hidden sm:block"
              style={{ border: `8px solid ${C.ink}` }}
            >
              <img src={IMG.folding} alt="Fold" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: C.gold }} />
              <span
                className="text-[11px] tracking-[0.4em] uppercase"
                style={{ color: C.gold }}
              >
                {t.story.eyebrow}
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-light leading-[1.1] mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.story.title}
            </h2>
            <div
              className="space-y-5 text-base md:text-lg leading-relaxed font-light"
              style={{ color: `${C.bg}bf` }}
            >
              {t.story.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p
              className="mt-10 text-2xl italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: C.gold }}
            >
              {t.story.signature}
            </p>
          </div>
        </div>
      </section>

      {/* ============ WAITLIST ============ */}
      <section
        id="waitlist"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: C.bgSoft }}
      >
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={IMG.essentials} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: C.goldDeep }} />
              <span
                className="text-[11px] tracking-[0.4em] uppercase"
                style={{ color: C.goldDeep }}
              >
                {t.waitlist.eyebrow}
              </span>
              <div className="h-px w-10" style={{ backgroundColor: C.goldDeep }} />
            </div>
            <h2
              className="text-4xl md:text-6xl font-light leading-[1.1] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.waitlist.title}
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: `${C.ink}b3` }}
            >
              {t.waitlist.subtitle}
            </p>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-12 shadow-[0_20px_60px_-20px_rgba(15,32,51,0.25)]"
              style={{
                backgroundColor: C.bg,
                border: `1px solid ${C.ink}1a`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <LuxField
                  label={t.waitlist.name}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  type="text"
                />
                <div>
                  <LuxField
                    label={t.waitlist.city}
                    placeholder={t.waitlist.cityPlaceholder}
                    value={form.city}
                    onChange={(v) => setForm({ ...form, city: v })}
                    type="text"
                    options={bragaAreas as any}
                  />
                  <p
                    className="text-[10px] italic mt-1"
                    style={{ color: `${C.ink}80` }}
                  >
                    {t.waitlist.cityHint}
                  </p>
                </div>
                <LuxField
                  label={t.waitlist.email}
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  type="email"
                  required
                />
                <LuxField
                  label={t.waitlist.phone}
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  type="tel"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group mt-10 w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] tracking-[0.3em] uppercase font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: C.ink, color: C.bg }}
                onMouseEnter={(e) => {
                  if (!submitting) e.currentTarget.style.backgroundColor = C.goldDeep;
                }}
                onMouseLeave={(e) => {
                  if (!submitting) e.currentTarget.style.backgroundColor = C.ink;
                }}
              >
                {submitting ? t.waitlist.submitting : t.waitlist.submit}
                {!submitting && (
                  <span className="inline-block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                )}
              </button>

              <p
                className="mt-6 text-center text-[11px] tracking-[0.2em] uppercase"
                style={{ color: `${C.ink}80` }}
              >
                {t.waitlist.privacy}
              </p>
            </form>
          ) : (
            <div
              className="p-10 md:p-16 text-center shadow-[0_20px_60px_-20px_rgba(15,32,51,0.4)]"
              style={{ backgroundColor: C.ink, color: C.bg }}
            >

              <h3
                className="text-4xl md:text-5xl font-light mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t.waitlist.success}
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed max-w-md mx-auto mb-8"
                style={{ color: `${C.bg}bf` }}
              >
                {t.waitlist.successBody}
              </p>
              <button
                onClick={resetForm}
                className="text-[11px] tracking-[0.3em] uppercase pb-1 transition-colors"
                style={{ color: C.gold, borderBottom: `1px solid ${C.gold}` }}
              >
                {t.waitlist.another}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        className="py-12"
        style={{
          backgroundColor: C.ink,
          color: `${C.bg}b3`,
          borderTop: `1px solid ${C.bg}1a`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div>
              <div
                className="text-xl tracking-[0.15em] font-light mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: C.bg }}
              >
                ED MAISON
              </div>
              <div
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: C.gold }}
              >
                {t.footer.tagline}
              </div>
            </div>
          </div>
          <div className="text-center text-[11px] tracking-[0.2em] uppercase">
            {t.footer.copyright}
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase">
            <a
              href="mailto:hello@edmaison.co"
              className="transition-colors"
              style={{ color: `${C.bg}b3` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${C.bg}b3`)}
            >
              {t.footer.contact}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LuxField({
  label,
  value,
  onChange,
  type,
  required,
  placeholder,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}) {
  if (options) {
    return (
      <label className="block">
        <span
          className="block text-[10px] tracking-[0.3em] uppercase mb-2"
          style={{ color: `${C.ink}99` }}
        >
          {label} {required && <span style={{ color: C.goldDeep }}>*</span>}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full bg-transparent py-3 text-[15px] focus:outline-none transition-colors appearance-none cursor-pointer"
          style={{
            borderBottom: `1px solid ${C.ink}40`,
            color: value ? C.ink : `${C.ink}66`,
          }}
          onFocus={(e) => (e.currentTarget.style.borderBottom = `1px solid ${C.goldDeep}`)}
          onBlur={(e) => (e.currentTarget.style.borderBottom = `1px solid ${C.ink}40`)}
        >
          <option value="" disabled>
            {placeholder || label}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label className="block">
      <span
        className="block text-[10px] tracking-[0.3em] uppercase mb-2"
        style={{ color: `${C.ink}99` }}
      >
        {label} {required && <span style={{ color: C.goldDeep }}>*</span>}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent py-3 text-[15px] focus:outline-none transition-colors"
        style={{
          borderBottom: `1px solid ${C.ink}40`,
          color: C.ink,
        }}
        onFocus={(e) => (e.currentTarget.style.borderBottom = `1px solid ${C.goldDeep}`)}
        onBlur={(e) => (e.currentTarget.style.borderBottom = `1px solid ${C.ink}40`)}
      />
    </label>
  );
}
