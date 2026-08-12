import processLabImage from "../assets/images/process-lab.jpg";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

export const techHero = {
  eyebrow: "VCIIP Tech",
  title: "Technologijų ir pažangios gamybos inovacijų parkas Vilniuje",
  description:
    "VCIIP Tech vienoje teritorijoje suburs inžinerinės pramonės, pažangios gamybos ir informacinių technologijų lyderius. Sklandžiam įsikūrimui paruošta infrastruktūra, valstybės bei miesto dėmesys ir operatoriaus pagalba nuo pat įsikūrimo VCIIP Tech pradžios.",
  primaryCta: { label: "Susipažinti su VCIIP Tech", href: "#privalumai" },
  secondaryCta: { label: "Susisiekti", href: "/kontaktai?interest=tech" },
};

export const techStats = {
  eyebrow: "Rezultatai",
  title: "VCIIP Tech šiandien",
  description:
    "Liepkalnyje kuriama nauja Vilniaus miesto inovacijų pramonės parko teritorija, skirta pažangiai gamybai ir technologijų įmonėms – čia numatoma pritraukti IT, inžinerinių technologijų, biofarmacijos srities investuotojus, kuriančius aukštos pridėtinės vertės sprendimus Vilniuje.",
  items: [
    { value: "100+ mln. €", label: "pritraukta investicijų" },
    { value: "20+", label: "investuotojų" },
    { value: "380+", label: "aukščiausios vertės darbo vietų" },
    { value: "2028 m.", label: "galimybė kurtis nuo" },
  ],
};

export const techTerritory = {
  id: "sklypai",
  eyebrow: "Sklypai",
  title: "VCIIP Tech teritorija",
  intro:
    "VCIIP TECH teritorijoje formuojami skirtingo dydžio sklypai, pritaikyti pažangiai gamybai, technologijų ir laboratorijų veiklai.\n\nTeritorijoje numatyti trys sklypų tipai:",
  highlights: [
    "Mokslo ir inovacijų zona (0,5–1 ha) – laboratorijoms ir aukštųjų technologijų verslo inkubatoriams",
    "Švarios gamybos zona (1–3 ha) – medicinos prietaisų ar farmacijos produktų gamybai",
    "Sunkiosios biotechnologinės gamybos zona (2,5–5 ha) – biofarmacinei gamybai bei pilotinėms gamykloms",
  ],
  primaryCta: { label: "Susisiekti dėl sklypų galimybių", href: "/kontaktai?interest=tech" },
  secondaryCta: { label: "Žiūrėti privalumus", href: "#privalumai" },
  mediaPlaceholder: "Teritorijos žemėlapis – sklypai pagal statusą ir funkciją",
};

export const techPremises = {
  id: "patalpos",
  eyebrow: "Patalpos",
  title: "VCIIP Tech nuomojamos patalpos",
  intro:
    "Šiuo metu įrengtų patalpų VCIIP Tech teritorijoje nėra, tačiau jūsų verslas gali įsikurti dedikuotame sklype, suprojektuotame pagal jūsų veiklos poreikius.",
  primaryCta: { label: "Žiūrėti sklypus", href: "#sklypai" },
  secondaryCta: { label: "Susisiekti", href: "/kontaktai?interest=tech" },
  imageSrc: processLabImage,
};

export const techAdvantages = {
  eyebrow: "Privalumai",
  title: "VCIIP Tech privalumai",
  items: [
    {
      title: "Strategiškai patogi vieta ir susisiekimas",
      body: "VCIIP Tech įsikūręs pietinėje Vilniaus dalyje, Liepkalnyje, vos kelių kilometrų atstumu nuo senamiesčio. Teritorija ribojasi su tarptautiniu oro uostu bei pagrindine geležinkelio ir kelių magistralių arterija, užtikrinančia patogų susisiekimą su likusia Lietuvos dalimi ir kaimyninėmis valstybėmis.",
      href: "#vieta",
      ctaLabel: "Skaityti daugiau",
    },
    {
      title: "Išvystyta infrastruktūra greitam įsikūrimui",
      body: "Teritorijoje projektuojama visapusiška antžeminė ir požeminė infrastruktūra – daugiau nei 3 km susisiekimo ir inžinerinių komunikacijų tinklo, užtikrinsiančio sklandų investuotojų įsikūrimą ir veiklos pradžią.",
      href: "#infrastruktura",
      ctaLabel: "Skaityti daugiau",
    },
    {
      title: "Dalis platesnės VCIIP ekosistemos",
      body: "VCIIP skirtas išskirtinai inovatyvioms įmonėms, veikiančioms sumanios specializacijos srityse. Skatinamas klientų bendruomeniškumas, partnerystė, klasterizacija, siekiant visapusiškos naudos konkurencingoje verslo aplinkoje.",
      href: "#klientai",
      ctaLabel: "Skaityti daugiau",
    },
    {
      title: "Nėra infrastruktūros plėtros mokesčio",
      body: "VCIIP – vyriausybės pripažintas valstybinės svarbos ekonominiu projektu, stiprinančiu Lietuvos inovacijų sistemą. Todėl VCIIP besikuriantiems investuotojams infrastruktūros plėtros mokestis nėra taikomas.",
    },
  ],
};

export const techInfrastructure = {
  id: "infrastruktura",
  eyebrow: "Infrastruktūra",
  title: "Infrastruktūra ir pajėgumai",
  imageSrc: vciipOverviewImage,
  imageAlt: "VCIIP Tech teritorijos infrastruktūra",
  items: [
    { label: "Dujotiekis", detail: "Pajėgumas iki 2000 m³/val." },
    { label: "Elektra", detail: "Galia iki 50 MW." },
    { label: "Vandentiekis", detail: "Tiekimas iki 48,5 m³/val." },
    { label: "Nutekamieji vandenys", detail: "Nuotekų pajėgumas iki 48,5 m³/val." },
    { label: "Telekomunikacijos", detail: "Duomenų perdavimas iki 1 GB/s." },
    { label: "Užstatymo intensyvumas", detail: "Koeficientas iki 1,2." },
    { label: "Pastatų aukštingumas", detail: "Iki 16 metrų (iki 4 aukštų)." },
  ],
};

export const techClients = {
  title: "VCIIP Tech bendruomenė",
  description:
    "Įsikūrę VCIIP Tech, prisijungsite prie savo srities lyderių. Tai reiškia sinergiją, naujus bendrus projektus ir postūmį konkurencingoje rinkoje augti drauge - bendradarbiaujant ir dalijantis patirtimi.",
};

export const techProcess = {
  id: "procesas",
  eyebrow: "Procesas",
  title: "Įsikūrimas VCIIP Tech",
  intro:
    "VCIIP įsikūrimo procesas vyksta aiškiai apibrėžtais etapais. Kiekviename jų – nuo paraiškos įsikurti pateikimo iki pat pilno įsikūrimo parke – investuotojui padeda VCIIP operatorius.",
  cta: { label: "Sužinoti daugiau", href: "/isikurimas" },
};

export const techLocation = {
  id: "vieta",
  eyebrow: "Vieta",
  title: "Vieta mieste",
  intro:
    "VCIIP Tech įsikūręs pietinėje Vilniaus dalyje, Liepkalnyje, vos kelių kilometrų atstumu nuo senamiesčio, netoli tarptautinio oro uosto bei pagrindinių geležinkelio ir kelių magistralių.\n\nLiepkalnis – istoriškai gamybos ir sandėliavimo paslaugų rajonas, kuris jau šiandien išgyvena transformaciją. VCIIP Tech taps šios teritorijos regeneracijos varikliu, papildydamas jau vykstančią plėtrą.",
  legend: [
    { label: "VCIIP Tech", symbol: "accent-dot" },
    { label: "Oro uostas ir magistralės", symbol: "primary-dot" },
    { label: "Artimiausios viešojo transporto stotelės", symbol: "muted-dot" },
    { label: "Maršrutai iki centro", symbol: "primary-line" },
  ],
};

export const techCta = {
  applicationTitle: "Pateikite paraišką",
  applicationDescription:
    "Padėsime įvertinti galimybes ir rasti jūsų veiklai tinkamiausią sprendimą VCIIP teritorijoje.",
  applicationCta: { label: "Pildyti paraišką", href: "/isikurimas#paraiska" },
  contactTitle: "Turite klausimų? Susisiekime",
  contactDescription: "Susisiekite tiesiogiai su VCIIP operatoriumi.",
};
