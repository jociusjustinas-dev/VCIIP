import modernOfficeImage from "../assets/images/modern-office-work.png";
import vilniusImage from "../assets/images/vilnius.webp";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";

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

export const kodelVilniusStrategicLocation = {
  eyebrow: "Lokacija",
  title: "Patogi vieta verslui Europoje.",
  markers: [
    { id: "vilnius", label: "Vilnius", x: 62, y: 58 },
    { id: "klaipeda", label: "Klaipėdos uostas", x: 38, y: 52 },
    { id: "airport", label: "Vilniaus oro uostas", x: 66, y: 54 },
    { id: "rail", label: "Rail Baltica", x: 58, y: 64 },
  ],
  arguments: [
    {
      title: "ES rinkos centras",
      body: "Vilnius yra ES ir euro zonos dalis – tai suteikia tiesioginę prieigą prie 450 mln. vartotojų rinkos.",
    },
    {
      title: "Klaipėdos uostas",
      body: "Artimiausias daugiafunkcis jūrų vartas Baltijos šalyse – svarbus logistikos koridorius eksportui.",
    },
    {
      title: "Vilniaus oro uostas",
      body: "Tiesioginiai skrydžiai į pagrindinius Europos verslo centrus ir tarptautinius hub'us.",
    },
    {
      title: "Rail Baltica",
      body: "Būsimas greitasis geležinkelio koridorius sujungs Vilnių su Varšuva, Ryga ir Berlynu.",
    },
  ],
};

export const kodelVilniusCityLocation = {
  eyebrow: "VCIIP lokacija",
  title: "Strategiškai patogi vieta Vilniuje.",
  intro:
    "VCIIP BIO ir VCIIP TECH teritorijos išdėstytos taip, kad investuotojai galėtų pasinaudoti miesto infrastruktūra, talentais ir logistika.",
  connectivity:
    "Vismaliukai ir Liepkalnis jungiasi su miesto centru, oro uostu ir pagrindiniais keliais – tai leidžia planuoti tiek kasdienį darbą, tiek tarptautinę logistiką.",
  pins: [
    { label: "Miesto centras", left: "54%", top: "42%" },
    { label: "Oro uostas", left: "72%", top: "38%" },
    { label: "VCIIP BIO", left: "48%", top: "56%" },
    { label: "VCIIP TECH", left: "58%", top: "62%" },
    { label: "Universitetai", left: "50%", top: "48%" },
    { label: "Pagrindiniai keliai", left: "62%", top: "52%" },
  ],
};

export const kodelVilniusPartners = {
  eyebrow: "Ekosistema",
  title: "Stipri partnerių ir institucijų aplinka.",
  intro:
    "Vilniaus inovacijų ekosistemą palaiko investicijų agentūros, mokslo institucijos ir verslo tinklai, padedantys įmonėms greičiau integruotis į rinką.",
  partners: [
    { label: "Investuok Lietuvoje", href: "https://investlithuania.com/" },
    { label: "Go Vilnius", href: "https://www.govilnius.lt/" },
    { label: "Vilniaus universitetas", href: "https://www.vu.lt/" },
    { label: "VILNIUS TECH", href: "https://vilniustech.lt/" },
    { label: "Life Sciences Lithuania", href: "https://lithuanianlifesciences.com/" },
    { label: "Startup Lithuania", href: "https://www.startuplithuania.com/" },
  ],
};

export const kodelVilniusCta = {
  title: "Pasikalbėkime apie jūsų planus Vilniuje.",
  description:
    "Padėsime įvertinti, kuri VCIIP teritorija geriausiai atitinka jūsų veiklos poreikius.",
  links: [
    { label: "VCIIP Bio", href: "/ekosistema" },
    { label: "VCIIP Tech", href: "/tech" },
    { label: "Susisiekti", href: "/kontaktai" },
  ],
};
