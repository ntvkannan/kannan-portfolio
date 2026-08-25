# School ERP — Asset Manifest (Final Verified)

**Purpose:** Document the 6 core P1 assets for School ERP case study based on verified PDF evidence.

**Status:** Ready for asset extraction phase (images NOT extracted yet)

**Created:** 2026-08-24

**Revision:** Based on direct PDF inspection verification

---

## CORE P1 ASSETS — 6 VERIFIED

---

## ASSET 1: DASHBOARD — CROPPED HERO

**Asset ID:** school-erp-dashboard

**Asset Name:** Dashboard (Cropped)

**Source PDF:** home.pdf

**Page Number:** Page 1-2 (verified)

**Verified Evidence:**
- Dashboard overview showing:
  - 185 Leads (count visible)
  - 150 Registrations (count visible)
  - 100 Enrollments (count visible)
  - Navigation menu
  - Product branding ("Simple | Smart | Scalable")
  - User welcome area

**Purpose:** Hero image, product overview entry point

**Case Study Section:** Hero (01) / Understanding the Challenge (03)

**What It Demonstrates:**
- System breadth (cross-domain overview)
- Navigation structure
- Home entry point
- System identity

**Crop Guidance:**
- Include: Dashboard navigation, stats area, system overview
- Exclude: Activity stream, personal task descriptions, staff names, student names
- Preferred: Clean dashboard overview without personal communication data
- Show system architecture/navigation without compromising privacy

**Privacy Level:** REVIEW / CROP REQUIRED

**Specific Privacy Concerns:**
- Activity stream contains personal task descriptions ("remind parents to submit Samuel's school records")
- Staff names visible in task assignments ("Oliva", "Jagadhish", "Aadesh")
- Student names referenced in personal tasks

**Redaction Strategy:**
- Crop to exclude activity stream entirely, OR
- Redact task descriptions and personal names if activity stream must be shown
- Preserve dashboard structure and navigation

**Proposed Filename:** school-erp-dashboard.png

**Desktop Presentation:** Full-width hero

**Mobile Presentation:** Full-bleed responsive

**Alt Text:** "School ERP home dashboard showing navigation menu, system overview with admissions counts (185 leads, 150 registrations, 100 enrollments), and operational entry points."

**Status:** ✅ VERIFIED

---

## ASSET 2: LEAD LIST

**Asset ID:** school-erp-lead-list

**Asset Name:** Lead Management List

**Source PDF:** Lead.pdf

**Page Number:** Page 1-2 (verified)

**Verified Evidence:**
- Lead list view showing:
  - "Search 185 records" (volume)
  - Lead example: "Kevin Lee Franklin"
  - Program: "Early Explorers"
  - Age: "0 years 11 months"
  - Assigned To: "Oliva"
  - Lead Date: "Mar 08, 2018"
  - Phone No: "60189895743"
  - Email ID: "michelle.lee@gmail.com"
  - Stage: "Lead"
  - Action buttons: Change Status, Tag, Email, Delete, Assign, Wait List

**Purpose:** Primary admissions workflow entry point, lead management and tracking

**Case Study Section:** Admissions Workflow — Stage 1 (05)

**What It Demonstrates:**
- List view structure (columns, search, filter, actions)
- Lead information organization
- Record volume and management
- Status and assignment tracking
- Actionable interface (not passive data display)
- Search/filter capabilities
- Bulk actions (Tag, Email, Assign)

**Crop Guidance:**
- Show full list view with: search field, filter options, column headers, multiple visible rows, action buttons
- Preserve enough rows to demonstrate list pattern (minimum 3-5 visible leads)
- Show column headers clearly: Lead name, Program, Age, Assigned To, Lead Date, Phone, Email, Stage, Actions
- Ensure all controls visible (search box, action buttons)

**Privacy Level:** EXTENSIVE REDACTION REQUIRED

**Specific Privacy Concerns:**
- Student/prospect name: "Kevin Lee Franklin"
- Phone number: "60189895743"
- Email address: "michelle.lee@gmail.com"
- Assigned staff name: "Oliva"

**Redaction Strategy:**
- Student name: Replace with "Student Name" or placeholder "Lead 001"
- Phone number: Replace with placeholder "XXX-XXX-XXXX" or blur
- Email address: Replace with placeholder "student@example.com" or blur
- Assigned To: Keep as "Assigned To" label; replace staff name if necessary
- Preserve all field labels and list structure

**Proposed Filename:** school-erp-lead-list.png

**Desktop Presentation:** Side-by-side with explanatory text (60-70% column width)

**Mobile Presentation:** Full-width responsive

**Alt Text:** "School ERP lead management list showing searchable records with prospect information, program details, lead status, assigned staff, contact information, and action controls for lead management."

**Status:** ✅ VERIFIED

---

## ASSET 3: STUDENT + GUARDIAN ENROLLMENT INFORMATION

**Asset ID:** school-erp-student-family-form

**Asset Name:** Student + Guardian Enrollment Information

**Source PDF:** Enrollment.pdf

**Page Number:** Page number to be confirmed during extraction

**Verified Evidence:**
- Enrollment list showing student and guardian information together:
  - Student example: "Mishika Katare"
  - Guardian example: "Manoj Katare"
  - Visible fields: Student | Program | Services | Enrolled On | Gender | Age | Guardian | Phone No | Email ID | Actions
  - Demonstrates semantic grouping of related information (student + guardian)

**Purpose:** Information density and UX structure example, complex form organization

**Case Study Section:** Admissions Workflow — Stage 2 (05) / Managing Information Density (06)

**What It Demonstrates:**
- Complex information capture (student + guardian related data)
- Semantic grouping of related information
- Field organization and hierarchy
- Professional form design for interconnected data
- Information structure showing how multiple related entities are presented
- Visual hierarchy and field separation

**Crop Guidance:**
- Show form view with: Student information section, Guardian information section, field grouping clearly visible
- If multi-page form, select page showing grouping pattern most clearly
- Preserve section headers and visual hierarchy
- Show field labels and organization without requiring all field values be visible
- Ensure form structure remains clear despite redaction

**Privacy Level:** EXTENSIVE REDACTION REQUIRED

**Specific Privacy Concerns:**
- Student name: "Mishika Katare"
- Guardian name: "Manoj Katare"
- Email addresses (guardian and student)
- Phone numbers (guardian and student)
- Date of birth (student)
- Address information (if visible)
- Gender (student)
- Age (student)
- Enrollment dates

**Redaction Strategy:**
- Student name fields: Replace with "Student Name"
- Guardian name fields: Replace with "Guardian Name"
- Email fields: Replace with placeholder "guardian@example.com" or blur
- Phone fields: Replace with placeholder "XXX-XXX-XXXX" or blur
- Date of birth: Replace with sample date or blur
- Address: Blur or replace
- Keep field labels, section headers, and structure fully visible

**Proposed Filename:** school-erp-student-family-form.png

**Desktop Presentation:** Large focused view (70-80% width) with visual callout annotations:
1. Student Information Section
2. Guardian Information Section
3. Field grouping by relationship
4. Section hierarchy and headers
5. Information organization patterns

**Mobile Presentation:** Full-width responsive with simplified annotations

**Alt Text:** "School ERP student and guardian enrollment form showing grouped sections for student information, guardian details, and contact information, demonstrating field organization and information hierarchy for managing related data."

**Status:** ✅ VERIFIED

---

## ASSET 4: NEW ENROLLMENT WORKFLOW

**Asset ID:** school-erp-enrollment-workflow

**Asset Name:** New Enrollment Multi-Step Workflow

**Source PDF:** Enrollment.pdf

**Page Number:** Page number to be confirmed during extraction

**Verified Evidence:**
- Multi-step enrollment workflow consisting of:
  1. Student — Student information entry
  2. Family — Family/guardian information
  3. Program — Program selection with availability/capacity information
  4. Fees — Fee structure, fee heads, amounts, billing cycle, payment schedule
  5. Services — Service assignments and selection
  6. Documents — Required documents, upload and status tracking
  7. Health Record — Health-related information and records

**Purpose:** New enrollment completion workflow, demonstrates multi-step process

**Case Study Section:** Admissions Workflow — Stage 3 (05) / Workflow Completion

**What It Demonstrates:**
- Multi-step workflow structure
- Progressive data collection (student → family → program → fees → services → documents → health)
- Program assignment with availability/capacity
- Fee structure presentation and selection
- Service assignment and selection
- Document management integration
- Health record capture
- Workflow completion and enrollment confirmation

**Crop Guidance:**
- Select strongest clean screen(s) that communicate the workflow progression
- Program step: Show program selection, availability, capacity if visible
- Fees step: Show fee structure, fee heads, amounts, billing/payment information
- Services step: Show available services, selection interface
- Documents step: Show required documents, upload/status interface
- Preserve step titles and progression clarity
- Show enrollment workflow as structured, multi-stage process (not single form)

**Privacy Level:** REQUIRED REDACTION

**Specific Privacy Concerns:**
- Student name (from prior step)
- Guardian name (from prior step)
- Personal contact information
- Selected program (may be student-specific)
- Selected services (connected to student)
- Document status and uploads

**Redaction Strategy:**
- Replace student/guardian names with placeholders
- Blur or replace personal contact information if retained
- Keep program names, service names, document requirements visible
- Preserve workflow structure and progression
- Fee structure information typically safe (amounts, billing cycles)

**Proposed Filename:** school-erp-enrollment-workflow.png (or multiple images for different steps)

**Desktop Presentation:** Shows workflow progression or key steps

**Mobile Presentation:** Full-width responsive

**Alt Text:** "School ERP new enrollment workflow showing multi-step process including student information, family details, program selection with capacity information, fee structure and payment schedule, service assignment, required documents, and health record capture."

**Status:** ✅ VERIFIED

---

## ASSET 5: FEE STRUCTURE — ADMIN CONFIGURATION

**Asset ID:** school-erp-fee-admin

**Asset Name:** Fee Structure Configuration (Admin View)

**Source PDF:** Fee Structure-admin.pdf

**Page Number:** Page number to be confirmed during extraction

**Verified Evidence:**
- Administrative fee configuration interface showing:
  - Fee Structure Name
  - Short Name
  - Expires On (date)
  - Programs (which programs use this fee structure)
  - Fee Heads (categories of fees: Admission, Tuition, etc.)
  - Fee amounts
  - Annual Recurring Fee (information)
  - Admission Fee (amount)
  - Tuition (amount)
  - Amount (general fee display)
  - Due Date (payment due date)
  - Billing Period (billing cycle)
  - Installments (payment installment structure)
  - Late Fee (penalty information)

**Purpose:** Role-based design example (Admin perspective), fee configuration and system management

**Case Study Section:** Role-Aware Experience (07)

**What It Demonstrates:**
- Administrator's perspective on fees (configuration, not application)
- System-wide/organizational-level fee management
- Fee structure definition and setup
- Program-fee relationships
- Billing and payment schedule configuration
- Role-based information presentation (different from school view in Asset 6)
- System administration interface patterns

**Crop Guidance:**
- Show admin fee configuration interface with visible fee structure, programs, fee heads, amounts
- Preserve system-wide perspective (not student-specific)
- Show configuration controls and form structure
- Must contrast clearly with school-view (Asset 6) when shown side-by-side
- Display system-level setup, not individual student assignments

**Privacy Level:** MINIMAL / REVIEW

**Specific Privacy Concerns:**
- Verify no student names appear
- Verify no personal contact information
- System-level configuration view (unlikely to contain personal data)

**Redaction Strategy:**
- Verify before redaction if any personal data visible
- Fee amounts, structure names, program names typically safe (system-level)
- Likely minimal to no redaction needed

**Proposed Filename:** school-erp-fee-admin.png

**Desktop Presentation:** Side-by-side comparison with school view (45% left column)

**Mobile Presentation:** Full-width responsive, stacks above school view (Asset 6)

**Alt Text:** "School ERP fee structure configuration interface showing system-wide program fee setup, fee categories (Admission, Tuition, etc.), amounts, billing periods, installment structure, and late fees for administrative management."

**Status:** ✅ VERIFIED

---

## ASSET 6: STUDENT FEE STRUCTURE — SCHOOL APPLICATION

**Asset ID:** school-erp-fee-school

**Asset Name:** Student Fee Structure (School View)

**Source PDF:** Student Fee Structure - School.pdf

**Page Number:** Page 1-2 (verified)

**Verified Evidence:**
- Student-specific fee assignment and management view showing:
  - Student name: "Kevin Lee Franklin"
  - Program: "VII - B"
  - Enrollment Since: "Feb 2017"
  - Guardian: "Michelle Lee Franklin"
  - Email: "michelle.lee@gmail.com"
  - Phone: "60126817526"
  - Services: Food Program, Transportation, Health, Record, Documents
  - Actions: Assign Batch, Assign Program Fee, Apply Discount, Enroll to Program, Change Program, Tag, Send Email, Log a Call, New Appointment, Change Status, Promote, Withdraw

**Purpose:** Role-based design example (School perspective), student-specific fee management and assignment

**Case Study Section:** Role-Aware Experience (07)

**What It Demonstrates:**
- School/center's perspective on student fees (application, not configuration)
- Student-specific fee assignment and tracking
- Services assigned to student
- Program enrollment and assignment
- Payment/fee management from school perspective
- Actions school staff can take (assign fees, apply discounts, manage enrollments)
- Local view (this center's students), not system-wide
- Clear contrast with admin configuration view (Asset 5)

**Crop Guidance:**
- Show student fee/program assignment view with: Student information, program assignment, services, available actions
- Must show school-specific/student-specific perspective (NOT system-wide)
- Display student context clearly
- Show available actions (Assign Program Fee, Apply Discount, etc.)
- Must contrast clearly with admin view (Asset 5) when shown side-by-side

**Privacy Level:** EXTENSIVE REDACTION REQUIRED

**Specific Privacy Concerns:**
- Student name: "Kevin Lee Franklin"
- Guardian name: "Michelle Lee Franklin"
- Email: "michelle.lee@gmail.com"
- Phone: "60126817526"
- Enrollment date: "Feb 2017"
- Program enrollment details linked to student identity

**Redaction Strategy:**
- Student name: Replace with "Student Name"
- Guardian name: Replace with "Guardian Name"
- Email: Replace with placeholder "guardian@example.com" or blur
- Phone: Replace with placeholder "XXX-XXX-XXXX" or blur
- Enrollment date: Consider whether to keep (linked to identity) or replace
- Keep service names, action buttons, program information visible
- Preserve form structure and school-perspective context

**Proposed Filename:** school-erp-fee-school.png

**Desktop Presentation:** Side-by-side comparison with admin view (45% right column)

**Mobile Presentation:** Full-width responsive, stacks below admin view (Asset 5)

**Alt Text:** "School ERP student fee structure showing student enrollment, program assignment, assigned services (food program, transportation, health, records, documents), and school-specific management actions (assign fees, apply discounts, change program)."

**Status:** ✅ VERIFIED

---

## OPTIONAL DETAIL CROP

### Asset 7: Student Enrollment Detail (Optional)

**Asset ID:** school-erp-enrollment-detail (optional)

**Asset Name:** Student Enrollment Detail (Optional Crop)

**Source PDF:** Lead-Enrollment.pdf

**Page Number:** Page number to be confirmed during extraction

**Verified Evidence:**
- Student enrollment detail view showing:
  - Enrollment information
  - Program details
  - Enrollment Date
  - Joining Date
  - Enrollment Number
  - Family information
  - Services list
  - Documents section
  - Health Record section
  - Enrollment-related actions

**Purpose:** Optional detail crop within enrollment section (not a primary full-page asset)

**Use:** May be used as detail crop if enrollment section needs supporting evidence

**Privacy Level:** EXTENSIVE REDACTION REQUIRED

**Status:** ✅ VERIFIED

**Note:** This is optional and should only be included if final page design warrants additional detail crop. Do not treat as primary asset.

---

## HELD ASSETS (NOT IN PHASE 1)

**The following assets are held for potential Phase 2:**

- Classroom (Class-Room.pdf) — Academic operations
- Reports (Report.pdf) — Reporting and analytics
- Admin Masters (Admin-Master.pdf) — System administration

**Status:** Do not prepare in first implementation. Reconsider only if final page needs supporting evidence beyond core workflow.

---

## DIAGRAM ASSETS (HTML/CSS — NO IMAGE EXTRACTION)

### Diagram 1: Product Ecosystem
- Type: HTML/CSS
- Purpose: Show product breadth and domain organization
- Scope: Admissions, People/Roles, Academic, Operations, Finance, Reporting
- Status: HTML/CSS (no image asset)

### Diagram 2: Information Architecture
- Type: HTML/CSS
- Purpose: Full product structure and module hierarchy
- Scope: Complete IA tree with all major modules
- Status: HTML/CSS (no image asset)

### Diagram 3: Primary Workflow
- Type: HTML/CSS
- Purpose: Lead Management → Student + Family Information → New Enrollment → Program → Fee Structure → Student Fee Assignment
- Scope: Three-stage to six-step progression
- Status: HTML/CSS (no image asset)

---

## PRIMARY CASE STUDY STORY

### Narrative Arc

**From lead management to enrollment and fee administration**

Flow:
```
Lead Management
    ↓
Student + Family Information
    ↓
New Enrollment
    ↓
Program Assignment
    ↓
Fee Structure Configuration
    ↓
Student Fee Assignment
```

**Visual Sequence:**
1. Dashboard (product overview)
2. Lead List (lead management)
3. Student + Family Form (information capture)
4. New Enrollment Workflow (multi-step enrollment)
5. Fee Admin Config (system-level fee structure)
6. Student Fee Assignment (school-specific fee application)

---

## FINAL DECISION

**Core Assets:** 6 screenshots
- Dashboard (cropped hero)
- Lead List
- Student + Family Form
- New Enrollment Workflow
- Fee Admin Configuration
- Student Fee Assignment

**Optional Detail Crop:** 1 (Student Enrollment Detail — only if page design needs it)

**Held Assets:** 3 (Classroom, Reports, Admin Masters — Phase 2 if needed)

**Diagrams:** 3 (Product Ecosystem, Information Architecture, Primary Workflow) — HTML/CSS, no image extraction

**Total:** 6 core + 1 optional + 3 diagrams

---

## NEXT PHASE

**Do NOT proceed until:**
- This manifest is reviewed and approved
- Page design layout is finalized
- Privacy approach is confirmed for each asset
- Page number confirmations gathered (Assets 3, 4, 5)

**Phase 3 Tasks (When Approved):**
1. Extract confirmed page images from source PDFs
2. Apply verified redaction for privacy
3. Optimize images for web (PNG format, 2400px width target)
4. Create HTML/CSS diagram assets
5. Ready for case-study page implementation

---

**Manifest Status: FINAL & VERIFIED**

Ready for review before proceeding to asset extraction.

Do NOT extract images yet.
Do NOT modify source PDFs.
Do NOT build the page.

Awaiting approval to proceed to Phase 3.
