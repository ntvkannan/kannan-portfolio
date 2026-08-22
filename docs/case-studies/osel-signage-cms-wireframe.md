# OSEL Signage CMS --- Case Study Wireframe

**Document:** `osel-signage-cms-wireframe.md`\
**Purpose:** Define the page structure, content hierarchy, visual
treatment, and screenshot sequence for the OSEL case study before UI
implementation.

**Source of truth:** - `docs/05-case-study-framework.md` -
`docs/case-studies/osel-signage-cms.md` - OSEL product PDF

------------------------------------------------------------------------

# 1. Wireframe Objective

The OSEL case study should communicate:

> **How a complex digital signage management product was structured into
> a coherent enterprise UX experience.**

The page should demonstrate:

-   UX thinking
-   Product understanding
-   Information architecture
-   Workflow design
-   Interaction design
-   UI craft
-   Enterprise-product complexity

The case study should **not** become a screenshot gallery.

The visual story should move from:

``` text
Product
  ↓
Challenge
  ↓
System
  ↓
Workflow
  ↓
Design Decisions
  ↓
Final Experience
  ↓
Outcome
```

------------------------------------------------------------------------

# 2. Page-Level Structure

``` text
01  HERO
        ↓
02  PROJECT OVERVIEW
        ↓
03  THE CHALLENGE
        ↓
04  MY ROLE
        ↓
05  UNDERSTANDING THE PRODUCT
        ↓
06  CORE WORKFLOW
        ↓
07  KEY DESIGN CHALLENGES
        ↓
08  ENTERPRISE ADMINISTRATION
        ↓
09  SUPPORTING EXPERIENCE
        ↓
10  OUTCOME
        ↓
11  REFLECTION
        ↓
12  NEXT PROJECT
```

------------------------------------------------------------------------

# 3. Section 01 --- Hero

## Purpose

Immediately establish the project, product type, and design role.

## Content

### Eyebrow

`CASE STUDY`

### Title

**OSEL Signage CMS**

### Subtitle

**Enterprise digital signage management platform**

### Supporting description

> A signage management experience designed to help users create, manage,
> schedule, and control digital signage content across displays.

### Metadata

``` text
ROLE
UX/UI Designer

TYPE
Enterprise SaaS / Signage Management

FOCUS
Content · Layouts · Scheduling · Displays
```

## Visual

Use one strong OSEL product visual.

### Preferred visual

A carefully cropped dashboard/product overview screenshot.

### Avoid

-   Multiple screenshots in the hero
-   Long project description
-   Excessive metadata
-   Decorative visuals unrelated to the product

------------------------------------------------------------------------

# 4. Section 02 --- Project Overview

## Purpose

Give enough context before introducing the challenge.

## Layout

Recommended:

``` text
┌───────────────────────────────┐
│ Project Overview              │
│                               │
│ Short project description     │
│                               │
│ Project details               │
└───────────────────────────────┘
```

## Content

Explain that OSEL is a digital signage management platform covering
areas such as:

-   Media
-   Layouts
-   Scheduling
-   Displays
-   Administration
-   Reporting

Keep this section short.

## Visual

No large screenshot required.

Use typography and metadata to keep the section lightweight.

------------------------------------------------------------------------

# 5. Section 03 --- The Challenge

## Purpose

Establish the central UX problem.

## Headline

### Designing for a complex signage-management ecosystem

## Content

> The challenge was to organize a broad set of signage-management
> capabilities into a coherent enterprise interface.

The product connects:

``` text
CONTENT
   ↓
LAYOUT
   ↓
SCHEDULE
   ↓
DISPLAY
   ↓
MONITOR
```

## Visual Treatment

This should be a **large conceptual diagram**, not a screenshot.

### Recommended design

A horizontal or vertical flow with five nodes:

``` text
Media
  →
Layout
  →
Schedule
  →
Display
  →
Monitoring
```

Use the portfolio design system.

## Important

This diagram represents the product structure visible in the source
material. It should not be presented as a documented user-research
finding.

------------------------------------------------------------------------

# 6. Section 04 --- My Role

## Purpose

Make personal contribution immediately clear.

## Layout

Use a compact metadata / responsibility section.

### Content

**UX/UI Designer**

Possible responsibilities supported by the project material:

-   UX structure
-   Information architecture
-   User flows
-   Wireframing
-   UI design
-   Interaction design
-   Enterprise management patterns
-   Layout creation
-   Scheduling
-   Display management
-   Permissions

Only include responsibilities confirmed by project information.

## Visual

No major screenshot.

Optional small UI detail or decorative product crop.

------------------------------------------------------------------------

# 7. Section 05 --- Understanding the Product

## Purpose

Show that the product is a connected system, not a set of independent
pages.

## Headline

### One platform, multiple connected workflows

## Visual

Create a four-layer ecosystem diagram.

``` text
┌───────────────────────────┐
│ CONTENT                   │
│ Media · Playlists         │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ EXPERIENCE                │
│ Layouts · Templates       │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ OPERATIONS                │
│ Schedules · Displays      │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ ADMINISTRATION             │
│ Users · Roles · Permissions│
└───────────────────────────┘
```

## Supporting copy

Keep it to 2--3 short paragraphs or short callouts.

Do not list every product feature.

## Optional screenshot

One subtle product screenshot can sit beside or below the diagram.

------------------------------------------------------------------------

# 8. Section 06 --- Core Workflow

## Purpose

This is the **main UX storytelling section**.

It should receive the strongest visual treatment on the page.

## Headline

### From content to display

## Introduction

Explain that the interface connects content creation and management with
layout configuration, scheduling, and display assignment.

## Workflow

``` text
01
MEDIA
Manage content
      ↓
02
LAYOUT
Create the visual structure
      ↓
03
SCHEDULE
Define when it runs
      ↓
04
DISPLAY
Assign where it runs
      ↓
05
MONITOR
Review operational status
```

## Visual Treatment

Use a large editorial sequence.

------------------------------------------------------------------------

# 9. Core Workflow --- Part A: Layout Creation

## Purpose

Demonstrate the strongest interaction-design work in the product.

The source shows a three-step New Layout workflow:

``` text
New Layout
    ↓
Choose Template
    ↓
Assign Media
```

## Visual sequence

### Screen 01

**New Layout**

Caption:

> Define the layout name and description before building the screen
> structure.

### Screen 02

**Choose Template**

Caption:

> Select a reusable template based on the required region structure and
> display format.

### Screen 03

**Assign Media**

Caption:

> Assign media to individual regions while keeping the layout structure
> and preview visible.

## Layout

Use a large horizontal 3-step sequence on desktop.

``` text
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ New Layout  │→ │ Template    │→ │ Assign Media│
│ screenshot  │  │ screenshot  │  │ screenshot  │
└─────────────┘  └─────────────┘  └─────────────┘
```

On mobile:

``` text
Screen 01
   ↓
Screen 02
   ↓
Screen 03
```

------------------------------------------------------------------------

# 10. Core Workflow --- Part B: Flexible Layouts

## Purpose

Show the complexity of configuring a multi-region signage layout.

## Headline

### Designing flexible screen compositions

## Content

The source shows layouts containing multiple regions with configurable
properties.

Relevant visible properties include:

-   Dimensions
-   Margin
-   Padding
-   Alignment
-   Background
-   Text color
-   Text size
-   Region content
-   Preview

## Visual

Use one large layout-builder screenshot.

Then use **2--3 zoomed detail crops**.

### Detail 01

Region structure

### Detail 02

Configuration controls

### Detail 03

Media assignment / preview

## Presentation

``` text
┌─────────────────────────────────────┐
│                                     │
│       LARGE LAYOUT BUILDER          │
│             SCREEN                  │
│                                     │
└─────────────────────────────────────┘

   Detail          Detail          Detail
  Region         Controls         Preview
```

This section should feel like a UX annotation, not a screenshot dump.

------------------------------------------------------------------------

# 11. Core Workflow --- Part C: Scheduling

## Purpose

Show how designed content becomes operational.

## Headline

### Turning layouts into scheduled experiences

## Workflow

``` text
LAYOUT
   +
TIME
   +
DISPLAY
   ↓
SCHEDULE
```

## Visual

Use the Schedule management screenshot as the main image.

Highlight / annotate:

-   Running
-   Upcoming
-   Expired
-   Date / time
-   Layout
-   Resolution
-   Display assignment

## Supporting copy

> The scheduling interface organizes active and future playback while
> exposing the information needed to understand where and when content
> will run.

Keep the statement grounded in what the interface visibly shows.

------------------------------------------------------------------------

# 12. Core Workflow --- Part D: Display Management

## Purpose

Complete the content-to-screen story.

## Headline

### Managing the connected displays

## Visual sequence

``` text
Display List
      ↓
Display Detail
      ↓
Assigned Schedule
      ↓
Status / Configuration
```

Use:

-   Display listing
-   Display detail

Do not use too many display screenshots.

## Layout

Large screenshot + small supporting screenshot.

------------------------------------------------------------------------

# 13. Section 07 --- Key Design Challenges

## Purpose

Turn the visual work into explicit UX thinking.

Use **three challenges**.

------------------------------------------------------------------------

## Challenge 01 --- Structuring a Complex Product

### Pattern

``` text
CHALLENGE
Product contains multiple connected management areas.

↓

DESIGN DECISION
Organize related capabilities into clear product areas.

↓

DESIGN OUTCOME
A coherent management structure across the platform.
```

### Visual

Use the product ecosystem diagram again at a smaller scale or use a
navigation/product screenshot.

Do not repeat the full hero visual.

------------------------------------------------------------------------

## Challenge 02 --- Supporting Flexible Layouts

### Pattern

``` text
CHALLENGE
Different signage experiences require different screen structures.

↓

DESIGN DECISION
Use templates, regions, media assignment and configuration controls.

↓

DESIGN OUTCOME
A flexible layout-building experience.
```

### Visual

Use the layout-builder screenshot.

This is the strongest challenge section and should receive the largest
visual treatment.

------------------------------------------------------------------------

## Challenge 03 --- Connecting Content to Operations

### Pattern

``` text
CHALLENGE
Content needs to become an operational playback experience.

↓

DESIGN DECISION
Connect layouts with schedules and displays.

↓

DESIGN OUTCOME
A clear path from designed content to scheduled playback.
```

### Visual

Use:

**Layout → Schedule → Display**

as a connected visual sequence.

------------------------------------------------------------------------

# 14. Section 08 --- Enterprise Administration

## Purpose

Demonstrate that the product also handles enterprise-level access and
administration.

## Headline

### Designing for roles and permissions

## Content

The source shows:

-   Roles
-   Permissions
-   Feature-level access
-   Admin
-   Authorizer
-   Publisher

## Visual

Use:

**Manage Permissions**

as the main screenshot.

Optionally show the role-management screen beside it.

## Layout

``` text
┌────────────────────────────┐
│                            │
│    PERMISSION MATRIX       │
│                            │
└────────────────────────────┘

Role management
   + 
Feature access
```

Keep this section shorter than the Layout Builder section.

------------------------------------------------------------------------

# 15. Section 09 --- Supporting Experience

## Purpose

Show breadth without distracting from the main story.

## Include

### Media Management

One strong screenshot.

### Reports / Proof of Play

One strong screenshot.

## Layout

Use a 2-column editorial grid on desktop.

``` text
┌────────────────────┐ ┌────────────────────┐
│ Media Management   │ │ Proof of Play      │
│ screenshot         │ │ screenshot         │
└────────────────────┘ └────────────────────┘
```

On mobile:

``` text
Media
  ↓
Reports
```

## Important

Do not create separate large sections for every product feature.

------------------------------------------------------------------------

# 16. Section 10 --- Outcome

## Purpose

Close the design story without inventing metrics.

## Headline

### A connected enterprise signage experience

## Content

> The resulting interface brings content management, layout creation,
> scheduling, display administration, permissions, and reporting into a
> connected signage-management experience.

## Optional supporting visual

Use a small ecosystem diagram:

``` text
Content
  →
Layout
  →
Schedule
  →
Display
  →
Monitor
```

## Evidence Rule

Do not include:

-   Conversion percentages
-   Time savings
-   Adoption numbers
-   Satisfaction scores
-   Revenue impact
-   User-growth claims

unless verified project evidence is added later.

------------------------------------------------------------------------

# 17. Section 11 --- Reflection

## Purpose

End with senior-level design thinking.

## Headline

### Designing the system, not just the screens

## Copy direction

> OSEL demonstrates how enterprise UX often depends on understanding
> relationships between different parts of a product. The challenge was
> not only designing individual interfaces, but making content, layouts,
> schedules, displays, and administration work as a coherent system.

## Final takeaway

> **Good enterprise UX makes complex relationships understandable.**

Keep this section short.

------------------------------------------------------------------------

# 18. Section 12 --- Next Project

## Purpose

Move the visitor naturally to another portfolio project.

## Layout

``` text
Previous Project          Next Project
                         →
                         Advocate Consultation
```

Or:

``` text
NEXT CASE STUDY

Advocate Consultation

Designing a focused consultation experience
for a professional service workflow.

[View Case Study →]
```

Use the existing portfolio project-card / navigation patterns where
possible.

------------------------------------------------------------------------

# 19. Overall Visual Rhythm

The page should alternate between:

``` text
TEXT
↓
DIAGRAM
↓
FULL-WIDTH SCREENSHOT
↓
TEXT + SCREENSHOT
↓
WORKFLOW
↓
LARGE SCREENSHOT
↓
ANNOTATED DETAILS
↓
SUPPORTING SCREENSHOTS
↓
OUTCOME
↓
REFLECTION
```

Avoid:

``` text
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
```

The page should feel editorial and intentional.

------------------------------------------------------------------------

# 20. Screenshot Hierarchy

## Priority 01 --- Highest

### Layout Builder

Largest visual treatment.

Reason:

It demonstrates actual interaction and configuration complexity.

------------------------------------------------------------------------

## Priority 02

### New Layout / Template / Assign Media

Use as the workflow sequence.

------------------------------------------------------------------------

## Priority 03

### Scheduling

Demonstrates operational connection.

------------------------------------------------------------------------

## Priority 04

### Display Management

Completes the workflow.

------------------------------------------------------------------------

## Priority 05

### Permissions

Demonstrates enterprise complexity.

------------------------------------------------------------------------

## Priority 06

### Media / Reports

Supporting evidence only.

------------------------------------------------------------------------

# 21. Screenshots to Avoid Overusing

Do not use large sections for:

-   Login
-   Registration
-   Password reset
-   Generic success dialogs
-   Generic forms
-   Customer lists
-   Subscription screens
-   Billing screens
-   Add-on screens

These screens may exist in the product source but do not strengthen the
central UX story.

------------------------------------------------------------------------

# 22. Desktop Wireframe

Approximate desktop structure:

``` text
┌─────────────────────────────────────────────────────┐
│ HEADER / CASE STUDY NAVIGATION                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│                 OSEL SIGNAGE CMS                    │
│        Enterprise digital signage platform          │
│                                                     │
│        Role / Type / Focus                          │
│                                                     │
│              [ HERO PRODUCT IMAGE ]                 │
│                                                     │
├─────────────────────────────────────────────────────┤
│ PROJECT OVERVIEW                                    │
│                                                     │
│ Short description             Metadata              │
│                                                     │
├─────────────────────────────────────────────────────┤
│ THE CHALLENGE                                      │
│                                                     │
│ Designing for a complex signage ecosystem           │
│                                                     │
│ CONTENT → LAYOUT → SCHEDULE → DISPLAY → MONITOR     │
│                                                     │
├─────────────────────────────────────────────────────┤
│ MY ROLE                                             │
│                                                     │
│ UX/UI Designer + responsibilities                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│ UNDERSTANDING THE PRODUCT                           │
│                                                     │
│ Content → Experience → Operations → Administration │
│                                                     │
├─────────────────────────────────────────────────────┤
│ CORE WORKFLOW                                       │
│                                                     │
│ From content to display                             │
│                                                     │
│ Media → Layout → Schedule → Display → Monitor      │
│                                                     │
├─────────────────────────────────────────────────────┤
│ LAYOUT CREATION                                     │
│                                                     │
│ [SCREEN] → [SCREEN] → [SCREEN]                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│ FLEXIBLE LAYOUTS                                    │
│                                                     │
│          [ LARGE LAYOUT SCREEN ]                    │
│                                                     │
│     [detail] [detail] [detail]                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│ SCHEDULING                                          │
│                                                     │
│ [ LARGE SCHEDULE SCREEN ]                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│ DISPLAY MANAGEMENT                                  │
│                                                     │
│ [DISPLAY LIST]       [DISPLAY DETAIL]              │
│                                                     │
├─────────────────────────────────────────────────────┤
│ KEY DESIGN CHALLENGES                              │
│                                                     │
│ 01 Structuring complexity                           │
│ 02 Flexible layouts                                 │
│ 03 Content → operations                             │
│                                                     │
├─────────────────────────────────────────────────────┤
│ ENTERPRISE ADMINISTRATION                           │
│                                                     │
│ [ PERMISSIONS SCREEN ]                              │
│                                                     │
├─────────────────────────────────────────────────────┤
│ SUPPORTING EXPERIENCE                               │
│                                                     │
│ [MEDIA]                    [REPORTS]                │
│                                                     │
├─────────────────────────────────────────────────────┤
│ OUTCOME                                             │
│                                                     │
│ Connected enterprise signage experience             │
│                                                     │
├─────────────────────────────────────────────────────┤
│ REFLECTION                                          │
│                                                     │
│ Designing the system, not just the screens          │
│                                                     │
├─────────────────────────────────────────────────────┤
│ NEXT PROJECT                                        │
│ Advocate Consultation →                             │
└─────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 23. Mobile Wireframe

The mobile experience should preserve the story but stack visual content
vertically.

``` text
Hero
 ↓
Overview
 ↓
Challenge
 ↓
Challenge Diagram
 ↓
My Role
 ↓
Product Ecosystem
 ↓
Core Workflow
 ↓
Layout Step 01
 ↓
Layout Step 02
 ↓
Layout Step 03
 ↓
Layout Builder
 ↓
Configuration Details
 ↓
Scheduling
 ↓
Display Management
 ↓
Design Challenges
 ↓
Permissions
 ↓
Supporting Screens
 ↓
Outcome
 ↓
Reflection
 ↓
Next Project
```

### Mobile principles

-   No side-by-side screenshots when unreadable
-   Large readable typography
-   Horizontal scrolling only where genuinely useful
-   Preserve workflow numbering
-   Keep captions close to screenshots
-   Maintain generous spacing

------------------------------------------------------------------------

# 24. Interaction / Motion

Motion should support comprehension.

Possible interactions:

-   Scroll reveal for workflow steps
-   Subtle image zoom on screenshot details
-   Hover treatment on project navigation
-   Sticky case-study section navigation if consistent with the
    portfolio

Avoid excessive animation.

Respect the existing reduced-motion rules in the portfolio design
system.

------------------------------------------------------------------------

# 25. Case Study Navigation

Recommended desktop behavior:

``` text
← Back to Work

OSEL Signage CMS

Overview
Challenge
Workflow
Design
Outcome
```

A compact sticky section navigation may be considered if it fits the
existing portfolio system.

Do not introduce a completely new navigation pattern without checking
the global design system.

------------------------------------------------------------------------

# 26. Content Density

The page should feel substantial but not overloaded.

### High-density areas

-   Layout Builder
-   Workflow
-   Design Challenges

### Medium-density areas

-   Product Ecosystem
-   Scheduling
-   Display Management
-   Permissions

### Low-density areas

-   Hero
-   Overview
-   My Role
-   Outcome
-   Reflection

This creates visual breathing room.

------------------------------------------------------------------------

# 27. Design System Requirements

The case-study page must use the existing portfolio design system.

Use existing:

-   Typography tokens
-   Color tokens
-   Spacing tokens
-   Container
-   Section
-   Button
-   Link
-   Image
-   Tag / Badge where appropriate

Do not create a separate visual language for the case study.

The case-study page should feel like part of the same portfolio.

------------------------------------------------------------------------

# 28. Asset Requirements

Before implementation, prepare:

``` text
OSEL
├── hero screenshot
├── layout-step-01
├── layout-step-02
├── layout-step-03
├── layout-builder
├── layout-detail-01
├── layout-detail-02
├── schedule
├── display-list
├── display-detail
├── permissions
├── media
└── proof-of-play
```

Actual asset filenames should be finalized after selecting and exporting
the source images.

Do not duplicate the same screenshot under multiple filenames.

------------------------------------------------------------------------

# 29. Implementation Boundary

This document is a **wireframe specification**, not a coding
specification.

Claude should not decide the case-study structure independently after
receiving this document.

Implementation should follow:

``` text
05-case-study-framework.md
          +
osel-signage-cms.md
          +
osel-signage-cms-wireframe.md
          ↓
Next.js implementation
```

The existing portfolio design system remains the visual source of truth.

------------------------------------------------------------------------

# 30. Final Wireframe Principle

The OSEL case study should tell one clear story:

> **OSEL is a complex digital signage platform. The design organizes
> that complexity into connected workflows that move from content to
> layout, from layout to schedule, and from schedule to display ---
> while supporting enterprise administration.**

The strongest proof of the design work should be the **Layout Builder +
Scheduling + Display workflow**.

Everything else should support that story.
