export type StrategyItem =
  | { type: "h1" | "h2" | "h3" | "paragraph" | "list"; text: string }
  | { type: "table"; rows: string[][] };

export const strategyItems: StrategyItem[] = [
  {
    "type": "h1",
    "text": "1 dalis. Strategija"
  },
  {
    "type": "h2",
    "text": "1.1. Projekto esmė, tikslai ir KPI"
  },
  {
    "type": "paragraph",
    "text": "VCIIP (Vilniaus miesto inovacijų pramonės parkas) – pirmasis ir vienintelis inovacijoms skirtas pramonės parkas Vilniuje, veikiantis nuo 2018 m. ir turintis valstybei svarbaus ekonomikos projekto statusą (nuo 2015 m.). Parkas orientuotas į aukštą pridėtinę vertę kuriančias veiklas: MTEP, gamybą, gyvybės mokslus ir technologijas."
  },
  {
    "type": "paragraph",
    "text": "Svetainės tikslas – pritraukti investuotojus, mažinant jų neapibrėžtumą ir generuojant kvalifikuotas užklausas. Konkrečiai:"
  },
  {
    "type": "list",
    "text": "aiškiai komunikuoti aukšto lygio investicinį projektą ir jo patikimumą;"
  },
  {
    "type": "list",
    "text": "parodyti infrastruktūros pasirengimą ir ekosistemos stiprumą;"
  },
  {
    "type": "list",
    "text": "diferencijuoti VCIIP nuo tradicinių industrinių ir verslo parkų;"
  },
  {
    "type": "list",
    "text": "nukreipti investuotoją į konkretų veiksmą (kontaktų forma)."
  },
  {
    "type": "paragraph",
    "text": "Pagrindinis KPI: kvalifikuotos investuotojų užklausos (užpildyta kontaktų forma arba tiesioginis kontaktas)."
  },
  {
    "type": "paragraph",
    "text": "Antriniai KPI (matavimui, ne tikslui):"
  },
  {
    "type": "list",
    "text": "Sklypų (availability) sekcijos peržiūros;"
  },
  {
    "type": "list",
    "text": "CTA paspaudimai;"
  },
  {
    "type": "list",
    "text": "PDF atsisiuntimai (jei bus įdiegtas investuotojo dokumentas);"
  },
  {
    "type": "list",
    "text": "Ekosistemos ir infrastruktūros sekcijų peržiūros."
  },
  {
    "type": "h2",
    "text": "1.2. Tikslinė auditorija"
  },
  {
    "type": "paragraph",
    "text": "Pagrindinė auditorija – investuotojai. Tarp vietinių ir užsienio investuotojų diferenciacijos nėra: jų skausmo taškai sutampa. Užsienio įmonės privalo įsteigti dukterinę įmonę Lietuvoje (VCIIP reikalavimas)."
  },
  {
    "type": "paragraph",
    "text": "Auditorijos segmentai:"
  },
  {
    "type": "list",
    "text": "Gyvybės mokslų ir biotechnologijų įmonės;"
  },
  {
    "type": "list",
    "text": "Pažangios pramonės (advanced manufacturing) ir inžinerijos investuotojai;"
  },
  {
    "type": "list",
    "text": "IT ir inžinerinių technologijų kompanijos;"
  },
  {
    "type": "list",
    "text": "Lietuvos augančios technologijų įmonės;"
  },
  {
    "type": "list",
    "text": "Instituciniai stakeholderiai (miestas, valstybė) – kaip patikimumo signalas."
  },
  {
    "type": "paragraph",
    "text": "Pastaba: fintech įmonėms VCIIP neaktualus (joms svarbu miesto centras)."
  },
  {
    "type": "paragraph",
    "text": "Pagrindiniai pain point’ai: neaiškus investavimo procesas; specializuotos infrastruktūros (galios, vandens) neapibrėžtumas; talentų prieinamumas; biurokratijos baimė ir proceso greitis; nežinojimas apie Lietuvą ir Vilnių."
  },
  {
    "type": "paragraph",
    "text": "Antrinė (paslėpta) auditorija: sprendimų priėmėjas, kuris nedalyvavo gyvame susitikime (valdyba, užsienio būstinė). Jis gauna vieną nuorodą ir turi suprasti VCIIP be pardavėjo. Todėl svetainė privalo savarankiškai atsakyti „kodėl Vilnius, kodėl VCIIP, kodėl dabar“ ir pateikti visą paveikslą, ne fragmentą."
  },
  {
    "type": "h2",
    "text": "1.3. Pozicionavimas"
  },
  {
    "type": "paragraph",
    "text": "Valstybės remiama inovacijų ir pažangios pramonės ekosistema – pirmoji ir vienintelė Vilniuje."
  },
  {
    "type": "paragraph",
    "text": "VCIIP nėra tradicinis industrinis ar verslo parkas. Pagrindinė vertė remiasi penkiais ramsčiais:"
  },
  {
    "type": "list",
    "text": "Infrastruktūros pasirengimas;"
  },
  {
    "type": "list",
    "text": "Atrinkta inovacijų ekosistema (klasterizacija);"
  },
  {
    "type": "list",
    "text": "Operatoriaus pagalba viso proceso metu;"
  },
  {
    "type": "list",
    "text": "Strateginė lokacija (miestas, oro uostas, ES prieiga);"
  },
  {
    "type": "list",
    "text": "Valstybės ir miesto parama bei ilgalaikė investicinė aplinka."
  },
  {
    "type": "paragraph",
    "text": "Pagrindinė žinutė: VCIIP suteikia paruoštą infrastruktūrą, prieigą prie inovacijų ekosistemos ir operatoriaus palaikymą aukštos pridėtinės vertės verslams, besikuriantiems Vilniuje."
  },
  {
    "type": "h2",
    "text": "1.4. VCIIP BIO ir TECH: viena svetainė, ne atskiri landingai"
  },
  {
    "type": "paragraph",
    "text": "VCIIP turi dvi teritorijas su skirtingais vaidmenimis. Jų skirtumas perteikiamas per turinį ir naratyvą, bet svetainėje jie lieka sujungti."
  },
  {
    "type": "table",
    "rows": [
      [
        "",
        "VCIIP (Vismaliukai) – BIO",
        "VCIIP plėtra (Liepkalnis) – TECH"
      ],
      [
        "Vaidmuo",
        "Įrodymas / patikimumas",
        "Pardavimas / konversija"
      ],
      [
        "Fokusas",
        "Gyvybės mokslai ir biotech",
        "Pažangi pramonė ir inžinerija"
      ],
      [
        "Naratyvas",
        "Mokslinis patikimumas, talentai, MTEP",
        "Infrastruktūra, pajėgumai, prieinami sklypai"
      ],
      [
        "Žinutė",
        "„Mes tai jau padarėme“",
        "„Štai kur tu gali įsikurti“"
      ],
      [
        "Lankytojo veiksmas",
        "Rodyti (be CTA)",
        "Aukštas (kontaktų forma)"
      ]
    ]
  },
  {
    "type": "paragraph",
    "text": "Sprendimas: viena svetainė. BIO veikia kaip įrodymo sluoksnis, TECH – kaip konversijos šerdis. Atskiri landingai ir ankstyvas „pasirink BIO ar TECH“ šakojimasis NEDAROMI."
  },
  {
    "type": "paragraph",
    "text": "Pagrindimas:"
  },
  {
    "type": "list",
    "text": "BIO neturi savarankiško veiksmo. Jo tikslas grynai parodyti patirtį. BIO yra ne produktas, o argumentas. Argumentas, atskirtas nuo to, ką jis turi įrodyti, praranda galią."
  },
  {
    "type": "list",
    "text": "Įrodymas turi būti šalia pardavimo. Investuotojas, svarstantis TECH, nori įsitikinti, kad VCIIP rimti. BIO sėkmė tą riziką mažina, todėl ji pasiekiama tame pačiame kelyje. Ankstyvas šakojimasis rizikuoja nukreipti TECH pirkėją toliau nuo BIO įrodymo."
  },
  {
    "type": "list",
    "text": "Sprendimų priėmėjas mato visą paveikslą. Viena nuoroda perteikia ir patirtį (BIO), ir galimybę (TECH)."
  },
  {
    "type": "paragraph",
    "text": "Diferenciacija pasiekiama per atskirus naratyvus ir vizualinius akcentus, ne per atskirą navigaciją ar priverstinį pasirinkimą prie įėjimo."
  },
  {
    "type": "h2",
    "text": "1.6. Kalbos strategija (LT / EN)"
  },
  {
    "type": "paragraph",
    "text": "Svetainė dviem kalbomis: lietuvių ir anglų (automatinis vertimas valdomas TVS)."
  },
  {
    "type": "paragraph",
    "text": "Pirminė kalba – lietuvių. Dauguma įmonių – lietuviško kapitalo, operatorius lietuviškas, viena iš auditorijų – Lietuvos technologijų įmonės. Lietuvių kalba yra numatytoji (default), anglų – lygiavertė versija užsienio investuotojams."
  },
  {
    "type": "paragraph",
    "text": "Tai sąmoningas sprendimas: visą svetainę numatyti angliškai būtų klaida vietinei rinkai. Hero ir pagrindinės žinutės pirma rašomos lietuviškai, po to verčiamos."
  },
  {
    "type": "h2",
    "text": "1.7. Konversijos strategija"
  },
  {
    "type": "paragraph",
    "text": "Pagrindinis veiksmas: kontaktų forma."
  },
  {
    "type": "paragraph",
    "text": "Antrinis: tiesioginis kontaktas su direktoriumi (el. paštas, telefonas). Šiuo metu investuotojai dažniausiai skambina tiesiai direktoriui ir tikėtina, kad taip išliks."
  },
  {
    "type": "paragraph",
    "text": "Rekomenduojami formos laukai:"
  },
  {
    "type": "list",
    "text": "Vardas;"
  },
  {
    "type": "list",
    "text": "Įmonė;"
  },
  {
    "type": "list",
    "text": "El. paštas;"
  },
  {
    "type": "list",
    "text": "Šalis;"
  },
  {
    "type": "list",
    "text": "Dominanti sritis (BIO / TECH / sklypai);"
  },
  {
    "type": "list",
    "text": "Planuojamas laikotarpis (timeline);"
  },
  {
    "type": "list",
    "text": "Žinutė."
  },
  {
    "type": "paragraph",
    "text": "CRM: HubSpot Free – galima opcija užklausoms tvarkyti. Tačiau, esant mažam leadų kiekiui (~17–20 per metus), kuriuos asmeniškai tvarko direktorius, CRM nėra būtinybė – verta vertinti kaip patogumą, ne kaip reikalavimą."
  },
  {
    "type": "h2",
    "text": "1.8. Prieinamų sklypų rodymas"
  },
  {
    "type": "paragraph",
    "text": "Prieinamų sklypų informacija pateikiama naudojant aiškią teritorijos schemą ir paprastą availability sistemą. TECH teritorijos plane pažymimos sklypų zonos, o šalia rodoma aktuali informacija apie plotą, paskirtį ir statusą. Tokia struktūra leidžia investuotojams greitai suprasti, kokios galimybės šiuo metu prieinamos, ir užtikrina lengvą informacijos atnaujinimą WordPress sistemoje."
  },
  {
    "type": "h1",
    "text": "2 dalis. Svetainės struktūra (sitemap)"
  },
  {
    "type": "paragraph",
    "text": "Svetainę sudaro 7 puslapiai (Scope of Work numato iki 10). Limitas naudingas – disciplinuoja struktūrą."
  },
  {
    "type": "h2",
    "text": "2.1. Puslapių hierarchija ir lentelė"
  },
  {
    "type": "paragraph",
    "text": "Navigacija – vieno lygio, be išskleidžiamų submeniu. Geriau klaviatūros navigacijai, mobiliesiems ir ekrano skaitytuvams."
  },
  {
    "type": "table",
    "rows": [
      [
        "Puslapis",
        "URL",
        "Pirminė auditorija",
        "Tikslas"
      ],
      [
        "Pradžia",
        "/",
        "Visi (TECH + sprendimų priėmėjas)",
        "Įtikinti per 30 s, nukreipti į sklypus / kontaktą"
      ],
      [
        "Ekosistema",
        "/ekosistema/",
        "Investuotojas (šildymas)",
        "Social proof: 30+ kompanijų, klasteris (BIO įrodymas)"
      ],
      [
        "Lokacija",
        "/lokacija/",
        "Užsienio sprendimų priėmėjas",
        "Kodėl Vilnius ir kodėl ši vieta"
      ],
      [
        "Prieinami sklypai",
        "/sklypai/",
        "TECH pirkėjas",
        "Parodyti, kas laisva + infrastruktūros pajėgumai"
      ],
      [
        "Operatorius",
        "/operatorius/",
        "Investuotojas (rizikos mažinimas)",
        "Paslaugos, mentorystė, 4 žingsnių procesas"
      ],
      [
        "Apie",
        "/apie/",
        "Stakeholderiai, žiniasklaida",
        "Misija, statusas, timeline (nuslopintas)"
      ],
      [
        "Kontaktai",
        "/kontaktai/",
        "Konvertuojantis lead",
        "Forma + tiesioginiai direktoriaus kontaktai"
      ]
    ]
  },
  {
    "type": "h3",
    "text": "H1 antraščių sistema"
  },
  {
    "type": "table",
    "rows": [
      [
        "Puslapis",
        "H1",
        "Pagrindinis CTA"
      ],
      [
        "Pradžia",
        "Vilniaus inovacijų pramonės parkas",
        "Susisiekti / Žiūrėti sklypus"
      ],
      [
        "Ekosistema",
        "Ekosistema, kurioje verta atsirasti",
        "Tapti dalimi"
      ],
      [
        "Lokacija",
        "Vieta mieste",
        "Susisiekti"
      ],
      [
        "Prieinami sklypai",
        "Prieinami sklypai",
        "Kontaktų forma (sklypui)"
      ],
      [
        "Operatorius",
        "Vedame per visą procesą",
        "Pradėti pokalbį"
      ],
      [
        "Apie",
        "Apie VCIIP",
        "—"
      ],
      [
        "Kontaktai",
        "Susisiekime",
        "Forma"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "2.2. Struktūros sprendimų pagrindimas"
  },
  {
    "type": "h3",
    "text": "Infrastruktūra sulieta su „Sklypais“"
  },
  {
    "type": "paragraph",
    "text": "Investuotojui infrastruktūra ir laisvi sklypai yra vienas klausimas: „ar galiu pasistatyti tai, ko reikia, čia ir dabar?“ Atskyrus juos, atsirastų navigacijos spraga sprendimo momentu. Pardavime infrastruktūrą galima nurodyti per ankerį (/sklypai/#infrastruktura)."
  },
  {
    "type": "h3",
    "text": "„Klientai“ pervadinta į „Ekosistema“"
  },
  {
    "type": "paragraph",
    "text": "Briefe vengiama „klientų“ termino. „Ekosistema“ tinka strategiškai ir AI paieškoms. Puslapis – paprastas, dažnai valdomas: logotipų siena be karuselių."
  },
  {
    "type": "h3",
    "text": "Timeline – „Apie“ puslapyje, nuslopintas"
  },
  {
    "type": "paragraph",
    "text": "Timeline investuotojams neaktualus, bet yra stakeholderių reikalavimas. Sprendimas: kompaktiška juosta „Apie“ puslapio apačioje."
  },
  {
    "type": "h3",
    "text": "Ko sąmoningai nedaroma"
  },
  {
    "type": "list",
    "text": "Atskirų BIO ir TECH puslapių / ankstyvo routingo. Skirtumas perteikiamas per turinį."
  },
  {
    "type": "list",
    "text": "Tinklaraščio („Insights“) ir naujienlaiškio. Srautas ne iš organikos; nėra resurso reguliariam turiniui."
  },
  {
    "type": "h1",
    "text": "3 dalis. Investuotojo kelias ir procesas"
  },
  {
    "type": "paragraph",
    "text": "Vienas didžiausių investuotojo skausmų – neaiškus ir ilgas procesas. Todėl procesas komunikuojamas aiškiai, keturiais žingsniais, tiek „Operatorius“ puslapyje, tiek atskira sekcija namų puslapyje."
  },
  {
    "type": "h2",
    "text": "Investavimo procesas (4 žingsniai)"
  },
  {
    "type": "table",
    "rows": [
      [
        "#",
        "Žingsnis",
        "Ką jis reiškia"
      ],
      [
        "1",
        "Įvertinimas",
        "Aptariame jūsų veiklos planą, poreikius ir tinkamumą VCIIP investavimo kryptims."
      ],
      [
        "2",
        "Pokalbis",
        "Pristatome galimybes: sklypus, infrastruktūros pajėgumus, sąlygas ir operatoriaus paramą."
      ],
      [
        "3",
        "Planavimas",
        "Kartu parenkame sklypą ir padedame suderinti sprendimus su miestu bei valstybe."
      ],
      [
        "4",
        "Įsikūrimas",
        "Lydime per statybų ir veiklos pradžios etapus, teikiame nuolatinį palaikymą."
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Pagrindinis lankytojo kelias"
  },
  {
    "type": "paragraph",
    "text": "Tikslas – sumažinti neapibrėžtumą ir padidinti užklausos ketinimą (inquiry intent)."
  },
  {
    "type": "list",
    "text": "Pradžia: pozicionavimas ir patikimumas (skaičiai, statusas);"
  },
  {
    "type": "list",
    "text": "Ekosistemos ir infrastruktūros įrodymas (BIO + TECH pajėgumai);"
  },
  {
    "type": "list",
    "text": "Aiškus investavimo procesas (4 žingsniai);"
  },
  {
    "type": "list",
    "text": "Prieinamų sklypų peržiūra;"
  },
  {
    "type": "list",
    "text": "Kontaktas (forma) arba tiesioginis skambutis operatoriui."
  },
  {
    "type": "h1",
    "text": "4 dalis. Analitika ir KPI"
  },
  {
    "type": "paragraph",
    "text": "Pagrindinis KPI: kvalifikuotos investuotojų užklausos."
  },
  {
    "type": "h2",
    "text": "Sekami įvykiai (events)"
  },
  {
    "type": "table",
    "rows": [
      [
        "Įvykis",
        "Ką matuoja"
      ],
      [
        "hero_cta_click",
        "Pagrindinio CTA paspaudimai hero sekcijoje"
      ],
      [
        "location_select",
        "Perėjimas į BIO (Ekosistema) ar TECH (Sklypai)"
      ],
      [
        "availability_view",
        "Prieinamų sklypų sekcijos / puslapio peržiūra"
      ],
      [
        "pdf_download",
        "Investuotojo dokumento atsisiuntimas (jei bus)"
      ],
      [
        "contact_submit",
        "Sėkmingai pateikta kontaktų forma"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "Segmentai"
  },
  {
    "type": "list",
    "text": "LT / tarptautinis;"
  },
  {
    "type": "list",
    "text": "BIO / TECH interesas;"
  },
  {
    "type": "list",
    "text": "Desktop / mobile;"
  },
  {
    "type": "list",
    "text": "Šaltinis: organic / direct / renginiai (UTM nuorodos pristatymuose)."
  },
  {
    "type": "paragraph",
    "text": "Įrankiai: GA4 + formos sekimas. Renginiams rekomenduojama naudoti UTM žymėtas nuorodas / QR kodus, kad būtų galima atsekti parodų srautą. HubSpot – opcija."
  },

];
