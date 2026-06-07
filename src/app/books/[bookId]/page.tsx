import { books } from "@/data/books";
import { notFound } from "next/navigation";

export default function BookPage({ params }: { params: { bookId: string } }) {
  const book = books.find((b) => b.id === params.bookId);
  if (!book) notFound();

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>{book.title}</h1>
          <p style={{ color: '#f0d078', fontSize: 16 }}>{book.author}</p>
          <p style={{ color: '#b0b8c4', marginTop: 8, fontSize: 15, maxWidth: 600 }}>{book.description}</p>
        </div>
        <a
          href="/books"
          style={{
            color: '#3b82f6',
            textDecoration: 'none',
            fontSize: 15,
          }}
        >
          ← Kutubxonaga qaytish
        </a>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 16,
        padding: 40,
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>📖</div>
        <h2 style={{ fontSize: 24, marginBottom: 8 }}>Kitobni o‘qishga tayyormisiz?</h2>
        <p style={{ color: '#b0b8c4', marginBottom: 24 }}>
          "{book.title}" – {book.author}
        </p>
        <a
          href={book.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#3b82f6',
            color: 'white',
            padding: '14px 36px',
            borderRadius: 30,
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          📖 Kitobni o‘qish ({book.pages} bet)
        </a>
        <p style={{ color: '#7c8493', fontSize: 13, marginTop: 16 }}>
          Kitob yangi tabda ochiladi
        </p>
      </div>
    </div>
  );
}