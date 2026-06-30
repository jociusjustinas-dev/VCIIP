import { apieVciipOperator } from "../../content/apieVciip";

export function ApieVciipOperator() {
  return (
    <section className="relative bg-background section-shell">
      <div className="site-container px-6 max-[479px]:px-4">
        <div
          className="mb-12 grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.62fr)] max-[991px]:mb-10"
          data-reveal-group
        >
          <div className="flex flex-col items-start gap-7">
            <p className="eyebrow reveal-item">{apieVciipOperator.eyebrow}</p>
            <h2 className="section-heading reveal-item max-w-3xl">{apieVciipOperator.title}</h2>
          </div>
        </div>

        <div
          className="grid items-start gap-10 border-t border-dashed border-primary/18 pt-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.68fr)] lg:gap-16"
          data-reveal-group
        >
          <div className="reveal-item flex flex-col gap-8">
            <p className="m-0 max-w-2xl text-base leading-loose text-muted">
              {apieVciipOperator.description}
            </p>

            <div className="flex flex-col gap-2 border-t border-dashed border-primary/16 pt-7">
              <h3 className="heading-h3 m-0 text-primary">{apieVciipOperator.name}</h3>
              <p className="m-0 text-sm font-medium leading-[150%] text-muted">{apieVciipOperator.role}</p>
              <a
                className="text-base font-medium leading-[150%] text-primary/72 hover:text-accent"
                href={`mailto:${apieVciipOperator.email}`}
              >
                {apieVciipOperator.email}
              </a>
              <a
                className="text-base font-medium leading-[150%] text-primary/72 hover:text-accent"
                href={`tel:${apieVciipOperator.phone.replace(/\s/g, "")}`}
              >
                {apieVciipOperator.phone}
              </a>
            </div>
          </div>

          <div
            className="apie-vciip-operator-photo reveal-item"
            data-reveal="scale"
            role="img"
            aria-label="VCIIP operatoriaus nuotrauka"
          >
            <p className="apie-vciip-operator-photo__label">Operatoriaus nuotrauka</p>
          </div>
        </div>
      </div>
    </section>
  );
}
