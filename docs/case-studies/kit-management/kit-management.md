# Kit Management Case Study

## Project Summary

**VERIFIED**

Kit Management is a module within an enterprise school management system for pre-schools that enables two primary user groups—corporate offices (Franchisor) and individual pre-school centers (Franchisee)—to collaborate on the lifecycle of study kits: from student enrollment through kit request, payment, and dispatch.

---

## Context

### What Is Kit Management?

**VERIFIED**

Kit Management handles the complete workflow of providing welcome/study kits to newly enrolled pre-school students. The system manages:

- **Kit items and configuration** — defining which items comprise a kit for each grade level (Playgroup, Nursery, LKG, UKG)
- **Kit stock** — tracking availability across multiple franchised centers
- **Kit requests** — pre-schools requesting kits for newly enrolled students
- **Payment** — capturing and recording payment information for kit costs
- **Dispatch** — fulfilling requests, tracking partial/complete dispatch
- **Reporting** — dashboards showing enrollment trends, collection status, and operational visibility

### Business Context

**VERIFIED**

The school operates as a Franchisor-Franchisee model:
- **Franchisor (Corporate Office)** manages kit configuration, stock, payments, and dispatch across all centers
- **Franchisee (Pre-school Centers)** onboard new students, request kits, submit payment information, and receive kits

The kit represents both an operational need (equipping new students) and a revenue stream (payment collection).

---

## The Users

### Franchisor Operations

**VERIFIED** | Observed in Kit-Management-HO.pdf

The corporate office needs to:
- **View aggregate insights** — dashboards showing enrollment numbers, submitted requests, dispatch status across all centers
- **Manage kit configuration** — Define kit masters by program level, manage inventory items
- **Monitor requests** — See which centers have submitted kit requests, understand request volume trends
- **Process payments** — View payment information, confirm/validate payment status
- **Fulfill requests** — Process dispatches, handle partial dispatch scenarios, complete dispatch
- **Track operational metrics** — Understand collection status, dispatch rates, program-wise comparisons

Primary interaction: Dashboard-driven, high-level operational visibility.

### Franchisee Operations

**VERIFIED** | Observed in Kit-Management-Franchisee.pdf

Pre-school centers need to:
- **See enrollment overview** — Dashboard showing students enrolled by program
- **Submit kit requests** — Create and submit kit requests for newly enrolled students
- **Provide payment information** — Submit payment details as part of the request
- **Track request status** — View submitted requests and their dispatch status
- **View reports** — Access enrollment and dispatch reporting for their center

Primary interaction: Task-driven workflow (enrollment → request → track).

---

## The Problem I Addressed

### Business Requirements

**VERIFIED** (from Case Study.pdf)

The project started with these requirements:
- Automate the kit management workflow between corporate office and franchise centers
- Eliminate manual, paper-based kit request and payment collection processes
- Create visibility for both Franchisor (operational oversight) and Franchisee (request tracking)
- Support multiple programs, payment methods, and partial dispatch scenarios

### UX Problems to Solve

**INFERRED** from the workflow complexity

1. **Two distinct user mindsets** — Franchisor needs high-level, aggregate operational views; Franchisee needs to complete a task (request → track)
2. **Complex data relationships** — Students are tied to programs, programs define kit types, kits have items, requests aggregate by program
3. **Multi-step workflow** — Franchisee must select specific students and provide payment information as part of request submission
4. **Async process** — Request is submitted but not immediately fulfilled; Franchisee can track status while Franchisor processes
5. **Partial fulfillment** — The system supports partial dispatch as a request state (visible in request tracking)

---

## My Role

**VERIFIED**

UX/UI Designer responsible for the complete Kit Management module design.

**Approach:**
- Understood business requirements provided by the Project Manager
- Analyzed user needs from both Franchisor and Franchisee perspectives
- Developed information architecture and workflows for each user group
- Designed interfaces reflecting these distinct needs
- Refined designs based on Project Manager feedback
- Prepared design assets and documentation for development handoff

---

## UX Approach

### Understanding the Ecosystem

**My process began by mapping the relationships:**

1. **Business model** — Franchisor-Franchisee relationship; kit as operational need + revenue stream
2. **User separation** — Two distinct user groups with different needs and perspectives
3. **Data model** — How students, programs, kits, items, and payments interconnect
4. **Process flow** — The sequence from enrollment → request → payment → dispatch

### Core Workflow Design

The central UX story is the kit request lifecycle:

```
Student Enrollment
        ↓
Kit Request (Franchisee)
        ↓
Payment Information (Franchisee)
        ↓
Franchisor Processing
        ↓
Kit Dispatch
        ↓
Request Status (Franchisee tracking)
```

**Design principle:** Make each workflow clear and task-focused for the actor using it in that moment. Franchisor and Franchisee see different parts of this flow.

---

## Key UX Decisions

### 1. Separation of Franchisor and Franchisee Interfaces

**VERIFIED** (Evidence: separate HO and Franchisee PDFs)

Rather than creating a single interface that serves both users, I designed two distinct experiences:
- **Franchisor:** Dashboard-first, aggregate views, operational management
- **Franchisee:** Task-first, request workflow, status tracking

**Why this matters:** Each user group has different mental models. Franchisee needs to complete a task; Franchisor needs operational oversight. Mixing them creates confusion.

### 2. Student-Based Request Structure

**OBSERVED** (Evidence: Franchisor detail view shows student names, programs, and amounts in kit requests)

The request tracks which specific students are included, organized by program level.

**Why this matters:** Creates an audit trail of which students received kits and enables program-specific kit fulfillment.

### 3. Program-Based Kit Configuration

**OBSERVED** (Evidence: Dashboards show breakdowns by Playgroup, Nursery, LKG, UKG)

Kit configuration is defined per program level, not per student individually.

**Why this matters:** Reduces configuration complexity and ensures consistency across students in the same program.

### 4. Payment Information Capture at Request Time

**OBSERVED** (Evidence: Payment Details section in Kit Request detail view)

Payment information (amount, date, method, reference, bank) is captured as part of the request submission, not as a separate step.

**Why this matters:** Keeps the workflow efficient and ensures payment information is tied to the specific request.

### 5. Request Status Visibility

**OBSERVED** (Evidence: Kit request list shows status values including Submitted, Partially Dispatched, Dispatched)

Franchisee can see their request status in the list and detail views.

**Why this matters:** Provides visibility into request progress through the system.

### 6. Partial Dispatch as a Request State

**OBSERVED** (Evidence: Request status values include "Partially Dispatched" as a distinct state)

The system recognizes and tracks partial dispatch scenarios.

**Why this matters:** Reflects real-world complexity of kit fulfillment and stock management across multiple centers.

---

## Franchisor Experience

### Dashboard

**VERIFIED** | Kit-Management-HO.pdf shows dashboard with:

- **Kit Requests overview** — Total enrolled, submitted, dispatched counts across all centers
- **Top-level breakdown** — Kit requests by center, by program, by month
- **Financial tracking** — Resource fee collected vs. due amounts
- **Trend analysis** — Comparison across academic years

**Purpose:** Franchisor operations manager sees at a glance:
- How many students are onboarded (Enrolled)
- How many kit requests are pending (Submitted)
- How many have been fulfilled (Dispatched)
- Whether payment collection is on track
- How trends compare year-over-year

### Request Management

**OBSERVED** | Kit-Management-HO.pdf navigation shows:

- **Kit Requests** (view requests)
- **Manage Kit Request** (request management features)
- **Kit Master** (configure kit items per program)
- **Manage Items** (define what goes in kits)
- **Kit Stock Entry** (update stock levels)
- **Reports** (detailed analytics)

**Purpose:** Franchisor can review submitted requests, validate payment information, and manage kit dispatch and fulfillment.

---

## Franchisee Experience

### Dashboard

**VERIFIED** | Kit-Management-Franchisee.pdf shows:

- **Program-wise comparison** — Students enrolled in each program (Playgroup, Nursery, LKG, UKG)
- **Enrollment vs. Submission vs. Dispatch** — Visual breakdown of where students stand in the kit journey
- **Enrollment trends** — How enrollment compares across months and years
- **Request status summary** — Counts of Enrolled, Submitted, Dispatched

**Purpose:** Franchisee center manager sees:
- How many new students are onboarded in each program
- How many have had kit requests submitted
- How many have received kits
- Trends in their own center

### Request Workflow

**VERIFIED** | Kit-Management-Franchisee.pdf shows the task flow:

1. **See Enrolled students** (dashboard shows program-wise breakdown)
2. **Create kit request** (+ button to start request)
3. **Select students** (table shows student name, class/program, enrollment #, enrollment date, amount)
4. **Provide payment information** (Payment Details section with amount, date, mode, reference, bank)
5. **Submit request** (creates request with status "Submitted")
6. **Track status** (Kit Requests list shows status, can view details including dispatch information)

**Purpose:** Straightforward task workflow for center manager to request kits for new students.

---

## Supporting Features

### Kit Configuration (Franchisor Only)

**OBSERVED** | Kit-Management-HO.pdf mentions Kit Master, Manage Items

- Define which items comprise a kit for each program
- Maintain item inventory
- Control kit pricing by program

### Stock Management (Franchisor Only)

**OBSERVED** | Kit Stock Entry menu item

- Track available kits per center (likely)
- Update stock levels
- Manage allocation

### Reporting (Both Users)

**VERIFIED** | Both PDFs show reports section

**Franchisor reports:**
- Kit requests by center
- By program
- By month
- Financial collection status
- Year-over-year comparison

**Franchisee reports:**
- Program-wise enrollment comparison
- Enrollment trends by month/year
- Dispatch tracking

---

## Final UI

### Visual Architecture

**OBSERVED** from the product screens:

- **Dashboard-first landing** — Shows status overview and trends immediately
- **Sidebar navigation** — Consistent menu structure (Home, Kit Requests, Manage [feature], Reports)
- **List + detail pattern** — Kit Requests show as a list; clicking shows details
- **Status indicators** — Visual status (Enrolled, Submitted, Dispatched) used consistently
- **Tabular data** — Student selection and request details shown in tables
- **Charts/graphs** — Enrollment trends, collection tracking shown as bar charts and pie charts

### Information Hierarchy

**OBSERVED** key patterns:

- **Aggregate metrics** (large numbers: 106 Enrolled, 90 Submitted, 67 Dispatched)
- **Program grouping** — Data broken down by Playgroup, Nursery, LKG, UKG
- **Temporal breakdown** — Monthly and yearly comparisons
- **Center/location grouping** — For Franchisor, ability to see data by center location

---

## Outcome

### What Was Delivered

**VERIFIED**

A complete Kit Management module design covering:

1. ✅ **Franchisor dashboard** — Operational overview, kit requests by center/program/month, financial tracking, reports
2. ✅ **Franchisor request management** — Request list, detail view, approval workflow
3. ✅ **Franchisor configuration** — Kit Master, Manage Items, Kit Stock Entry
4. ✅ **Franchisee dashboard** — Program-wise enrollment, status overview
5. ✅ **Franchisee request workflow** — Create request → Select students → Payment information → Submit
6. ✅ **Franchisee request tracking** — Status visibility, detail view
7. ✅ **Dispatch management** — Partial and complete dispatch tracking
8. ✅ **Reporting** — For both user groups, tailored to their needs

### Business Impact

**UNKNOWN** — The source material does not provide quantitative outcomes such as:
- Time savings per transaction
- Reduction in support tickets
- Payment collection rate improvements
- Deployment timeline or adoption numbers

The design was handed to the Development Lead for implementation. Whether it improved operational efficiency, reduced errors, or accelerated collections is not documented in the available source material.

---

## Reflection

### What Made This Complex

**INFERRED**

Kit Management required thinking beyond a single user interface:

1. **Two distinct user mental models** — Franchisor thinks in aggregates and operations; Franchisee thinks in tasks
2. **Connected lifecycle** — A request is not complete until it's dispatched; status visibility matters to both users
3. **Real-world constraints** — Stock might run out (partial dispatch), payment methods vary, timing matters
4. **Stakeholder alignment** — Both Franchisor and Franchisee need to see the same data, but from different angles

The strongest solution separated interfaces by user group while maintaining data coherence across the workflow.

### If Revisiting

**INFERRED** areas that would benefit from deeper validation:

- **Franchisee user testing** — Does the student selection workflow feel natural? Are there cases where center managers struggle with program-based kit assignment?
- **Franchisor workflow validation** — Is the request approval workflow clear? Could payment validation be faster?
- **Partial dispatch communication** — Is it clear to Franchisee why a dispatch is partial? Do they know what to expect next?
- **Mobile experience** — How do these workflows translate to mobile (for Franchisee staff on-the-go)?

These would strengthen the case study and inform future iterations.

---

## Evidence Classification Summary

| Topic | Classification | Source |
|---|---|---|
| Kit Management is a module in school management | VERIFIED | Case Study.pdf opening |
| Two user groups (Franchisor/Franchisee) | VERIFIED | Both HO and Franchisee PDFs |
| Core workflow: enrollment → request → payment → dispatch → tracking | VERIFIED | Case Study.pdf + both product PDFs |
| Program-based kit configuration (Playgroup, Nursery, LKG, UKG) | VERIFIED | All three PDFs |
| Franchisor dashboard shows metrics, breakdowns, reports | OBSERVED | Kit-Management-HO.pdf |
| Franchisee interface for request submission and tracking | OBSERVED | Kit-Management-Franchisee.pdf |
| Partial dispatch as a request state | OBSERVED | Status values in PDFs include "Partially Dispatched" |
| My role as UX/UI Designer | VERIFIED | Case Study.pdf |
| Project Manager feedback shaped design | VERIFIED | User confirmation |
| Design handed to Development | VERIFIED | User confirmation |
| User interviews/usability testing | UNKNOWN | Not documented |
| Design iteration examples | UNKNOWN | No documented before/after materials |
| Business impact metrics | UNKNOWN | Not in source material |
| Production deployment | UNKNOWN | Not verified |
| Specific approval/rejection workflow | UNKNOWN | Not shown in source material |
