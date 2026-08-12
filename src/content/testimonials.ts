export type Testimonial = {
  id: string;
  quote: string;
  excerpt: string;
  name: string;
  role: string;
  company: string;
  photo: string;
};

function excerptFrom(quote: string, max = 200) {
  if (quote.length <= max) return quote;
  const slice = quote.slice(0, max);
  const cut = slice.lastIndexOf(" ");
  return `${slice.slice(0, cut > 0 ? cut : max)}…`;
}

const rawTestimonials = [
  {
    id: "t-1",
    name: "Šarūnas Stumbrys",
    role: "įkūrėjas ir vadovas",
    company: "Biogami",
    photo: "https://vciip.lt/app/uploads/2024/11/S.Stumbrys-140x140-c-default.jpg",
    quote:
      "„Pasaulinė ekologiškų produktų rinka kasmet auga daugmaž po 10 proc. Šioje rinkoje nesame naujokai, per dešimtmetį gana stabiliai įsitvirtinome Lietuvoje, mūsų produktus vis imliau pripažįsta ir užsienio rinkos. Be to, su patirtimi užsiauginome ir tvirtą požiūrį į gamybos procesų kokybę, kurios reikalauja kūdikių maistui keliami ypatingai aukšti reikalavimai. Įžvelgėme ir naujų poreikių, kuriuos galėtų atliepti mūsų vystomi nauji produktai. Natūralu, kad tokiai plėtrai ir augimui mums prireikė naujų namų. Dėl puikios vietos Vilniaus mieste, išvystytos infrastruktūros, stiprios bendruomenės apsisprendėme kurtis būtent VCIIP.”",
  },
  {
    id: "t-2",
    name: "Valdas Urbanavičius",
    role: "vadovas",
    company: "VCIIP partneris",
    photo: "https://vciip.lt/app/uploads/2024/01/V.Urbanavicius-140x140-c-default.jpg",
    quote:
      "„Biofarmacijos rinka yra dinamiška ir sparčiai besivystanti sritis, kurioje pastebimos kelios svarbios tendencijos: biologinės terapijos ir genų inžinerijos augimas, personalizuota medicina, inovacijos bioprocesų technologijose ir pan. Visos šios inovacijos reikalauja didelio bioprocesų lankstumo, tikslumo bei aukštos klasės rizikos valdymo. O VCIIP pasirinkome dėl orientacijos į inovatyvios pramonės plėtrą.”",
  },
  {
    id: "t-3",
    name: "Justinas Ožiūnas",
    role: "vadovas",
    company: "Pentasweet",
    photo: "https://vciip.lt/app/uploads/2023/12/Justinas-Oziunas-e1721044464405-140x140-c-default.jpg",
    quote:
      "„Šiuo metu pasaulyje pagrindinis saldiklis yra tradicinis cukrus (sacharozė), tačiau jo populiarumas pasaulyje mažėja jau 10 metus iš eilės. Matome, kad įprastų saldiklių vietą po truputį užima didelio intensyvumo dirbtiniai saldikliai be kalorijų, tad VCIIP teritorijoje vystysime natūralų saldiklį. O VCIIP pasirinkome dėl lokacijos, resursų ir infrastruktūros.”",
  },
  {
    id: "t-4",
    name: "Edvardas Gandrimas",
    role: "direktorius",
    company: "Domus Naturae",
    photo: "https://vciip.lt/app/uploads/2022/11/Edvardas-Gandrimas_2-scaled-e1667814959127-140x140-c-default.jpeg",
    quote:
      "„Pasaulis sparčiai vystosi, keičiasi technologijos, gyvenimo tempas intensyvėja. Žmogus patiria daug streso, įtampos, kas stipriai veikia jo emocinę aplinką bei fizinę būklę. Sveika mityba, kuri šiandien neįsivaizduojama be maisto papildų, yra viena iš pagrindinių priemonių. Todėl savo plėtrą siejame su VCIIP ekosistema.”",
  },
  {
    id: "t-5",
    name: "Milda Gritėnaitė",
    role: "direktorė",
    company: "CMB medicina",
    photo: "https://vciip.lt/app/uploads/2022/03/M.Gritenaite_CMB-140x140-c-default.png",
    quote:
      "„Dėl „CMB medicina” plėtros būtent Vilniuje – niekada neturėjome abejonių. O pasirinkimą plėtrą planuoti būtent VCIIP sąlygojo keli svarbūs veiksniai: pirmiausia – išplėtota inovacijų parko susisiekimo ir komunikacijų infrastruktūra ir galimybė įsikurti gana greitai, taip pat – sinergija su VCIIP bendruomene.”",
  },
  {
    id: "t-6",
    name: "Andrew Prosser",
    role: "vadovas",
    company: "The British School of Vilnius",
    photo: "https://vciip.lt/app/uploads/2021/10/Andrew-Prosser-140x140-c-default.jpg",
    quote:
      "„Siekdami pasiūlyti lietuvių bei užsienio šeimoms pasaulinės klasės išsilavinimą su jo poreikius atitinkančia infrastruktūra, suplanavome savo plėtrą Vilniaus miesto inovacijų pramonės parke. Šią vietą pasirinkome ne tik dėl ypatingos vietos gamtos apsuptyje, bet ir dėl inovacijų ekosistemos.”",
  },
  {
    id: "t-7",
    name: "Prof. Vladas Algirdas Bumelis",
    role: "vadovas",
    company: "Kamieninių ląstelių tyrimų centras",
    photo: "https://vciip.lt/app/uploads/2021/10/V.A.Bumelis-e1634653622673-140x140-c-default.jpeg",
    quote:
      "„Kamieninių ląstelių tyrimų centras pribrendo plėtrai. Jai rinkomės vietą Vilniuje, nes čia sutelktos didžiausios biotechnologijų kompetencijos Lietuvoje. Mums Vilnius yra strateginė plėtros vieta dėl darbuotojų, logistikos, sąveikos su kitomis mūsų įmonių grupės kompanijomis.”",
  },
  {
    id: "t-8",
    name: "Benas Macijauskas",
    role: "vadovas",
    company: "VCIIP partneris",
    photo: "https://vciip.lt/app/uploads/2021/06/Benas-Macijauskas_2021-140x140-c-default.png",
    quote:
      "„Galimybė įsikurti ir pritaikyti infrastruktūrą savo poreikiams pasitaiko retai, ypač tokioje dėkingoje vietoje. Parke besitelkiančių kūrybingų kompanijų bei mokslo įstaigų artumą matome kaip progą stiprinti verslo-verslo bei mokslo-verslo sinergiją.”",
  },
] as const;

export const testimonials: Testimonial[] = rawTestimonials.map((item) => ({
  ...item,
  excerpt: excerptFrom(item.quote),
}));
