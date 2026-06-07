export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  pdfUrl: string;
  coverColor: string;
  pages: number;
}

export const books: Book[] = [
  {
    id: 'smith-wealth-nations',
    title: 'Xalqlar boyligi',
    author: 'Adam Smith',
    description: 'Erkin bozor iqtisodiyotining asosiy tamoyillari – ko‘rinmas qo‘l, mehnat taqsimoti va davlatning iqtisodiyotdagi roli.',
    pdfUrl: '/books/WealthofNations.pdf',
    coverColor: '#854d0e',
    pages: 520
  },
  {
    id: 'mcconnell-economics',
    title: 'Iqtisodiyot',
    author: 'McConnell, Brue, Flynn',
    description: 'Zamonaviy iqtisodiyot darsligi – mikro va makroiqtisodiyot asoslari, real iqtisodiy maʼlumotlar va amaliy misollar.',
    pdfUrl: '/books/mcconbreconomics.pdf',
    coverColor: '#1e40af',
    pages: 680
  },
  {
    id: 'keynes-general-theory',
    title: 'Bandlik, foiz va pulning umumiy nazariyasi',
    author: 'John Maynard Keynes',
    description: 'Zamonaviy makroiqtisodiyotning asoschisi – samarali talab, multiplikator va davlat aralashuvi.',
    pdfUrl: '/books/keynestheoryofemployment.pdf',
    coverColor: '#065f46',
    pages: 380
  }
];