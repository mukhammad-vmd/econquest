import { books } from "@/data/books";
import Link from "next/link";

export default function BooksPage() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>📚 Iqtisodiy kutubxona</h1>
        <p style={{ color: '#b0b8c4' }}>Klassik va zamonaviy iqtisodiy asarlarning elektron versiyalari</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14,
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'white',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{
              background: book.coverColor,
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
            }}>
              📖
            </div>
            <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{book.title}</h2>
              <p style={{ color: '#f0d078', fontSize: 13, marginBottom: 8 }}>{book.author}</p>
              <p style={{ color: '#b0b8c4', fontSize: 13, flex: 1, lineHeight: 1.5 }}>{book.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                <span style={{ color: '#7c8493', fontSize: 12 }}>{book.pages} bet</span>
                <span style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: 16,
                  fontSize: 13,
                  fontWeight: 600,
                }}>O‘qish</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}