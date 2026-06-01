import { books } from "@/data/books";
import Link from "next/link";

export default function BooksPage() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>📚 Elektron kitoblar</h1>
        <p style={{ color: '#b0b8c4' }}>Iqtisodiyot bo'yicha elektron kitoblarni varaqlab o'qing</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            style={{
              background: 'rgba(255,255,255,0.05)',
              padding: 28,
              borderRadius: 14,
              textDecoration: 'none',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              gap: 20,
              alignItems: 'center',
              transition: 'all 0.2s',
            }}
          >
            <div style={{ fontSize: 56, flexShrink: 0 }}>{book.coverImage}</div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{book.title}</h2>
              <p style={{ color: '#b0b8c4', fontSize: 14, marginBottom: 8 }}>{book.author}</p>
              <p style={{ color: '#7c8493', fontSize: 13, lineHeight: 1.5 }}>{book.description}</p>
              <span style={{
                display: 'inline-block',
                marginTop: 12,
                background: '#3b82f6',
                color: 'white',
                padding: '6px 16px',
                borderRadius: 16,
                fontSize: 13,
              }}>
                📖 O'qish ({book.pages.length} bet)
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}