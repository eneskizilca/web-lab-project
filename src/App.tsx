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

          {/* Form başlangıcı (Uygulama-4) */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Enes Kızılca. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App