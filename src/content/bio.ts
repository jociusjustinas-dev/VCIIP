import ecosystemBioImage from "../assets/images/ecosystem-bio.jpeg";
import modernOfficeImage from "../assets/images/modern-office-work.png";
import processLabImage from "../assets/images/process-lab.jpg";
import processWarmRoomImage from "../assets/images/process-warm-room.png";
import vciipOverviewImage from "../assets/images/vciip-overview.jpg";
import { kontaktaiContent } from "./kontaktai";

const premisesContact = kontaktaiContent.people[1];

export const bioHero = {
  eyebrow: "VCIIP Bio",
  title: "Gyvybės mokslų inovacijų parkas Vilniuje",
  description:
    "VCIIP BIO jau šiandien kuriasi gyvybės mokslų ir pažangios gamybos įmonės, tyrimų ir inovacijų centrai, formuojantys stiprų gyvybės mokslų branduolį Baltijos regione.",
  primaryCta: { label: "Susipažinti su VCIIP Bio", href: "#privalumai" },
  secondaryCta: { label: "Susisiekti", href: "/kontaktai?interest=bio" },
};

export const bioStats = {
  eyebrow: "Rezultatai",
  title: "VCIIP Bio šiandien",
  description:
    "Nuo 2018 metų formuojama gyvybės mokslų ekosistema – čia jau šiandien veikia biotechnologijų lyderiai, mokslinių tyrimų centrai ir organizacijos, kuriančios pasaulinio lygmens inovacijas.",
  items: [
    { value: "280+ mln. €", label: "pritraukta investicijų" },
    { value: "24+", label: "investuotojų" },
    { value: "700+", label: "aukščiausios vertės darbo vietų" },
    { value: "93%", label: "parko užimtumas" },
  ],
};

export const bioTerritory = {
  id: "sklypai",
  eyebrow: "Sklypai",
  title: "VCIIP Bio teritorija",
  intro:
    "VCIIP Bio teritorija Antakalnyje užima 24 ha, apsuptą valstybinių miškų, su pilnai išvystyta inžinerine ir susisiekimo infrastruktūra. Čia jau veikia daugiau nei 20 gyvybės mokslų įmonių ir organizacijų.\n\nVCIIP Bio laisvų sklypų nebėra, tačiau jūsų verslas gali įsikurti VCIIP operatoriaus valdomų inovacijų centrų A ir B patalpose arba VCIIP technologijų vystymo centre HUBIO.",
  highlights: [
    "24 ha teritorija Antakalnyje",
    "Pilnai išvystyta inžinerinė infrastruktūra",
    "20+ gyvybės mokslų įmonių ir organizacijų",
    "Laisvų sklypų nebėra – siūlome patalpas nuomai",
  ],
  primaryCta: { label: "Žiūrėti patalpas nuomai", href: "#patalpos" },
  secondaryCta: { label: "Susisiekti", href: "/kontaktai?interest=bio" },
  imageSrc: ecosystemBioImage,
};

export const bioPremises = {
  id: "patalpos",
  eyebrow: "Patalpos",
  title: "Įsikūrimas VCIIP Bio operatoriaus valdomuose pastatuose",
  items: [
    {
      title: "HUBIO",
      body: "VCIIP Bio širdyje veikia operatoriaus valdomas technologijų vystymo centras HUBIO – tai daugiau nei 7000 kv. m. modernių laboratorijų, gamybos paskirties ir biurų patalpų, pritaikytų gyvybės mokslų įmonėms.",
      availableArea: "~3230 kv. m.",
      isAvailable: true,
      images: [
        { src: processLabImage, alt: "HUBIO laboratorijų erdvė" },
        { src: processWarmRoomImage, alt: "HUBIO gamybos patalpos" },
        { src: modernOfficeImage, alt: "HUBIO biurų erdvė" },
      ],
      link: { label: "northtownvilnius.lt", href: "https://www.northtownvilnius.lt" },
      contact: premisesContact,
    },
    {
      title: "Inovacijų centras A",
      body: "VCIIP Bio veikiantis inovacijų centras A – 1865,22 kv. m. ploto pastatas, skirtas laboratorijų, gamybos ir biurų erdvėms.",
      availableArea: "~268,41 kv. m.",
      isAvailable: true,
      images: [
        { src: modernOfficeImage, alt: "Inovacijų centro A biurai" },
        { src: processLabImage, alt: "Inovacijų centro A laboratorijos" },
        { src: vciipOverviewImage, alt: "Inovacijų centro A teritorija" },
      ],
      link: { label: "Susisiekti dėl centro A", href: "/kontaktai?interest=bio&building=a" },
      contact: premisesContact,
    },
    {
      title: "Inovacijų centras B",
      body: "VCIIP Bio inovacijų centras B – 731,58 kv. m. ploto pastatas, skirtas laboratorijų, gamybos ir biurų erdvėms.",
      availableArea: "0 kv. m.",
      isAvailable: false,
      images: [
        { src: processWarmRoomImage, alt: "Inovacijų centro B patalpos" },
        { src: ecosystemBioImage, alt: "Inovacijų centro B aplinka" },
        { src: processLabImage, alt: "Inovacijų centro B laboratorijos" },
      ],
      link: { label: "Susisiekti dėl centro B", href: "/kontaktai?interest=bio&building=b" },
      contact: premisesContact,
    },
  ],
};

export const bioAdvantages = {
  eyebrow: "Privalumai",
  title: "VCIIP Bio privalumai",
  items: [
    {
      title: "Strategiškai patogi vieta ir susisiekimas",
      body: "VCIIP Bio įsikūręs kiek atokiau nuo miesto šurmulio, tačiau vos per 30 min. lengvai pasieksite Vilniaus senamiestį, geležinkelio, autobusų stotis bei tarptautinį oro uostą. Puikus susisiekimas tiek viešuoju, tiek privačiu transportu, įskaitant ir esamus bei vystomus rekreacinius takus.",
    },
    {
      title: "Išvystyta infrastruktūra greitam įsikūrimui",
      body: "Pramonės parke jau sukurta visapusiška infrastruktūra: nuo inžinerinių tinklų iki susisiekimo komunikacijų. Viskas, ką jums reikia padaryti – įsikurti ir prisijungti.",
    },
    {
      title: "Dalis platesnės VCIIP ekosistemos",
      body: "VCIIP skirtas išskirtinai inovatyvioms įmonėms, veikiančioms sumanios specializacijos srityse. Skatinamas klientų bendruomeniškumas, partnerystė, klasterizacija, siekiant visapusiškos naudos konkurencingoje verslo aplinkoje.",
    },
    {
      title: "Partnerystė su mokslu",
      body: "VCIIP Bio – integruoto mokslo, studijų ir verslo slėnio „Saulėtekis“ programos dalis. Šalia įsikūrę 2 geriausi šalies universitetai ir jų studentų miesteliai, 3 mokslo centrai, 2 mokslo ir technologijų parkai. Puikios sąlygos MTEP infrastruktūros vystymuisi ir žmogiškųjų išteklių valdymui.",
    },
    {
      title: "Nėra infrastruktūros plėtros mokesčio",
      body: "VCIIP – vyriausybės pripažintas valstybinės svarbos ekonominiu projektu, stiprinančiu Lietuvos inovacijų sistemą. Todėl VCIIP besikuriantiems investuotojams infrastruktūros plėtros mokestis nebus taikomas.",
    },
  ],
};

export const bioInfrastructure = {
  id: "infrastruktura",
  eyebrow: "Infrastruktūra",
  title: "Infrastruktūra ir pajėgumai",
  imageSrc: vciipOverviewImage,
  imageAlt: "VCIIP Bio teritorijos infrastruktūra",
  items: [
    {
      label: "Dujotiekis",
      detail: "Pajėgumas iki 600 m³/val.",
    },
    {
      label: "Elektra",
      detail: "Galia iki 12 MW.",
    },
    {
      label: "Vandentiekis",
      detail: "Tiekimas iki 48,5 m³/val.",
    },
    {
      label: "Nutekamieji vandenys",
      detail: "Nuotekų pajėgumas iki 48,5 m³/val.",
    },
    {
      label: "Telekomunikacijos",
      detail: "Duomenų perdavimas iki 1 GB/s.",
    },
    {
      label: "Užstatymo intensyvumas",
      detail: "Koeficientas iki 1,2.",
    },
    {
      label: "Pastatų aukštingumas",
      detail: "Iki 16 metrų (iki 4 aukštų).",
    },
  ],
};

export const bioClients = {
  title: "VCIIP Bio jau įsikūrę",
  description:
    "Įsikūrę VCIIP Bio, prisijungsite prie savo srities lyderių. Tai reiškia sinergiją, naujus bendrus projektus ir postūmį konkurencingoje rinkoje augti drauge - bendradarbiaujant ir dalijantis patirtimi.",
};

export const bioProcess = {
  id: "procesas",
  eyebrow: "Procesas",
  title: "Įsikūrimas VCIIP Bio",
  intro:
    "Įsikūrimo VCIIP procesas vyksta aiškiai apibrėžtais etapais. Kiekviename jų – nuo paraiškos įsikurti pateikimo iki pat pilno įsikūrimo parke – investuotojui padeda VCIIP operatorius.",
  cta: { label: "Sužinoti daugiau", href: "/isikurimas" },
};

export const bioLocation = {
  id: "vieta",
  eyebrow: "Vieta",
  title: "Vieta mieste",
  intro:
    "VCIIP Bio įsikūręs pačiame Vilniaus mieste, 30 min. iki senamiesčio, geležinkelio ir autobusų stočių bei tarptautinio oro uosto. Šalia įsikūrę 2 geriausi šalies universitetai ir jų studentų miesteliai, 3 mokslo centrai, 2 mokslo ir technologijų parkai.",
  legend: [
    { label: "VCIIP Bio", symbol: "accent-dot" },
    { label: "Universitetai ir mokslo centrai", symbol: "primary-dot" },
    { label: "Artimiausios viešojo transporto stotelės", symbol: "muted-dot" },
    { label: "Maršrutai iki oro uosto ir centro", symbol: "primary-line" },
  ],
};

export const bioCta = {
  applicationTitle: "Pateikite paraišką",
  applicationDescription:
    "Padėsime įvertinti galimybes ir rasti jūsų veiklai tinkamiausią sprendimą VCIIP teritorijoje.",
  applicationCta: { label: "Pildyti paraišką", href: "/isikurimas#paraiska" },
  contactTitle: "Turite klausimų? Susisiekime",
  contactDescription: "Susisiekite tiesiogiai su VCIIP operatoriumi.",
};
