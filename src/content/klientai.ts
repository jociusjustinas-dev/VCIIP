import biogroupBalticsLogo from "../assets/logos/clients/biogroup-baltics.png";
import biospaceLogo from "../assets/logos/clients/biospace.png";
import biotechaLogo from "../assets/logos/clients/biotecha.png";
import experimenticaLogo from "../assets/logos/clients/experimentica.png";
import fetekLogo from "../assets/logos/clients/fetek.png";
import imunodiagnostikaLogo from "../assets/logos/clients/imunodiagnostika.png";
import investavimoProjektaiLogo from "../assets/logos/clients/investavimo-projektai.png";
import klasteris3dLogo from "../assets/logos/clients/klasteris-3d.png";
import lsdihLogo from "../assets/logos/clients/lsdih.png";
import metLogo from "../assets/logos/clients/met.png";
import poliprojektasLogo from "../assets/logos/clients/poliprojektas.png";
import protechLogo from "../assets/logos/clients/protech.png";
import ptvpLogo from "../assets/logos/clients/ptvp.png";
import sanBiotecLogo from "../assets/logos/clients/san-biotec.jpg";
import viltiesZiedasLogo from "../assets/logos/clients/vilties-ziedas.png";

export type ClientEntry = {
  id: string;
  name: string;
  categories: string[];
  legalName: string;
  description: string;
  hasLogo: boolean;
  kind: "company" | "cluster";
  logo?: string;
  logoAlt?: string;
  website?: string;
};

export const klientaiCompanies: ClientEntry[] = [
  {
    id: "poliprojektas",
    name: "Poliprojektas",
    categories: ["Nauji gamybos procesai, medžiagos ir technologijos"],
    legalName: "UAB Poliprojektas",
    description:
      "Pagrindinės įmonės veiklos kryptys:\npastatų ir statinių gaisrinės saugos esminiai sprendimai, modeliavimas, stacionarių gaisro gesinimo ir automatizavimo sistemų projektavimas ir instaliavimas.\nVCIIP vykdoma veikla:\nnaujos kartos automatinių gaisro gesinimo sistemų kūrimas ir tobulinimas pasitelkiant bandymus ir gaisrinių procesų modeliavimo/simuliavimo metodus.\nDaugiau informacijos -> http://www.poliprojektas.lt/",
    hasLogo: true,
    logo: poliprojektasLogo,
    logoAlt: "Poliprojektas",
    kind: "company",
  },
  {
    id: "experimentica",
    name: "Experimentica",
    categories: ["Sveikatos technologijos ir biotechnologijos"],
    legalName: "UAB Experimentica",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nakių vaistų ikiklinikiniai tyrimai farmacinėms ir biotechnologinėms įmonėms.\nVCIIP vykdoma veikla:\ndirbtinio intelekto algoritmų kūrimas akių ikiklinikiniams angiogenetinių mechanizmų tyrimams.\nDaugiau informacijos -> https://experimentica.com/",
    hasLogo: true,
    logo: experimenticaLogo,
    logoAlt: "Experimentica",
    kind: "company",
  },
  {
    id: "san-biotec",
    name: "San Biotec",
    categories: ["Sveikatos technologijos ir biotechnologijos", "Agroinovacijos ir maisto technologijos"],
    legalName: "UAB Sanobiotec R&D",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nmoksliniai tyrimai ir technologinės ekoinovacijos, susijusios su inovatyvių produktų kūrimu sveikatingumo ir vaistinių preparatų rinkoms.\nVCIIP vykdoma veikla:\nfitocheminių medžiagų išskyrimas ir gryninimas, jų naudojimas medicinos ir sveikatos tikslais, maisto papildų ir plataus vartojimo produktų gamyba.\nDaugiau informacijos -> http://sanobiotec.com",
    hasLogo: true,
    logo: sanBiotecLogo,
    logoAlt: "San Biotec",
    kind: "company",
  },
  {
    id: "biotecha",
    name: "Biotecha",
    categories: ["Sveikatos technologijos ir biotechnologijos"],
    legalName: "UAB Biotecha",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nIlgametė patirtis gyvybės mokslų, farmacijos, maisto ir gėrimų gamybos srityje.\nVCIIP vykdoma veikla:\nsveikatos technologijos ir biotechnologijos medžiagų bei produktų sandėliavimo, aptarnavimo, taip pat parengiamoji ir kita su bioprocesų vystymu susijusi veikla, vandens gryninimo sistemų inžinerija.\nDaugiau informacijos -> https://www.biotecha.lt/",
    hasLogo: true,
    logo: biotechaLogo,
    logoAlt: "Biotecha",
    kind: "company",
  },
  {
    id: "biogroup-baltics",
    name: "Biogroup Baltics",
    categories: ["Sveikatos technologijos ir biotechnologijos"],
    legalName: "UAB Biogroup Baltics",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nVienija gyvybės mokslų ir medicinos prietaisų sektoriuose veikiančias įmones\nVCIIP vykdoma veikla:\nBiogroup Baltics veikia kaip grupės centrinis operatorius, užtikrinantis svarbiausias funkcijas, kurios leidžia dukterinėms įmonėms koncentruotis į veiklos augimą, klientų aptarnavimą ir inovacijas biotechnologijos, medicinos prietaisų ir sveikatos priežiūros, gamybos, platinimo ir mažmeninės prekybos srityse.\nDaugiau informacijos -> https://biogroupbaltics.lt/",
    hasLogo: true,
    logo: biogroupBalticsLogo,
    logoAlt: "Biogroup Baltics",
    kind: "company",
  },
  {
    id: "protech",
    name: "Protech",
    categories: ["Energetika ir tvari aplinka"],
    legalName: "VšĮ Perspektyvinių technologijų taikomųjų tyrimų institutas",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nMoksliniai tyrimai ir mokslinės paslaugos fotoelektros technologijų srityje; atsinaujinančios energijos ir energijos taupymo technologijos; elektronikos, mikroelektronikos, jutiklių technologijų ir produktų plėtra pramonės, atsinaujinančios energijos bei tvarių aplinkos technologijų kūrimo bei taikymo pramonėje sektoriuose.\nVCIIP vykdoma veikla:\nFotoelektros technologijų plėtra ir pritaikymas pramonėje.\nDaugiau informacijos: https://protechnology.lt/",
    hasLogo: true,
    logo: protechLogo,
    logoAlt: "Protech",
    kind: "company",
  },
  {
    id: "met",
    name: "Met.",
    categories: ["Energetika ir tvari aplinka"],
    legalName: "UAB Modernios E-Technologijos",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nNaujų atsinaujinančių saulės energijos produktų, šiluminės energijos taupymo ir kaupimo sprendimų, pritaikytų konkrečiam panaudojimui pramoninėje ir gyvenamojoje aplinkoje, kūrimas ir vystymas. Nestandartinių saulės modulių gamyba, integravimui į pastatus, apšvietimo sprendimus bei kitas aplikacijas. Naujų medžiagų, skirtų pažangių savybių dangoms, statybų ir kitiems sektoriams kūrimas.\nVCIIP vykdoma veikla:\nNaujų atsinaujinančių energijos šaltinių, energijos taupymo ir kaupimo sprendimų kūrimas\nDaugiau informacijos -> https://met.lt/",
    hasLogo: true,
    logo: metLogo,
    logoAlt: "Met.",
    kind: "company",
  },
  {
    id: "investavimo-projektai",
    name: "Investavimo Projektai",
    categories: ["Nauji gamybos procesai, medžiagos ir technologijos"],
    legalName: "UAB Investavimo projektai valdoma 5 įmonių grupė",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nBIM modelių kūrimas projektuojant pastatų inžinerines sistemas; priešgaisriniai bandymai, užsienio laboratorijose, kitose akredituotose ir (ar) notifikuotose įstaigose atliktų bandymų techninis vertinimas; esminiai pastatų ir statinių gaisrinės saugos sprendimai, jų modeliavimas; aktyviųjų gaisrinės saugos inžinerinių sistemų instaliavimas ir eksploatacija; priešgaisrinės saugos MTEP veiklų įgyvendinimas ir naujų produktų tyrimas.\nVCIIP vykdoma veikla:\nskaitmeninės statybos plėtojimo produktų prototipų kūrimas, taikant juos pastatų specialiųjų inžinerinių sistemų įgyvendinimo grandinėms.",
    hasLogo: true,
    logo: investavimoProjektaiLogo,
    logoAlt: "Investavimo Projektai",
    kind: "company",
  },
  {
    id: "inovatyvios-imuno-diagnostikos-centras",
    name: "Inovatyvios imuno diagnostikos centras",
    categories: ["Sveikatos technologijos ir biotechnologijos"],
    legalName: "UAB Imunodiagnostika",
    description:
      "Pagrindinės įmonės veiklos kryptys:\nPažangi medicinos inžinerija ankstyvai diagnostikai ir gydymui; inovacijos sveikatos srityje, siekiant pagerinti labai sparčiai augančių ligų, tokių kaip alergija ir infekcinės ligos diagnostiką ir gydymą; medicininės ir laboratorinės technikos, įrenginių, bei priemonių gamyba ir prekyba.\nVCIIP vykdoma veikla:\nMolekulinės technologijos medicinai ir biofarmacijai; moksliniai tyrimai naujų biotechnologinių produktų kūrimui; naujų diagnostinių sistemų, skirtų alergijos diagnostikai in vitro metodais, kūrimas; pažangi medicinos inžinerija ankstyvai diagnostikai ir gydymui; inovacijų sveikatos srityje kūrimas ir vystymas.\nDaugiau informacijos -> https://allergomedica.lt/",
    hasLogo: true,
    logo: imunodiagnostikaLogo,
    logoAlt: "Inovatyvios imuno diagnostikos centras",
    kind: "company",
  },
];

export const klientaiClusters: ClientEntry[] = [
  {
    id: "fetek",
    name: "FETEK",
    categories: [
      "Fotoelektros technologijų klasteris",
      "Fotoelektros technologijų klasteris įkurtas 2008 m. ir vienija pramonės bei mokslinių tyrimų ir technologinės plėtros įstaigas. Klasterio tikslas – konsoliduoti Lietuvos įmones ir mokslinių tyrimų institucijas, veikiančias fotoelektros technologijų sektoriuje, siekiant padidinti nacionalinio fotoelektros sektoriaus tvarumą ir konkurencingumą.",
    ],
    legalName: "",
    description: "Daugiau informacijos -> https://fetek.lt/",
    hasLogo: true,
    logo: fetekLogo,
    logoAlt: "FETEK",
    kind: "cluster",
  },
  {
    id: "vilties-iedas",
    name: "Vilties žiedas",
    categories: ["Pažangių ortopedijos ir reabilitacijos priemonių klasteris"],
    legalName: "",
    description: "Daugiau informacijos -> http://viltiesziedas.lt/",
    hasLogo: true,
    logo: viltiesZiedasLogo,
    logoAlt: "Vilties žiedas",
    kind: "cluster",
  },
  {
    id: "lsdih",
    name: "LSDIH",
    categories: [
      "Gyvybės mokslų skaitmeninių inovacijų centro klasteris",
      "Gyvybės mokslų skaitmeninių inovacijų centro klasteris įkurtas 2019 m. Tai verslo ir mokslinių tyrimų partnerystės platforma, skirta skaitmeninių inovacijų skatinimui gyvybės mokslų sektoriuje, jungianti mokslinių tyrimų, verslo ir viešojo sektoriaus institucijas bei organizacijas.",
      "Klasteris veiklą plėtoja Vilniaus miesto inovacijų pramonės parke, ypatingą dėmesį skirdamas biochemijos, biotechnologijų, molekulinės biologijos, genetikos, neurobiologijos, molekulinės medicinos, švariųjų technologijų ir informacinių technologijų srityse veikiančių įmonių klasterizacijai ir bendradarbiavimo stiprinimui.",
    ],
    legalName: "",
    description: "Daugiau informacijos -> http://lsdih.eu",
    hasLogo: true,
    logo: lsdihLogo,
    logoAlt: "LSDIH",
    kind: "cluster",
  },
  {
    id: "ptvp-klasteris",
    name: "Pažangios terapijos klasteris",
    categories: [
      "Pažangios terapijos vaistinių preparatų, kitų sveikatos technologijų ir biotechnologijų tyrimų klasteris",
      "Pažangios terapijos vaistinių preparatų, kitų sveikatos technologijų ir biotechnologijų tyrimų klasteris įkurtas 2024 m. Klasterio koordinatorius - UAB „CMB Medicina”.",
    ],
    legalName: "",
    description:
      "Pažangios terapijos vaistinių preparatų, kitų sveikatos technologijų ir biotechnologijų tyrimų klasteris\nPažangios terapijos vaistinių preparatų, kitų sveikatos technologijų ir biotechnologijų tyrimų klasteris įkurtas 2024 m. Klasterio koordinatorius - UAB „CMB Medicina”.",
    hasLogo: true,
    logo: ptvpLogo,
    logoAlt: "Pažangios terapijos klasteris",
    kind: "cluster",
  },
  {
    id: "klasteris-3d",
    name: "3D spausdinimo klasteris",
    categories: [
      "3D spausdinimo technologijų gyvybės mokslų srityje vystymo klasteris",
      "3D spausdinimo technologijų gyvybės mokslų srityje vystymo klasteris įkurtas 2022 m. Klasterio koordinatorius - UAB „Kamieninių ląstelių tyrimų centras”.",
    ],
    legalName: "",
    description:
      "3D spausdinimo technologijų gyvybės mokslų srityje vystymo klasteris\n3D spausdinimo technologijų gyvybės mokslų srityje vystymo klasteris įkurtas 2022 m. Klasterio koordinatorius - UAB „Kamieninių ląstelių tyrimų centras”.",
    hasLogo: true,
    logo: klasteris3dLogo,
    logoAlt: "3D spausdinimo klasteris",
    kind: "cluster",
  },
  {
    id: "biospace",
    name: "Biospace",
    categories: [
      "Inovatyvių biotechnologijų klasteris „Biospace”",
      "Inovatyvių biotechnologijų klasteris „Biospace” įkurtas 2022 m. Klasterio koordinatorius - UAB „Experimentica”.",
    ],
    legalName: "",
    description:
      "Inovatyvių biotechnologijų klasteris „Biospace”\nInovatyvių biotechnologijų klasteris „Biospace” įkurtas 2022 m. Klasterio koordinatorius - UAB „Experimentica”.",
    hasLogo: true,
    logo: biospaceLogo,
    logoAlt: "Biospace",
    kind: "cluster",
  },
];

export const klientaiAll: ClientEntry[] = [...klientaiCompanies, ...klientaiClusters];

export function clientDisplayName(item: ClientEntry) {
  if (item.name !== "<neturi logo>") return item.name;
  return item.categories[0] ?? "Klientas";
}

const CLIENT_SECTION_LABELS = [
  "Pagrindinės įmonės veiklos kryptys:",
  "VCIIP vykdoma veikla:",
] as const;

const CLIENT_MORE_INFO_PATTERN = /\n?Daugiau informacijos\s*(?:->|:)\s*(https?:\/\/\S+)/i;

export type ClientDescriptionSection = {
  label?: string;
  body: string;
};

function splitClientParagraphs(content: string) {
  const byBlankLine = content
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (byBlankLine.length > 1) return byBlankLine;

  return content
    .split(/\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function parseClientDescription(description: string) {
  const websiteMatch = description.match(CLIENT_MORE_INFO_PATTERN);
  const website = websiteMatch?.[1]?.replace(/[)\].,;]+$/, "");
  const content = description.replace(CLIENT_MORE_INFO_PATTERN, "").trim();
  const sections: ClientDescriptionSection[] = [];

  if (!CLIENT_SECTION_LABELS.some((label) => content.includes(label))) {
    for (const paragraph of splitClientParagraphs(content)) {
      sections.push({ body: paragraph });
    }
    return { sections, website };
  }

  for (const part of content.split(/(?=Pagrindinės įmonės veiklos kryptys:|VCIIP vykdoma veikla:)/)) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const matchedLabel = CLIENT_SECTION_LABELS.find((label) => trimmed.startsWith(label));
    if (matchedLabel) {
      sections.push({
        label: matchedLabel,
        body: trimmed.slice(matchedLabel.length).trim(),
      });
      continue;
    }

    sections.push({ body: trimmed });
  }

  return { sections, website };
}

export const parkPairCta = {
  title: "Planuojate plėtrą? Kviečiame įsikurti VCIIP!",
  description: "Padėsime įvertinti, kuri VCIIP teritorija geriausiai atitinka jūsų veiklos poreikius.",
  primaryCta: { label: "Susisiekti", href: "/kontaktai" },
  bio: {
    label: "VCIIP Bio",
    focus: "Gyvybės mokslai ir inovacijos",
    description: "Gyvybės mokslų, biotechnologijų ir tyrimų organizacijoms, norinčioms augti bendroje inovacijų aplinkoje.",
    href: "/ekosistema",
    ctaLabel: "Plačiau apie VCIIP Bio",
  },
  tech: {
    label: "VCIIP Tech",
    focus: "Technologijos ir pažangi gamyba",
    description: "Pažangios gamybos, technologijų ir inžinerinių sprendimų įmonėms, norinčioms augti bendroje inovacijų aplinkoje.",
    href: "/tech",
    ctaLabel: "Plačiau apie VCIIP Tech",
  },
} as const;

export const scienceInstitutionsNote =
  "VCIIP įsikurs 2 mokslo ir studijų institucijos arba jų filialai.";
