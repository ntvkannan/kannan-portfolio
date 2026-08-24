# Kit Management Wireframe & Information Architecture

## ⚠️ INTERNAL PLANNING DOCUMENT

**This is a design planning document created during UX/UI development.**

It shows proposed interaction patterns, workflows, and information architecture based on the feature requirements and product screenshots. It includes design interpretations and some details that may be inferred rather than directly observable from the source material.

**This document is NOT the final webpage structure.** It serves as reference for the UX thinking and feature organization. The actual portfolio case study will use a narrative-driven structure instead.

---

## Overview

This document describes the information architecture, wireframes, and interaction patterns for the Kit Management module based on analysis of the product screenshots from the three source PDFs.

---

## Information Architecture

### Navigation Structure (Franchisor)

**OBSERVED** | Kit-Management-HO.pdf sidebar menu

```
Kit Management (Main Section)
├── Home (Dashboard)
├── Kit Requests
│   ├── View all requests
│   └── Manage Kit Request (detail/approval)
├── Configuration
│   ├── Kit Master
│   ├── Manage Items
│   └── Kit Stock Entry
├── Reports
│   ├── Kit Requests Report
│   ├── Program-wise Report
│   ├── Center-wise Report
│   ├── Monthly Report
│   └── Year-wise Report
└── Resource Fee Collection (Payments)
```

**Navigation principle:** Organized by function (View → Manage → Configure → Report).

### Navigation Structure (Franchisee)

**OBSERVED** | Kit-Management-Franchisee.pdf sidebar menu

```
Kit Management (Main Section)
├── Home (Dashboard)
├── Kit Requests
│   ├── View all requests
│   ├── Create new request
│   └── View request details
└── Reports
    ├── Enrollment Report
    ├── Program-wise Report
    └── Dispatch Report
```

**Navigation principle:** Task-focused (View → Create → Track).

---

## Wireframe: Franchisor Dashboard

### Layout Structure

**VERIFIED** | Kit-Management-HO.pdf dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│                     KIT MANAGEMENT - HOME                       │
│  Sidebar                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─ HEADER SECTION ─────────────────────────────────────────┐  │
│  │ "Kit Requests"                                            │  │
│  │ Subtitle or filter controls                              │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ KEY METRICS ROW ─────────────────────────────────────────┐  │
│  │                                                             │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │  │
│  │  │ 106     │  │ 90      │  │ 67      │                  │  │
│  │  │ ENROLLED│  │SUBMITTED│  │DISPATCHED                   │  │
│  │  └─────────┘  └─────────┘  └─────────┘                  │  │
│  │                                                             │  │
│  │  (Large numbers, color-coded: neutral, neutral, accent)   │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ BREAKDOWN SECTION (Left Column) ───────────────────────┐  │
│  │                                                             │  │
│  │  By Center:                                               │  │
│  │  ┌──────────────────────────────────┐                     │  │
│  │  │ Center Name 1    │ Enrolled: 30 │                     │  │
│  │  │ Center Name 2    │ Enrolled: 26 │                     │  │
│  │  │ Center Name 3    │ Enrolled: 28 │                     │  │
│  │  │ [... more rows]  │              │                     │  │
│  │  └──────────────────────────────────┘                     │  │
│  │                                                             │  │
│  │  By Program:                                              │  │
│  │  ┌──────────────────────────────────┐                     │  │
│  │  │ Playgroup        │ Enrolled: 28 │                     │  │
│  │  │ Nursery          │ Enrolled: 26 │                     │  │
│  │  │ LKG              │ Enrolled: 30 │                     │  │
│  │  │ UKG              │ Enrolled: 22 │                     │  │
│  │  └──────────────────────────────────┘                     │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ CHART SECTION (Right Column) ───────────────────────────┐  │
│  │                                                             │  │
│  │  Enrollment Trend (Bar Chart)                             │  │
│  │  Jan │ Feb │ Mar │ Apr │ May │ Jun │                     │  │
│  │  ███ │ ███ │ ███ │ ███ │ ███ │ ███ │                     │  │
│  │                                                             │  │
│  │  Financial Status (Data)                                  │  │
│  │  Resource Fee Collected: ₹45,000                          │  │
│  │  Due: ₹20,000                                             │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Component Details

**VERIFIED** | Observed in Kit-Management-HO.pdf

| Component | Description | Data |
|-----------|-------------|------|
| **Key Metrics** | Large prominent numbers | 106 Enrolled, 90 Submitted, 67 Dispatched |
| **Center Breakdown** | List/table of centers | Center name, Enrolled count, Submitted, Dispatched |
| **Program Breakdown** | List of programs | Playgroup, Nursery, LKG, UKG with counts |
| **Enrollment Trend** | Bar chart over time | Monthly view, shows enrollment trend |
| **Financial Status** | Summary | Total collected, total due |

---

## Wireframe: Franchisee Dashboard

### Layout Structure

**VERIFIED** | Kit-Management-Franchisee.pdf dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│                     KIT MANAGEMENT - HOME                       │
│  Sidebar                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─ HEADER SECTION ─────────────────────────────────────────┐  │
│  │ "Welcome, [Center Name]"                                 │  │
│  │ [Create New Request] Button (Accent color)               │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ KEY METRICS ROW ─────────────────────────────────────────┐  │
│  │                                                             │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │  │
│  │  │ 28      │  │ 25      │  │ 18      │                  │  │
│  │  │ ENROLLED│  │SUBMITTED│  │DISPATCHED                   │  │
│  │  └─────────┘  └─────────┘  └─────────┘                  │  │
│  │                                                             │  │
│  │  (Center-specific numbers)                                │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ PROGRAM BREAKDOWN (Left Column) ────────────────────────┐  │
│  │                                                             │  │
│  │  Enrollment by Program:                                   │  │
│  │  ┌──────────────────────────────────┐                     │  │
│  │  │ Playgroup  │ Enrolled: 8        │                     │  │
│  │  │ Nursery    │ Enrolled: 6        │                     │  │
│  │  │ LKG        │ Enrolled: 8        │                     │  │
│  │  │ UKG        │ Enrolled: 6        │                     │  │
│  │  └──────────────────────────────────┘                     │  │
│  │                                                             │  │
│  │  Status Breakdown:                                        │  │
│  │  ┌──────────────────────────────────┐                     │  │
│  │  │ ⊙ Enrolled (not requested): 3   │                     │  │
│  │  │ ⊙ Submitted (request pending): 25 │                   │  │
│  │  │ ⊙ Dispatched (kits received): 18 │                    │  │
│  │  └──────────────────────────────────┘                     │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ CHART SECTION (Right Column) ───────────────────────────┐  │
│  │                                                             │  │
│  │  Enrollment Trend (Bar Chart)                             │  │
│  │  Jan │ Feb │ Mar │ Apr │ May │ Jun │                     │  │
│  │  ███ │ ███ │ ███ │ ███ │ ███ │ ███ │                     │  │
│  │                                                             │  │
│  │  Comparison with Previous Year:                           │  │
│  │  This Year: 28 students                                   │  │
│  │  Last Year: 22 students                                   │  │
│  │  Growth: +6 (+27%)                                        │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Component Details

**VERIFIED** | Observed in Kit-Manufacturing-Franchisee.pdf

| Component | Description | Data |
|-----------|-------------|------|
| **Welcome Header** | Personalized greeting | "Welcome, [Center Name]" |
| **Create Request CTA** | Primary action button | [Create New Request] link to form |
| **Key Metrics** | Center-specific counts | Enrolled, Submitted, Dispatched |
| **Program Breakdown** | Enrollment by program | Playgroup, Nursery, LKG, UKG with counts |
| **Status Breakdown** | Request status summary | Enrolled (no request), Submitted, Dispatched |
| **Enrollment Trend** | Bar chart over time | Monthly enrollment |
| **Year Comparison** | Enrollment growth | Current vs. previous year, growth %, absolute change |

---

## Wireframe: Franchisee Kit Request Creation Flow

### Step 1: Initiate Request

**OBSERVED** | Kit-Management-Franchisee.pdf shows "Create Kit Request" action

```
┌─────────────────────────────────────────────────────────────────┐
│                     CREATE KIT REQUEST                          │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Current Enrolled Students:                                     │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ [ ] Student Name A      │ Playgroup  │ Enrollment: 001  │  │
│  │ [ ] Student Name B      │ Nursery    │ Enrollment: 002  │  │
│  │ [ ] Student Name C      │ LKG        │ Enrollment: 003  │  │
│  │ [ ] Student Name D      │ UKG        │ Enrollment: 004  │  │
│  │     [more students...]                                  │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  Instructions:                                                  │
│  Select students who need kits. Kit amount is determined by   │
│  their program level.                                          │
│                                                                   │
│  Selected: 0 students | Total Amount: ₹0                       │
│                                                                   │
│  ┌────────────┐  ┌────────────────────┐                         │
│  │ Cancel     │  │ Continue → Pay     │ [Accent color]          │
│  └────────────┘  └────────────────────┘                         │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Interaction pattern:** Checkbox selection with real-time summary update.

### Step 2: Payment Information

**OBSERVED** | Kit-Management-Franchisee.pdf shows Payment Details form

```
┌─────────────────────────────────────────────────────────────────┐
│                  PAYMENT INFORMATION                            │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Request Summary:                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Students Selected: 5                                    │  │
│  │ Total Amount: ₹2,500 (@₹500 per kit)                   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  Payment Details:                                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Payment Amount                                          │  │
│  │ [₹2,500_____________________________]                    │  │
│  │                                                          │  │
│  │ Payment Date                                            │  │
│  │ [__ / __ / ____]                                        │  │
│  │                                                          │  │
│  │ Payment Method                                          │  │
│  │ (•) Cheque    ( ) Bank Transfer    ( ) Other           │  │
│  │                                                          │  │
│  │ Cheque Details / Bank Reference                         │  │
│  │ [_____________________________________]                 │  │
│  │                                                          │  │
│  │ Bank Name                                               │  │
│  │ [_____________________________________]                 │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌────────────┐  ┌────────────────────┐                         │
│  │ ← Back     │  │ Submit Request     │ [Accent color]          │
│  └────────────┘  └────────────────────┘                         │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Interaction pattern:** Form with conditional visibility (payment method changes visible fields).

---

## Wireframe: Kit Request List (Both Users)

### Franchisor Request List

**OBSERVED** | Kit-Management-HO.pdf Kit Requests section

```
┌─────────────────────────────────────────────────────────────────┐
│                     KIT REQUESTS                                │
│                                                                   │
│  Filters: [Status ▼] [Center ▼] [Program ▼] [Month ▼]         │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Center Name A     │ Date    │ Students │ Amount  │Status│  │
│  │ ────────────────────────────────────────────────────────│  │
│  │ Center A (East)   │ Mar 15  │ 5        │ ₹2,500  │✓Done   │  │
│  │ Center B (West)   │ Mar 14  │ 3        │ ₹1,500  │⏳Pend  │  │
│  │ Center C (North)  │ Mar 13  │ 7        │ ₹3,500  │✓Done   │  │
│  │ [More rows...]                                          │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  [Pagination: Page 1 of 8]                                     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

Click on row → Opens detail view
```

### Franchisee Request List

**OBSERVED** | Kit-Management-Franchisee.pdf Kit Requests section

```
┌─────────────────────────────────────────────────────────────────┐
│                     KIT REQUESTS                                │
│                                                                   │
│  [Create New Request] (Accent color button)                    │
│                                                                   │
│  Filters: [Status ▼] [Month ▼]                                 │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Date    │ Students │ Amount   │ Status │ Action        │  │
│  │ ────────────────────────────────────────────────────────│  │
│  │ Mar 15  │ 5        │ ₹2,500   │ ✓Disp  │ View Details  │  │
│  │ Mar 10  │ 3        │ ₹1,500   │ ⏳Pend  │ View Details  │  │
│  │ Mar 1   │ 7        │ ₹3,500   │ ✓Disp  │ View Details  │  │
│  │ Feb 20  │ 4        │ ₹2,000   │ ✓Disp  │ View Details  │  │
│  │ [More rows...]                                          │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

Status legend:
✓Disp = Dispatched (kits sent)
⏳Pend = Pending (awaiting Franchisor dispatch)
```

---

## Wireframe: Kit Request Detail View

### Franchisor Request Detail

**OBSERVED** | Kit-Management-HO.pdf request detail screen

```
┌─────────────────────────────────────────────────────────────────┐
│                   KIT REQUEST - DETAIL VIEW                     │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─ REQUEST HEADER ─────────────────────────────────────────┐  │
│  │ Center Name: Center A (East)                             │  │
│  │ Request Date: March 15, 2024                             │  │
│  │ Status: Submitted  [Approve] [Reject] (Action buttons)  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ SELECTED STUDENTS ──────────────────────────────────────┐  │
│  │ Student Name      │ Program │ Amount   │                 │  │
│  │ ─────────────────────────────────────────               │  │
│  │ Student A         │ Nursery │ ₹500     │                 │  │
│  │ Student B         │ Nursery │ ₹500     │                 │  │
│  │ Student C         │ LKG     │ ₹500     │                 │  │
│  │ [+ 2 more students]                                      │  │
│  │                                                            │  │
│  │ Total: ₹2,500                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ PAYMENT INFORMATION ────────────────────────────────────┐  │
│  │ Payment Amount: ₹2,500                                   │  │
│  │ Payment Date: March 15, 2024                             │  │
│  │ Payment Method: Cheque                                   │  │
│  │ Cheque Reference: CHQ-2024-001                           │  │
│  │ Bank Name: ABC Bank                                      │  │
│  │ Payment Status: Verified ✓                               │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ DISPATCH INFORMATION ───────────────────────────────────┐  │
│  │ Dispatch Status: Dispatched (Partial)                    │  │
│  │ Kits Dispatched: 4 of 5                                  │  │
│  │ Dispatch Date: March 20, 2024                            │  │
│  │ Tracking Reference: TRK-2024-001                         │  │
│  │ Pending Kit: 1 (Expected: March 25)                      │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌────────────┐  ┌────────────┐                                 │
│  │ Back       │  │ Create new dispatch (if applicable)      │  │
│  └────────────┘  └────────────┘                                 │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Franchisee Request Detail

**OBSERVED** | Kit-Management-Franchisee.pdf request detail screen

```
┌─────────────────────────────────────────────────────────────────┐
│                   KIT REQUEST - DETAIL VIEW                     │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─ REQUEST SUMMARY ────────────────────────────────────────┐  │
│  │ Request Date: March 15, 2024                             │  │
│  │ Request ID: KIT-2024-0045                                │  │
│  │ Status: Dispatched (Partial) ✓ ⏳                        │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ STUDENTS IN THIS REQUEST ────────────────────────────────┐  │
│  │ Student Name  │ Program │ Status │ Dispatch Date │       │  │
│  │ ────────────────────────────────────────────────── │       │  │
│  │ Student A     │ Nursery │ Dispatched │ Mar 20    │       │  │
│  │ Student B     │ Nursery │ Dispatched │ Mar 20    │       │  │
│  │ Student C     │ LKG     │ Dispatched │ Mar 20    │       │  │
│  │ Student D     │ LKG     │ Dispatched │ Mar 20    │       │  │
│  │ Student E     │ Playgroup │ Pending │ Expected: Mar 25 │  │  │
│  │                                                            │  │
│  │ Total Students: 5                                          │  │
│  │ Total Amount: ₹2,500                                       │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ PAYMENT DETAILS ────────────────────────────────────────┐  │
│  │ Amount Paid: ₹2,500                                      │  │
│  │ Payment Date: March 15, 2024                             │  │
│  │ Payment Method: Cheque (CHQ-2024-001)                    │  │
│  │ Status: Verified ✓                                        │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ DISPATCH DETAILS ───────────────────────────────────────┐  │
│  │ Kits Dispatched: 4 of 5                                  │  │
│  │ Dispatch Date: March 20, 2024                            │  │
│  │ Tracking Reference: TRK-2024-001                         │  │
│  │                                                            │  │
│  │ Pending:                                                  │  │
│  │ Student E's kit is expected by March 25.                 │  │
│  │ If you have questions, contact support.                  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌────────────┐                                                 │
│  │ Back       │                                                 │
│  └────────────┘                                                 │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Wireframe: Franchisor Report Views

### Kit Requests Report (by Center)

**OBSERVED** | Kit-Management-HO.pdf reports section

```
┌─────────────────────────────────────────────────────────────────┐
│                   KIT REQUESTS REPORT                           │
│                                                                   │
│  Report Type: [By Center ▼]                                     │
│  Date Range: [All Time ▼] or [Custom Range]                    │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Center Name    │ Enrolled │ Submitted │ Dispatched │ %  │  │
│  │ ────────────────────────────────────────────────────────│  │
│  │ Center A (East)│ 30       │ 28        │ 25         │83% │  │
│  │ Center B (West)│ 26       │ 24        │ 22         │85% │  │
│  │ Center C       │ 28       │ 26        │ 20         │71% │  │
│  │ Center D       │ 22       │ 12        │ 8          │36% │  │
│  │ TOTAL          │ 106      │ 90        │ 75         │71% │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  [Download Report as PDF/Excel]                                │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Program-wise Breakdown

**OBSERVED** | Kit-Management-HO.pdf reports

```
┌─────────────────────────────────────────────────────────────────┐
│                   PROGRAM-WISE REPORT                           │
│                                                                   │
│  Report Type: [By Program ▼]                                    │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Program    │ Enrolled │ Submitted │ Dispatched │ %     │  │
│  │ ───────────────────────────────────────────────────────│  │
│  │ Playgroup  │ 28       │ 25        │ 20         │71%    │  │
│  │ Nursery    │ 26       │ 24        │ 22         │85%    │  │
│  │ LKG        │ 30       │ 28        │ 25         │83%    │  │
│  │ UKG        │ 22       │ 13        │ 8          │36%    │  │
│  │ TOTAL      │ 106      │ 90        │ 75         │71%    │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  [Bar Chart: Enrollment vs Dispatch by Program]                │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Monthly Trend Report

**OBSERVED** | Kit-Management-HO.pdf reports

```
┌─────────────────────────────────────────────────────────────────┐
│                   MONTHLY TREND REPORT                          │
│                                                                   │
│  Report Type: [By Month ▼]  Year: [2024 ▼]                     │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Month  │ Enrolled │ Submitted │ Dispatched │ Collected │  │
│  │ ────────────────────────────────────────────────────────│  │
│  │ Jan    │ 15       │ 14        │ 12         │ ₹6,000    │  │
│  │ Feb    │ 22       │ 20        │ 18         │ ₹9,000    │  │
│  │ Mar    │ 28       │ 25        │ 20         │ ₹10,000   │  │
│  │ Apr    │ 18       │ 16        │ 12         │ ₹6,000    │  │
│  │ TOTAL  │ 83       │ 75        │ 62         │ ₹31,000   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  [Trend Line Chart: Enrollment across months]                  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Financial Collection Report

**OBSERVED** | Kit-Management-HO.pdf reports on payment collection

```
┌─────────────────────────────────────────────────────────────────┐
│                   RESOURCE FEE COLLECTION                       │
│                                                                   │
│  Center: [All Centers ▼]  Date Range: [This Year ▼]            │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Center Name    │ Amount Due │ Amount Collected │ Status │  │
│  │ ────────────────────────────────────────────────────────│  │
│  │ Center A       │ ₹15,000    │ ₹15,000          │ ✓ Paid │  │
│  │ Center B       │ ₹13,000    │ ₹10,000          │ ⏳Pending │  │
│  │ Center C       │ ₹14,000    │ ₹12,000          │ ⏳Pending │  │
│  │ Center D       │ ₹11,000    │ ₹8,000           │ ⏳Pending │  │
│  │ ────────────────────────────────────────────────────────│  │
│  │ TOTAL          │ ₹53,000    │ ₹45,000          │        │  │
│  │ Outstanding    │            │ ₹8,000 (15%)     │        │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─ SUMMARY ────────────────────────────────────────────────┐  │
│  │ Collection Rate: 85%                                     │  │
│  │ Amount Pending: ₹8,000                                   │  │
│  │ Followup Required: 2 centers                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Interaction Patterns

### 1. Status Indicators (Consistent Across Both Users)

**OBSERVED** | Used throughout all views

```
✓ Enrolled        = Neutral gray (background, primary action pending)
⏳ Submitted       = Neutral gray (waiting for Franchisor action)
✓ Dispatched      = Accent green/success (complete)
⏳ Pending (partial) = Accent orange (in progress, not yet complete)
```

### 2. Filtering and Sorting

**PATTERN OBSERVED**

- **Franchisor filters:** Status, Center, Program, Month, Year
- **Franchisee filters:** Status, Month
- All list views support sorting by date (newest first default)

### 3. Form Validation

**PATTERN OBSERVED**

- **Franchisee request form:** Cannot submit without selecting at least one student
- **Payment form:** Cannot submit without all required fields (Amount, Date, Method, Bank, Reference)
- Real-time calculation of totals as students are selected/deselected

### 4. Responsive Behavior

**INFERRED** from the product screens

- **Desktop:** Full table layout with all columns visible
- **Tablet:** Condensed columns, additional detail view links
- **Mobile:** Card layout (not shown in source material, but likely pattern)

---

## Key UX Principles Reflected in Wireframes

### 1. Task Clarity for Franchisee

The request creation flow is linear and unambiguous:
1. See enrolled students
2. Select students
3. Confirm amount
4. Provide payment info
5. Submit

No backtracking; no unnecessary options.

### 2. Operational Visibility for Franchisor

The dashboard immediately answers:
- How many students are in the system?
- How many kit requests are pending?
- How many have been fulfilled?
- Which centers are lagging?
- Is payment on track?

### 3. Status-Driven Communication

Status indicators (Enrolled, Submitted, Dispatched) are used consistently to show where each request stands in its lifecycle.

### 4. Program-Based Grouping

Since kit composition is program-specific (Playgroup ≠ Nursery ≠ LKG ≠ UKG), all reporting and student selection uses programs as the primary grouping axis.

### 5. Partial Fulfillment Support

The system acknowledges that kits may be dispatched partially. Franchisee can see which students have received kits and which are still pending.

---

## Information Flow Diagram

```
┌─────────────────────────┐
│   Franchisee Action:    │
│  "Create Kit Request"   │
└────────────┬────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Step 1: Select Students by Program  │
│ (Calculates amount: Program Kit Fee │
│  × Number of Students)              │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Step 2: Provide Payment Information │
│ (Amount, Date, Method, Reference)   │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Step 3: Submit Request              │
│ Request Status = "Submitted"        │
└────────────┬────────────────────────┘
             │
             ↓ (Sent to Franchisor)
┌─────────────────────────────────────┐
│   Franchisor View:                  │
│ "Kit Requests" list shows new req   │
│ Status = "Submitted"                │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Franchisor Action:                  │
│ Review request, validate payment    │
│ Approve → Create dispatch order     │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ System: Create dispatch (full or    │
│ partial based on kit stock)         │
│ Request Status = "Dispatched"       │
└────────────┬────────────────────────┘
             │
             ↓ (Visible to Franchisee)
┌─────────────────────────────────────┐
│ Franchisee Visibility:              │
│ Request detail shows:               │
│ - Students received kits ✓          │
│ - Students pending kits ⏳          │
│ - Expected dispatch date            │
└─────────────────────────────────────┘
```

---

## Summary

This wireframe document captures:

1. ✅ **Navigation structures** for both Franchisor and Franchisee
2. ✅ **Dashboard layouts** showing key metrics and breakdowns
3. ✅ **Multi-step request workflow** for Franchisee
4. ✅ **List and detail views** for request management
5. ✅ **Reporting frameworks** (by center, program, month, year, collection)
6. ✅ **Interaction patterns** (filtering, status indicators, form validation)
7. ✅ **Information flow** from Franchisee action through Franchisor fulfillment

The wireframes are based on the final product screens and represent the designed solution, not low-fidelity explorations. They serve as a blueprint for understanding the module's structure and user flows.
