import './App.css'

function App() {
  return (
    <>
      {/* Klavye kullanıcıları için ana içeriğe atlama linki (Uygulama-3) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <div className="site-title">Enes Kızılca</div>
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
          <h1>Enes Kızılca - Kişisel Portfolyo</h1>

          {/* Sadece fotoğraf ve metinleri yan yana dizecek olan ana taşıyıcı */}
          <div className="about-content">
            <figure>
              <img src="/profil.jpg" alt="Enes Kızılca'nın profil fotoğrafı" />
              <figcaption>Enes Kızılca</figcaption>
            </figure>

            {/* Metinleri ve etiketleri tek bir sütun/blok olarak tutacak taşıyıcı */}
            <div className="about-text">
              <h2>Hakkımda</h2>
              <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. DevOps, SRE ve Platform Mühendisliği alanlarına odaklanıyorum. AWS, CI/CD ve tam yığın (full-stack) geliştirme süreçlerinde deneyimliyim.</p>

              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>AWS & Bulut Teknolojileri</li>
                <li>CI/CD Süreçleri</li>
                <li>React Native</li>
                <li>DevOps & SRE</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">

            <article className="project-card">
              <img src="/proje1.jpg" alt="ReklaGram projesi ekran görüntüsü" />
              <h3>ReklaGram</h3>
              <p>Influencer'lar ile markaları buluşturan kapsamlı bir pazarlama platformu.</p>
              <ul className="skill-tags">
                <li>Python</li>
                <li>React</li>
                <li>Docker</li>
                <li>AWS S3</li>
                <li>PostgreSQL</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="/proje2.jpg" alt="Cloud-Native Serverless Voting App ekran görüntüsü" />
              <h3>Serverless Voting App</h3>
              <p>Bulut tabanlı, sunucusuz mimariyle tasarlanmış ölçeklenebilir oylama uygulaması.</p>
              <ul className="skill-tags">
                <li>AWS</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>Python</li>
              </ul>
            </article>

          </div>
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