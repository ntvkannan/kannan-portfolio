# School ERP — Case Study Wireframe

**Purpose:** Define visual storytelling, section hierarchy, screenshot sequence, and responsive behavior for the School ERP case study page.

**Based on:**
- evidence-audit.md
- school-erp.md
- Portfolio case-study framework

**Status:** Wireframe (implementation follows)

---

## PART 1: NARRATIVE ARC

### Core Story

**Designing a unified UX for a new School ERP**

Translating complex school-management requirements into a connected enterprise experience across admissions, administration, academics, operations, and reporting.

### Story Flow

1. **Context** — Company wants to build new School ERP; complexity is the challenge
2. **Approach** — Requirements → workflows → UX → visual design → approval → handoff
3. **Complexity Management** — How broad requirements were structured
4. **Primary Workflow** — Lead → Enrollment pipeline demonstrates workflow design
5. **Information Architecture** — Multiple domains organized coherently
6. **Role-Aware Design** — Different users, different experiences
7. **UI Craft** — Consistent patterns across modules
8. **Outcome** — Design approved and handed to development
9. **Reflection** — What the project demonstrates

### Visual Progression

- Hero (single strong visual)
- Diagram (information architecture)
- Large screenshot (admissions workflow)
- Detailed analysis (complex form)
- Role visualization
- Supporting workflows
- Design decisions
- Outcome

**Principle:** Alternate between narrative explanation and visual evidence. Never more than 3 consecutive screenshots without narrative context.

---

## PART 2: PAGE STRUCTURE & WIREFRAME

### Section 01: HERO

**Component Type:** Full-width hero section

**Layout:**

```
┌─────────────────────────────────────────────┐
│                                             │
│    EYEBROW: Professional UX/UI             │
│                                             │
│    TITLE:                                   │
│    Designing a unified UX for a new        │
│    School ERP                              │
│                                             │
│    DESCRIPTION (max 2 lines):              │
│    Translating complex school-management   │
│    requirements into a connected enterprise│
│    experience across admissions,           │
│    academics, and operations.              │
│                                             │
│    METADATA ROW:                            │
│    Role: UX/UI Designer                     │
│    Type: Education Management Platform      │
│    Scope: Complete UX/UI Design             │
│                                             │
│                                             │
│    ┌─────────────────────────────────┐     │
│    │                                 │     │
│    │    HERO VISUAL (single screen)   │     │
│    │                                 │     │
│    │    ← home.pdf or admin-master   │     │
│    │      (TBD - strongest overview) │     │
│    │                                 │     │
│    └─────────────────────────────────┘     │
│                                             │
└─────────────────────────────────────────────┘
```

**Hero Visual Candidates:**

| Candidate | Source | Reasoning | Redaction |
|---|---|---|---|
| **Dashboard** | home.pdf | Best product overview, shows breadth | Review for personal data |
| **Admin Master** | Admin-Master.pdf | System administration, visual impact | Review for personal data |
| **Lead List** | Lead.pdf | Core workflow, good hierarchy | Review for names |

**Recommended:** home.pdf (Dashboard) — Shows product breadth and entry point

**Desktop:** Full width image  
**Tablet:** Responsive image 100% width  
**Mobile:** Full-bleed image, scales down  

---

### Section 02: PROJECT OVERVIEW

**Component Type:** Metadata + brief context

**Layout:**

```
┌────────────────────┬─────────────────────┐
│ ROLE               │ UX/UI Designer      │
├────────────────────┼─────────────────────┤
│ SCOPE              │ End-to-end School   │
│                    │ ERP UX/UI Design    │
├────────────────────┼─────────────────────┤
│ PROCESS            │ Requirements →      │
│                    │ User flows → UX →   │
│                    │ Visual design →     │
│                    │ Feedback → Handoff  │
├────────────────────┼─────────────────────┤
│ DELIVERABLE        │ High-fidelity       │
│                    │ screen designs      │
└────────────────────┴─────────────────────┘

BRIEF CONTEXT (2-3 sentences):

The company wanted to build a new School ERP—a system to manage the
many workflows schools operate: admissions, student enrollment,
academics, finance, and operations. My responsibility was to design
the complete user experience and interface, translating requirements
into a coherent, multi-role system.
```

**Grid Behavior:**
- Desktop: 2×2 grid (key: value pairs)
- Tablet: 2 columns, 4 rows
- Mobile: Single column, 4 rows

---

### Section 03: UNDERSTANDING THE CHALLENGE

**Component Type:** Text + simple product ecosystem diagram

**Layout:**

```
TEXT (left/top):

The design challenge was to structure a complex product spanning multiple
areas of school operations—admissions, academics, finance, administration,
and reporting—into a coherent, navigable system that would serve different
user roles (administrators, teachers, school staff, families) with distinct
needs and workflows.

Rather than viewing this as separate, disconnected modules, the design
treated it as a unified system: how do these workflows connect? How does
information flow between admissions, academics, and finance? How does
each role see the same underlying data differently?

PRODUCT AREAS DIAGRAM (right/bottom, simple tree):

         School ERP
         │
    ┌────┬────┬────┬────┬─────┐
    │    │    │    │    │     │
 Admissions │Academics │Admin │Finance│Reporting
   │    │    │    │    │     │
   ├─Leads │Classes │Users │Fee│Lead Report
   │       │        │      │Config│
   ├─Registration │Teachers │Roles  │  │Enrollment
   │              │        │       │  │Report
   └─Enrollment   │Online  │Inv. │  │  │
                  │Sessions│Mgmt │  │  │...
                  └─────────┴─────┴──┘
```

**Visual Approach:**
- Simple tree/taxonomy (not fancy, not busybox)
- Shows logical grouping
- Demonstrates breadth
- Clear parent-child relationships

**Grid Behavior:**
- Desktop: 50/50 split (text left, diagram right)
- Tablet: Stacked (text, then diagram full width)
- Mobile: Stacked, diagram scaled to fit

---

### Section 04: INFORMATION ARCHITECTURE

**Component Type:** Information architecture diagram (IA visualization)

**Layout:**

```
┌─────────────────────────────────────────────┐
│  INFORMATION ARCHITECTURE                   │
│                                             │
│  How the product structures multiple areas  │
│  of school management into one system.      │
│                                             │
│  [Detailed IA Diagram - see below]         │
│                                             │
│  This structure organizes workflows for     │
│  different roles (admin, teachers, school  │
│  staff) around their core responsibilities.│
└─────────────────────────────────────────────┘

DETAILED IA (tree structure):

School ERP
├── Home / Dashboard
│   └── Overview, activity, quick actions
│
├── Admissions / Lead Management
│   ├── Leads
│   ├── Registration
│   └── Enrollment
│
├── People & Roles
│   ├── Students
│   ├── Families / Guardians
│   ├── Users / Staff
│   └── Role Management
│
├── Academic Operations
│   ├── Classes / Classrooms
│   ├── Teacher Assignments
│   └── Online Sessions
│
├── Financial Management
│   ├── Fee Configuration (Admin)
│   └── Fee Management (School)
│
├── Administration
│   ├── Admin Controls
│   ├── User Invitations
│   └── Email Templates
│
├── Operations
│   ├── Tasks
│   ├── Appointments
│   └── Events
│
└── Reporting
    ├── Admissions Reports
    ├── Enrollment Reports
    └── Financial Reports
```

**Visual Style:**
- Tree diagram with consistent indentation
- Clear parent-child hierarchy
- Brief descriptions for each module
- Professional, not decorative

**Grid Behavior:**
- Desktop: Full-width diagram with adequate padding
- Tablet: Full-width, font scales down appropriately
- Mobile: Full-width, tree remains readable (no horizontal scroll)

---

### Section 05: THE ADMISSIONS WORKFLOW — PRIMARY NARRATIVE

**Component Type:** Large workflow visualization + screenshot sequence

**Purpose:** This is the MAIN visual story. Demonstrates workflow design and complex information capture.

**Layout:**

```
┌──────────────────────────────────────────────────────────┐
│  THE ADMISSIONS WORKFLOW                                 │
│                                                          │
│  Lead → Registration → Enrollment                       │
│                                                          │
│  This workflow represents how a prospect becomes a      │
│  student in the system—a three-stage pipeline that      │
│  captures progressive information and moves the         │
│  prospect through qualification stages.                 │
│                                                          │
│  WORKFLOW DIAGRAM (simple flow):                        │
│                                                          │
│   ┌─────────┐    ┌──────────────┐    ┌──────────────┐ │
│   │  LEAD   │───→│ REGISTRATION │───→│ ENROLLMENT   │ │
│   └─────────┘    └──────────────┘    └──────────────┘ │
│                                                          │
│   • Prospect    • Student details  • Official        │
│   • Lead info   • Guardian info    • Confirmation    │
│   • Status      • Program/year     • Fee assignment  │
│   • Assignment  • Address          • Communication   │
│                                                          │
└──────────────────────────────────────────────────────────┘

STAGE 1: LEAD MANAGEMENT

TEXT (left/top):

In the Lead stage, prospect information is captured, organized, and
tracked. Each lead represents a potential student and is managed by
school staff. Leads can be searched, filtered, assigned to staff members,
and tracked through their status (interested, contacted, qualified, etc.).

The design needed to display many leads in a scannable list while
maintaining access to detailed information and common actions like
assigning leads or converting to enrollment.

SCREENSHOT (right/below, large):

Lead list view from Lead.pdf
- Shows list with columns (name, program, date, contact, assigned, status)
- Demonstrates search/filter controls
- Shows action buttons
- Clear hierarchy and readability

[Lead.pdf, page TBD - Lead List View]

─────────────────────────────────────────

STAGE 2: REGISTRATION & COMPLEX INFORMATION CAPTURE

TEXT (left/top):

The Registration stage captures detailed student and family information.
This is where the information density challenge becomes apparent: the
system needs to collect student details (name, date of birth, program,
academic year, language, nationality) AND guardian information (names,
relationships, contact details, address).

Showing all fields at once would overwhelm the user. The design approach
was to organize information into logical groups, separate student from
guardian information, and provide progressive disclosure ("Show all
fields") to access optional/advanced fields.

SCREENSHOT (right/below, large):

Lead/Student + Guardian form from Enrollment.pdf
- Shows student information section
- Shows guardian information section
- Highlights field grouping by relationship
- Shows progressive disclosure pattern
- Clear section headers and hierarchy

[Enrollment.pdf, page TBD - Student + Guardian Form]

[Optional: Callout annotations showing]:
- Student Information Section
- Guardian Information Section
- "Show all fields" pattern
- Related fields per row
- Required field indication

─────────────────────────────────────────

STAGE 3: ENROLLMENT & CONFIRMATION

TEXT (left/top):

The Enrollment stage represents official admission to the system. The
prospect becomes a recorded student. Guardian confirmation occurs, fees
are assigned based on the student's program/year, and initial
communication (email notification) is sent.

This stage completes the workflow and integrates with downstream systems
(financial management, class assignment, etc.).

SCREENSHOT (right/below):

Enrollment confirmation/details view from Enrollment.pdf
- Shows enrollment record with student + guardian summary
- Demonstrates state transition
- Shows assigned fee structure

[Enrollment.pdf, page TBD - Enrollment Summary]

──────────────────────────────────────────

WORKFLOW SUMMARY:

This three-stage workflow demonstrates how requirements translate into
structured workflows. Each stage captures specific information, moves the
prospect forward, and connects to downstream operations (academics,
finance, communications).
```

**Visual Approach:**
- Simple, clear workflow diagram (not decorative)
- Three connected boxes showing progression
- Key information captured at each stage listed below
- Large screenshots showing actual design
- Captions explain what you're seeing
- Annotations (callouts) on complex screenshot

**Desktop Behavior:**
- Workflow diagram at top (100% width)
- Alternating left-text/right-image layout for each stage
- Large screenshots (70-80% of column width)
- Captions below screenshots

**Tablet Behavior:**
- Workflow diagram full width
- Text and images stack (text, then image)
- Screenshots scale to 100% width
- Maintains readability

**Mobile Behavior:**
- Workflow diagram stacks vertically, remains readable
- Single column: text, then full-width screenshot
- Responsive image scaling
- Captions remain readable
- Adequate spacing between sections

---

### Section 06: MANAGING INFORMATION DENSITY

**Component Type:** Annotated screenshot with callouts

**Purpose:** Detailed analysis of one key design challenge and solution

**Layout:**

```
TEXT (above):

DESIGNING COMPLEX FORMS

The student + guardian information form demonstrates a key design
challenge: how to capture substantial, interconnected information
without overwhelming the user.

The form collects:
- Student information (name, birth date, program, academic year, language, nationality)
- Guardian/family information (names, relationships, contact details, address)
- Registration metadata (lead source, assigned staff, status)

The design approach organized this information using several patterns:

DESIGN PATTERNS VISIBLE (listed):

✓ Grouping by Semantic Relationship
  Student information is grouped together. Guardian information is a
  separate section. Registration metadata in a third section. This
  creates visual organization.

✓ Progressive Disclosure
  Core fields visible by default. Advanced/optional fields behind
  "Show all fields" or expandable sections. Users see what they need;
  optional information is accessible without cluttering.

✓ Consistent Field Structure
  Labels above fields, consistent input styling, consistent spacing.
  Related fields placed on same row (first name, last name together).

✓ Clear Section Headers
  Visual separators and headers distinguish groups. Users can quickly
  scan and find information they need.

✓ Required Field Indication
  Clear marking of required vs. optional fields.

ANNOTATED SCREENSHOT:

[Large screenshot from Enrollment.pdf]

With visual callouts pointing to:
1. "Student Information Section" → shows student fields grouped
2. "Guardian Information Section" → shows separate guardian group
3. "Show all fields" control → progressive disclosure pattern
4. "Related fields per row" → first name, last name together
5. "Section hierarchy" → clear visual distinction between sections

Caption: Student + Guardian form showing information-density management
through grouping, hierarchy, and progressive disclosure.
```

**Visual Style:**
- One large screenshot with 4-5 annotated callouts
- Callout arrows pointing to specific UI elements
- Brief explanatory text for each callout
- Organized and professional, not cluttered

**Behavior:**
- Desktop: Screenshot 60-70% width with callouts, text explanations on side
- Tablet: Full-width screenshot, callouts visible, text below
- Mobile: Full-width screenshot, callouts simplified (fewer arrows), text below

---

### Section 07: ROLE-AWARE EXPERIENCE

**Component Type:** Role visualization + supporting screenshots

**Layout:**

```
TEXT (above):

DESIGNING FOR DIFFERENT ROLES

A school has many types of users with different responsibilities and
information needs:

- Administrators: Manage users, configure fees, oversee system
- School/Center Staff: Manage local students, apply fees, track operations
- Teachers: Manage classes, schedule online sessions, view student rosters
- Families: Participate in enrollment, view student status

Each role needs a focused experience. Rather than one complex interface
serving all roles, the design provided distinct workflows for distinct
responsibilities.

ROLE MAP (simple visualization):

┌─────────────┐        ┌──────────────────┐
│ ROLE        │  ────→ │ KEY RESPONSIBILITY│
├─────────────┼────────┼──────────────────┤
│ Admin       │        │ User & Config Mgmt│
├─────────────┼────────┼──────────────────┤
│ School      │        │ Local Student Mgmt│
├─────────────┼────────┼──────────────────┤
│ Teacher     │        │ Class Operations  │
├─────────────┼────────┼──────────────────┤
│ Family      │        │ Enrollment/Status │
└─────────────┴────────┴──────────────────┘

EXAMPLE: FEE STRUCTURE (Dual View)

The fee structure demonstrates role-aware design. Admins need to
CONFIGURE fees (what programs, what amounts, what structure). Schools
need to VIEW and APPLY fees (which students owe what).

Two separate modules, two different purposes, same underlying data.

ADMIN VIEW                      │ SCHOOL VIEW
┌──────────────────────┐        │ ┌──────────────────────┐
│ Fee Configuration    │        │ │ Student Fee Structure │
│ • Programs           │        │ │ • Students           │
│ • Fee amounts        │        │ │ • Assigned fees      │
│ • Structures         │        │ │ • Payment status     │
│ • System-wide config │        │ │ • School perspective │
└──────────────────────┘        │ └──────────────────────┘

SUPPORTING SCREENSHOTS:

[Admin Fee Structure screenshot]  [School Fee Structure screenshot]

Caption: Same domain (fees), different roles, different interfaces.
Admin configures policy; school executes policy.
```

**Visual Approach:**
- Simple role table (role → responsibility)
- Parallel visualization showing how same data serves different roles
- Two side-by-side screenshots (admin view / school view)
- Clear labels and captions

**Behavior:**
- Desktop: Two screenshots side by side for comparison
- Tablet: Stacked (admin screenshot, then school screenshot)
- Mobile: Single column, full-width screenshots, stacked

---

### Section 08: SUPPORTING WORKFLOWS

**Component Type:** Overview of other key workflows (Academic + Operations)

**Purpose:** Show breadth without distracting from main story

**Layout:**

```
TEXT (above):

BEYOND ADMISSIONS: ACADEMIC & OPERATIONAL WORKFLOWS

While admissions is the primary revenue workflow, the system supports
ongoing academic and operational management.

ACADEMIC OPERATIONS

Classrooms and Online Sessions structure how academic instruction
happens:

├── Classroom Management
│   └── Class/section information, student rosters, teacher assignments
│
└── Online Sessions
    └── Scheduling and conducting remote classes within a subject/class

[Supporting screenshot from Class-Room.pdf or Online-Session.pdf]

OPERATIONS & TASKS

The system also tracks ongoing operational activities:

├── Tasks
│   └── Assignment and tracking of school operations tasks
│
├── Appointments
│   └── Scheduling for staff and student-related activities
│
└── Activity Stream
    └── Cross-system view of recent actions and changes

[Supporting screenshot showing dashboard/activity feed]

These workflows, while less visually complex than admissions,
demonstrate the system's breadth and the challenge of organizing
many distinct, interconnected workflows within one product.
```

**Visual Approach:**
- Brief explanatory text
- Simple lists (not fancy)
- One supporting screenshot per workflow area
- Not detailed; supporting evidence only

**Behavior:**
- Desktop: Text left, screenshots arranged right or below
- Tablet: Text, then screenshots stacked
- Mobile: Single column, text and screenshots

---

### Section 09: VISUAL & UI CONSISTENCY

**Component Type:** Pattern showcase (no new screenshots; reference existing)

**Purpose:** Show UI craft without turning into design-system page

**Layout:**

```
TEXT (above):

CONSISTENT UI PATTERNS ACROSS MODULES

The system spans many modules and workflows. To make it feel like one
coherent product rather than disconnected tools, consistent UI patterns
were applied throughout:

OBSERVED PATTERNS:

Navigation & Information Hierarchy
├── Consistent breadcrumbs showing context
├── Role-aware module navigation
└── Clear visual hierarchy (headings, subheadings)

Lists & Tables
├── Consistent search and filter controls
├── Consistent column sorting
├── Consistent action buttons (edit, assign, etc.)
└── Status indicators with consistent styling

Forms & Information Capture
├── Consistent field labeling and spacing
├── Grouped related fields
├── Progressive disclosure for optional fields
└── Clear required field indication

Status & State
├── Consistent color coding for status
├── Consistent state transitions
└── Clear visual indication of system states

Cards & Information Display
├── Consistent card styling and spacing
├── Consistent typography and hierarchy
└── Consistent use of color and emphasis

Buttons & Controls
├── Consistent button sizing and styling
├── Primary/secondary action distinction
└── Consistent hover and active states

PATTERN EXAMPLES (not new screenshots, but references):

"Search and filter patterns appear consistently in Lead.pdf, Enrollment.pdf,
Class-Room.pdf, and other module list views. Once a user learns to filter
leads, they can immediately apply the same approach to other lists."

"Field grouping and progressive disclosure visible in the Student +
Guardian form (Enrollment.pdf) are applied consistently across other
complex forms throughout the system."

These patterns create a sense of unity and reduce the cognitive load
for users navigating between modules.
```

**Visual Approach:**
- Explanatory text only (no new screenshots needed)
- References existing screenshots for evidence
- Organized list of pattern categories
- Demonstrates UI craft through pattern recognition

**Behavior:**
- Desktop: Full-width text, readable measure (50-70 chars)
- Tablet: Full-width text, responsive font sizing
- Mobile: Full-width text, single column

---

### Section 10: KEY DESIGN DECISIONS

**Component Type:** Decision cards (3-5 key decisions)

**Purpose:** Show design thinking concisely

**Layout:**

```
TEXT (above):

KEY DESIGN DECISIONS

The design demonstrates several important decisions about how to structure
and present the ERP:

DECISION 1: STRUCTURING THE ADMISSIONS PIPELINE

Challenge
→ How do we move a prospect from initial interest to confirmed student
  while capturing progressive information?

Decision
→ Organize the workflow into three distinct stages (Lead, Registration,
  Enrollment) with specific information captured and actions taken at
  each stage.

Evidence
→ Lead.pdf, Lead-Enrollment.pdf, Enrollment.pdf show three-stage
  workflow with role-based participation at each stage.

─────────────────────────────────────────

DECISION 2: PROGRESSIVE DISCLOSURE FOR COMPLEX FORMS

Challenge
→ How do we capture substantial student and family information without
  overwhelming the form?

Decision
→ Show essential fields by default. Provide "Show all fields" control
  to access optional/advanced fields.

Evidence
→ Enrollment.pdf shows student form with expandable sections and
  progressive disclosure pattern.

─────────────────────────────────────────

DECISION 3: ROLE-BASED MODULE SEPARATION

Challenge
→ How do we serve admins (who configure) and school staff (who operate)
  with the same underlying data?

Decision
→ Create separate modules for different roles. Admin Fee Configuration
  vs. School Fee Management. Same domain, different purposes.

Evidence
→ Fee Structure-admin.pdf vs. Student Fee Structure - School.pdf show
  parallel modules optimized for different responsibilities.

─────────────────────────────────────────

DECISION 4: CONSISTENT NAVIGATION & LIST PATTERNS

Challenge
→ How do we make a complex multi-module system feel like one coherent
  product?

Decision
→ Use consistent navigation patterns, list structures (search, filter,
  actions), and form patterns across all modules.

Evidence
→ Lead.pdf, Class-Room.pdf, and other modules show consistent search,
  filter, and action-button patterns.

─────────────────────────────────────────

DECISION 5: DASHBOARD AS UNIFIED ENTRY POINT

Challenge
→ How do users quickly understand what needs attention across many
  different modules?

Decision
→ Provide a dashboard that aggregates recent activity, upcoming tasks,
  and quick-action shortcuts across the system.

Evidence
→ home.pdf shows dashboard bringing together cross-domain operational
  information.
```

**Visual Style:**
- Challenge → Decision → Evidence structure
- Concise language
- Evidence tied to source PDFs
- No new screenshots (references existing)

**Behavior:**
- Desktop: Full-width cards, readable measure
- Tablet: Full-width cards, adapt to width
- Mobile: Single column, full-width cards

---

### Section 11: THE DESIGN PROCESS

**Component Type:** Process flow diagram + brief text

**Purpose:** Clarify what was actually done

**Layout:**

```
TEXT (above):

FROM REQUIREMENTS TO DESIGN

My process for designing School ERP was:

Manager/Stakeholder Requirements
     ↓
Requirements Analysis
     ↓
Workflow Exploration (User Flows)
     ↓
UX Design (Information Architecture, Layout)
     ↓
Visual/UI Design (High-fidelity Screens in Illustrator)
     ↓
Design Review & Feedback
     ↓
Refinement
     ↓
Manager Approval
     ↓
Developer Handoff

This was a requirements-driven design process. Rather than starting with
user research or personas, I analyzed the manager's requirements,
translated them into workflows and user flows, and designed interfaces
to support those workflows.

The manager reviewed designs, provided feedback, and approved the final
direction. The complete design set—organized page-by-page to show
workflows—was handed to the development team.

The design was created in Illustrator. This was not an interactive
prototype, but a series of high-fidelity screen designs representing
the intended product workflow.
```

**Visual Approach:**
- Simple, linear process flow (7-8 steps)
- Emphasizes actual process, not idealized process
- Clear handoff point at end
- Honest about method (requirements-driven, not research-driven)

**Behavior:**
- Desktop: Centered flow diagram
- Tablet: Full-width flow
- Mobile: Vertical flow (steps stack)

---

### Section 12: OUTCOME & REFLECTION

**Component Type:** Outcome statement + brief reflection

**Layout:**

```
OUTCOME

Manager Approval ✓
Design Handoff to Development ✓

The final high-fidelity design was approved and provided to the
development team as the blueprint for implementation.

No measurable outcomes (adoption, efficiency improvements, time savings,
etc.) are available. The design phase is complete; operational results
depend on implementation quality and real-world usage.

─────────────────────────────────────────

REFLECTION: WHAT THIS PROJECT DEMONSTRATES

This project demonstrates the design thinking required to create a
unified experience across a complex enterprise product:

• Systems Thinking — Managing complexity across many interconnected
  workflows and data domains by creating strong structure and
  consistent patterns.

• Workflow Design — Translating broad requirements into coherent,
  step-by-step workflows that guide users through complex processes.

• Information Architecture — Organizing many modules, roles, and data
  types into a structure that feels navigable and coherent.

• Information Density Management — Balancing complete information
  capture with usable interfaces through grouping, hierarchy, and
  progressive disclosure.

• Role-Aware Design — Designing different experiences for different
  user types without creating fragmented, disconnected products.

• Design Consistency — Using consistent UI patterns, navigation, and
  visual language across many modules to create unity.

• Requirements Translation — Understanding what a business needs to
  accomplish and designing interfaces that support those needs.
```

**Visual Approach:**
- Statement of fact (outcome)
- Bulleted reflection points
- Professional, grounded tone
- No invented impact claims

**Behavior:**
- Desktop: Full-width text, readable measure
- Tablet: Full-width text
- Mobile: Single column, readable font

---

### Section 13: NEXT PROJECT NAVIGATION

**Component Type:** Project navigation (consistent with portfolio)

**Layout:**

```
┌──────────────────────────────────────────┐
│  NEXT CASE STUDY                         │
│                                          │
│  ← Previous: [Project Name]             │
│  Next: [Project Name] →                 │
│                                          │
│  [or]: View All Work →                  │
└──────────────────────────────────────────┘
```

**Behavior:** Use existing portfolio navigation patterns. Do not create new behavior.

---

## PART 3: RESPONSIVE GRID BEHAVIOR

### Desktop (1200px+)

- Hero: Full width, image 100% of content area
- Project Overview: 2-column grid (key/value)
- Sections: Mix of full-width and 50/50 layouts
- Workflow section: 60/40 split (text left, image right) alternating
- Supporting sections: Full-width text with images below
- Minimum text measure: 500px (prevents line length issues)

### Tablet (768px - 1199px)

- Hero: Full width, image scales responsively
- Project Overview: Single column, key/value pairs stack
- Sections: Responsive stacking (text above/left, images scale to 100%)
- Workflow section: Stacked (text, then image full-width)
- Images scale to 100% of column width
- Adequate gutters maintained (16px minimum)
- Text remains readable

### Mobile (<768px)

- Hero: Full bleed, image scales to 100% viewport width
- Project Overview: Single column, full width
- Sections: Single column, full-width text and images
- Workflow section: Single column, image full width
- Large images may exceed viewport width; horizontal scroll allowed but discouraged
- Adequate vertical spacing between sections (32px)
- Text: 16px minimum, single-column measure

---

## PART 4: SCREENSHOT AUDIT & SELECTION

### Screenshot Inventory

| Priority | Screen Type | Source File | Page | Screen Name | Purpose | Redaction |
|---|---|---|---|---|---|---|
| **P1** | Dashboard | home.pdf | TBD | Home/Dashboard | Hero visual, product overview | Review for names/emails |
| **P1** | Lead List | Lead.pdf | TBD | Lead Management List | Core workflow, demonstrates list patterns | Redact student names |
| **P1** | Lead Form | Enrollment.pdf | TBD | Student + Guardian Form | Information density example | Redact all personal data |
| **P1** | Admin Fee | Fee Structure-admin.pdf | TBD | Fee Configuration | Role-aware design (admin view) | Safe |
| **P2** | School Fee | Student Fee Structure - School.pdf | TBD | Fee Application | Role-aware design (school view) | Safe |
| **P2** | Admin Dash | Admin-Master.pdf | TBD | Admin Dashboard | System administration | Safe |
| **P2** | Class | Class-Room.pdf | TBD | Classroom Management | Academic operations | Redact student names |
| **P3** | Online Sess | Online-Session.pdf | TBD | Online Session | Advanced feature | Redact student names |
| **P3** | Reports | Report.pdf | TBD | Reports Interface | Reporting/Analytics | Redact student names |

### Selection Strategy

**Must Include (P1 — Essential):**
- Dashboard (hero)
- Lead list (core workflow)
- Student + Guardian form (information density)
- Admin/School fee comparison (role-based design)

**Should Include (P2 — Supporting):**
- Admin dashboard (system breadth)
- Classroom management (academic operations)

**May Include (P3 — Optional):**
- Online sessions (advanced feature)
- Reports (additional breadth)

**Total recommended:** 6-8 unique screenshots (not 15+)

---

## PART 5: PRIVACY & REDACTION PLAN

### Screenshots Requiring Redaction

**Student Names:**
- Lead.pdf (student names in list)
- Enrollment.pdf (student names in form)
- Class-Room.pdf (student names in roster)
- Online-Session.pdf (student names)
- Report.pdf (student names in report data)

**Guardian/Family Names:**
- Enrollment.pdf (guardian names in form)
- Family.pdf (family names)

**Contact Information:**
- Enrollment.pdf (emails, phone numbers)
- Family.pdf (contact details)

**Personal Data:**
- Date of birth fields (where visible)
- Address fields (where visible)
- ID numbers (where visible)

### Redaction Approach

**Do Not Modify Source PDFs**

The implementation phase will:
1. Crop/zoom relevant portions of screenshots
2. Blur or redact names/personal data
3. Create presentation-ready versions
4. Link to redacted assets in case-study page

**Safe Screenshots** (no modification needed):
- Dashboard/home view (generic data)
- Admin Fee Configuration
- System-wide views (no student personal data)
- Navigation/structure views

---

## PART 6: VISUAL RHYTHM & PACING

### Rhythm Pattern

Ideal page flow alternates:

```
1. Hero (visual)
2. Metadata (text)
3. Product overview (diagram)
4. IA diagram (visual)
5. Workflow text (text)
6. Lead list screenshot (visual)
7. Registration form explanation (text)
8. Form screenshot (visual)
9. Enrollment explanation (text)
10. Enrollment screenshot (visual)
11. Role-aware text (text)
12. Dual fee structure (visual)
13. Supporting workflows (text + supporting visual)
14. Design patterns (text, no new image)
15. Design decisions (text + references)
16. Process flow (visual)
17. Outcome + reflection (text)
18. Navigation (minimal)
```

**Principle:** Vary between text-heavy sections and visual-heavy sections. Never more than 2 consecutive large images without explanatory text.

---

## PART 7: DESKTOP WIREFRAME (ASCII)

```
┌─────────────────────────────────────────────────────────────┐
│ 01. HERO SECTION (Full width)                               │
│                                                              │
│ Eyebrow / Title / Description / Metadata                    │
│                                                              │
│ ┌──────────────────────────────────────────────────────┐   │
│ │                                                      │   │
│ │              DASHBOARD SCREENSHOT                   │   │
│ │           (Main visual, ~80% width)                │   │
│ │                                                      │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 02. PROJECT OVERVIEW (2-column grid)                        │
│                                                              │
│ ROLE: UX/UI Design  │  SCOPE: End-to-end ERP               │
│ PROCESS: Req → UX   │  DELIVERABLE: Hi-Fi Screens          │
│                                                              │
│ Brief context text...                                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 03. UNDERSTANDING THE CHALLENGE                             │
│                                                              │
│ TEXT (left, ~45%)      │  PRODUCT ECOSYSTEM                │
│                        │  DIAGRAM (right, ~45%)            │
│                        │                                    │
│ Challenge explanation  │  [Simple tree showing 5-7          │
│ ...                    │   main areas: Admissions,          │
│                        │   Academics, Finance, etc]        │
│                        │                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 04. INFORMATION ARCHITECTURE (Full width)                   │
│                                                              │
│ Simple tree/hierarchy diagram showing product structure     │
│                                                              │
│ School ERP                                                  │
│  ├─ Home/Dashboard                                          │
│  ├─ Admissions → Leads, Registration, Enrollment           │
│  ├─ People → Students, Families, Users, Roles              │
│  ├─ Academic → Classes, Teachers, Online Sessions          │
│  ├─ Finance → Fee Config, Fee Management                   │
│  ├─ Admin → Controls, Invitations, Email                   │
│  ├─ Operations → Tasks, Appointments, Events               │
│  └─ Reporting → Various report types                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 05. ADMISSIONS WORKFLOW (PRIMARY NARRATIVE SECTION)         │
│                                                              │
│ SIMPLE WORKFLOW DIAGRAM (top, full width):                 │
│                                                              │
│   ┌─────────────┐      ┌────────────────┐    ┌──────────┐ │
│   │ LEAD        │──→   │ REGISTRATION   │──→ │ENROLLMENT│ │
│   └─────────────┘      └────────────────┘    └──────────┘ │
│                                                              │
│ STAGE 1: LEAD MANAGEMENT                                   │
│                                                              │
│ TEXT (left, ~50%):       SCREENSHOT (right, ~45%):        │
│                                                              │
│ Explanation of lead      Lead list view with columns,      │
│ management workflow...   search, filter, actions           │
│                          [Lead.pdf screenshot]             │
│                                                              │
│ ─────────────────────────────────────────────────────       │
│                                                              │
│ STAGE 2: REGISTRATION & COMPLEX INFORMATION CAPTURE        │
│                                                              │
│ TEXT (left, ~50%):       SCREENSHOT (right, ~45%):        │
│                                                              │
│ Explanation of complex   Student + Guardian form with      │
│ form design...           sections, hierarchy, patterns     │
│                          [Enrollment.pdf screenshot        │
│ [Optional: callout       with annotations if helpful]      │
│  annotations]                                               │
│                                                              │
│ ─────────────────────────────────────────────────────       │
│                                                              │
│ STAGE 3: ENROLLMENT & CONFIRMATION                         │
│                                                              │
│ TEXT (left, ~50%):       SCREENSHOT (right, ~45%):        │
│                                                              │
│ Explanation of           Enrollment confirmation/          │
│ enrollment completion... summary screen                    │
│                          [Enrollment.pdf screenshot]       │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 06. MANAGING INFORMATION DENSITY                            │
│                                                              │
│ LARGE ANNOTATED SCREENSHOT (left, ~60%):                   │
│                                                              │
│ ┌────────────────────────────────────┐                     │
│ │  Student + Guardian Form           │                     │
│ │  with 4-5 annotated callouts:      │                     │
│ │  • Student Section                 │                     │
│ │  • Guardian Section                │                     │
│ │  • Progressive Disclosure          │                     │
│ │  • Field Grouping                  │                     │
│ │  • Section Headers                 │                     │
│ └────────────────────────────────────┘                     │
│                                                              │
│ TEXT EXPLANATION (right, ~35%):                            │
│                                                              │
│ Design patterns visible:                                    │
│ - Grouping by relationship                                 │
│ - Progressive disclosure                                   │
│ - Consistent field structure                               │
│ - Clear section hierarchy                                  │
│ - Required field indication                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 07. ROLE-AWARE EXPERIENCE                                   │
│                                                              │
│ TEXT & ROLE MAP (top, full width):                         │
│                                                              │
│ Role-aware design explanation...                            │
│                                                              │
│ ADMIN        → User & Config Mgmt                           │
│ SCHOOL       → Local Student Mgmt                           │
│ TEACHER      → Class Operations                             │
│ FAMILY       → Enrollment & Status                          │
│                                                              │
│ SIDE-BY-SIDE SCREENSHOTS (bottom):                          │
│                                                              │
│ ADMIN FEE VIEW          │        SCHOOL FEE VIEW           │
│ (left, ~45%)            │         (right, ~45%)            │
│                                                              │
│ Fee Configuration       │    Fee Application                │
│ [Fee Structure-admin    │    [Student Fee Structure-       │
│  screenshot]            │     School screenshot]            │
│                                                              │
│ Caption: Same domain (fees), different roles, different    │
│ interfaces. Admin configures; school applies.              │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 08. SUPPORTING WORKFLOWS (Academic + Operations)            │
│                                                              │
│ Explanation text...                                         │
│                                                              │
│ ┌────────────────────┐  ┌────────────────────┐             │
│ │  CLASS MANAGEMENT  │  │  ONLINE SESSIONS   │             │
│ │  [Screenshot]      │  │  [Screenshot]      │             │
│ │                    │  │                    │             │
│ └────────────────────┘  └────────────────────┘             │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 09. VISUAL & UI CONSISTENCY (Text only, no new images)     │
│                                                              │
│ Explanation of consistent patterns:                         │
│ - Navigation & hierarchy                                    │
│ - Lists & tables                                            │
│ - Forms & information capture                               │
│ - Status & state indicators                                 │
│ - Cards & information display                               │
│ - Buttons & controls                                        │
│                                                              │
│ [References existing screenshots for evidence]              │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 10. KEY DESIGN DECISIONS (5 cards, full width)             │
│                                                              │
│ DECISION 1: Admissions Pipeline Workflow                   │
│ Challenge → Decision → Evidence                             │
│                                                              │
│ ─────────────────────────────────────────                  │
│                                                              │
│ DECISION 2: Progressive Disclosure                          │
│ Challenge → Decision → Evidence                             │
│                                                              │
│ [etc., 3 more decisions]                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 11. THE DESIGN PROCESS                                      │
│                                                              │
│ Requirements                                                │
│     ↓                                                        │
│ Analysis                                                     │
│     ↓                                                        │
│ User Flows                                                   │
│     ↓                                                        │
│ UX Design                                                    │
│     ↓                                                        │
│ Visual Design                                                │
│     ↓                                                        │
│ Feedback & Refinement                                       │
│     ↓                                                        │
│ Approval                                                     │
│     ↓                                                        │
│ Developer Handoff                                            │
│                                                              │
│ [Brief explanation of requirements-driven process]          │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 12. OUTCOME & REFLECTION                                    │
│                                                              │
│ OUTCOME:                                                     │
│ Manager Approval ✓                                          │
│ Design Handoff to Development ✓                             │
│ No measurable outcomes available                            │
│                                                              │
│ REFLECTION:                                                  │
│ • Systems Thinking                                          │
│ • Workflow Design                                           │
│ • Information Architecture                                  │
│ • Information Density Management                            │
│ • Role-Aware Design                                         │
│ • Design Consistency                                        │
│ • Requirements Translation                                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 13. NEXT PROJECT NAVIGATION                                 │
│                                                              │
│ ← Previous [Project] | View All Work | Next [Project] →    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## PART 8: ACCESSIBILITY & SEO

### Heading Hierarchy

- H1: Page title (School ERP case study)
- H2: Major sections (Understanding the Challenge, Admissions Workflow, etc.)
- H3: Subsections (Stage 1: Lead Management, etc.)
- H4: Supporting points (Design Patterns, Observed Patterns, etc.)

### Image Alt Text

Every screenshot/diagram needs meaningful alt text:

**Hero:** "School ERP home dashboard showing system overview with navigation and quick actions"

**Lead List:** "Lead management list view with search, filter, and action controls for prospect tracking"

**Student Form:** "Student and guardian information form with field grouping and progressive disclosure"

**Diagram:** "Information architecture tree showing School ERP structured into admissions, academics, finance, operations, and reporting areas"

### Captions

All images should have captions describing what you're seeing and why it matters for the case study narrative.

### Contrast

- Text on background: WCAG AA minimum (4.5:1 for normal text)
- Links: Underlined or distinct color (not color alone)
- Status indicators: Color + icon/text (not color alone)

### Keyboard Navigation

- All interactive elements keyboard accessible
- Focus indicators visible
- Tab order logical

### Reduced Motion

- Animations reduced for prefers-reduced-motion
- Essential information not animation-dependent

---

### SEO Metadata

**Page Title:**
"School ERP — UX/UI Design Case Study | Kannan Thangavel"

**Meta Description:**
"Designing a unified UX for a new School ERP. Translating complex school-management requirements into a connected enterprise experience across admissions, academics, and operations."

**OG Title:**
"School ERP — UX/UI Design Case Study"

**OG Description:**
"A case study of designing the complete UX/UI for a multi-module School ERP system serving multiple user roles and interconnected workflows."

**OG Image:**
Hero screenshot (dashboard or admin view)

---

## PART 9: MOBILE-SPECIFIC CONSIDERATIONS

### Large Screenshot Handling

- Full-bleed images on mobile are acceptable
- Horizontal scroll allowed but minimize it
- Captions remain visible
- Ensure important information visible without scroll
- No critical information in far right/left edges

### Text Readability

- Minimum 16px font for body text
- Line length 300-400px optimal
- Adequate line-height (1.5+ for mobile)
- High contrast (WCAG AA minimum)

### Touch Targets

- Interactive elements minimum 44px
- Adequate spacing between elements
- Links/buttons easily tappable

### Performance

- Images optimized for mobile (appropriate resolution)
- Lazy loading for below-fold images
- Fast load time (core web vitals)

---

## PART 10: SCREENSHOT DETAILS & SOURCES

### Required Screenshots

| Priority | Name | Source | Redaction | Purpose |
|---|---|---|---|---|
| P1 | Dashboard | home.pdf, page TBD | Review for names/emails | Hero, product overview |
| P1 | Lead List | Lead.pdf, page TBD | Redact student names | Core workflow, list patterns |
| P1 | Student + Guardian Form | Enrollment.pdf, page TBD | Redact all personal data | Information density example |
| P1 | Admin Fee Structure | Fee Structure-admin.pdf, page TBD | No redaction needed | Role-based design (admin) |
| P2 | School Fee Structure | Student Fee Structure-School.pdf, page TBD | No redaction needed | Role-based design (school) |
| P2 | Admin Dashboard | Admin-Master.pdf, page TBD | No redaction needed | System administration |
| P3 | Classroom Management | Class-Room.pdf, page TBD | Redact student names | Academic operations |
| P3 | Online Sessions | Online-Session.pdf, page TBD | Redact student names | Advanced feature |

---

## PART 11: NEXT STEPS

### After Wireframe Approval

1. **Select specific pages from source PDFs** — Identify exact pages for each screenshot
2. **Create screenshot annotations** — If needed, prepare callout diagrams for complex screens
3. **Plan redaction** — Determine what personal data needs blurring/cropping
4. **Create presentation assets** — Prepare optimized image files (crop, redact, optimize)
5. **Build case-study data structure** — Add case study to app/data/caseStudies.js
6. **Implement case-study page** — Build Next.js page component
7. **Test responsive behavior** — Verify desktop/tablet/mobile displays correctly
8. **QA and launch** — Test links, performance, accessibility

---

## PART 12: QUALITY CHECKLIST

Before implementing, verify this wireframe:

✓ **Story is clear:** Can someone understand the product and design challenge?
✓ **Evidence is grounded:** No invented research, metrics, or personas?
✓ **Primary workflow is central:** Admissions pipeline is the main narrative?
✓ **Role-based design is demonstrated:** Different views shown with evidence?
✓ **Information density gets focus:** Complex form receives detailed treatment?
✓ **Visual rhythm is balanced:** Alternates text and images appropriately?
✓ **Screenshots are curated:** 6-8 best examples, not 15+ screenshot gallery?
✓ **Privacy is planned:** Personal data identified for redaction?
✓ **Responsive behavior is specified:** Desktop/tablet/mobile clearly defined?
✓ **Accessibility is addressed:** Heading hierarchy, alt text, contrast specified?
✓ **Outcome is honest:** No invented impact claims?
✓ **Process reflects reality:** Requirements-driven, not overstated?

---

## FINAL ASSESSMENT

**Wireframe Complete** — Ready for implementation

**Story Strength:** HIGH
- Clear narrative arc (requirements → workflows → design → approval)
- Evidence-based (screenshots support every claim)
- Focused (main story: admissions workflow; supporting stories: operations, roles)

**Visual Impact:** STRONG
- Hero establishes product presence
- Primary workflow section will be visual centerpiece
- Alternating rhythm maintains engagement
- Curated screenshots avoid gallery feeling

**Credibility:** HIGH
- Honest about process (requirements-driven)
- No invented research or metrics
- Clear design decisions with evidence
- Appropriate outcome statement

**Completeness:** READY
- All major sections defined
- Responsive behavior specified
- Screenshot audit completed
- Privacy considerations addressed
- Next steps clear

**Recommended Implementation Order:**
1. Hero + metadata sections (quick)
2. Product overview + IA (diagrams)
3. Primary workflow section (screenshot-intensive, main visual story)
4. Supporting sections (faster to build)
5. Design decisions + outcome (text-based)
6. Test and refine responsive behavior

---

**Wireframe Status: COMPLETE**

Ready for case-study page implementation.

**Next: Screenshot preparation and app/data/caseStudies.js integration**
