# NKolay Medya — Stratejik SEO Yol Haritası

> Amaç: Mevcut tasarım, UX ve görsel bütünlüğü bozmadan, teknik altyapıyı, içerik stratejisini ve site hızını optimize ederek arama motoru performansını maksimum seviyeye çıkarmak.

---

## 1. Mevcut Durum Analizi (Baseline)

### Güçlü Yönler
- Temiz URL yapısı (`/hizmet/:id`, `/referanslar`, `/iletisim`)
- Türkçe `lang="tr"` ve tutarlı başlık tanımları
- Zengin hizmet veri seti (`SERVICES_DATA`) ve testimonial yapısı
- Responsive grid sistemi ve mobil uyumlu arayüz

### Kritik Eksikler
| Alan | Durum |
|------|-------|
| **Meta Description** | `index.html`’de yok; sadece title var |
| **Canonical URL** | Yok |
| **Open Graph / Twitter Cards** | Yok |
| **Structured Data (Schema.org)** | Yok |
| **Sitemap.xml** | Yok |
| **Robots.txt** | Yok |
| **Image Alt Text** | Dinamik alt yok; `img` etiketleri hardcoded |
| **Lazy Loading** | Hero dışında eksik |
| **Core Web Vitals** | Ölçüm yok; optimize edilmemiş olabilir |
| **Internal Linking** | İç linkleme stratejisi yok |
| **Breadcrumbs** | Yok |
| **Local SEO (NAP)** | Footer’da var ancak schema ile zayıf |
| **Analytics** | Yok |

---

## 2. Teknik SEO — Adım Adım Uygulama

### 2.1. `index.html` Temel Meta Ekleme

```html
<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NKolay Medya | Performans Odaklı Sosyal Medya Ajansı</title>
  <meta name="description" content="İşletmenizi büyütmek için performans odaklı reklam, yaratıcı video prodüksiyonu ve stratejik marka danışmanlığı. NKolay Medya ile dijitalde zirveye ulaşın." />
  <meta name="keywords" content="sosyal medya ajansı, dijital pazarlama, Google Ads, Meta reklam, SEO, video prodüksiyonu, marka danışmanlığı, İstanbul" />
  <meta name="author" content="NKolay Medya Teknolojileri A.Ş." />
  <link rel="canonical" href="https://nkolaymedya.com/" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nkolaymedya.com/" />
  <meta property="og:title" content="NKolay Medya | Performans Odaklı Sosyal Medya Ajansı" />
  <meta property="og:description" content="İşletmenizi büyütmek için performans odaklı reklam, yaratıcı video prodüksiyonu ve stratejik marka danışmanlığı." />
  <meta property="og:image" content="https://nkolaymedya.com/og-image.jpg" />
  <meta property="og:locale" content="tr_TR" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="NKolay Medya | Performans Odaklı Sosyal Medya Ajansı" />
  <meta name="twitter:description" content="İşletmenizi büyütmek için performans odaklı reklam, yaratıcı video prodüksiyonu ve stratejik marka danışmanlığı." />
  <meta name="twitter:image" content="https://nkolaymedya.com/og-image.jpg" />
</head>
```

**Not:** `og-image.jpg` ve `twitter:image` için 1200×1200 px, < 300 KB bir görsel ekleyin.

### 2.2. Dinamik SEO Yönetimi Geliştirme (`src/lib/seo.ts`)

Mevcut `useSeo` hook’u genişlet:

```typescript
export function useSeo(title: string, description?: string, path?: string) {
  useEffect(() => {
    const baseUrl = "https://nkolaymedya.com";
    const canonical = path ? `${baseUrl}${path}` : baseUrl;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    setMeta('property', 'og:title', fullTitle);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('property', 'og:url', canonical);
    setLink('canonical', canonical);

    return () => {
      document.title = "NKolay Medya";
    };
  }, [title, description, path]);

  function setMeta(attr: 'name' | 'property', key: string, value: string) {
    let tag = document.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attr, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', value);
  }

  function setLink(rel: string, href: string) {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
```

**Kullanım örneği:**
```typescript
useSeo(
  service.title,
  service.description,
  ROUTES.service(service.id)
);
```

### 2.3. Schema.org Structured Data

`src/lib/schema.ts` oluştur:

```typescript
import { COMPANY } from "./constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NKolay Medya",
  "legalName": "NKolay Medya Teknolojileri A.Ş.",
  "url": "https://nkolaymedya.com",
  "email": "mailto:info@nkolaymedya.com",
  "telephone": "+905464773815",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zafer, Adile Naşit Blv. No:30",
    "addressLocality": "Esenyurt",
    "addressRegion": "İstanbul",
    "postalCode": "34513",
    "addressCountry": "TR"
  },
  "sameAs": [
    "https://wa.me/905464773815"
  ]
};

export const serviceSchema = (service: {
  title: string;
  description: string;
  badge?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "NKolay Medya"
  },
  "areaServed": "TR"
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": item.name,
    "item": item.url
  }))
});
```

**Uygulama:**
- `src/App.tsx` veya `src/main.tsx`’de `<script type="application/ld+json">` ile inject et
- Her sayfada ilgili schema tipini dinamik olarak ekle

### 2.4. Sitemap.xml ve Robots.txt

**`public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nkolaymedya.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nkolaymedya.com/hizmetler</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Her hizmet detayı -->
  <url>
    <loc>https://nkolaymedya.com/hizmet/google-ads</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... diğer hizmetler ... -->
  <url>
    <loc>https://nkolaymedya.com/referanslar</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://nkolaymedya.com/iletisim</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://nkolaymedya.com/kvkk</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

**`public/robots.txt`:**
```
User-agent: *
Allow: /
Disallow: /iletisim
Disallow: /kvkk
Disallow: /terms
Disallow: /privacy

Sitemap: https://nkolaymedya.com/sitemap.xml
```

### 2.5. Image Optimization

**Mevcut sorun:**
- `References.tsx` görselleri: `loading="lazy"` eksik
- `Logo.tsx`: alt text var, ancak optimize edilmemiş PNG
- `hero_n.webp`: var, ancak `width/height` eksik (CLS riski)

**Çözümler:**

1. **Tüm görsellere `loading="lazy"` ekle** (Hero dışı)
2. **`width` ve `height` attribute’larını ekle** (CLS önleme)
3. **Responsive `srcset` kullan** (farklı cihaz boyutları için)
4. **WebP formatını standardize et** (zaten var, genişlet)
5. **Alt text standardizasyonu:**

```typescript
// Her hizmet ikonu için otomatik alt text
<ServiceIcon 
  name={service.iconName} 
  className="..."
  aria-hidden="true"
/>
// Gerçek içerik görselleri için:
<img 
  src={item.avatarUrl} 
  alt={`${item.name} - ${item.company}`} 
  loading="lazy"
  width={150}
  height={150}
/>
```

### 2.6. Internal Linking Strategy

**Mevcut sorun:** Sayfalar arası bağlantılar zayıf.

**Çözümler:**

1. **Service Detail sayfasında “İlgili Hizmetler” zaten var** — koru ve genişlet
2. **Home sayfasına Services bölümü ekle** (zaten var, optimize et)
3. **Footer’da ana sayfalara yönlendiren güçlü linkler ekle**
4. **Breadcrumb navigation ekle** (ServiceDetail, LegalPage, ContactForm)

```typescript
// src/components/Breadcrumbs.tsx
export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center">
            {idx > 0 && <span className="mx-2">/</span>}
            <a href={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

### 2.7. Local SEO (Yerel Arama Optimizasyonu)

**Mevcut durum:** Footer’da adres var, ancak Google My Business ile entegre değil.

**Çözümler:**

1. **LocalBusiness Schema ekle:**
```typescript
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NKolay Medya Teknolojileri A.Ş.",
  "image": "https://nkolaymedya.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zafer, Adile Naşit Blv. No:30",
    "addressLocality": "Esenyurt",
    "addressRegion": "İstanbul",
    "postalCode": "34513",
    "addressCountry": "TR"
  },
  "telephone": "+905464773815",
  "email": "info@nkolaymedya.com",
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "₺₺₺"
};
```

2. **Google Business Profile** oluştur ve doğrula
3. **NAP tutarlılığı:** Tüm platformlarda (Google, Instagram, LinkedIn) aynı ad, telefon, adres bilgisi kullan
4. **Yerel anahtar kelimeler:** “İstanbul sosyal medya ajansı”, “Esenyurt dijital pazarlama” gibi long-tail keyword’ler ekle

---

## 3. İçerik Stratejisi

### 3.1. Hizmet Sayfaları İçin Blog Bölümü

**Öneri:** `/blog` veya `/makaleler` rotası ekle

```typescript
// src/data.ts
export const BLOG_POSTS = [
  {
    id: "google-ads-roi-arttirma",
    title: "Google Ads ROI Oranını Artırmanın 7 Kanıtlanmış Yöntemi",
    excerpt: "2026 yılında Google Ads kampanyalarınızı nasıl daha verimli hale getireceğinizi öğrenin...",
    content: "...",
    publishedAt: "2026-01-15",
    category: "Reklam",
    readTime: "8 dk",
    image: "/blog/google-ads-roi.jpg"
  }
  // ... diğer blog yazıları
];
```

**Faydaları:**
- Düzenli içerik = düzenli crawl
- Long-tail keyword’ler için fırsat
- Internal linking imkanı
- Backlink potansiyeli

### 3.2. Testimonial İçeriği Zenginleştirme

**Mevcut:** Sadece metin testimonial’lar

**Geliştirme:**
- Video testimonial’lar ekle (müşteri görseli + ses)
- Case study formatı: “Problem → Çözüm → Sonuç”
- Ölçülebilir metrikler vurgusu (zaten var, daha belirgin yap)

### 3.3. Hizmet Sayfası İçerik Optimizasyonu

**Mevcut:** Her hizmet detay sayfasında `features`, `benefits`, `detailedContent` var

**Geliştirme:**
- Her sayfaya **FAQ bölümü** ekle (Schema.org FAQPage)
- **SSS (Sıkça Sorulan Sorular)** bölümü
- **Karşılaştırma içeriği**: “Google Ads vs Meta Ads” gibi karşılaştırma yazıları

```typescript
// FAQ Schema örneği
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
```

---

## 4. Site Hızı ve Core Web Vitals

### 4.1. Mevcut Durum Tahmini

| Metrik | Hedef |
|--------|-------|
| **LCP (Largest Contentful Paint)** | < 2.5s |
| **FID (First Input Delay)** | < 100ms |
| **CLS (Cumulative Layout Shift)** | < 0.1 |

### 4.2. Optimizasyon Stratejisi

**A. Image Optimization**
- Tüm görselleri WebP/AVIF’e çevir (zaten WebP var, AVIF ekle)
- Responsive `srcset` kullan:
```html
<img
  src="hero_n.webp"
  srcSet="hero_n-320w.webp 320w, hero_n-640w.webp 640w, hero_n-1024w.webp 1024w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="NKolay Medya"
  loading="eager"
  width="512"
  height="512"
/>
```

**B. Code Splitting (Zaten var)**
- `React.lazy()` kullanılıyor — koru
- Route-based code splitting devam etsin

**C. Font Optimization**
```css
/* index.css */
@font-face {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 500 700;
  font-display: swap;
  src: url("/fonts/plus-jakarta-sans.woff2") format("woff2");
}
```
- `font-display: swap` ekle (zaten Google Fonts’ta var, kontrol et)
- Font preload ekle:
```html
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=..." />
```

**D. Server Response Time**
- Vite build + Express static: production’da optimize
- CDN kullan (Cloudflare, Vercel, Netlify)
- Gzip/Brotli compression aktif olmalı

**E. CSS Optimization**
- Tailwind CSS tree-shaking zaten var
- Unused CSS’i temizle (PurgeCSS aktif mi kontrol et)

### 4.3. Vite Build Optimizasyonu

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['motion/react'],
          'router-vendor': ['react-router-dom']
        }
      }
    },
    sourcemap: false, // production’da kapat
    minify: 'terser'
  }
});
```

---

## 5. Responsive ve Mobil SEO

### 5.1. Mevcut Durum
- Viewport meta tag var ✅
- Responsive grid’ler var ✅
- Mobil menü var ✅

### 5.2. İyileştirmeler

1. **Touch Target Boyutları**
   - Tüm butonlar ≥ 44×44px (WCAG 2.1 AA)
   - Navbar mobil butonları kontrol et

2. **Font Boyutları**
   - Minimum 16px body text (mobilde okunabilirlik)
   - `text-[13px]` kullanımını azalt, `text-sm` (14px) kullan

3. **Horizontal Scroll Önleme**
   - `overflow-x-hidden` root’da var ✅
   - `max-w-7xl` + responsive padding kullanılıyor ✅

---

## 6. Backlink ve Off-Page SEO

### 6.1. Mevcut Durum
- Hiç backlink stratejisi yok
- Sosyal medya bağlantısı sadece WhatsApp

### 6.2. Aksiyon Planı

1. **Google Business Profile** oluştur
2. **Yerel direktörlere kayıt:** Firma’yı Yelp, Yellow Pages, Türkiye direktörlerine ekle
3. **Sosyal medya profilleri:** Instagram, LinkedIn, YouTube hesaplarını site’e ekle (`sameAs` schema)
4. **Guest posting:** Dijital pazarlama bloglarına katkı sağla
5. **Case study’ler:** Müşteri başarı hikayelerini detaylı PDF/HTML olarak yayınla
6. **Backlink takibi:** Ahrefs, Semrush veya Moz ile takip et

---

## 7. Monitoring ve Analytics

### 7.1. Gerekli Araçlar

1. **Google Search Console** (ücretsiz)
   - Index durumu
   - Search performansı
   - Core Web Vitals
   - Mobile usability

2. **Google Analytics 4** (ücretsiz)
   - Kullanıcı davranışı
   - Trafik kaynakları
   - Dönüşüm takibi

3. **PageSpeed Insights** (ücretsiz)
   - Core Web Vitals ölçümü
   - Optimizasyon önerileri

4. **Screaming Frog** (ücretsiz tier var)
   - Teknik SEO audit
   - Broken link tespiti
   - Meta tag analizi

### 7.2. Kurulum

```typescript
// src/main.tsx veya index.html
// Google Analytics 4
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 8. Uygulama Öncelik Sırası

| Öncelik | Görev | Süre | Etki |
|---------|-------|------|------|
| **P1** | Meta tags + Open Graph + Canonical | 2-3 saat | Yüksek |
| **P1** | Schema.org structured data | 3-4 saat | Yüksek |
| **P1** | Sitemap.xml + Robots.txt | 1 saat | Yüksek |
| **P2** | Image optimization (alt, lazy, srcset) | 4-6 saat | Orta-Yüksek |
| **P2** | Google Search Console + Analytics | 1-2 saat | Orta |
| **P3** | Blog bölümü ekleme | 8-12 saat | Orta-Uzun vadeli |
| **P3** | FAQ Schema + içerik zenginleştirme | 4-6 saat | Orta |
| **P3** | Local SEO (GBP, NAP) | 2-3 saat | Orta |
| **P4** | Backlink stratejisi | Sürekli | Uzun vadeli |
| **P4** | Core Web Vitals optimizasyonu | 6-8 saat | Yüksek |

---

## 9. Tasarım Bütünlüğünü Koruma

Tüm SEO değişiklikleri **içerik ve meta veri katmanında** kalacak. Görsel tasarım, animasyonlar, kullanıcı deneyimi ve marka dili **asla değişmeyecek**.

- ✅ Renk paleti, tipografi, spacing dokunulmayacak
- ✅ Card’lar, butonlar, navbar aynı kalacak
- ✅ Animasyonlar ve geçişler korunacak
- ✅ Responsive davranış bozulmayacak
- ✅ Sadece `<head>` meta verileri, schema.org JSON-LD ve içerik metinleri optimize edilecek

---

## 10. Sonuç ve Beklenen Faydalar

| Metrik | Mevcut | Hedef (3 ay) |
|--------|--------|--------------|
| **Organik Trafik** | ~0 | +300% |
| **Index Sayfası** | ~10 | ~50 |
| **Core Web Vitals (Good)** | ~%0 | %90+ |
| **Mobile-Friendly Test** | Bilinmiyor | Pass |
| **Structured Data Errors** | 0 | 0 |

**Önemli Not:** SEO 3-6 ay süren bir süreçtir. Teknik altyapıyı kurduktan sonra içerik kalitesi ve backlink çalışmalarıyla birlikte sonuçlar görülecektir.

---

*Bu roadmap’in uygulanması için herhangi bir adımda yardım alabilirsiniz.*
