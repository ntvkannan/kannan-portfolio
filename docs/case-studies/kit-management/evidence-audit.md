# Kit Management Case Study — Evidence Audit

## Purpose

This document classifies all claims about the Kit Management project into evidence categories based strictly on what is documented in the source PDFs and confirmed by the designer.

Categories:
- **VERIFIED** — Direct evidence from source material or confirmed by designer
- **OBSERVED** — Pattern visible in product screenshots, inferred from UI structure
- **INFERRED** — Logical conclusion from workflow, but not explicitly shown
- **UNKNOWN** — Not present in source material; should not be invented

This classification ensures the case study is grounded in evidence and distinguishes design interpretation from product facts.

---

## Classification Scheme

### VERIFIED
Direct evidence from source material. Observable without interpretation. Can be cited and quoted.

**Examples:**
- "Kit Management is a module within a school management system" — Opening statement in Case Study.pdf
- "The system supports four program levels: Playgroup, Nursery, LKG, UKG" — Visible in all three PDFs

### OBSERVED
Pattern visible in product screenshots, but not explicitly explained. Can be interpreted from UI and structure.

**Examples:**
- "The Franchisor dashboard uses a dashboard-first landing" — Visible in Kit-Management-HO.pdf layout
- "The Franchisee workflow is linear: Select → Pay → Submit" — Visible in user flow from screenshots

### INFERRED
Logical conclusion from observed patterns or business logic. Reasonable interpretation, but not explicitly stated. Should be labeled as interpretation.

**Examples:**
- "The system acknowledges partial dispatch" — Inferred from UI fields showing "kits dispatched" vs. "kits requested"
- "Student-based selection ensures accuracy" — Inferred from business logic, not explicitly stated

### UNKNOWN
Not present in source material. Should not be invented or assumed.

**Examples:**
- User testing results
- Quantitative business impact metrics
- Mobile responsiveness design decisions
- Competitor analysis or market research
- User feedback or iteration cycles

---

## Full Evidence Audit

### Project Context

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Kit Management is a module within a school management system | VERIFIED | Case Study.pdf opening & navigation | Direct observation |
| The system serves pre-schools specifically | VERIFIED | Case Study.pdf context, all menu items | Direct observation |
| Franchisor-Franchisee business model | VERIFIED | Both HO and Franchisee PDFs show distinct roles | Observable from product structure |
| Kit represents both operational need and revenue stream | INFERRED | Business logic: payment collection + kits sent | Logical from payment tracking visible in reports |

### Users & Roles

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Two primary user groups: Franchisor and Franchisee | VERIFIED | Separate UI sets (Kit-Management-HO.pdf vs. Kit-Management-Franchisee.pdf) | Clear separation |
| Franchisor user is corporate office operations manager | INFERRED | Dashboard-first design, aggregate views, approval workflows | Pattern observed but not explicitly labeled |
| Franchisee user is pre-school center manager | INFERRED | Request submission, student selection, tracking views | Pattern observed but not explicitly labeled |
| Franchisor manages configuration, stock, payments, dispatch | VERIFIED | Navigation menu items (Kit Master, Stock Entry, Manage Requests) | Observable from UI |
| Franchisee submits requests, provides payment, tracks status | VERIFIED | Request creation flow and status tracking views | Observable from UI |

### Product Features

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Kit configuration by program level (Playgroup, Nursery, LKG, UKG) | VERIFIED | Visible in all three PDFs | Direct observation |
| Kit items are defined and managed by Franchisor | OBSERVED | "Manage Items" menu item in navigation | Inferred from UI text |
| Kit stock is tracked per center | INFERRED | "Kit Stock Entry" menu item | Presumed from label, not shown in detail |
| Payment information captured: amount, date, method, reference, bank | VERIFIED | Payment Details form visible in Franchisee screenshot | Direct observation of form fields |
| Request status tracked: Submitted, Dispatched | VERIFIED | Status indicators visible in list views | Direct observation |
| Partial dispatch is supported | OBSERVED | Dispatch Details show "# kits dispatched" field | Inferred from UI showing potential for less than requested |
| Student selection required before kit request | VERIFIED | Create Kit Request flow shows checkbox student selection | Direct observation |
| Kit amounts calculated per student based on program | OBSERVED | Payment Details summary shows calculation | Visible in form layout |

### Franchisor Experience

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Dashboard shows key metrics: Enrolled, Submitted, Dispatched | VERIFIED | Large prominent numbers visible in Kit-Management-HO.pdf | Direct observation |
| Dashboard shows breakdown by center | VERIFIED | Table visible in screenshot | Direct observation |
| Dashboard shows breakdown by program | VERIFIED | Playgroup, Nursery, LKG, UKG counts visible | Direct observation |
| Dashboard shows enrollment trends | OBSERVED | Bar chart labeled "Enrollment Trend" | Visible in screenshot |
| Dashboard shows financial tracking (collected vs. due) | OBSERVED | "Resource Fee Collected" data visible | Visible in screenshot |
| Franchisor can approve/reject kit requests | INFERRED | "Manage Kit Request" navigation item | Presumed from label, not shown in detail |
| Franchisor can process payments | OBSERVED | Payment validation visible in request detail | Visible in screenshot |
| Franchisor can create dispatch orders | INFERRED | Dispatch tracking data in request detail | Visible in screenshot but creation process not shown |
| Reports available: by center, by program, by month, by year | VERIFIED | Navigation menu shows Report section | Observable from UI |
| Collection tracking and financial reporting | OBSERVED | "Resource Fee Collection" section in navigation | Visible in screenshot |

### Franchisee Experience

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Dashboard shows center-specific enrollment | VERIFIED | "Enrollment by Program" table with counts | Direct observation |
| Dashboard shows status breakdown: Enrolled, Submitted, Dispatched | VERIFIED | Counts visible in screenshot | Direct observation |
| Dashboard shows enrollment trends | OBSERVED | Bar chart showing monthly trend | Visible in screenshot |
| Dashboard shows year-over-year comparison | OBSERVED | "Comparison with Previous Year" data | Visible in screenshot |
| Can create new kit request with button | VERIFIED | "[Create New Request]" button visible | Direct observation |
| Request workflow: Select students → Provide payment → Submit | VERIFIED | Multi-step form visible in screenshots | Direct observation |
| Can filter/view requests by status | OBSERVED | Filter controls visible ("Status ▼") | Visible in UI |
| Can view request details and dispatch status | VERIFIED | Detail view shows selected students and dispatch info | Direct observation |
| Can track partial dispatch status | OBSERVED | Detail view shows which students have received kits vs. pending | Visible in screenshot |
| Reports available for enrollment and dispatch tracking | OBSERVED | Reports menu visible | Navigation item visible |

### Design Decisions

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Separation of Franchisor and Franchisee interfaces | VERIFIED | Two distinct UI PDFs with different navigation/layouts | Observable structure |
| Dashboard-first pattern for Franchisor | OBSERVED | Dashboard is landing page with metrics and breakdowns | Visible in screenshot |
| Task-workflow pattern for Franchisee | OBSERVED | Linear request creation flow (Select → Pay → Submit) | Visible in UI flow |
| Program-based kit configuration | OBSERVED | All breakdowns use Playgroup, Nursery, LKG, UKG | Consistent pattern in all data |
| Student-specific selection for accuracy | OBSERVED | Request requires explicit student name selection | Visible in form layout |
| Payment info tied to request (not separate step) | OBSERVED | Payment Details form is part of request creation, not separate | Visible in workflow |
| Status visibility to Franchisee | OBSERVED | Status indicator ("Submitted", "Dispatched") in list and detail views | Visible in UI |
| Real-time metric updates | INFERRED | Selected student count updates total amount dynamically | Presumed from form behavior |

### Business Requirements

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Automate kit management workflow | VERIFIED | Case Study.pdf states this as primary objective | Direct quote possible |
| Eliminate manual/paper-based processes | VERIFIED | Case Study.pdf mentions this as requirement | Direct quote possible |
| Create visibility for both user groups | VERIFIED | Case Study.pdf states this requirement | Direct quote possible |
| Support multiple programs | VERIFIED | Four program levels visible throughout | Observable from data |
| Support payment methods (cheque, transfer, etc.) | OBSERVED | Payment method radio buttons in form | Direct observation |
| Support partial dispatch scenarios | OBSERVED | Dispatch Details allow partial fulfillment | Observable from UI |

### My Role & Responsibilities

| Claim | Classification | Evidence | Notes |
|-------|---|---|---|
| Role: UX/UI Designer | VERIFIED | Case Study.pdf identifies designer role | Observable from credit |
| Responsibilities include design, iteration, collaboration | INFERRED | Standard UX/UI role at this organization | Not explicitly detailed in source material |
| Worked with Project Manager | INFERRED | Standard workflow for product design | Not explicitly stated in source material |
| Worked with Development Lead | INFERRED | Standard workflow for product design | Not explicitly stated in source material |

---

## Claims That Cannot Be Made (UNKNOWN)

The following are NOT documented and should NOT be invented:

### User Research & Validation (UNKNOWN)
- Formal user interviews or discovery sessions
- Usability testing results
- User personas or journey maps
- Documented pain points from research

**Note:** Designer approached by understanding PM requirements and thinking through workflows from user perspective. This is UX thinking, not formal user research.

### Design Iterations (UNKNOWN)
- Specific design iterations or exploration sketches
- Before/after comparison of changes
- Exact feedback items and their design impacts

**Note:** Design was reviewed with PM and refined based on feedback. Documentation of specific iterations not available.

### Business Process Details (UNKNOWN)
- Exact mechanism of partial dispatch (automatic vs. manual)
- Explicit approval/rejection workflow
- Specific payment fields captured vs. stored separately
- How payment validation occurs

### Metrics & Business Impact (UNKNOWN)
- Time saved per transaction
- Error reduction rate
- Payment collection improvements
- Adoption rate or usage statistics
- Production deployment confirmation

**Note:** Design was handed to development. Current deployment/usage status not verified.

### Technical Details (UNKNOWN)
- Technology stack or frameworks used
- API design or data model
- Implementation approach
- Backend system architecture

### Project Timeline (UNKNOWN)
- Exact design/project date (PDFs contain 2023 data but exact date not confirmed)
- Design-to-development handoff date
- Development timeline
- Production deployment date

### Mobile/Responsive Design (UNKNOWN)
- Mobile experience or responsive design approach
- Touch interaction patterns
- Mobile-specific workflows

---

## Confidence Levels by Topic

### High Confidence (Can cite directly)
- What the module is and what it does
- Who the users are and their roles
- What features exist (based on UI observation)
- What data is tracked and reported
- The general workflow patterns

**→ These can be presented as facts.**

### Medium Confidence (Can describe, with caveats)
- Design decisions and their reasoning
- Why certain patterns were chosen
- How workflows are optimized

**→ These should be presented as "observed" patterns with "the design demonstrates that..." framing.**

### Low Confidence (Should not be claimed)
- Specific user needs or pain points
- Why alternatives were rejected
- Business impact or success metrics
- Iteration history or feedback loops

**→ These should be noted as unknown or framed as inference.**

---

## How to Use This Audit

### When Writing the Case Study Narrative

**Do this:** "The system separates Franchisor and Franchisee interfaces, with Franchisor seeing aggregate operational data and Franchisee seeing task-specific request workflows."

**Don't do this:** "We discovered through user research that Franchisor and Franchisee users have different mental models, so we separated the interfaces."

**Why:** The first is observable fact. The second invents research that isn't documented.

---

### When Describing Design Decisions

**Do this:** "The design patterns reflect a deliberate separation: Franchisor interfaces emphasize operational visibility (aggregate metrics, trends, center-wise breakdowns), while Franchisee interfaces emphasize task completion (linear request workflow, status tracking)."

**Don't do this:** "Through interviews, we learned that Franchisor staff needed high-level visibility while Franchisee staff felt overwhelmed by operational data, so we separated the interfaces."

**Why:** The first describes observable pattern. The second invents interview results.

---

### When Discussing Workflow Design

**Do this:** "The Franchisee request workflow is structured as a linear sequence: (1) Select enrolled students, (2) Confirm calculated amount, (3) Provide payment information, (4) Submit request."

**Don't do this:** "We tested three different workflows and found that the linear approach reduced errors by 40%."

**Why:** The first is observable from the UI. The second invents testing data.

---

### When Discussing Unknown Areas

**Do this:** "The source material does not document user research, usability testing, or iteration cycles. Future discussions of design decisions would benefit from that context."

**Don't do this:** "The team conducted extensive user interviews that led to these design decisions." (then add invented details)

**Why:** Honesty about gaps is stronger than fabrication.

---

## Evidence Categories Summary

| Category | Count | Reliability | Use In Case Study |
|----------|-------|---|---|
| VERIFIED (direct from source) | ~40 | Highest | Cite and state as fact |
| OBSERVED (pattern from UI) | ~30 | High | Describe pattern with evidence |
| INFERRED (logical conclusion) | ~15 | Medium | Label as inference, explain logic |
| UNKNOWN (not in source) | ~20+ | N/A | Acknowledge as gap, don't invent |

---

## Critical Notes

### On Business Impact
The source PDFs show what was built but do NOT show:
- Whether it improved operational efficiency
- Whether it reduced support tickets
- Whether it accelerated payment collection
- Quantitative metrics of any kind

**Do not claim business impact without data.** The design was delivered to the Development Lead, but success metrics are not documented.

### On User Research
The source PDFs do NOT show:
- User interviews or discovery
- Usability testing
- User feedback or iterations
- Personas or journey maps

**Do not claim user-centered decisions were based on research.** The design is user-focused (two interfaces, clear workflows), but the research process is not documented.

### On Design Iterations
The source PDFs show final screens only. They do NOT show:
- Exploration or sketches
- Iterations or refinements
- Feedback that drove changes
- Alternatives that were considered

**Do not claim to know what was tried and rejected.** Tell the story of the final solution only.

### On Technical Integration
The source PDFs show UI design only. They do NOT show:
- Backend architecture
- Data modeling decisions
- API design
- Technical constraints or decisions

**Do not speculate on technical implementation.** Stick to what the user sees.

---

## Template for Citing Evidence

When discussing a feature or design decision, use this format:

```
[Feature or Decision Name]

**Classification:** [VERIFIED / OBSERVED / INFERRED]

[Description with evidence pointer]

Evidence: [Which PDF(s) show this? What can you point to?]

Confidence: [High / Medium / Low] — [Brief explanation]
```

**Example:**

```
Kit Configuration by Program

**Classification:** VERIFIED

The system defines kits at the program level (Playgroup, Nursery, LKG, UKG) rather than per-student.

Evidence: All three PDFs consistently show these four program levels in dashboards, student selection, and reporting.

Confidence: High — Direct observation across multiple views.
```

---

## Closing

This audit ensures that the case study is built on solid ground. Every claim can be traced to source material or explicitly labeled as interpretation. This approach is stronger than inventing details—it shows research rigor and allows readers to see exactly what we know and where gaps remain.

The case study should feel authoritative because it is grounded in evidence, not because it claims to know everything.
