# Mobile-Responsive Web Page Design & Development Specification

**Project:** NKolay Medya  
**Date:** 2026-07-20  
**Scope:** Strategy Report, Technology Stack, Blog, and Services sections  
**Target Devices:** Mobile (320px+), Tablet (768px+), Desktop (1024px+)

---

## 1. Strategy Report Section

### 1.1 Purpose
Present the free strategy report offer with an engaging, conversion-focused animation optimized for mobile devices.

### 1.2 Design Requirements
- **Layout:** Full-width hero-style section with centered content on mobile, split layout on desktop
- **Animation:** Scroll-triggered entrance animation using framer-motion
  - Mobile: Fade-in + slide-up (0.6s ease-out)
  - Desktop: Staggered reveal with scale effect
- **Visual Elements:**
  - Animated gradient background (subtle, performance-optimized)
  - Glassmorphism card containing the report offer
  - Pulsing CTA button with shadow glow
- **Typography:**
  - Headline: 2.5rem mobile / 3.5rem desktop, font-weight 800
  - Body: 1rem mobile / 1.125rem desktop, line-height 1.6
- **Color Palette:**
  - Primary: #C41E2A (NKolay red)
  - Secondary: #FCA5A5 (light rose)
  - Background: #FFF1F2 to #FCA5A5 gradient

### 1.3 Technical Implementation
- Component: StrategyReport.tsx
- Animation: motion.div with whileInView
- Performance: Use transform/opacity only, avoid layout thrashing
- Mobile Optimization:
  - Reduce animation complexity on low-end devices
  - Use will-change sparingly
  - Implement useReducedMotion hook

### 1.4 Mobile-Specific Considerations
- Touch-friendly CTA button (minimum 48x48px)
- Simplified animation on mobile (no parallax)
- Font scaling using clamp() for fluid typography
- Safe area insets for notched devices

---

## 2. Technology Stack Section

### 2.1 Purpose
Showcase technologies used in the project with a continuous horizontal scrolling marquee effect.

### 2.2 Design Requirements
- **Layout:** Full-width section with category labels and infinite scrolling rows
- **Marquee Animation:**
  - Seamless infinite scroll using CSS keyframes
  - Speed: 30s linear infinite (desktop), 20s (mobile)
  - Pause on hover (desktop only)
  - Masked edges for smooth fade-in/out
- **Visual Elements:**
  - Category labels: "Ön Yüz", "Arka Yüz", "Platform"
  - Tech pills: Rounded-full, white background, subtle border
  - Hover effect: Scale up + shadow glow
- **Typography:**
  - Category label: 11px, uppercase, tracking-widest, gray-400
  - Tech name: 14px, font-semibold, gray-700

### 2.3 Technical Implementation
- Component: TechStack.tsx
- Animation: CSS keyframes + inline style animation property
- Structure:
  - CategoryLabel
  - TechMarqueeRow (duplicated items for seamless loop)
    - TechPill (with hover tooltip)
  - CSS mask-image for edge fading

### 2.4 Mobile-Specific Considerations
- Touch swipe support for manual scrolling
- Faster animation speed on mobile for better UX
- Larger touch targets for pills (min 44px height)
- Disable hover effects on touch devices

---

## 3. Blog Section

### 3.1 Purpose
Expand the blog section to be content-rich and fill the page effectively with comprehensive layout.

### 3.2 Design Requirements
- **Layout:**
  - Mobile: Single column, full-width cards
  - Tablet: 2-column grid
  - Desktop: 3-column grid with featured post
- **Card Design:**
  - Image thumbnail (16:9 aspect ratio)
  - Category badge (pill shape, primary color)
  - Title (2 lines max with line-clamp)
  - Excerpt (3 lines max)
  - Read time + date metadata
  - Hover: Subtle lift + shadow increase
- **Featured Post:**
  - Larger card spanning full width on mobile, 2 cols on desktop
  - Background image with overlay gradient
  - White text for contrast

### 3.3 Technical Implementation
- Component: LatestPosts.tsx
- Data: src/data.ts (posts array)
- Animation: Staggered fade-in on scroll
- Image Handling:
  - Lazy loading with blur placeholder
  - Responsive srcset for different breakpoints
  - Fallback gradient if image fails

### 3.4 Content Requirements
- Minimum 6 blog posts displayed
- Categories: SEO, Performance, Design, Development
- Each card includes:
  - Featured image
  - Category tag
  - Title (max 60 chars)
  - Excerpt (max 150 chars)
  - Author avatar + name
  - Published date
  - Read time (e.g., "5 dk okuma")

---

## 4. Services Section

### 4.1 Purpose
Provide detailed, individual content breakdowns for every service offered.

### 4.2 Design Requirements
- **Layout:**
  - Mobile: Accordion-style expandable cards
  - Tablet: 2-column grid
  - Desktop: 3-column grid with hover reveal
- **Service Card Design:**
  - Icon (64x64px, colored background circle)
  - Service title (bold, 1.25rem)
  - Short description (2 lines)
  - Expandable detailed content (accordion on mobile, always visible on desktop)
  - Feature list with checkmarks
  - CTA link to service detail page
- **Color Coding:**
  - Each service has a unique accent color
  - Icon background uses color at 15% opacity
  - Border accent on hover

### 4.3 Technical Implementation
- Component: ServicesPreview.tsx
- Data: src/data.ts (services array)
- Structure:
  - ServiceCard (expandable on mobile)
    - ServiceIcon
    - ServiceTitle
    - ServiceDescription
    - ServiceFeatures (list)
    - ServiceLink
- Animation:
  - Mobile: Accordion expand/collapse (max-height transition)
  - Desktop: Hover reveal with fade-in

### 4.4 Service Content Structure
interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
  slug: string;
}

### 4.5 Mobile-Specific Considerations
- Accordion pattern for detailed content
- Smooth expand/collapse animation (300ms ease)
- Touch-friendly expand button (min 48px height)
- Clear visual indicator for expandable content (chevron icon)

---

## 5. Global Mobile-Responsive Requirements

### 5.1 Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### 5.2 Performance Targets
- First Contentful Paint: < 1.5s on mobile
- Time to Interactive: < 3s on mobile
- Cumulative Layout Shift: < 0.1
- Animation frame rate: 60fps

### 5.3 Accessibility
- All animations respect prefers-reduced-motion
- Touch targets minimum 48x48px
- Color contrast ratio: 4.5:1 minimum
- Semantic HTML structure
- ARIA labels for interactive elements

### 5.4 Image Optimization
- Use WebP format with fallbacks
- Lazy loading for below-fold images
- Responsive images with srcset and sizes
- Blur placeholder technique

### 5.5 CSS Architecture
- Mobile-first approach
- Tailwind CSS utilities
- Custom CSS for complex animations
- CSS variables for theming
- No dark theme (light theme only)

---

## 6. Implementation Priority

### Phase 1 (High Priority)
1. Strategy Report Section - Mobile animation
2. Technology Stack Section - Marquee fix for desktop

### Phase 2 (Medium Priority)
3. Services Section - Accordion mobile pattern
4. Blog Section - Content expansion

### Phase 3 (Polish)
5. Performance optimizations
6. Accessibility audit
7. Cross-browser testing

---

## 7. Testing Checklist

### Mobile Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] Samsung Galaxy S21 (360px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)

### Desktop Testing
- [ ] 1366x768 (laptop)
- [ ] 1920x1080 (full HD)
- [ ] 2560x1440 (2K)

### Functionality
- [ ] All animations smooth at 60fps
- [ ] Touch interactions responsive
- [ ] No horizontal overflow
- [ ] Images load correctly
- [ ] Forms submit successfully
- [ ] Navigation works on all breakpoints

---

## 8. File Structure

src/
├── components/
│   ├── StrategyReport.tsx (new)
│   ├── TechStack.tsx (update)
│   ├── LatestPosts.tsx (update)
│   ├── ServicesPreview.tsx (update)
│   └── ...
├── data/
│   └── index.ts (update with services/blog data)
├── lib/
│   └── useReducedMotion.ts (existing)
├── index.css (update with new animations)
└── ...

---

## 9. Dependencies

- framer-motion - Animations
- lucide-react - Icons
- motion/react - Alternative animation library (already installed)
- react-intersection-observer - Scroll-based animations (optional)

---

## 10. Notes

- No dark theme implementation
- Light theme only with NKolay brand colors
- Turkish language content
- Performance-first approach
- Mobile-optimized animations
- Graceful degradation for older browsers
