import { ServiceItem, TestimonialItem, LegalDoc } from "./types";

export const LEGAL_DOCS: Record<LegalDoc["id"], LegalDoc> = {
  kvkk: {
    id: "kvkk",
    title: "KVKK Aydınlatma Metni",
    updatedAt: "01 Temmuz 2026",
    intro:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") kapsamında, NKolay Medya Teknolojileri A.Ş. olarak kişisel verilerinizin gizliliğine ve güvenliğine önem veriyoruz. Bu metin, veri sorumlusu sıfatıyla kişisel verilerinizi hangi amaçlarla işlediğimizi, hangi hukuki sebeplerle ve yöntemlerle topladığımızı ve haklarınızı açıklamaktadır.",
    sections: [
      {
        heading: "1. Veri Sorumlusu",
        body: "NKolay Medya Teknolojileri A.Ş. („Şirket\"), Merkez adresi Zafer, Adile Naşit Blv. No:30, 34513 Esenyurt/İstanbul olan veri sorumlusudur. info@nkolaymedya.com adresi üzerinden bizimle iletişime geçebilirsiniz.",
      },
      {
        heading: "2. İşlenen Kişisel Veriler",
        body: "İletişim formu, teklif talebi ve üyelik süreçlerinde; ad-soyad, e-posta, telefon numarası, şirket bilgileri ve mesaj içeriği gibi kimlik ve iletişim verileriniz işlenebilir. Otomatik sistemler aracılığıyla IP adresi ve çererez verileri gibi teknik veriler de toplanabilir.",
      },
      {
        heading: "3. İşleme Amaçları ve Hukuki Sebepler",
        body: "Verileriniz; sözleşmenin kurulması ve ifası (madde 5/2-c), ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatimizin gerektirmesi (madde 5/2-f) ve açık rızanız (madde 5/1) hukuki sebeplerine dayanarak; müşteri ilişkilerinin yürütülmesi, bilgilendirme, pazarlama ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.",
      },
      {
        heading: "4. Aktarım",
        body: "Kişisel verileriniz, yalnızca hizmet aldığımız tedarikçiler (bulut barındırma, e-posta, analiz) ve yasal zorunluluklar kapsamında yetkili kamu kurumları ile paylaşılabilir. Yurt dışı aktarım yapılması halinde KVKK madde 9 kapsamında gerekli güvenceler sağlanır.",
      },
      {
        heading: "5. Saklama Süresi",
        body: "Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri kadar saklanır. Saklama süresi sona erdiğinde veriler silinir, yok edilir veya anonim hale getirilir.",
      },
      {
        heading: "6. İlgili Kişi Hakları",
        body: "KVKK madde 11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenen veriler hakkında bilgi talep etme, eksik/yanlış işleme halinde düzeltilmesini isteme, silinmesini/yok edilmesini isteme, aktarıldığı üçüncü kişilere bu işlemlerin bildirilmesini isteme ve zararınızın giderilmesini talep etme hakkına sahipsiniz. Başvurularınızı info@nkolaymedya.com adresine iletebilirsiniz.",
      },
    ],
  },
  terms: {
    id: "terms",
    title: "Kullanım Koşulları",
    updatedAt: "01 Temmuz 2026",
    intro:
      "Bu web sitesi ve sunulan dijital hizmetler NKolay Medya Teknolojileri A.Ş. tarafından sağlanmaktadır. Sitemizi ziyaret ederek ve hizmetlerimizden yararlanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.",
    sections: [
      {
        heading: "1. Sözleşmenin Kapsamı",
        body: "Bu koşullar, internet sitemiz üzerinden sunulan tüm içerik, materyal ve hizmetlerin kullanımını düzenler. Hizmetlere ilişkin ayrı bir yazılı sözleşme imzalanması halinde, taraflar arasındaki ilişkide o sözleşme hükümleri geçerlidir.",
      },
      {
        heading: "2. Fikri Mülkiyet",
        body: "Sitede yer alan tüm metin, görsel, logo, tasarım, yazılım ve marka hakları NKolay Medya Teknolojileri A.Ş.'ye aittir. Önceden yazılı izin alınmaksızın kopyalanamaz, çoğaltılamaz ve ticari amaçla kullanılamaz.",
      },
      {
        heading: "3. Kullanıcı Yükümlülükleri",
        body: "Kullanıcılar, siteyi yasalara uygun şekilde kullanmayı, başkalarının haklarına zarar vermemeyi ve sistem güvenliğini tehlikeye atmamayı kabul eder. Sağlanan bilgilerin doğru ve güncel olması kullanıcının sorumluluğundadır.",
      },
      {
        heading: "4. Hizmetlerin Değiştirilmesi",
        body: "Şirket, sunduğu hizmetlerin kapsamını, fiyatlarını ve içeriğini önceden bildirimde bulunarak değiştirme, askıya alma veya sonlandırma hakkını saklı tutar.",
      },
      {
        heading: "5. Sorumluluğun Sınırlandırılması",
        body: "Site \"olduğu gibi\" sunulmaktadır. Şirket, sitenin kesintisiz ve hatasız çalışmasına dair garanti vermez. Hukuken zorunlu olmadıkça, dolaylı zararlardan Şirket sorumlu tutulamaz.",
      },
      {
        heading: "6. Uygulanacak Hukuk",
        body: "Bu koşullardan doğacak uyuşmazlıklarda Türkiye Cumhuriyeti yasaları uygulanır ve İstanbul Mahkemeleri ile İcra Daireleri yetkilidir.",
      },
    ],
  },
  privacy: {
    id: "privacy",
    title: "Gizlilik Politikası",
    updatedAt: "01 Temmuz 2026",
    intro:
      "NKolay Medya Teknolojileri A.Ş. olarak gizliliğinize saygı duyuyoruz. Bu politika, sitemizi kullanırken topladığımız bilgileri ve bu bilgileri nasıl kullandığımızı, koruduğumuzu ve paylaştığımızı açıklamaktadır.",
    sections: [
      {
        heading: "1. Topladığımız Bilgiler",
        body: "Bize iletişim formu veya teklif talebi aracılığıyla sağladığınız ad, e-posta ve telefon gibi bilgilerin yanı sıra; çerezler ve benzer teknolojiler aracılığıyla ziyaret ettiğiniz sayfalar, cihaz ve tarayıcı bilgileriniz otomatik olarak toplanır.",
      },
      {
        heading: "2. Bilgileri Nasıl Kullanıyoruz",
        body: "Topladığımız bilgileri; taleplerinize yanıt vermek, hizmet kalitemizi iyileştirmek, size özel teklif ve kampanyalardan haberdar etmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanırız.",
      },
      {
        heading: "3. Çerezler (Cookies)",
        body: "Sitemiz, deneyiminizi iyileştirmek için çerezler kullanır. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya devre dışı bırakabilirsiniz; ancak bu durum bazı özelliklerin çalışmamasına yol açabilir.",
      },
      {
        heading: "4. Bilgilerin Paylaşılması",
        body: "Bilgileriniz, yalnızca hizmet tedarikçilerimiz ve yasal zorunluluklar kapsamında paylaşılır. Üçüncü taraflara pazarlama amacıyla hiçbir kişisel veri satılmaz.",
      },
      {
        heading: "5. Güvenlik",
        body: "Kişisel verilerinizi yetkisiz erişime, kayba ve kötüye kullanıma karşı korumak için endüstri standardında teknik ve idari tedbirler alıyoruz.",
      },
      {
        heading: "6. İletişim",
        body: "Gizlilik politikamızla ilgili sorularınız için info@nkolaymedya.com adresinden bize ulaşabilirsiniz.",
      },
    ],
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "google-ads",
    title: "Google Ads Reklam Danışmanlığı",
    description: "Arama ve görüntülü ağda dönüşüm odaklı kampanyalarla markanızı tam arama anında hedef kitlenizin karşısına çıkarıyoruz.",
    category: "performance",
    features: [
      "Arama Ağı ve Display Reklamları",
      "Negatif Kelime Optimizasyonu",
      "Dönüşüm İzleme & Raporlama",
      "Performans Odaklı Bütçe Yönetimi"
    ],
    badge: "En Çok Tercih Edilen",
    metric: "Yüksek ROI Garantisi",
    iconName: "Search",
    detailedContent: "İşletmenizi arayan müşterilerinizin tam zamanında karşısına çıkmanızı sağlıyoruz. Google Ads danışmanlık hizmetimizle yalnızca tıklama değil, yüksek nitelikli müşteri ve satış (ROI) odaklı kampanyalar tasarlıyoruz. Kapsamlı anahtar kelime araştırması, negatif kelime filtrelemesi ve ileri düzey A/B testleriyle her kuruşunuzun verimini en üst düzeye çıkarıyoruz.",
    benefits: ["Maksimum Dönüşüm Oranı (CRO)", "Nokta Atışı Maliyet Kontrolü", "Kapsamlı Sektörel Rekabet Analizi", "Sürekli Optimizasyon ve Şeffaf Raporlama"]
  },
  {
    id: "meta-ads",
    title: "Meta (Facebook-Instagram) Reklam",
    description: "Pixel ve CAPI entegrasyonuyla Instagram ile Facebook'ta satış odaklı, ölçeklenebilir reklam kurguları kuruyoruz.",
    category: "performance",
    features: [
      "Piksel Kurulumu & Olay İzleme",
      "Lookalike & Retargeting Kitleleri",
      "A/B Testli Kreatif Kampanyalar",
      "Katalog & E-ticaret Entegrasyonu"
    ],
    badge: "Yüksek Dönüşüm",
    metric: "+%340 Organik Erişim",
    iconName: "Share2",
    detailedContent: "Dünyanın en büyük sosyal ağlarında markanızı sadece 'gösteren' değil, 'satan' reklamlar kurguluyoruz. META Pixel kurulumundan dönüşüm API'lerine (CAPI) kadar tüm teknik detayları uzmanlıkla entegre ediyoruz. Özel (Custom) ve Benzer (Lookalike) hedef kitleler oluşturarak, ürünlerinize ilgi duyma ihtimali en yüksek kitleye kreatif reklam görselleriyle ulaşıyoruz.",
    benefits: ["Ölçeklenebilir Satış Hacmi", "Gelişmiş Retargeting Stratejileri", "Video ve Görsel A/B Testleri", "Düzenli Meta Algoritma Uyum Güncellemeleri"]
  },
  {
    id: "ui-ux-design",
    title: "Grafik ve UI/UX Tasarım",
    description: "Kullanıcı deneyimini merkeze alan, modern ve markanıza özel arayüz ve kurumsal kimlik tasarımları üretiyoruz.",
    category: "creative",
    features: [
      "Web & Mobil Arayüz Tasarımı (Figma)",
      "Kurumsal Kimlik & Logo Tasarımı",
      "Kullanılabilirlik Testleri",
      "Etkileşimli Prototipleme"
    ],
    badge: "Premium",
    metric: "Kullanıcı Dostu Tasarım",
    iconName: "PenTool",
    detailedContent: "Kurumsal kimliğinizin dijitaldeki ilk izlenimi saniyeler sürer. Müşterilerinizin markanızla olan etkileşimini kusursuzlaştırmak için kullanıcı merkezli (UX) ve estetik olarak mükemmel (UI) tasarımlar yapıyoruz. Apple sadeliğinden modern web 3.0 esintilerine kadar, kurumunuza en uygun görsel dili bulup kodlanabilir Figma prototipleri halinde sunuyoruz.",
    benefits: ["Yüksek Kullanıcı Bağlılığı", "Satış Artıran Arayüz Stratejileri", "Modern, Sade ve Özgün Kurumsal Kimlik", "Ekran Uyumlu (Responsive) Tasarım Mimarisi"]
  },
  {
    id: "software-dev",
    title: "Yazılım Hizmetleri",
    description: "İşletmenize özel, bulut tabanlı ve ölçeklenebilir web yazılımları ile süreçlerinizi otomatikleştiriyoruz.",
    category: "technical",
    features: [
      "Özel Web Uygulamaları",
      "CRM & ERP Geliştirme",
      "API Entegrasyonları",
      "Performans Optimizasyonu"
    ],
    badge: "Ölçeklenebilir",
    metric: "Maksimum Hız",
    iconName: "Code",
    detailedContent: "İşletmenizin benzersiz ihtiyaçlarına göre özel olarak kodlanmış, bulut tabanlı ve ölçeklenebilir yazılım çözümleri üretiyoruz. Eski sistemlerinizi modernize ediyor, harici platformlarla sorunsuz API entegrasyonları sağlıyor ve veri güvenliğini en üst planda tutuyoruz. React, Node.js, ve modern veritabanı teknolojileriyle hantallıktan uzak, ışık hızında çalışan sistemler kuruyoruz.",
    benefits: ["Gelişmiş İş Süreci Otomasyonu", "Ölçeklenebilir Bulut Altyapısı", "Uçtan Uca Veri Güvenliği", "Modern Teknoloji Yığını"]
  },
  {
    id: "mobile-app",
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android için native ve cross-platform mobil uygulamalarla markanızı kullanıcıların cebine taşıyoruz.",
    category: "technical",
    features: [
      "Native & Cross-Platform Çözümler",
      "Kullanıcı Odaklı Arayüzler",
      "Güvenli Veri Altyapısı",
      "Uygulama İçi Satınalma Entegrasyonu"
    ],
    badge: "Trend",
    metric: "5 Yıldızlı Deneyim",
    iconName: "Smartphone",
    detailedContent: "Müşterilerinize doğrudan dokunmanın en etkili yolu mobil uygulamalardır. Hem App Store hem de Google Play için native performansına yakın cross-platform (React Native/Flutter) ya da direkt native uygulamalar geliştiriyoruz. Push notification entegrasyonları, uygulama içi satın alma ve kullanıcı analizleriyle uygulamanızı bir gelir merkezine dönüştürüyoruz.",
    benefits: ["Hızlı ve Pürüzsüz Kullanıcı Deneyimi", "App Store ve Play Store Optimizasyonu (ASO)", "Kesintisiz Push Notification Altyapısı", "Yüksek Dönüşümlü Ödeme Entegrasyonları"]
  },
  {
    id: "seo-services",
    title: "SEO Hizmetleri",
    description: "Teknik SEO, içerik optimizasyonu ve kaliteli backlink ile sitenizi Google'da kalıcı bir yere taşıyoruz.",
    category: "performance",
    features: [
      "Teknik & On-Page SEO",
      "Kelime ve Rakip Analizi",
      "Backlink & Otorite İnşası",
      "Yerel (Local) SEO"
    ],
    badge: "Organik Büyüme",
    metric: "1. Sayfa Garantili Çözümler",
    iconName: "TrendingUp",
    detailedContent: "Arama motoru sonuç sayfalarında (SERP) kalıcı bir yer edinmek stratejik bir çaba gerektirir. Sitenizin teknik altyapısını hız ve güvenlik açısından denetliyor (Technical SEO), içeriklerinizi Google algoritmalarına uygun hale getiriyor (On-Page SEO) ve kaliteli backlink kaynaklarıyla marka otoritenizi inşa ediyoruz (Off-Page SEO). Böylece uzun vadeli ve ücretsiz trafik akışı sağlıyoruz.",
    benefits: ["Sürekli ve Organik Ziyaretçi Artışı", "Sektörde Otorite Konumu", "Hedef Kitleyle Doğrudan Eşleşme", "Rakip Analizi ile Stratejik Üstünlük"]
  },
  {
    id: "printing-services",
    title: "Matbaa ve Baskı Hizmetleri",
    description: "Kurumsal kimliğinizi kartvizitten ambalaja kadar premium baskı çözümleriyle fiziksel dünyaya taşıyoruz.",
    category: "creative",
    features: [
      "Kartvizit & Katalog Basımı",
      "Promosyon Ürünleri",
      "Ambalaj ve Kutu Tasarımı",
      "Kurumsal Materyal Üretimi"
    ],
    badge: "Fiziksel Etki",
    metric: "1. Sınıf Kalite",
    iconName: "Printer",
    detailedContent: "Dijital varlığınızın yanı sıra, fiziksel dünyada bıraktığınız etki kurumsal duruşunuzu destekler. Şirket profilinize yakışır premium matbaa ürünleri, modern baskı teknikleri (gofre, lak, yaldız vb.) ile üretilerek markanızın somut kalitesini artırır. Ambalaj tasarımından dev afişlere kadar tüm fiziksel kurumsal materyalleriniz özenle tasarlanıp basılır.",
    benefits: ["Akılda Kalıcı Fiziksel Deneyim", "Premium Kalitede Kurumsal Evraklar", "Fark Yaratan Promosyon ve Ambalajlar", "Marka Prestijinde Bütünlük"]
  },
  {
    id: "wordpress",
    title: "WordPress Hizmetleri",
    description: "Ultra hızlı, güvenli ve tam SEO uyumlu WordPress siteleri kuruyor; mevcut siteleriniz için bakım sağlıyoruz.",
    category: "technical",
    features: [
      "Özel Tema Geliştirme",
      "Eklenti Optimizasyonu",
      "Hız ve Güvenlik Ayarları",
      "E-Ticaret (WooCommerce) Kurulumu"
    ],
    badge: "Hızlı Kurulum",
    metric: "SEO Uyumlu Altyapı",
    iconName: "Layout",
    detailedContent: "Dünyanın en popüler içerik yönetim sistemi olan WordPress üzerinde, yavaş çalışan hazır temalar yerine işletmenize özel tasarlanmış, ultra hızlı (Core Web Vitals uyumlu) ve tam SEO optimize siteler kuruyoruz. Mevcut WP siteleriniz için hızlandırma, zararlı yazılım temizleme, güvenlik önlemleri alma ve aylık bakım paketleri sunuyoruz.",
    benefits: ["Ultra Hızlı Sayfa Yüklenmesi", "Kullanıcı Dostu İçerik Yönetimi", "Yüksek Güvenlik ve Düzenli Yedekleme", "Geniş Ölçeklenebilirlik (WooCommerce vb.)"]
  },
  {
    id: "server-services",
    title: "Sunucu Hizmetleri",
    description: "Yüksek erişilebilirlik ve %99.9 uptime garantili bulut sunucu ile barındırma çözümleri sunuyoruz.",
    category: "technical",
    features: [
      "Bulut (Cloud) Mimarisi",
      "7/24 Sunucu İzleme",
      "Yedekleme ve Felaret Kurtarma",
      "SSL & Güvenlik Sertifikaları"
    ],
    badge: "Kesintisiz",
    metric: "%99.9 Uptime",
    iconName: "Server",
    detailedContent: "Trafiğiniz ne kadar artarsa artsın siteniz asla çökmemeli. Özel olarak optimize edilmiş bulut (cloud) altyapımızla projelerinize tahsis edilmiş, yüksek hızlı, NVMe diskli ve %99.9 kesintisiz uptime garantili sunucu çözümleri sunuyoruz. Günlük yedekleme politikalarımız ve proaktif güvenlik izlememiz ile dijital varlıklarınız tamamen güvende.",
    benefits: ["Arama Motorlarına Olumlu Hız Sinyali", "Kesintisiz Uptime (Erişilebilirlik)", "Veri Kaybına Karşı Felaret Kurtarma (Disaster Recovery)", "DDoS ve Malware Koruması"]
  },
  {
    id: "social-media",
    title: "Sosyal Medya Yönetimi",
    description: "Stratejik içerik planlaması ve profesyonel hesap yönetimiyle markanız için sadık bir topluluk inşa ediyoruz.",
    category: "performance",
    features: [
      "Aylık İçerik ve Konsept Planlaması",
      "Görsel ve Metin (Copywriting) Üretimi",
      "Topluluk ve Yorum Yönetimi",
      "Detaylı Performans Raporlaması"
    ],
    badge: "Etkileşim Odaklı",
    metric: "1M+ Aktif Erişim Ağı",
    iconName: "Instagram",
    detailedContent: "Sadece paylaşım yapmak markanızı büyütmez. Hedef kitlenizin dinamiklerini analiz eden ve onların dilinden konuşan, estetik olarak markanızı yukarı taşıyan bir sosyal medya stratejisi uyguluyoruz. Konsept tasarımlar, etkileşim artıran metinler (copywriting) ve düzenli kriz/fırsat yönetimiyle sadık bir takipçi kitlesi inşa ediyoruz.",
    benefits: ["Tutarlı Kurumsal Kimlik", "Algoritma Uyumlu İçerik Üretimi", "Aktif Müşteri İletişimi ve Topluluk Yönetimi", "Viral Olma Potansiyeli Taşıyan Kurgular"]
  },
  {
    id: "reputation-management",
    title: "İtibar Yönetimi",
    description: "Dijital PR ve kriz yönetimi ile marka algınızı koruyup Google aramalarında pozitif bir imaj oluşturuyoruz.",
    category: "performance",
    features: [
      "Dijital Basın Bültenleri (PR)",
      "Kriz Yönetimi Stratejileri",
      "Olumsuz İçerik Optimizasyonu",
      "Marka Algı Analizi"
    ],
    badge: "Kurumsal Güven",
    metric: "Güçlü İmaj",
    iconName: "Shield",
    detailedContent: "Bir markanın itibarı, onun en değerli varlığıdır. Şikayet platformları, sosyal medya yorumları ve haber sitelerinde markanız hakkında oluşan olumsuz algıları yönetiyoruz. Profesyonel dijital PR stratejileri, SEO bazlı manipülasyon engelleme (olumsuz içeriklerin arka sayfalara itilmesi) ve marka elçiliği çalışmalarıyla kurumsal itibarınızı koruma altına alıyoruz.",
    benefits: ["Sarsılmaz Marka Güveni", "Kriz Anlarında Hızlı Müdahale", "Google Aramalarında Pozitif Algı", "Gelişmiş PR Entegrasyonları"]
  },
  {
    id: "brand-consulting",
    title: "Marka Danışmanlığı",
    description: "Marka konumlandırma ve hedef kitle analiziyle sıfırdan veya yeniden konumlandırma için yol haritası çiziyoruz.",
    category: "creative",
    features: [
      "Marka Konumlandırma",
      "Hedef Kitle ve Rakip Analizi",
      "Kurumsal Kimlik Kılavuzu",
      "Pazarlama Stratejisi Geliştirme"
    ],
    badge: "Vizyoner",
    metric: "Sektörel Liderlik",
    iconName: "Briefcase",
    detailedContent: "Markanızın sektördeki konumunu belirliyor, rekabet avantajlarınızı ortaya çıkarıyoruz. Logonuzdan sloganınıza, müşteri iletişim dilinizden (tone of voice) ürün ambalajınıza kadar her temas noktasını 'tek bir marka ruhu' etrafında birleştiriyoruz. Hem pazara yeni giren hem de kabuk değiştirmek isteyen firmalar için pazar analizi eşliğinde vizyoner bir rota çiziyoruz.",
    benefits: ["Sektörde Keskin Farkındalık", "Tüketici Zihninde Net Konumlandırma", "Bütünsel Kurumsal İmaj", "Uzun Vadeli Büyüme Vizyonu"]
  },
  {
    id: "ecommerce-consulting",
    title: "E-Ticaret Danışmanlığı",
    description: "Altyapı kurulumundan sepet optimizasyonuna kadar online satışlarınızı uçtan uca büyüten stratejiler sunuyoruz.",
    category: "performance",
    features: [
      "Platform Seçimi ve Kurulumu",
      "Dönüşüm Oranı Optimizasyonu (CRO)",
      "Pazaryeri Entegrasyonları",
      "Satış Artırıcı Kampanyalar"
    ],
    badge: "Satış Odaklı",
    metric: "Yüksek Sepet Ortalaması",
    iconName: "ShoppingBag",
    detailedContent: "E-ticaret sadece ürün eklemekten ibaret değildir. Ziyaretçilerin müşteriye, müşterilerin sadık savunuculara dönüşmesini sağlayacak 'Kullanıcı Yolculuğu' (User Journey) optimizasyonları yapıyoruz. Terk edilen sepet kurtarma stratejileri, pazaryeri (Trendyol, Hepsiburada vb.) entegrasyonları, performans pazarlaması bütçe dağıtımı ve sadakat programlarıyla gelirlerinizi ölçekliyoruz.",
    benefits: ["Artan Ortalama Sepet Tutarı (AOV)", "Düşük Sepet Terk Etme Oranı", "Gelişmiş Çok Kanallı Satış (Omnichannel)", "Optimum Karlılık Analizi"]
  },
  {
    id: "video-production",
    title: "Video Prodüksiyon",
    description: "Senaryodan post-prodüksiyona kurumsal tanıtım ve Reels/TikTok videolarıyla marka hikayenizi sinematik kalitede anlatıyoruz.",
    category: "creative",
    features: [
      "Senaryo ve Kurgu",
      "Profesyonel Kamera & Drone Çekimi",
      "Post-Prodüksiyon & Renk Düzenleme",
      "Reels ve TikTok İçerikleri"
    ],
    badge: "Görsel Şölen",
    metric: "Sinematik Kalite",
    iconName: "Video",
    detailedContent: "Modern pazarlamada metinlerin yerini dinamik videolar aldı. Yüksek çözünürlüklü kameralar, profesyonel aydınlatma ve drone ekipmanlarımızla kurumunuza değer katıyoruz. Uzun metrajlı kurumsal belgesellerden tutun, sosyal medyada patlama yapacak 15 saniyelik 'kanca odaklı' dikey kurgulara (Reels/TikTok) kadar tüm çekim, senaryo, ve post-prodüksiyon (color grading, sound design) süreçlerini üstleniyoruz.",
    benefits: ["Duygusal Bağ Kuran Görsellik", "Profesyonel Senaryo ve Seslendirme Uyum", "Platforma Özel Format Üretimi (Yatay/Dikey)", "Yüksek Dönüşüm Getiren Reklam Materyalleri"]
  },
  {
    id: "voiceover",
    title: "Seslendirme Hizmetleri",
    description: "Reklam, tanıtım ve santral anonsları için profesyonel stüdyo kalitesinde yerli ve yabancı seslendirme çözümleri.",
    category: "creative",
    features: [
      "Reklam ve Tanıtım Seslendirmesi",
      "IVR ve Santral Anonsları",
      "Farklı Dil Seçenekleri",
      "Profesyonel Stüdyo Kalitesi"
    ],
    badge: "Profesyonel Ses",
    metric: "Net ve Etkili",
    iconName: "Mic",
    detailedContent: "Markanızın görseli kadar sesi de önemlidir. Profesyonel dublaj ve seslendirme sanatçılarımızdan oluşan geniş havuzumuzla, projenize en uygun 'ses rengini' buluyoruz. Kurumsal tanıtım filmleri, radyo ve TV reklamları, e-öğrenme (e-learning) modülleri ve profesyonel telefon santral (IVR) anonsları için stüdyo ortamında pürüzsüz kalitede seslendirme gerçekleştiriyoruz.",
    benefits: ["Geniş Sanatçı ve Dil Seçeneği", "Kusursuz Ses Kalitesi ve Mastering", "Kurumsal Kimliğe Uygun Ses Rengi", "Hızlı Teslimat"]
  },
  {
    id: "strategy-dev",
    title: "Strateji Geliştirme",
    description: "Veri analizi ve büyüme metodolojileriyle işletmenize sürdürülebilir, ölçülebilir dijital dönüşüm yol haritaları çiziyoruz.",
    category: "performance",
    features: [
      "Büyüme (Growth) Stratejileri",
      "Veri Analizi ve Pazar Araştırması",
      "Dijital Dönüşüm Yol Haritası",
      "Performans İzleme (KPI) Yönetimi"
    ],
    badge: "Veri Odaklı",
    metric: "Sürdürülebilir Büyüme",
    iconName: "Target",
    detailedContent: "Taktikler geçici, strateji kalıcıdır. Markanızın sektördeki veri dinamiklerini inceliyor, rakiplerin boşluklarını buluyor ve işletmenize büyüme kazandıracak 'Growth Hacking' metodolojilerini uyguluyoruz. Performans göstergelerini (KPI's) net olarak belirliyor, aylık ve yıllık yol haritaları çıkararak, işletmenizin dijital ve geleneksel pazardaki adımlarını güvence altına alıyoruz.",
    benefits: ["Riski Minimize Edilmiş Adımlar", "Net Geri Dönüş (ROI) Odaklılık", "Pazardaki Boşlukları Yakalama Fırsatı", "Karar Almada Veri Tabanlı Rehberlik"]
  },
  {
    id: "automation",
    title: "Otomasyon Bot Hizmetleri",
    description: "WhatsApp ve web üzerinde 7/24 çalışan yapay zeka destekli botlarla müşteri süreçlerinizi tamamen otomatikleştiriyoruz.",
    category: "technical",
    features: [
      "WhatsApp & DM Botları",
      "CRM Otomasyon Entegrasyonları",
      "İş Süreçleri Otomasyonu",
      "Yapay Zeka (AI) Destekli Yanıtlar"
    ],
    badge: "Zaman Tasarrufu",
    metric: "7/24 Kesintisiz Hizmet",
    iconName: "Bot",
    detailedContent: "İnsan gücünün sınırlarını aşın. Özellikle müşteri destek kanallarınızda (WhatsApp, Instagram DM, Web Chat) 7/24 kesintisiz hizmet verebilen NLP (Doğal Dil İşleme) ve yapay zeka entegre botlar geliştiriyoruz. Müşterileriniz anında cevap alırken, sipariş alma, randevu oluşturma ve sıkça sorulan sorular gibi süreçleri %100 otomatikleştirerek çalışan maliyetlerinizi düşürüyoruz.",
    benefits: ["Müşteri Memnuniyetinde Anında Artış", "Satışları Kaçırmama (7/24 Aktif)", "Operasyonel Maliyetlerde Büyük Düşüş", "Hata Payı Sıfır Süreç Yönetimi"]
  },
  {
    id: "cyber-security",
    title: "Siber Güvenlik",
    description: "Sızma testleri ve DDoS korumasıyla web sitenizi, uygulamanızı ve verilerinizi siber tehditlere karşı güvence altına alıyoruz.",
    category: "technical",
    features: [
      "Sızma (Penetrasyon) Testleri",
      "Güvenlik Açığı Taraması",
      "DDoS ve Bot Koruması",
      "Veri Şifreleme (Encryption)"
    ],
    badge: "Üst Düzey Güvenlik",
    metric: "0 Veri Sızıntısı",
    iconName: "Lock",
    detailedContent: "Dijitalleşen dünyada en büyük risk, veri hırsızlığı ve itibar kaybıdır. Web siteleriniz, mobil uygulamalarınız ve sunucularınız için beyaz şapkalı hackerlarımız tarafından gerçekleştirilen sızma (Penetrasyon) testleri (Pentest) ile güvenlik açıklarınızı sizden önce biz buluyoruz. İleri düzey firewall konfigürasyonları, veri tabanı şifrelemesi ve aktif DDoS koruması ile işletmenizi siber tehditlerden arındırıyoruz.",
    benefits: ["KVKK ve GDPR Uyumluluğu", "Sıfır Gün (Zero-Day) Açıklarına Karşı Önlem", "Kurumsal Veri Mahremiyeti", "Kesintisiz Güvenli İş Akışı"]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Zeynep Yılmaz",
    role: "Kurucu",
    company: "Bebek Pure Butik",
    city: "İstanbul",
    text: "Nkolay Medya ile İstanbul sokaklarında yaptığımız sokak modası Reels çekimleri tam anlamıyla viral oldu! İlk ayda Instagram'dan gelen DM'lerle tüm sezon stoğumuzu bitirdik. Gerçekten ismi gibi her şeyi çok kolaylaştırdılar.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    statGrew: "+%210 Aylık Satış Artışı"
  },
  {
    id: "testi-2",
    name: "Dr. Mert Soydan",
    role: "Başhekim",
    company: "Soydan Klinik",
    city: "Ankara",
    text: "Ankara'da Tunalı'daki kliniğimiz için medikal bilgileri sıkıcılıktan uzaklaştırıp esprili 'Ankaralı' kancalarıyla paylaştık. 'La bebe' samimiyetiyle hazırlanan videolar sayesinde randevu defterimiz 3 ay sonrasına kadar doldu!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    statGrew: "480+ Yeni Randevu/Ay"
  },
  {
    id: "testi-3",
    name: "Beren Alkan",
    role: "Pazarlama Direktörü",
    company: "Alaçatı Lavender Otel",
    city: "İzmir",
    text: "Turizm sektöründe görsel her şeydir. Nkolay Medya ekibinin İzmir Kordon ve Alaçatı sokaklarında çektiği estetik ve huzur kokan Reels videoları, otelimizin sezon ortasında %98 doluluğa ulaşmasını sağladı. Çok profesyoneller.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    statGrew: "%98 Sürekli Doluluk"
  },
  {
    id: "testi-4",
    name: "Selim Tamer",
    role: "Kurucu",
    company: "Tamer Gayrimenkul",
    city: "Bursa",
    text: "Bursa'da lüks konut satışları için dikey video kurgularıyla gayrimenkul turları çektik. Nkolay Medya'nın kanca odaklı yaklaşımı sayesinde sadece bir videodan 3 adet daire satışı gerçekleştirdik. İnanılmaz bir başarı!",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    statGrew: "3 Adet Lüks Konut Satışı"
  },
  {
    id: "testi-5",
    name: "Dt. Elif Can",
    role: "Başhekim",
    company: "Can Diş Polikliniği",
    city: "Antalya",
    text: "Antalya'da implant ve estetik gülüş tasarımı hizmetlerimizi samimi bilgilendirme videoları ile anlattık. Reklam kampanyalarımızla birlikte sadece 2 ayda yerel ve yabancı hasta başvurularımızda rekor kırdık.",
    avatarUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=150",
    statGrew: "+%165 Randevu Talebi"
  },
  {
    id: "testi-6",
    name: "Murat Çelik",
    role: "İşletmeci",
    company: "Çelik Gurme Restoran",
    city: "İstanbul",
    text: "Esenyurt'taki restoranımız için Nkolay Medya ekibiyle her hafta yeni bir lezzet kancası çektik. Videoların yayılmasından sonra kapıda kuyruklar oluşmaya başladı. Sosyal medyanın gücünü sayelerinde keşfettik.",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150",
    statGrew: "+%190 Müşteri Artışı"
  }
];

export const SUPPORTED_CITIES = [
  { id: "istanbul", name: "İstanbul", region: "Marmara Bölgesi" },
  { id: "ankara", name: "Ankara", region: "İç Anadolu Bölgesi" },
  { id: "izmir", name: "İzmir", region: "Ege Bölgesi" },
  { id: "bursa", name: "Bursa", region: "Marmara Bölgesi" },
  { id: "antalya", name: "Antalya", region: "Akdeniz Bölgesi" },
  { id: "diger", name: "Diğer (Tüm Türkiye)", region: "Genel Türkiye" }
];

export const SERVICE_CATEGORIES: {
  id: import("./types").ServiceCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "performance",
    label: "Performans & Reklam",
    description:
      "Google Ads, Meta reklamları ve SEO ile ölçülebilir büyüme ve satış odaklı kampanyalar.",
  },
  {
    id: "creative",
    label: "Yaratıcı & Tasarım",
    description:
      "Video prodüksiyon, UI/UX tasarım ve marka danışmanlığı ile dijitalde fark yaratan görsellik.",
  },
  {
    id: "technical",
    label: "Teknik & Altyapı",
    description:
      "Yazılım, sunucu, siber güvenlik ve otomasyon ile kesintisiz ve güvenli dijital altyapı.",
  },
];

export const WORK_PROCESS: {
  step: string;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    title: "Keşif & Analiz",
    description:
      "Markanızı, sektörünüzü ve rakiplerinizi derinlemesine analiz ederek net bir başlangıç noktası belirliyoruz.",
  },
  {
    step: "02",
    title: "Strateji & Yol Haritası",
    description:
      "Veriye dayalı, ölçülebilir hedeflerle markanıza özel dijital büyüme stratejisi ve aksiyon planı çıkarıyoruz.",
  },
  {
    step: "03",
    title: "Üretim & Yayın",
    description:
      "Reklam, tasarım ve içerik üretimini üstlenerek kampanyaları yayına alıyor ve sürekli optimize ediyoruz.",
  },
  {
    step: "04",
    title: "Ölçüm & Raporlama",
    description:
      "Şeffaf raporlarla sonuçları takip ediyor, ROI odaklı düzenli iyileştirmelerle büyümeyi sürdürüyoruz.",
  },
];

export const HOME_FAQ: { question: string; answer: string }[] = [
  {
    question: "NKolay Medya hangi dijital hizmetleri sunuyor?",
    answer:
      "Google Ads ve Meta reklam yönetimi, SEO, sosyal medya yönetimi, video prodüksiyon, UI/UX tasarım, yazılım ve mobil uygulama geliştirme ile siber güvenlik dahil 16 farklı dijital hizmet sunuyoruz.",
  },
  {
    question: "Reklam bütçemi nasıl yönetiyorsunuz?",
    answer:
      "Performans odaklı bütçe planlaması yaparak her kuruşun dönüşümünü şeffaf raporlarla ölçüyor, negatif kelime ve A/B testleriyle maliyet kontrolünü sürekli optimize ediyoruz.",
  },
  {
    question: "İlk sonuçları ne zaman görürüm?",
    answer:
      "Strateji raporunuzu 7 gün içinde teslim ediyoruz. Performans kampanyalarında ilk ölçülebilir sonuçlar genellikle ilk ay içinde görülmeye başlanır.",
  },
  {
    question: "Hangi şehirlerde hizmet veriyorsunuz?",
    answer:
      "Merkezimiz İstanbul Esenyurt'ta olmakla birlikte tüm Türkiye'ye uzaktan dijital ajans hizmeti sunuyoruz.",
  },
];

export const IMPACT_STATS: {
  value: string;
  suffix?: string;
  label: string;
  highlight?: boolean;
}[] = [
  { value: "4.8", suffix: "x", label: "Ortalama ROAS Oranı", highlight: true },
  { value: "340", suffix: "%+", label: "Erişim Artışı" },
  { value: "2.4", suffix: "M", label: "Aylık Aktif Etkileşim" },
  { value: "16", suffix: "+", label: "Dijital Hizmet" },
];

export const WHY_US: {
  iconName: string;
  title: string;
  description: string;
}[] = [
  {
    iconName: "FileCheck",
    title: "Ücretsiz Strateji Raporu",
    description:
      "Taahhütsüz, markanıza özel ilk strateji raporunuzu 7 gün içinde teslim ediyoruz.",
  },
  {
    iconName: "BarChart",
    title: "Şeffaf Raporlama",
    description:
      "Her kuruşun dönüşümünü gösteren haftalık ve aylık şeffaf performans raporları sunuyoruz.",
  },
  {
    iconName: "Users",
    title: "Uzman Hesap Ekibi",
    description:
      "Her biri alanında uzman, size özel atanmış hesap sorumlularıyla doğrudan iletişim kuruyorsunuz.",
  },
  {
    iconName: "ShieldCheck",
    title: "Esnek İptal Politikası",
    description:
      "Kendinizi bağlı hissetmeyin; sonuç alamazsanız dilediğiniz zaman ayrılabilme özgürlüğünüz var.",
  },
];

export const TRUST_BADGES: {
  label: string;
  sub: string;
}[] = [
  { label: "İstanbul", sub: "Esenyurt Merkez" },
  { label: "Tüm Türkiye", sub: "Uzaktan Hizmet" },
  { label: "Google & Meta", sub: "Sertifikalı Ekip" },
  { label: "KVKK Uyumlu", sub: "Güvenli Veri" },
];

export const BLOG_CATEGORIES = [
  "Dijital Pazarlama",
  "SEO",
  "Sosyal Medya",
  "Tasarım & Teknoloji",
  "E-Ticaret",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "2026'da Google Ads ile Dönüşüm Oranını Artırmanın 7 Yolu",
    slug: "google-ads-donusum-orani-2026",
    excerpt:
      "Google Ads kampanyalarınızdan daha fazla satış çıkmıyorsa, dönüşüm hunisi ve teklif stratejilerinizi bu 7 yöntemle optimize edin.",
    category: "Dijital Pazarlama",
    tags: ["Google Ads", "ROI", "Dönüşüm"],
    author: "NKolay Medya Strateji Ekibi",
    publishedAt: "2026-06-28",
    readTime: "7 dk",
    coverEmoji: "🎯",
    content: [
      {
        body: "Google Ads, doğru kurulduğunda işletmeler için en ölçülebilir büyüme kanalıdır. Ancak birçok marka yalnızca tıklama satın alır, dönüşüm satın almayı unutur. Bu yazıda 2026'da geçerli olan 7 pratik optimizasyonu özetliyoruz.",
      },
      {
        heading: "1. Dönüşüm İzlemeyi Gerçek Anlama Kurun",
        body: "Google Ads hesabınıza yalnızca 'form gönderimi' değil, telefon, WhatsApp ve satın alma olaylarını da tanımlayın. Enhanced Conversions ile çevrimdışı dönüşümleri geri besleyin.",
      },
      {
        heading: "2. Negatif Kelime Listesini Aylık Temizleyin",
        body: "Bütçenizin çeyreği ilgisiz aramalara gidiyor olabilir. Arama terimi raporunu haftalık inceleyip negatif kelimeleri güncelleyin.",
      },
      {
        heading: "3. Akıllı Teklif Stratejilerine Geçin",
        body: "Hedef ROAS ve Maximize Conversions, makine öğrenimiyle teklifleri optimize eder. En az 30 dönüşüm/ay verisi birikince açın.",
      },
      {
        heading: "4. Açılış Sayfası (Landing Page) Uyumunu Artırın",
        body: "Reklam metni ile açılış sayfası mesajı birebir örtüşmeli. Teklif, başlık ve görsel tutarlılığı CRO'yu doğrudan yükseltir.",
      },
      {
        heading: "5. Reklam Uzantılarını Tam Kullanın",
        body: "Site bağlantıları, çağrı, konum ve fiyat uzantıları tıklama oranını (CTR) ve kalite puanını iyileştirir.",
      },
      {
        heading: "6. Coğrafi Hedeflemeyi Sıkılaştırın",
        body: "Sadece dönüşüm gelen şehirleri hedefleyin; düşük performanslı bölgeleri hariç tutun.",
      },
      {
        heading: "7. A/B Testi ile Kreatifleri Yarıştırın",
        body: "Başlık ve görsel varyasyonlarını sürekli test edin; kazananı bütçeyle ödüllendirin.",
      },
      {
        body: "Bu adımları NKolay Medya olarak her hesapta düzenli uyguluyoruz. Ücretsiz strateji raporu için iletişime geçin.",
      },
    ],
  },
  {
    id: "blog-2",
    title: "SEO'da Teknik Optimizasyon: Core Web Vitals Rehberi",
    slug: "seo-core-web-vitals-rehberi",
    excerpt:
      "Google'ın sıralama sinyallerinden Core Web Vitals (LCP, INP, CLS) nedir, sitenizi nasıl 100'e yaklaştırırsınız?",
    category: "SEO",
    tags: ["Teknik SEO", "Core Web Vitals", "Hız"],
    author: "NKolay Medya SEO Ekibi",
    publishedAt: "2026-07-05",
    readTime: "9 dk",
    coverEmoji: "🚀",
    content: [
      {
        body: "Teknik SEO, sıralamanın görünmeyen temelidir. İçerik ne kadar iyi olursa olsun, yavaş ve dengesiz bir site Google'da üst sıralara çıkamaz. İşte Core Web Vitals üçlüsü.",
      },
      {
        heading: "LCP — Largest Contentful Paint",
        body: "En büyük görselin yüklenme süresi. Hedef: 2.5 sn altı. Görseli sıkıştırın, lazy-load kullanın ve CDN ile sunun.",
      },
      {
        heading: "INP — Interaction to Next Paint",
        body: "2024'te FID'nin yerini aldı. Tıklama/etkileşim gecikmesi. Ağır JavaScript'i azaltın, kodu bölebilir (code-split) hale getirin.",
      },
      {
        heading: "CLS — Cumulative Layout Shift",
        body: "Görsel kaymalar. Görsellere boyut belirtin, reklam slotlarını rezerve edin.",
      },
      {
        heading: "Pratik İyileştirme Adımları",
        body: "1) Görseli WebP'ye çevirin. 2) Kritik CSS'i içe gömün. 3) Render-blocking scriptleri erteleyin. 4) Sunucu yanıt süresini düşürün (NVMe + önbellek).",
      },
      {
        body: "NKolay Medya olarak WordPress ve özel geliştirme projelerinde 90+ PageSpeed skoru hedefliyoruz.",
      },
    ],
  },
  {
    id: "blog-3",
    title: "Instagram Reels Stratejisi: Viral İçerik Nasıl Üretilir?",
    slug: "instagram-reels-viral-strateji",
    excerpt:
      "Algoritmayı çözün: Reels üretiminde kancalar, ritim ve ilk 3 saniye kuralıyla erişiminizi katlayın.",
    category: "Sosyal Medya",
    tags: ["Instagram", "Reels", "Video"],
    author: "NKolay Medya İçerik Ekibi",
    publishedAt: "2026-07-10",
    readTime: "6 dk",
    coverEmoji: "🎬",
    content: [
      {
        body: "Reels, 2026'da markalar için en düşük maliyetli erişim kanalı. Ancak rastgele içerik üretmek işe yaramaz; algoritma belirli sinyalleri ödüllendirir.",
      },
      {
        heading: "İlk 3 Saniye Kuralı",
        body: "İzleyici kararını 3 saniyede verir. Soru, çarpıcı görsel veya 'hook' (kanca) ile başlayın.",
      },
      {
        heading: "Kanalın Ritmini Yakalayın",
        body: "Trend sesleri ve formatları hızlıca uyarlayın; orijinallik kadar hız da önemlidir.",
      },
      {
        heading: "Caption ve Hashtag Stratejisi",
        body: "5-10 niş hashtag + 1-2 genel hashtag yeterli. Aşırı hashtag spam olarak algılanır.",
      },
      {
        body: "Müşterilerimizin Reels kampanyalarında ilk ayda +340% organik erişim ortalaması yakaladık.",
      },
    ],
  },
  {
    id: "blog-4",
    title: "E-Ticarette Sepet Terk Etme Oranını Düşürmenin Yolları",
    slug: "eticaret-sepet-terk-etme-cozumleri",
    excerpt:
      "Sepetinize eklenen ürünler neden satın alınmadan çıkıyor? CRO ve pazaryeri entegrasyonu ile AOV'yi artırın.",
    category: "E-Ticaret",
    tags: ["E-Ticaret", "CRO", "Pazaryeri"],
    author: "NKolay Medya E-Ticaret Ekibi",
    publishedAt: "2026-07-14",
    readTime: "8 dk",
    coverEmoji: "🛒",
    content: [
      {
        body: "Ortalama sepet terk etme oranı Türkiye'de %70 civarında. Bu, her 10 ziyaretten 7'sinin gelir potansiyelini kaybettiği anlamına gelir.",
      },
      {
        heading: "Kargo ve Ödeme Adımlarını Sadeleştirin",
        body: "Misafir ödeme, tek ekranlı checkout ve çoklu ödeme yöntemi (havale, kart, kapıda) dönüşümü doğrudan artırır.",
      },
      {
        heading: "Terkenilen Sepet Hatırlatması",
        body: "E-posta ve WhatsApp otomasyonu ile 24 saat içinde hatırlatma gönderin; kupon ile geri çağırın.",
      },
      {
        heading: "Pazaryeri Entegrasyonu",
        body: "Trendyol, Hepsiburada ve kendi siteniz arasında stok ve fiyat senkronizasyonu için entegrasyon kurun.",
      },
      {
        body: "NKolay Medya olarak CRO odaklı e-ticaret danışmanlığıyla ortalama sepet tutarını (AOV) ortalama %28 artırıyoruz.",
      },
    ],
  },
  {
    id: "blog-5",
    title: "UI/UX Tasarımda 2026 Trendleri: Sadelik ve Hız",
    slug: "ui-ux-tasarim-2026-trendleri",
    excerpt:
      "Web tasarımında yeni nesil eğilimler: mikro etkileşimler, koyu mod, erişilebilirlik ve yapay zeka destekli arayüzler.",
    category: "Tasarım & Teknoloji",
    tags: ["UI/UX", "Tasarım", "Trend"],
    author: "NKolay Medya Tasarım Ekibi",
    publishedAt: "2026-07-16",
    readTime: "5 dk",
    coverEmoji: "🎨",
    content: [
      {
        body: "İyi tasarım satar; kötü tasarım terk ettirir. 2026'da kullanıcıların beklediği deneyim daha akıcı, daha hızlı ve daha erişilebilir.",
      },
      {
        heading: "Mikro Etkileşimler",
        body: "Buton hover, yükleme animasyonu gibi küçük dokunuşlar güven ve akıcılık hissi verir.",
      },
      {
        heading: "Erişilebilirlik (A11y)",
        body: "Kontrast, klavye navigasyonu ve ekran okuyucu uyumu artık sıralama ve yasal gereklilik.",
      },
      {
        heading: "Yapay Zeka Destekli Arayüzler",
        body: "Kişiselleştirilmiş içerik ve sohbet tabanlı navigasyon yaygınlaşıyor.",
      },
      {
        body: "NKolay Medya olarak Figma tabanlı, kodlanabilir ve responsive prototipler sunuyoruz.",
      },
    ],
  },
];

export const getBlogPost = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);
