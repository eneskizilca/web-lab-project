import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

function App() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Erişilebilirlik: Ana içeriğe atla [cite: 2194-2201] */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana icerige atla
      </a>

      {/* HEADER & NAV [cite: 2202-2269] */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Enes Kızılca
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap items-center gap-2">
              <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">İletişim</a></li>
              <li>
                <button onClick={toggleTheme} className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform" aria-label="Tema degistir">
                  <span className="dark:hidden text-sm">&#9790;</span>
                  <span className="hidden dark:inline text-sm">&#9728;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* HAKKIMDA [cite: 2284-2330] */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img src="/profil.png" alt="Enes Kızılca vesikalık fotoğrafı" className="w-40 h-40 rounded-full object-cover shadow-lg" />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. DevOps, SRE ve Platform Mühendisliği alanlarına odaklanıyorum. AWS, CI/CD ve tam yığın (full-stack) geliştirme süreçlerinde deneyimliyim.
              </p>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">AWS</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">CI/CD</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Docker</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Linux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJELER [cite: 2332-2358] */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <Card variant="elevated" image="/proje1.jpg" title="Aynısından B2C Marketplace" imageAlt="Aynısından proje ekranı">
                Kullanıcıları atölyelerle buluşturan, Spring Boot ve Golang mikroservis mimarisine sahip cloud-native üretim pazaryeri.
              </Card>

              <Card variant="elevated" image="/proje2.jpg" title="İndiMi Mobil Uygulaması" imageAlt="İndiMi proje ekranı">
                Öğrencilere şehre özel indirimler sunan, Elazığ merkezli mobil avantaj platformu.
              </Card>

              <Card variant="elevated" image="/proje1.jpg" title="ReklaGram" imageAlt="ReklaGram proje ekranı">
                Influencer'lar ile markaları buluşturan kapsamlı, ölçeklenebilir pazarlama platformu.
              </Card>

            </div>
          </div>
        </section>

        {/* İLETİŞİM [cite: 2360-2419] */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>

            <Alert variant="info" title="Bilgi" className="mb-6">
              İş teklifleri ve projeler için aşağıdaki formu kullanabilirsiniz.
            </Alert>

            <form className="space-y-4 mt-4">
              <Input id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" required />
              <Input id="email" label="E-posta" type="email" placeholder="ornek@mail.com" required />

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"></textarea>
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER [cite: 2421-2433] */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Enes Kızılca. Tüm hakları saklıdır.</p>
        <p className="mt-1">contact@eneskizilca.com</p>
      </footer>
    </div>
  );
}

export default App;