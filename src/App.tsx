import './App.css'

function App() {
  return (
    <>
      {/* Klavye kullanıcıları için ana içeriğe atlama linki (Uygulama-3) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Hakkımda Bölümü (Uygulama-1 ve Uygulama-5) */}
        <section id="hakkimda">
          {/* Sayfada tek h1 olmalı, hiyerarşi buradan başlıyor (Uygulama-2) */}
          <h1>Enes Kızılca - Kişisel Portfolyo</h1>

          <figure>
            {/* Alt metin ekran okuyucular için kritik (Uygulama-2) */}
            <img src="/profil.png" alt="Enes Kızılca'nın profil fotoğrafı" />
            <figcaption>Enes Kızılca</figcaption>
          </figure>

          <h2>Hakkımda</h2>
          <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. DevOps, SRE ve Platform Mühendisliği alanlarına odaklanıyorum. AWS, CI/CD ve tam yığın (full-stack) geliştirme süreçlerinde deneyimliyim.</p>
          <ul>
            <li>AWS & Bulut Teknolojileri</li>
            <li>CI/CD Süreçleri</li>
            <li>React Native & Full-stack Geliştirme</li>
          </ul>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>ReklaGram - Influencer Marketing Platform</h3>
            <p>Influencer'lar ile markaları buluşturan kapsamlı bir pazarlama platformu.</p>
            <ul>
              <li>Python, React, Docker, AWS S3, PostgreSQL</li>
            </ul>
          </article>

          <article>
            <h3>Cloud-Native Serverless Voting App</h3>
            <p>Bulut tabanlı, sunucusuz mimariyle tasarlanmış ölçeklenebilir oylama uygulaması.</p>
            <ul>
              <li>AWS (Lambda, API Gateway), PostgreSQL, React, Python</li>
            </ul>
          </article>
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim">
          <h2>İletişim</h2>
          {/* Formu bir sonraki commit adımında buraya ekleyeceğiz */}
          <p>İletişim formu buraya gelecek.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Enes Kızılca. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App