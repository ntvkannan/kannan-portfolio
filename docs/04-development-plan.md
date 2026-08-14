# KANNAN PERSONAL WEBSITE — DEVELOPMENT PLAN

Version: 1.0
Status: Development Foundation
Project: Kannan Thangavel Personal Website

Related Documents:

- 00-design-system.md
- 01-content.md
- 02-sitemap.md
- 03-wireframes.md

---

# 01. PURPOSE

This document defines how the Kannan Thangavel personal website should be developed.

The website is intended to serve two primary purposes:

1. Present Kannan professionally for job opportunities.
2. Present Kannan's design capabilities for freelance and client work.

The website should also demonstrate Kannan's transition from:

UX/UI Design
→ Visual Design
→ Frontend Development
→ Design + Development

The website itself should become the first real example of this capability.

---

# 02. DEVELOPMENT OBJECTIVE

The website should not be treated as a simple portfolio template.

It should demonstrate:

- UX thinking
- Information architecture
- Visual design
- Design systems
- Responsive design
- Component thinking
- Frontend development
- Accessibility
- Performance
- SEO
- Real project presentation

The website should communicate:

"I can design the experience and I understand how to build it."

---

# 03. TECHNOLOGY STACK

Use:

- Next.js
- JavaScript
- Tailwind CSS
- React
- Git
- GitHub

Recommended foundation:

- Next.js App Router
- JavaScript
- Tailwind CSS

Do not introduce TypeScript for the initial version.

Kannan already knows JavaScript and will use Claude Code for development.

The priority is:

Understanding
+
Building
+
Learning
+
Shipping

rather than adding technologies unnecessarily.

---

# 04. TECHNOLOGY PRINCIPLE

Use the simplest technology that can properly solve the requirement.

Do not add a library simply because it is popular.

Before adding a dependency ask:

1. Do we actually need it?
2. Can Next.js solve it?
3. Can React solve it?
4. Can Tailwind solve it?
5. Will it make the project harder to maintain?

If the answer is no, do not add it.

---

# 05. INITIAL PROJECT STRUCTURE

Recommended structure:

kannan-portfolio/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   │
│   ├── work/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   │
│   ├── about/
│   │   └── page.js
│   │
│   ├── services/
│   │   └── page.js
│   │
│   ├── experience/
│   │   └── page.js
│   │
│   ├── contact/
│   │   └── page.js
│   │
│   ├── resume/
│   │   └── page.js
│   │
│   └── not-found.js
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── ui/
│   ├── portfolio/
│   ├── sections/
│   ├── case-study/
│   └── forms/
│
├── data/
│   ├── navigation.js
│   ├── projects.js
│   ├── services.js
│   └── experience.js
│
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── profile/
│   │   └── general/
│   │
│   ├── resume/
│   │
│   └── icons/
│
├── docs/
│   ├── 00-design-system.md
│   ├── 01-content.md
│   ├── 02-sitemap.md
│   ├── 03-wireframes.md
│   └── 04-development-plan.md
│
├── package.json
├── next.config.js
└── README.md

---

# 06. DEVELOPMENT PHILOSOPHY

Build the website in stages.

Do not attempt to build everything simultaneously.

Recommended workflow:

Design System
↓
Global Foundation
↓
Layout
↓
Homepage
↓
Work
↓
Project Template
↓
Projects
↓
About
↓
Services
↓
Experience
↓
Contact
↓
Responsive Refinement
↓
Accessibility
↓
SEO
↓
Performance
↓
Testing
↓
Deployment

---

# 07. SOURCE OF TRUTH

Claude Code must treat the following documents as the project source of truth:

- 00-design-system.md
- 01-content.md
- 02-sitemap.md
- 03-wireframes.md
- 04-development-plan.md

Priority:

1. Design system controls visual decisions.
2. Content document controls approved content.
3. Sitemap controls page architecture.
4. Wireframe controls page structure.
5. Development plan controls implementation approach.

Do not override these documents without an explicit instruction.

---

# 08. CONTENT RULE

Do not invent professional experience, clients, achievements, statistics or project outcomes.

If information is missing:

- Use a clearly marked placeholder.
- Ask for the missing information.
- Do not create fictional details.

Especially do not invent:

- Years of experience
- Company names
- Client names
- Project results
- User numbers
- Revenue
- Performance improvements
- Awards
- Certifications
- Testimonials

---

# 09. PROJECT STATUS RULE

Only completed work should be presented as completed.

Future development projects must be clearly identified.

For example:

- Building
- Coming Soon
- Planned

Do not present a planned seafood booking/delivery application as a completed product.

Do not present the yoga attendance application as completed until it actually exists.

---

# 10. CURRENT PORTFOLIO STRATEGY

The initial portfolio should focus on the work that exists today.

Primary client projects:

1. Seafood Restaurant
2. Yoga Center

These can initially showcase:

- Brand Guidelines
- Brochure
- Flyer
- Poster
- Business Card
- Other completed visual applications

Later, their digital products can be added.

---

# 11. FUTURE PRODUCT STRATEGY

Future projects should be designed and developed separately and then connected to the portfolio.

Seafood Restaurant:

Brand
→ UX
→ UI
→ Booking
→ Ordering
→ Delivery
→ Frontend

Yoga Center:

Brand
→ UX
→ UI
→ Attendance
→ Management
→ Dashboard
→ Frontend

When these products are completed, update their portfolio project pages.

---

# 12. PERSONAL WEBSITE AS A PROJECT

The personal website itself should eventually become a portfolio case study.

It can demonstrate:

- UX
- Information Architecture
- Design System
- UI
- Responsive Design
- Component Architecture
- Next.js
- JavaScript
- Tailwind CSS
- Accessibility
- SEO
- Performance
- Deployment

Do not add the case study immediately if the website is still incomplete.

Add it after a meaningful version is live.

---

# 13. DEVELOPMENT PHASE 01 — PROJECT SETUP

Create the Next.js project.

Use:

- Next.js
- JavaScript
- App Router
- Tailwind CSS

Confirm that the project runs successfully before implementing UI.

Initial commands and configuration should be generated by Claude Code based on the current stable Next.js setup.

Do not hard-code outdated package versions into this document.

---

# 14. DEVELOPMENT PHASE 02 — DESIGN SYSTEM IMPLEMENTATION

Before creating pages, implement the core design tokens from:

00-design-system.md

Include:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Container width
- Breakpoints
- Button styles
- Surface styles
- Border styles

The implementation should make these values reusable.

---

# 15. DESIGN TOKEN PRINCIPLE

Do not scatter arbitrary values throughout the project.

If a visual value is repeatedly used, define it centrally.

Examples:

- Primary color
- Muted text
- Border color
- Page background
- Card background
- Spacing scale
- Radius
- Container width
- Typography scale

---

# 16. GLOBAL CSS

Use:

app/globals.css

for global styles.

Keep global CSS limited to:

- Base styles
- CSS variables / tokens if required
- Global typography
- Accessibility utilities
- Global background
- Global selection
- Global focus behavior

Do not place large page-specific styles in globals.css.

Page and component styling should primarily use Tailwind.

---

# 17. ROOT LAYOUT

Implement:

app/layout.js

Responsibilities:

- Global metadata
- Global font configuration
- Site-wide structure
- Header
- Main content
- Footer

Do not place page-specific content in the root layout.

---

# 18. GLOBAL LAYOUT

Recommended structure:

<body>
  <Header />

  <main>
    {children}
  </main>

  <Footer />
</body>

Every page should inherit the global layout.

---

# 19. HEADER DEVELOPMENT

Build the Header before individual pages.

Desktop:

- Logo
- Navigation
- Primary CTA

Mobile:

- Logo
- Menu button

The header must work at all supported screen sizes.

---

# 20. HEADER RESPONSIVENESS

Desktop:

Display navigation.

Mobile:

Hide desktop navigation.

Show mobile menu trigger.

When opened:

- Show navigation
- Show CTA
- Show resume link if required

The mobile menu must be keyboard accessible.

---

# 21. MOBILE MENU

The mobile menu must support:

- Open
- Close
- Escape key
- Keyboard navigation
- Visible focus
- Correct aria attributes
- Preventing accidental background interaction where appropriate

Do not create a visually impressive menu that is difficult to use.

---

# 22. FOOTER DEVELOPMENT

Create Footer as a reusable component.

Footer should contain:

- Name
- Professional description
- Navigation
- Social links
- Resume
- Copyright

Use the same Footer across the website.

---

# 23. COMPONENT ARCHITECTURE

Use reusable components.

Foundation:

- Container
- Section
- Button
- Link
- Badge
- Tag
- Image

Navigation:

- Header
- MobileMenu
- Breadcrumb
- Footer

Portfolio:

- ProjectCard
- ProjectGrid
- ProjectFilter
- ProjectMeta
- FeaturedProject
- RelatedProjects

Sections:

- HeroSection
- AudienceGrid
- CredibilityGrid
- ServiceGrid
- CareerTimeline
- ContactCTA

Case Study:

- ProjectHero
- CaseStudySection
- CaseStudyText
- CaseStudyImage
- CaseStudySplit
- ProcessSteps
- ProjectGallery
- ProjectRoadmap

Forms:

- ContactForm
- FormField

---

# 24. COMPONENT PRINCIPLE

Components should be:

- Reusable
- Understandable
- Small enough to maintain
- Focused on one responsibility

Avoid giant components containing the entire page.

---

# 25. PAGE COMPONENT PRINCIPLE

Page files should mainly compose sections.

Example concept:

HomePage
→ HomeHero
→ AudienceGrid
→ CredibilityGrid
→ FeaturedWork
→ ClientWork
→ CurrentlyBuilding
→ ServicesPreview
→ AboutPreview
→ ContactCTA

Do not put hundreds of lines of repeated UI directly inside page.js.

---

# 26. DATA-DRIVEN PROJECTS

Project information should be stored in:

data/projects.js

Example structure:

{
  slug: "seafood-restaurant",
  title: "Seafood Restaurant",
  category: "client",
  role: "Brand & Visual Design",
  status: "building",
  description: "Approved project description.",
  featured: true
}

Use actual approved content.

---

# 27. PROJECT CATEGORY VALUES

Use stable internal values:

- professional
- client
- product

Display:

- Professional UX/UI
- Client & Brand
- Product & Development

Do not create multiple internal names for the same category.

---

# 28. PROJECT STATUS VALUES

Use:

- completed
- building
- coming-soon
- live
- archived

The UI should convert these into human-readable labels.

---

# 29. PROJECT PAGE ROUTING

Use:

/work/[slug]

Example:

/work/seafood-restaurant

The project page should retrieve the correct project from the project data.

---

# 30. PROJECT PAGE TEMPLATE

All projects should use a reusable project template.

Basic structure:

ProjectHero
↓
ProjectOverview
↓
CaseStudyContent
↓
ProjectGallery
↓
RelatedProjects
↓
ContactCTA

The exact case-study sections depend on the project.

---

# 31. PROJECT TEMPLATE TYPES

Support three project types.

Type 1:

Professional UX/UI

Type 2:

Client & Brand

Type 3:

Product & Development

The same base project system should support all three.

---

# 32. PROFESSIONAL UX/UI PROJECTS

Use for existing professional UX/UI projects.

Possible sections:

- Context
- Problem
- Role
- Users
- Research
- Information Architecture
- User Flows
- Wireframes
- UI
- Design System
- Prototype
- Outcome
- Gallery

Only include sections supported by the actual project.

---

# 33. CLIENT & BRAND PROJECTS

Use for:

- Seafood Restaurant
- Yoga Center

Possible sections:

- Business Context
- Brand Direction
- Identity
- Brand Guidelines
- Color
- Typography
- Business Card
- Brochure
- Flyer
- Poster
- Marketing Applications
- Gallery
- Future Digital Product

---

# 34. PRODUCT & DEVELOPMENT PROJECTS

Use for:

- Future web applications
- Personal website
- Seafood booking/order application
- Yoga attendance application

Possible sections:

- Objective
- Problem
- Research
- Product Strategy
- UX
- UI
- Design System
- Architecture
- Development
- Testing
- Deployment
- Outcome
- Learnings

---

# 35. HOMEPAGE DEVELOPMENT ORDER

Build homepage sections in this order:

1. Header
2. Hero
3. Audience Paths
4. Credibility
5. Selected Professional Work
6. Client & Brand Work
7. Currently Building
8. Capabilities
9. Experience Snapshot
10. Services
11. About Snapshot
12. Contact CTA
13. Footer

Do not implement random sections before the hierarchy is complete.

---

# 36. HOMEPAGE PRIORITY

The homepage must quickly communicate:

- Who Kannan is
- What Kannan does
- What Kannan has designed
- What Kannan is building
- How Kannan can help
- How to contact Kannan

---

# 37. WORK PAGE DEVELOPMENT

Build:

/work

Structure:

- PageHero
- ProjectFilter
- Professional UX/UI
- Client & Brand
- Product & Development
- ContactCTA
- Footer

Use project data rather than hard-coded repeated cards.

---

# 38. PROJECT FILTER

The first implementation may use client-side filtering.

Categories:

- All
- Professional UX/UI
- Client & Brand
- Product & Development

Keep the implementation simple.

Do not add a complex state-management library.

---

# 39. PROJECT DETAIL DEVELOPMENT

Build one reusable project page before creating all project pages.

Recommended first project:

One of the strongest verified UX/UI projects.

After the template works:

Add remaining projects.

This avoids repeating development mistakes.

---

# 40. PROJECT PAGE DEVELOPMENT ORDER

Build:

1. Project Hero
2. Metadata
3. Overview
4. Case Study Sections
5. Gallery
6. Related Projects
7. Contact CTA

Then test responsive behavior.

---

# 41. ABOUT PAGE

Implement:

/about

Sections:

- Hero
- Introduction
- Career Evolution
- Design Philosophy
- Current Direction
- Skills
- Resume CTA
- Contact CTA

---

# 42. SERVICES PAGE

Implement:

/services

Sections:

- Hero
- Service Categories
- Project Flow
- End-to-End Capability
- Contact CTA

Services should clearly support both:

- Job opportunities
- Freelance opportunities

---

# 43. EXPERIENCE PAGE

Implement:

/experience

Sections:

- Hero
- Career Summary
- Timeline
- Skills
- Resume CTA
- Contact CTA

Use verified career information only.

---

# 44. CONTACT PAGE

Implement:

/contact

Sections:

- Hero
- Contact Paths
- Contact Form
- Direct Contact
- Social Links
- Footer

---

# 45. CONTACT FORM

Initial form:

- Name
- Email
- Project Type
- Message

The form should be simple.

Do not build a complex CRM.

---

# 46. CONTACT FORM IMPLEMENTATION

The form can initially use a simple external form service or email workflow.

Choose the simplest reliable approach.

Do not build a custom backend unless there is a clear need.

The final implementation must:

- Validate fields.
- Handle errors.
- Show success state.
- Prevent accidental duplicate submissions.
- Protect against obvious spam where necessary.

---

# 47. RESUME

Store the current resume in:

public/resume/

Example:

public/resume/kannan-thangavel-resume.pdf

The filename can be changed to match the final approved resume.

Provide:

Download Resume

Do not create multiple conflicting resume files.

---

# 48. IMAGE ORGANIZATION

Recommended:

public/images/
├── profile/
├── projects/
│   ├── osel/
│   ├── advocate/
│   ├── school-erp/
│   ├── kit-management/
│   ├── seafood/
│   ├── yoga/
│   └── personal-website/
└── general/

Keep project assets separated.

---

# 49. IMAGE NAMING

Use descriptive filenames.

Good examples:

- seafood-brand-guideline.webp
- seafood-business-card.webp
- yoga-poster.webp
- osel-dashboard.webp

Avoid:

- image1.png
- final2.png
- newfinalfinal.png
- abc.jpg

---

# 50. IMAGE OPTIMIZATION

Use appropriate image formats.

Preferred where suitable:

- WebP
- AVIF where supported and practical

Use high-quality source images but optimize for the web.

Do not upload unnecessarily huge original files.

---

# 51. NEXT IMAGE COMPONENT

Use Next.js image handling where appropriate.

Images should:

- Have meaningful dimensions.
- Have alt text.
- Be responsive.
- Avoid layout shifts.
- Use appropriate loading behavior.

---

# 52. ALT TEXT

Alt text should describe the meaningful content.

Good:

"Seafood restaurant brand guideline showing logo, color palette and typography."

Bad:

"Image"

Decorative images may use empty alt text where appropriate.

---

# 53. RESPONSIVE DEVELOPMENT

The website must support:

- Desktop
- Tablet
- Mobile

Do not design only for desktop and fix mobile later.

Use responsive development from the beginning.

---

# 54. RESPONSIVE BREAKPOINT PRINCIPLE

Use Tailwind's responsive system.

Do not create unnecessary custom breakpoints.

The layout should naturally adapt.

Desktop:

Multi-column

Tablet:

Reduced columns

Mobile:

Single-column

---

# 55. MOBILE-FIRST APPROACH

When practical, write the base layout for mobile and progressively enhance for larger screens.

Example:

Base
→ mobile

md:
→ tablet

lg:
→ desktop

Use the actual design system breakpoints where specified.

---

# 56. RESPONSIVE TYPOGRAPHY

Typography must scale appropriately.

Do not simply shrink desktop headings until they fit.

Use responsive type scales defined by the design system.

Ensure:

- Headings remain readable.
- Line lengths are comfortable.
- Buttons remain usable.
- No text overflow occurs.

---

# 57. RESPONSIVE NAVIGATION

Desktop navigation should not be forced onto small screens.

Use:

Desktop:

Full navigation

Mobile:

Menu

The transition should occur before navigation becomes crowded.

---

# 58. RESPONSIVE PROJECT GRID

Desktop:

3 columns

Tablet:

2 columns

Mobile:

1 column

Featured project may use a larger layout.

---

# 59. ACCESSIBILITY

Accessibility is part of development, not a final optional step.

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Accessible labels
- Meaningful alt text
- Proper heading hierarchy
- Sufficient contrast
- Reduced motion support

---

# 60. KEYBOARD NAVIGATION

All interactive elements must be reachable by keyboard.

Test:

- Tab
- Shift + Tab
- Enter
- Space
- Escape
- Arrow keys where applicable

---

# 61. FOCUS STATES

Every interactive element should have a visible focus state.

Especially:

- Buttons
- Links
- Menu
- Form controls
- Filters
- Gallery controls

Do not remove browser focus indicators without replacing them.

---

# 62. SEMANTIC HTML

Prefer:

<header>
<nav>
<main>
<section>
<article>
<footer>

Use buttons for actions.

Use links for navigation.

Do not use clickable divs unnecessarily.

---

# 63. REDUCED MOTION

If animations are added:

Respect:

prefers-reduced-motion

Users who prefer reduced motion should not be forced to experience unnecessary animation.

---

# 64. MOTION PRINCIPLE

Animation should communicate:

- State change
- Navigation
- Hierarchy
- Interaction

Do not animate simply to make the portfolio look "fancy."

The portfolio should feel professional.

---

# 65. PERFORMANCE

Prioritize:

- Fast initial load
- Optimized images
- Minimal JavaScript
- Efficient components
- Good Core Web Vitals

Avoid:

- Large background videos
- Heavy animation libraries
- Unnecessary third-party scripts
- Huge unoptimized images

---

# 66. CLIENT COMPONENTS

Use client components only when interaction requires them.

Examples:

- Mobile menu
- Project filtering
- Lightbox
- Interactive contact form

Static content should remain server-rendered whenever practical.

---

# 67. SEO

Every important page should have:

- Unique title
- Unique description
- Canonical URL where needed
- Open Graph metadata
- Meaningful headings
- Semantic HTML
- Descriptive image alt text

---

# 68. PAGE TITLE STRUCTURE

Use a consistent structure.

Homepage:

Kannan Thangavel — UX/UI Designer & Frontend Developer

Project:

[Project Name] — Kannan Thangavel

About:

About Kannan Thangavel — UX/UI Designer

Services:

UX/UI & Design Services — Kannan Thangavel

Experience:

Experience — Kannan Thangavel

Contact:

Contact Kannan Thangavel

Adjust wording if the approved content document specifies different titles.

---

# 69. OPEN GRAPH

Provide suitable Open Graph metadata for:

- Homepage
- Work
- Important project pages
- About
- Services
- Experience
- Contact

Use project-specific images where available.

---

# 70. URL STRUCTURE

Use clean URLs.

Recommended:

/
 /work
 /work/osel-signage-cms
 /work/seafood-restaurant
 /work/yoga-center
 /about
 /services
 /experience
 /contact
 /resume

Avoid:

/project?id=123
/page1
/project-final-new

---

# 71. URL SLUGS

Use:

- Lowercase
- Hyphen-separated
- Readable

Example:

- seafood-restaurant
- yoga-center
- osel-signage-cms

Avoid unnecessary dates or numbers.

---

# 72. INTERNAL LINKING

Important pages should link to one another naturally.

Examples:

Homepage
→ Work

Work
→ Project

Project
→ Related Project

Project
→ Contact

About
→ Experience

Services
→ Contact

---

# 73. 404 PAGE

Create:

app/not-found.js

Show:

404

Page not found.

[Back to Home]

[View My Work]

Keep it simple.

---

# 74. ERROR HANDLING

The website should handle unexpected states gracefully.

Do not expose technical errors to visitors.

User-facing errors should be clear.

Developer errors should be visible in development logs.

---

# 75. LOADING STATES

Only add loading UI where actual loading occurs.

Do not add unnecessary loading animations to static pages.

The portfolio should feel fast.

---

# 76. FORM ERROR STATES

Example:

Invalid email:

Please enter a valid email address.

Missing name:

Please enter your name.

Missing message:

Please tell me a little about your project.

Keep messages friendly and concise.

---

# 77. PROJECT DATA VALIDATION

Before rendering a project:

Verify:

- slug exists
- title exists
- category exists
- description exists
- status is valid

If required data is missing, handle gracefully.

Do not crash the entire website.

---

# 78. DEVELOPMENT DATA RULE

Do not mix:

- Content
- Layout
- Styling
- Application logic

Keep them separated.

Example:

Project information:

data/projects.js

UI:

components/portfolio/ProjectCard.js

Page:

app/work/page.js

---

# 79. GIT WORKFLOW

Use Git from the beginning.

Recommended main branch:

main

For larger changes:

- feature/homepage
- feature/project-template
- feature/contact

Commit frequently.

---

# 80. COMMIT PRINCIPLE

Use meaningful commit messages.

Good examples:

- feat: add homepage hero
- feat: add project card component
- feat: add seafood project page
- fix: improve mobile navigation
- fix: correct project image sizing
- style: refine typography

Avoid:

- update
- changes
- final
- final2
- new

---

# 81. DEVELOPMENT CHECKPOINTS

After each major phase:

1. Run the development server.
2. Check the page visually.
3. Check desktop.
4. Check mobile.
5. Check console errors.
6. Check links.
7. Commit changes.

Do not wait until the end to discover problems.

---

# 82. DEVELOPMENT ORDER

Recommended complete implementation order:

### Phase 1

Project setup

### Phase 2

Design tokens

### Phase 3

Global layout

### Phase 4

Header / Footer

### Phase 5

Foundation components

### Phase 6

Homepage

### Phase 7

Work page

### Phase 8

Project template

### Phase 9

First project

### Phase 10

Remaining projects

### Phase 11

About

### Phase 12

Services

### Phase 13

Experience

### Phase 14

Contact

### Phase 15

Responsive refinement

### Phase 16

Accessibility

### Phase 17

SEO

### Phase 18

Performance

### Phase 19

Testing

### Phase 20

Deployment

---

# 83. PHASE 1 — PROJECT SETUP

Claude Code should:

1. Create the Next.js project.
2. Configure JavaScript.
3. Configure Tailwind CSS.
4. Confirm App Router.
5. Create basic folder structure.
6. Start development server.
7. Confirm no errors.

Do not build pages yet.

---

# 84. PHASE 2 — DESIGN TOKENS

Claude Code should read:

00-design-system.md

Then implement:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Container
- Buttons
- Cards
- Links

Do not proceed until the foundation is stable.

---

# 85. PHASE 3 — GLOBAL LAYOUT

Build:

- Header
- Footer
- Container
- Section
- Global typography
- Global background
- Navigation
- Mobile navigation

Verify all pages can use the global structure.

---

# 86. PHASE 4 — FOUNDATION COMPONENTS

Build:

- Button
- Link
- Badge
- Tag
- Image
- SectionHeader

These components should be visually consistent before using them extensively.

---

# 87. PHASE 5 — HOMEPAGE

Implement homepage according to:

03-wireframes.md

Do not add extra sections simply because space is available.

The homepage should remain focused.

---

# 88. PHASE 6 — WORK SYSTEM

Build:

- Project data
- ProjectCard
- ProjectGrid
- ProjectFilter
- ProjectMeta
- FeaturedProject
- RelatedProjects

Then build:

/work

---

# 89. PHASE 7 — PROJECT TEMPLATE

Build one complete project template.

Test:

- Desktop
- Tablet
- Mobile
- Accessibility
- Navigation
- Images

Then reuse the template.

---

# 90. PHASE 8 — PROJECT CONTENT

Add approved projects.

Initial client projects:

- Seafood Restaurant
- Yoga Center

Add verified professional UX/UI projects according to the approved content document.

Do not create placeholder projects that look real.

---

# 91. PHASE 9 — ABOUT

Build About page after the Work system is stable.

This allows the site to already communicate the strongest portfolio material before secondary pages are completed.

---

# 92. PHASE 10 — SERVICES

Build Services using reusable ServiceCard components.

Services should be clear to:

- Potential employers
- Potential freelance clients

---

# 93. PHASE 11 — EXPERIENCE

Build Experience using verified career data.

Use:

- ExperienceCard
- Timeline
- SkillGroup
- ResumeCTA

---

# 94. PHASE 12 — CONTACT

Build:

- Contact hero
- Contact paths
- Contact form
- Direct contact
- Social links
- Success state
- Error state

---

# 95. PHASE 13 — RESPONSIVE REFINEMENT

Review every page at:

- Mobile
- Tablet
- Desktop

Check:

- Spacing
- Typography
- Images
- Navigation
- Cards
- Buttons
- Grid
- Forms

No horizontal scrolling should occur.

---

# 96. PHASE 14 — ACCESSIBILITY REVIEW

Check:

- Keyboard
- Focus
- Headings
- Labels
- Contrast
- Alt text
- Navigation
- Reduced motion
- Screen-reader-friendly structure

---

# 97. PHASE 15 — SEO REVIEW

Check:

- Page titles
- Descriptions
- Open Graph
- URLs
- Heading hierarchy
- Image alt text
- Internal links
- Sitemap
- Robots configuration where appropriate

---

# 98. PHASE 16 — PERFORMANCE REVIEW

Check:

- Image sizes
- Unused dependencies
- JavaScript bundle
- Third-party scripts
- Font loading
- Layout shift
- Largest Contentful Paint
- Interaction responsiveness

---

# 99. TESTING

Before deployment verify:

- Homepage works.
- Navigation works.
- Mobile menu works.
- Project filter works.
- All project pages work.
- All images load.
- Resume downloads.
- Contact form works.
- External links work.
- 404 works.
- No console errors.
- No broken links.

---

# 100. BROWSER TESTING

At minimum test:

- Chrome desktop
- Chrome mobile/responsive mode
- A modern Safari environment if available
- A modern Edge environment if available

The exact browser list can expand later.

---

# 101. MOBILE TESTING

Check at common mobile widths.

Verify:

- No horizontal overflow.
- Text is readable.
- Buttons are tappable.
- Navigation is usable.
- Images are not cropped incorrectly.
- Project cards remain clear.
- Forms are comfortable to use.

---

# 102. ACCESSIBILITY TESTING TOOLS

Use browser accessibility tools and Lighthouse where appropriate.

Check:

- Contrast
- ARIA usage
- Heading structure
- Keyboard navigation
- Form labels
- Image alt text

---

# 103. SEO TESTING

Check:

- Each page has one primary H1.
- Titles are unique.
- Descriptions are unique.
- URLs are clean.
- Images have alt text.
- Internal links work.
- No accidental noindex settings.

---

# 104. PERFORMANCE TESTING

Use Lighthouse or equivalent tools.

Target:

- Good performance
- Good accessibility
- Good SEO
- Good best practices

Do not chase arbitrary scores at the expense of real usability.

---

# 105. DEPLOYMENT

The website should eventually be deployed to a production hosting platform suitable for Next.js.

Recommended workflow:

Local development

↓

GitHub

↓

Preview deployment

↓

Testing

↓

Production deployment

---

# 106. DOMAIN

Use a professional personal domain when available.

Preferred pattern:

Name-based personal domain.

Example:

kannanthangavel.com

Use the final available domain selected by Kannan.

Do not assume availability.

---

# 107. PRODUCTION ENVIRONMENT

Before production:

- Check environment variables.
- Check contact form.
- Check analytics if used.
- Check metadata.
- Check favicon.
- Check social preview.
- Check robots/sitemap.
- Check all production links.

---

# 108. ANALYTICS

Analytics should be optional.

If added:

Use a privacy-conscious solution.

Track only useful information.

Possible metrics:

- Page views
- Project views
- Contact conversions
- Resume clicks

Do not add analytics before the core website works.

---

# 109. SECURITY

Even a portfolio should follow basic security principles.

Do not expose:

- API keys
- Secrets
- Private tokens
- Passwords
- Server credentials

Do not store sensitive information in public files.

---

# 110. ENVIRONMENT VARIABLES

Use:

.env.local

for local secrets.

Do not commit:

.env.local

to Git.

Add required environment variables to documentation without exposing their secret values.

---

# 111. THIRD-PARTY SERVICES

Keep third-party services minimal.

Potential:

- Contact form service
- Analytics
- Font service if required

Do not add unnecessary integrations.

---

# 112. NO CMS INITIALLY

The first version does not require a CMS.

Use local project data.

Example:

data/projects.js

A CMS can be introduced later if the portfolio becomes large enough to justify it.

---

# 113. NO BACKEND INITIALLY

The portfolio does not require a custom backend for the first version.

Use Next.js capabilities and simple external services where necessary.

Future web applications can have their own backend architecture.

---

# 114. FUTURE WEB APPLICATIONS

The Seafood and Yoga applications should not be forced into the portfolio website's architecture.

They should be separate projects.

For example:

kannan-portfolio/

and later:

seafood-app/

yoga-attendance-app/

The portfolio links to those applications.

---

# 115. PROJECT LINK STRATEGY

When a real application exists:

Project page:

View Case Study

and, where appropriate:

View Live App

When it does not exist:

Coming Soon

or:

Building

Do not link to nonexistent URLs.

---

# 116. PORTFOLIO GROWTH

The website must support adding future projects without changing the overall architecture.

To add a project:

1. Add project data.
2. Add project images.
3. Add case-study content.
4. Add slug.
5. Verify category.
6. Verify status.
7. Verify links.
8. Test project page.

The Work page should automatically include the new project.

---

# 117. NEW PROJECT CHECKLIST

Before publishing a project:

- Title approved.
- Description approved.
- Category correct.
- Role correct.
- Status correct.
- Images optimized.
- Alt text written.
- Case study reviewed.
- Links tested.
- Mobile layout tested.
- Desktop layout tested.
- SEO metadata added.

---

# 118. DESIGN-TO-CODE PRINCIPLE

Every major design decision should have a corresponding implementation decision.

Example:

Design system:

8px spacing scale

↓

Tailwind implementation:

Use consistent spacing utilities based on the defined scale.

Design system:

Card radius

↓

Component:

ProjectCard uses the same radius.

Design system:

Button style

↓

Component:

Button uses shared styling.

---

# 119. DESIGN CONSISTENCY

Do not manually recreate:

- Buttons
- Cards
- Headings
- Tags
- Spacing
- Navigation
- Project layouts

if reusable components already exist.

Reuse the system.

---

# 120. CLAUDE CODE WORKFLOW

Claude Code should work from the project documentation.

Before coding:

1. Read all five docs.
2. Understand the current phase.
3. Inspect existing files.
4. Identify reusable components.
5. Make the smallest required change.
6. Run the project.
7. Check errors.
8. Test the change.
9. Report what changed.

---

# 121. CLAUDE CODE — DO NOT

Do not:

- Rewrite unrelated components.
- Replace the design system without approval.
- Add libraries without justification.
- Change approved content.
- Invent project information.
- Remove existing functionality without reason.
- Create duplicate components.
- Over-engineer simple features.
- Change architecture unnecessarily.

---

# 122. CLAUDE CODE — WHEN SOMETHING IS MISSING

If a requirement is unclear:

First check:

- 00-design-system.md
- 01-content.md
- 02-sitemap.md
- 03-wireframes.md
- 04-development-plan.md

If still unclear:

Ask for clarification rather than inventing an important design or content decision.

---

# 123. CLAUDE CODE — IMPLEMENTATION STYLE

Prefer:

- Simple components
- Readable JavaScript
- Clear naming
- Reusable data
- Small focused files
- Semantic HTML
- Responsive Tailwind classes
- Minimal dependencies

Avoid:

- Huge files
- Deeply nested abstractions
- Complex state management
- Unnecessary custom hooks
- Unnecessary libraries

---

# 124. CLAUDE CODE — AFTER EACH FEATURE

After implementing a feature:

1. Run linting.
2. Run build if appropriate.
3. Check browser.
4. Check mobile.
5. Fix errors.
6. Summarize changes.

Do not assume the code works simply because it was generated successfully.

---

# 125. BUILD VALIDATION

Before considering the website complete:

Run production build.

Confirm:

- No build errors.
- No broken routes.
- No missing imports.
- No missing images.
- No invalid metadata.
- No obvious accessibility errors.

---

# 126. FINAL WEBSITE QA

Review the entire site as three different visitors.

## Employer

Can I understand Kannan's professional capability?

Can I quickly find UX/UI work?

Can I see experience?

Can I download the resume?

## Freelance Client

Can I understand what Kannan can do for my business?

Can I see branding and visual work?

Can I understand design services?

Can I contact Kannan?

## Design / Development Reviewer

Can I see evidence of UX thinking?

Can I see UI quality?

Can I see design-system thinking?

Can I see frontend capability?

Can I understand the transition from design to development?

---

# 127. FINAL CONTENT QA

Verify:

- No placeholder text remains.
- No fake statistics.
- No fake project outcomes.
- No broken links.
- No incorrect job titles.
- No outdated resume.
- No inconsistent project names.
- No inconsistent category names.

---

# 128. FINAL DESIGN QA

Verify:

- Typography is consistent.
- Colors are consistent.
- Buttons are consistent.
- Spacing is consistent.
- Cards are consistent.
- Images are consistent.
- Navigation is consistent.
- Mobile layout is intentional.
- Animations are restrained.

---

# 129. FINAL DEVELOPMENT QA

Verify:

- No console errors.
- No build errors.
- No broken routes.
- No unnecessary dependencies.
- No duplicate components.
- No unnecessary client components.
- No exposed secrets.
- Images optimized.
- Responsive layout works.
- Accessibility reviewed.
- SEO reviewed.

---

# 130. LAUNCH CHECKLIST

Before launch:

[ ] Final content approved

[ ] Design system implemented

[ ] Homepage complete

[ ] Work page complete

[ ] Project pages complete

[ ] About complete

[ ] Services complete

[ ] Experience complete

[ ] Contact complete

[ ] Resume uploaded

[ ] Images optimized

[ ] Mobile tested

[ ] Desktop tested

[ ] Accessibility checked

[ ] SEO checked

[ ] Performance checked

[ ] Contact form tested

[ ] Social links tested

[ ] 404 page tested

[ ] Production build successful

[ ] Domain configured

[ ] Production deployment verified

---

# 131. POST-LAUNCH

After launch, the website should continue evolving.

Future additions may include:

- Completed seafood web app
- Completed yoga attendance app
- More UX/UI case studies
- Development case studies
- Additional client projects
- More freelance work
- New design experiments

Do not redesign the entire website every time a new project is added.

The component and data architecture should allow the portfolio to grow naturally.

---

# 132. FUTURE DEVELOPMENT ROADMAP

## Stage 1

Personal portfolio website

## Stage 2

Seafood restaurant web app

## Stage 3

Yoga attendance application

## Stage 4

Add completed applications to portfolio

## Stage 5

Create detailed design-to-development case studies

## Stage 6

Expand freelance portfolio

---

# 133. LONG-TERM POSITIONING

The website should gradually communicate:

UX/UI Designer

+

Visual / Brand Designer

+

Frontend Developer

+

Product Designer

+

Design-to-Code Professional

The development capability should be demonstrated through actual work rather than simply a list of technologies.

---

# 134. TECHNOLOGY PRESENTATION

Do not make the website primarily about technology.

Avoid a homepage section that looks like:

JavaScript ★★★★★
React ★★★★★
Next.js ★★★★☆
Tailwind ★★★★★

Instead demonstrate technology through projects.

Example:

Designed the experience

↓

Created the UI

↓

Built the frontend

↓

Deployed the product

This is stronger than skill ratings.

---

# 135. DEVELOPMENT STORY

The website should eventually tell this story:

"I started with design."

↓

"I developed strong UX/UI capability."

↓

"I continued learning frontend development independently."

↓

"I now use development knowledge to understand how designs become real products."

↓

"I am building complete digital experiences myself."

This should be reflected naturally throughout the portfolio.

---

# 136. FREELANCE POSITIONING

The website should support freelance work without making the portfolio feel like a generic agency website.

Present Kannan as:

An individual designer who can work across:

- Brand
- Visual Design
- UX/UI
- Web Design
- Frontend Development

The tone should remain personal and professional.

---

# 137. JOB POSITIONING

The website should also support job applications.

Recruiters should quickly find:

- Work
- Experience
- About
- Resume
- Contact

The website should not force recruiters to explore every page before understanding the profile.

---

# 138. DUAL-AUDIENCE PRINCIPLE

The website serves:

Employers

and

Freelance Clients

Therefore:

Employer-oriented information:

- Experience
- UX/UI work
- Resume
- Professional background

Client-oriented information:

- Services
- Brand work
- Visual work
- Web/app capability
- Contact

The homepage should provide clear paths for both.

---

# 139. FINAL ARCHITECTURE

The overall system should be:

DOCUMENTATION
↓
DESIGN SYSTEM
↓
CONTENT
↓
SITEMAP
↓
WIREFRAMES
↓
DEVELOPMENT PLAN
↓
NEXT.JS
↓
REUSABLE COMPONENTS
↓
PAGE TEMPLATES
↓
PROJECT DATA
↓
PAGES
↓
TESTING
↓
DEPLOYMENT

---

# 140. FINAL DEVELOPMENT PRINCIPLE

Build the website in a way that Kannan can understand and maintain.

The goal is not only to launch a beautiful portfolio.

The goal is for Kannan to learn through the process and eventually be able to say:

"I designed this website."

"I created the design system."

"I structured the UX."

"I built the UI."

"I developed the frontend."

"I deployed the website."

That complete design-to-development journey should become one of the strongest demonstrations of the profile.

---

# END OF DEVELOPMENT PLAN