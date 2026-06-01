"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { books, type Book } from "@/data/books";

export default function BookReader() {
  const params = useParams();
  const router = useRouter(); // <-- QO‘SHILDI
  const bookId = params.bookId as string;
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div style={{ textAlign: 'center', padding: 60 }}>
        <h2>Kitob topilmadi</h2>
        <button onClick={() => router.push('/books')}>← Kitoblarga qaytish</button>
      </div>
    );
  }

  return <BookViewer book={book} />;
}

function BookViewer({ book }: { book: Book }) {
  const totalPages = book.pages.length;
  const totalSpreads = Math.ceil(totalPages / 2);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const router = useRouter();

  const goNext = () => {
    if (currentSpread < totalSpreads - 1) {
      setFlipDirection("next");
      setFlipping(true);
      setTimeout(() => {
        setCurrentSpread((prev) => prev + 1);
        setFlipping(false);
      }, 600);
    }
  };

  const goPrev = () => {
    if (currentSpread > 0) {
      setFlipDirection("prev");
      setFlipping(true);
      setTimeout(() => {
        setCurrentSpread((prev) => prev - 1);
        setFlipping(false);
      }, 600);
    }
  };

  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = leftPageIndex + 1;
  const leftPage = book.pages[leftPageIndex];
  const rightPage = rightPageIndex < totalPages ? book.pages[rightPageIndex] : null;

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px' }}>
      {/* Top navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <button
          onClick={() => router.push('/books')}
          style={{
            background: 'rgba(255,255,255,0.05)',
            color: '#b0b8c4',
            padding: '8px 16px',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
          }}
        >
          ← Kitoblarga qaytish
        </button>
        <span style={{ color: '#b0b8c4', fontSize: 14 }}>
          {leftPageIndex + 1}–{Math.min(rightPageIndex + 1, totalPages)} / {totalPages}
        </span>
      </div>

      {/* 3D Book */}
      <div style={{ perspective: '1500px', marginBottom: 24 }}>
        <div
          style={{
            display: 'flex',
            background: 'linear-gradient(to right, #f5f0e8, #fff8f0)',
            borderRadius: 8,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            minHeight: 600,
            position: 'relative',
            transformStyle: 'preserve-3d',
            overflow: 'hidden',
          }}
        >
          {/* Left page */}
          <div
            style={{
              flex: 1,
              padding: 30,
              borderRight: '1px solid #ddd',
              background: '#faf6ef',
              transformOrigin: 'right center',
              transition: flipping ? 'transform 0.6s ease-in-out' : 'none',
              transform: flipping && flipDirection === 'next' ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              backfaceVisibility: 'hidden',
              overflow: 'auto',
            }}
          >
            {leftPage && <PageContent page={leftPage} pageNumber={leftPageIndex + 1} />}
          </div>

          {/* Right page */}
          <div
            style={{
              flex: 1,
              padding: 30,
              background: '#fff8f0',
              transformOrigin: 'left center',
              transition: flipping ? 'transform 0.6s ease-in-out' : 'none',
              transform: flipping && flipDirection === 'prev' ? 'rotateY(180deg)' : 'rotateY(0deg)',
              backfaceVisibility: 'hidden',
              overflow: 'auto',
            }}
          >
            {rightPage ? (
              <PageContent page={rightPage} pageNumber={rightPageIndex + 1} />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
                Bo'sh sahifa
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={goPrev}
          disabled={currentSpread === 0}
          style={navBtnStyle(currentSpread === 0)}
        >
          ← Oldingi bet
        </button>
        <button
          onClick={goNext}
          disabled={currentSpread >= totalSpreads - 1}
          style={navBtnStyle(currentSpread >= totalSpreads - 1)}
        >
          Keyingi bet →
        </button>
      </div>
    </div>
  );
}

function PageContent({ page, pageNumber }: { page: Book['pages'][0]; pageNumber: number }) {
  if (!page) return null;
  return (
    <div style={{ color: '#2c2c2c', fontSize: 15, lineHeight: 1.8 }}>
      {page.title && (
        <h3 style={{ marginBottom: 16, color: '#1a1a1a', borderBottom: '2px solid #c9953a', paddingBottom: 8 }}>
          {page.title}
        </h3>
      )}
      {page.content.map((paragraph, i) => {
        if (paragraph === '') return <br key={i} />;
        if (paragraph.startsWith('•'))
          return <div key={i} style={{ paddingLeft: 12, color: '#444' }}>{paragraph}</div>;
        if (paragraph.match(/^\d+\./))
          return <div key={i} style={{ fontWeight: 500 }}>{paragraph}</div>;
        return <p key={i} style={{ marginBottom: 6 }}>{paragraph}</p>;
      })}
      <div style={{ marginTop: 20, fontSize: 12, color: '#999', textAlign: 'center' }}>
        {pageNumber}
      </div>
    </div>
  );
}

const navBtnStyle = (disabled: boolean) => ({
  background: disabled ? 'rgba(255,255,255,0.05)' : '#3b82f6',
  color: 'white',
  padding: '10px 24px',
  borderRadius: 24,
  border: 'none',
  fontWeight: 600,
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.5 : 1,
});