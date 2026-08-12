import isikurimasHeroImage from "../assets/images/isikurimas-hero.jpg";
import isikurimasProcessImage from "../assets/images/isikurimas-process.jpg";

/** Real document URLs used by Excel CTAs on Įsikūrimas. */
export const isikurimasDocuments = {
  criteria: {
    label: "Investuotojų atrankos kriterijai",
    href: "https://vciip.lt/app/uploads/2025/03/Investor-selection-criteria-2025.pdf",
  },
  development: {
    label: "VCIIP teritorijos vystymo sąlygų aprašas",
    href: "https://vciip.lt/app/uploads/2022/04/VMIPP-Teritorijos-vystymo-sa%CC%A6lygu%CC%A8-apras%CC%86as-2021-05-23.pdf",
  },
  fee: {
    label: "Įsikūrimo mokesčio nustatymo tvarka",
    href: "https://vciip.lt/app/uploads/2025/03/Isikurimo-VCIIP-mokescio-nustatymo-tvarka.pdf",
  },
  applicationForm: {
    label: "Paraiškos forma",
    href: "https://vciip.lt/app/uploads/2025/03/Paraiskos-forma-VCIIP-2025.docx",
  },
  strategy: {
    label: "VCIIP 2025 – 2029 metų vystymo strategija",
    href: "https://vciip.lt/app/uploads/2025/03/VCIIP-vystymo-strategija-2025-2029.pdf",
  },
  plan: {
    label: "VCIIP plėtros planas 2018 m. – 2066 m.",
    href: "https://vciip.lt/app/uploads/2022/04/VMIPP-2018-2066-m.-pletros-planas.pdf",
  },
} as const;

export const isikurimasContent = {
  hero: {
    eyebrow: "Įsikūrimas VCIIP",
    title: "Padedame investuotojams kiekviename žingsnyje",
    description:
      "Nuo paraiškos pateikimo iki pilno įsikūrimo teritorijoje – sužinokite, kaip vyksta įsikūrimas VCIIP ir kokie kriterijai taikomi investuotojams.",
    primaryCta: { label: "Pildyti paraišką", href: "#paraiska" },
    secondaryCta: { label: "Žiūrėti procesą", href: "#procesas" },
    imageSrc: isikurimasHeroImage,
    imageAlt: "Įsikūrimo konsultacija su teritorijos planu",
  },

  criteria: {
    id: "atrankos-kriterijai",
    eyebrow: "Kriterijai",
    title: "Atrankos kriterijai",
    intro:
      "Galimi Vilniaus miesto inovacijų pramonės parko investuotojai ir projektų grupės, kurioms taikomi investuotojų atrankos kriterijai.",
    investorsTitle: "Galimi investuotojai",
    investors: [
      {
        label: "Juridiniai asmenys, vykdantys MTEPI veiklas",
        detail: "Išskyrus mokslo ir studijų institucijas",
      },
      {
        label: "Mokslo ir studijų institucijos",
      },
    ],
    projectsTitle: "Projektų grupės",
    projects: [
      { label: "Bendros infrastruktūros vystymo iniciatyva" },
      { label: "Klasterizacijos vystymo projektas" },
      { label: "Technologinių ir (arba) viešųjų paslaugų vystymo pasiūlymas" },
    ],
    cta: {
      eyebrow: "Dokumentai",
      title: "Investuotojams taikomi atrankos kriterijai",
      description:
        "Susipažinkite su pilnais investuotojų atrankos kriterijais ir įvertinkite, ar jūsų veikla atitinka VCIIP reikalavimus.",
      label: "Sužinoti daugiau",
      href: isikurimasDocuments.criteria.href,
    },
  },

  process: {
    id: "procesas",
    eyebrow: "Procesas",
    title: "Sklandus įsikūrimo procesas",
    intro:
      "Aiškus kandidatų atrankos kelias – nuo paraiškos pateikimo iki sutarčių pasirašymo. Operatorius lydi kiekviename žingsnyje.",
    imageSrc: isikurimasProcessImage,
    imageAlt: "Įsikūrimo proceso planavimas pagal brėžinius",
    steps: [
      {
        number: "01",
        title: "Paraiškos pateikimas",
        body: "Investuotojas pateikia paraišką pagal pasirinktą dalyvavimo modelį: bendros infrastruktūros vystymo iniciatyvą, klasterizacijos vystymo projektą arba technologinių ir (ar) viešųjų paslaugų vystymo pasiūlymą.",
        cta: { label: "Užpildyti paraišką", href: "#paraiska" },
      },
      {
        number: "02",
        title: "Paraiškos vertinimas",
        body: "Paraišką vertina Priežiūros ekspertų grupė pagal investuotojų atrankos kriterijus.\n\nVertinimas vykdomas vadovaujantis VCIIP teritorijos vystymo sąlygų aprašu, patvirtintu 2021 m. birželio 8 d. Priežiūros ekspertų grupės protokolu Nr. 15.\nPriežiūros ekspertų grupė sudaryta 2024 m. balandžio 25 d. Vilniaus miesto savivaldybės administracijos direktoriaus įsakymu Nr. 30-1004/24.",
        cta: {
          label: "Žiūrėti atrankos kriterijus",
          href: isikurimasDocuments.criteria.href,
        },
      },
      {
        number: "03",
        title: "Sprendimas ir įsikūrimo mokestis",
        body: "Priežiūros ekspertų grupė priima sprendimą paraišką patvirtinti arba atmesti. Patvirtinus paraišką, investuotojui nustatomas individualus įsikūrimo mokestis. Vertinant kelias paraiškas kartu, pirmenybė teikiama bendros infrastruktūros vystymo projektams, o mažiausias prioritetas tenka pradedančiųjų įmonių (startuolių) vystymo iniciatyvoms.\n\nĮsikūrimo mokestis nustatomas vadovaujantis Įsikūrimo mokesčio nustatymo tvarka, patvirtinta 2025 m. vasario 10 d. Priežiūros ekspertų grupės protokolu Nr. 25.",
        cta: {
          label: "Įsikūrimo mokesčio tvarka",
          href: isikurimasDocuments.fee.href,
        },
      },
      {
        number: "04",
        title: "Sutarties sąlygų aptarimas",
        body: "Priežiūros ekspertų grupė informuojama apie esmines būsimos sutarties nuostatas.",
        cta: {
          label: "Priežiūros ekspertų grupė",
          href: "#prieziuros-ekspertu-grupe",
        },
      },
      {
        number: "05",
        title: "Sutarčių pasirašymas",
        body: "Pasirašomos trys sutartys, apibrėžiančios atrinktos teritorijos dalies vystymo sąlygas ir priskirtus vystymo rodiklius: įsikūrimo ir veiklos vykdymo sutartis, nekilnojamo turto pirkimo-pardavimo sutartis ir valstybinės žemės subnuomos sutartis.",
      },
    ],
    cta: { label: "Pildyti paraišką", href: "#paraiska" },
  },

  experts: {
    id: "prieziuros-ekspertu-grupe",
    eyebrow: "Ekspertai",
    title: "Priežiūros ekspertų grupė",
    intro:
      "Priežiūros ekspertų grupė prižiūri Parko veiklos rodiklius, teikia pasiūlymus operatoriui dėl strategijos ir priima galutinius sprendimus dėl investuotojų įsikūrimo.",
    competencies: [
      {
        title: "Veiklos rodiklių priežiūra",
        body: "Prižiūrėti, kaip yra įgyvendinami Parko veiklos rodikliai nustatytais terminais, nagrinėti Parko veiklos rodiklių įgyvendinimo vėlavimo priežastis ir galimus jų šalinimo būdus.",
      },
      {
        title: "Strategija ir valdymas",
        body: "Svarstyti ir teikti pasiūlymus Parko operatoriui dėl Parko veiklos strategijos, Parko vystymo ir strateginio valdymo efektyvesniam Parko veiklos rodiklių įgyvendinimui užtikrinti.",
      },
      {
        title: "Investuotojų atranka",
        body: "Vertinti Parko teritorijoje norinčius įsikurti investuotojus pagal atrankos kriterijus ir priimti galutinius sprendimus dėl leidimo jiems įsikurti Parko teritorijoje.",
      },
    ],
    people: [
      {
        name: "Dr. Gediminas Pauliukevičius",
        role: "VšĮ „Northtown Vilnius” direktorius, priežiūros ekspertų grupės pirmininkas",
      },
      {
        name: "Agnė Šataitė",
        role: "Vilniaus miesto savivaldybės administracijos direktoriaus vyresnioji patarėja",
      },
      {
        name: "Lina Koriznienė",
        role: "Vilniaus miesto savivaldybės administracijos Organizacijos vystymo grupės vadovė",
      },
      {
        name: "Gina Jaugielavičienė",
        role: "Lietuvos Respublikos ekonomikos ir inovacijų ministerijos Ekonominės plėtros grupės vadovė",
      },
      {
        name: "Julija Lukaitytė",
        role: "VšĮ „Investuok Lietuvoje“ Gyvybės mokslų komandos vadovė",
      },
      {
        name: "Mangirdas Šapranauskas",
        role: "VšĮ „GO Vilnius“ Verslo skyriaus vadovas",
      },
    ],
  },

  documents: {
    id: "dokumentai",
    title: "Aktualūs dokumentai",
    items: [
      isikurimasDocuments.criteria,
      isikurimasDocuments.development,
      isikurimasDocuments.fee,
      isikurimasDocuments.applicationForm,
      isikurimasDocuments.strategy,
      isikurimasDocuments.plan,
    ],
  },

  application: {
    id: "paraiska",
    eyebrow: "Paraiška",
    title: "Pildykite paraišką",
    description: "Keturi aiškūs žingsniai – nuo atitikimo patikros iki paraiškos pateikimo.",
    steps: [
      {
        number: "01",
        title: "Patikrinkite atitikimą",
        body: "Įsitikinkite, kad jūsų veikla atitinka VCIIP tikslus ir investuotojų atrankos kriterijus.",
        cta: {
          label: "Žiūrėti atrankos kriterijus",
          href: isikurimasDocuments.criteria.href,
        },
      },
      {
        number: "02",
        title: "Atsisiųskite ir užpildykite formą",
        body: "Jei atitikimas yra, užpildykite oficialią VCIIP paraiškos formą.",
        cta: {
          label: "Atsisiųsti paraiškos formą",
          href: isikurimasDocuments.applicationForm.href,
        },
      },
      {
        number: "03",
        title: "Pridėkite privalomus priedus",
        body: "Prie paraiškos pridėkite šiuos dokumentus. Dalį šablonų galite atsisiųsti čia:",
        attachments: [
          {
            label: "Dokumentai, patvirtinantys, kad veiklai netaikomi apribojimai ją vykdyti ar plėsti",
            href: isikurimasDocuments.criteria.href,
          },
          {
            label: "Paskutinių 3 metų finansinės atskaitomybės dokumentai",
            href: isikurimasDocuments.applicationForm.href,
          },
          {
            label: "Finansavimo šaltinius pagrindžiantys dokumentai",
            href: isikurimasDocuments.applicationForm.href,
          },
          {
            label: "Verslo planas, atitinkantis ES finansavimo reikalavimus",
            href: isikurimasDocuments.applicationForm.href,
          },
          {
            label: "Ketinimų protokolas arba jungtinės veiklos sutartis dėl klasterio steigimo (tik klasterio koordinatoriams)",
            href: isikurimasDocuments.applicationForm.href,
          },
          {
            label: "Suteiktų technologinių / viešų paslaugų apimties patvirtinimas (tik technologinių ir viešų paslaugų teikėjams)",
            href: isikurimasDocuments.applicationForm.href,
          },
        ],
      },
      {
        number: "04",
        title: "Pateikite paraišką",
        body: "Užpildytą ir pasirašytą paraišką su priedais pateikite vienu iš būdų:",
        submitChannels: [
          {
            title: "Pristatykite adresu",
            body: "VšĮ „Northtown Vilnius”, Vismaliukų g. 34, Vilnius — asmeniškai, kurjeriu arba paštu.",
          },
          {
            title: "Atsiųskite el. paštu",
            body: "Skenuotą variantą siųskite operatoriaus el. paštu.",
            href: "mailto:info@northtownvilnius.lt",
          },
        ],
      },
    ],
  },

  inquiry: {
    eyebrow: "Kontaktai",
    title: "Turite klausimų? Susisiekime",
    description:
      "Susisiekite tiesiogiai su VCIIP operatoriumi – padėsime įvertinti galimybes ir rasti jūsų veiklai tinkamiausią sprendimą.",
  },
} as const;
