# Sakisa Seafoods — Implementation Inspection & Plan

**Status:** Inspection Complete  
**Date:** August 25, 2026  
**Scope:** Next.js portfolio implementation planning (NO FILES MODIFIED)

---

## 1. Repository Architecture Summary

### Routing & Page Structure

**Dynamic Route:** `app/work/[slug]/page.js`
- Uses `generateStaticParams()` to pre-render all project pages
- Pulls project data from `projects` array in `app/data/projects.js`
- Pulls case-study data from `caseStudies` object in `app/data/caseStudies.js`
- If both exist, renders: Hero → Overview → Case Study → Related Projects → CTA

**Page Composition:**
1. Breadcrumb navigation
2. ProjectPageHero component
3. ProjectOverview component (if case study exists)
4. ProjectCaseStudy component (if case study exists)
5. RelatedProjects component
6. ContactCTA component
7. BackToTop button

**Metadata Generation:**
- Title: `{project.title} — Kannan Thangavel`
- Description: from `project.description`
- OpenGraph: title, description, URL, image
- Structured data: schema.org/CreativeWork

### Data Structure

**Projects Array:** `app/data/projects.js`
- Array of project objects with: slug, title, category, displayCategory, description, role, type, status, featured, image
- Seafood-restaurant entry exists but has outdated data

**Case Studies Object:** `app/data/caseStudies.js`
- Key-value object where key = project slug
- Each case study has `sections` array
- Each section has: type, title, content (for text types), features (for showcase), items (for galleries), etc.
- Current seafood-restaurant entry is a placeholder with generic structure

---

## 2. Existing Case Study Pattern

### Kit Management (Most Recent, Full-Featured)

**Structure:**
- 9+ sections with numbered titles (01, 02, 03...)
- Mix of section types: problem, solution, feature-showcase, challenge-diagram, reflection, next-project
- Uses FeatureShowcase extensively for multiple image presentations
- Uses FlowDiagram for workflow visualization

**Section Types Used:**
1. `problem` → ProblemSection component (text-based)
2. `solution` → SolutionSection component (text-based)
3. `feature-showcase` → FeatureShowcase component (image + description pairs)
4. `challenge-diagram` → FlowDiagram component (horizontal/vertical flow)
5. `role-metadata` → RoleMetadataSection (bulleted list)
6. `reflection` → ReflectionSection (text, can include bullets)
7. `next-project` → NextProjectSection (link to following project)

**Component Capabilities:**

**FeatureShowcase:**
- Single feature: full-width centered layout
- Multiple features with layout="stacked": vertical stack (one per section)
- Multiple features with layout="grid": 2-column desktop, 1-column mobile
- Each feature can have: title, description, image, imageAlt, imageRatio, eyebrow
- Supports `imageRatio: "auto"` for natural aspect ratios
- Special handling for print applications (3 features → certificate full-width + 2-column brochure grid)

**FlowDiagram:**
- Horizontal layout (default): items arranged left-to-right
- Vertical layout: items stacked top-to-bottom
- Ecosystem variant: shows hierarchical structure
- Each item: label, description

**ProblemSection / SolutionSection:**
- Supports plain text with `\n\n` paragraph breaks
- Text rendered as single paragraph with leading-relaxed
- max-width-4xl container

---

## 3. Kit Management Implementation Pattern (Model for Sakisa)

### Structure Overview

```
SECTIONS:
01 — The Challenge (problem)
02 — Designing for Two Roles (problem)
02B — Role Comparison (feature-showcase with 2 stacked features)
03 — Connecting the Workflow (problem)
   ↓ (flow-diagram)
04 — My Design Approach (problem)
05 — Experience Type 1 (problem)
   ↓ (feature-showcase with overview image)
   ↓ (feature-showcase with 3 stacked features)
06 — Experience Type 2 (problem)
   ↓ (feature-showcase)
   ↓ (feature-showcase with stacked features)
...
Reflection (reflection)
Next Project (next-project)
```

### Key Pattern Observations

1. **Content-First Structure**
   - Numbered sections create clear narrative flow
   - Each section has focused title
   - Content explains "why" before "what"

2. **Visual Rhythm**
   - Sections of text followed by feature-showcases
   - Diagrams used strategically (not in every section)
   - No artificial requirements to show assets

3. **Image Treatment**
   - All images use `imageRatio: "auto"`
   - No fixed aspect ratios that could crop content
   - Descriptions are concise (1-2 sentences per feature)

4. **Metadata**
   - No separate "role" section (contained in project overview)
   - Final section is "reflection" (not a separate page section)
   - Next project link always at end

---

## 4. Recommended Sakisa Architecture

### Content Structure (Based on case-study-content.md)

**12 Sections:**

1. **01 — Hero** → Not a section, handled by ProjectPageHero component
2. **02 — Project Overview** → Handled by ProjectOverview component
3. **03 — The Challenge** → `type: "problem"`
4. **04 — Designing Within Constraints** → `type: "problem"`
5. **05 — Website UX/UI** → `type: "problem"`
6. **05B — Website Showcase** → `type: "feature-showcase"` (3 stacked images: Home, Menu, Contact)
7. **06 — Creating the Visual Language** → `type: "problem"`
8. **07 — Menu Card** → `type: "problem"`
9. **07B — Menu Card Visual** → `type: "feature-showcase"` (1 feature: menu card)
10. **08 — Promotional Flyer** → `type: "problem"`
11. **08B — Flyer Visual** → `type: "feature-showcase"` (1 feature: flyer front/back)
12. **09 — One Visual Language Across Touchpoints** → `type: "problem"`
13. **09B — Cross-Channel Composition** → `type: "feature-showcase"` (3-part composition)
14. **10 — Content Creation** → `type: "problem"`
15. **11 — Outcome** → `type: "problem"`
16. **12 — Reflection** → `type: "reflection"`
17. **Next Project** → `type: "next-project"` (nextProjectSlug: "kannan-personal-website")

### Organizational Rationale

**Why separate text from visuals?**
- Text sections can be longer without overwhelming page
- Visual sections get appropriate visual emphasis
- Cleaner narrative flow
- Matches Kit Management pattern

**Why split some sections?**
- "Website UX/UI" (text) → followed by "Website Showcase" (images)
- "Menu Card" (text) → followed by "Menu Card Visual" (image)
- This creates rhythm: explain, then show

**Why combine sections?**
- "Visual Language" (describes colors/typography) + section text doesn't need separate visual showcase
- "Content Creation" and "Outcome" stay text-based (no visuals)

---

## 5. Content-to-Component Mapping

| Case Study Section | Content Type | Proposed Component | Features | Notes |
|---|---|---|---|---|
| Hero | N/A | ProjectPageHero | Will render project title + description | No changes to component |
| Project Overview | Metadata | ProjectOverview | Will render role, type, deliverables | Already configured |
| 03 — The Challenge | Paragraph | problem | One ProblemSection | Use case-study-content text |
| 04 — Designing Within Constraints | Paragraph | problem | One ProblemSection | Use case-study-content text |
| 05 — Website UX/UI | Multi-part text | problem | One ProblemSection | Three subsections in text |
| 05B — Website Showcase | Visuals | feature-showcase | 3 stacked features | home.png, menu.png, contactus.png |
| 06 — Visual Language | Paragraph | problem | One ProblemSection | Use case-study-content text |
| 07 — Menu Card | Paragraph | problem | One ProblemSection | Use case-study-content text |
| 07B — Menu Card | Visual | feature-showcase | 1 feature | Menu Card.png |
| 08 — Promotional Flyer | Paragraph | problem | One ProblemSection | Use case-study-content text |
| 08B — Promotional Flyer | Visual | feature-showcase | 1 feature | Flyer-front-back.jpg |
| 09 — One Language | Paragraph | problem | One ProblemSection | Use case-study-content text |
| 09B — Cross-Channel | Visual | feature-showcase | 3 features grid | home.png, menu.png, flyer.jpg |
| 10 — Content Creation | Paragraph | problem | One ProblemSection | Brief section |
| 11 — Outcome | Paragraph | problem | One ProblemSection | Use case-study-content text |
| 12 — Reflection | Paragraph | reflection | One ReflectionSection | Use case-study-content text |
| Next Project | Navigation | next-project | NextProjectSection | nextProjectSlug: "kannan-personal-website" |

---

## 6. Asset Plan

### Current Assets Available

**Location:** `docs/case-studies/seafood-restaurant/source/`

**Images:**
1. `home.png` (7.0M) - Website home screenshot
2. `aboutus.png` (3.8M) - Website about page
3. `menu.png` (5.2M) - Website menu page
4. `contactus.png` (3.1M) - Website contact page
5. `faq.png` (1.7M) - Website FAQ page
6. `Menu Card.png` (854K) - Menu card design
7. `Flyer-front-back.jpg` (4.2M) - Primary flyer
8. `Flyer-front-back-2.jpg` (5.4M) - Alternate flyer

### Asset Placement Strategy

**Destination:** `public/images/projects/seafood-restaurant/`

**Recommended naming:**
- `home.png` → `home.png` (keep as-is, consistent with source)
- `menu.png` → `menu.png`
- `contactus.png` → `contact.png` (slight simplification)
- `Menu Card.png` → `menu-card.png` (convert to lowercase kebab-case)
- `Flyer-front-back.jpg` → `flyer.jpg` (primary version)
- `Flyer-front-back-2.jpg` → `flyer-alternate.jpg` (alternate)

**Optimization recommendations:**
- Check file sizes: website.png (5.2M) is large but may be necessary for quality
- Flyer files (4.2M + 5.4M) are substantial; could consider WebP format conversion
- Menu card (854K) is reasonable for print design
- All images should maintain quality for desktop viewing (this is print design portfolio)

**NOT copying:**
- Website pages less frequently used in case study (aboutus.png, faq.png)
- Can add later if needed during implementation review

---

## 7. Files That Need Modification

### Existing Files to Update

**1. app/data/projects.js (Line 50-61)**
- Update seafood-restaurant project entry
- Change displayCategory to "Brand & Digital Experience"
- Update description with proper positioning
- Update type to "Brand & Digital Experience"
- Add heroType: "brand" to enable text-only hero
- NOT needed: primaryLogo/secondaryLogo (this is a website + print project, not just logo)

**2. app/data/caseStudies.js (Line 738-777)**
- **REPLACE** entire seafood-restaurant entry (currently placeholder)
- Create 16 new sections based on mapping above
- Use proper section types (problem, feature-showcase, reflection, next-project)
- Reference images in public/images/projects/seafood-restaurant/

### Critical: Do NOT Modify

- `app/components/work/ProjectPageHero.js` (already has brand hero variant)
- `app/components/work/ProjectCaseStudy.js` (renders all section types correctly)
- `app/components/work/case-study/FeatureShowcase.js` (already handles auto aspect ratios + stacked layout)
- `app/work/[slug]/page.js` (dynamic routing already complete)
- `app/components/layout/` (design system)
- `app/globals.css` (design tokens)
- Other project data

---

## 8. Files That Need Creation

### New Files

**1. public/images/projects/seafood-restaurant/images**
- Copy 6 selected images from docs/case-studies/seafood-restaurant/source/
- Files: home.png, menu.png, contact.png, menu-card.png, flyer.jpg, flyer-alternate.jpg
- (Note: NOT copying all source images; only what will be used)

**No new React components needed** — existing components handle all content types.

---

## 9. Responsive Strategy

### Existing Portfolio Patterns

**Desktop (1440px+):**
- max-width-4xl containers for text
- Feature-showcase with grid layout (2 columns when available)
- Large images at natural aspect ratio

**Tablet (768px - 1439px):**
- Text containers reduce proportionally
- Grid layouts become single column
- Images scale proportionally

**Mobile (375px - 767px):**
- Single column layouts
- Full-width images
- Text scales appropriately
- No horizontal overflow

### Sakisa-Specific Considerations

**Website screenshots:** Will be full-width desktop at 1920px width, so they'll scale down on smaller devices. No issue with existing responsive system.

**Menu card:** Single image, will scale naturally.

**Flyer:** Single image, will scale naturally.

**3-part composition (section 09B):** 
- Desktop: 3-feature grid (likely 3 columns if FeatureShowcase supports it)
- Tablet: 2-column grid
- Mobile: Single column stack (existing behavior)

**No new responsive patterns needed** — existing system handles all asset types correctly.

---

## 10. SEO / Metadata Plan

### Metadata Sources

**From projects.js (used by generateMetadata):**
- `title`: "Sakisa Seafoods" → rendered as "Sakisa Seafoods — Kannan Thangavel"
- `description`: From updated project description
- `image`: project.image → **Currently null** (brand hero projects don't need hero image)

**OpenGraph:**
- og:title: "Sakisa Seafoods"
- og:description: project description
- og:url: `/work/seafood-restaurant`
- og:image: project.image (will be null, which is fine; OpenGraph will skip this)

**Structured Data:**
- CreativeWork schema with name, description, URL, image, creator

### Updates Needed

**In projects.js:**
- Update `description` to match case-study-content intro
- **Keep image: null** (brand hero type doesn't need hero image)

**No other SEO changes** — the existing metadata generation already works correctly for this type of project.

---

## 11. Accessibility Considerations

### Image Alt Text Strategy

All images should have descriptive alt text. During implementation:

**Website screenshots:**
- `home.png`: "Sakisa Seafoods website home page showing hero section and value propositions"
- `menu.png`: "Sakisa Seafoods website menu page"
- `contact.png`: "Sakisa Seafoods website contact section with ordering options"

**Design assets:**
- `menu-card.png`: "Sakisa Seafoods menu card with circular food arrangement and menu categories"
- `flyer.jpg`: "Sakisa Seafoods promotional flyer front and back"

**Cross-channel composition:**
- Must describe what each panel shows
- Example: "Website home, menu card, and promotional flyer showing consistent visual language"

### Heading Hierarchy

- H1: Page title (project title) - handled by page
- H2: Section titles (01 — The Challenge, etc.) - ProjectCaseStudy component
- No H3/H4 needed in base implementation

**Current implementation:** All section titles rendered as H2, which is correct.

### Keyboard Navigation

**No special needs** — existing navigation works keyboard-accessible via standard link markup.

### Color Contrast

**No changes needed** — portfolio uses established design tokens with sufficient contrast ratios.

---

## 12. Performance Considerations

### Image Handling

**Next.js Image Optimization:**
- All images should use next/image component (already handled by FeatureShowcase)
- Large images (5-7MB) will be optimized by Next.js
- Consider: images are large because they're high-quality design work (acceptable for portfolio)

**Lazy Loading:**
- FeatureShowcase component already handles lazy loading
- Images below fold will load on demand

**Format Considerations:**
- Current: PNG for design mockups, JPG for screenshots
- Could consider: WebP conversion for smaller file sizes (optional optimization)
- Not critical for first implementation

### Build Performance

**Static Generation:**
- `generateStaticParams()` will create one route: `/work/seafood-restaurant`
- Case study page will be pre-rendered at build time
- No runtime overhead

**No Runtime Issues**
- Data fetching is static (from caseStudies.js)
- No dynamic queries or real-time data
- Page will render instantly from pre-built static HTML

---

## 13. Implementation Risks

### Risk 1: Image Aspect Ratios
**Severity:** LOW  
**Issue:** Website screenshots are wide (1920px desktop width), small menu card, wide flyer
**Mitigation:** Using `imageRatio: "auto"` already handles this; images will maintain natural aspect ratios
**Action:** Verify in implementation; no code changes needed

### Risk 2: Large File Sizes
**Severity:** LOW  
**Issue:** Some images are 5-7MB (website screenshots)
**Mitigation:** Large file sizes are acceptable for high-quality portfolio work; Next.js will optimize
**Action:** Monitor performance; consider WebP conversion as future optimization (optional)

### Risk 3: Data Structure Mismatch
**Severity:** MEDIUM  
**Issue:** Current seafood-restaurant entry in caseStudies.js is placeholder; must be completely replaced
**Mitigation:** Clear mapping defined above; use exact structure from case-study-content.md
**Action:** Double-check section types match component expectations

### Risk 4: Asset Naming
**Severity:** LOW  
**Issue:** Source files have inconsistent naming (spaces, mixed case)
**Mitigation:** Define clear naming convention before copying
**Action:** Rename during copy: `Menu Card.png` → `menu-card.png`, etc.

### Risk 5: Image Path References
**Severity:** MEDIUM  
**Issue:** Typos in image paths will break page rendering
**Mitigation:** Verify paths carefully; test each image loads
**Action:** Use exact filenames defined in asset plan

### Risk 6: Project Navigation
**Severity:** LOW  
**Issue:** Related projects list might include wrong projects
**Mitigation:** RelatedProjects component already handles this; tests passed for Yoga Center
**Action:** Verify seafood-restaurant appears in work list

### Risk 7: URL Conflicts
**Severity:** LOW  
**Issue:** seafood-restaurant route already exists in projects.js
**Mitigation:** Adding case study data will just populate existing route; no URL conflicts
**Action:** No special handling needed

---

## 14. Recommended Implementation Sequence

### Phase 1: Data Preparation (30 mins)
1. ✓ Finalize case-study-content.md text
2. ✓ Define image asset placement and naming
3. Prepare exact section objects for caseStudies.js

### Phase 2: Asset Setup (15 mins)
4. Copy 6 selected images to public/images/projects/seafood-restaurant/
5. Verify all images load correctly
6. Spot-check image quality/sizing

### Phase 3: Data Update (20 mins)
7. Update projects.js seafood-restaurant entry
   - displayCategory, description, type
   - Add heroType: "brand" if using brand hero variant
8. Replace caseStudies.js seafood-restaurant entry with new 16-section structure

### Phase 4: Verification (15 mins)
9. Run production build
10. Verify /work/seafood-restaurant route generates correctly
11. Manual page inspection at desktop/tablet/mobile

### Phase 5: Visual QA (30 mins)
12. Desktop (1440px): Verify all sections render, images display, no horizontal scroll
13. Tablet (768px): Verify responsive grid changes, images scale
14. Mobile (375px): Verify single-column layout, text readable, touch targets adequate
15. Check navigation (previous/next projects, breadcrumbs, related work)
16. Check SEO metadata (title tag, OG tags)

### Phase 6: Final Verification (10 mins)
17. git status check (only modified data/projects.js and data/caseStudies.js, only copied images)
18. Build verification complete
19. Document final state

**Total Time Estimate:** ~2 hours including visual QA

---

## 15. File Modification Summary

### Files to Create
- `public/images/projects/seafood-restaurant/home.png`
- `public/images/projects/seafood-restaurant/menu.png`
- `public/images/projects/seafood-restaurant/contact.png`
- `public/images/projects/seafood-restaurant/menu-card.png`
- `public/images/projects/seafood-restaurant/flyer.jpg`

### Files to Modify
- `app/data/projects.js` — Update seafood-restaurant entry (lines 50-61)
- `app/data/caseStudies.js` — Replace seafood-restaurant entry (lines 738-777)

### Files NOT Modified
- All React components
- All styling
- All other projects
- All other routes
- Configuration files

---

## 16. Final Recommendation

### Recommended Architecture

**Use Existing Components + Data-Driven Sections**

The portfolio already has all required components. Implementation is purely a data operation:
1. Update project metadata in projects.js
2. Define 16 case-study sections in caseStudies.js
3. Copy images to public/images/projects/seafood-restaurant/

**Component Reuse Strategy**
- ProjectPageHero: existing brand hero variant (no changes needed)
- ProjectCaseStudy: renders all section types correctly (no changes needed)
- FeatureShowcase: handles all layouts (stacked, grid, auto aspect ratio) ✓
- ProblemSection: renders text-based content ✓
- ReflectionSection: renders closing reflection ✓
- NextProjectSection: navigation to next case study ✓

**No custom components needed** — the generic system is sufficient.

---

### Reusable Components (Already Available)

1. **ProjectPageHero** — Brand hero variant ready (heroType: "brand")
2. **ProblemSection** — Text rendering (already tested with Kit Management)
3. **FeatureShowcase** — Image showcase (already tested with print applications layout)
4. **FlowDiagram** — Flow visualization (not needed for Sakisa)
5. **ReflectionSection** — Closing reflection
6. **NextProjectSection** — Navigation to next project

### New Components

**NONE NEEDED** — The existing system is designed flexibly enough to handle all Sakisa content.

---

### Asset Plan

**Copy** (not optimize) these 6 images from source to public:
- home.png
- menu.png
- contact.png (from contactus.png)
- menu-card.png (from Menu Card.png)
- flyer.jpg (from Flyer-front-back.jpg)
- [Optional] flyer-alternate.jpg (from Flyer-front-back-2.jpg)

**No optimization needed at first implementation** — file sizes are acceptable for portfolio.

---

### Route

**Existing:** `/work/seafood-restaurant`
**No changes needed** — route already exists, just needs data.

---

### Implementation Order (Simplified)

1. **Update projects.js** (seafood-restaurant entry)
2. **Copy 6 images** to public/images/projects/seafood-restaurant/
3. **Replace caseStudies.js** (complete seafood-restaurant entry with 16 sections)
4. **Build and verify** at all breakpoints
5. **Final QA** desktop/tablet/mobile

---

## Implementation Complete

**Status:** Ready for coding phase

**Summary:**
- No custom components required
- Minimal data changes needed (2 files)
- 6 images to copy
- Existing components handle all layouts/responsive behavior
- Build-time generation handles all performance
- No accessibility changes required
- All risks identified and mitigated

**Estimated Implementation Time:** 2-3 hours including visual QA

---

**Next Step:** Implement data updates and asset copy (Phase 2 of recommended sequence)
