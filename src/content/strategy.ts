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
    "text": "1.4. VCIIP BIO ir TECH: skirtingi vaidmenys vienoje ekosistemoje"
  },
  {
    "type": "paragraph",
    "text": "VCIIP komunikacijoje BIO ir TECH teritorijos atlieka skirtingas funkcijas ir sprendžia skirtingus investuotojo poreikius."
  },
  {
    "type": "paragraph",
    "text": "VCIIP BIO (Vismaliukai) veikia kaip gyvybės mokslų ir inovacijų ekosistemos reprezentacinė dalis. Čia svarbiausi elementai – jau veikianti aplinka, mokslinis patikimumas, partnerystės ir bendradarbiavimo tinklas. BIO puslapio tikslas – stiprinti pasitikėjimą ir parodyti, kad VCIIP ekosistema jau egzistuoja."
  },
  {
    "type": "paragraph",
    "text": "VCIIP TECH (Liepkalnis) yra pagrindinė investicinė ir konversijos kryptis. Čia komunikuojama infrastruktūra, prieinami sklypai, inžineriniai pajėgumai ir plėtros galimybės pažangios gamybos bei technologijų įmonėms."
  },
  {
    "type": "paragraph",
    "text": "Todėl svetainės architektūroje:"
  },
  {
    "type": "list",
    "text": "VCIIP TECH tampa pagrindiniu investavimo puslapiu;"
  },
  {
    "type": "list",
    "text": "VCIIP BIO veikia kaip atskiras gyvybės mokslų ekosistemos landingas;"
  },
  {
    "type": "list",
    "text": "Homepage išlaiko bendrą VCIIP pozicionavimą ir nukreipia į abi kryptis pagal lankytojo poreikį."
  },
  {
    "type": "paragraph",
    "text": "Tokia struktūra leidžia aiškiau komunikuoti skirtingus teritorijų vaidmenis, sumažina navigacijos neaiškumą ir suteikia daugiau aiškumo investuotojams."
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
    "text": "Svetainę sudaro 8 puslapiai (Scope of Work numato iki 10). Limitas naudingas – disciplinuoja struktūrą."
  },
  {
    "type": "h2",
    "text": "2.1. Puslapių hierarchija ir lentelė"
  },
  {
    "type": "paragraph",
    "text": "Struktūra remiasi aiškiai atskirtais puslapiais BIO ir TECH kryptims, be gilios hierarchijos ar submeniu."
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
        "Visi investuotojai",
        "Bendras VCIIP pozicionavimas ir nukreipimas į BIO arba TECH"
      ],
      [
        "VCIIP TECH",
        "/tech/",
        "TECH investuotojai",
        "Pagrindinis investavimo ir konversijos puslapis"
      ],
      [
        "VCIIP BIO",
        "/bio/",
        "Gyvybės mokslų organizacijos",
        "Ekosistemos, partnerysčių ir gyvybės mokslų aplinkos pristatymas"
      ],
      [
        "Lokacija",
        "/lokacija/",
        "Užsienio sprendimų priėmėjas",
        "Kodėl Vilnius ir kodėl ši vieta"
      ],
      [
        "Sklypai",
        "/sklypai/",
        "TECH investuotojai",
        "Prieinamų sklypų ir infrastruktūros peržiūra"
      ],
      [
        "Operatorius",
        "/operatorius/",
        "Investuotojas",
        "Investavimo procesas ir operatoriaus pagalba"
      ],
      [
        "Apie",
        "/apie/",
        "Stakeholderiai ir partneriai",
        "Misija, statusas ir projekto kontekstas"
      ],
      [
        "Kontaktai",
        "/kontaktai/",
        "Konvertuojantis lankytojas",
        "Kontaktų forma ir tiesioginis kontaktas"
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
        "Susisiekti / VCIIP TECH / VCIIP BIO"
      ],
      [
        "VCIIP TECH",
        "Infrastruktūra ir investavimo galimybės",
        "Susisiekti / Prieinami sklypai"
      ],
      [
        "VCIIP BIO",
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
    "type": "h3",
    "text": "Navigacija"
  },
  {
    "type": "paragraph",
    "text": "Navigacija – vieno lygio, be išskleidžiamų submeniu. Pagrindiniai elementai:"
  },
  {
    "type": "list",
    "text": "VCIIP TECH;"
  },
  {
    "type": "list",
    "text": "VCIIP BIO;"
  },
  {
    "type": "list",
    "text": "Lokacija;"
  },
  {
    "type": "list",
    "text": "Operatorius;"
  },
  {
    "type": "list",
    "text": "Apie;"
  },
  {
    "type": "list",
    "text": "„Prieinami sklypai“ kaip CTA mygtukas, vedantis į /sklypai/;"
  },
  {
    "type": "list",
    "text": "„Susisiekti“ kaip pagrindinis CTA arba secondary CTA pagal dizaino hierarchiją."
  },
  {
    "type": "paragraph",
    "text": "Atskiros „Prieinama dabar“ nuorodos navigacijoje nenaudojamos – tai dubliuotų „Sklypai“ puslapį ir availability informaciją. Prieinamumas komunikuojamas per CTA, ne kaip atskiras navigacijos elementas."
  },
  {
    "type": "h3",
    "text": "Footer navigacija"
  },
  {
    "type": "list",
    "text": "VCIIP TECH;"
  },
  {
    "type": "list",
    "text": "VCIIP BIO;"
  },
  {
    "type": "list",
    "text": "Lokacija;"
  },
  {
    "type": "list",
    "text": "Operatorius;"
  },
  {
    "type": "list",
    "text": "Apie;"
  },
  {
    "type": "list",
    "text": "Kontaktai;"
  },
  {
    "type": "list",
    "text": "Prieinami sklypai."
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
    "text": "VCIIP BIO kaip atskiras landingas"
  },
  {
    "type": "paragraph",
    "text": "Briefe vengiama „klientų“ termino. VCIIP BIO puslapis pristato ekosistemą, partnerystes ir gyvybės mokslų aplinką – paprastas, dažnai valdomas turinys: logotipų siena be karuselių, patikimumo signalai ir bendradarbiavimo tinklas."
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
    "text": "„Prieinama dabar“ kaip atskiras navigacijos elementas – availability rodoma per „Prieinami sklypai“ CTA ir /sklypai/ puslapį."
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
    "text": "Tikslas – sumažinti neapibrėžtumą ir padidinti investuotojo ketinimą susisiekti."
  },
  {
    "type": "list",
    "text": "Pradžia: bendras VCIIP pozicionavimas ir ekosistemos patikimumas;"
  },
  {
    "type": "list",
    "text": "VCIIP BIO: ekosistemos, partnerių ir gyvybės mokslų aplinkos įrodymas;"
  },
  {
    "type": "list",
    "text": "VCIIP TECH: infrastruktūros, pajėgumų ir investavimo galimybių pristatymas;"
  },
  {
    "type": "list",
    "text": "Prieinami sklypai: aktuali availability informacija ir teritorijos schema;"
  },
  {
    "type": "list",
    "text": "Operatorius: investavimo proceso aiškumas ir pagalba;"
  },
  {
    "type": "list",
    "text": "Kontaktas: užklausa arba tiesioginis kontaktas su operatoriumi."
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
        "Perėjimas į VCIIP BIO arba VCIIP TECH puslapius"
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
