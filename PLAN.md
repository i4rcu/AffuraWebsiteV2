# Affura Plast — Website Plan

Source of truth: the manager's ChatGPT "Website Generator" conversation (share/6a4e34af) + provided photos + existing affuraplast.com.

## 1. Company facts

- **Affura Plast** (affuraplast.com) — flexible packaging manufacturer (flexo printing + lamination).
- Founded **2016 in Gaziantep, Türkiye** (HQ). First branch opened in **Syria, 2024**. Today: serving **European & Arab/Middle Eastern markets**, expanding.
- B2B audience (benchmark competitors: Korozo, Biriz, Coveris). Products classified **by market/industry, not by bag type**.
- Machinery: **Comexi F2 MB** flexographic press — **8 colors**, automatic registration via **screen + servo motors** → high print accuracy (manager insists this is THE highlight; do NOT show production stages). Comexi lamination line (ML2/SL2) — Cold Seal, Solventless, Solvent, Matte Lacquer.
- Contact (from current site): Tel **+90 342 290 12 94**, WhatsApp **+90 531 726 84 76**, **info@affuraplast.com**, facebook.com/affuraplast, instagram.com/affuraplast.tr.
- Vision: trusted partner in flexible packaging, innovative solutions, global quality. Mission: packaging combining quality, innovation, sustainability that grows client brands.

## 2. Visual identity (manager-approved)

- **Industrial Premium, minimal, European B2B** — NOT a design-agency look.
- Palette: **70% white** (backgrounds), **20% dark gray/black** (headings/text), **10% logo purple** (buttons, links, icons, separator lines, hover states ONLY).
- Logo: black ring with purple swirl + "AFFURA PLAST" wordmark (need original file from manager; SVG approximation until then).
- Cards: rounded 20–24px, very light shadow, AI image fills ~70% of card, slight zoom on hover.
- Soft scroll/fade animations. Modern icons. Clean modern fonts.
- Real machine photos (purple-lit Comexi) + AI product images in ONE consistent style: professional studio lighting, white/light-gray backgrounds, soft shadows, realistic 3D, same angle — like a catalog.

## 3. Languages

- **AR (RTL) | EN | TR** switcher in the header. Original copy per language (Arabic: trust/relationship tone), same design in all three.

## 4. Pages

1. **Home**
   - **Hero slider — 3 separate slides** (each full width, auto + arrows):
     - S1 *Manufacturing Excellence*: Comexi F2 MB photo (`baskı makinesi.png`), title **"Flexo Printing Perfected"**, sub "High-precision flexographic printing for premium flexible packaging." CTAs: Discover Our Capabilities / Request a Quote.
     - S2 *Complete Flexible Packaging Solutions*: the four finish showcases on white — **Cold Seal · Solventless · Solvent · Matte Lacquer** (composed from `laminasyon 1–4`).
     - S3 *Print Quality*: CMYK painted hands on white, title **"Every Color. Every Detail. Perfectly Printed."**, sub "Advanced flexographic printing with exceptional color consistency, sharp details, and premium finishing for every package." CTAs: Explore Technology / Request a Quote.
   - Stats bar: **9+ years · 100+ packaging solutions · 5+ industries · Europe & Middle East** (numbers to be confirmed by manager).
   - **Industries We Serve** — 5 cards: Food, Beverage, Ready-Made Bags, Home & Personal Care, Pet Food (pet food last).
   - **Featured Packaging Solutions** — 3 big cards: ⭐ Vacuum Bags for Pistachios & Nuts, Premium Coffee Packaging, Beverage Labels & Shrink Sleeves.
   - About preview: factory photo + "Driven by quality. Focused on partnership." → Learn more.
   - Technology strip: Comexi photo + capability icons (Flexographic Printing, Lamination, Slitting, Pouch Making, Quality Control) → Explore.
   - Sustainability band: butterfly image (`sürdürülebilirlik.jpg`) + "Sustainable packaging for a better future."
   - Markets We Serve: world map highlighting Türkiye, Syria, Europe, Middle East, North Africa. "Global reach. Local care."
   - Footer: closing line **"From Gaziantep to international markets, we deliver flexible packaging solutions built on quality, innovation, and trust."** + WhatsApp / Email / Call buttons (all pages), nav, socials, language links.

2. **Products** (by industry; big cards, no long link lists, no scattered small images)
   - **Food Products Packaging** (printed rolls/film): chips & snacks, nuts & dried fruits, coffee, ice cream (metallized wrappers), biscuits, legumes, spices, chocolate, frozen vegetables.
   - **Beverage Packaging**: water labels, juice labels, PVC shrink sleeve rolls, label rolls.
   - **Ready-Made Bags**: Stand-Up Pouches, Coffee Bags, Vacuum Bags for Pistachios & Nuts, Vacuum Bags for Meat, Side Gusset Bags, Three Side Seal Pouches, Quad Seal Bags.
   - **Home & Personal Care Packaging**: laundry detergents, wet wipes, liquid shampoo, dish detergents, liquid cleaners, shrink sleeve labels for detergents, soap.
   - **Pet Food Packaging** (last card): dog food, cat food, bird food, animal feed.
   - Every product/category shows benefit badges: ✓ Food Safe ✓ High Barrier ✓ Flexographic Printing ✓ Custom Printing ✓ Export Quality ✓ Recyclable Options — and a **Request a Quote** button.

3. **Packaging Solutions** (formats): Stand-Up Pouch, Flat Bottom Bag, Side Gusset Bag, Quad Seal Bag, Three Side Seal Pouch, Pillow Bag, Printed Rollstock — icon/card grid.

4. **Technology**
   - Flexo section: Comexi F2 MB photo, "Flexo printing — lasting quality, distinctive colors" (تقنية الطباعة الفلكسو: جودة تدوم، ألوان تميّز). **8-color press; automatic registration via screen & servo = high accuracy.** Feature chips below (colors, speed, registration accuracy, consistency). NO production-stages clutter.
   - Lamination section: lamination machine photo + the 4 finish showcases (Cold Seal / Solventless / Solvent / Matte Lacquer) with the branded product photos.
   - Capabilities row: Flexographic Printing, Lamination, Slitting, Pouch Making, Quality Control.

5. **About Us**
   - Story intro (founded Gaziantep 2016 → Syria branch 2024 → serving EU & Arab markets).
   - **Timeline styled as a packaging roll** across the page: 2016 🏭 founding → 2024 📍 first branch (Syria) → Today 🌍 serving European & Middle Eastern markets.
   - By-the-numbers, Vision, Mission, Manufacturing Excellence (machine photo + Advanced Manufacturing bullets), Why Choose Affura Plast (4 cards).

6. **Sustainability**: butterfly hero + "Why Affura Plast" copy ("Sustainable packaging solutions designed to protect products while respecting the environment." / "Innovation inspired by nature, engineered for performance."), recyclable options, Nature Friendly / zero-waste messaging carried over from current site.

7. **Certificates**: grid of quality certificates (scans needed from manager).

8. **Contact**: HQ Gaziantep – Türkiye 📍 + Branch Syria 📍 on ONE map, WhatsApp/Email/Call buttons, quote-request form, phone/email/socials.

## 5. Tech approach

Static site, no framework: one HTML per page, one `style.css`, one `main.js` (slider, scroll-reveal, mobile nav) and `i18n.js` (AR/EN/TR dictionaries, `dir=rtl` switch, localStorage persistence). Real photos in `assets/img/`; missing AI images ship as styled placeholders until the manager generates them (see IMAGE-PROMPTS.md).

## 6. Open items for the manager

- Original logo files (color + white), certificate scans, real stats numbers, factory exterior photo (or approve AI version), generated images per IMAGE-PROMPTS.md.
