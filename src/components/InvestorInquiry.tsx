import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type FormState = "idle" | "success";

const fields = {
  interest: [
    "Gyvybės mokslai (BIO)",
    "Technologijos ir gamyba (TECH)",
    "Tyrimai ir plėtra",
    "Kita",
  ],
  stage: ["Vertiname galimybes", "Ieškome teritorijos", "Planuojame plėtrą", "Kita"],
};

export function InvestorInquiry({ showEyebrow = true }: { showEyebrow?: boolean }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [interest, setInterest] = useState("");
  const [stage, setStage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("success");
  };

  return (
    <section id="investuotojo-uzklausa" className="relative bg-white p-2">
      <div className="relative overflow-hidden rounded-2xl bg-primary py-24 text-white max-[991px]:py-16 max-[479px]:py-12">
        <div className="site-container px-6 max-[479px]:px-4">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(560px,1fr)] lg:gap-24" data-reveal-group>
            <div className="flex flex-col justify-between gap-16">
              <div className="reveal-item flex max-w-2xl flex-col gap-7">
                {showEyebrow && <p className="eyebrow text-white">Pradėkime pokalbį</p>}
                <h2 className="section-heading max-w-3xl text-white">
                  Papasakokite apie savo planus
                </h2>
                <p className="m-0 text-xl font-medium leading-[150%] text-white/72 max-[479px]:text-base">
                  Padėsime įvertinti galimybes ir rasti jūsų veiklai tinkamiausią sprendimą
                  VCIIP teritorijoje.
                </p>
              </div>

              <div className="reveal-item grid gap-8 border-t border-dashed border-white/24 pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-10">
                <div className="flex flex-col gap-3">
                  <p className="m-0 text-2xl font-medium leading-[1.15] text-white">
                    Turite klausimų?
                  </p>
                  <p className="m-0 text-base font-medium leading-[150%] text-white/62">
                    Susisiekite tiesiogiai su VCIIP operatoriumi.
                  </p>
                </div>
                <div className="flex flex-col gap-2 border-l border-dashed border-white/18 pl-10 max-[479px]:border-l-0 max-[479px]:pl-0 xl:pl-10">
                  <p className="m-0 text-lg font-medium leading-[130%] text-white">
                    Direktoriaus vardas pavardė
                  </p>
                  <p className="m-0 text-sm font-medium leading-[150%] text-white/52">
                    Direktorius
                  </p>
                  <a className="text-base font-medium leading-[150%] text-white/72 hover:text-accent" href="mailto:el.paštas@vciip.lt">
                    el. paštas@vciip.lt
                  </a>
                  <a className="text-base font-medium leading-[150%] text-white/72 hover:text-accent" href="tel:+370XXXXXXXX">
                    +370 XXX XXXXX
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal-item rounded-2xl bg-white p-8 text-primary max-[767px]:p-6 max-[479px]:p-5" data-reveal="scale">
              {formState === "success" ? (
                <div className="flex min-h-[420px] flex-col justify-center gap-4 text-center">
                  <p className="m-0 text-3xl font-medium leading-[1.12]">
                    Užklausa paruošta.
                  </p>
                  <p className="m-0 text-lg font-medium leading-[150%] text-muted">
                    Ačiū. Šiame prototipe forma nėra prijungta prie backend, bet būsena ir UX
                    paruošti integracijai.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Vardas ir pavardė">
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Įveskite vardą ir pavardę"
                        className="form-field"
                      />
                    </Field>

                    <Field label="Įmonė">
                      <input
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Įmonės pavadinimas"
                        className="form-field"
                      />
                    </Field>

                    <Field label="El. paštas">
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="vardas@imone.com"
                        className="form-field"
                      />
                    </Field>

                    <Field label="Šalis">
                      <input
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        placeholder="Pasirinkite šalį"
                        className="form-field"
                      />
                    </Field>

                    <Field label="Dominanti sritis">
                      <CustomSelect
                        name="interest"
                        placeholder="Pasirinkite sritį"
                        value={interest}
                        options={fields.interest}
                        onChange={setInterest}
                      />
                    </Field>

                    <Field label="Projekto etapas">
                      <CustomSelect
                        name="stage"
                        placeholder="Pasirinkite etapą"
                        value={stage}
                        options={fields.stage}
                        onChange={setStage}
                      />
                    </Field>
                  </div>

                  <Field label="Žinutė">
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Trumpai papasakokite apie savo planuojamą veiklą, poreikius ar klausimus."
                      className="form-field min-h-[132px] resize-y rounded-[1.5rem] py-4 max-[479px]:min-h-[120px]"
                    />
                  </Field>

                  <div className="flex flex-col gap-4">
                    <button
                      type="submit"
                      className="group inline-flex min-h-12 w-fit items-center justify-center overflow-hidden rounded-full bg-accent px-5 py-3 text-base font-semibold leading-none text-white transition hover:bg-primary hover:text-white"
                    >
                      <span className="h-5 overflow-hidden py-px">
                        <span className="flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2">
                          {["Siųsti užklausą", "Siųsti užklausą"].map((label, index) => (
                            <span key={index} className="flex h-5 items-center gap-2">
                              {label}
                              <ArrowUpRight size={16} aria-hidden="true" />
                            </span>
                          ))}
                        </span>
                      </span>
                    </button>

                    <p className="m-0 max-w-2xl text-sm font-medium leading-[150%] text-muted">
                      Pateikdami užklausą sutinkate, kad jūsų kontaktiniai duomenys būtų
                      naudojami atsakymui į užklausą pateikti.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-xs font-bold uppercase leading-4 tracking-[0.08em] text-primary/58">
        {label}
      </span>
      {children}
    </div>
  );
}

function CustomSelect({
  name,
  placeholder,
  value,
  options,
  onChange,
}: {
  name: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="form-field flex items-center justify-between gap-4 pr-4 text-left"
      >
        <span className={value ? "text-primary" : "text-primary/42"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 text-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-primary/12 bg-white p-1 shadow-[0_22px_70px_color-mix(in_srgb,var(--color-primary)_16%,transparent)]"
        >
          {options.map((option) => {
            const selected = value === option;

            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold leading-[1.2] transition-colors duration-200 ${
                  selected
                    ? "bg-accent text-white"
                    : "text-primary/72 hover:bg-background hover:text-primary"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
