import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ===== MODULLAR =====
  const history = await prisma.module.upsert({
    where: { id: 'history-module' },
    update: {},
    create: {
      id: 'history-module',
      title: 'Economic History',
      description: 'Iqtisodiyot tarixi: Sanoat inqilobidan tortib Buyuk Depressiyagacha, Bretton-Woods va zamonaviy davr',
      category: 'ECONOMIC_HISTORY',
      order: 1,
    },
  })

  const theory = await prisma.module.upsert({
    where: { id: 'theory-module' },
    update: {},
    create: {
      id: 'theory-module',
      title: 'Economic Theory',
      description: 'Adam Smith, Keynes, Friedman, Hayek — asosiy nazariyalar va ularning rivojlanishi',
      category: 'ECONOMIC_THEORY',
      order: 2,
    },
  })

  const macro = await prisma.module.upsert({
    where: { id: 'macro-module' },
    update: {},
    create: {
      id: 'macro-module',
      title: 'Macroeconomics',
      description: 'GDP, inflyatsiya, ishsizlik, fiskal va monetar siyosat, IS-LM, AD-AS modellar',
      category: 'MACROECONOMICS',
      order: 3,
    },
  })

  const micro = await prisma.module.upsert({
    where: { id: 'micro-module' },
    update: {},
    create: {
      id: 'micro-module',
      title: 'Microeconomics',
      description: 'Talab va taklif, elastiklik, bozor tuzilmalari, o\'yin nazariyasi, iste\'molchi xatti-harakati',
      category: 'MICROECONOMICS',
      order: 4,
    },
  })

  console.log('✅ Modullar yaratildi!')

  // ===== FAKTLAR (50+ har bir modulga) =====
  
  const historyFacts = [
    'Sanoat inqilobi 1760-1840 yillarda Buyuk Britaniyada boshlandi.',
    'Adam Smith 1776-yilda "The Wealth of Nations" asarini nashr etdi.',
    'Bo\'linish mehnati va "ko\'rinmas qo\'l" tamoyili Adam Smith tomonidan ilgari surilgan.',
    'David Ricardo 1817-yilda qiyosiy ustunlik nazariyasini ishlab chiqdi.',
    'Karl Marx 1848-yilda "Kommunistik manifest"ni nashr etdi.',
    'Buyuk Depressiya 1929-yil 29-oktabr — "Qora seshanba"da boshlandi.',
    '1929-1939 yillar oralig\'ida jahon bo\'ylab ishsizlik 25% gacha yetdi.',
    'John Maynard Keynes 1936-yilda "Umumiy nazariya" asarini yozdi.',
    'Bretton-Woods konferensiyasi 1944-yilda 44 davlat ishtirokida o\'tkazildi.',
    'Bretton-Woods tizimida AQSh dollari oltinga $35/oz bog\'landi.',
    'Xalqaro Valyuta Jamg\'armasi (IMF) va Jahon Banki 1944-yilda tashkil etildi.',
    'Marshall rejasi 1948-yilda Yevropaga $13 mlrd yordam berdi.',
    'Smoot-Hawley tarif akti 1930-yilda AQSh import bojlarini oshirdi.',
    '1971-yil Nixon shoki: dollar-oltin aloqasi uzildi.',
    '1973-yil Neft inqirozi: OAPEC neft embargosi, stagflyatsiya.',
    '1980-yillar: Reaganomics va Thatcherizm — davlat aralashuvini kamaytirish.',
    '1997-yil Osiyo moliyaviy inqirozi: Tailand batidan boshlandi.',
    '2008-yil Global moliyaviy inqiroz: Lehman Brothers bankrotligi.',
    '2009-yildan miqdoriy yumshatish (QE) siyosati boshlandi.',
    'Friedrich Hayek 1944-yilda "Yo\'l qulflanishi" asarini yozdi.',
    'Milton Friedman monetarizm maktabining asoschisi.',
    'Bretton-Woods tizimi 1971-yilgacha davom etdi.',
    'Sanoat inqilobi davrida bug\' dvigateli ixtiro qilindi.',
    'Adam Smith erkin bozor va "laissez-faire" tamoyilini himoya qilgan.',
    'Keynes davlat xarajatlari orqali talabni rag\'batlantirishni taklif qilgan.',
    'Great Depression davrida AQShda 9000 dan ortiq bank yopildi.',
    'New Deal dasturi Franklin D. Roosevelt tomonidan amalga oshirildi.',
    'Bretton-Woods konferensiyasi New Hampshire shtatida bo\'lib o\'tdi.',
    'Oltin standart davri 1870-1914 yillarda cho\'qqisiga chiqdi.',
    'Hyperinflation 1923-yilda Germaniyada yuz berdi.',
    'John Stuart Mill klassik iqtisodiyotning yirik namoyandasi.',
    'Alfred Marshall "Principles of Economics" asarini 1890-yilda yozdi.',
    'Irving Fisher pulning miqdor nazariyasini ishlab chiqdi.',
    'Simon Kuznets YaIM hisoblash usulini yaratdi.',
    'Amartya Sen farovonlik iqtisodiyotiga hissa qo\'shdi.',
    'Joseph Schumpeter "ijodiy buzilish" nazariyasini ilgari surdi.',
    'Thorstein Veblen "The Theory of the Leisure Class" asarini yozdi.',
    'Joan Robinson monopolistik raqobat nazariyasiga hissa qo\'shdi.',
    'Paul Samuelson neoklassik sintez asoschisi.',
    'Robert Lucas ratsional kutishlar nazariyasini yaratdi.',
    'Thomas Piketty "21-asrda Kapital" asarini yozdi.',
    'Elinor Ostrom umumiy resurslar boshqaruvi bo\'yicha Nobel oldi.',
    'Daniel Kahneman xulq-atvor iqtisodiyoti asoschisi.',
    'Richard Thaler "nudge" nazariyasi bilan mashhur.',
    'Angus Deaton iste\'mol, qashshoqlik va farovonlik bo\'yicha tadqiqotlar olib bordi.',
    'Raqamli iqtisodiyot 2000-yillardan jadal rivojlana boshladi.',
    'Bitcoin 2009-yilda Satoshi Nakamoto tomonidan yaratildi.',
    'COVID-19 pandemiyasi 2020-yilda global iqtisodiy tanazzulga olib keldi.',
  ]

  const theoryFacts = [
    'Klassik maktab: erkin bozor, "laissez-faire", qiyosiy ustunlik nazariyasi.',
    'Keynescha maktab: agregat talab iqtisodiyotning asosiy harakatlantiruvchisi.',
    'Monetarizm: inflyatsiya har doim pul fenomenidir.',
    'MV = PQ — almashuv tenglamasi (Fisher).',
    'Avstriya maktabi: bozor — bu axborotni qayta ishlash mexanizmi.',
    'Nash muvozanati: har bir o\'yinchi boshqalar strategiyasini hisobga olganda optimal.',
    'Pareto samaradorlik: resurslarni qayta taqsimlash orqali hech kim yomonlashmaydi.',
    'Kobb-Duglas funksiyasi: Y = A·K^α·L^(1-α).',
    'Say qonuni: taklif o\'z talabini yaratadi.',
    'Yangi klassik maktab: ratsional kutishlar, real biznes sikllari.',
    'Yangi Keyns maktabi: narx va ish haqi qat\'iyligi.',
    'Menyu xarajatlari: narxlarni o\'zgartirish xarajatlari.',
    'Samarali ish haqi nazariyasi: yuqori ish haqi unumdorlikni oshiradi.',
    'Kaldor-Hiks samaradorligi: yutuqlar yo\'qotishlarni qoplay oladi.',
    'Kurno modeli: oligopoliyada miqdor raqobati.',
    'Bertrand modeli: oligopoliyada narx raqobati.',
    'Stackelberg modeli: oligopoliyada yetakchi va ergashuvchi.',
    'Mahbuslar dilemmasi: o\'yin nazariyasining klassik namunasi.',
    'Axborot asimmetriyasi: Akerlofning limon bozori.',
    'Salbiy tanlov: sug\'urta bozorida axborot asimmetriyasi.',
    'Ma\'naviy xavf: sug\'urtalangan shaxsning xatti-harakati o\'zgarishi.',
    'Pigou solig\'i: salbiy tashqi ta\'sirlarni bartaraf etish.',
    'Kouz teoremasi: tranzaksiya xarajatlari past bo\'lsa, kelishuv mumkin.',
    'Daromad effekti: narx o\'zgarishi xarid qobiliyatiga ta\'sir qiladi.',
    'Almashtirish effekti: narx o\'zgarishi nisbiy narxlarga ta\'sir qiladi.',
    'Giffen tovarlari: narx oshganda talab ortadigan tovarlar.',
    'Veblen effekti: narx oshishi tovarning statusini oshiradi.',
    'Engel qonuni: daromad oshgan sari oziq-ovqatga xarajat ulushi kamayadi.',
    'Lorenz egri chizig\'i: daromad taqsimotini ko\'rsatadi.',
    'Gini koeffitsienti: 0 (tenglik) dan 1 (tengsizlik) gacha.',
    'Phillips egri chizig\'i: ishsizlik va inflyatsiya o\'rtasidagi bog\'liqlik.',
    'NAIRU: inflyatsiyani tezlashtirmaydigan ishsizlik darajasi.',
    'Rikardian ekvivalentligi: soliq to\'lovchilar kelajakdagi soliq yukini hisobga oladi.',
    'Mundell-Fleming modeli: ochiq iqtisodiyotda IS-LM tahlili.',
    'IS-LM modeli: tovar va pul bozorlari muvozanati.',
    'AD-AS modeli: yalpi talab va yalpi taklif.',
    'Multiplikator effekti: ΔY = k · ΔG.',
    'Akselerator effekti: investitsiyalar YaIM o\'sishiga bog\'liq.',
    'Tobin Q nazariyasi: investitsiyalar bozor qiymati va tiklash qiymati nisbatiga bog\'liq.',
    'Doimiy daromad gipotezasi (Milton Friedman).',
    'Hayotiy sikl gipotezasi (Franco Modigliani).',
    'Likvidlik tuzog\'i: foiz stavkasi nolga yaqin bo\'lganda pul-kredit siyosati samarasiz.',
    'J-krivoy effekti: valyuta qadrsizlangandan keyin savdo balansi avval yomonlashadi.',
    'Marshall-Lerner sharti: valyuta qadrsizlanishi savdo balansini yaxshilash sharti.',
    'Balassa-Samuelson effekti: rivojlanayotgan mamlakatlarda real valyuta kursi oshadi.',
  ]

  const macroFacts = [
    'YaIM = C + I + G + (X - M).',
    'Real YaIM bazaviy yil narxlarida, nominal YaIM joriy narxlarda.',
    'YaIM deflyatori = Nominal YaIM / Real YaIM × 100.',
    'CPI: iste\'mol narxlari indeksi.',
    'PPI: ishlab chiqaruvchilar narxlari indeksi.',
    'Inflyatsiya turlari: talab inflyatsiyasi, xarajat inflyatsiyasi.',
    'Fisher tenglamasi: i = r + π.',
    'Ishsizlik turlari: friksion, tarkibiy, davriy.',
    'Tabiiy ishsizlik darajasi = friksion + tarkibiy ishsizlik.',
    'Okun qonuni: YaIM va ishsizlik o\'rtasidagi teskari bog\'liqlik.',
    'Fiskal siyosat: davlat xarajatlari va soliqlar.',
    'Monetar siyosat: ochiq bozor operatsiyalari, zahira darajasi, diskont stavkasi.',
    'Markaziy bank asosiy funksiyalari: pul emissiyasi, banklar banki, hukumat banki.',
    'Pul agregatlari: M0, M1, M2, M3.',
    'Pul multiplikatori: 1/zahira darajasi.',
    'Miqdoriy yumshatish (QE): markaziy bank aktivlar sotib oladi.',
    'Byudjet taqchilligi: davlat xarajatlari > daromadlari.',
    'Davlat qarzi: yig\'ilgan byudjet taqchilliklari.',
    'Valyuta kursi tizimlari: suzuvchi, qat\'iy, boshqariladigan.',
    'Xalqaro savdo: eksport va import.',
    'Sof eksport = Eksport - Import.',
    'Savdo balansi: tovarlar va xizmatlar eksporti va importi farqi.',
    'To\'lov balansi: joriy hisob + kapital hisob + moliyaviy hisob.',
    'Joriy hisob: savdo balansi + daromadlar + transfertlar.',
    'Crowding out effekti: davlat xarajatlari xususiy investitsiyalarni siqib chiqaradi.',
    'Laffer egri chizig\'i: soliq stavkasi va soliq tushumi o\'rtasidagi bog\'liqlik.',
    'Soliq multiplikatori: -MPC/(1-MPC).',
    'Davlat xarajatlari multiplikatori: 1/(1-MPC).',
    'Avtomatik stabilizatorlar: progressiv soliq, ishsizlik nafaqasi.',
    'Diskretsion fiskal siyosat: hukumat tomonidan qabul qilinadigan maxsus choralar.',
    'Pul-kredit siyosati instrumentlari: foiz stavkasi, zahira talablari.',
    'Inflyatsion targeting: markaziy bank inflyatsiya maqsadini belgilaydi.',
    'Stagflyatsiya: bir vaqtda inflyatsiya va ishsizlik.',
    'Deflyatsiya: narxlarning umumiy pasayishi.',
    'Giperinflyatsiya: juda yuqori inflyatsiya (oyiga 50% dan ortiq).',
    'Iqtisodiy o\'sish modellari: Solow modeli, endogen o\'sish.',
    'Solow qoldig\'i: texnologik taraqqiyot hissasi.',
    'Yalpi ichki jamg\'arma = YaIM - Iste\'mol - Davlat xarajatlari.',
    'Investitsiyalar = Jamg\'armalar (yopiq iqtisodiyotda).',
    'Paradoks tejamkorlik: individual jamg\'arma iqtisodiyotga zarar keltirishi mumkin.',
    'Pulning miqdor nazariyasi: MV = PY.',
    'Fisher effekti: nominal foiz stavkasi = real foiz stavkasi + kutilayotgan inflyatsiya.',
    'Xalqaro Fisher effekti: foiz stavkalari farqi valyuta kursi o\'zgarishiga teng.',
    'Sotib olish qobiliyati pariteti (PPP): bir xil tovarlar bir xil narxda bo\'lishi kerak.',
    'Foiz stavkasi pariteti: foiz stavkalari farqi forward valyuta kursiga teng.',
    'Katta Mac indeksi: PPP ni o\'lchash uchun ishlatiladi.',
    'YaIM deflyatori va CPI farqi: deflyator barcha mahalliy tovarlarni qamrab oladi.',
  ]

  const microFacts = [
    'Talab qonuni: narx oshsa, talab miqdori kamayadi.',
    'Taklif qonuni: narx oshsa, taklif miqdori ortadi.',
    'Muvozanat nuqtasi: Qd = Qs.',
    'Narx elastikligi: Ed = %ΔQd / %ΔP.',
    'Daromad elastikligi: normal tovarlar uchun musbat.',
    'Chiziqli elastiklik: past tovarlar uchun manfiy.',
    'O\'zaro elastiklik: o\'rnini bosuvchi tovarlar uchun musbat.',
    'Iste\'molchi ortiqchaligi: iste\'molchi to\'lashga tayyor narx - haqiqiy narx.',
    'Ishlab chiqaruvchi ortiqchaligi: haqiqiy narx - ishlab chiqaruvchi qabul qilishga tayyor narx.',
    'Mukammal raqobat: ko\'p sonli xaridor va sotuvchilar.',
    'Mukammal raqobatda P = MR = MC.',
    'Monopoliya: yagona sotuvchi, narx belgilovchi.',
    'Monopoliyada MR = MC, P > MC.',
    'Tabiiy monopoliya: masshtab iqtisodi sababli bitta firma samaraliroq.',
    'Oligopoliya: bir nechta yirik firmalar.',
    'Monopolistik raqobat: ko\'p firmalar, differensiatsiyalangan mahsulot.',
    'O\'yin nazariyasi: strategik o\'zaro ta\'sir.',
    'Nash muvozanati: hech kim strategiyasini o\'zgartirishni xohlamaydi.',
    'Mahbuslar dilemmasi: hamkorlik qilmaslik ustun strategiya.',
    'Hukmron strategiya: raqib harakatidan qat\'iy nazar eng yaxshi strategiya.',
    'Tashqi ta\'sirlar: ishlab chiqarish yoki iste\'molning uchinchi shaxslarga ta\'siri.',
    'Pigou solig\'i: salbiy tashqi ta\'sirni ichkilashtirish.',
    'Kouz teoremasi: tranzaksiya xarajatlari past bo\'lsa, bozor yechim topadi.',
    'Jamoat tovarlari: raqobatsiz va cheklanmagan.',
    'Xususiy tovarlar: raqobatli va cheklangan.',
    'Umumiy resurslar: raqobatli va cheklanmagan.',
    'Tragedy of the commons: umumiy resurslarning haddan tashqari ishlatilishi.',
    'Axborot asimmetriyasi: bir tomon boshqasidan ko\'proq ma\'lumotga ega.',
    'Akerlofning limon bozori: sifatsiz tovarlar sifatli tovarlarni siqib chiqaradi.',
    'Signalizatsiya: ma\'lumot uzatish (masalan, diplom).',
    'Skrining: ma\'lumot yig\'ish (masalan, sug\'urta so\'rovnomasi).',
    'Ma\'naviy xavf: sug\'urtalangan shaxs ehtiyotsizroq bo\'ladi.',
    'Prinsipal-agent muammosi: agent prinsipal manfaatiga zid harakat qilishi.',
    'Samarali ish haqi: firma ishchilarni rag\'batlantirish uchun yuqori ish haqi to\'laydi.',
    'Ish haqi differensiallari: kompensatsion farqlar, inson kapitali.',
    'Diskriminatsiya: ish haqi va ishga qabulda nohaqlik.',
    'Kambag\'allik tuzog\'i: nafaqalar ishlashga rag\'batni kamaytiradi.',
    'Lorenz egri chizig\'i: daromad taqsimotini ko\'rsatadi.',
    'Gini koeffitsienti: 0 dan 1 gacha tengsizlik o\'lchovi.',
    'Kuznets egri chizig\'i: iqtisodiy rivojlanish va tengsizlik.',
    'Shaxsiy foydalilik funksiyasi: U = f(x, y).',
    'Byudjet cheklovi: Px·X + Py·Y = I.',
    'Befarqlik egri chizig\'i: bir xil foydalilik beradigan kombinatsiyalar.',
    'MRS = MUx/MUy = Px/Py (optimal tanlov).',
    'Engel egri chizig\'i: daromad va tovar iste\'moli.',
    'Daromad effekti: narx pasayganda xarid qobiliyati ortadi.',
    'Almashtirish effekti: narx pasayganda nisbatan arzon tovar ko\'proq iste\'mol qilinadi.',
    'Giffen tovarlari: daromad effekti almashtirish effektidan kuchli.',
    'Ishlab chiqarish funksiyasi: Q = f(K, L).',
    'Marjinal mahsulot: qo\'shimcha birlikdan olingan qo\'shimcha mahsulot.',
  ]

  const allFacts = [
    { moduleId: history.id, facts: historyFacts },
    { moduleId: theory.id, facts: theoryFacts },
    { moduleId: macro.id, facts: macroFacts },
    { moduleId: micro.id, facts: microFacts },
  ]

  for (const { moduleId, facts } of allFacts) {
    for (let i = 0; i < facts.length; i++) {
      await prisma.fact.upsert({
        where: { id: `${moduleId}-fact-${i}` },
        update: { content: facts[i], order: i + 1 },
        create: {
          id: `${moduleId}-fact-${i}`,
          moduleId,
          content: facts[i],
          order: i + 1,
        },
      })
    }
  }

  console.log(`✅ ${historyFacts.length + theoryFacts.length + macroFacts.length + microFacts.length} ta fakt yaratildi!`)

  // ===== TESTLAR (20+ savol har bir modulga) =====
  
  const quizData = [
    {
      id: 'history-quiz',
      title: 'Economic History Test',
      moduleId: history.id,
      questions: [
        { q: 'Sanoat inqilobi qayerda boshlangan?', opts: ['Buyuk Britaniya', 'Fransiya', 'Germaniya', 'AQSh'], ans: 0 },
        { q: 'Adam Smith qaysi yilda "The Wealth of Nations"ni nashr etdi?', opts: ['1776', '1789', '1750', '1800'], ans: 0 },
        { q: 'Buyuk Depressiya qachon boshlangan?', opts: ['1929', '1933', '1925', '1931'], ans: 0 },
        { q: 'Bretton-Woods konferensiyasi qachon o\'tkazilgan?', opts: ['1944', '1945', '1946', '1947'], ans: 0 },
        { q: '2008 inqirozida qaysi bank bankrot bo\'ldi?', opts: ['Lehman Brothers', 'Goldman Sachs', 'Morgan Stanley', 'JP Morgan'], ans: 0 },
        { q: 'Nixon shoki qachon yuz berdi?', opts: ['1971', '1973', '1969', '1975'], ans: 0 },
        { q: 'Marshall rejasi qancha mablag\' ajratdi?', opts: ['$13 mlrd', '$20 mlrd', '$5 mlrd', '$50 mlrd'], ans: 0 },
        { q: 'Bretton-Woods tizimida dollar qancha oltinga bog\'langan?', opts: ['$35/oz', '$20/oz', '$50/oz', '$100/oz'], ans: 0 },
        { q: 'Keynesning mashhur asari qaysi?', opts: ['The General Theory', 'The Wealth of Nations', 'Capital', 'Principles of Economics'], ans: 0 },
        { q: 'Qora seshanba qaysi sana?', opts: ['1929-10-29', '1929-10-24', '1930-01-01', '1928-12-15'], ans: 0 },
        { q: 'Smoot-Hawley tarifi qachon qabul qilingan?', opts: ['1930', '1929', '1931', '1928'], ans: 0 },
        { q: 'Bretton-Woods konferensiyasi qayerda o\'tkazilgan?', opts: ['New Hampshire', 'New York', 'Washington', 'London'], ans: 0 },
        { q: 'Osiyo moliyaviy inqirozi qachon boshlangan?', opts: ['1997', '1998', '1996', '2000'], ans: 0 },
        { q: 'Neft inqirozi qachon yuz berdi?', opts: ['1973', '1971', '1975', '1980'], ans: 0 },
        { q: 'David Ricardo qaysi nazariyani yaratdi?', opts: ['Qiyosiy ustunlik', 'Mutlaq ustunlik', 'Ko\'rinmas qo\'l', 'Monetarizm'], ans: 0 },
        { q: 'Friedrich Hayek qaysi maktab vakili?', opts: ['Avstriya', 'Keynescha', 'Klassik', 'Monetarizm'], ans: 0 },
        { q: 'Milton Friedman qaysi maktab asoschisi?', opts: ['Monetarizm', 'Keynescha', 'Klassik', 'Avstriya'], ans: 0 },
        { q: 'New Deal dasturi kim tomonidan amalga oshirildi?', opts: ['Roosevelt', 'Hoover', 'Truman', 'Kennedy'], ans: 0 },
        { q: '1923 giperinflyatsiya qayerda yuz berdi?', opts: ['Germaniya', 'Fransiya', 'Buyuk Britaniya', 'AQSh'], ans: 0 },
        { q: 'Bitcoin qachon yaratilgan?', opts: ['2009', '2008', '2010', '2011'], ans: 0 },
      ],
    },
    {
      id: 'theory-quiz',
      title: 'Economic Theory Test',
      moduleId: theory.id,
      questions: [
        { q: 'Keynes multiplikatori formulasi?', opts: ['ΔY = k·ΔG', 'ΔY = ΔC + ΔI', 'Y = C + I + G', 'MV = PQ'], ans: 0 },
        { q: 'Monetarizm asoschisi kim?', opts: ['Milton Friedman', 'John Keynes', 'Adam Smith', 'Hayek'], ans: 0 },
        { q: '"Ko\'rinmas qo\'l" kimning g\'oyasi?', opts: ['Adam Smith', 'David Ricardo', 'Karl Marx', 'Keynes'], ans: 0 },
        { q: 'Almashuv tenglamasi qaysi?', opts: ['MV = PQ', 'Y = C+I+G', 'S = I', 'Qd = Qs'], ans: 0 },
        { q: 'Kobb-Duglas funksiyasi?', opts: ['Y = A·K^α·L^(1-α)', 'Y = C+I+G', 'Q = min(K,L)', 'Y = aL + bK'], ans: 0 },
        { q: 'Nash muvozanati qaysi sohaga tegishli?', opts: ['O\'yin nazariyasi', 'Makroiqtisodiyot', 'Ekonometrika', 'Xalqaro savdo'], ans: 0 },
        { q: 'Pareto samaradorlik nima?', opts: ['Hech kim yomonlashmay yaxshilab bo\'lmaydi', 'Hamma teng', 'Foyda maksimal', 'Xarajat minimal'], ans: 0 },
        { q: 'Say qonuni nima deydi?', opts: ['Taklif o\'z talabini yaratadi', 'Talab taklifni yaratadi', 'Narx doim oshadi', 'Bozor muvozanati'], ans: 0 },
        { q: 'Mahbuslar dilemmasi nima?', opts: ['Hamkorlik qilmaslik ustun strategiya', 'Doim hamkorlik qilish kerak', 'Bozor muvozanati', 'Soliq siyosati'], ans: 0 },
        { q: 'Pigou solig\'i nimaga qarshi?', opts: ['Salbiy tashqi ta\'sirlar', 'Ijobiy tashqi ta\'sirlar', 'Ishsizlik', 'Inflyatsiya'], ans: 0 },
        { q: 'Kouz teoremasi qachon ishlaydi?', opts: ['Tranzaksiya xarajatlari past', 'Davlat aralashuvi ko\'p', 'Monopoliya mavjud', 'Inflyatsiya yuqori'], ans: 0 },
        { q: 'Gini koeffitsienti nimani o\'lchaydi?', opts: ['Daromad tengsizligi', 'Inflyatsiya', 'Ishsizlik', 'YaIM'], ans: 0 },
        { q: 'Lorenz egri chizig\'i nimani ko\'rsatadi?', opts: ['Daromad taqsimoti', 'Inflyatsiya', 'Ishsizlik', 'YaIM'], ans: 0 },
        { q: 'Akerlofning limon bozori nima?', opts: ['Sifatsiz tovarlar sifatlilarni siqib chiqaradi', 'Limon savdosi', 'Bozor muvozanati', 'Narx nazariyasi'], ans: 0 },
        { q: 'Ma\'naviy xavf nima?', opts: ['Sug\'urtalangan shaxs ehtiyotsizroq', 'Bozor riski', 'Inflyatsiya riski', 'Valyuta riski'], ans: 0 },
        { q: 'Yangi Keyns maktabi nima bilan izohlanadi?', opts: ['Narx va ish haqi qat\'iyligi', 'Ratsional kutishlar', 'Monetarizm', 'Klassik nazariya'], ans: 0 },
        { q: 'Menyu xarajatlari nima?', opts: ['Narxlarni o\'zgartirish xarajatlari', 'Restoran xarajatlari', 'Ishlab chiqarish xarajatlari', 'Marketing xarajatlari'], ans: 0 },
        { q: 'Samarali ish haqi nazariyasi nima deydi?', opts: ['Yuqori ish haqi unumdorlikni oshiradi', 'Past ish haqi unumdorlikni oshiradi', 'Ish haqi ahamiyatsiz', 'Ish haqi doim pasayadi'], ans: 0 },
        { q: 'Ratsional kutishlar nazariyasi kimga tegishli?', opts: ['Robert Lucas', 'John Keynes', 'Milton Friedman', 'Adam Smith'], ans: 0 },
        { q: 'Engel qonuni nima deydi?', opts: ['Daromad oshsa oziq-ovqat ulushi kamayadi', 'Narx oshsa talab kamayadi', 'Taklif oshsa narx tushadi', 'Bozor doim muvozanatda'], ans: 0 },
      ],
    },
    {
      id: 'macro-quiz',
      title: 'Macroeconomics Test',
      moduleId: macro.id,
      questions: [
        { q: 'YaIM formulasi?', opts: ['C+I+G+(X-M)', 'C+I+G', 'wages+rent', 'C+S+T'], ans: 0 },
        { q: 'Fisher tenglamasi?', opts: ['i=r+π', 'i=r-π', 'π=i+r', 'r=iπ'], ans: 0 },
        { q: 'Phillips egri chizig\'i nimani ko\'rsatadi?', opts: ['Ishsizlik va inflyatsiya', 'YaIM va foiz', 'Import va eksport', 'Soliq va xarajat'], ans: 0 },
        { q: 'NAIRU nima?', opts: ['Inflyatsiyani tezlashtirmaydigan ishsizlik', 'Tabiiy foiz stavkasi', 'Maksimal YaIM', 'Optimal soliq'], ans: 0 },
        { q: 'IS-LM da IS nimani ifodalaydi?', opts: ['Tovar bozori', 'Pul bozori', 'Mehnat bozori', 'Valyuta bozori'], ans: 0 },
        { q: 'Soliq multiplikatori?', opts: ['-MPC/(1-MPC)', '1/(1-MPC)', 'MPC/(1-MPC)', '1/MPC'], ans: 0 },
        { q: 'Davlat xarajatlari multiplikatori?', opts: ['1/(1-MPC)', '-MPC/(1-MPC)', 'MPC/(1-MPC)', '1/MPC'], ans: 0 },
        { q: 'Pul multiplikatori?', opts: ['1/zahira darajasi', 'zahira darajasi', '1-MPC', 'MPC'], ans: 0 },
        { q: 'Stagflyatsiya nima?', opts: ['Inflyatsiya + ishsizlik', 'Faqat inflyatsiya', 'Faqat ishsizlik', 'Deflyatsiya'], ans: 0 },
        { q: 'Crowding out nima?', opts: ['Davlat xarajatlari xususiy investitsiyalarni siqib chiqaradi', 'Eksport importni siqib chiqaradi', 'Inflyatsiya ishsizlikni siqib chiqaradi', 'Soliqlar daromadni siqib chiqaradi'], ans: 0 },
        { q: 'Laffer egri chizig\'i nimani ko\'rsatadi?', opts: ['Soliq stavkasi va tushum', 'Inflyatsiya va ishsizlik', 'YaIM va vaqt', 'Narx va talab'], ans: 0 },
        { q: 'Okun qonuni nima deydi?', opts: ['YaIM va ishsizlik teskari bog\'liq', 'Narx va talab teskari', 'Taklif va narx to\'g\'ri', 'Foiz va investitsiya teskari'], ans: 0 },
        { q: 'Valyuta kursi tizimlari qaysilar?', opts: ['Suzuvchi, qat\'iy', 'Faqat suzuvchi', 'Faqat qat\'iy', 'Faqat dollar'], ans: 0 },
        { q: 'To\'lov balansi qanday hisoblanadi?', opts: ['Joriy + kapital + moliyaviy', 'Eksport + import', 'YaIM + inflyatsiya', 'Daromad - xarajat'], ans: 0 },
        { q: 'Pul agregati M0 nima?', opts: ['Naqd pul', 'Naqd + depozitlar', 'Faqat depozitlar', 'Barcha pullar'], ans: 0 },
        { q: 'Miqdoriy yumshatish nima?', opts: ['Markaziy bank aktivlar sotib oladi', 'Soliqlarni kamaytirish', 'Davlat xarajatlarini oshirish', 'Foiz stavkasini oshirish'], ans: 0 },
        { q: 'Rikardian ekvivalentligi nima?', opts: ['Soliq to\'lovchilar kelajakdagi soliqni hisobga oladi', 'Soliqlar ahamiyatsiz', 'Davlat qarzi ahamiyatsiz', 'Inflyatsiya ahamiyatsiz'], ans: 0 },
        { q: 'Mundell-Fleming modeli nima?', opts: ['Ochiq iqtisodiyot IS-LM', 'Yopiq iqtisodiyot IS-LM', 'Faqat pul bozori', 'Faqat tovar bozori'], ans: 0 },
        { q: 'Sotib olish qobiliyati pariteti nima?', opts: ['Bir xil tovarlar bir xil narxda', 'Valyuta kursi doim o\'zgaradi', 'Inflyatsiya doim mavjud', 'Narx doim oshadi'], ans: 0 },
        { q: 'Deflyatsiya nima?', opts: ['Narxlarning umumiy pasayishi', 'Narxlarning oshishi', 'Ishsizlik oshishi', 'YaIM oshishi'], ans: 0 },
      ],
    },
    {
      id: 'micro-quiz',
      title: 'Microeconomics Test',
      moduleId: micro.id,
      questions: [
        { q: 'Talab elastikligi formulasi?', opts: ['Ed=%ΔQd/%ΔP', 'Ed=ΔP/ΔQ', 'Ed=P·Q', 'Ed=MC/MR'], ans: 0 },
        { q: 'Mukammal raqobatda narx?', opts: ['P=MR=MC', 'P>MC', 'P<MR', 'P=ATC+markup'], ans: 0 },
        { q: 'Monopoliyada muvozanat?', opts: ['MR=MC, P>MC', 'P=MC', 'P=ATC', 'MR=ATC'], ans: 0 },
        { q: 'Nash muvozanati qaysi soha?', opts: ['O\'yin nazariyasi', 'Makro', 'Mikro', 'Ekonometrika'], ans: 0 },
        { q: 'Kouz teoremasi sharti?', opts: ['Tranzaksiya xarajatlari past', 'Davlat aralashuvi', 'Monopoliya', 'Inflyatsiya'], ans: 0 },
        { q: 'Gini koeffitsienti diapazoni?', opts: ['0 dan 1 gacha', '-1 dan 1 gacha', '0 dan 100 gacha', '1 dan 10 gacha'], ans: 0 },
        { q: 'Byudjet cheklovi formulasi?', opts: ['Px·X + Py·Y = I', 'X + Y = I', 'Px + Py = I', 'X·Y = I'], ans: 0 },
        { q: 'MRS nima?', opts: ['MUx/MUy', 'Px/Py', 'ΔY/ΔX', 'MC/MR'], ans: 0 },
        { q: 'Giffen tovarlari xususiyati?', opts: ['Daromad effekti almashtirishdan kuchli', 'Narx oshsa talab kamayadi', 'Doim normal', 'Doim lyuks'], ans: 0 },
        { q: 'Tabiiy monopoliya sababi?', opts: ['Masshtab iqtisodi', 'Patent', 'Litsenziya', 'Davlat qarori'], ans: 0 },
        { q: 'Kurno modeli nima?', opts: ['Miqdor raqobati', 'Narx raqobati', 'Monopoliya', 'Mukammal raqobat'], ans: 0 },
        { q: 'Bertrand modeli nima?', opts: ['Narx raqobati', 'Miqdor raqobati', 'Monopoliya', 'Mukammal raqobat'], ans: 0 },
        { q: 'Tashqi ta\'sir nima?', opts: ['Uchinchi shaxslarga ta\'sir', 'Firma foydasi', 'Iste\'molchi ortiqchaligi', 'Bozor narxi'], ans: 0 },
        { q: 'Jamoat tovarlari xususiyati?', opts: ['Raqobatsiz va cheklanmagan', 'Raqobatli va cheklangan', 'Faqat davlat ishlab chiqaradi', 'Faqat bozor ishlab chiqaradi'], ans: 0 },
        { q: 'Prinsipal-agent muammosi nima?', opts: ['Agent prinsipal manfaatiga zid harakat qiladi', 'Agent doim yaxshi ishlaydi', 'Prinsipal agentni boshqaradi', 'Bozor muvozanati'], ans: 0 },
        { q: 'Signalizatsiya nima?', opts: ['Ma\'lumot uzatish (diplom)', 'Narx belgilash', 'Reklama', 'Soliq to\'lash'], ans: 0 },
        { q: 'Skrining nima?', opts: ['Ma\'lumot yig\'ish (so\'rovnoma)', 'Narx belgilash', 'Reklama', 'Soliq to\'lash'], ans: 0 },
        { q: 'Veblen effekti nima?', opts: ['Narx oshishi statusni oshiradi', 'Narx oshsa talab kamayadi', 'Narx tushsa talab kamayadi', 'Narx ahamiyatsiz'], ans: 0 },
        { q: 'Ishlab chiqarish funksiyasi nima?', opts: ['Q = f(K, L)', 'Q = P·V', 'Q = C+I+G', 'Q = X-M'], ans: 0 },
        { q: 'Marjinal mahsulot nima?', opts: ['Qo\'shimcha birlikdan olingan mahsulot', 'Umumiy mahsulot', 'O\'rtacha mahsulot', 'Maksimal mahsulot'], ans: 0 },
      ],
    },
  ]

  for (const qz of quizData) {
    await prisma.quiz.upsert({
      where: { id: qz.id },
      update: {
        title: qz.title,
        moduleId: qz.moduleId,
      },
      create: {
        id: qz.id,
        title: qz.title,
        description: `${qz.questions.length} ta savoldan iborat test`,
        difficulty: 'MEDIUM',
        timeLimit: 900,
        moduleId: qz.moduleId,
      },
    })

    // Delete old questions
    await prisma.quizQuestion.deleteMany({ where: { quizId: qz.id } })

    // Create new questions
    for (let i = 0; i < qz.questions.length; i++) {
      await prisma.quizQuestion.create({
        data: {
          quizId: qz.id,
          type: 'MULTIPLE_CHOICE',
          question: qz.questions[i].q,
          options: JSON.stringify(qz.questions[i].opts),
          correct: JSON.stringify([qz.questions[i].ans]),
          order: i + 1,
        },
      })
    }
  }

  console.log(`✅ ${quizData.reduce((sum, q) => sum + q.questions.length, 0)} ta savol yaratildi!`)
  console.log('')
  console.log('🎉 Barcha ma\'lumotlar muvaffaqiyatli qo\'shildi!')
  console.log('📚 4 ta modul')
  console.log(`📖 ${historyFacts.length + theoryFacts.length + macroFacts.length + microFacts.length} ta fakt`)
  console.log(`📝 ${quizData.reduce((sum, q) => sum + q.questions.length, 0)} ta savol`)
  console.log('')
  console.log('Test ID\'lar:')
  console.log('  - /quiz/history-quiz')
  console.log('  - /quiz/theory-quiz')
  console.log('  - /quiz/macro-quiz')
  console.log('  - /quiz/micro-quiz')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())