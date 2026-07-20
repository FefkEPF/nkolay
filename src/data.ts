import { ServiceItem, TestimonialItem, LegalDoc, BlogPost } from "./types";

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
    benefits: ["Maksimum Dönüşüm Oranı (CRO)", "Nokta Atışı Maliyet Kontrolü", "Kapsamlı Sektörel Rekabet Analizi", "Sürekli Optimizasyon ve Şeffaf Raporlama"],
    detailSections: [
      {
        heading: "Google Ads Neden İşletmeniz İçin Kritik?",
        body: "Google, her gün milyarlarca aramaya ev sahipliği yapan dünyanın en büyük arama motorudur. Bir kullanıcı 'İstanbul su tesisatçısı' veya 'en iyi muhasebe yazılımı' yazdığında, satın alma niyeti en yüksek anındadır. Google Ads, tam bu kritik anda markanızı kullanıcının karşısına çıkararak, soğuk kitlelere reklam yapmak yerine, sizi zaten arayan potansiyel müşterileri yakalamanızı sağlar. Bu yönüyle Google Ads, en ölçülebilir ve en yüksek geri dönüş potansiyeli olan pazarlama kanallarından biridir.",
      },
      {
        heading: "Kampanya Kurulum ve Optimizasyon Sürecimiz",
        body: "Her kampanyaya kapsamlı bir keşif ve analiz aşamasıyla başlıyoruz. Sektörünüzü, rakiplerinizi ve hedef kitlenizin arama davranışlarını inceliyor; ardından en yüksek dönüşüm potansiyeli olan anahtar kelimeleri belirliyoruz. Reklam metinleri, açılış sayfaları ve teklif stratejileri A/B testleriyle sürekli optimize edilir. Negatif kelime listelerini haftalık güncelleyerek bütçenizin ilgisiz aramalara harcanmasını engelliyoruz. Böylece her kuruşunuzun en verimli şekilde çalışmasını sağlıyoruz.",
      },
      {
        heading: "Şeffaf Raporlama ve Sürekli İyileştirme",
        body: "Reklam bütçenizin nereye gittiğini bilme hakkınız var. Aylık detaylı raporlarla harcama, tıklama, dönüşüm ve maliyet metriklerini şeffaf biçimde paylaşıyoruz. Dönüşüm izleme (conversion tracking) ve Enhanced Conversions kurulumlarıyla telefon, form ve satın alma gibi tüm değerli aksiyonları ölçüyor; veriye dayalı kararlarla kampanyaları sürekli iyileştiriyoruz.",
      },
    ],
    faq: [
      {
        question: "Google Ads reklamları için minimum bütçe ne kadar olmalı?",
        answer: "Bütçe sektöre, rekabete ve hedeflerinize göre değişir. Genellikle anlamlı veri toplayıp optimizasyon yapabilmek için aylık belirli bir eşik öneriyoruz. Ücretsiz ön analizde işletmenize uygun ideal başlangıç bütçesini birlikte belirliyoruz.",
      },
      {
        question: "Sonuçları ne kadar sürede görürüm?",
        answer: "Google Ads, SEO'nun aksine anında görünürlük sağlar; reklamlar yayına girdiği gün trafik gelmeye başlar. Ancak kampanyanın makine öğrenimiyle tam verimine ulaşması ve optimizasyonların oturması genellikle ilk birkaç haftayı bulur.",
      },
      {
        question: "Rakiplerim de reklam veriyor, yine de öne çıkabilir miyim?",
        answer: "Kesinlikle. Google Ads'te başarı yalnızca bütçeyle değil, kalite puanı, doğru anahtar kelime seçimi ve güçlü açılış sayfalarıyla belirlenir. İyi optimize edilmiş bir kampanya, daha yüksek bütçeli ama kötü yönetilen rakipleri geride bırakabilir.",
      },
    ]
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
    benefits: ["Ölçeklenebilir Satış Hacmi", "Gelişmiş Retargeting Stratejileri", "Video ve Görsel A/B Testleri", "Düzenli Meta Algoritma Uyum Güncellemeleri"],
    detailSections: [
      {
        heading: "Instagram ve Facebook'un Satış Gücü",
        body: "Meta ekosistemi (Instagram ve Facebook), Türkiye'de on milyonlarca aktif kullanıcıya ev sahipliği yapar. Google Ads satın alma niyetini yakalarken, Meta reklamları henüz ürününüzü aramayan ama ilgi alanları, davranışları ve demografisi tam sizin müşteri profilinize uyan kişilerde talep yaratır. Görsel ve videonun gücüyle markanızı keşfettirir, ilgi uyandırır ve satışa dönüştürür.",
      },
      {
        heading: "Pixel, CAPI ve Doğru Veri Altyapısı",
        body: "Başarılı bir Meta kampanyasının temeli sağlam veri altyapısıdır. Meta Pixel ve Conversions API (CAPI) kurulumlarıyla web sitenizdeki her değerli aksiyonu (görüntüleme, sepete ekleme, satın alma) eksiksiz ölçüyoruz. iOS gizlilik güncellemelerinin ardından CAPI, dönüşüm verisinin doğru toplanması için hayati önem taşır ve algoritmanın doğru kişileri bulmasını sağlar.",
      },
      {
        heading: "Kitle Stratejisi ve Kreatif Üretimi",
        body: "Özel (Custom) kitlelerle sitenizi ziyaret edenleri yeniden hedefliyor, Benzer (Lookalike) kitlelerle mevcut müşterilerinize benzeyen yeni kişilere ulaşıyoruz. Her kampanyada birden fazla görsel, video ve metin varyasyonunu A/B testine tabi tutarak en yüksek performanslı kreatifi buluyor ve bütçeyi kazanan varyasyona yönlendiriyoruz.",
      },
    ],
    faq: [
      {
        question: "Instagram mı Facebook mu benim işim için daha uygun?",
        answer: "İkisi de aynı reklam yöneticisi üzerinden yönetilir ve genellikle her iki platformda birlikte yayınlamak en verimli sonucu verir. Hedef kitlenizin yaşı ve davranışlarına göre bütçe dağılımını optimize ediyoruz.",
      },
      {
        question: "Reklamlarım için görselleri siz mi hazırlıyorsunuz?",
        answer: "Evet, kreatif üretim hizmetimize dahildir. Markanıza özel dönüşüm odaklı reklam görselleri ve kısa videolar tasarlıyor, sürekli test ederek en etkili olanları öne çıkarıyoruz.",
      },
      {
        question: "Satış gelmezse ne oluyor?",
        answer: "İlk dönemde veri toplayıp algoritmayı eğitiyoruz. Performans düşükse kitle, kreatif ve teklif stratejisini revize ediyoruz. Şeffaf raporlamayla her adımı sizinle paylaşır, sürekli optimizasyonla sonucu iyileştiririz.",
      },
    ]
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
    benefits: ["Yüksek Kullanıcı Bağlılığı", "Satış Artıran Arayüz Stratejileri", "Modern, Sade ve Özgün Kurumsal Kimlik", "Ekran Uyumlu (Responsive) Tasarım Mimarisi"],
    detailSections: [
      {
        heading: "Kullanıcı Odaklı Arayüz Tasarımı",
        body: "NKolay Medya olarak Figma ile modern ve kullanıcı odaklı arayüzler tasarlıyoruz. Web ve mobil UI çalışmalarımızda sadelik, erişilebilirlik ve dönüşüm odaklı tasarım ilkelerini benimsiyoruz. Kurumsal kimlikten etkileşimli prototiplere kadar her süreci stratejik planlıyoruz. Amacımız markanızı en iyi şekilde yansıtan, kullanıcıların kolayca etkileşime girdiği deneyimler sunmak.",
      },
      {
        heading: "Kurumsal Kimlik ve Logo Tasarımı",
        body: "Güçlü bir marka görünümü için logo, renk paleti ve tipografi dahil bütüncül kurumsal kimlik çalışması yapıyoruz. NKolay Medya tasarım ekibi, sektörünüze özel görsel diller geliştirerek rakiplerinizden ayrışmanızı sağlar. Tutarlı bir marka dili tüm dijital ve basılı mecralarınızda müşteri güvenini pekiştirir ve bilinirliğinizi artırır.",
      },
      {
        heading: "Etkileşimli Prototipleme ve Test",
        body: "Tasarım sürecinde tıklanabilir prototipler üreterek kullanıcı testleri gerçekleştiriyoruz. NKolay Medya olarak yazılıma geçmeden önce deneyimi doğruluyor, hataları erken yakalıyoruz. Bu sayede geliştirme maliyetini düşürür ve beklentileri tam karşılayan ürünler teslim ederiz. Detaylı geri bildirim döngüleriyle mükemmel sonuçlara ulaşırız.",
      },
    ],
    faq: [
      {
        question: "UI/UX tasarım süreci ne kadar sürer?",
        answer: "Projenin kapsamına göre 1 ile 4 hafta arasında değişir. NKolay Medya olarak keşif, wireframe, tasarım ve prototip aşamalarını net bir takvimle yürütürüz. İhtiyaç analizi sonrası size kesin süre ve teslim planı sunarız.",
      },
      {
        question: "Hangi tasarım araçlarını kullanıyorsunuz?",
        answer: "Ağırlıklı olarak Figma kullanıyoruz; ayrıca Adobe XD, Illustrator ve Photoshop ile destekliyoruz. NKolay Medya ekibi, iş birliğine açık ve teslim edilebilir kaynak dosyalar üreterek süreç boyunca şeffaf bir çalışma yürütür.",
      },
      {
        question: "Mevcut sitemizi yeniden tasarlatabilir miyim?",
        answer: "Evet, mevcut arayüzünüzü analiz edip kullanıcı deneyimini iyileştiren yeni bir tasarım sunuyoruz. NKolay Medya olarak dönüşüm odaklı yenilemelerle markanızı modernleştirir ve performansı artırırız.",
      },
    ]
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
    benefits: ["Gelişmiş İş Süreci Otomasyonu", "Ölçeklenebilir Bulut Altyapısı", "Uçtan Uca Veri Güvenliği", "Modern Teknoloji Yığını"],
    detailSections: [
      {
        heading: "Ölçeklenebilir Web Yazılımları",
        body: "NKolay Medya olarak işletmenize özel bulut tabanlı web yazılımları geliştiriyoruz. React ve Node.js teknolojileriyle hızlı, güvenli ve ölçeklenebilir çözümler üretiyoruz. Müşteri portallarından iç operasyon sistemlerine kadar ihtiyacınıza göre esnek mimariler kuruyoruz. Performans ve bakım kolaylığını merkeze alan yazılımlarla büyümenizi destekliyoruz.",
      },
      {
        heading: "CRM ve ERP Entegrasyonu",
        body: "İş süreçlerinizi dijitalleştirmek için özel CRM ve ERP çözümleri tasarlıyoruz. NKolay Medya ekibi, mevcut sistemlerinizle sorunsuz entegrasyon sağlayarak verimliliği artırır. Otomasyon, raporlama ve veri yönetimi modülleriyle işlerinizi kolaylaştırıyoruz. Doğru yazılım yatırımıyla maliyetleri düşürür ve karar süreçlerinizi güçlendirirsiniz.",
      },
      {
        heading: "API ve Üçüncü Parti Entegrasyonlar",
        body: "Ödeme sistemleri, kargo, muhasebe ve pazarlama araçları gibi servisleri birbirine bağlıyoruz. NKolay Medya olarak güvenli RESTful ve GraphQL API geliştiriyor, üçüncü parti entegrasyonları kuruyoruz. Böylece verileriniz tek kaynaktan akar, manuel iş yükü azalır. Esnek yapımızla yeni entegrasyonları kolayca ekleyebilirsiniz.",
      },
    ],
    faq: [
      {
        question: "Hangi teknolojileri kullanıyorsunuz?",
        answer: "React, Node.js, TypeScript ve bulut altyapıları tercih ediyoruz. NKolay Medya olarak ölçeklenebilir ve bakımı kolay mimariler kurarız. Proje gereksinimine göre en uygun teknoloji yığınını önerir ve uygularız.",
      },
      {
        question: "Yazılım bakımını da yapıyor musunuz?",
        answer: "Evet, yayın sonrası bakım, güncelleme ve teknik destek sağlıyoruz. NKolay Medya olarak yazılımınızın güvenli ve güncel kalmasını sağlayarak kesintisiz çalışmasını garanti ederiz.",
      },
      {
        question: "Fiyatlandırma nasıl belirleniyor?",
        answer: "Projenin kapsamı, modülleri ve entegrasyon sayısına göre teklif sunuyoruz. NKolay Medya olarak şeffaf bir fiyatlandırma modeliyle ihtiyacınıza uygun çözüm üretiriz.",
      },
    ]
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
    benefits: ["Hızlı ve Pürüzsüz Kullanıcı Deneyimi", "App Store ve Play Store Optimizasyonu (ASO)", "Kesintisiz Push Notification Altyapısı", "Yüksek Dönüşümlü Ödeme Entegrasyonları"],
    detailSections: [
      {
        heading: "iOS ve Android Geliştirme",
        body: "NKolay Medya olarak native ve cross-platform mobil uygulamalar geliştiriyoruz. React Native ve Flutter ile tek kod tabanından hem iOS hem Android için yüksek performanslı ürünler üretiyoruz. Kullanıcı dostu arayüzler, akıcı animasyonlar ve kararlı altyapıyla markanızı cep telefonlarına taşıyoruz. Mobil varlığınızı güçlendirerek müşterilerinize her an ulaşma imkanı sunuyoruz.",
      },
      {
        heading: "Push Bildirim ve Uygulama İçi Satın Alma",
        body: "Kullanıcı etkileşimini artırmak için push notification ve in-app purchase altyapıları kuruyoruz. NKolay Medya olarak kişiselleştirilmiş bildirimlerle sadakat yaratıyor, abonelik ve satın alma modelleriyle gelirinizi artırıyoruz. Uygulama içi deneyimi optimize ederek dönüşüm oranlarınızı yükseltmenize yardımcı oluyoruz.",
      },
      {
        heading: "ASO ve Mağaza Optimizasyonu",
        body: "Uygulamanızın keşfedilebilirliğini artırmak için App Store Optimization çalışmaları yürütüyoruz. NKolay Medya ekibi anahtar kelime, görseller ve açıklama optimizasyonuyla indirme sayınızı artırır. Rakip analizi ve sürekli iyileştirmeyle mağaza sıralamanızı yükselterek organik büyüme sağlıyoruz.",
      },
    ],
    faq: [
      {
        question: "Tek kod ile iki platform mümkün mü?",
        answer: "Evet, React Native ve Flutter ile iOS ve Android için tek kod tabanından uygulama geliştiriyoruz. NKolay Medya olarak maliyet ve süreyi optimize ederken kaliteden ödün vermeyiz.",
      },
      {
        question: "Uygulamayı mağazalara siz mi yüklüyorsunuz?",
        answer: "Evet, App Store ve Google Play yayın süreçlerini yönetiyoruz. NKolay Medya olarak gereken tüm hesap, açıklama ve görselleri hazırlayarak sorunsuz yayın sağlarız.",
      },
      {
        question: "ASO neden önemlidir?",
        answer: "ASO, uygulamanızın mağazalarda görünür olmasını sağlar ve organik indirmeleri artırır. NKolay Medya olarak doğru stratejiyle reklam bütçesinden tasarruf ettiririz.",
      },
    ]
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
    benefits: ["Sürekli ve Organik Ziyaretçi Artışı", "Sektörde Otorite Konumu", "Hedef Kitleyle Doğrudan Eşleşme", "Rakip Analizi ile Stratejik Üstünlük"],
    detailSections: [
      {
        heading: "Teknik SEO ve Site Sağlığı",
        body: "NKolay Medya olarak web sitenizin teknik altyapısını SEO uyumlu hale getiriyoruz. Sayfa hızı, mobil uyum, crawl hataları ve yapısal veri gibi kritik konuları optimize ediyoruz. Sağlıklı bir teknik temel, arama motorlarının sizi doğru anlamasını sağlar. Düzenli denetimlerle sıralamanızı koruyor ve organik trafiğinizi sürekli artırıyoruz.",
      },
      {
        heading: "On-Page ve İçerik Optimizasyonu",
        body: "Başlıklar, meta açıklamaları, iç bağlantılar ve kaliteli içerikle sayfalarınızı güçlendiriyoruz. NKolay Medya olarak hedef anahtar kelimelerinizi doğal biçimde kullanarak kullanıcıya ve Google'a değer katıyoruz. İçerik stratejimizle otoritenizi artırıyor, ziyaretçilerinizi müşteriye dönüştüren sayfalar üretiyoruz.",
      },
      {
        heading: "Backlink ve Yerel SEO",
        body: "Otoritenizi artırmak için kaliteli backlink inşası ve yerel SEO çalışmaları yürütüyoruz. NKolay Medya olarak Google İşletme Profili ve yerel dizinleri optimize ederek bölgenizde görünürlüğünüzü artırır. Google birinci sayfa hedefiyle organik büyümenizi sürdürülebilir şekilde destekliyoruz.",
      },
    ],
    faq: [
      {
        question: "SEO sonuçları ne zaman görünür?",
        answer: "Genellikle 3 ila 6 ay içinde organik artış başlar. NKolay Medya olarak stratejik planlama ve düzenli raporlama ile süreci şeffaf şekilde yönetir, sıralamanızı kalıcılaştırırız.",
      },
      {
        question: "Yerel SEO nedir ve kimler için uygundur?",
        answer: "Bölgesel müşterilere ulaşmak isteyen işletmeler için idealdir. NKolay Medya olarak Google Haritalar ve yerel aramalarda öne çıkarak mağazanıza trafik çekeriz.",
      },
      {
        question: "Backlink çalışması güvenli mi?",
        answer: "Evet, yalnızca kaliteli ve ilgili sitelerden doğal backlink üretiyoruz. NKolay Medya olarak ceza riski taşımayan, sürdürülebilir otorite inşası yapıyoruz.",
      },
    ]
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
    benefits: ["Akılda Kalıcı Fiziksel Deneyim", "Premium Kalitede Kurumsal Evraklar", "Fark Yaratan Promosyon ve Ambalajlar", "Marka Prestijinde Bütünlük"],
    detailSections: [
      {
        heading: "Kurumsal Baskı ve Kartvizit",
        body: "NKolay Medya olarak kartvizit, antetli kağıt ve kurumsal matbu evraklarınızı premium kalitede basıyoruz. Markanıza uygun görseller ve doğru malzeme seçimiyle profesyonel bir ilk izlenim yaratıyoruz. Hızlı teslimat ve uygun fiyat avantajıyla ihtiyaçlarınızı karşılıyoruz. Baskılı tüm ürünlerinizde tutarlı kurumsal kimlik sağlayarak güveninizi pekiştiriyoruz.",
      },
      {
        heading: "Katalog ve Promosyon Ürünleri",
        body: "Ürünlerinizi en iyi anlatan katalog, broşür ve promosyon materyallerini tasarlayıp basıyoruz. NKolay Medya ekibi, göz alıcı görseller ve ikna edici düzenlerle satışlarınızı destekler. Müşteri eline geçen her dokunuşun marka değerine katkı sağlamasını hedefliyoruz. Toplu siparişlerde avantajlı fiyatlar sunuyoruz.",
      },
      {
        heading: "Ambalaj ve Kutu Tasarımı",
        body: "Ürününüzü koruyan ve markanızı yansıtan özel ambalaj ve kutu tasarımları üretiyoruz. NKolay Medya olarak gofre, lak ve yaldız gibi premium baskı teknikleriyle raflarda öne çıkmanızı sağlıyoruz. Etkileyici ambalaj, müşteri deneyimini zenginleştirir ve satın alma kararını olumlu etkiler.",
      },
    ],
    faq: [
      {
        question: "Hangi baskı tekniklerini sunuyorsunuz?",
        answer: "Gofre, lak, yaldız, ofset ve dijital baskı gibi pek çok teknikle hizmet veriyoruz. NKolay Medya olarak ihtiyacınıza en uygun yöntemi önererek kaliteli sonuçlar üretiriz.",
      },
      {
        question: "Minimum sipariş miktarı nedir?",
        answer: "Ürün türüne göre değişmekle birlikte küçük ve büyük tirajları destekliyoruz. NKolay Medya olarak esnek üretimle hem yeni girişimlere hem kurumsal müşterilere hitap ederiz.",
      },
      {
        question: "Tasarımı siz mi hazırlıyorsunuz?",
        answer: "Evet, baskıya uygun profesyonel tasarımları biz üretiyoruz. NKolay Medya olarak markanızı yansıtan özgün görsellerle matbu ürünlerinizi hazır hale getiririz.",
      },
    ]
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
    benefits: ["Ultra Hızlı Sayfa Yüklenmesi", "Kullanıcı Dostu İçerik Yönetimi", "Yüksek Güvenlik ve Düzenli Yedekleme", "Geniş Ölçeklenebilirlik (WooCommerce vb.)"],
    detailSections: [
      {
        heading: "Hızlı ve Güvenli WordPress Siteleri",
        body: "NKolay Medya olarak ultra hızlı, güvenli ve SEO uyumlu WordPress siteleri kuruyoruz. Önbellekleme, görsel optimizasyonu ve temiz kod yapısıyla açılış sürelerini minimize ediyoruz. Google sıralamasında avantaj sağlayan altyapıyla ziyaretçilerinizi memnun ediyoruz. Sağlam güvenlik önlemleriyle sitenizi tehditlere karşı koruyor, kesintisiz yayın sağlıyoruz.",
      },
      {
        heading: "Özel Tema ve WooCommerce",
        body: "Markanıza özel WordPress temaları ve WooCommerce altyapısı geliştiriyoruz. NKolay Medya olarak satış odaklı, dönüşüm optimize edilmiş e-ticaret deneyimleri sunuyoruz. Ürün yönetimi, ödeme entegrasyonu ve stok takibi gibi modülleri sorunsuz kuruyoruz. İhtiyacınıza göre esnek ve ölçeklenebilir çözümler üretiyoruz.",
      },
      {
        heading: "Bakım ve Performans Optimizasyonu",
        body: "Yayın sonrası düzenli bakım, güncelleme ve yedekleme hizmeti veriyoruz. NKolay Medya olarak hız ve güvenlik optimizasyonuyla sitenizin her zaman zirvede kalmasını sağlıyoruz. Olası sorunları önceden tespit edip müdahale ediyor, size sadece işinizi büyütmek kalıyor. Kesintisiz destekle güvence sunuyoruz.",
      },
    ],
    faq: [
      {
        question: "WordPress sitesi ne kadar sürede hazır olur?",
        answer: "Basit siteler birkaç günde, kapsamlı projeler birkaç haftada teslim edilir. NKolay Medya olarak net bir planlama ile süreci hızlandırır ve beklentilerinizi karşılarız.",
      },
      {
        question: "WooCommerce ile e-ticaret yapabilir miyim?",
        answer: "Evet, tam donanımlı WooCommerce mağazaları kuruyoruz. NKolay Medya olarak ödeme, kargo ve stok entegrasyonlarını sağlayarak satışa hemen başlamanızı mümkün kılarız.",
      },
      {
        question: "Bakım hizmeti zorunlu mu?",
        answer: "Zorunlu değil ancak önerilir. NKolay Medya olarak düzenli bakım ve güncellemeyle güvenliği artırır, beklenmedik sorunları önleriz.",
      },
    ]
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
    benefits: ["Arama Motorlarına Olumlu Hız Sinyali", "Kesintisiz Uptime (Erişilebilirlik)", "Veri Kaybına Karşı Felaret Kurtarma (Disaster Recovery)", "DDoS ve Malware Koruması"],
    detailSections: [
      {
        heading: "Bulut Sunucu ve Barındırma",
        body: "NKolay Medya olarak NVMe destekli bulut sunucu ve barındırma hizmetleri sunuyoruz. Yüksek performanslı altyapımızla web sitenizin ve uygulamalarınızın hızlı yanıt vermesini sağlıyoruz. Esnek kaynak yönetimiyle ihtiyacınıza göre ölçeklenen sistemler kuruyoruz. Kesintisiz hizmet anlayışıyla işletmenizin dijital varlığını güvenle büyütmenizi destekliyoruz.",
      },
      {
        heading: "Yedekleme ve Felaket Kurtarma",
        body: "Verilerinizin güvende olması için otomatik yedekleme ve felaket kurtarma çözümleri uyguluyoruz. NKolay Medya olarak düzenli snapshot ve uzak konum yedekleriyle veri kaybını önlüyoruz. Olası arıza senaryolarında hızlı geri yükleme yaparak iş sürekliliğinizi koruyoruz. Güvenilir altyapıyla içiniz rahat olsun.",
      },
      {
        heading: "SSL ve DDoS Koruması",
        body: "Web sitenizi ve kullanıcı verilerinizi korumak için SSL sertifikaları ve DDoS koruma sistemleri kuruyoruz. NKolay Medya olarak %99.9 uptime garantisiyle kesintisiz erişim sağlıyoruz. Gelişmiş güvenlik katmanlarıyla saldırıları engelliyor, güvenliği sürekli izliyoruz. Marka itibarınızı koruyan altyapıyı sunuyoruz.",
      },
    ],
    faq: [
      {
        question: "Sunucu hizmeti nasıl çalışır?",
        answer: "İhtiyacınıza uygun bulut sunucu kaynağı tahsis edip yapılandırıyoruz. NKolay Medya olarak kurulum, taşıma ve 7/24 izleme ile kesintisiz hizmet sağlarız.",
      },
      {
        question: "Uptime garantisi nedir?",
        answer: "%99.9 uptime ile hizmet kesintilerini en aza indiriyoruz. NKolay Medya olarak yedekli altyapı ve izlemeyle sitenizin her zaman erişilebilir olmasını garanti ederiz.",
      },
      {
        question: "Mevcut sunucumu taşıyabilir miyim?",
        answer: "Evet, mevcut sitenizi ve verilerinizi sorunsuz şekilde yeni altyapımıza taşıyoruz. NKolay Medya olarak veri kaybı yaşatmadan geçiş sürecini yönetiriz.",
      },
    ]
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
    benefits: ["Tutarlı Kurumsal Kimlik", "Algoritma Uyumlu İçerik Üretimi", "Aktif Müşteri İletişimi ve Topluluk Yönetimi", "Viral Olma Potansiyeli Taşıyan Kurgular"],
    detailSections: [
      {
        heading: "Aylık İçerik Planlama",
        body: "NKolay Medya olarak markanıza özel aylık içerik takvimi oluşturuyoruz. Hedef kitlenizi analiz ederek doğru zamanda doğru mesajı veriyoruz. Görsel ve metin üretimini stratejik planla yürütüyoruz. Tutarlı paylaşım ritmiyle farkındalığı artırıyor, marka sesinizi güçlendiriyoruz. İçeriklerimiz etkileşimi teşvik eder ve takipçi kitlenizi organik biçimde büyütür.",
      },
      {
        heading: "Görsel ve Copywriting Üretimi",
        body: "Etkileyici görseller ve ikna edici metinlerle markanızı anlatıyoruz. NKolay Medya ekibi, platforma uygun tasarım ve SEO dostu copywriting ile dikkat çeker. Reklam ve organik içeriklerde dönüşüm odaklı yaklaşım benimsiyoruz. Kaliteli içerik, takipçilerinizle kurduğunuz bağı güçlendirir ve satışa katkı sağlar.",
      },
      {
        heading: "Topluluk Yönetimi ve Raporlama",
        body: "Yorumları yanıtlıyor, soruları çözüyor ve sadık bir topluluk inşa ediyoruz. NKolay Medya olarak düzenli performans raporlarıyla büyümenizi şeffaf şekilde gösteriyoruz. Analizlere dayalı iyileştirmelerle stratejiyi sürekli optimize ediyoruz. Topluluk yönetimiyle müşteri memnuniyetini artırıyor, marka sadakatini pekiştiriyoruz.",
      },
    ],
    faq: [
      {
        question: "Sosyal medya yönetimi neleri kapsar?",
        answer: "İçerik planlama, görsel ve metin üretimi, topluluk yönetimi ve raporlama dahil tüm süreci yönetiyoruz. NKolay Medya olarak markanızı profesyonelce temsil ederiz.",
      },
      {
        question: "Hangi platformlarda hizmet veriyorsunuz?",
        answer: "Instagram, Facebook, LinkedIn, X ve TikTok gibi ana platformlarda çalışıyoruz. NKolay Medya olarak hedef kitlenize en uygun mecraları seçip yönetiriz.",
      },
      {
        question: "Performansı nasıl ölçüyorsunuz?",
        answer: "Erişim, etkileşim ve dönüşüm metriklerini raporluyoruz. NKolay Medya olarak veriye dayalı kararlarla stratejinizi sürekli iyileştirir, sonuçları şeffaf sunarız.",
      },
    ]
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
    benefits: ["Sarsılmaz Marka Güveni", "Kriz Anlarında Hızlı Müdahale", "Google Aramalarında Pozitif Algı", "Gelişmiş PR Entegrasyonları"],
    detailSections: [
      {
        heading: "Dijital İtibar Yönetimi ve Marka Algısı",
        body: "NKolay Medya olarak markanızın dijital dünyadaki algısını profesyonel araçlarla ölçüyor ve güçlendiriyoruz. Google arama sonuçlarında, sosyal medyada ve sektörel platformlarda marka algısı analizi yaparak olumsuz içerikleri tespit ediyoruz. Pozitif imajınızı öne çıkaran dijital PR çalışmalarıyla arama sonuçlarınızı iyileştiriyoruz. Böylece müşterileriniz sizi her zaman en iyi haliyle görüyor.",
      },
      {
        heading: "Kriz Yönetimi ve Hızlı Müdahale",
        body: "Çevrimiçi krizler anında büyüyebilir; biz NKolay Medya ekibi olarak 7/24 izleme yaparak olumsuz yayılımları erkenden yakalıyoruz. Kriz yönetimi sürecinde şeffaf bir iletişim stratejisi geliştiriyor, doğru açıklamalarla marka güvenini koruyoruz. Hazırladığımız aksiyon planı sayesinde itibar zararını en aza indiriyor ve markanızın kontrolünü hızla geri kazanmasını sağlıyoruz.",
      },
      {
        heading: "Olumsuz İçerik Optimizasyonu ve Pozitif SEO",
        body: "Arama motorlarında markanızla ilgili olumsuz içerikleri tespit edip olumsuz içerik optimizasyonu teknikleriyle etkisiz hale getiriyoruz. NKolay Medya olarak pozitif basın bültenleri, müşteri yorumları ve güçlü içerik stratejisiyle arama sonuçlarınızı yeniden şekillendiriyoruz. Uzun vadede Google'da markanız için güven veren, kalıcı bir dijital varlık oluşturuyoruz.",
      },
    ],
    faq: [
      {
        question: "İtibar yönetimi hizmeti ne kadar sürede sonuç verir?",
        answer: "Marka algısı analizi ve dijital PR çalışmalarımız genellikle ilk ay içinde olumlu sinyaller verir. Kalıcı sonuçlar için 3 ila 6 aylık stratejik bir süreç öneriyoruz. NKolay Medya olarak her aşamayı düzenli raporlarla şeffaf şekilde paylaşıyoruz.",
      },
      {
        question: "Google'da hakkımızdaki olumsuz yorumları kaldırtabilir misiniz?",
        answer: "Yasal olmayan içerikler için hukuki süreçleri yönetiyoruz; arama sonuçlarındaki olumsuz içerikleri optimizasyon ve pozitif içerikle geri plana itiyoruz. NKolay Medya, markanızın kontrolünü dijital PR ile güçlendirir.",
      },
      {
        question: "Kriz anında nasıl destek oluyorsunuz?",
        answer: "7/24 izleme sistemimizle krizleri anında tespit ediyor, hazır aksiyon planımızla hızlı müdahale ediyoruz. NKolay Medya kriz yönetimi ekibi, marka sesinizi koruyan açıklama ve iletişim stratejisi geliştirir.",
      },
    ]
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
    benefits: ["Sektörde Keskin Farkındalık", "Tüketici Zihninde Net Konumlandırma", "Bütünsel Kurumsal İmaj", "Uzun Vadeli Büyüme Vizyonu"],
    detailSections: [
      {
        heading: "Marka Konumlandırma ve Strateji",
        body: "NKolay Medya marka danışmanlığı ekibi olarak işletmenizi rakiplerden ayıran değerleri belirliyor ve güçlü bir marka konumlandırma stratejisi kuruyoruz. Hedef kitle ve rakip analizi yaparak pazardaki boşlukları tespit ediyor, markanızın sesini ve vaatlerini netleştiriyoruz. Böylece müşterilerinizle duygusal bağ kuran, akılda kalıcı ve sürdürülebilir bir kurumsal kimlik oluşturuyoruz.",
      },
      {
        heading: "Hedef Kitle ve Rakiplerin Derinlemesine Analizi",
        body: "Başarılı bir pazarlama stratejisi için doğru veri şarttır. NKolay Medya olarak hedef kitlenizin davranışlarını, beklentilerini ve satın alma motivasyonlarını analiz ediyoruz. Rakiplerin güçlü ve zayıf yönlerini kıyaslayarak size avantaj sağlayacak fırsatları belirliyoruz. Bu analizler ışığında markanızı doğru kanallarda, doğru mesajlarla konumlandırıyor ve büyümenizi hızlandırıyoruz.",
      },
      {
        heading: "Kurumsal Kimlik Kılavuzu ve Yeniden Konumlandırma",
        body: "Markanızın tutarlılığını korumak için detaylı kurumsal kimlik kılavuzu hazırlıyoruz; renkten tonlamaya kadar her detayı belirliyoruz. NKolay Medya, zamanla eskiyen markalar için yeniden konumlandırma projeleri yürütür. Güncel trendlere uygun pazarlama stratejisiyle imajınızı tazeler, müşteri sadakatini artırır ve pazarda güçlü bir yenilik algısı yaratırız.",
      },
    ],
    faq: [
      {
        question: "Marka danışmanlığı süreci nasıl ilerler?",
        answer: "Önce marka konumlandırma ve rakip analizi yaparız, ardından kurumsal kimlik kılavuzu ve pazarlama stratejisi oluştururuz. NKolay Medya olarak her aşamayı onayınıza sunar, markanıza özel yol haritasıyla uygulamaya geçeriz.",
      },
      {
        question: "Yeni bir marka mı yoksa mevcut marka yenilemesi mi yapıyorsunuz?",
        answer: "Her ikisini de yapıyoruz. Sıfırdan marka kuran ekibimiz, ayrıca yeniden konumlandırma ihtiyacı olan işletmelere modern kimlik ve strateji hizmeti sunar. NKolay Medya her markaya uygun çözüm üretir.",
      },
      {
        question: "Marka danışmanlığı fiyatları nelerdir?",
        answer: "Ücretler; marka konumlandırma kapsamı, analiz derinliği ve teslim edilecek kurumsal kimlik dokümanlarına göre değişir. NKolay Medya, ihtiyaçlarınıza göre esnek ve şeffaf teklifler sunar.",
      },
    ]
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
    benefits: ["Artan Ortalama Sepet Tutarı (AOV)", "Düşük Sepet Terk Etme Oranı", "Gelişmiş Çok Kanallı Satış (Omnichannel)", "Optimum Karlılık Analizi"],
    detailSections: [
      {
        heading: "E-Ticaret Platform Seçimi ve Kurulum",
        body: "NKolay Medya e-ticaret danışmanlığı ekibi olarak işletmenize en uygun platformu seçiyor ve sorunsuz kurulumunu gerçekleştiriyoruz. Shopify, WooCommerce veya özel altyapı arasında doğru tercihi yaparak teknik altyapınızı güçlendiriyoruz. Pazaryeri entegrasyonlarıyla Trendyol ve Hepsiburada üzerinde de satışa başlıyor, çok kanallı bir satış ağı kurarak işletmenizin dijital büyümesini sağlam temeller üzerine oturtuyoruz.",
      },
      {
        heading: "Dönüşüm Oranı Optimizasyonu (CRO)",
        body: "Ziyaretçilerinizi müşteriye dönüştürmek e-ticarette kârlılığın anahtarıdır. NKolay Medya olarak dönüşüm oranı optimizasyonu çalışmalarıyla ürün sayfalarını, ödeme akışını ve çağrı butonlarını iyileştiriyoruz. A/B testleri ve ısı haritası analizleriyle kullanıcı davranışını anlayıp sepet optimizasyonu yapıyoruz. Böylece ortalama sipariş tutarını (AOV) artırarak satışlarınızı ölçülebilir şekilde yükseltiyoruz.",
      },
      {
        heading: "Pazaryeri Entegrasyonu ve Sepet Optimizasyonu",
        body: "Trendyol, Hepsiburada ve diğer pazaryerlerinde güçlü görünmek için entegrasyonları kusursuz yönetiyoruz. NKolay Medya sepet optimizasyonu ile terk edilen sepet oranını düşürür, ödeme sürecini sadeleştirir. Stok ve fiyat senkronizasyonunu otomatikleştirerek operasyonel hataları önleriz. AOV artırma stratejileriyle müşterinizi daha fazla ürün almaya teşvik eden akıllı öneriler sunuyoruz.",
      },
    ],
    faq: [
      {
        question: "Hangi e-ticaret platformlarını öneriyorsunuz?",
        answer: "İşletme ölçeğine göre Shopify, WooCommerce veya özel altyapı öneriyoruz. NKolay Medya; Trendyol ve Hepsiburada pazaryeri entegrasyonlarını da ekleyerek çok kanallı satış stratejinizi kurar.",
      },
      {
        question: "Dönüşüm oranını ne kadar artırabilirim?",
        answer: "CRO ve sepet optimizasyonu çalışmalarımızla ortalama yüzde 20 ila 40 arası iyileşme sağlıyoruz. NKolay Medya, A/B testleriyle ölçülebilir sonuçlar sunar ve AOV artırma hedeflerine odaklanır.",
      },
      {
        question: "Pazaryeri entegrasyonu ne kadar sürer?",
        answer: "Stok ve fiyat senkronizasyonu dahil entegrasyonlar genellikle 2 ila 4 haftada tamamlanır. NKolay Medya süreci yönetir, testleri yaparak kesintisiz çok kanallı satış geçişi sağlar.",
      },
    ]
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
    benefits: ["Duygusal Bağ Kuran Görsellik", "Profesyonel Senaryo ve Seslendirme Uyum", "Platforma Özel Format Üretimi (Yatay/Dikey)", "Yüksek Dönüşüm Getiren Reklam Materyalleri"],
    detailSections: [
      {
        heading: "Profesyonel Senaryo ve Yönetmenlik",
        body: "NKolay Medya video prodüksiyon ekibi olarak markanızın hikayesini etkileyici senaryolarla kurguluyoruz. Hedef kitlenize hitap eden, akıcı ve ikna edici metinler yazıp görsel dilinizi belirliyoruz. Kurumsal tanıtım filmlerinden sosyal medya içeriklerine kadar her projede stratejik bir yaklaşım benimsiyoruz. Böylece izleyiciyi harekete geçiren, marka bilinirliğinizi artıran kaliteli videolar üretiyoruz.",
      },
      {
        heading: "Kamera ve Drone Çekimi",
        body: "Yüksek çözünürlüklü ekipmanlarımız ve deneyimli ekibimizle sinematik görüntüler kaydediyoruz. NKolay Medya drone çekimiyle etkileyici havadan planlar sunar, mekan ve ürünlerinizi en iyi açılardan görüntüler. İç ve dış mekan çekimlerinde ışık ve kompozisyonu profesyonelce yöneterek her karede markanıza yakışan görseller oluşturuyoruz. Hareketli sahnelerde bile netlik ve estetik ön planda tutulur.",
      },
      {
        heading: "Post-Prodüksiyon ve Dikey İçerik Üretimi",
        body: "Çekilen görüntüleri post-prodüksiyon aşamasında birleştiriyor, color grading ile renkleri zenginleştiriyoruz. NKolay Medya, Reels ve TikTok gibi platformlar için dikey içerik formatları üretir. Ses tasarımı, grafik ve montajla videolarınızı optimize ederek organik erişiminizi artırıyoruz. Kısa, dikkat çekici ve paylaşılabilir içeriklerle sosyal medya hesaplarınızı canlandırıyoruz.",
      },
    ],
    faq: [
      {
        question: "Video prodüksiyon süresi ne kadar sürer?",
        answer: "Senaryo, çekim ve post-prodüksiyon dahil kurumsal videolar genelde 1 ila 3 haftada tamamlanır. NKolay Medya, color grading ve montajı da kapsayan şeffaf bir üretim takvimi sunar.",
      },
      {
        question: "Drone çekimi yapıyor musunuz?",
        answer: "Evet, profesyonel drone çekimiyle havadan etkileyici görüntüler kaydediyoruz. NKolay Medya; kurumsal tanıtım ve mekan videolarında sinematik planlar için drone kullanır.",
      },
      {
        question: "Reels ve TikTok için içerik üretiyor musunuz?",
        answer: "Evet, dikey içerik formatında Reels ve TikTok videoları hazırlıyoruz. NKolay Medya; post-prodüksiyon ve trend analiziyle markanıza uygun, paylaşılabilir kısa videolar üretir.",
      },
    ]
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
    benefits: ["Geniş Sanatçı ve Dil Seçeneği", "Kusursuz Ses Kalitesi ve Mastering", "Kurumsal Kimliğe Uygun Ses Rengi", "Hızlı Teslimat"],
    detailSections: [
      {
        heading: "Reklam ve Tanıtım Seslendirmesi",
        body: "NKolay Medya seslendirme hizmetleriyle markanızın sesini profesyonel stüdyo kalitesinde duyuruyoruz. Reklam filmi, radyo spotu ve tanıtım videoları için geniş sanatçı havuzumuzdan markanıza en uygun sesi seçiyoruz. Doğru tonlama ve duygusal vurguyla mesajınızı güçlendiriyor, hedef kitlenizle güçlü bir bağ kuruyoruz. Kaliteli ses tasarımı marka algınızı premium bir seviyeye taşır.",
      },
      {
        heading: "IVR ve Santral Anonsları",
        body: "Müşteri deneyiminin ilk adımı net ve dostça bir sestir. NKolay Medya olarak IVR ve santral anonslarını markanızın kurumsal tonuna uygun şekilde hazırlıyoruz. Çoklu dil desteğiyle yabancı müşterilerinizi de karşılıyor, çağrı merkezi süreçlerinizi profesyonelleştiriyoruz. Stüdyo kaydı ve düzenlemeyle anlaşılır, sıcak ve güven veren bir iletişim deneyimi sunuyoruz.",
      },
      {
        heading: "Çoklu Dil ve Stüdyo Kalitesi",
        body: "Global pazara açılan markalar için çoklu dil seslendirme çözümleri sunuyoruz. NKolay Medya bünyesindeki geniş sanatçı havuzu; Türkçe ve yabancı dillerde uzman sesler barındırır. Profesyonel stüdyo kalitesinde, gürültüsüz ve net kayıtlar yapıyor; post-prodüksiyonda sesi mükemmelleştiriyoruz. Böylece her kanalda tutarlı, etkileyici ve uluslararası standartta bir marka sesi yaratıyoruz.",
      },
    ],
    faq: [
      {
        question: "Hangi dillerde seslendirme yapıyorsunuz?",
        answer: "Türkçe başta olmak üzere İngilizce, Almanca, Arapça ve birçok dilde çoklu dil seslendirme sunuyoruz. NKolay Medya geniş sanatçı havuzuyla markanıza uygun yabancı sesler sağlar.",
      },
      {
        question: "Seslendirme kayıt kalitesi nasıldır?",
        answer: "Tüm kayıtlar profesyonel stüdyo kalitesinde, gürültüsüz ve net yapılır. NKolay Medya post-prodüksiyon sürecinde sesi düzenleyerek reklam ve IVR standartlarına uygun sonuç verir.",
      },
      {
        question: "IVR anonslarını kimin sesiyle hazırlıyorsunuz?",
        answer: "Markanızın kurumsal tonuna uygun sanatçıyı geniş havuzumuzdan seçiyoruz. NKolay Medya; santral anonsları ve IVR için doğru tonda, güven veren profesyonel sesler sunar.",
      },
    ]
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
    benefits: ["Riski Minimize Edilmiş Adımlar", "Net Geri Dönüş (ROI) Odaklılık", "Pazardaki Boşlukları Yakalama Fırsatı", "Karar Almada Veri Tabanlı Rehberlik"],
    detailSections: [
      {
        heading: "Büyüme Stratejileri ve Growth Hacking",
        body: "NKolay Medya strateji geliştirme ekibi olarak işletmenize özel büyüme (growth) stratejileri tasarlıyoruz. Veriye dayalı deneyimlerle müşteri edinme ve elde tutma süreçlerinizi optimize ediyor, growth hacking teknikleriyle hızlı ve ölçeklenebilir sonuçlar alıyoruz. Kanallar arası entegrasyonu güçlendirerek markanızın sürdürülebilir büyümesini destekliyor, her yatırımın getirisini net şekilde raporluyoruz.",
      },
      {
        heading: "Veri Analizi ve Pazar Araştırması",
        body: "Doğru kararlar sağlam veriyle alınır. NKolay Medya olarak pazar araştırması ve veri analizi yaparak sektör trendlerini, müşteri davranışlarını ve fırsatları netleştiriyoruz. Rakiplerinizi izleyip hedef kitlenizin gerçek ihtiyaçlarını ortaya koyuyoruz. Bu içgörüler ışığında stratejinizi şekillendiriyor, dijital dönüşüm yol haritasıyla işletmenizi geleceğe hazırlıyoruz.",
      },
      {
        heading: "Dijital Dönüşüm ve KPI Yönetimi",
        body: "NKolay Medya, dijital dönüşüm yol haritasıyla iş süreçlerinizi modernleştiriyor ve KPI yönetimiyle performansı ölçülebilir kılıyoruz. Belirlediğimiz temel performans göstergeleriyle stratejilerinizi sürekli iyileştiriyor, sürdürülebilir büyüme için çevik aksiyonlar alıyoruz. Şeffaf raporlama sayesinde yatırımlarınızın etkisini anlık takip ediyor, büyümenizi istikrarlı şekilde yönetiyorsunuz.",
      },
    ],
    faq: [
      {
        question: "Strateji geliştirme süreci nasıl başlar?",
        answer: "Pazar araştırması ve veri analiziyle mevcut durumu inceleriz, ardından dijital dönüşüm yol haritası oluştururuz. NKolay Medya, KPI yönetimiyle ölçülebilir büyüme stratejisi sunar.",
      },
      {
        question: "Growth stratejileri neden önemlidir?",
        answer: "Growth yaklaşımıyla müşteri edinimi ve elde tutma maliyetlerinizi düşürür, sürdürülebilir büyüme sağlarsınız. NKolay Medya veriye dayalı deneyimlerle hızlı sonuç getirir.",
      },
      {
        question: "KPI yönetimini nasıl raporluyorsunuz?",
        answer: "Belirlenen temel göstergeleri şeffaf panolarla düzenli raporluyoruz. NKolay Medya, strateji performansınızı anlık izlemenizi ve aksiyon almanızı kolaylaştırır.",
      },
    ]
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
    benefits: ["Müşteri Memnuniyetinde Anında Artış", "Satışları Kaçırmama (7/24 Aktif)", "Operasyonel Maliyetlerde Büyük Düşüş", "Hata Payı Sıfır Süreç Yönetimi"],
    detailSections: [
      {
        heading: "WhatsApp ve Sosyal Medya DM Botları",
        body: "NKolay Medya otomasyon bot hizmetleriyle müşterilerinizle anında iletişim kuruyorsunuz. Geliştirdiğimiz WhatsApp ve DM botları, gelen mesajları otomatik yanıtlar; soruları hızlı çözüp satış hunisini besler. Yapay zeka (AI/NLP) destekli bu sistemler doğal dilde anlaşır, müşteri memnuniyetini artırır. 7/24 çalışan botlarımızla hiçbir fırsatı kaçırmadan lead oluşturursunuz.",
      },
      {
        heading: "CRM Otomasyon Entegrasyonları",
        body: "Müşteri ilişkileri yönetimini otomatikleştirmek satışları artırır. NKolay Medya olarak CRM otomasyon entegrasyonları kurarak verilerinizi tek merkezde topluyoruz. Lead takibi, e-posta akışları ve görev atamalarını sistemleştirip manuel iş yükünü azaltıyoruz. İş süreçleri otomasyonu sayesinde ekibiniz stratejiye odaklanır, müşteri yolculuğu kesintisiz ve kişiselleştirilmiş hale gelir.",
      },
      {
        heading: "Yapay Zeka Destekli 7/24 İş Süreçleri",
        body: "NKolay Medya, AI/NLP teknolojileriyle iş süreçleri otomasyonunu bir üst seviyeye taşır. 7/24 yanıt veren akıllı asistanlarımızla destek taleplerini yönetir, sipariş ve randevu süreçlerini otomatikleştiririz. Tekrarlayan görevleri ortadan kaldırarak maliyetleri düşürür, verimliliği artırırız. Ölçeklenebilir bot mimarimizle işletmeniz büyürken operasyonel yükünüz sabit kalır.",
      },
    ],
    faq: [
      {
        question: "WhatsApp botu kurmak zor mudur?",
        answer: "Hayır, NKolay Medya olarak entegrasyonu sizin adınıza kuruyoruz. AI/NLP destekli botlarımız 7/24 çalışır, gelen mesajları otomatik yanıtlar ve satış sürecini destekler.",
      },
      {
        question: "Kullandığınız CRM sistemleri nelerdir?",
        answer: "Popüler CRM platformlarının çoğuyla CRM otomasyon entegrasyonu yapabiliyoruz. NKolay Medya, mevcut altyapınıza uygun iş süreçleri otomasyonu kurar.",
      },
      {
        question: "Botlar gerçekten insanlarla mı iletişim kurar?",
        answer: "Evet, AI/NLP destekli botlarımız doğal dilde anlar ve 7/24 yanıt verir. NKolay Medya; karmaşık taleplerde insan ekibinize sorunsuz yönlendirme yapar.",
      },
    ]
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
    benefits: ["KVKK ve GDPR Uyumluluğu", "Sıfır Gün (Zero-Day) Açıklarına Karşı Önlem", "Kurumsal Veri Mahremiyeti", "Kesintisiz Güvenli İş Akışı"],
    detailSections: [
      {
        heading: "Sızma Testleri ve Güvenlik Açığı Taraması",
        body: "NKolay Medya siber güvenlik ekibi olarak işletmenizin zafiyetlerini sızma (penetrasyon) testleriyle gerçek saldırgan gözüyle ortaya çıkarıyoruz. Düzenli güvenlik açığı taraması yaparak sistemlerinizi, uygulamalarınızı ve ağınızı sürekli denetliyoruz. Bulunan açıkları önceliklendirip somut çözüm önerileri sunuyoruz. Böylece verilerinizi korur, müşteri güvenini güvence altına alır ve olası ihlalleri engellersiniz.",
      },
      {
        heading: "DDoS ve Bot Koruması",
        body: "Online varlığınızı hedef alan saldırılar işinizi durdurabilir. NKolay Medya olarak DDoS ve bot koruması çözümleriyle sunucularınızı ve web sitenizi sürekli izliyor, anormal trafiği anında engelliyoruz. Gelişmiş filtreleme ve rate-limiting ile kötü niyetli botları durdurup gerçek kullanıcılarınızın kesintisiz erişimini sağlıyoruz. Böylece hizmet sürekliliğinizi ve itibarınızı koruyoruz.",
      },
      {
        heading: "Veri Şifreleme ve KVKK/GDPR Uyumluluğu",
        body: "Kişisel verileriniz en değerli varlığınızdır. NKolay Medya veri şifreleme yöntemleriyle bilgilerinizi aktarım ve depolama sırasında korur. KVKK ve GDPR uyumluluğu danışmanlığıyla mevzuata tam uyum sağlar, gerekli politikaları ve aydınlatma metinlerini hazırlarız. Düzenli denetimlerle uyumunuzu sürdürür, olası cezaları önler ve müşterilerinize güven verirsiniz.",
      },
    ],
    faq: [
      {
        question: "Sızma testi ne sıklıkla yapılmalıdır?",
        answer: "Önerimiz yılda en az bir kez ve her büyük güncellemede penetrasyon testi yapmaktır. NKolay Medya düzenli güvenlik açığı taramasıyla sisteminizi sürekli korur.",
      },
      {
        question: "KVKK ve GDPR uyumluluğu sağlıyor musunuz?",
        answer: "Evet, KVKK ve GDPR uyumluluğu için gerekli politikaları ve aydınlatma metinlerini hazırlıyoruz. NKolay Medya veri şifreleme ve denetimlerle uyumunuzu sürdürür.",
      },
      {
        question: "DDoS saldırılarına karşı nasıl korunuyoruz?",
        answer: "Gelişmiş DDoS ve bot koruması ile trafiği izleyip anormal akışları anında engelliyoruz. NKolay Medya, hizmet sürekliliğinizi ve erişilebilirliğinizi garanti altına alır.",
      },
    ]
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
    id: "blog-6",
    title: "Dijital Pazarlama Nedir? 2026 İçin Kapsamlı Başlangıç Rehberi",
    slug: "dijital-pazarlama-nedir-rehber",
    excerpt:
      "Dijital pazarlama nedir, hangi kanallardan oluşur ve küçük işletmeler nereden başlamalı? SEO'dan sosyal medyaya, Google Ads'ten e-posta pazarlamasına eksiksiz rehber.",
    category: "Dijital Pazarlama",
    tags: ["Dijital Pazarlama", "Strateji", "Başlangıç", "Pazarlama Kanalları"],
    author: "NKolay Medya Strateji Ekibi",
    publishedAt: "2026-07-18",
    readTime: "12 dk",
    coverEmoji: "📈",
    content: [
      {
        body: "Dijital pazarlama, bir markanın ürün veya hizmetlerini internet üzerinden hedef kitlesine ulaştırmak için kullandığı tüm strateji ve kanalların bütünüdür. Arama motorları, sosyal medya, e-posta, içerik ve ücretli reklamlar bu ekosistemin temel taşlarıdır. Türkiye'de internet kullanım oranının %85'i aştığı bu dönemde, dijital varlığı olmayan bir işletme rakiplerinin gerisinde kalmaya mahkûmdur.",
      },
      {
        heading: "Dijital Pazarlama Neden Bu Kadar Önemli?",
        body: "Geleneksel reklam yöntemlerinin aksine dijital pazarlama ölçülebilir, hedeflenebilir ve esnektir. Kime, ne zaman, hangi mesajı gösterdiğinizi bilebilir; her harcanan liranın geri dönüşünü (ROI) net biçimde takip edebilirsiniz. Küçük bir bütçeyle bile doğru kitleye ulaşmak mümkündür.",
      },
      {
        heading: "1. Arama Motoru Optimizasyonu (SEO)",
        body: "SEO, web sitenizin Google gibi arama motorlarında organik olarak üst sıralara çıkmasını sağlar. Kullanıcı bir ürün ararken markanızı ilk sayfada görürse, hiç reklam vermeden düzenli ve ücretsiz trafik kazanırsınız. Uzun vadeli en yüksek ROI'yi sunan kanaldır.",
      },
      {
        heading: "2. Ücretli Reklamlar (Google Ads & Meta Ads)",
        body: "Hızlı sonuç isteyen markalar için ücretli reklam vazgeçilmezdir. Google Ads ile satın alma niyeti yüksek kullanıcıları, Meta (Instagram/Facebook) reklamlarıyla ise ilgi alanına göre potansiyel müşterileri yakalarsınız. Doğru kurulan kampanyalar günler içinde satış getirir.",
      },
      {
        heading: "3. Sosyal Medya Pazarlaması",
        body: "Instagram, TikTok, LinkedIn ve YouTube markanızın kişiliğini gösterdiği alanlardır. Düzenli ve değer katan içerik, topluluk oluşturur ve marka sadakati yaratır. Sosyal medya aynı zamanda müşteri hizmetleri ve itibar yönetimi için de kritiktir.",
      },
      {
        heading: "4. İçerik Pazarlaması",
        body: "Blog yazıları, rehberler, videolar ve infografikler hem SEO'yu besler hem de markanızı sektörde otorite konumuna taşır. 'Satmadan satan' bu yaklaşım, müşteri güvenini en sağlam şekilde inşa eder.",
      },
      {
        heading: "5. E-Posta Pazarlaması",
        body: "En yüksek geri dönüş oranına sahip kanallardan biridir. Doğru segmentlenmiş listeler ve otomasyonlarla, mevcut müşterilerinizi tekrar satın almaya teşvik eder, terk edilen sepetleri geri kazanırsınız.",
      },
      {
        heading: "Küçük İşletmeler Nereden Başlamalı?",
        body: "Önce hedeflerinizi netleştirin: marka bilinirliği mi, satış mı, potansiyel müşteri toplama mı? Ardından hedef kitlenizin en çok vakit geçirdiği 1-2 kanala odaklanın. Her şeyi aynı anda yapmaya çalışmak yerine, ölçülebilir küçük adımlarla başlayıp veriye göre büyüyün.",
      },
      {
        body: "NKolay Medya olarak markanıza özel dijital pazarlama stratejisini ücretsiz strateji raporuyla sunuyoruz. Hangi kanalın işletmeniz için en verimli olduğunu birlikte belirleyelim.",
      },
    ],
  },
  {
    id: "blog-7",
    title: "Yerel SEO Nedir? Google Haritalar'da Üst Sıralara Çıkma Rehberi",
    slug: "yerel-seo-google-haritalar-rehberi",
    excerpt:
      "İşletmenizi 'yakınımdaki' aramalarında ilk sıraya taşıyın. Google İşletme Profili optimizasyonu, yorumlar ve yerel SEO taktikleriyle bölgesel müşteri kazanın.",
    category: "SEO",
    tags: ["Yerel SEO", "Google İşletme Profili", "Google Haritalar", "Yorumlar"],
    author: "NKolay Medya SEO Ekibi",
    publishedAt: "2026-07-15",
    readTime: "10 dk",
    coverEmoji: "📍",
    content: [
      {
        body: "Yerel SEO, belirli bir coğrafi bölgede hizmet veren işletmelerin 'yakınımdaki restoran', 'İstanbul diş hekimi' gibi konum bazlı aramalarda öne çıkmasını sağlayan optimizasyon çalışmalarıdır. Google aramalarının %46'sı yerel niyet taşır ve bu aramaların büyük çoğunluğu 24 saat içinde bir satın alma veya ziyaretle sonuçlanır.",
      },
      {
        heading: "Google İşletme Profili'ni Eksiksiz Doldurun",
        body: "Yerel SEO'nun kalbi Google İşletme Profili'dir (eski adıyla Google My Business). İşletme adı, adres, telefon, çalışma saatleri, kategori ve hizmet bilgilerini eksiksiz ve tutarlı girin. Profilinizi doğrulamayı unutmayın; doğrulanmamış işletmeler haritada görünmez.",
      },
      {
        heading: "NAP Tutarlılığı Sağlayın",
        body: "NAP; Name (isim), Address (adres) ve Phone (telefon) demektir. Bu bilgiler web siteniz, sosyal medyanız ve tüm rehber sitelerinde birebir aynı olmalıdır. Küçük farklılıklar bile Google'ın işletmenize duyduğu güveni zedeler.",
      },
      {
        heading: "Müşteri Yorumlarını Aktif Yönetin",
        body: "Yorumlar yerel sıralamanın en güçlü sinyallerinden biridir. Memnun müşterilerden düzenli yorum isteyin, hem olumlu hem olumsuz tüm yorumlara profesyonelce yanıt verin. Yüksek puan ve yorum sayısı hem sıralamayı hem tıklamayı artırır.",
      },
      {
        heading: "Yerel Anahtar Kelimeleri Kullanın",
        body: "Web sitenizin başlık, açıklama ve içeriklerinde şehir ve semt adlarını doğal biçimde kullanın. 'Esenyurt web tasarım', 'İstanbul dijital ajans' gibi konum + hizmet kombinasyonları hedefleyin.",
      },
      {
        heading: "Yerel İçerik ve Backlink Üretin",
        body: "Bölgenizle ilgili blog yazıları, yerel etkinlik sponsorlukları ve bölgesel iş rehberlerine kayıt, yerel otoritenizi güçlendirir. Yerel gazete ve bloglardan alınan bağlantılar altın değerindedir.",
      },
      {
        body: "NKolay Medya olarak İstanbul ve tüm Türkiye'deki işletmeler için yerel SEO yönetimi sunuyoruz. Google Haritalar'da ilk 3'e girmenin yolunu birlikte açalım.",
      },
    ],
  },
  {
    id: "blog-8",
    title: "TikTok Pazarlaması: Markanızı Milyonlara Ulaştırma Rehberi",
    slug: "tiktok-pazarlama-marka-buyume",
    excerpt:
      "TikTok artık sadece dans videoları değil; ciddi bir satış kanalı. Algoritma mantığı, içerik formatları ve TikTok Ads ile markanızı büyütün.",
    category: "Sosyal Medya",
    tags: ["TikTok", "Video Pazarlama", "Sosyal Medya", "Gen Z"],
    author: "NKolay Medya İçerik Ekibi",
    publishedAt: "2026-07-12",
    readTime: "8 dk",
    coverEmoji: "🎵",
    content: [
      {
        body: "TikTok, 1 milyarı aşan aktif kullanıcısıyla dünyanın en hızlı büyüyen sosyal platformu. Türkiye'de de her yaş grubundan kullanıcıyı bünyesinde barındırıyor. Doğru kullanıldığında, sıfır takipçiyle başlayan bir marka bile tek videoyla milyonlara ulaşabilir.",
      },
      {
        heading: "TikTok Algoritması Nasıl Çalışır?",
        body: "TikTok, takipçi sayınızdan çok içeriğinizin ilk saatlerdeki performansına bakar. İzlenme süresi, tamamlanma oranı, beğeni, yorum ve paylaşım sinyalleri videonuzu 'Sana Özel' akışında daha geniş kitlelere taşır. Bu yüzden viral olma şansı herkese eşittir.",
      },
      {
        heading: "İlk 2 Saniye Her Şeydir",
        body: "İzleyicinin dikkatini kaybetmemek için videoya güçlü bir kanca ile başlayın. Merak uyandıran bir soru, şaşırtıcı bir görsel veya net bir vaat ilk saniyelerde verilmeli.",
      },
      {
        heading: "Trendleri Markaya Uyarlayın",
        body: "Güncel sesler, formatlar ve hashtag akımlarını takip edip kendi ürününüze uyarlayın. Trendi erken yakalamak organik erişim için büyük avantaj sağlar.",
      },
      {
        heading: "TikTok Ads ile Ölçekleyin",
        body: "Organik olarak işe yarayan içerikleri Spark Ads ile ücretli olarak destekleyin. TikTok reklam platformu, düşük maliyetli görüntülenme ve yüksek etkileşim potansiyeli sunar.",
      },
      {
        body: "NKolay Medya olarak TikTok içerik üretimi ve reklam yönetimiyle markaların Gen Z ve genç kitleye ulaşmasını sağlıyoruz. Viral potansiyelinizi birlikte keşfedelim.",
      },
    ],
  },
  {
    id: "blog-9",
    title: "Web Sitesi Maliyeti 2026: Fiyatları Belirleyen Faktörler",
    slug: "web-sitesi-maliyeti-fiyatlari",
    excerpt:
      "Web sitesi ne kadara mal olur? Kurumsal siteden e-ticarete, fiyatları etkileyen tüm faktörleri ve nelere dikkat edilmesi gerektiğini açıklıyoruz.",
    category: "Tasarım & Teknoloji",
    tags: ["Web Tasarım", "Maliyet", "E-Ticaret", "Kurumsal Site"],
    author: "NKolay Medya Tasarım Ekibi",
    publishedAt: "2026-07-08",
    readTime: "9 dk",
    coverEmoji: "💻",
    content: [
      {
        body: "Bir web sitesinin maliyeti, tıpkı bir ev inşaatı gibi, kapsamına göre büyük farklılık gösterir. Tek sayfalık bir tanıtım sitesiyle yüzlerce ürünlü bir e-ticaret platformu aynı bütçeyle yapılamaz. Bu yazıda fiyatı belirleyen faktörleri şeffaf biçimde açıklıyoruz.",
      },
      {
        heading: "1. Site Türü ve Kapsamı",
        body: "Kurumsal tanıtım sitesi, blog, açılış sayfası (landing page), e-ticaret sitesi veya özel web uygulaması — her biri farklı iş yükü ve maliyet gerektirir. Sayfa sayısı ve fonksiyon karmaşıklığı doğrudan fiyata yansır.",
      },
      {
        heading: "2. Tasarım: Şablon mu, Özel mi?",
        body: "Hazır şablonlar hızlı ve uygun maliyetlidir ancak markanıza özgü değildir. Özel (custom) tasarım, rakiplerinizden ayrışmanızı sağlar ama daha fazla emek ve bütçe ister. Marka değeriniz büyüdükçe özel tasarım yatırıma dönüşür.",
      },
      {
        heading: "3. Fonksiyonel Gereksinimler",
        body: "Üyelik sistemi, ödeme entegrasyonu, çok dillilik, rezervasyon, CRM entegrasyonu gibi özellikler geliştirme süresini uzatır. Her ek özellik hem maliyeti hem de bakım gereksinimini artırır.",
      },
      {
        heading: "4. Altyapı: Hosting, Alan Adı ve Bakım",
        body: "İlk kurulum maliyetinin yanında hosting, SSL sertifikası, alan adı yenileme ve düzenli bakım/güncelleme giderlerini de bütçeye eklemek gerekir. Ucuz hosting çoğu zaman hız ve güvenlik sorunlarıyla geri döner.",
      },
      {
        heading: "5. SEO ve Hız Optimizasyonu",
        body: "Sadece güzel görünen değil, Google'da bulunan ve hızlı açılan bir site istiyorsanız, teknik SEO ve performans optimizasyonu da yatırımın parçasıdır. Bu, uzun vadede en çok geri dönüş sağlayan kalemdir.",
      },
      {
        body: "NKolay Medya olarak ihtiyacınıza göre şeffaf ve net fiyatlandırma sunuyoruz. Projenize özel ücretsiz teklif için bizimle iletişime geçin.",
      },
    ],
  },
  {
    id: "blog-10",
    title: "Marka Bilinirliği Nasıl Artırılır? Kanıtlanmış 8 Strateji",
    slug: "marka-bilinirligi-artirma-stratejileri",
    excerpt:
      "Güçlü bir marka, fiyat rekabetinden kurtulmanın anahtarıdır. Konumlandırmadan içerik pazarlamasına, marka bilinirliğini artıran 8 etkili yöntem.",
    category: "Dijital Pazarlama",
    tags: ["Marka", "Branding", "Marka Bilinirliği", "Konumlandırma"],
    author: "NKolay Medya Strateji Ekibi",
    publishedAt: "2026-07-02",
    readTime: "10 dk",
    coverEmoji: "✨",
    content: [
      {
        body: "Marka bilinirliği, hedef kitlenizin markanızı tanıma ve hatırlama düzeyidir. Güçlü bir marka; tüketicinin zihninde ilk sırada yer alır, fiyat rekabetinin dışına çıkar ve müşteri sadakati yaratır. İşte bilinirliği artırmanın kanıtlanmış yolları.",
      },
      {
        heading: "1. Net Bir Marka Konumlandırması Yapın",
        body: "Rakiplerinizden nasıl ayrıştığınızı tek cümleyle ifade edebilmelisiniz. 'Kime, hangi değeri, neden farklı sunuyorsunuz?' sorusunun cevabı tüm iletişiminizin temeli olmalı.",
      },
      {
        heading: "2. Tutarlı Görsel Kimlik Oluşturun",
        body: "Logo, renk paleti, tipografi ve ton — tüm kanallarda tutarlı olmalı. Tutarlılık, tanınırlığı ve profesyonellik algısını güçlendirir.",
      },
      {
        heading: "3. Değer Katan İçerik Üretin",
        body: "Sürekli satış yapmaya çalışmak yerine, kitlenizin sorunlarını çözen içerikler üretin. Bu yaklaşım markanızı otorite konumuna taşır ve güven inşa eder.",
      },
      {
        heading: "4. Sosyal Medyada Topluluk Kurun",
        body: "Takipçiyle etkileşime geçin, yorumlara yanıt verin, kullanıcı içeriklerini paylaşın. Bir marka değil, bir topluluk hissi yaratmak sadakati güçlendirir.",
      },
      {
        heading: "5. İş Birlikleri ve Influencer Pazarlaması",
        body: "Kitlenizle örtüşen mikro influencer'larla çalışmak, güvenilir bir tavsiye etkisi yaratır ve yeni kitlelere erişim sağlar.",
      },
      {
        heading: "6. Google ve Sosyal Medya Reklamları",
        body: "Görüntülenme (impression) odaklı marka kampanyaları, markanızı kısa sürede geniş kitlelere tanıtır. Retargeting ile hatırlanabilirliği pekiştirir.",
      },
      {
        heading: "7. Müşteri Deneyimini Kusursuzlaştırın",
        body: "En güçlü pazarlama, memnun müşterinin tavsiyesidir. Kaliteli hizmet ve pürüzsüz deneyim, ağızdan ağıza yayılan organik bilinirlik yaratır.",
      },
      {
        heading: "8. Ölçün ve Optimize Edin",
        body: "Marka arama hacmi, sosyal medya erişimi ve doğrudan trafik gibi metriklerle bilinirliğinizi düzenli takip edin ve stratejinizi veriye göre güncelleyin.",
      },
      {
        body: "NKolay Medya olarak marka stratejisi, kimlik tasarımı ve içerik yönetimiyle markanızı hedef kitlenizin zihninde ilk sıraya taşıyoruz.",
      },
    ],
  },
  {
    id: "blog-1",
    title: "2026'da Google Ads ile Dönüşüm Oranını Artırmanın 7 Yolu",
    slug: "google-ads-donusum-orani-2025",
    excerpt:
      "Google Ads kampanyalarınızdan daha fazla satış çıkmıyorsa, dönüşüm hunisi ve teklif stratejilerinizi bu 7 yöntemle optimize edin.",
    category: "Dijital Pazarlama",
    tags: ["Google Ads", "ROI", "Dönüşüm"],
    author: "NKolay Medya Strateji Ekibi",
    publishedAt: "2025-06-28",
    readTime: "7 dk",
    coverEmoji: "🎯",
    content: [
      {
        body: "Google Ads, doğru kurulduğunda işletmeler için en ölçülebilir büyüme kanalıdır. Ancak birçok marka yalnızca tıklama satın alır, dönüşüm satın almayı unutur. Bu yazıda güncel 7 pratik optimizasyonu özetliyoruz.",
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
    publishedAt: "2025-07-05",
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
    publishedAt: "2025-07-10",
    readTime: "6 dk",
    coverEmoji: "🎬",
    content: [
      {
        body: "Reels, markalar için en düşük maliyetli erişim kanalı. Ancak rastgele içerik üretmek işe yaramaz; algoritma belirli sinyalleri ödüllendirir.",
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
    publishedAt: "2025-07-14",
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
    slug: "ui-ux-tasarim-2025-trendleri",
    excerpt:
      "Web tasarımında yeni nesil eğilimler: mikro etkileşimler, koyu mod, erişilebilirlik ve yapay zeka destekli arayüzler.",
    category: "Tasarım & Teknoloji",
    tags: ["UI/UX", "Tasarım", "Trend"],
    author: "NKolay Medya Tasarım Ekibi",
    publishedAt: "2025-07-16",
    readTime: "5 dk",
    coverEmoji: "🎨",
    content: [
      {
        body: "İyi tasarım satar; kötü tasarım terk ettirir. Güncel kullanıcı beklentisi daha akıcı, daha hızlı ve daha erişilebilir deneyim.",
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
