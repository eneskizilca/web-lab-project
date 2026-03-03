# CSS Kararlari

## 1. Breakpoint Secimi
Mobil öncelikli (mobile-first) bir yaklaşım benimsediğim için varsayılan tasarımları 640px altına göre (mobil) ayarladım. Tabletler için içeriklerin yan yana gelmeye başladığı `min-width: 640px`, masaüstü geniş ekran deneyimi için ise `min-width: 1024px` breakpoint'lerini kullandım. Bu noktalarda form butonları daralıyor ve hakkımda kısmı yatay bir formata geçiyor.

## 2. Layout Tercihleri
Header ve Navigasyon kısmında, elemanların esnek bir şekilde tek eksende hizalanması (mobilde alt alta, masaüstünde yan yana) için **Flexbox** seçtim. Proje kartlarında ise hem satır hem sütun kontrolü gerektiğinden ve içeriğin ekran genişliğine göre `auto-fit` ile otomatik sarmalanmasını istediğimden **CSS Grid** kullandım. `auto-fit`, ekstra media query yazmadan sütunların kendini ekran genişliğine göre ayarlamasını sağladığı için `auto-fill` yerine tercih edildi.

## 3. Design Tokens
Renk paletinde DevOps ve teknoloji temasına uygun, güven veren mavi tonlarını (`#1E3A8A` ve `#2563EB`) primary/secondary olarak belirledim. Spacing (boşluk) skalasını `rem` bazlı oluşturarak tutarlılığı sağladım. Fluid typography için `clamp()` fonksiyonunu `rem` ve `vw` birimleriyle kullanarak yazıların ekran genişliğine göre dinamik ve erişilebilir şekilde ölçeklenmesini sağladım.

## 4. Responsive Stratejiler
CSS kodlarımı tamamen Mobile-First yaklaşımıyla yazdım. Önce `App.css` içinde mobil görünümleri (dar ekran) varsayılan olarak tanımladım, ardından `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile büyük ekranlara özgü kuralları "ekleyerek" ilerledim. Görsellerin taşmasını engellemek için `max-width: 100%` ve `object-fit: cover` özelliklerini kullandım.
