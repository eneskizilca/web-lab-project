import './App.css'

function App() {

  return (
    <div style={{
      textAlign: 'center',
      padding: '2.5rem',
      maxWidth: '600px',
      margin: '3rem auto',
      backgroundColor: '#1a1a2e',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
    }}>
      <h1 style={{ color: '#e2b0ff', marginBottom: '0.25rem' }}>Web Tasarimi ve Programlama</h1>
      <h2 style={{ color: '#64b5f6', marginBottom: '1.5rem' }}>LAB -1</h2>
      <p>Ad Soyad: Enes Kizilca</p>
      <p>Öğrenci No: 235541116</p>
      <p>Yaş: 23</p>
      <p>Adres: Ankara</p>
      <p>Hobiler: Bissiklet sürmek, seyahat etmek</p>
      <p>Olmak istediğim ideal alan: DevOps &amp; Cloud Engineer</p>
    </div>
  )
}

export default App
