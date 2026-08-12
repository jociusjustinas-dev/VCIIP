export const kontaktaiContent = {
  hero: {
    eyebrow: "Kontaktai",
    title: "Turite klausimų? Susisiekime",
    description:
      "Susisiekite tiesiogiai - padėsime įvertinti galimybes ir rasti jūsų veiklai tinkamiausią sprendimą VCIIP teritorijoje.",
  },

  operator: {
    id: "operatorius-kontaktai",
    eyebrow: "Kontaktai konsultacijai",
    title: "VCIIP operatorius",
    organization: "VšĮ „Northtown Vilnius”",
    address: "Vismaliukų g. 34, LT-10243 Vilnius",
    phone: "+370 5 274 5407",
    email: "info@northtownvilnius.lt",
  },

  people: {
    id: "kontaktai-konsultacijai",
    eyebrow: "Kontaktai",
    title: "Kontaktai konsultacijai",
    items: [
      {
        name: "Dr. Gediminas Pauliukevičius",
        role: "Direktorius",
        email: "gediminas.pauliukevicius@northtownvilnius.lt",
        emailDisplay: "gediminas.pauliukevičius@northtownvilnius.lt",
        phone: "+370 5 274 5407",
        phoneHref: "+37052745407",
      },
      {
        name: "Jolanta Gaidulionė",
        role: "Projektų valdymo grupės vadovė",
        email: "jolanta.gaidulione@northtownvilnius.lt",
        phone: "+370 5 274 5407",
        phoneHref: "+37052745407",
      },
    ],
  },

  /** Footer / shared inquiry contact — first person from Excel. */
  primaryContact: {
    name: "Dr. Gediminas Pauliukevičius",
    role: "Direktorius",
    email: "gediminas.pauliukevicius@northtownvilnius.lt",
    emailDisplay: "gediminas.pauliukevičius@northtownvilnius.lt",
    phone: "+370 5 274 5407",
    phoneHref: "+37052745407",
  },
} as const;
