import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export const metadata = {
  title: 'EconQuest Pro',
  description: 'Iqtisodiyotni o\'rganish platformasi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="uz">
        <body style={{ margin: 0, fontFamily: 'Segoe UI, system-ui, sans-serif', background: '#1a0533', color: '#e2e8f0', minHeight: '100vh' }}>
          {/* Header */}
          <header style={{ 
            background: 'rgba(0,0,0,0.3)', 
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '12px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100
          }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 20 }}>
              <span style={{ fontSize: 28 }}>📈</span>
              EconQuest <span style={{ color: '#f0d078' }}>Pro</span>
            </Link>
            
            <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <Link href="/dashboard" style={{ color: '#b0b8c4', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Dashboard</Link>
              <Link href="/learn" style={{ color: '#b0b8c4', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Kutubxona</Link>
              <Link href="/tournament" style={{ color: '#b0b8c4', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Turnir</Link>
              <Link href="/challenges" style={{ color: '#b0b8c4', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Keyslar</Link>
              <UserButton afterSignOutUrl="/" />
            </nav>
            <Link href="/books" style={{ color: '#b0b8c4', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>📚 Kitoblar</Link>
          </header>

          {/* Main content */}
          <main style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
            {children}
          </main>

          {/* Footer */}
          <footer style={{ 
            textAlign: 'center', 
            padding: '24px', 
            color: '#7c8493', 
            fontSize: 13,
            borderTop: '1px solid rgba(255,255,255,0.05)'
          }}>
            © 2026 EconQuest Pro. Barcha huquqlar himoyalangan.
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}