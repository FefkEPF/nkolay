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
        heading: "Arama Ağı ve Görüntülü Ağ Stratejileriyle Doğru Kitleye Ulaşın",
        body: "Google Ads, işletmelerin potansiyel müşterilerine tam aradıkları anda ulaşmasını sağlayan dünyanın en güçlü dijital reklam platformudur. NKolay Medya olarak Arama Ağı kampanyalarıyla kullanıcıların aktif olarak aradığı anahtar kelimelere odaklanırken, Görüntülü Ağ ile marka bilinirliğinizi görsel hikayelerle geniş kitlelere taşırız. İstanbul'daki bir kuru temizlemeciden Ankara'daki bir e-ticaret sitesine kadar her ölçekteki işletme için hedefleme seçeneklerini optimize ederiz. Coğrafi hedefleme, cihaz bazlı teklif ayarları ve günün saatine göre budama yaparak bütçenizi israf etmeden en değerli tıklamaları satın alırsınız. Böylece reklam harcamanız değil, yatırım getiriniz konuşulur.",
      },
      {
        heading: "Anahtar Kelime Araştırması ve Negatif Kelime Yönetimi",
        body: "Başarılı bir Google Ads hesabının temeli sağlam bir anahtar kelime mimarisindedir. Ekibimiz, Google Anahtar Kelime Planlayıcı, SEMrush ve Search Console verilerini harmanlayarak işletmenize özel uzun kuyruklu ve yüksek niyetli kelimeleri belirler. Örneğin bir mobilya markası için sadece 'koltuk' değil, 'İzmir ikili koltuk kampanya' gibi dönüşüm odaklı terimleri hedefleriz. Eşleme türlerini doğru kullanmak kadar negatif kelime listelerini titizlikle yönetmek de kritiktir; böylece bütçeniz 'ücretsiz' veya 'iş ilanı' gibi alakasız aramalarda yanmaz. Düzenli negatif kelime temizliği sayesinde tıklama başına maliyetiniz düşer ve reklam kalite puanınız yükselir, bu da daha ucuza daha iyi sıralama anlamına gelir.",
      },
      {
        heading: "Kalite Puanı ve Açılış Sayfası Optimizasyonu",
        body: "Google'ın reklam sıralamanızı belirleyen kalite puanı, tahmini tıklama oranı, açılış sayfası deneyimi ve reklam alaka düzeyinin birleşimidir. NKolay Medya olarak yalnızca reklam metinlerini değil, reklamı tıklayan kullanıcının karşılaştığı açılış sayfasını da optimize ederiz. Hızlı yüklenen, mobil uyumlu ve arama niyetiyle birebir örtüşen açılış sayfaları dönüşüm oranınızı ciddi şekilde artırır. Örneğin bir hukuk danışmanlığı için 'boşanma avukatı' reklamını tıklayan kişi doğrudan ilgili hizmet sayfasına yönlendirilmelidir, genel ana sayfaya değil. Açılış sayfasındaki başlık, görsel ve çağrı butonlarının A/B testleriyle sürekli iyileştirilmesi, hem kalite puanınızı hem de maliyetinizin karşılığını yükseltir.",
      },
      {
        heading: "Dönüşüm İzleme ve ROI Odaklı Raporlama",
        body: "Reklam vermeden önce neyi ölçtüğünüzü bilmek zorundasınız. Google Ads hesabınızı Google Analytics 4 ve GTM ile entegre ederek form doldurma, telefon araması, sepete ekleme ve satın alma gibi mikro ve makro dönüşümleri doğru şekilde etiketleriz. 2026 yılında yapay zeka destekli teklif stratejileri (target CPA, target ROAS) devreye girdiğinde, sistem yalnızca doğru veriyle öğrenebilir. NKolay Medya olarak aylık değil haftalık olarak şeffaf raporlar sunar; harcanan her kuruşun hangi kanaldan gelen satışa dönüştüğünü gösteririz. Böylece pazarlama bütçenizi içgüdüyle değil, gerçek getiri verilerine dayanarak yönetirsiniz.",
      },
      {
        heading: "Sürekli Optimizasyon ve Bütçe Verimliliği",
        body: "Google Ads bir kez kurulup unutulacak bir sistem değildir; sürekli değişen açık artırma ortamında rekabet avantajınızı korumak için düzenli optimizasyon şarttır. Reklam programlarınızı dönemsel talep eğrilerine göre yeniden yapılandırır, düşük performanslı reklam gruplarını duraklatır ve bütçeyi en karlı kampanyalara kaydırırız. Rakip teklif analizleri ve mevsimsellik verileriyle Kurban Bayramı veya yılbaşı gibi özel dönemlerde tekliflerinizi otomatik ölçeklendiririz. Ayrıca yapay zeka destekli Responsive Search Ads ile onlarca başlık ve açıklama kombinasyonunu test ederek en iyi dönüşeni otomatik seçeriz. Sonuç; daha düşük maliyetle daha fazla nitelikli müşteri teması.",
      },
    ],
    faq: [
      {
        question: "Google Ads reklamları ne kadar sürede sonuç verir?",
        answer: "Arama Ağı kampanyaları genellikle ilk haftadan itibaren tıklama ve dönüşüm getirmeye başlar, ancak veri birikip makine öğrenimi teklif stratejileri olgunlaştıkça performans 4-8 hafta içinde belirgin şekilde iyileşir. Görüntülü Ağ ve marka bilinirliği odaklı çalışmaların etkisi daha uzun vadelidir. NKolay Medya olarak kurulum aşamasında beklentilerinizi net hedeflerle belirleriz.",
      },
      {
        question: "Küçük bir işletme için Google Ads bütçesi ne olmalıdır?",
        answer: "Kesin bir rakam vermek sektöre bağlıdır; rekabetin düşük olduğu yerel hizmetlerde aylık 5.000-10.000 TL ile başlanabilirken, rekabetçi sektörlerde bu tutar katlanabilir. Önemli olan bütçe büyüklüğü değil, doğru hedeflemeyle harcananın karşılığını almaktır. Önce karlılığı kanıtlayıp sonra bütçeyi ölçeklendirmenizi öneririz.",
      },
      {
        question: "Negatif kelime nedir ve neden önemlidir?",
        answer: "Negatif kelimeler, reklamınızın gösterilmesini istemediğiniz arama terimleridir. Örneğin ücretli danışmanlık satıyorsanız 'ücretsiz' kelimesini negatif ekleyerek boşa tıklama almayı engellersiniz. Bu yöntem tıklama başına maliyetinizi düşürür, kalite puanınızı yükseltir ve bütçenizi gerçek alıcıları getirecek kelimelere yönlendirir.",
      },
      {
        question: "Kalite puanı neden reklam maliyetimi etkiler?",
        answer: "Kalite puanı Google'ın reklamınızı ve açılış sayfanızı kullanıcı için ne kadar alakalı bulduğunun göstergesidir. Yüksek puan, daha iyi reklam sıralaması ve daha düşük maliyetli tıklama demektir. İyi bir kalite puanına sahip hesap, aynı pozisyon için rakibine göre belirgin biçimde daha az ödeme yapar ve bütçesini daha verimli kullanır.",
      },
      {
        question: "Dönüşüm izleme kurulmazsa ne olur?",
        answer: "Dönüşüm izleme olmadan hangi reklamın satış getirdiğini bilemezsiniz, yani bütçenizi körü körüne harcarsınız. Akıllı teklif stratejileri de doğru veri olmadan optimize olamaz. NKolay Medya olarak tüm kampanyalarda GTM ve GA4 entegrasyonunu kurarak her kuruşun nereye dönüştüğünü şeffaf şekilde raporlarız.",
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
      { heading: "Meta Reklamlarıyla Facebook ve Instagram'da Büyüyün", body: "Meta reklamları, Türkiye'de 50 milyondan fazla aktif sosyal medya kullanıcısına ulaşmanın en etkili yoludur. NKolay Medya olarak Facebook ve Instagram'ı tek bir reklam yöneticisi üzerinden yöneterek markanızı hem görsel hem de metin odaklı formatlarla hedef kitlenizin akışında konumlandırırız. Hikaye, Reels, gönderi ve carousel reklamlarıyla ürünlerinizi anlatırken, farkındalıktan satışa kadar her aşamayı kapsayan bir huni yapısı kurarız. Özellikle e-ticaret markaları için dinamik ürün reklamları ve katalog entegrasyonuyla sepetteki ürünleri unutan kullanıcılara hatırlatma yaparız. Sosyal kanallar artık sadece eğlence değil, Türkiye'deki tüketicinin ilk alışveriş durağıdır." },
      { heading: "Meta Pixel ve Conversions API (CAPI) Kurulumu", body: "Başarılı bir Meta reklam stratejisinin temeli doğru veri toplamadır. Meta Pixel'i web sitenize entegre ederek kullanıcı davranışlarını izlerken, gizlilik odaklı dünyada tarayıcı engelleyicilerini aşmak için Sunucu Taraflı Conversions API (CAPI) kurulumunu da yaparız. 2026 yılında iOS güncellemeleri ve çerez kısıtlamaları nedeniyle yalnızca Pixel yeterli değildir; CAPI ile sunucudan sunucuya veri aktarımı sayesinde dönüşüm raporlama doğruluğu ciddi artar. Böylece harcama getirinizi gerçek verilere dayanarak optimize eder ve Meta'nın algoritmasının en doğru kitleyi öğrenmesini sağlarsınız." },
      { heading: "Lookalike ve Retargeting ile Akıllı Hedefleme", body: "Meta'nın en güçlü silahı mevcut müşteri verinizden yeni kitleler üretmesidir. Web sitenizi ziyaret eden veya satın alan kişilerin profiline benzeyen yüzde 1, yüzde 3 ve yüzde 5 Lookalike kitleler oluşturarak markanıza en yakın potansiyel alıcıları buluruz. Diğer yandan retargeting kampanyalarıyla sitenizi görüp çıkmış kullanıcılara yeniden dokunur, terk edilmiş sepet hatırlatmaları ve özel indirim teklifleriyle dönüşüm oranınızı yükseltiriz. Örneğin bir İzmir moda markası için son 30 günde ürün görüntüleyenlerden oluşan dinamik retargeting seti kurarak satışlarını kısa sürede artırdık." },
      { heading: "Kreatif Üretimi ve A/B Testi", body: "Sosyal medyada içerik kraldır; algoritma kullanıcıyı ilk saniyede yakalayan kreatifleri ödüllendirir. NKolay Medya olarak her kampanya için onlarca varyasyon üretiriz: dikey Reels videoları, karusel görselleri, eğlenceli metinler ve kullanıcı yorumlarından oluşturulan sosyal kanıt içerikleri. A/B testiyle başlık, görsel ve çağrı butonu kombinasyonlarını eşzamanlı çalıştırıp en yüksek tıklama ve dönüşüm oranını getireni otomatik ölçeklendiririz. Yaratıcı yorgunluğunu önlemek için kreatifleri iki haftada bir yenileyerek reklam sıklık skorunuzu düşük tutar ve hesapların performansını koruruz." },
      { heading: "E-Ticaret Katalog Reklamları ve Performans Raporlama", body: "Ürün satan her işletme için Meta Katalog reklamları vazgeçilmezdir. Ürünlerinizi XML veya API üzerinden Meta'ya besleyerek, kullanıcının ilgilendiği ürünleri otomatik olarak akışında gösteren dinamik reklamlar kurarız. Böylece yüzlerce ürün için tek tek reklam yazmak yerine tüm envanteriniz otomatik kişiselleştirilir. Performansı ise yalnızca harcama ve tıklama değil, gerçek ROAS (reklam harcamasının getirisi) üzerinden ölçeriz. Haftalık olarak hangi kreatifin, hangi kitleye ve hangi üründe satış yaptığını gösteren şeffaf raporlarla bütçenizi en karlı kombinasyona yönlendiririz." },
    ],
    faq: [
      { question: "Meta reklamlarında Pixel ve CAPI arasındaki fark nedir?", answer: "Pixel, kullanıcının tarayıcısında çalışan ve site ziyaretlerini izleyen bir koddur; CAPI ise sunucunuzdan Meta'ya doğrudan veri gönderir. Tarayıcı engelleyicileri ve iOS gizlilik ayarları Pixel verisini düşürdüğünde CAPI devreye girer ve daha güvenilir dönüşüm takibi sağlar. İkisini birlikte kullanmak 2026'da doğru hedefleme için zorunludur." },
      { question: "Lookalike kitle oluşturmak için kaç kişiye ihtiyacım var?", answer: "Meta genellikle anlamlı bir Lookalike üretmek için en az 100-1.000 arası kaynak kişi önerir; satın alan müşterilerinizden oluşan bir listede 1.000 kişi idealdir. Kaynak ne kadar nitelikli olursa, benzetilen kitle de o kadar doğru olur. NKolay Medya olarak en karlı segmentinizi seçerek Lookalike'ları kurarız." },
      { question: "Retargeting reklamları neden bu kadar etkilidir?", answer: "Retargeting, sitenizi ziyaret edip henüz satın almamış sıcak kullanıcılara ulaştığı için dönüşüm oranı soğuk kitleye göre çok daha yüksektir. Terk edilmiş sepet veya görüntülenen ürün hatırlatması yapan bu reklamlar, satın alma kararını tam verenlerde son dokunuşu yapar ve reklam bütçenizi verimli kullanmanızı sağlar." },
      { question: "Meta reklamlarında kreatif yorgunluğu nedir ve nasıl çözülür?", answer: "Aynı reklamı uzun süre göstermek kullanıcıyı bıktırır, tıklama oranı düşer ve maliyet artar; buna kreatif yorgunluğu denir. Çözümü düzenli olarak yeni görseller, videolar ve metinler üretmektir. NKolay Medya olarak iki haftada bir kreatif yenileyerek reklam sıklık skorunuzu düşük tutar ve performansı koruruz." },
      { question: "E-ticaret için Meta katalog reklamları nasıl çalışır?", answer: "Katalog reklamları, ürün listenizi Meta'ya bağlayarak her kullanıcıya ilgi alanına göre otomatik kişiselleştirilmiş ürün gösterir. Bir kullanıcı ayakkabı görüntülediyse akışında o ayakkabıyı veya benzerlerini görür. Binlerce ürün için manuel reklam yazmaya gerek kalmadan dinamik ve ölçeklenebilir satış imkanı sunar." },
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
      { heading: "Figma İle Modern ve İşlevsel Arayüz Tasarımı", body: "NKolay Medya olarak tüm UI/UX projelerimizi sektörün standardı haline gelen Figma üzerinde yürütürüz; böylece müşterilerimiz tasarım sürecinin her aşamasını bulutta canlı takip edebilir. Bir arayüz sadece güzel görünmek zorunda değildir, aynı zamanda kullanıcının aradığını üç saniyede bulabileceği kadar fonksiyonel olmalıdır. E-ticaret panelinden kurumsal web sitesine, mobil uygulamadan yönetim paneline kadar her ekranı kullanıcı psikolojisi ve görsel hiyerarşi ilkeleriyle tasarlarız. Renk, tipografi ve boşluk kullanımını markanızın kişiliğiyle bütünleştirir; sonuç hem estetik hem dönüşüm odaklı bir deneyim olur." },
      { heading: "Kullanıcı Deneyimi ve Kullanılabilirlik Araştırması", body: "İyi tasarım varsayım değil, veri üzerine kurulur. Proje başında hedef kitlenizi analiz eder, kullanıcı personaları ve müşteri yolculuğu haritaları çıkarırız. Gerçek kullanıcılarla yaptığımız kullanılabilirlik testleriyle tasarımlarımızı henüz kod yazılmadan önce doğrularız; böylece geliştirmede oluşacak pahalı revizyonların önüne geçeriz. Örneğin bir ödeme sürecinde kullanıcı neden sepeti terk ediyor sorusunun cevabını ısı haritası ve tıklama analizleriyle buluruz. Türkiye'deki mobil öncelikli kullanıcı alışkanlıklarını gözeterek dokunmatik hedefleri büyük ve erişilebilir tutarız." },
      { heading: "Kurumsal Kimlik ve Logo Tasarımı", body: "Güçlü bir marka, tutarlı bir görsel dilin ürünüdür. Logo tasarımından renk paletine, tipografiden kurumsal döküman şablonlarına kadar markanızın DNA'sını oluştururuz. NKolay Medya olarak hazırladığımız marka kılavuzları (brand book) sayesinde ekibiniz ve tedarikçileriniz markayı her mecrada aynı standartta temsil eder. Minimalist ve zamansız logolar üretmeyi tercih ederiz çünkü bir logo 10 yıl sonra da geçerliliğini korumalıdır. Marka hikayenizi görsellere dökerken sektörünüzün güven vermesi gereken yönüyle yaratıcılığınız arasında doğru dengeyi kurarız." },
      { heading: "Prototipleme ve Etkileşimli Test Süreçleri", body: "Fikirden ürüne giden yolda prototipleme en riski azaltan adımdır. Tıklanabilir Figma prototipleriyle uygulamanızın nasıl hissettireceğini kodlamadan önce canlı olarak deneyimletiriz. Bu sayede yatırımcı sunumlarında ya da müşteri onaylarında soyut tasvirler yerine elle tutulur bir demo sunarsınız. Etkileşimli geçişler, animasyonlar ve mikro etkileşimlerle kullanıcıyı yönlendiren sezgisel bir akış kurarız. Olası karmaşık adımları prototip aşamasında sadeleştirerek geliştirme süresini kısaltır ve nihai ürünün piyasaya çıkış hızını artırırız." },
      { heading: "Erişilebilirlik ve Responsive Tasarım Standartları", body: "2026'da web erişilebilirliği artık bir lüks değil, yasal ve etik bir zorunluluktur. WCAG standartlarına uygun kontrast oranları, ekran okuyucu dostu etiketleme ve klavye ile gezinme desteğiyle tüm kullanıcıların ürününüze erişmesini sağlarız. Ayrıca responsive tasarım anlayışıyla masaüstü, tablet ve mobilde kusursuz görünen esnek grid sistemleri kurarız. Türkiye'de internet trafiğinin büyük çoğunluğu mobil cihazlardan geldiği için mobil öncelikli (mobile-first) yaklaşımı tüm projelerimizin temeline koyarız. Böylece hiçbir kullanıcı cihazı yüzünden deneyimden mahrum kalmaz." },
    ],
    faq: [
      { question: "UI ve UX tasarım arasındaki fark nedir?", answer: "UI (kullanıcı arayüzü) bir ürünün görsel yüzü, renkleri, butonları ve düzenidir; UX (kullanıcı deneyimi) ise kullanıcının ürünü kullanırken yaşadığı tüm his ve süreçtir. İyi bir ürün ikisini de gerektirir: güzel ama karmaşık bir arayüz satış getirmez, sade ama çirkin bir deneyim de güven vermez. NKolay Medya ikisini bütüncül tasarlar." },
      { question: "Figma neden diğer tasarım araçlarına tercih edilir?", answer: "Figma bulut tabanlıdır, bu yüzden tasarımcı, geliştirici ve müşteri aynı dosyada gerçek zamanlı çalışabilir; dosya gönderme derdi yoktur. Ayrıca tarayıcıda çalıştığı için kurulum gerektirmez ve tasarım sistemleri ile bileşen tekrar kullanımı geliştirmeyi hızlandırır. İş birliği odaklı yapısı modern ekipler için en verimli araçtır." },
      { question: "Kurumsal kimlik tasarımı neleri kapsar?", answer: "Kurumsal kimlik; logo, renk paleti, kurumsal fontlar, kartvizit, antetli kağıt, sosyal medya şablonları ve marka kullanım kılavuzunu (brand book) kapsar. Amaç markanın her temasında tutarlı ve tanınabilir bir görünüm sunmaktır. Güçlü bir kimlik, müşterinin gözünde güven ve profesyonellik algısı yaratır." },
      { question: "Responsive tasarım neden bu kadar önemlidir?", answer: "Kullanıcıların çoğu web sitesine telefondan girdiği için, bir site mobilde bozuluyorsa müşterinin yarısını anında kaybedersiniz. Responsive tasarım aynı içeriğin tüm ekran boyutlarında doğru görünmesini sağlar. Ayrıca Google mobil uyumu arama sıralamasında bir faktör olarak değerlendirir, yani SEO'ya da doğrudan etki eder." },
      { question: "Erişilebilirlik (accessibility) tasarımı ne kazandırır?", answer: "Erişilebilirlik, görme veya hareket engelli kullanıcıların da sitenizi kullanabilmesini sağlar; bu sadece etik değil, potansiyel müşteri kaybını önleyen ticari bir karardır. Aynı zamanda arama motorları erişilebilir siteleri daha iyi anlar. WCAG uyumuyla hem yasal riskten kurtulur hem de daha geniş kitleye ulaşırsınız." },
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
      { heading: "Özel Web Uygulamaları ve Modern Yazılım Mimarisi", body: "Her işletmenin ihtiyaçları farklıdır; hazır paketler her zaman uymayabilir. NKolay Medya olarak React ve Node.js tabanlı, ölçeklenebilir ve bakımı kolay özel web uygulamaları geliştiririz. Tek sayfa uygulamaları (SPA) ve sunucu tarafı render (SSR) teknikleriyle hem hızlı hem SEO dostu ürünler sunarız. Müşterilerimize sadece kod değil çözüm teslim ederiz; iş süreçlerinizi analiz edip en verimli dijital dönüşüm yol haritasını çıkarırız. İster bir randevu sistemi, ister karmaşık bir tedarik zinciri paneli olsun, modüler mimari sayesinde ileride büyümeye uygun altyapılar kurarız." },
      { heading: "CRM ve ERP Sistemleriyle İş Süreçleri Otomasyonu", body: "İşletmelerin büyümesinin önündeki en büyük engel manuel ve dağınık süreçlerdir. NKolay Medya olarak işletmenize özel CRM ve ERP çözümleri geliştirerek müşteri ilişkileri, stok, faturalama ve raporlama gibi operasyonları tek panelde toplarız. Hazır sistemlerin kısıtlarından bunalan ekipler için esnek modüller kurar, departmanlar arası veri akışını otomatikleştiririz. Örneğin bir toptan gıda firması için siparişten sevkiyata, muhasebeden müşteri sadakatine kadar uçtan uca entegre bir yönetim paneli hayata geçirdik. Böylece insan hataları azalır, verimlilik ve karlılık artar." },
      { heading: "API Entegrasyonu ve Üçüncü Parti Bağlantılar", body: "Modern yazılımlar yalıtık değildir; birbirleriyle konuşabilmelidir. Ödeme altyapısı (Iyzico, PayTR), kargo takibi (MNG, Aras), muhasebe (Paraşüt, Logo) ve SMS/e-posta servisleri gibi onlarca üçüncü parti sistemi REST ve GraphQL API'leriyle uygulamanıza bağlarız. Böylece veriyi elle aktarmak yerine sistemler otomatik senkronize olur. NKolay Medya olarak güvenli API anahtarı yönetimi ve hata toleranslı entegrasyonlar kurarak kesintisiz veri akışı sağlarız. İhtiyacınız olan özel entegrasyonu bulamazsanız, tedarikçiniz için özel bir API katmanı da geliştirebiliriz." },
      { heading: "Bulut Altyapısı, Güvenlik ve Performans", body: "Yazılımın kalbi kadar barındığı ortam da önemlidir. AWS, Google Cloud ve Azure üzerinde konteyner tabanlı (Docker, Kubernetes) ölçeklenebilir altyapılar kurarak trafik artışlarında sisteminizin çökmemesini sağlarız. Güvenlik tarafında SSL, düzenli yama yönetimi, rol tabanlı erişim kontrolü ve veri şifreleme ile hem yasal KVKK gerekliliklerine hem de uluslararası standartlara uygun hareket ederiz. Performans için önbellekleme (Redis), CDN ve veritabanı indeksleme optimizasyonlarıyla sayfa yüklenme sürelerini saniyenin altına çekeriz. Güvenli, hızlı ve her an hazır bir altyapı işinizi korur." },
      { heading: "Sürekli Bakım, Güncelleme ve Teknik Destek", body: "Yazılım canlıya alındığında iş bitmez, yeni başlar. NKolay Medya olarak SLA kapsamlı bakım sözleşmeleriyle sisteminizi 7/24 izler, olası kesintileri biz fark edip müdahale ederiz. Güvenlik açıklarına karşı düzenli sızma testi ve bağımlılık güncellemeleri yapar, işletim sistemi ve kütüphane sürümlerini güncel tutarız. Ayrıca kullanıcı geri bildirimlerine göre yeni özellik geliştirme ve performans iyileştirme döngüleri yürütürüz. 2026'da yazılım dünyası hızla değişiyor; düzenli bakım olmadan birkaç ayda teknolojik borca düşen sistemler yerine daima güncel ve rekabetçi kalmanızı sağlarız." },
    ],
    faq: [
      { question: "Özel yazılım geliştirmek hazır paketten daha mı pahalıdır?", answer: "Başlangıçta özel yazılımın kurulum maliyeti hazır paketlerden yüksek görünebilir, ancak uzun vadede lisans ücretleri, kısıtları aşmak için yapılan zorlamalar ve verimsiz süreçler hesaba katıldığında özel çözüm daha karlı çıkar. İşinize tam uyan sistemle zaman ve insan kaybını önlersiniz. NKolay Medya olarak önce fizibilite yaparız." },
      { question: "React ve Node.js neden tercih edilmelidir?", answer: "React bileşen tabanlı yapısıyla hızlı ve yeniden kullanılabilir arayüzler sunar; Node.js ise tek dil (JavaScript) avantajıyla hem ön yüz hem arka uçta tutarlılık sağlar. Geniş topluluk ve kütüphane desteği sayesinde geliştirme hızlanır, bulut ortamlarında kolay ölçeklenir. Modern, bakımı kolay ürünler için ideal ikilidir." },
      { question: "Mevcut sistemimi yeni yazılıma geçirmek riskli midir?", answer: "Doğru planlama ile geçiş riski minimuma iner. Veri haritalama, aşamalı geçiş (phased migration) ve yedekleme stratejileriyle kesintisiz taşıma yaparız. Eski sistemi yeni sistem yanında bir süre paralel çalıştırarak doğrulama sağlarız. NKolay Medya olarak iş sürekliliğinizi koruyan geçiş protokolleri uygularız." },
      { question: "Yazılım güvenliğini nasıl sağlıyorsunuz?", answer: "SSL şifreleme, rol tabanlı erişim, düzenli güvenlik yamaları, veri şifreleme ve KVKK uyumlu veri işleme ile çok katmanlı koruma kurarız. Ayrıca dönemsel sızma testleri ve bağımlılık taramasıyla açıkları kapatırız. Güvenlik tek seferlik değil sürekli bir süreçtir; bu yüzden bakım sözleşmelerimizde yer alır." },
      { question: "Yazılım teslim edildikten sonra destek nasıl devam eder?", answer: "Canlıya alım sonrası SLA'lı bakım paketleriyle sistemi izlemeye devam ederiz; hataları siz fark etmeden giderir, güncellemeleri uygular ve yeni özellik talep ettiğinizde çevik biçimde geliştiririz. 7/24 izleme, yedekleme ve performans optimizasyonu standart hizmetimizdir. Yazılımınızı daima güncel ve güvenli tutarız." },
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
      { heading: "İki Platform Tek Teknik ile iOS ve Android Uygulama", body: "İşletmeniz için native veya cross-platform mobil uygulama geliştirmek, marka sadakati yaratmanın en güçlü yollarından biridir. NKolay Medya olarak React Native ve Flutter teknolojilerini kullanarak tek kod tabanıyla hem iOS hem Android'de çalışan performanslı uygulamalar sunarız. Bütçe ve zaman kazandıran bu yaklaşım, native hissiyatı korurken bakımı da kolaylaştırır. Stok takibi, randevu yönetimi, sadakat programları veya e-ticaret uygulaması olsun; iş süreçlerinize özel modüller tasarlarız. Uygulamanızı App Store ve Google Play'de yayınlama sürecini de baştan sona yönetiriz." },
      { heading: "Kullanıcı Dostu Arayüz ve Akış Tasarımı", body: "Mobil uygulama kullanıcı deneyimi (UX) masaüstünden farklıdır; dokunmatik hedefler, küçük ekranlar ve kesintisiz akış önceliklidir. Figma ile prototipleme yaparak her ekranı kullanıcı psikolojisine göre sıralarız; önce giriş sonra keşif, sonra satın alma adımlarını sezgisel bir hiyerarşiyle kurarız. Mini oyunlar, rozetler ve bildirimlerle kullanıcıyı uygulamada tutan gamification öğeleri ekleriz. Ayrıca offline mod, anında yüklenen içerik ve kesintisiz geçişlerle uygulamanızı yavaşlatacak tüm engelleri önleriz." },
      { heading: "Push Bildirimleri ve Kullanıcı Etkileşimi", body: "Push bildirimleri uygulamanızı tekrar tekrar açtıran en güçlü araçtır. Ancak spam bildirimler kullanıcıyı silkelendirir. NKolay Medya olarak kişiselleştirilmiş, zamanlanmış ve davranışa dayalı bildirim stratejileri kurarız. Örneğin bir kullanıcı sepetini terk ederse otomatik hatırlatma göndeririz; kampanya döneminde ise ilgi alanına göre özel teklifler iletilir. Segmentasyon ile aktif, pasif ve potansiyel kullanıcı gruplarına farklı mesajlar göndererek bildirim tıklama oranınızı yükseltir ve uygulamayı silme riskini azaltırız." },
      { heading: "Güvenlik, Performans ve Uygulama Analitiği", body: "Mobil uygulamalar kullanıcı verisini işlerken yüksek güvenlik standartlarıyla hareket etmelidir. End-to-end şifreleme, güvenli oturum yönetimi ve KVKK uyumlu veri depolaması ile hem iOS hem Android politikalarına uygun altyapı kurarız. Performans tarafında uygulama başlatma süresini iki saniyeye indirgemek için kod bölme (code splitting) ve önbellekleme yaparız. Firebase Analytics ve Mixpanel ile kullanıcı davranışlarını anlık izleriz; hangi ekranda kullanıcı neden çıkıyor, en çok kullanılan özellik neden sorunsuz, verileri toplar ve iyileştirme yönlerini belirleriz." },
      { heading: "Sürekli Güncelleme ve Pazar İzleme", body: "Uygulama yayına alındığında süreç bitmez; iOS ve Android güncellemeleri, kullanıcı geri bildirimleri ve rakip uygulamaları takip etmek gereklidir. NKolay Medya olarak her ay performans ve güvenlik taraması yapar, kullanıcı yorumlarına göre öncelikli iyileştirmeler planlarız. A/B testleriyle ekran değişikliklerini riskli olmayan küçük gruplarda önce test eder, olumlu sonuç alırsanız geniş kullanıcı kitlesine yansıtırız. Böylece uygulamanız piyasada yenilikçi kalır, kullanıcı memnuniyeti yüksek tutulur." },
    ],
    faq: [
      { question: "Native uygulama ile cross-platform arasındaki fark nedir?", answer: "Native uygulamalar her platform için ayrı ayrı yazılır (Swift iOS, Kotlin Android) ve en üst düzey performansı sunar; ancak maliyet ve süre iki katıdır. Cross-platform (React Native, Flutter) tek kodla her iki platformu destekler, bütçe ve zaman kazandırır. NKolay Medya olarak ihtiyaçlarınıza göre doğru yaklaşımı seçeriz." },
      { question: "Mobil uygulama geliştirme süreci ne kadar sürer?", answer: "Basit bir uygulama 4-8 hafta, orta karmaşıklıkta 3-6 ay, karmaşık kurumsal uygulamalar 6-12 ay sürer. Süre özelliklerin ve onay döngülerine bağlıdır. Prototip aşamasından teslimata kadar şeffaf ilerler; her sprint sonunda demo sunarız." },
      { question: "Uygulama mağazalarında yayınlanmak zor mu?", answer: "Apple ve Google, politika kurallarına uyum sağlayan uygulamaları genellikle 2-7 iş günü içinde onaylar. NKolay Medya olarak ilk kez başvuran geliştiriciler için gizlemiş tuzağın önüne geçer, politika dokümanlarını ve ekran görüntülerini doğru hazırlayarak onay sürecini hızlandırırız." },
      { question: "Uygulama güvenliği nasıl sağlanır?", answer: "Güvenli oturum yönetimi, şifreleme, güvenli API iletişimi ve düzenli güvenlik taramaları ile çok katmanlı koruma kurarız. Kullanıcı verileri KVKK ve platform politikalarına uygun işlenir. Uygulama güncellemeleri sayesinde açıklar sürekli kapatılır." },
      { question: "Uygulama yayınlandıktan sonra nasıl destek sağlanır?", answer: "Hata düzeltmeleri, özellik geliştirmeleri, platform güncellemeleri ve performans iyileştirmeleri düzenli bakım planlarıyla yürütülür. Kullanıcı yorumlarını takip eder, öncelikli iyileştirmeleri hızlıca yayınlarız. Uygulamanızın uzun ömürlü ve sürdürülebilir olması için sürekli destek sağlarız." },
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
      { heading: "Teknik SEO ve Site Sağlığı Denetimi", body: "Arama motoru optimizasyonu (SEO) teknik altyapıya dayanır; görsel tasarım ne kadar güzel olursa olsun, site hızlı değilse, indekslenemiyorsa veya mobil uyumlu değilse arama sonuçlarında yer alamazsınız. NKolay Medya olarak her projede kapsamlı bir teknik SEO denetimi yaparız; site hızı (Core Web Vitals), SSL, robots.txt, XML site haritası, yapısal veri (Schema.org), düzensiz yönlendirmeler ve kırık bağlantıları tararız. Bulduğumuz sorunları öncelik sırasına göre ele alır, geliştirme ekibimizle birlikte düzeltiriz. Sayfa yüklenme süresini 3 saniyeden düşürmek, mobil kullanıcı deneyimini artırmak ve arama motorlarının sitenizi kolayca anlamasını sağlamak odak noktamızdır." },
      { heading: "İçerik Stratejisi ve Anahtar Kelime Planlaması", body: "SEO'da içerik kraldır ama doğru strateji olmadan içerik boşa gider. NKolay Medya olarak hedef kitlenizin arama davranışlarını analiz eder; yüksek niyetli uzun kuyruklu anahtar kelimeler belirler ve içerik takvimimizi bunlara göre planlarız. Sektörünüzdeki rakiplerin üst sıralara çıkmak için eksik konuları tespit eder, her blog yazısını soru-cevap formatında kaliteli ve özgün tutarız. Kullanıcının sorusunu en iyi cevaplayan, uzun ve kapsamlı yazılar hem kullanıcıyı cezbetmeye devam eder. İçeriklerimiz içinde ilgili bağlantılar, görseller ve okunabilirlik ile arama motorlarının sevgisini kazanır." },
      { heading: "Yerel SEO ve Google İşletme Profili", body: "Türkiye'de çoğu arama sonucu yereldir. 'İstanbul mobilya' veya 'Antalya restoran' gibi aramalarda görünmek için Google İşletme Profilini (Google Business Profile) eksiksiz ve çekici doldurmak şarttır. NKolay Medya olarak işletme bilgilerinizi, fotoğraflarınızı, çalışma saatlerinizi ve müşteri yorumlarınızı optimize ederiz. Müşteri yorumlarını olumlu yönetmek, sorulara anında cevap vermek ve düzenli içerik paylaşmak yerel sıralamalarını yükseltir. Çoklu şubeli işletmeler için her şubeyi ayrı optimize eder, tutarlı NAP (isim-adres-telefon) bilgisi sağlarız. Sonuç; potansiyel müşterinin sizi sadece arama sonuçlarında değil, haritada ve yorumlarda güvenle bulması." },
      { heading: "Backlink Stratejisi ve Otorite", body: "Arama motorları sitenizin otoritesini, başka kaliteli sitelerin size bağlantı verip vermesiyle ölçer. NKolay Medya olarak sektörünüzle ilgili güvenilir kaynaklardan gerçek ve kalıcı backlink'ler kazanmak için çalışırız. Gazete, dergi, blog ve sektör platformlarıyla işbirliği yapar; yazılı içerik, basın bültenleri ve konuşmacılık ile markanızın otoritesini artırırız. Aldatmacaya dayalı (PBN) veya satın alınan bağlantılar yerine organik ve kalıcı bağlantı stratejisi izleriz. Böylece arama sonuçlarında uzun vadeli sıralama kazanır ve algoritma değişikliklerinden etkilenmezsiniz." },
      { heading: "Raporlama, Takip ve Sürekli Optimizasyon", body: "SEO bir anlık değil, sürekli bir süreçtir. NKolay Medya olarak aylık şeffaf raporlarla arama görünürlüğünüzü, tıklama oranınızı, organik trafiğinizi ve dönüşümlerinizi detaylı olarak paylaşırız. Google Search Console ve Analytics verilerini derinlemesine analiz eder, arama sıralamalarında düşüş yaşayan sayfaları yeniden optimize ederiz. Yeni içerikler ekler, eski içerikleri günceller ve sürekli gelişen arama algoritmalarına uyum sağlarız. 2026'da AI destekli içerik analizleri ve yapısal veri ile arama sonuçlarında öne çıkmak için sürekli yenilenen bir strateji izleriz." },
    ],
    faq: [
      { question: "SEO sonuçları ne kadar sürede görünür?", answer: "SEO yanlış bir tahmin değildir; organik sıralamalara yüksekmek genellikle 3-6 ay sürer, rekabetçi sektörlerde bu süre 12 aya kadar çıkabilir. Çalışma kalitesi, rakip sayısı ve web sitesinin mevcut durumu başlıca etkenlerdir. NKolay Medya olarak her ay ilerlemeyi raporlayarak beklentilerinizi yönetiriz." },
      { question: "SEO için sürekli içerik üretmem gerekiyor mu?", answer: "Evet, ancak sürekli içerik demek sürekli uzun yazı demek değildir. Özgün, kaliteli ve kullanıcı sorularını cevaplayan içerikler üretmek sıralamalarınızı yükseltir. Mevcut eski içeriklerinizi güncellemek, yeni konular eklemek ve blog takvimini düzenli yürütmek en iyisidir. Bütçenize uygun içerik planı çıkarırız." },
      { question: "Backlink (geri bağlantı) neden önemlidir?", answer: "Backlink, diğer sitelerin size verdiği bağlantıdır ve Google'ın sitenize olan güvenini gösterir. Kaliteli sitelerin size verdiği bağlantılar, sayfa ve site otoritenizi artırır. Ancak spam ve satın alınan bağlantılar cezalandırılır. NKolay Medya organik ve kalıcı backlink stratejisi izler." },
      { question: "Yerel SEO işletmem için nasıl faydalıdır?", answer: "Yerel SEO, işletmenizin belirli bir coğrafyada arama sonuçlarında öne çıkmasını sağlar. Özellikle fiziksel mağazanız varsa veya bölgesel hizmet veriyorsanız yerel müşterilere ulaşmak için kritiktir. Google İşletme Profili, yorumlar ve yerel anahtar kelimelerle müşteri trafiğini artırırız." },
      { question: "SEO ile Google Ads arasındaki fark nedir?", answer: "SEO organik (ücretsiz) arama sonuçları üzerinden uzun vadeli görünürlük sağlar; Google Ads ise ödeme ile anında reklam pozisyonu kazanır. SEO kalıcıdır, Ads durdurulunca görünürlük kaybolur. En iyi strateji her ikisini birleştirmektir; Ads ile anında trafik, SEO ile uzun vadeli organik büyüme." },
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
      { heading: "Matbaa ve Ofset Baskı Çözümleri", body: "İşletmenizin marka kimliğini en doğru şekilde yansıtacak baskı ürünleri, kalitenin en başta geldiği alanlardan biridir. NKolay Medya olarak ofset ve dijital baskı teknolojilerini bir araya getirerek broşür, katalog, broşür, kartvizit, fatura defteri ve antetli kağıt gibi temel baskı ihtiyaçlarınızı üst düzey kalitede çözüyoruz. İstanbul Ataköy'deki tesisimizde CTP cihazları ve tam otomatik kesim-bukağı makineleriyle her adımı kontrol altında tutarız. 4+0, 4+4 renk seçenekleri, farklı kağıt gramajları ve lamine, vernik, kazıma gibi özel işlemlerle baskılarınızı öne çıkarırız. Küçük parti deneyimlerinden seri üretime kadar esnek kapasitemizle her ölçekteki işletmeye hizmet veririz." },
      { heading: "Tasarım ve Ön Baskı İş Akışı", body: "Baskı hatasız, tasarım önceden doğrulanmalıdır. Grafik ekibimiz Adobe Illustrator ve InDesign üzerinde dosyalarınızı düzenler; yanlış renk modu (RGB/CMYK), kesim izi (bleed) ve piksel yoğunluğu kontrollerini yapar. Hazırladığımız dijital örnekler (proof) ile baskıdan önce son kontrolü sizinle paylaşırız. Renk doğruluğu için Pantone referanslarıyla eşleşen renkler seçeriz; ekranda gördüğünüz rengin basıtta da aynı çıkmasını sağlarız. Bu süreç, kağıt israfını ve baskı hatasını önlerken son ürününüzün tam istediğiniz gibi olmasını garanti eder." },
      { heading: "Kurumsal ve Promosyon Ürünleri Üretimi", body: "Marka bilinirliğinizi artırmak için promosyon ürünleri vazgeçilmezdir. NKolay Medya olarak hediye kağıdı, marka hediye setleri, organizasyon malzemeleri ve etkinlik tanıtım ürünleri üretiriz. T-shirt, kap, kalem, powerbank gibi ürünlerin üzerine serigrafi, lazer kazıma ve dTF baskı yöntemleriyle logonuzu kalıcı olarak işleriz. Herhangi bir yapıştırma veya kötü kaliteli baskı yerine, yıkanabilir, çözünmez ve yüksek sıcaklığa dayanıklı baskılar sunarız. İdari ve kurumsal etkinlikler için özel setler hazırlar; kurumsal hediye politikalarınızı en iyi yansıtacak ürünleri en uygun fiyata üretiriz." },
      { heading: "Küçük Seri ve Özel Baskı Talepleri", body: "Tüm baskı evrensel değildir; bazen yüz kopyadan ziyade 10 adet özel baskıya ihtiyacınız olur. NKolay Medya olarak küçük seri, özel formatta ve acil baskı taleplerinizi esnek çözümlerle karşılarız. İsimli kartvizit, özel davetiye, sınırlı sayıda katalog veya özel etkinlik broşürü olsun, hızlı ve özenli üretim sunarız. Son dakika baskı talepleriniz için acil üretim kanalımız aktif hizmet verir. Dosyalarınızı online olarak iletmeniz durumunda tek gün içinde teslimat imkanı sunarız. Baskı sektörünün sıkı kurallarını esneterek, özel ihtiyaçlarınıza en uygun çözümleri sunarız." },
      { heading: "Baskı Sonrası İşlem ve Kalite Kontrol", body: "Baskı işleminin son adımı kesim, bukağı, lamine, delme ve paketlemedir. NKolay Medya tesisimizde tüm son işlemleri tek elden yürütür; bu da kalite kaybını önler ve teslim süresini kısaltır. Her parti sonrası kalite kontrol ekibimiz yüzde yüz kontrol yapar; renk doğruluğu, kırık kenar, eksik parça ve ambalaj hasarlarını tespit ederiz. İstekli müşterilere örnek ürünlerle ön onay süreci sunar, onayınızdan sonra seri üretime geçeriz. Baskıdan sonrası hizmeti bir yıldır, iş ortağımız olarak tüm sorularınıza anında destek veririz." },
    ],
    faq: [
      { question: "Ofset baskı ile dijital baskı arasındaki fark nedir?", answer: "Ofset baskı büyük partilerde (500 ve üstü) en uygun maliyetli ve en yüksek kalitede sonuç verir; plakalar hazır olduktan sonra seri hızlı üretilir. Dijital baskı ise küçük partilerde (1-200 arası) daha hızlı ve düşük maliyetli başlar. NKolay Medya olarak her parti büyüklüğüne göre en uygun tekniği seçeriz." },
      { question: "Baskıda renk doğruluğu nasıl sağlanır?", answer: "Pantone renk kılavuzları ve CMYK renk modeli kullanarak ekran ile baskı arasındaki farkı en aza indiririz. Ön baskı örneği (proof) ile onay süreciyle son kontrolü sizinle paylaşırız. Profesyonel monitörler ve kalibre edilmiş yazıcılarla renk tutarlılığı sağlanır." },
      { question: "Küçük seri baskı (örneğin 10 adet) yapılıyor mu?", answer: "Evet, küçük seri ve özel baskı taleplerinizi dijital baskı teknolojisiyle verimli şekilde üretiriz. Minimum parti kısıtımız yoktur; özel formatta, özel malzemede baskı talepleriniz için en uygun çözümü sunarız." },
      { question: "Baskı ürünlerinde özel işlemler (lame, vernik) yapılıyor mu?", answer: "Evet, mat/parlak lamine, UV vernik, kazıma, delme, fonlama gibi özel işlemler ile baskı ürünlerinize değer katıyoruz. Özellikle katalog ve kartvizitlerde özel işlemler marka algısını önemli ölçüde yükseltir. Teknik ekibimiz en uygun işlemi ürününüz için önerir." },
      { question: "Baskı teslimatı ne kadar sürer?", answer: "Standart baskı talepleriniz genellikle 2-5 iş günü içinde teslim edilir; özel işlemli veya büyük formatlı ürünlerde süre 7-10 iş gününe çıkabilir. Acil baskı talepleriniz için aynı gün teslimat imkanımız mevcuttur. Siparişiniz ne kadar özel olursa olsun süreleri şeffaf paylaşırız." },
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
      { heading: "Kurumsal Web Siteleri ve Özel WordPress Tasarımı", body: "WordPress, dünyada en çok kullanılan içerik yönetim sistemi olarak işletmeniz için güçlü ve esnek bir başlangıç noktasıdır. NKolay Medya olarak her projeyi işletmenizin ihtiyaçlarına özel tasarlarız; hazır temalar yerine özel geliştirilmiş, hızlı ve güvenli WordPress siteleri kurarız. Kurumsal web sitelerinden e-ticaret mağazalarından blog sitelerine, ajans portfolyolarından kurumsal duyuru platformlarına kadar her türlü siteyi yapılandırırız. Elementor ve Advanced Custom Fields gibi araçlarla kullanıcı dostu bir yönetim paneli kurar, içeriğinizi teknik bilgi olmadan güncellemenizi sağlarız." },
      { heading: "WooCommerce ve E-Ticaret Entegrasyonu", body: "WordPress ile e-ticaret kurmak için WooCommerce en güçlü seçenektir. NKolay Medya olarak WooCommerce mağazalarınızı özelleştirerek ödeme altyapısı (Iyzico, PayTR), kargo entegrasyonları (MNG Kargo, Aras), vergi ve fatura sistemleriyle uçtan uca bağlarız. Stok takibi, kupon sistemi, abonelik modelleri ve çoklu para birimi desteği ile mağazanızı yönetmeyi kolaylaştırırız. Özellikle Türkiye pazarına uygun, yerli ödeme ve kargo sistemleriyle tam entegre çözümler sunarız. Mağazanızın güvenli, hızlı ve kullanıcı dostu olması için özel güvenlik ve hız optimizasyonları uygularız." },
      { heading: "SEO ve Hız Optimizasyonu", body: "WordPress, doğru yapılandırılmadığında yavaş ve SEO dostu olmayan bir platform olabilir. NKolay Medya olarak WordPress önbellekleme (WP Rocket, W3 Total Cache), görsel optimizasyonu (WebP, lazy loading) ve CDN entegrasyonu ile site hızınızı önemli ölçüde artırırız. SEO için temel eklentileri (Yoast SEO, Rank Math) kurup yapılandırır, XML site haritası, schema.org işaretleme ve meta etiketleriyle arama motorlarına uyum sağlarız. Ayrıca güvenlik duvarı (firewall), düzenli yedekleme ve güvenlik eklentileriyle sitenizi koruruz. Sonuç; Google PageSpeed Insights'ta 90+ skorlar ve organik trafik artışı." },
      { heading: "Güvenlik, Yedekleme ve Bakım", body: "WordPress dünyada en çok saldırı alan CMS'dir; güvenlik önceliğimizdir. Güvenlik duvarı, kötü amaçlı oturum engelleme, düzenli güvenlik taramaları ve otomatik yedekleme sistemleri kurarız. İstem dışı güncellemeleri kontrol altında tutar, eklenti ve temaları düzenli olarak güncelleriz. Kötü amaçlı yazılım tespiti ve temizleme hizmeti sunarız; siteniz saldırı altındaysa kurtarma protokolümüzü devreye sokarız. Ayrıca sunucu tarafında SSL, HTTP güvenlik başlıkları ve güvenli DNS ayarlarıyla kapsamlı koruma sağlarız." },
      { heading: "Eğitim ve İçerik Yönetimi Desteği", body: "WordPress'in gücü içerik yönetiminde yatar; ancak panelinizi kullanmak için teknik bilgi gerekir. NKolay Medya olarak işletmenize özel kullanıcı eğitimleri verir; sayfa ekleme, blog yazma, görsel yükleme ve temel ayarları öğretiriz. Ayrıca düzenli içerik takvimleri ve blog yazılımı yönetimi sunar; içerik ekleme hizmetimizle siteniz canlı kalır. Reklam yerleşimleri, pop-up'lar ve etkinlik duyuruları gibi özel talepleriniz için geliştirme desteği sağlarız. WordPress'in tüm potansiyelini işletmeniz için açığa çıkarırız." },
    ],
    faq: [
      { question: "WordPress güvenli midir?", answer: "WordPress, dünya çapında en çok kullanılan CMS olduğu için saldırı hedefi olur; ancak doğru güvenlik önlemleriyle çok güvenli hale getirilebilir. Düzenli güncellemeler, güvenlik eklentileri, güçlü parolalar ve yedekleme ile sitenizi koruruz. Profesyonel WordPress bakımı ile güvenliği sürekli tutarız." },
      { question: "Hazır tema kullanmak mı, özel tema mı?", answer: "Hazır temalar hızlı ve uygun maliyetli başlar, ancak özelleştirme özgürlüğü sınırlıdır ve performans genellikle düşüktür. Özel tema sadece ihtiyaçlarınız için yapılır, gereksiz kod yoktur, hızlıdır ve benzersiz görünür. NKolay Medya özel tema geliştirmeyi önerir; performans, güvenlik ve ölçeklenebilirlik avantajı sağlar." },
      { question: "WooCommerce ile kaç ürün satabilirim?", answer: "WooCommerce teknik olarak sınırsız ürün kapasitesine sahiptir; performans sunucu ve önbellekleme ile ilgilidir. Binlerce ürün için optimize edilmiş bir WooCommerce mağazası, yüksek trafik ve sipariş hacmini sorunsuz yönetir. Sunucu altyapımız ve optimizasyonlarımızla büyümeye hazır mağazalar kurarız." },
      { question: "WordPress sitesi ne kadar sürer?", answer: "Basit bir kurumsal site 2-4 hafta, WooCommerce mağazası 4-8 hafta, özel özellikler eklenirse 2-3 ay sürer. Süre içerik miktarına, özelleştirme seviyesine ve onay sürelerine bağlıdır. Şeffaf ilerleme planıyla her aşamayı müşteri onayına sunarız." },
      { question: "WordPress bakımı ne içerir?", answer: "WordPress bakımı; güvenlik taramaları, otomatik yedekleme, eklenti/tema güncellemeleri, hız optimizasyonu, performans izleme ve acil kurtarma hizmetini kapsar. Düzenli bakım planlarıyla sitenizi güncel, hızlı ve güvenli tutarız. Aylık bakım paketlerimiz mevcuttur." },
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
      { heading: "VPS ve Özel Sunucu Yönetimi", body: "İşletmeniz için güvenilir, yüksek performanslı ve tamamen kontrol edilebilir bir sunucu altyapısı şarttır. NKolay Medya olarak VPS (Sanal Özel Sunucu) ve özel sunucu yönetimi hizmeti sunarız; işletmenizin ihtiyaçlarına göre ölçeklenebilir sunucu planları sunarız. Linux tabanlı (Ubuntu, CentOS, Debian) sunucuları kurar, Apache ve Nginx web sunucularını yapılandırır, PHP, Node.js, Python ve veritabanı (MySQL, PostgreSQL) ortamlarını hazırlarız. Günlük otomatik yedekleme, 7/24 izleme ve acil müdahale protokolleriyle sunucunuzun kesintisiz çalışmasını sağlarız. Panik durumunda acil yedeklerle kurtarma hizmeti de sunarız." },
      { heading: "Sunucu Güvenliği ve DDoS Koruması", body: "Sunucu güvenliği işletmenizin en kritik alanıdır; bir güvenlik ihlali veri kaybına, hizmet kesintisine ve itibar zararına yol açar. NKolay Medya olarak güvenlik duvarı (firewall) yapılandırması, SSH anahtar tabanlı giriş, şüpheli IP engelleme, brute-force koruması ve düzenli güvenlik taramaları ile sunucunuzu koruruz. DDoS (Dağıtılmış Hizmet Reddi) saldırılarına karşı özel koruma çözümleri ve trafik filtreleme ile hizmetinizin kesilmesini önleriz. SSL yönetimi, güvenlik yamaları ve sıkı erişim kontrolleri ile uyumluluk sağlarız. Her adımı logluyor ve şeffaf raporlarla sizinle paylaşırız." },
      { heading: "Veritabanı Yönetimi ve Performans Optimizasyonu", body: "Veritabanı, uygulamanızın kalbidir; yavaş sorgular ve düzgün indekslenmemiş tablolar tüm sisteminizi yavaşlatır. NKolay Medya olarak MySQL ve PostgreSQL veritabanlarını yönetir, indeks optimizasyonu, sorgu hızlandırma ve önbellekleme stratejileri uygularız. Büyük veri kümeleri için şema optimizasyonu, veritabanı bölümleme (partitioning) ve okuma çoğaltma (read replica) ile ölçeklenebilirlik sağlarız. Düzenli veritabanı bakımı, otomatik yedekleme ve kurtarma testleri ile veri kaybı riskini ortadan kaldırırız. Uygulamanızın her zaman hızlı ve güvenli çalışması için veritabanı performansını sürekli izleriz." },
      { heading: "Bulut ve CDN Altyapısı", body: "Modern işletmeler fiziksel sunucuya bağlı kalmak yerine esnek bulut altyapısı tercih eder. NKolay Medya olarak AWS, Google Cloud ve Azure üzerinde sanal sunucular kurar, ölçeklenebilir bulut mimarileri yapılandırırız. Yüksek erişilebilirlik için otomatik ölçekleme (auto-scaling) ve yük dengeleme (load balancer) konfigürasyonları kurarız. Ayrıca Cloudflare veya hizmet sağlayıcı CDN ile statik içeriklerinizi dünya çapında hızlı sunar, orijin sunucu yükünü azaltırız. Statik ve medya dosyalarını önbelleğe alarak sayfa yüklenme sürelerini önemli ölçüde düşürürüz. Bulut maliyetlerini izleyerek gereksiz harcamaları önleriz." },
      { heading: "Sürekli İzleme, Log Analizi ve Raporlama", body: "Sunucu yönetimi yalnızca kurulum değil, sürekli izleme ve iyileştirmedir. NKolay Medya olarak Prometheus, Grafana ve özel izleme araçlarıyla CPU, bellek, disk ve ağ trafiğini gerçek zamanlı takip ederiz. Anormal trafik artışları, hata logları ve erişim kayıtlarını analiz ederek sorunları önceden tespit ederiz. Haftalık ve aylık raporlarla sunucu performansınızı, kullanım istatistiklerinizi ve önerilerimizi paylaşırız. Gelecekte yatırım yapmanız için altyapı ölçekleme planları sunarız. Bütçenizi en verimli şekilde kullanmanız için önerilerde bulunuruz." },
    ],
    faq: [
      { question: "VPS ile özel sunucu arasındaki fark nedir?", answer: "VPS, fiziksel sunucunun sanal parçalarıdır; özel sunucu ise tüm fiziksel makine sizindir. VPS daha uygun maliyetli ve ölçeklenebilir; özel sunucu tam performans ve kontrol sunar. NKolay Medya olarak ölçeğinize göre en uygun seçeneği öneririz." },
      { question: "Sunucu güvenliği için ne yapılıyor?", answer: "Güvenlik duvarı, SSH anahtar giriş, saldırı koruması, DDoS koruması, SSL yönetimi ve düzenli güvenlik taramaları ile çok katmanlı koruma kurarız. Güvenlik tek seferlik değildir; sürekli izleme ve güncellemelerle korumayı sürdürürüz. Bütün adımları loglayıp raporlarlarız." },
      { question: "Sunucu yönetimi ne kadar sürer?", answer: "Kurulum genellikle 1-2 saat, tam yapılandırma ve optimizasyon 1-3 iş günü sürer. Mevcut sunucuyu optimize etmek veya taşımak daha kısadır. NKolay Medya olarak acil sunucu yönetimi için aynı gün müdahale hizmeti sunarız." },
      { question: "Sunucu yedekleme nasıl çalışır?", answer: "Günlük otomatik yedeklemeler, haftalık arşivleme ve aylık kurtarma testleri ile veri güvenliği sağlanır. Yedekler farklı lokasyonlarda saklanır; sunucu sorunu yaşansa bile verileriniz korunur. Kurtarma süreci acil durumlarda hızlıca yürütülür." },
      { question: "Sunucu performansını nasıl artırırsınız?", answer: "Yazılım optimizasyonu, önbellekleme, veritabanı indeksleme, CDN ve kaynak yönetimi ile sunucu hızınızı artırırız. Performans izleme araçlarıyla darboğazları tespit eder ve sürekli iyileştiririz. Gerektiğinde donanım veya bulut ölçekleme önerileri sunarız." },
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
      { heading: "Stratejik Sosyal Medya Yönetimi ve İçerik Planlaması", body: "Sosyal medya sadece paylaşım yapmak değil, markanızı doğru kitleye doğru mesajla ulaştırmak demektir. NKolay Medya olarak her işletme için özel bir sosyal medya stratejisi oluştururuz. Önce marka kimliğinizi, hedef kitlenizi ve rakiplerinizi analiz ederiz; ardından içerik takvimimizi aylık öngörülebilir bir plana dönüştürürüz. Her gönderi rengi, ses tonu ve çağrıya uygun hazırlanır; doğal bir akış yaratırız. Kullanıcı etkileşimini ölçer, en iyi paylaşım saatlerini belirler ve en performanslı içerik türlerini (video, carousel, story) ölçeklendiririz. Strateji olmadan paylaşım yapmak, gürültüye karışmak demektir; stratejiyle markanızı konuştururuz." },
      { heading: "TikTok, Instagram ve YouTube İçerik Üretimi", body: "2026'da her platformun kendine özgü dili vardır. NKolay Medya olarak her platform için özel içerik üretim kanalı kurarız: TikTok için kısa, enerjik ve viral formatlar; Instagram için estetik, marka bilgisi ve etkileşim odaklı gönderiler; YouTube için uzun soluklu, değer odaklı ve eğitici videolar. Short form video içerikleri artık marka bilinirliği için en güçlü araçtır; yaratıcı ekibimiz Reels, Shorts ve TikTok videolarıyla markanızı geniş kitlelere duyurur. Ürün tanıtımından arka plan hikayelerine, müşteri yorumlarından eğitici içeriklere kadar her formatı özgün bir anlatımla üretiriz." },
      { heading: "Sosyal Medya Reklamları ve Performans Takibi", body: "Organik erişimin azaldığı günümüzde reklamlar olmadan markanızın sadece takipçilerinize ulaşması sınırlıdır. NKolay Medya olarak Facebook, Instagram, LinkedIn ve TikTok reklam kampanyaları yürütür, marka bilinirliği, takipçi artışı ve dönüşüm odaklı hedefler belirleriz. A/B testleriyle en iyi kreatifleri ve kitleleri bulur, bütçeyi en karlı kampanyalara yönlendiririz. Performansı haftalık raporlarla ölçeriz; izlenme, beğeni, paylaşım ve web sitesi trafiği gibi tüm metrikleri detaylandırırız. Reklam harcamanızın geri dönüşünü sürekli optimize ederiz." },
      { heading: "Topluluk Yönetimi ve Müşteri Deneyimi", body: "Sosyal medyada topluluk yönetimi, markanızın insanlarla ilişki kurma biçimidir. NKolay Medya olarak yorumlara, mesajlara ve sorulara zamanında ve doğal bir dille cevap veririz; müşteri memnuniyetini yükseltiriz. Olumsuz yorumları kriz dönüştürme stratejisiyla yönetir, sorunları çözüme yönlendiririz. Etkileşim odaklı içerikler (anket, soru-cevap, canlı yayın) ile takipçilerinizle güçlü bir bağ kurarız. Müşteri deneyimini sosyal medyada da korur; markanızın insan odaklı ve erişilebilir yüzünü oluştururuz." },
      { heading: "Raporlama ve İçerik Takvim Optimizasyonu", body: "Başarısızlıkların nedeni genellikle strateji eksikliğidir. NKolay Medya olarak her ay detaylı performans raporları sunarız; takipçi büyümesi, etkileşim oranı, erişim ve dönüşüm verilerini analiz ederiz. En iyi performans gösteren içerik türlerini, en uygun saatleri ve en etkili mesajları tespit ederiz. İçerik takvimimizi aylık olarak gönderir, onayınızdan sonra paylaşıma geçeriz. Esnek ve şeffaf bir süreçle her aşamada sizinle iletişim kurarız. Raporlar, markanızın sosyal medyadaki pozisyonunu net olarak gösterir." },
    ],
    faq: [
      { question: "Sosyal medyada en iyi paylaşım sıklığı nedir?", answer: "Her platform için ideal sıklık farklıdır: Instagram'da haftada 3-5 gönderi, TikTok'da haftada 3-7 video, LinkedIn'de haftada 2-3 gönderi önerilir. Önemli olan sıklık değil, kalitedir. NKolay Medya işletmenize özel içerik planı çıkarır." },
      { question: "Sosyal medya reklamları organik erişimi nasıl etkiler?", answer: "Sosyal medya reklamları organik erişimi azaltmaz; aksine marka bilinirliğini artırır ve organik takipçi büyümesine katkı sağlar. Hedefli reklamlarla doğru kitleye ulaşan markalar organik etkileşimlerini de artırır. Dengeli bir reklam-orgaç stratejisi en etkilisidir." },
      { question: "Topluluk yönetimi neden önemlidir?", answer: "Sosyal medyada müşteri deneyimi, yorumlara verilen cevaplar ve sorun çözme hızıyla ölçülür. Hızlı ve samimi yanıtlar marka güvenini artırır; yanlış yönetilen bir durum ise krize dönüşebilir. NKolay Medya topluluk yönetimi ile marka algınızı koruruz." },
      { question: "Hangi sosyal medya platformları önemlidir?", answer: "Sektörünüze ve hedef kitlenize göre değişir: B2C markaları için Instagram ve TikTok öncelikli, B2B işletmeler için LinkedIn değerlidir. NKolay Medya marka analizi yaparak en uygun platform önerir ve odaklanır. Çoklu platform yönetimi de mevcuttur." },
      { question: "Sosyal medya metriklerini nasıl ölçersiniz?", answer: "Erişim, beğeni, paylaşım, kaydedilen içerikler, web sitesi trafiği ve dönüşüm oranları temel metriklerdir. Aylık raporlarla hangi içeriğin hangi sonucu verdiğini gösterir, içerik stratejinizi sürekli iyileştiririz." },
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
      { heading: "Dijital Marka İtibarı ve Online İmaj Yönetimi", body: "İtibar bir markanın en değerli varlığıdır; dijital dünyada birkaç olumsuz yorum birkaç saniyede yıllar süren güveni silebilir. NKolay Medya olarak markanızın online imajını sürekli izler, olumsuz içerikleri ve yorumları proaktif olarak yönetiriz. Google'da marka aramalarınızı, sosyal medyada etiketlenmelerinizi ve yorum platformlarınızı takip ederiz. Olumsuz içeriklerin yayılmasını önlemek için önleyici stratejiler ve erken uyarı sistemleri kurarız. Pozitif marka anlatısını güçlendirerek, müşterilerinizin sizi her mecrada güvenle görmesini sağlarız." },
      { heading: "Olumsuz Yorum Yönetimi ve Kriz İletişimi", body: "Her işletme zaman zaman olumsuz geri bildirim alır; bunu nasıl yönettiğiniz marka değerinizi gösterir. NKolay Medya olarak olumsuz yorumlara hızlı, saygılı ve çözüm odaklı cevaplar verir, müşterinin sesini duyarak sorunu çözüme yönlendiririz. Kriz anlarında ise acil iletişim planı devreye girer; yanlış bilgilerin düzeltilmesi, kurumsal duruşun iletilmesi ve kalabalık sesinin yönetilmesi için profesyonel müdahale sağlarız. Sosyal medyada kriz yönetimi, hızlı cevaplar ve tutarlı mesajlarla markanızı koruruz." },
      { heading: "Pozitif İçerik ve Marka Hikaye Stratejisi", body: "Olumsuz içeriklerin yanında kalmanın en iyi yolu, markanızla ilgili zengin ve pozitif içerik üretmektir. NKolay Medya olarak başarı hikayeleriniz, müşteri testimony'leriniz, proje örnekleriniz ve kurumsal sorumluluk projelerinizi çeşitli platformlarda paylaşırız. Blog yazıları, video içerikleri, müşteri hikayeleri ve sosyal medya gönderileriyle markanızın hikayesini anlatırız. SEO stratejileriyle bu içeriklerin arama sonuçlarında öne çıkmasını sağlayarak, itibarınızı dijital alanda güçlendiririz." },
      { heading: "Müşteri Yorumu Toplama ve Sosyal Kanıt", body: "Sosyal kanıt (social proof), müşteri satın alma kararını en çok etkileyen faktörlerden biridir. NKolay Medya olarak müşterilerinizden yorum toplamak için etkili metodlar geliştiririz; memnun müşterilerinizi adil bir şekilde teşvik eder, platformlarda yorum yapmalarını sağlarız. Google İşletme Profili, Yelp, Trustpilot gibi önemli platformlarda yorumları yönetir ve olumlu yorumların optimize edilmesi için çalışırız. Müşteri testimonial videoları ve vaka çalışmalarıyla marka güveninizi artırırız." },
      { heading: "Sürekli İzleme ve İtibar Raporlama", body: "Marka itibarı tek seferlik bir çalışma değildir; sürekli izleme ve iyileştirme gerektirir. NKolay Medya olarak markanızın online görünürlüğünü, duygu analizini ve algı oranını düzenli olarak ölçeriz. Google Alerts, özel izleme araçları ve sosyal medya dinleme platformlarıyla markanızdan bahseden tüm içerikleri takip ederiz. Aylık raporlarla markanızın ne kadar konuşulduğunu, duygu tonunun ne olduğunu ve itibarınızın nasıl geliştiğini gösteririz. Sürekli iyileştirme planlarıyla marka algınızı her zaman yüksek tutarız." },
    ],
    faq: [
      { question: "Dijital itibar yönetimi neden önemlidir?", answer: "Dijital itibar yönetimi, markanızın online dünyadaki algısını yönetmek anlamına gelir. Olumsuz yorumlar ve haberler birkaç saat içinde yayılabilir; bunu önlemek ve yönetmek için proaktif stratejiler gerekir. NKolay Medya markanızın itibarını her mecrada korur ve güçlendirir." },
      { question: "Olumsuz yorumları nasıl yönetirsiniz?", answer: "Olumsuz yorumlara hızlı, saygılı ve çözüm odaklı cevaplar veririz. Müşterinin şikayetini ciddiye alır, gerektiğinde özel çözüm öneririz. Kriz anlarında acil iletişim planıyla marka duruşumuzu korur, tutarlı mesajlarla yanlış bilgileri düzeltiriz." },
      { question: "Sosyal kanıt nasıl oluşturulur?", answer: "Sosyal kanıt, müşteri yorumları, testimonial videoları, vaka çalışmaları ve derecelendirmelerle oluşur. NKolay Medya müşterilerinizden etkili yorumlar toplar, platformları optimize eder ve marka güveninizi artırır. Olumlu geri bildirimler satın alma kararını doğrudan etkiler." },
      { question: "Marka algısı nasıl ölçülür?", answer: "Google Araması, sosyal medya bahsetmeleri, yorumlar, haberler ve topluluk etkileşimleri ile marka algısı ölçülür. NKolay Medya duygu analizi ve marka izleme araçlarıyla algınızı sürekli ölçer, raporlar. Aylık olarak gelişim raporları sunarız." },
      { question: "Kriz iletişimi planı neden gereklidir?", answer: "Kriz anlarında hazırlıksız yakalanmak markaya kalıcı zarar verebilir. Önceden hazırlanmış bir kriz iletişimi planı, tutarlı mesajlar ve acil müdahale protokolleriyle markanızı korur. NKolay Medya kriz yönetimi planları sunar ve gerektiğinde müdahale eder." },
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
      { heading: "Marka Stratejisi ve Kimlik Tasarımı", body: "Marka sadece bir logo değil, işletmenizin toplam algısıdır. NKolay Medya olarak marka stratejisi sürecini hedefleriniz, hedef kitleniz ve sektörünüzle uyumlu bir çerçeveye oturturuz. Marka misyonu, vizyonu ve değerlerini netleştirerek tüm iletişimlerinizde tutarlı bir dil kurarız. Logo tasarımından renk paletine, tipografiden ses tonuna (tone of voice) kadar görsel ve metinsel marka dilini oluştururuz. Marka rehberi (brand book) hazırlayarak ekibiniz ve tedarikçilerinizin markayı her mecrada doğru temsil etmesini sağlarız. Tutarlı bir marka kimliği, müşterinin gözünde güven ve profesyonellik algısı yaratır." },
      { heading: "Marka Konumlandırma ve Pazar Analizi", body: "Doğru marka konumu, işletmenizin rakiplerinizden ayrışmasını sağlar. NKolay Medya olarak sektör analizi, müşteri anketleri ve rakip denetimleri yaparak markanızın en güçlü olduğu alanları tespit ederiz. Hangi değer önerisi (value proposition) ile müşteriye hitap edeceğinizi belirler, benzersiz satış noktanızı (USP) netleştiririz. Pazar segmentasyonu ve hedef kitle tanımlaması ile marka mesajınızı en doğru kitleye ulaşacak şekilde özelleştiririz. Stratejik konumlandırma ile markanızın sadece satılan bir ürün değil, bir deneyim olarak algılanmasını sağlarız." },
      { heading: "Rakip Analizi ve Pazar Fırsatları", body: "Markanızın nerede durduğunu bilmek için rakiplerinizi derinlemesine analiz etmelisiniz. NKolay Medya olarak sektörünüzdeki önde gelen markaların pazarlama stratejilerini, iletişim dilini ve müşteri algılarını inceleriz. Güçlü yönlerini ve zayıf noktalarını tespit ederek markanız için fırsat pencereleri belirleriz. Pazar eğilimlerini ve tüketici davranış değişimlerini takip ederek marka stratejinizi sürekli güncelleriz. Rekabet analizi ile markanızı farklılaştırmanız için en doğru adımları planlarız." },
      { heading: "Dijital Marka Deneyimi ve İletişim", body: "Marka deneyimi, müşterinin markayla temas halinde olduğu her anı kapsar. NKolay Medya olarak web sitesi, sosyal medya, e-posta, reklamlar ve müşteri hizmetleri gibi tüm temas noktalarınızı marka dilinizle uyumlu hale getiririz. Dijital pazarlama kanallarında tutarlı bir deneyim sunmak, müşteri sadakati oluşturmak için kritiktir. Marka mesajlarınızı doğru kanallarda doğru zamanda iletir, müşteri yolculuğunuzu marka deneyimiyle destekleriz." },
      { heading: "Marka Ölçümü ve Sürekli Gelişim", body: "Marka değeri sürekli ölçülmeli ve geliştirilmeli. NKolay Medya olarak marka bilinirliği, müşteri sadakati, marka algısı ve duygu analizi gibi metriklerle markanızın sağlığını ölçeriz. Müşteri anketleri, çevrimiçi dinleme ve sosyal medya analizleri ile marka performansınızı değerlendiririz. Bulgular ışığında marka stratejinizi revize eder, sürekli iyileştirme planları uygularız. Markanızın büyümesini destekleyen ölçülebilir hedefler belirleriz." },
    ],
    faq: [
      { question: "Marka stratejisi ne içerir?", answer: "Marka stratejisi; marka misyonu, vizyonu, hedef kitle, konumlandırma ve benzersiz satış noktasını (USP) içerir. NKolay Medya işletmenizin hedefleriyle uyumlu strateji oluşturur ve marka rehberi (brand book) ile belgeler." },
      { question: "Küçük bir işletme için marka danışmanlığı gerekli mi?", answer: "Evet, küçük işletmeler bile güçlü bir marka kimliği ile büyüyebilir ve sadık müşteri kitlesi oluşturabilir. Marka danışmanlığı yatırımı uzun vadede pazarlama maliyetlerini azaltır ve işletmenizin değerini artırır." },
      { question: "Marka yenilemesi ne zaman gerekli?", answer: "Marka yenilemesi, işletme hedefleriniz değiştiğinde, pazar konumunuz değiştiğinde veya mevcut kimliğiniz artık yansıtmadığında gereklidir. NKolay Medya marka denetimi yaparak yenileme gerekip gerekmediğini tespit eder, gerekirse tüm süreci yönetir." },
      { question: "Marka rehberi (brand book) ne içerir?", answer: "Marka rehberi; logo kullanım kuralları, renk paleti, tipografi, görsel dil, ses tonu ve kullanım örneklerini içerir. Ekibiniz ve tedarikçileriniz markayı her mecrada doğru kullanmasını sağlar. Tutarlılık marka güvenini artırır." },
      { question: "Marka algısı nasıl ölçülür?", answer: "Müşteri anketleri, sosyal medya duygu analizi, marka arama hacmi ve müşteri yorumları ile algı ölçülür. NKolay Medya marka izleme raporları sunar, algınızı sürekli ölçer ve geliştirme önerileri verir." },
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
      { heading: "E-Ticaret Stratejisi ve Pazar Analizi", body: "Başarılı bir e-ticaret işletmesi, ürün satmaktan önce doğru strateji kurmaktır. NKolay Medya olarak pazarlama planı hazırlarken önce hedef kitlenizi, rakiplerinizi ve pazar eğilimlerini analiz ederiz. Hangi ürün kategorilerinin en yüksek dönüşümü vereceğini, hangi fiyatlandırma stratejisini ve hangi ödeme seçeneklerini kullanacağınızı belirleriz. Amazon, Trendyol, Hepsiburada gibi pazar yerlerinde satış yaparken markanızı öne çıkaracak ürün optimizasyonu ve fiyat stratejileri sunarız. E-ticaret yatırımınızın en iyi getiriyi vermesi için öngörülebilir ve ölçülebilir bir yol haritası çıkarırız." },
      { heading: "Kurumsal E-Ticaret Sitesi ve UX Optimizasyonu", body: "E-ticaret sitesi yalnızca ürün listeleyen bir vitrin değil, satış motorudur. NKolay Medya olarak dönüşüm odaklı e-ticaret siteleri kurar; kullanıcı deneyini her adımda optimize ederiz. Hızlı sayfa yüklenmesi, kolay ürün arama, sınırsız filtreleme, çoklu ödeme ve kargo seçenekleriyle alışverişi keyfe çeviririz. Sepeti terk etmeyi önlemek için kupon ve hatırlatma e-postaları kurar, müşteri yorumları ve güven badge'leriyle güveni artırırız. A/B testleriyle satış hunisini sürekli iyileştiririz; sonuç, daha düşük terk oranı ve daha yüksek ortalama sipariş tutarı demektir." },
      { heading: "Pazar Yeri Yönetimi ve Listeleme Optimizasyonu", body: "Türkiye'de e-ticaretin büyük çoğunluğu Trendyol, Hepsiburada ve gibi pazar yerlerinde gerçekleşir. NKolay Medya olarak pazar yeri hesaplarınızı optimize eder, ürün başlıklarını, açıklamalarını, anahtar kelimelerini ve görsellerini arama sonuçlarında öne çıkacak şekilde düzenleriz. Fiyat takibi ve rakip analizi ile rekabetçi fiyatlandırma stratejisi sunarız. Müşteri yorumlarını olumlu yönetir, sorulara hızlı cevaplar veririz. Pazar yeri reklamları ve kampanyalarıyla ürün görünürlüğünü artırır, dönüşüm oranınızı yükseltiriz." },
      { heading: "Müşteri Sadakati ve CRM Stratejileri", body: "E-ticarette kazanç, ilk satıştan sonra başlar. NKolay Medya olarak müşteri sadakat programları, otomatik e-posta pazarlaması ve kişiselleştirilmiş tekliflerle tekrar satış yapmanızı sağlarız. Müşteri yaşam boyu değerini (CLV) yükseltmek için özel segmentasyonlar ve davranışa dayalı pazarlama kampanyaları kurarız. İade oranlarını düşürmek için açıklayıcı ürün bilgileri ve kolay iade süreci sunarız. Müşteri sadakati ile markanızı bir alışveriş deneyimine dönüştürürüz." },
      { heading: "Analitik ve Veri Odaklı Büyüme", body: "E-ticaret kararları varsayımla değil, veriyle verilmelidir. NKolay Medya olarak Google Analytics 4, pazar yeri analitikleri ve özel raporlarla satış, trafik ve dönüşüm verilerinizi derinlemesine analiz ederiz. Hangi kanaldan gelen müşterinin en yüksek değeri sağladığını, hangi ürünün en çok satıldığını ve hangi reklamın en iyi getiriyi verdiğini gösteririz. Veriye dayalı strateji değişiklikleriyle bütçenizi en karlı kanallara yönlendiririz." },
    ],
    faq: [
      { question: "E-ticaret sitesi kurulum süreci ne kadar sürer?", answer: "Kurumsal e-ticaret sitesi genellikle 4-8 hafta sürer; ürün miktarı ve özel özelliklere göre süre değişir. Pazar yeri hesapları daha hızlı kurulur. NKolay Medya her aşamada şeffaf ilerler, sonuca odaklanır." },
      { question: "Trendyol veya Hepsiburada'da satış nasıl başlar?", answer: "Pazar yeri hesabı açmak, ürün listelemesini optimize etmek ve müşteri hizmetlerini kurmak temel adımlardır. NKolay Medya markanızı pazar yerinde öne çıkaracak optimizasyon ve reklam stratejileri sunar." },
      { question: "E-ticaret trafiğini nasıl artırırım?", answer: "SEO, Google Ads, Meta reklamları, pazar yeri reklamları ve içerik pazarlaması ile çok kanallı trafik stratejisi uygularız. NKolay Medya en uygun kanalları belirler, bütçeyi optimize eder ve dönüşüm odaklı trafik sağlar." },
      { question: "Sepeti terk etmeyi nasıl önlersiniz?", answer: "Hızlı ödeme, çoklu ödeme seçenekleri, güven badge'leri, müşteri yorumları ve hatırlatma e-postaları ile terk oranını düşürürüz. A/B testleriyle ödeme sürecini sürekli iyileştiririz. NKolay Medya dönüşüm optimizasyonu ile satışları artırır." },
      { question: "E-ticaret için hangi platform tercih edilmeli?", answer: "Küçük ve orta ölçekli işletmeler için Shopify veya WooCommerce, büyük ölçekli ve özel ihtiyaçlar için özel geliştirme uygundur. NKolay Medya ihtiyaçlarınıza en uygun platform önerir ve tam entegre kurar." },
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
      { heading: "Kurumsal Tanıtım Videoları ve Marka Hikayesi", body: "Video, markanızı anlatmanın en güçlü yoludur. NKolay Medya olarak kurumsal tanıtım videoları, marka hikayeleri ve şirket tanıtım videoları üretiriz. Fikir aşamasından kurguya, çekimden son düzenlemeye kadar her adımı kendi ekibimizle yürütürüz. Profesyonel kamera ekipmanları, drone çekimleri ve stüdyo aydınlatma ile yüksek kaliteli görüntüler elde ederiz. Marka değerlerinizi, misyonunuzu ve vizyonunuzu doğal bir dille video halinde anlatır, izleyicinin ilgisini çekmek için güçlü bir açılış ve tutarlı bir anlatı yapısı kurarız. Sonuç; markanızı sadece duyurmak değil, hissettiren bir deneyim sunarız." },
      { heading: "Reklam ve Sosyal Medya Video İçerikleri", body: "Sosyal medyada video içerikleri en yüksek etkileşim oranına sahiptir. NKolay Medya olarak reklam videoları, ürün tanıtım videoları, sosyal medya reels ve shorts içerikleri üretiriz. Kısa formatlı (15-60 saniye) videolarla markanızı geniş kitlelere duyurur, izleyiciyi ilk saniyede yakalayan güçlü açılışlar ve çağrı butonlarıyla dönüşüm odaklı içerikler hazırlarız. Animasyon, motion graphics ve ses efekti ile videoları zenginleştiririz. Platform özel formatları (Reels, Shorts, TikTok) optimize eder; her videonun en doğru formatta ve kalitede sunulmasını sağlarız." },
      { heading: "Eğitim ve How-To Video İçerikleri", body: "Eğitici video içerikleri, marka bilgini artırır ve müşteriye değer sunar. NKolay Medya olarak ürün kullanım videoları, eğitim setleri, adım adım rehberler ve eğitim serileri üretiriz. Kullanıcıların sorunlarını çözmesine yardımcı olan içerikler, markaya olan güveni artırır ve müşteri sadakati oluşturur. Profesyonel seslendirme, altyazılar ve çoklu dil desteği ile eğitim videolarınızı geniş kitlelere açabilirsiniz. İçeriklerinizi YouTube ve sosyal medyada ölçeklendirerek marka bilinirliğinizi artırırız." },
      { heading: "Etkinlik ve Canlı Yayın Çekimleri", body: "Kurumsal etkinlikler, fuarlar ve lansmanlar için profesyonel canlı yayın ve çekim hizmeti sunarız. NKolay Medya olarak çoklu kamera setup, profesyonel ses sistemi ve canlı yayın teknolojisi ile etkinliğinizi gerçek zamanlı olarak internette yayınlar veya kaydedilmiş içerik olarak sunarız. Ön plan, arka plan, izleyici ve konuşmacı görüntülerini senkronize eder; kesintisiz yayın sağlarız. Etkinlik öncesi teaser videoları, canlı yayın ve etkinlik sonrası özet videolarıyla tüm süreci kapsayan içerik üretiriz. Kurumsal etkinliklerinizin vurguluğunu artırırız." },
      { heading: "Post-Prodüksiyon, Renk ve Ses İşleme", body: "Çekim bittikten sonra video birleştirme, renk düzeltme (color grading), ses düzenleme, efekt ve altyazı ekleme aşamaları bekler. NKolay Medya olarak profesyonel post-prodüksiyon ekibimiz ile videolarınızı son rötuşa götürürüz. Renk paletini marka renklerinizle uyumlu hale getiririz, sesi netleştirir ve arka plan müziği ekleriz. Animasyon, motion graphics ve 3D efektlerle videolarınızı zenginleştiririz. Altyazılar ve çoklu dil desteği sunarız. Sonuç; sinema kalitesinde, markanıza özel bir video deneyimi." },
    ],
    faq: [
      { question: "Video prodüksiyon süreci nasıl işler?", answer: "Önce fikir ve kurgu aşaması, ardından senaryo, çekim ve son olarak post-prodüksiyon gelir. NKolay Medya her adımı müşteri onayına sunar, şeffaf ilerler. Son video teslim edilir ve revizyon hakları sunarız." },
      { question: "Kurumsal tanıtım videosu ne kadar sürer?", answer: "2-3 dakikalık kurumsal video prodüksiyonu genellikle 3-6 hafta sürer; süre kurgu, çekim gün sayısı ve post-prodüksiyon karmaşıklığına bağlıdır. NKolay Medya her aşamada zaman çizelgesi sunar." },
      { question: "Drone çekimleri yapılıyor mu?", answer: "Evet, profesyonel drone çekimleri ile kuş bakışı ve geniş açı görüntüler elde ederiz. Türkiye genelinde izin gerektiren alanlarda gerekli izinleri biz alırız. Havadan manzara ve büyük ölçekli etkinlikler için idealdir." },
      { question: "Video içerikleri hangi formatlarda sunulur?", answer: "MP4, MOV, AVI gibi standart formatlarda sunarız; istenirse özel format ve çözünürlük seçenekleri mevcuttur. Sosyal medya formatları (Reels, Shorts) özel olarak optimize edilir. Yüksek kaliteli master dosyası ve optimize edilmiş kopyalar sunarız." },
      { question: "Video prodüksiyon maliyeti neye göre değişir?", answer: "Çekim süresi, ekip büyüklüğü, kurgu karmaşıklığı, efektler ve kullanılacak ekipman maliyetini belirler. NKolay Medya her projede bütçe dostu ve kaliteli çözümler sunar; detaylı fiyatlandırma ile şeffaflık sağlarız." },
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
      { heading: "Profesyonel Seslendirme ve Stüdyo Kaydı", body: "Ses, video ve reklamlarınızda izleyiciyi en çok etkileyen unsurdur. NKolay Medya olarak Türkçe ve yabancı dil seslendirme hizmeti sunarız; akustik olarak düzenlenmiş profesyonel stüdyomuzda net ve etkileyici ses kayıtları yaparız. Reklam filmleri, kurumsal tanıtım videoları, eğitim içerikleri, canlı yayınlar ve otomatik sesli yanıt (IVR) sistemleri için geniş bir seslendirme kütüphanesi sunarız. Her projeye uygun ses tonu, temposu ve duygu tonunu belirleriz; sinematik, güçlü, sıcak veya bilgilendirici seslerle marka sesinizi oluştururuz." },
      { heading: "Tercüme ve Çoklu Dil Seslendirme", body: "Küresel markalar ve çok uluslu projeler için çoklu dil seslendirme hizmeti sunarız. NKolay Medya olarak metinlerinizi önce doğru tercümeye çevirir, ardından her dilde native seslendirme sanatçıları ile kayıt yapılır. Ses tonunuzun tüm dillerde aynı etkiyi yaratması için ses yöneticimiz her kaydı kontrol eder. Altyazı ekleme ve zamanlama (sync) hizmeti de sunarız; sesin görüntüye tam uyumlu olmasını sağlarız. Reklamlarınızı uluslararası pazarlara açmak için en güvenilir seslendirme çözümünü sunarız." },
      { heading: "Podcast ve Sesli İçerik Üretimi", body: "Sesli içerikler, marka bilinirliğini artırmak ve sadık bir kitle oluşturmak için güçlü araçlardır. NKolay Medya olarak podcast düzenleme, ses kaydı ve prodüksiyon hizmeti sunarız. Konuşmacı hazırlığı, ses kalitesi, müzik seçimi ve düzenleme ile her bölümünüzü profesyonel seviyeye taşırız. İçerik planlaması, konuk yönetimi ve dağıtım platformları (Spotify, Apple Podcasts) yönetimi ile podcast sürecini baştan sona yönetiriz. Marka podcast'leri ile sadık bir kitle oluşturur, uzun soluklu marka müşterisi yaratırız." },
      { heading: "IVR ve Otomatik Sesli Sistemler", body: "Müşteri hizmetleri için profesyonel seslendirme, çağrı merkezi sistemleri ve otomatik sesli yanıt (IVR) sistemleri için özel ses kayıtları hazırlarız. NKolay Medya olarak kurumsal ses tonunuzla uyumlu IVR mesajları, bekleme müzikleri ve müşteri bilgilendirme sesleri üretiriz. Ses kalitesi yüksek, anlaşılır ve profesyonel olur; müşteri deneyimini olumlu yönde etkiler. Çoklu dil IVR sistemleri için dil desteği sunarız. Seslendirme projeleriniz için stüdyo rezervasyonu ve hızlı teslimat imkanı mevcuttur." },
      { heading: "Ses Tasarımı ve Müzik Prodüksiyonu", body: "Reklamlarınız ve videolarınız için özgün müzik ve ses efektleri üretiriz. NKolay Medya olarak jingle, arka plan müziği, geçiş efektleri ve özel ses tasarımları yaparız. Marka kimliğinize uygun müzik tarzını belirler, tutarlı bir ses deneyimi sunarız. Özgün müzik üretimi ile telif hakkı sorunlarını önleriz. Reklam, film ve oyun projeleriniz için ses tasarımı hizmetimizle özgün ve etkileyici ses dünyası oluştururuz." },
    ],
    faq: [
      { question: "Seslendirme kayıtları ne kadar sürer?", answer: "Proje karmaşıklığına bağlıdır; 1-2 dakikalık reklam metni için seslendirme 1-2 saat, uzun metinler veya eğitim videoları için daha uzun sürer. NKolay Medya hızlı teslimat sunar, proje büyüklüğüne göre zaman çizelgesi verir." },
      { question: "Hangi dillerde seslendirme yapılıyor?", answer: "Türkçe, İngilizce, Almanca, Arapça ve diğer dillerde native seslendirme sanatçıları ile çalışırız. Çoklu dil projeleriniz için tercüme ve seslendirme sürecini tek elden yürütürüz." },
      { question: "Seslendirme için stüdyo kiralamak gerekli mi?", answer: "Profesyonel seslendirme için akustik olarak düzenlenmiş stüdyo gereklidir; dış gürültü ve yankı olmadan net ses kaydı yapmak için özel ekipman ve ortam gerekir. NKolay Medya kendi stüdyomuzda kayıt yapar, siz sadece metni iletirsiniz." },
      { question: "Podcast prodüksiyonu ne içerir?", answer: "Podcast prodüksiyonu; ses kaydı, düzenleme, ses iyileştirme, müzik seçimi, altyazı ve dağıtım platformlarına yükleme adımlarını içerir. NKolay Medya süreci baştan sona yönetir; konuşmacı hazırlığı ve içerik planlaması da sunarız." },
      { question: "IVR sistemleri için seslendirme nasıl yapılır?", answer: "IVR sistemleri için net, anlaşılır ve kurumsal ses tonuna uygun ses kayıtları hazırlanır. NKolay Medya seslendirme yapar, ses dosyalarını IVR sisteminize entegre eder ve test eder. Çoklu dil desteği ve özel ses tasarımı sunarız." },
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
      { heading: "Dijital Dönüşüm ve İş Stratejisi Danışmanlığı", body: "Dijital dönüşüm, teknoloji ile iş süreçlerini yenilemek demektir; sadece yazılım yüklemek değil, tüm organizasyonu geleceğe uyarlamaktır. NKolay Medya olarak işletmenizin mevcut durumunu analiz eder, dijital olmayan süreçleri belirler ve hedefler doğrultusunda dönüşüm yol haritası çıkarırız. Teknoloji, insan ve süreçleri uyumlu bir stratejiyle bir araya getiririz. İster küçük bir işletme olun, ister kurumsal ölçek; dijital yatırımlarınızın en iyi getiriyi vermesi için kapsamlı bir plan sunarız. Dönüşüm yolculuğunuzda sürekli yanınızda oluruz." },
      { heading: "İş Süreçleri Analizi ve Optimizasyonu", body: "İşletmelerin büyümesinin önündeki en büyük engel verimsiz süreçlerdir. NKolay Medya olarak tüm operasyonları adım adım analiz eder, tekrarlayan ve manuel işleri otomasyon yönünde öneriler sunarız. Süreç otomasyonu, dijital araçlar ve veri odaklı karar mekanizmaları ile zaman ve kaynak tasarrufu sağlarız. Örneğin sipariş takibi, fatura kesimi ve müşteri ilişkileri gibi süreçleri tek panelde toplar, departmanlar arası veri akışını hızlandırırız. İş süreçlerinizi sadeleştirdikçe ekibiniz daha stratejik işlere odaklanır ve verimlilik artar." },
      { heading: "Veri Analizi ve Karar Destek Sistemleri", body: "İyi bir strateji doğru veriye dayanır. NKolay Medya olarak işletmenizin mevcut verilerini toplar, raporlar ve öngörülebilir modellemeler yaparız. Müşteri verisi, satış verisi ve işletme performansı üzerinden anlamlı içgörüler çıkarırız. Karar destek sistemleri ile yöneticilerinizin veriye dayalı kararlar almasını sağlarız. Görsel paneller (dashboard) ile tüm işletme performansını tek ekranda izleyebilirsiniz. Veri odaklı kültür kurmanızı destekleriz." },
      { heading: "Teknoloji Yatırımı ve Dijital Altyapı Planlama", body: "Teknoloji yatırımlarınız doğru planlanmazsa büyük kayıplara yol açabilir. NKolay Medya olarak mevcut sisteminizi ve ihtiyaçlarınızı analiz ederek en uygun teknoloji yatırımlarını belirleriz. Bulut geçişi, yazılım entegrasyonu ve özel sistem geliştirme konularında danışmanlık sunarız. Teknoloji bütçenizi en verimli şekilde dağıtmanız için roadmap hazırlarız. Risk analizi ve fizibilite çalışmaları ile yatırım kararlarınızı güçlendiririz." },
      { heading: "Değişim Yönetimi ve Ekip Dönüşümü", body: "Dijital dönüşüm sadece teknoloji değişikliği değildir, ekip kültürünü de etkiler. NKolay Medya olarak değişim yönetimi süreçleriyle ekibinizin dijital dönüşüme uyum sağlamasını destekleriz. Eğitimler, atölye çalışmaları ve iletişim planları ile ekibiniz yeni süreçlere ve sistemlere hazırlanır. Dönüşüm sürecini yönetir, olası dirençleri bertaraf ederiz. Değişim yönetimi, dijital dönüşümünuzun başarısını belirleyen en önemli faktördür." },
    ],
    faq: [
      { question: "Dijital dönüşüm ne anlama gelir?", answer: "Dijital dönüşüm, işletmenizin tüm süreçlerini dijital teknolojilerle yenilemesi ve optimize etmesi demektir. Sadece yazılım değil, strateji, eğitim ve değişim yönetimi gerektirir. NKolay Medya uçtan uca dönüşüm danışmanlığı sunar." },
      { question: "Dijital dönüşüm için neye ihtiyacım var?", answer: "İşletme boyutuna ve sektöre göre ihtiyaçlar farklıdır; genellikle iş süreci analizi, yazılım çözümleri, eğitim ve değişim yönetimi gerekir. NKolay Medya ön analiz yaparak en uygun paketi önerir." },
      { question: "Strateji danışmanlığı ne kadar sürer?", answer: "Kapsamlı bir dijital dönüşüm planı genellikle 4-8 hafta sürer; uygulama ve eğitim süreci ayrı bir süredir. NKolay Medya analiz, yol haritası ve uygulama desteklerini bir pakette sunar." },
      { question: "Küçük işletmeler için dijital dönüşüm uygun mu?", answer: "Evet, küçük işletmeler için bile dijital dönüşüm büyük fark yaratır; otomasyon ve verimlilik artışı bütçeyi destekler. NKolay Medya ölçeğinize uygun, uygulanabilir stratejiler sunar." },
      { question: "Strateji danışmanlığından sonra uygulama yapılıyor mu?", answer: "Evet, NKolay Medya sadece plan değil, uygulama desteği de sunar. Proje yönetimi, teknik entegrasyon ve eğitim ile stratejiyi hayata geçiririz. Tam entegre danışmanlık hizmeti sunarız." },
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
      { heading: "İş Süreçleri Otomasyonu (RPA ve Workflow)", body: "İşletmelerin zamanını en çok alan şey tekrarlayan, manuel ve hataya açık süreçlerdir. NKolay Medya olarak Robotic Process Automation (RPA) ve iş akışı otomasyonu ile veri girişi, fatura işleme, e-posta yönetimi, müşteri takibi ve raporlama gibi süreçleri otomatikleştiririz. Botlar 7/24 çalışır, hata yapmaz ve süreci dakikalar içinde tamamlar. İnsan gücünü daha değerli, stratejik işlere yönlendirirken, tekrarlayan görevleri otomasyona devrederiz. ROI, otomasyon yatırımının ilk aylarda kendini amorti etmesiyle görülür." },
      { heading: "Zapier, Make ve Araçlar ile Entegrasyon", body: "Kullanmadığınız farklı yazılımları birbirine bağlamak için özel entegrasyonlar yazmak yerine, Zapier ve Make (eski adıyla Integromat) gibi güçlü otomasyon araçlarını kullanırız. Form, e-posta, CRM, e-ticaret platformu ve müşteri hizmetleri yazılımlarını dakikalar içinde birbirine bağlarız. Örneğin bir web formu doldurulduğunda otomatik olarak müşteri CRM'ye eklenir, teşekkür e-postası gönderilir ve satış ekibine bildirim gider. Kod yazmadan yapılandırılabilir otomasyonlar ile hızlı ve esnek çözümler sunarız." },
      { heading: "E-posta ve Pazarlama Otomasyonu", body: "E-posta pazarlaması, en yüksek ROAS (yatırım getirisi) veren dijital kanallardan biridir. NKolay Medya olarak Mailchimp, ConvertKit ve ActiveCampaign gibi platformlarda e-posta otomasyonları kurar, müşteri yolculuğunu otomatikleştiririz. Hoş geldin serisi, terk edilmiş sepet hatırlatma, doğum günü özel teklifleri ve müşteri sadakat programları gibi otomasyonlar ile her müşteriye kişiselleştirilmiş iletişim göndeririz. Pazarlama otomasyonu, müşterinin satın alma yolculuğunun her adımında otomatik ve doğru mesajlarla rehberlik eder." },
      { heading: "Sosyal Medya ve İçerik Otomasyonu", body: "Sosyal medyayı düzenli yönetmek zaman alıcıdır. NKolay Medya olarak içerik takvimini önceden planlar, platformlar arasında otomatik paylaşım ve zamanlama kurarız. Buffer, Hootsuite ve Metricool gibi araçlarla tüm hesaplarınızı tek yerden yönetir, en iyi zamanlarda paylaşım yaparız. Müşteri etkileşimlerini otomatik olarak takip eder, raporlar ve öneriler sunarız. İçerik otomasyonu ile markanızın sürekli ve tutarlı bir şekilde sosyal medyada yer almasını sağlarız." },
      { heading: "Veri Otomasyonu ve Raporlama Sistemleri", body: "Veriyi toplamak, işlemek ve raporlamak saatler alabilir. NKolay Medya olarak veri otomasyonu ile tüm kaynaklardan veriyi otomatik olarak toplar, işler ve özel panellere aktarırız. Manuel Excel çalışmaları yerine otomatik raporlama sistemleri kurar, gerçek zamanlı veri panelleri sunarız. Veri doğruluğu ve tutarlılığı sağlanır, raporlama süresi saatlerden dakikalara düşer. Otomasyon ile ekip üyeleriniz veriye odaklanırken tekrarlayan görevlerden kurtulur." },
    ],
    faq: [
      { question: "Otomasyon hangi süreçleri kapsar?", answer: "Veri girişi, fatura işleme, e-posta yönetimi, müşteri takibi, raporlama, sosyal medya paylaşımı ve form işleme gibi tekrarlayan süreçler otomasyon ile kapsanır. NKolay Medya her süreci analiz edip en uygun otomasyonu kurar." },
      { question: "RPA ile otomasyon arasındaki fark nedir?", answer: "RPA (Robotic Process Automation), yazılım botlarıyla kullanıcı arayüzü düzeyinde otomasyon yapar; workflow araçları ise API düzeyinde sistemleri bağlar. NKolay Medya ihtiyaçlarınıza en uygun yöntemi seçer, ikisini birleştirerek kapsamlı çözümler sunar." },
      { question: "Otomasyon kurulumu ne kadar sürer?", answer: "Basit otomasyonlar birkaç saat, orta düzey iş akışları 1-3 gün, karmaşık RPA projeleri 1-4 hafta sürer. NKolay Medya hızlı prototipleme ile hızlı sonuç verir." },
      { question: "Otomasyon maliyeti neye göre hesaplanır?", answer: "Otomasyon maliyeti, süreç sayısı, karmaşıklık ve kullanılacak araçlara göre değişir. Genellikle RPA ve otomasyon yatırımı ilk 3-6 ayda kendini amorti eder. NKolay Medya ön analiz ile ROI tahmini sunar." },
      { question: "Otomasyon sonrası ekip etkisi nasıl olur?", answer: "Otomasyon tekrarlayan görevleri azaltır, ekip daha stratejik işlere odaklanır. İnsan hatası azalır, hız artar ve verimlilik yükselir. NKolay Medya eğitim ve değişim yönetimi ile geçişi kolaylaştırır." },
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
      { heading: "Siber Güvenlik Denetimi ve Risk Değerlendirmesi", body: "Siber güvenlik, işletmenizin en kritik alanıdır; bir güvenlik ihlali veri kaybı, operasyon kesintisi ve itibar zararına yol açar. NKolay Medya olarak kapsamlı siber güvenlik denetimleri ve risk değerlendirmeleri yaparız. Ağ taraması, zafiyet analizi, kötü amaçlı yazılım taraması ve erişim kontrolleri ile mevcut güvenlik durumunuzu değerlendiririz. Bulunan zayıflıklar öncelik sırasına göre ele alınır; acil durumlar için anında müdahale planı hazırlanır. KVKK ve uluslararası standartlara uyum sağlayarak yasal riski de azaltırız." },
      { heading: "Güvenlik Duvarı ve Ağ Güvenliği", body: "Ağ güvenliği, işletmenizin dijital sınırlarını korumak demektir. NKolay Medya olarak gelişmiş güvenlik duvarları (firewall), saldırı önleme sistemleri (IPS) ve trafik filtreleme ile ağınızı koruruz. Şüpheli trafikleri tespit eder, yetkisiz erişimleri engelleriz. VPN ve güvenli uzak erişim çözümleri ile çalışanlarınızın güvenli şekilde uzaktan çalışmasını sağlarız. Ağ izleme ve günlük kayıtları ile tüm aktiviteleri takip eder, olası tehditlere erken uyarı veririz. Ağ güvenliği, tüm sisteminizin temel korumasıdır." },
      { heading: "Veri Koruma ve KVKK Uyumu", body: "Veri, en değerli dijital varlığızdır; korunması ve yasal uyum sağlanması zorunludur. NKolay Medya olarak veri şifreleme, güvenli depolama, erişim kontrolü ve veri kaybı önleme stratejileri kurarız. Kişisel verilerinizi KVKK kapsamında güvenli işler; açık rıza ve veri sahibi hakları konusunda danışmanlık sunarız. Veri sınıflandırma, şifreleme ve düzenli denetimler ile veri güvenliğini sürekli koruruz. KVKK uyumu denetimleri ve belgelerle yasal riski en aza indiririz." },
      { heading: "Fidye Yazılımı (Ransomware) Koruması ve Kurtarma", body: "Fidye yazılımı saldırıları günümüzde en yaygın tehditlerden biridir. NKolay Medya olarak çok katmanlı fidye yazılımı koruması kurar; e-posta filtreleme, uygulama kısıtlaması ve düzenli yedekleme ile saldırı riskini azaltırız. Acil durum kurtarma planı ile saldırı anında veri kaybını önler, hızlı kurtarma sağlarız. Yedekler farklı lokasyonlarda ve çevrimdışı tutulur; saldırı durumunda bile verileriniz korunur. Düzenli fidye yazılımı taraması ve eğitim ile ekip hazırlığını artırırız." },
      { heading: "Güvenlik Eğitimi ve Farkındalık Programları", body: "İnsan, güvenlik zincirinin en zayıf halkasıdır. NKolay Medya olarak işletme ekibiniz için siber güvenlik farkındalık eğitimleri düzenleriz; kimlik avı (phishing), güçlü parola, sosyal mühendislik ve veri koruma konularında pratik eğitimler sunarız. E-posta simülasyonları ile gerçek phishing saldırılarını test eder, ekip tepki verme yeteneğini ölçeriz. Düzenli eğitimler ile güvenlik kültürünü oluşturur, insan kaynaklı güvenlik risklerini azaltırız. Eğitimler Türkçe ve sektöre özel örneklerle hazırlanır." },
    ],
    faq: [
      { question: "Siber güvenlik denetimi ne içerir?", answer: "Ağ taraması, zafiyet analizi, kötü amaçlı yazılım taraması, erişim kontrolleri ve güvenlik politikası denetimi kapsar. NKolay Medya kapsamlı bir denetim sonrası öncelikli iyileştirme planı sunar." },
      { question: "Küçük işletmeler için siber güvenlik gerekli mi?", answer: "Evet, küçük işletmeler de saldırı hedefidir; fidye yazılımı ve kimlik avı saldırıları boyutsuz yapılır. Temel güvenlik önlemleri ve eğitim ile riski önemli ölçüde azaltabilirsiniz. NKolay Medya ölçeğinize uygun çözümler sunar." },
      { question: "KVKK uyumu için ne yapılması gerekir?", answer: "Kişisel veri envanteri, güvenli işleme, açık rıza mekanizması, veri sahibi hakları süreci ve veri ihlali bildirim prosedürü gerekir. NKolay Medya KVKK danışmanlığı ve denetim desteği sunar." },
      { question: "Fidye yazılımı saldırısında ne yapılmalı?", answer: "Fidye yazılımı durumunda önce ağ kesilir, etkilenen sistemler izole edilir. Güvenlik ekibi durumu değerlendirir, yedeklerden kurtarma yapılır. NKolay Medya acil müdahale protokolü ile hızlı kurtarma sağlar." },
      { question: "Siber güvenlik eğitimi ne içerir?", answer: "Phishing tanıma, güçlü parola kullanımı, sosyal mühendislik, veri koruma ve acil durum prosedürleri konularında eğitimler sunarız. Phishing simülasyonları ile pratik eğitim yaparız. Ekip güvenlik farkındalığını artırırız." },
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
  {
    id: "blog-11",
    title: "2026'da Google Ads: Yapay Zeka ve Akıllı Teklif Stratejileriyle Rekabette Öne Çıkın",
    excerpt: "2026 yılında Google Ads'in yapay zeka destekli özellikleri, reklam kampanyalarınızı otomatik olarak optimize eder. Target CPA ve Target ROAS stratejileri ile bütçenizi en verimli şekilde kullanın.",
    author: "NKolay Medya",
    publishedAt: "2026-06-20",
    slug: "google-ads-ai-akilli-teklif-stratejileri-2026",
    category: "Dijital Reklamcılık",
    tags: ['Google Ads', 'Reklam', 'AI', '2026'],
    readTime: "10 dk",
    coverEmoji: "🤖",
    coverImage: "/hero_n.512.webp",
    content: [
      { heading: "Yapay Zeka Destekli Teklif Stratejileri", body: "Google Ads'in 2026 sürümü, makine öğrenimi ve yapay zeka destekli özellikleriyle reklamcıların çalışma şeklini tamamen değiştirdi. Target CPA (Cost Per Action) ve Target ROAS (Return on Ad Spend) stratejileri, sistemin doğru veriyle otomatik optimize etmesiyle bütçenizi en verimli şekilde kullanmanızı sağlar. NKolay Medya olarak önce veri altyapınızı (GTM, GA4, CAPI) sağlayarak sistemin öğrenmesini hızlandırırız. Veriye dayanmayan her optimizasyon yanlıştır; doğru ölçüm ile akıllı sistem sizi rakibinizden öne çıkarır." },
      { heading: "Responsive Search Ads ve A/B Test Otomasyonu", body: "Google Ads artık sadece sabit başlıklar yerine yüzlerce başlık ve açıklama kombinasyonunu test eden Responsive Search Ads önceliğe sahip. Algoritma, kullanıcının arama terimine göre en uygun kombinasyonu otomatik seçer; bu da tıklama oranınızı önemli ölçüde artırır. NKolay Medya olarak reklam metinlerinizi düzenli olarak yeniler, A/B testleriyle en yüksek performanslı varyasyonları ölçeklendiririz. Yaratıcı yorgunluğunu önlemek için stratejik bir içerik planı izleriz." },
      { heading: "Kalite Puanı ve Açılış Sayfası Optimizasyonu", body: "Kalite puanı, reklam maliyetinizi ve sıralamanızı doğrudan etkiler. Yüksek kalite puanı, daha düşük maliyetle daha iyi pozisyon demektir. NKolay Medya olarak sadece reklam metinlerini değil, açılış sayfasını da optimize ederiz. Hızlı yüklenen, mobil uyumlu ve arama niyetiyle birebir örtüşen açılış sayfaları dönüşüm oranınızı ciddi artırır. Her reklam için özel açılış sayfası yapılandırarak kullanıcı deneyimini en üst düzeye çıkarırız." },
      { heading: "Görüntülü Ağ ve Performance Max Kampanyaları", body: "Google Ads'in Görüntülü Ağ (Display Network) ve Performance Max kampanyaları, birden fazla kanalı tek seferde kapsar. Performance Max, Google'ın tüm reklam alanlarını (Arama, Görüntülü, YouTube, Haritalar) otomatik optimize eder. NKolay Medya olarak Performance Max kampanyalarını doğru hedefleme ve kreatif setleriyle kurarız. Yapay zeka, en iyi kanalları ve kullanıcı segmentlerini otomatik olarak öğrenir; siz sadece yüksek kaliteli kreatifler ve doğru hedefleme sağlamakla görevlisiniz." },
      { heading: "Sürekli Optimizasyon ve Raporlama", body: "Google Ads bir kez kurulup unutulacak bir sistem değildir. Reklam programlarını dönemsel talep eğrilerine göre yeniden yapılandırır, düşük performanslı reklam gruplarını duraklatır ve bütçeyi en karlı kampanyalara kaydırırız. Aylık değil haftalık raporlarla hangi anahtar kelimenin, reklam grubunun ve kanalın en iyi getiriyi verdiğini gösteririz. Şeffaf raporlarla her kuruşun nereye dönüştüğünü net olarak görürsünüz." }
    ],
  },
  {
    id: "blog-12",
    title: "Meta Reklamları 2026: CAPI, Lookalike ve Akıllı Hedefleme ile Satışları Artırın",
    excerpt: "Meta reklamları 2026'da Pixel ve CAPI entegrasyonu, Lookalike kitleler ve retargeting ile en güçlü pazarlama kanallarından biridir. ROAS'ınızı yükseltmek için en güncel stratejiler.",
    author: "NKolay Medya",
    publishedAt: "2026-06-27",
    slug: "meta-reklamlari-2026-capi-lookalike-akilli-hedefleme",
    category: "Dijital Reklamcılık",
    tags: ['Meta Ads', 'Facebook', 'Instagram', '2026'],
    readTime: "9 dk",
    coverEmoji: "📱",
    coverImage: "/hero_n.512.webp",
    content: [
      { heading: "Meta Pixel ve CAPI: Doğru Veri ile Doğru Hedefleme", body: "Meta reklamlarının en kritik öğesi doğru veri toplamaktır. iOS güncellemeleri ve çerez kısıtlamaları nedeniyle yalnızca Pixel yeterli değildir. Sunucu Taraflı Conversions API (CAPI) kurulumu ile sunucudan sunucuya veri aktarımı sağlayarak dönüşüm raporlama doğruluğunu ciddi ölçüde artırırız. NKolay Medya olarak her kampanya için CAPI kurulumunu standart hizmet olarak sunarız. Doğru veri ile Meta algoritması en doğru kitleyi öğrenir ve reklam harcamanızın geri dönüşü maksimum olur." },
      { heading: "Lookalike Kitleler ve Akıllı Hedefleme", body: "Meta'nın en güçlü özelliği mevcut müşteri verinizden yeni kitleler üretmesidir. Satın alan müşterilerinizden Lookalike kitleler oluşturarak, markanıza en yakın potansiyel alıcıları buluruz. Yüzde 1, yüzde 3 ve yüzde 5 Lookalike'ları test ederek en yüksek dönüşümü veren segmenti ölçeklendiririz. NKolay Medya olarak en karlı müşteri segmentinizi seçerek, kaliteli Lookalike kitleler oluşturmanızı sağlarız. Böylece soğuk kitle reklamlarından kazançlı çıkarsınız." },
      { heading: "Retargeting ve Dinamik Ürün Reklamları", body: "Retargeting, sitenizi ziyaret edip henüz satın almamış sıcak kullanıcılara ulaştığı için dönüşüm oranı yüksektir. Terk edilmiş sepet hatırlatma, görüntülenen ürünler ve özel indirim teklifleri ile kullanıcıyı satın almaya teşvik ederiz. E-ticaret markaları için Meta Katalog entegrasyonu ile dinamik ürün reklamları kurar, her kullanıcıya ilgi alanına göre özel ürün gösteririz. Binlerce ürün için tek tek reklam yazmaya gerek kalmadan tüm envanteriniz otomatik kişiselleştirilir." },
      { heading: "Kreatif Stratejisi ve A/B Testi", body: "Sosyal medyada içerik kraldır; algoritma kullanıcıyı ilk saniyede yakalayan kreatifleri ödüllendirir. NKolay Medya olarak Reels videoları, carousel görselleri, kullanıcı testimonial'ları ve sosyal kanıt içerikleri üretiriz. A/B testleriyle en iyi performanslı kreatifleri otomatik ölçeklendiririz. İki haftada bir kreatif yenileyerek reklam sıklık skorunuzu düşük tutarız. Sonuç; daha düşük maliyetle daha yüksek dönüşüm oranı." },
      { heading: "Performans Raporlama ve ROAS Odaklı Yönetim", body: "Meta reklamlarını sadece tıklama ve beğeni değil, gerçek satış getirisi (ROAS) üzerinden yönetiriz. Haftalık raporlarla hangi kreatifin, hangi kitleye ve hangi üründe satış yaptığını gösteririz. Bütçeyi en karlı kampanyalara yönlendirir, düşük performanslı reklamları duraklatırız. ROAS odaklı yönetim ile her kuruşunuzun değerini en üst düzeye çıkarırız." }
    ],
  },
  {
    id: "blog-13",
    title: "SEO'da Teknik Altyapı: Core Web Vitals, Schema ve Site Hızı",
    excerpt: "SEO sadece içerik değildir; teknik altyapı arama sonuçlarında sıralamanızı belirler. Core Web Vitals, schema.org işaretleme ve site hızı optimizasyonu ile organik trafiğinizi artırın.",
    author: "NKolay Medya",
    publishedAt: "2026-07-03",
    slug: "seo-teknik-altyapi-core-web-vitals-schema-2026",
    category: "SEO & Teknik",
    tags: ['SEO', 'Core Web Vitals', 'Schema', 'Site Hızı'],
    readTime: "8 dk",
    coverEmoji: "🔍",
    coverImage: "/hero_n.512.webp",
    content: [
      { heading: "Core Web Vitals ve Kullanıcı Deneyimi", body: "Google 2024'te Core Web Vitals'ı resmi olarak arama sıralaması faktörü haline getirdi; Largest Contentful Paint (LCP), First Input Delay (FID) ve Cumulative Layout Shift (CLS) üç metriği ile kullanıcı deneyimini ölçer. NKolay Medya olarak Google PageSpeed Insights ve Search Console verilerini analiz eder, LCP'yi 2.5 saniyeden düşürmek için görsel optimizasyonu, önbellekleme ve CDN kurarız. FID'yi iyileştirmek için JavaScript yükünü azaltır, CLS için görsel ve reklam alanlarını önceden tanımlarız. Kullanıcı deneyimi artık bir SEO faktörüdür." },
      { heading: "Schema.org Yapısal Veri ve Zengin Sonuçlar", body: "Schema.org işaretleme, arama sonuçlarında zengin snippet'ler (yıldız derecelendirme, SSS, nasıl yapılır, ürün fiyatı) görünmesini sağlar. Bu zengin sonuçlar, tıklama oranınızı önemli ölçüde artırır. NKolay Medya olarak JSON-LD formatında schema işaretlemeleri ekler; SSS, makale, ürün, yemek tarifi ve yerel işletme schema'ları uygularız. Test ederek schema hatalarını giderir, arama sonuçlarında öne çıkmanızı sağlarız. Zengin sonuçlar, organik tıklama oranınızı artırır." },
      { heading: "Site Hızı ve Mobil Optimizasyonu", body: "Site hızı, 2026'da arama sonuçlarında en önemli teknik faktörlerden biridir. Mobil öncelikli dizinleme (mobile-first indexing) nedeniyle mobil hızı kritik öneme sahiptir. NKolay Medya olarak görsel sıkıştırma (WebP), lazy loading, CSS ve JavaScript minification ile sayfa yüklenme sürelerini önemli ölçüde düşürürüz. Mobil uyumluluk testi yapar, tıklanabilir elemanların boyutunu optimize ederiz. Mobil öncelikli tasarım ile hem kullanıcı deneyimini hem de arama sıralamasını yükseltiriz." },
      { heading: "XML Site Haritası ve Robots.txt Yönetimi", body: "Arama motorlarının sitenizi tamamen ve doğru indekslemesi için XML site haritası ve robots.txt düzgün yapılandırılmalıdır. NKolay Medya olarak otomatik güncellenen XML site haritası oluşturur, önemli sayfaları belirler ve yanlış indekslemeleri önleriz. Robots.txt ile arama motorlarının hangi sayfaları tarayacağını ve hangilerini indekslemeyeceğini kontrol ederiz. Sayfa yapısını ve URL yapısını SEO dostu hale getiririz. Teknik SEO temeli sağlam bir sıralama için ilk adımdır." },
      { heading: "Teknik SEO Denetimi ve Sürekli İyileştirme", body: "Teknik SEO bir kez yapılıp bitirilmez; sürekli izleme ve iyileştirme gerekir. NKolay Medya olarak aylık teknik SEO denetimleri yapar, kırık bağlantıları, yönlendirme hatalarını, çift içerikleri ve indeksleme sorunlarını tespit ederiz. Google Search Console ve Analytics verilerini derinlemesine analiz eder, arama sıralamalarında düşüş yaşayan sayfaları yeniden optimize ederiz. Sürekli iyileştirme ile organik trafiğinizi artırırız." }
    ],
  },
  {
    id: "blog-14",
    title: "E-Ticaret Başarısı: Dönüşüm Optimizasyonu ve Müşteri Sadakati Stratejileri",
    excerpt: "E-ticarette başarı, ilk satıştan sonra başlar. Dönüşüm oranını artırmak ve müşteri sadakati oluşturmak için kanıtlanmış stratejiler ve uygulamalar.",
    author: "NKolay Medya",
    publishedAt: "2026-07-10",
    slug: "e-ticaret-basarisi-donusum-optimizasyonu-2026",
    category: "E-Ticaret",
    tags: ['E-Ticaret', 'Dönüşüm', 'CRO', 'Müşteri Sadakati'],
    readTime: "7 dk",
    coverEmoji: "🛒",
    coverImage: "/hero_n.512.webp",
    content: [
      { heading: "Dönüşüm Hunisi ve Kullanıcı Deneyimi", body: "E-ticaret dönüşüm hunisi, ziyaretçinin ilk temasından satın almaya kadar geçen süreci kapsar. NKolay Medya olarak her adımı optimize eder; sayfa yüklenme hızını artırır, ürün arama ve filtreleme deneyimini iyileştiririz. Sepeti terk etmeyi önlemek için çoklu ödeme seçenekleri, güven badge'leri ve müşteri yorumları ekleriz. A/B testleriyle ödeme sürecini sürekleştiririz. Sonuç; daha düşük terk oranı ve daha yüksek ortalama sipariş tutarı." },
      { heading: "Müşteri Sadakati ve Tekrar Satış Stratejileri", body: "E-ticarette kazanç, ilk satıştan sonra başlar. Müşteri yaşam boyu değerini (CLV) yükseltmek için sadakat programları, özel indirimler ve kişiselleştirilmiş iletişim kurarız. NKolay Medya olarak e-posta pazarlaması otomasyonları ile müşteri yolculuğunun her adımında otomatik ve doğru mesajlar göndeririz. İade oranlarını düşürmek için açıklayıcı ürün bilgileri ve kolay iade süreci sunarız. Müşteri sadakati ile markanızı bir alışveriş deneyimine dönüştürürüz." },
      { heading: "Pazar Yeri Optimizasyonu ve Reklamları", body: "Türkiye'de e-ticaretin büyük çoğunluğu Trendyol, Hepsiburada ve gibi pazar yerlerinde gerçekleşir. NKolay Medya olarak ürün başlıklarını, açıklamalarını ve anahtar kelimelerini optimize ederek arama sonuçlarında öne çıkmanızı sağlarız. Pazar yeri reklamları ile ürün görünürlüğünü artırır, dönüşüm oranınızı yükseltiriz. Fiyat takibi ve rakip analizi ile rekabetçi fiyatlandırma stratejisi sunarız. Müşteri yorumlarını olumlu yöneterek marka güveninizi artırırız." },
      { heading: "Analitik ve Veri Odaklı Büyüme", body: "E-ticaret kararları varsayımla değil, veriyle verilmelidir. NKolay Medya olarak Google Analytics 4, pazar yeri analitikleri ve özel raporlarla satış, trafik ve dönüşüm verilerinizi derinlemesine analiz ederiz. Hangi kanaldan gelen müşterinin en yüksek değeri sağladığını, hangi ürünün en çok satıldığını ve hangi reklamın en iyi getiriyi verdiğini gösteririz. Veriye dayalı strateji değişiklikleriyle bütçenizi en karlı kanallara yönlendiririz." },
      { heading: "Mobil E-Ticaret ve UX Tasarımı", body: "Türkiye'de internet trafiğinin büyük çoğunluğu mobil cihazlardan geldiği için, mobil e-ticaret deneyimi kritik öneme sahiptir. NKolay Medya olarak mobil öncelikli e-ticaret siteleri tasarlar, dokunmatik hedefleri optimize eder ve hızlı ödeme süreleri sunarız. Mobilde kullanıcı deneyimi kötüyse, müşterinin yarısı satın almadan ayrılır. Mobil öncelikli tasarım ile dönüşüm oranınızı önemli ölçüde artırırız." }
    ],
  },
  {
    id: "blog-15",
    title: "Sosyal Medya Stratejisi 2026: İçerik, Etkileşim ve Algoritma",
    excerpt: "Sosyal medya algoritmaları 2026'da içerik kalitesini ve etkileşimi ödüllendiriyor. Doğru içerik stratejisi ve platform optimizasyonu ile marka bilinirliğinizi artırın.",
    author: "NKolay Medya",
    publishedAt: "2026-07-12",
    slug: "sosyal-medya-stratejisi-2026-icerik-etkilesim",
    category: "Sosyal Medya",
    tags: ['Sosyal Medya', 'İçerik', 'Algoritma', '2026'],
    readTime: "6 dk",
    coverEmoji: "📲",
    coverImage: "/hero_n.512.webp",
    content: [
      { heading: "Algoritma Odaklı İçerik Stratejisi", body: "2026'da sosyal medya algoritmaları, izleyiciyi ilk saniyede yakalayan, etkileşim yaratan ve değer sunan içerikleri ödüllendirir. NKolay Medya olarak her platform için özel içerik stratejisi geliştiririz: Instagram'da estetik ve hikaye odaklı, TikTok'ta viral ve kısa formatlı, LinkedIn'de profesyonel ve B2B odaklı içerikler üretiriz. İçerik takvimimizi aylık planlar, marka sesinizi tutarlı kılarız. Algoritma öğrenme sürecini hızlandırmak için doğru hashtag'ler ve zamanlamalar kullanırız." },
      { heading: "Video İçerikleri ve Short Form Trendleri", body: "Short form video içerikleri (Reels, Shorts, TikTok), 2026'da sosyal medyada en yüksek etkileşim oranına sahiptir. NKolay Medya olarak 15-60 saniyelik video içerikleri üretir, izleyiciyi ilk saniyede yakalayan güçlü açılışlar ve çağrı butonlarıyla dönüşüm odaklı içerikler hazırlarız. Ürün tanıtımından arka plan hikayelerine, müşteri testimonial'larından eğitici içeriklere kadar her formatı özgün bir anlatımla üretiriz. Video içerikleri ile marka bilinirliğinizi önemli ölçüde artırırız." },
      { heading: "Sosyal Medya Reklamları ve Hedefleme", body: "Organik erişimin azaldığı günümüzde reklamlar olmadan markanızın sadece takipçilerinize ulaşması sınırlıdır. NKolay Medya olarak Facebook, Instagram, LinkedIn ve TikTok reklam kampanyaları yürütür, marka bilinirliği, takipçi artışı ve dönüşüm odaklı hedefler belirleriz. A/B testleriyle en iyi kreatifleri ve kitleleri bulur, bütçeyi en karlı kampanyalara yönlendiririz. Performansı haftalık raporlarla ölçeriz; izlenme, beğeni, paylaşım ve web sitesi trafiği gibi tüm metrikleri detaylandırırız." },
      { heading: "Topluluk Yönetimi ve Müşteri Deneyimi", body: "Sosyal medyada topluluk yönetimi, markanızın insanlarla ilişki kurma biçimidir. NKolay Medya olarak yorumlara, mesajlara ve sorulara zamanında ve doğal bir dille cevap veririz; müşteri memnuniyetini yükseltiriz. Olumsuz yorumları kriz dönüştürme stratejisiyla yönetir, sorunları çözüme yönlendiririz. Etkileşim odaklı içerikler (anket, soru-cevap, canlı yayın) ile takipçilerinizle güçlü bir bağ kurarız. Müşteri deneyimini sosyal medyada da koruruz." },
      { heading: "Raporlama ve İçerik Takvim Optimizasyonu", body: "Başarısızlıkların nedeni genellikle strateji eksikliğidir. NKolay Medya olarak her ay detaylı performans raporları sunarız; takipçi büyümesi, etkileşim oranı, erişim ve dönüşüm verilerini analiz ederiz. En iyi performans gösteren içerik türlerini, en uygun saatleri ve en etkili mesajları tespit ederiz. İçerik takvimimizi aylık olarak gönderir, onayınızdan sonra paylaşıma geçeriz. Esnek ve şeffaf bir süreçle her aşamada sizinle iletişim kurarız." }
    ],
  },
  {
    id: "blog-16",
    title: "Dijital Dönüşüm 2026: İşletmeler İçin Teknoloji, Otomasyon ve Veri Odaklı Büyüme",
    excerpt: "Dijital dönüşüm, işletmelerin teknoloji, otomasyon ve veri kullanarak nasıl büyüdüğünü gösteriyor. 2026'da rekabetçi kalmak için uygulanması gereken stratejiler.",
    author: "NKolay Medya",
    publishedAt: "2026-07-19",
    slug: "dijital-donusum-2026-teknoloji-otomasyon-veri",
    category: "Dijital Dönüşüm",
    tags: ['Dijital Dönüşüm', 'Otomasyon', 'Veri', '2026'],
    readTime: "8 dk",
    coverEmoji: "🚀",
    coverImage: "/hero_n.512.webp",
    content: [
      { heading: "Dijital Dönüşüm Nedir ve Neden Önemli?", body: "Dijital dönüşüm, işletmenizin tüm süreçlerini dijital teknolojilerle yenilemesi ve optimize etmesi demektir. Sadece yazılım yüklemek değil, tüm organizasyonu geleceğe uyarlamaktır. 2026'da dijital dönüşüm, küçük işletmeler için bile büyük fark yaratır; otomasyon ve verimlilik artışı bütçeyi destekler. NKolay Medya olarak işletmenizin mevcut durumunu analiz eder, dijital olmayan süreçleri belirler ve hedefler doğrultusunda dönüşüm yol haritası çıkarırız." },
      { heading: "İş Süreçleri Otomasyonu ve Verimlilik", body: "İşletmelerin zamanını en çok alan şey tekrarlayan, manuel ve hataya açık süreçlerdir. RPA ve iş akışı otomasyonu ile veri girişi, fatura işleme, e-posta yönetimi ve raporlama süreçlerini otomatikleştiririz. NKolay Medya olarak Zapier ve Make araçlarıyla farklı yazılımlarınızı birbirine bağlar, kod yazmadan yapılandırılabilir otomasyonlar sunarız. Otomasyon ile ekibiniz daha stratejik işlere odaklanır, tekrarlayan görevlerden kurtulur." },
      { heading: "Veri Odaklı Karar Verme ve Analitik", body: "İyi bir strateji doğru veriye dayanır. NKolay Medya olarak işletmenizin mevcut verilerini toplar, raporlar ve öngörülebilir modellemeler yaparız. Müşteri verisi, satış verisi ve işletme performansı üzerinden anlamlı içgörüler çıkarırız. Görsel paneller (dashboard) ile tüm işletme performansını tek ekranda izleyebilirsiniz. Veri odaklı kültür kurmanızı destekleriz; her kararınızı veriyle desteklersiniz." },
      { heading: "Teknoloji Yatırımı ve Dijital Altyapı", body: "Teknoloji yatırımlarınız doğru planlanmazsa büyük kayıplara yol açabilir. NKolay Medya olarak mevcut sisteminizi ve ihtiyaçlarınızı analiz ederek en uygun teknoloji yatırımlarını belirleriz. Bulut geçişi, yazılım entegrasyonu ve özel sistem geliştirme konularında danışmanlık sunarız. Teknoloji bütçenizi en verimli şekilde dağıtmanız için roadmap hazırlarız. Risk analizi ve fizibilite çalışmaları ile yatırım kararlarınızı güçlendiririz." },
      { heading: "Değişim Yönetimi ve Ekip Dönüşümü", body: "Dijital dönüşüm sadece teknoloji değişikliği değildir, ekip kültürünü de etkiler. NKolay Medya olarak değişim yönetimi süreçleriyle ekibinizin dijital dönüşüme uyum sağlamasını destekleriz. Eğitimler, atölye çalışmaları ve iletişim planları ile ekibiniz yeni süreçlere ve sistemlere hazırlanır. Dönüşüm sürecini yönetir, olası dirençleri bertaraf ederiz. Değişim yönetimi, dijital dönüşümünüzün başarısını belirleyen en önemli faktördür." }
    ],
  },
];

export const getBlogPost = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);
