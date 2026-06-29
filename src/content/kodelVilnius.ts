import modernOfficeImage from "../assets/images/modern-office-work.png";
import vilniusImage from "../assets/images/vilnius.webp";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";
import goVilniusLogo from "../assets/logos/partners/go-vilnius.png";
import investLithuaniaLogo from "../assets/logos/partners/invest-lithuania.svg";
import lifeSciencesLithuaniaLogo from "../assets/logos/partners/life-sciences-lithuania.png";
import startupLithuaniaLogo from "../assets/logos/partners/startup-lithuania.png";
import vilniausUniversitetasLogo from "../assets/logos/partners/vilniaus-universitetas.png";
import vilniusTechLogo from "../assets/logos/partners/vilnius-tech.png";

export const kodelVilniusHero = {
  eyebrow: "Kodėl Vilnius",
  title: "Vienas konkurencingiausių miestų inovacijų verslui Baltijos regione.",
  description:
    "Vilnius siūlo talentus, augančią inovacijų ekosistemą ir strategiškai patogią vietą verslo plėtrai Europoje.",
  primaryCta: { label: "Susisiekti", href: "/kontaktai" },
  secondaryCta: { label: "Peržiūrėti VCIIP Tech", href: "/tech" },
};

export const kodelVilniusAdvantages = {
  eyebrow: "Pagrindiniai privalumai",
  title: "Kodėl investuotojai renkasi Vilnių?",
  items: [
    {
      number: "01",
      title: "Talentai",
      body: "Aukštos kvalifikacijos specialistai, universitetai ir sparčiai augantis technologijų sektorius.",
    },
    {
      number: "02",
      title: "ES rinka",
      body: "Patogi prieiga prie Europos Sąjungos rinkos ir tarptautinių logistikos maršrutų.",
    },
    {
      number: "03",
      title: "Gyvenimo kokybė",
      body: "Kompaktiškas, saugus ir žalias miestas, patrauklus tarptautinėms komandoms.",
    },
    {
      number: "04",
      title: "Inovacijų ekosistema",
      body: "Mokslo institucijos, verslas ir viešasis sektorius veikia kaip viena sistema.",
    },
  ],
};

export const kodelVilniusTabs = {
  id: "verslo-aplinka",
  eyebrow: "Verslo aplinka",
  titleHighlight: "Vilnius kuria sąlygas",
  titleRest: "ilgalaikiam augimui.",
  intro:
    "Miestas jungia talentus, infrastruktūrą ir institucinę paramą – tai leidžia investuotojams planuoti ne tik startą, bet ir ilgalaikį augimą.",
  tablistLabel: "Verslo aplinkos temos",
  tabs: [
    {
      label: "Gyvenimo kokybė",
      title: "Gyvenimo kokybė",
      intro:
        "Vilnius – kompaktiškas miestas, kuriame patogu gyventi, dirbti ir priimti tarptautines komandas.",
      items: [
        "Kompaktiškas miestas trumpiems susitikimams ir kasdieniam gyvenimui",
        "Tarptautinės mokyklos ir daugkalbė aplinka",
        "Žalios erdvės ir aktyvaus laisvalaikio galimybės",
        "Saugi ir tvarkinga urbanistinė aplinka",
        "Patogi maitinimo ir kultūros infrastruktūra",
        "Auganti tarptautinių specialistų bendruomenė",
      ],
      image: vilniusImage,
    },
    {
      label: "Verslo aplinka",
      title: "Verslo aplinka",
      intro:
        "Stipri darbo rinka, auganti startup ekosistema ir verslui reikalinga infrastruktūra vienoje vietoje.",
      items: [
        "Stiprus IT, gyvybės mokslų ir inžinerijos talentų rezervas",
        "Lanksti darbo rinka ir auganti startup ekosistema",
        "Konkurencingos veiklos sąnaudos lyginant su Vakarų Europa",
        "Platus verslo paslaugų ir konsultacijų tinklas",
        "Augantis biurų ir inovacijų erdvių fondas",
        "Gera infrastruktūra tarptautinėms komandoms",
      ],
      image: modernOfficeImage,
    },
    {
      label: "Miesto ir valstybės partnerystė",
      title: "Miesto ir valstybės partnerystė",
      intro:
        "Vilnius ir valstybės institucijos aktyviai remia inovacijų ir aukštos pridėtinės vertės projektus.",
      items: [
        "Vilniaus miesto savivaldybės palaikymas inovacijoms",
        "Valstybės plėtros ir eksporto programos",
        "Integracija į nacionalinę mokslo politiką",
        "Investicijų pritraukimo agentūros ir institucijos",
        "Stabilus reguliacinis pagrindas ES sistemoje",
        "Ilgalaikis viešojo ir privataus sektoriaus dialogas",
      ],
      image: vciipOverviewImage,
    },
  ],
};

export const kodelVilniusCityLocation = {
  eyebrow: "VCIIP lokacija",
  title: "Strategiškai patogi vieta Vilniuje.",
  intro:
    "VCIIP įsikūręs pačiame Vilniaus mieste – per 30 min. iki senamiesčio, geležinkelio ir autobusų stočių bei tarptautinio oro uosto. Šalia įsikūrę geriausi šalies universitetai, studentų miesteliai ir mokslo centrai.",
  legend: [
    {
      label: "VCIIP Bio",
      symbol: "accent-dot",
    },
    {
      label: "VCIIP Tech",
      symbol: "tech-dot",
    },
    {
      label: "VCIIP klientams aktualios lokacijos",
      symbol: "primary-dot",
    },
    {
      label: "Artimiausios viešojo transporto stotelės",
      symbol: "muted-dot",
    },
    {
      label: "Galimi maršrutai nuo Tarptautinio Vilniaus oro uosto iki VCIIP",
      symbol: "primary-line",
    },
    {
      label: "Magistraliniai ir Europos keliai",
      symbol: "muted-line",
    },
    {
      label: "Geležinkelio kelių (bėgių) tinklas",
      symbol: "dashed-line",
    },
  ],
};

export const kodelVilniusPartners = {
  eyebrow: "Ekosistema",
  title: "Stipri partnerių ir institucijų aplinka.",
  intro:
    "Vilniaus inovacijų ekosistemą palaiko investicijų agentūros, mokslo institucijos ir verslo tinklai, padedantys įmonėms greičiau integruotis į rinką.",
  partners: [
    {
      label: "Investuok Lietuvoje",
      href: "https://investlithuania.com/",
      logo: investLithuaniaLogo,
      logoAlt: "Invest Lithuania",
    },
    {
      label: "Go Vilnius",
      href: "https://www.govilnius.lt/",
      logo: goVilniusLogo,
      logoAlt: "Go Vilnius",
    },
    {
      label: "Vilniaus universitetas",
      href: "https://www.vu.lt/",
      logo: vilniausUniversitetasLogo,
      logoAlt: "Vilniaus universitetas",
    },
    {
      label: "VILNIUS TECH",
      href: "https://vilniustech.lt/",
      logo: vilniusTechLogo,
      logoAlt: "VILNIUS TECH",
    },
    {
      label: "Life Sciences Lithuania",
      href: "https://lithuanianlifesciences.com/",
      logo: lifeSciencesLithuaniaLogo,
      logoAlt: "Life Sciences in Lithuania",
    },
    {
      label: "Startup Lithuania",
      href: "https://www.startuplithuania.com/",
      logo: startupLithuaniaLogo,
      logoAlt: "Startup Lithuania",
    },
  ],
};

export const kodelVilniusCta = {
  title: "Pasikalbėkime apie jūsų planus Vilniuje.",
  description:
    "Padėsime įvertinti, kuri VCIIP teritorija geriausiai atitinka jūsų veiklos poreikius.",
  contactHref: "/kontaktai",
};
