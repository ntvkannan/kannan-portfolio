# OSEL Signage CMS

## Project Metadata

-   **Project:** OSEL Signage CMS
-   **Category:** Professional UX/UI
-   **Role:** UX/UI Design
-   **Type:** Enterprise SaaS / Signage Management
-   **Primary focus:** Content management, layouts, scheduling,
    displays, permissions, reporting
-   **Source:** OSEL product PDF and portfolio project information
-   **Case study status:** Content foundation / ready for case-study
    wireframing

------------------------------------------------------------------------

# 1. Hero

## OSEL Signage CMS

### A signage management experience designed to help users create, manage, schedule, and control digital signage content across displays.

**Role:** UX/UI Design\
**Type:** Enterprise SaaS / Signage Management

### Focus Areas

-   Media management
-   Playlists
-   Layouts
-   Layout templates
-   Scheduling
-   Displays and display groups
-   Users and roles
-   Permissions
-   Reports / Proof of Play

------------------------------------------------------------------------

# 2. Project Overview

OSEL is a digital signage management platform represented in the product
screens as a centralized administrative experience for managing signage
content and connected displays.

The product covers multiple related areas including media, media groups,
playlists, layouts, layout templates, schedules, displays, display
groups, users, roles, permissions, reports, and customer/subscription
information.

The case study focuses on the UX/UI work involved in structuring and
designing this interconnected enterprise product experience.

------------------------------------------------------------------------

# 3. Context

Digital signage management involves more than displaying a single piece
of content.

The OSEL product interface shows a broader management ecosystem where
content can be organized, placed into layouts, scheduled, assigned to
displays, and managed through user roles and permissions.

The interface also includes operational areas for displays, reporting,
customers, subscriptions, and add-on services.

This creates a product with several connected management workflows
rather than a single linear task.

------------------------------------------------------------------------

# 4. Design Challenge

The primary design challenge was to organize a broad set of
signage-management capabilities into a coherent enterprise interface.

The product needed to support relationships between:

``` text
Media
   ↓
Media Groups / Playlists
   ↓
Layouts / Templates
   ↓
Schedules
   ↓
Displays / Display Groups
   ↓
Playback / Reporting
```

At the same time, administrative capabilities such as users, roles, and
permissions needed to coexist with the operational signage workflows.

### Design Challenge Summary

> **How can a complex signage-management system be structured so that
> content, layouts, schedules, displays, users, permissions, and
> reporting remain understandable as one connected product?**

This is a design interpretation based on the product structure visible
in the source material. No user-research finding is claimed here.

------------------------------------------------------------------------

# 5. My Role

## UX/UI Designer

The portfolio project identifies the role as **UX/UI Design**.

The available source material demonstrates work across the product's
information structure, workflows, interface screens, forms, lists,
configuration experiences, layout creation, scheduling, display
management, and administration.

### Areas represented in the design

-   Product information structure
-   Navigation
-   Management screens
-   Creation workflows
-   Configuration interfaces
-   Layout and template experiences
-   Scheduling
-   Display management
-   User and role management
-   Permissions
-   Reporting

### Collaboration

Specific team structure, project timeline, and named collaborators are
not documented in the available source material and are therefore
intentionally not claimed in this case study.

------------------------------------------------------------------------

# 6. UX Approach

The case study will present the work around the product's connected
workflows rather than as a collection of isolated screens.

The available design evidence supports the following areas:

``` text
Understand the product structure
          ↓
Organize major management areas
          ↓
Define connected workflows
          ↓
Design reusable management patterns
          ↓
Design detailed task interfaces
          ↓
Present operational status and configuration
```

This represents the structure of the case-study story. It should not be
presented as a documented historical process unless additional project
records confirm the exact process.

------------------------------------------------------------------------

# 7. Product Ecosystem

The OSEL interface covers several connected product areas.

## Core Product Areas

### Content

-   Media
-   Media Groups
-   Media Playlists

The media interface supports content types including Image, Video, PDF,
and Widget. The source also shows media information such as ratio,
group, type, size, and duration.

### Layout

-   Layouts
-   Layout Templates

Layouts can contain multiple regions and support configuration of
dimensions, margins, padding, alignment, styling, and preview.

### Scheduling

Schedules connect a layout with a display or display group for a defined
time period.

The schedule interface includes:

-   Running
-   Upcoming
-   Expired
-   Start date/time
-   End date/time
-   Layout
-   Resolution
-   Assigned display

### Displays

The product includes:

-   Displays
-   Display Groups

Display-management screens support operational information and display
configuration.

### Administration

The product includes:

-   Users
-   Roles
-   Permissions

The permission system covers product features including Display, Display
Group, Layout, Layout Template, Media, Media Group, Media Playlist,
Permission, Report, Role, Schedule, and User.

### Reporting

The Reports area includes **Proof of Play**, providing a reporting view
for signage playback activity.

### Customer / Subscription Management

The source also contains customer and subscription-management screens,
including displays, users, service information, subscription plans,
payment history, and add-ons.

------------------------------------------------------------------------

# 8. Information Architecture

The following is a case-study representation of the product areas
visible in the source material.

``` text
Dashboard / Home

Content
├── Media
├── Media Groups
└── Media Playlists

Layouts
├── Layouts
└── Layout Templates

Scheduling
└── Schedules

Displays
├── Displays
└── Display Groups

Administration
├── Users
├── Roles
└── Permissions

Reports
└── Proof of Play

Customer / Account
└── Subscription / Add-ons
```

This structure should be treated as a source-derived representation of
the available product screens, not as a claim about the original backend
architecture.

------------------------------------------------------------------------

# 9. Core Workflow: Content to Display

One of the strongest ways to explain the OSEL product is through the
relationship between content and playback.

``` text
Create / manage media
        ↓
Organize media into groups or playlists
        ↓
Create or select a layout
        ↓
Assign media to layout regions
        ↓
Create a schedule
        ↓
Assign the schedule to display / display group
        ↓
Monitor / report playback
```

The source material directly demonstrates the layout creation steps and
scheduling interface. The complete end-to-end sequence above is a
case-study synthesis of those product areas.

------------------------------------------------------------------------

# 10. Key Workflow: Creating a Layout

The OSEL PDF shows a three-step **New Layout** workflow:

``` text
1. New Layout
       ↓
2. Choose Template
       ↓
3. Assign Media
```

## Step 1 --- New Layout

The interface provides:

-   Layout Name
-   Layout Description

## Step 2 --- Choose Template

The user can browse a template library.

Templates are represented with:

-   Region count
-   Template name
-   Resolution
-   Ratio
-   Search
-   Sorting
-   Region filtering
-   Created filtering

The source shows examples using a **1024 × 552, 16:9** format.

## Step 3 --- Assign Media

The selected layout contains regions.

The interface allows media to be assigned to a selected region and
provides a preview.

The source shows region information such as:

-   Region name
-   Region dimensions
-   Ratio
-   Number of assigned items
-   Duration
-   Media information
-   Preview

------------------------------------------------------------------------

# 11. Layout Configuration

The layout editor provides configuration controls for selected regions.

Visible configuration areas include:

-   Dimension
-   Width
-   Height
-   Margin
-   Padding
-   Alignment
-   Background
-   Text color
-   Text size

The source also demonstrates a layout with four regions and a 16:9
container.

### Design Significance

The layout experience brings structural configuration and content
assignment into the same workflow.

This allows the case study to demonstrate interaction design beyond
standard CRUD screens.

------------------------------------------------------------------------

# 12. Key Workflow: Scheduling

The Schedule interface provides a management view divided into:

-   Running
-   Upcoming
-   Expired

A schedule entry includes information such as:

-   Schedule name
-   Status
-   Ratio
-   Expiry information
-   From date/time
-   To date/time
-   Layout
-   Resolution
-   Assigned display

### Case Study Story

Scheduling is the point where the designed content becomes operationally
connected to a display.

``` text
Layout
   +
Time period
   +
Display / Display Group
   ↓
Schedule
```

This relationship is an important part of the OSEL product story.

------------------------------------------------------------------------

# 13. Key Workflow: Display Management

The product includes both **Display** and **Display Group** concepts.

Display management is part of the operational side of the product.

The case study should use display-management screenshots to show how the
platform moves from content creation to real-world screen
administration.

### Recommended visual sequence

``` text
Display List
      ↓
Display Detail
      ↓
Configuration / Status
      ↓
Assigned Schedule
```

Only details visibly confirmed in the final screenshots should be
described in the final published case study.

------------------------------------------------------------------------

# 14. Key Workflow: Permissions

OSEL includes a dedicated **Manage Permissions** experience.

The permission matrix includes features such as:

-   Display
-   Display Group
-   Layout
-   Layout Template
-   Media
-   Media Group
-   Media Playlist
-   Permission
-   Report
-   Role
-   Schedule
-   User

The source also shows roles including:

-   Admin
-   Authorizer
-   Publisher

The role-management interface allows a role to be edited and permissions
to be activated.

### Design Challenge

An enterprise product needs to distinguish between what users can see
and what they can manage.

The permissions interface therefore becomes an important part of the
product's administrative UX.

This statement describes the design problem represented by the
interface; it does not claim a documented user complaint.

------------------------------------------------------------------------

# 15. Key Design Challenge 01 --- Managing Product Complexity

## Challenge

The product contains multiple management domains that are related but
serve different purposes.

## Design Thinking

The interface separates major functional areas such as content, layouts,
schedules, displays, reports, and administration.

## Design Decision

Use clear product-level groupings and consistent management patterns
across the platform.

## Result

The final interface presents a broad signage-management system through
recognizable functional areas rather than one undifferentiated
workspace.

------------------------------------------------------------------------

# 16. Key Design Challenge 02 --- Connecting Content to Layouts

## Challenge

Media is not simply uploaded and displayed directly. It can be organized
and assigned to regions within a layout.

## Design Thinking

The layout workflow needs to maintain a relationship between:

``` text
Template
↓
Regions
↓
Media
↓
Preview
```

## Design Decision

The New Layout workflow separates template selection from media
assignment while keeping the selected layout and region context visible.

## Result

The interface provides a structured path from selecting a template to
assigning media to specific regions.

------------------------------------------------------------------------

# 17. Key Design Challenge 03 --- Making Scheduling Operational

## Challenge

A layout becomes operational only when it is connected to a time period
and a display.

## Design Thinking

The schedule interface needs to communicate timing, status, layout,
resolution, and assignment.

## Design Decision

Present schedules as manageable records with clear status categories and
key scheduling attributes.

## Result

The schedule-management interface makes the operational state of
scheduled content visible through Running, Upcoming, and Expired
groupings.

------------------------------------------------------------------------

# 18. Key Design Challenge 04 --- Managing Role-Based Access

## Challenge

The product contains multiple administrative features that may require
different levels of access.

## Design Thinking

Permissions need to be organized by product feature and associated with
defined roles.

## Design Decision

Provide a dedicated permission-management matrix and role-editing
experience.

## Result

The interface makes feature-level access configurable across roles such
as Admin, Authorizer, and Publisher.

------------------------------------------------------------------------

# 19. Key Screens

The final case-study page should curate screenshots into meaningful
groups.

## 19.1 Product / Dashboard

**Purpose:** Establish the overall enterprise product environment.

Show:

-   Primary navigation
-   Product context
-   Major management areas

------------------------------------------------------------------------

## 19.2 Media Management

**Purpose:** Demonstrate content organization.

Show:

-   Media listing
-   Search / filtering
-   Media groups
-   Media playlists
-   Media details
-   Supported content types

------------------------------------------------------------------------

## 19.3 Layout Builder

**Purpose:** Demonstrate a deeper UX workflow.

Recommended sequence:

1.  New Layout
2.  Choose Template
3.  Assign Media
4.  Region configuration
5.  Preview

This should be one of the main visual sections of the case study.

------------------------------------------------------------------------

## 19.4 Layout Templates

**Purpose:** Demonstrate reusable layout structures.

Show:

-   Template library
-   Region count
-   Ratio
-   Dimensions
-   Template editing

------------------------------------------------------------------------

## 19.5 Scheduling

**Purpose:** Demonstrate operational content scheduling.

Show:

-   Running
-   Upcoming
-   Expired
-   Schedule details
-   Assigned display
-   Layout
-   Resolution

------------------------------------------------------------------------

## 19.6 Display Management

**Purpose:** Demonstrate management of connected signage displays.

Show:

-   Display list
-   Display groups
-   Display details
-   Status / configuration where visible

------------------------------------------------------------------------

## 19.7 Permissions

**Purpose:** Demonstrate enterprise administration.

Show:

-   Manage Permissions
-   Role management
-   Feature-level permissions
-   Admin / Authorizer / Publisher roles

------------------------------------------------------------------------

## 19.8 Reports

**Purpose:** Demonstrate operational reporting.

Show:

-   Reports
-   Proof of Play
-   Report creation / selection screens where relevant

------------------------------------------------------------------------

# 20. UI / Visual Design

The OSEL interface should be presented as an enterprise management
product.

The visual story should focus on:

-   Clear information hierarchy
-   Structured data-management screens
-   Consistent controls
-   Filters and search
-   Status indicators
-   Forms
-   Tables / lists
-   Configuration panels
-   Preview areas
-   Multi-step workflows
-   Permission matrices

The final case study should avoid describing a formal design system
unless project documentation confirms that one was created.

------------------------------------------------------------------------

# 21. Reusable Interaction Patterns

The source material demonstrates repeated patterns that can be
highlighted in the case study.

### Management Lists

-   Search
-   Sorting
-   Filtering
-   Pagination
-   Item counts
-   Status

### Forms

-   Labels
-   Inputs
-   Select controls
-   Save / Cancel actions
-   Configuration fields

### Multi-Step Workflow

``` text
Step 1 → Step 2 → Step 3
```

Used for New Layout.

### Configuration Panel

Used for layout-region settings such as dimensions, margin, padding,
alignment, and styling.

### Permission Matrix

Used to manage feature-level access across roles.

------------------------------------------------------------------------

# 22. Research

## Status

No documented user research, interviews, surveys, usability testing,
analytics, participant counts, or research findings are included in the
available OSEL source material.

Therefore this case study intentionally does not include a research
section with fabricated findings.

If additional research documentation becomes available, this section can
be expanded.

------------------------------------------------------------------------

# 23. Usability Testing / Validation

## Status

No documented usability-testing results are included in the available
OSEL source material.

The case study should not claim that the design was usability-tested or
validated unless additional evidence is provided.

------------------------------------------------------------------------

# 24. Technical / Development Collaboration

## Status

The current source material demonstrates the designed product interface
but does not provide sufficient evidence to document a specific
development team structure, frontend technology, handoff process, or
implementation-review process for OSEL.

These details should be added only if supporting project information
becomes available.

------------------------------------------------------------------------

# 25. Outcome

## Design Outcome

The available OSEL screens demonstrate a broad enterprise
signage-management experience covering:

-   Content management
-   Media organization
-   Layout creation
-   Template management
-   Scheduling
-   Display management
-   User management
-   Role management
-   Permissions
-   Reporting
-   Customer / subscription administration

The design brings these areas into a connected administrative product
experience.

## Evidence Limitation

No verified business metrics, user-satisfaction measurements, adoption
figures, conversion improvements, task-time improvements, or other
quantitative outcomes are available in the current source material.

Therefore no numerical outcome claims are included.

------------------------------------------------------------------------

# 26. Reflection / Learnings

## Draft

OSEL demonstrates the importance of designing enterprise products as
connected systems rather than collections of individual screens.

The most significant design consideration is the relationship between
content, layouts, schedules, displays, and administrative permissions.

The project also highlights the need to balance detailed configuration
with a clear management structure. Complex functionality becomes easier
to communicate when related tasks are grouped into understandable
workflows.

### Key takeaway

> **Good enterprise UX is not only about simplifying individual screens.
> It is about making the relationships between complex parts of a system
> understandable.**

This reflection is a design interpretation based on the product
structure shown in the source material.

------------------------------------------------------------------------

# 27. Assets / Screenshot Plan

The OSEL PDF should be treated as the primary visual source for the case
study.

Recommended screenshot groups:

``` text
01 — Product Overview
02 — Media Management
03 — Layout Builder
04 — Template Management
05 — Scheduling
06 — Display Management
07 — User / Role Management
08 — Permissions
09 — Reports
10 — Customer / Subscription Management
```

### Priority Screens

The following should receive the strongest visual emphasis:

1.  Layout creation workflow
2.  Template selection
3.  Media assignment
4.  Scheduling
5.  Display management
6.  Permissions

These areas demonstrate more UX depth than simple listing screens.

------------------------------------------------------------------------

# 28. Proposed Case Study Page Flow

The published page should use a curated story rather than showing every
screen.

``` text
Hero
  ↓
Project Overview
  ↓
Context / Challenge
  ↓
My Role
  ↓
Product Ecosystem
  ↓
Information Architecture
  ↓
Core Workflow
  ↓
Key Design Challenges
  ↓
Layout Builder
  ↓
Scheduling
  ↓
Display Management
  ↓
Permissions
  ↓
Final UI / Supporting Screens
  ↓
Outcome
  ↓
Reflection
  ↓
Next Project
```

------------------------------------------------------------------------

# 29. Evidence Notes

## Verified / Source-derived

The OSEL PDF visibly supports:

-   Media
-   Media Groups
-   Media Playlists
-   Layouts
-   Layout Templates
-   Displays
-   Display Groups
-   Schedules
-   Reports / Proof of Play
-   Users
-   Roles
-   Permissions
-   Customer / subscription screens
-   New Layout workflow
-   Template selection
-   Media assignment
-   Region configuration
-   Running / Upcoming / Expired schedules
-   Admin / Authorizer / Publisher roles
-   Feature-level permission management

## Observed

The interface demonstrates:

-   Multi-step layout creation
-   Template library
-   Region-based layouts
-   Media-to-region assignment
-   Preview
-   Scheduling records
-   Role-based permission configuration
-   Enterprise management patterns

## Inferred

The following are design interpretations and should be written
carefully:

-   The product's complexity requires clear functional grouping.
-   Content, layout, schedule, and display form a connected operational
    workflow.
-   Consistent management patterns help users navigate multiple
    administrative areas.

## Unknown

The following are not documented in the available source material:

-   Project timeline
-   Team size
-   Client / company ownership details
-   User research findings
-   User personas
-   Participant numbers
-   Usability-test results
-   Business metrics
-   Adoption metrics
-   Conversion metrics
-   Quantified task improvements
-   Exact development stack
-   Exact developer/team collaboration process

## Excluded

Do not add unsupported claims until evidence is provided.

------------------------------------------------------------------------

# 30. Implementation Notes

This Markdown file is the **content source** for the OSEL case-study
page.

The next stage should be:

``` text
OSEL case-study content
        ↓
Case-study wireframe
        ↓
Screenshot selection / asset preparation
        ↓
Case-study UI design
        ↓
Next.js implementation
```

Do not begin implementation by inventing missing content.

The case-study page should use the master rules defined in:

`docs/05-case-study-framework.md`

and should remain consistent with the portfolio's existing design
system, sitemap, content structure, and development plan.
