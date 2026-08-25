# School ERP — Asset Extraction Guide (Manual)

**Purpose:** Provide precise instructions for manually preparing School ERP case-study screenshots using professional image/PDF tools.

**Status:** Guide only — do NOT extract, modify PDFs, or build the page.

**Created:** 2026-08-24

**Tool:** Recommended: Illustrator, Preview (Mac), Acrobat, or Chrome Print-to-PDF

---

## BEFORE YOU START

### Source PDFs Location
```
docs/case-studies/school-erp/source/
```

### Asset Output Location
```
public/images/projects/school-erp/
```

### Naming Convention
All files follow pattern: `school-erp-[descriptive-name].png`

### Export Specification
- **Format:** PNG (lossless)
- **Width:** ~2400px when source quality supports it
- **Height:** Maintain source aspect ratio
- **Quality:** Readable UI text, sharp detail, no upscaling
- **No:** Unnecessary whitespace, accidental clipping, artificial enhancement

### Kit Management Convention (Reference)
Existing assets in `public/images/projects/kit-management/` use:
- Filename: `franchisor-dashboard.png`, `lead-list.png`, etc.
- Format: PNG
- Typical size: 80K–400K
- Follow this pattern for School ERP

---

## ASSET 1: DASHBOARD (HERO)

### Source
- **PDF:** home.pdf
- **Exact Page:** Page 1–2
- **Screen:** Dashboard overview showing product home with statistics

### Purpose
Hero image for case study. Product overview demonstrating system entry point and cross-domain scope (admissions, tasks, operations).

### Location Strategy
1. Open home.pdf
2. Page 1 shows login screen
3. Page 2 shows dashboard view
4. Select the dashboard section (NOT the login)

### Crop Instructions

**KEEP VISIBLE:**
- Product title/branding ("Simple | Smart | Scalable")
- Navigation menu
- Dashboard statistics area:
  - 185 Leads (count)
  - 150 Registrations (count)
  - 100 Enrollments (count)
- Home/overview indicator

**REMOVE/EXCLUDE:**
- Activity stream section
- Personal task descriptions
- Task titles with student/staff names
- "Due Today" task details
- Any mentions of specific students (e.g., "Samuel")

**Crop Emphasis:**
- Full-width dashboard (do not crop horizontally)
- Crop vertically to exclude activity stream below statistics
- Keep dashboard header and stats visible
- End crop after visible statistics/overview area

**Result:** Clean product overview showing navigation and high-level statistics without personal information.

### Keep Visible (Checklist)
- [ ] Page title and branding
- [ ] Navigation/menu
- [ ] Leads count (185)
- [ ] Registrations count (150)
- [ ] Enrollments count (100)
- [ ] Dashboard structure/layout

### Redact / Replace
- No redaction typically needed if activity stream is removed

### Output Filename
```
school-erp-dashboard.png
```

### Quality Checklist
- [ ] Dashboard overview clearly visible
- [ ] Statistics readable
- [ ] No activity stream
- [ ] No personal information
- [ ] Clean crop boundary
- [ ] Suitable for hero presentation

---

## ASSET 2: LEAD LIST

### Source
- **PDF:** Lead.pdf
- **Exact Page:** Page 1–2
- **Screen:** Lead management list view showing searchable records

### Purpose
Primary admissions workflow entry point. Demonstrates list view patterns, search/filter, record volume, lead information organization, and action controls.

### Location Strategy
1. Open Lead.pdf
2. Page 1 shows page title "LEAD"
3. Shows lead list with "Search 185 records"
4. Select the full list view

### Crop Instructions

**KEEP VISIBLE:**
- Page title: "LEAD"
- Search box with placeholder/label
- "Search 185 records" or record count indicator
- Filter/action controls (Change Status, Tag, Email, Delete, Assign, Wait List)
- Column headers: Lead | Program | Age | Assigned To | Lead Date | Phone No | Email ID | Stage
- Multiple visible lead rows (minimum 3–5 rows)
- Status/stage information
- Action buttons/controls

**REMOVE/EXCLUDE:**
- Only the visible rows; no need to crop horizontally

**Crop Emphasis:**
- Full width (include all columns)
- Show header row + multiple data rows
- Show search controls at top
- Show action buttons clearly

**Result:** Professional list view demonstrating enterprise information-density pattern, search, filter, and action controls.

### Keep Visible (Checklist)
- [ ] Page title "LEAD"
- [ ] Search/filter controls
- [ ] Record count (185)
- [ ] Column headers
- [ ] Multiple data rows (3–5 minimum)
- [ ] Status/stage indicators
- [ ] Action buttons

### Redact / Replace

**ALL rows should have personal data replaced. Use consistent patterns:**

| Original | Replacement | Notes |
|---|---|---|
| Kevin Lee Franklin | Student Name | Or "Lead 001", "Lead 002", etc. |
| michelle.lee@gmail.com | student@example.com | Generic email placeholder |
| 60189895743 | +00 000 000 0000 | Generic phone format |
| Oliva (Assigned To) | Staff Member | Or Staff_01, Staff_02 |
| Mar 08, 2018 (Lead Date) | Keep as-is or use sample date | Dates are usually safe unless personally identifying |
| Early Explorers (Program) | Keep as-is | Product terminology is safe |

**Redaction Strategy:**
- Replace all student names in visible rows with "Student Name"
- Replace all phone numbers with "+00 000 000 0000" pattern
- Replace all emails with "student@example.com" pattern
- Replace staff assignments with "Staff Member"
- Keep column headers, labels, and program names unchanged
- Preserve list structure and UI hierarchy

### Output Filename
```
school-erp-lead-list.png
```

### Quality Checklist
- [ ] List structure clear
- [ ] Search/filter visible
- [ ] Multiple rows visible
- [ ] No real student names remain
- [ ] No real phone numbers remain
- [ ] No real email addresses remain
- [ ] No staff names remain
- [ ] UI hierarchy preserved
- [ ] Sharp and readable

---

## ASSET 3: STUDENT + FAMILY INFORMATION

### Source
- **PDF:** Enrollment.pdf
- **Exact Page:** Page number to be confirmed during extraction
- **Screen:** Student and guardian information together (list or form view)

### Purpose
Information-density and UX complexity example. Demonstrates how student and guardian/family information are grouped and organized together.

### Location Strategy
1. Open Enrollment.pdf
2. Look for page showing student enrollment records or form
3. Find a view that clearly shows:
   - Student information grouped together
   - Guardian information grouped together
   - The relationship between them
4. IMPORTANT: Determine whether this is a LIST or FORM:
   - If it's a **list/table view**: Use `school-erp-student-family-information.png`
   - If it's a **form view**: Use `school-erp-student-family-form.png`

### Crop Instructions

**KEEP VISIBLE:**
- Student information section/header
- Student name field (will be redacted)
- Program field
- Gender field
- Age field
- Enrollment date field
- Guardian information section/header
- Guardian name field (will be redacted)
- Relationship field (e.g., "Mother", "Father")
- Guardian email field (will be redacted)
- Guardian phone field (will be redacted)
- Section separators/grouping
- Field labels (not values)

**REMOVE/EXCLUDE:**
- Only personal data values (see redaction section)

**Crop Emphasis:**
- Show full form/list with both student and guardian sections
- Preserve visual grouping/hierarchy
- Show section headers clearly
- Include enough rows/fields to demonstrate the pattern

**Result:** Clear demonstration of information grouping and semantic organization for handling related data (student + guardian as a unit).

### Keep Visible (Checklist)
- [ ] Student information section
- [ ] Student fields and labels
- [ ] Guardian information section
- [ ] Guardian fields and labels
- [ ] Section separation/headers
- [ ] Relationship information
- [ ] Enrollment details
- [ ] Information hierarchy preserved

### Redact / Replace

| Original | Replacement |
|---|---|
| Mishika Katare (Student) | Student Name |
| Manoj Katare (Guardian) | Guardian Name |
| Email addresses | guardian@example.com |
| Phone numbers | +00 000 000 0000 |
| Date of birth | DD/MM/YYYY or sample date |
| Specific addresses | Sample Address |
| Gender/Age | Keep as-is or use generic values |
| Relationship (Mother, Father) | Keep as-is (not personally identifying) |
| Program names | Keep as-is |

### Output Filename

**Choose based on source screen type:**

If LIST/TABLE view:
```
school-erp-student-family-information.png
```

If FORM view:
```
school-erp-student-family-form.png
```

### Quality Checklist
- [ ] Student and guardian clearly grouped
- [ ] Section hierarchy visible
- [ ] Field labels clear
- [ ] No real student names
- [ ] No real guardian names
- [ ] No real emails
- [ ] No real phone numbers
- [ ] Information structure preserved
- [ ] Sharp and readable

---

## ASSET 4: NEW ENROLLMENT WORKFLOW

### Source
- **PDF:** Enrollment.pdf
- **Exact Pages:** Pages to be confirmed during extraction (likely pages 3–7)
- **Screens:** Multi-step enrollment workflow

### Purpose
Multi-step enrollment process demonstration. Shows how complex enrollment is broken into progressive stages (student → family → program → fees → services → documents → health).

### Seven-Step Workflow Reference
1. Student — Student information entry
2. Family — Family/guardian information
3. Program — Program selection with capacity
4. Fees — Fee structure, billing, amounts, payment schedule
5. Services — Service assignments and selection
6. Documents — Required documents, upload, status
7. Health Record — Health information and records

### IMPORTANT: Selective Extraction

**Do NOT create one giant screenshot of all seven steps.**

Instead, extract 2–3 distinct, readable screenshots that show key workflow stages.

### Location Strategy
1. Open Enrollment.pdf
2. Pages 3–7 likely contain multi-step workflow
3. For each step, identify if it's visually distinct
4. Select the clearest representations

### Recommended Extraction Strategy

**Option A: Three-Part Workflow** (Recommended if justified by source)
1. Student / Family stage
2. Program / Fees stage
3. Services / Documents stage

**Option B: Two-Part Workflow**
1. Student / Family stage
2. Program / Fees / Services combined

**Option C: Four-Part Workflow** (if source clearly supports distinct stages)
1. Student information
2. Program selection
3. Fees configuration
4. Documents/Health

**Selection Criterion:** Extract only screens that are:
- Visually distinct from adjacent steps
- Large enough to be readable
- Clearly labeled with step/stage name
- Essential to understanding the workflow progression

### Crop Instructions (Per Extracted Screen)

**GENERAL KEEP VISIBLE:**
- Step name/title
- Step number (if shown)
- Input fields/form elements
- Section headers
- Labels and field names
- Program/service/fee terminology (not personal data)
- Workflow progression indicator

**GENERAL REDACT/REPLACE:**
- Student names
- Guardian names
- Email addresses
- Phone numbers
- Personal dates/identifiers
- Specific enrollment numbers

**PRESERVE:**
- Program names (e.g., "Level 2", "VII Std")
- Service names (e.g., "Food Program", "Transportation")
- Fee category names
- Document type names
- Workflow structure and progression

### Output Filenames

**Use based on what you extract:**

If two distinct stages:
```
school-erp-enrollment-student-family.png
school-erp-enrollment-program-fees.png
```

If three or more stages:
```
school-erp-enrollment-student-family.png
school-erp-enrollment-program-fees.png
school-erp-enrollment-documents.png
```

### Quality Checklist (Per Image)
- [ ] Step/stage clearly identified
- [ ] Input fields and labels visible
- [ ] No real student names
- [ ] No real guardian names
- [ ] No real emails/phones
- [ ] Program/service terminology preserved
- [ ] Workflow progression clear
- [ ] Readable at standard resolution

### Decision to Report
After extraction, document in the Asset Tracking Table:
- Exactly how many workflow screenshots extracted
- Which stages each represents
- Rationale for selection

---

## ASSET 5: FEE STRUCTURE — ADMIN

### Source
- **PDF:** Fee Structure-admin.pdf
- **Exact Page:** Page number to be confirmed during extraction
- **Screen:** Administrative fee configuration interface

### Purpose
Role-based design example (Admin perspective). Demonstrates system-level fee structure configuration showing programs, fee categories, amounts, and billing configuration.

### Location Strategy
1. Open Fee Structure-admin.pdf
2. Look for page showing fee configuration interface
3. Should show system-wide fee structure (NOT student-specific)
4. Look for labels like: Fee Structure, Programs, Fee Heads, Amount, Billing, etc.

### Crop Instructions

**KEEP VISIBLE:**
- Fee structure name/title
- Program list or program selection
- Fee heads/categories (Admission, Tuition, etc.)
- Fee amounts
- Billing period
- Installments
- Late fee information
- Configuration controls/buttons
- Section headers

**REMOVE/EXCLUDE:**
- Any student-specific information
- Personal data (if any)

**Crop Emphasis:**
- Full-width fee configuration view
- Show system-level perspective (multi-program, system-wide setup)
- Keep all fee structure elements visible

**Result:** Clear demonstration of administrator's fee configuration workflow (system-wide setup, not student assignment).

### Keep Visible (Checklist)
- [ ] Fee structure setup/configuration
- [ ] Programs list
- [ ] Fee heads/categories
- [ ] Amount fields
- [ ] Billing/payment configuration
- [ ] Configuration controls
- [ ] System-wide perspective (not student-specific)

### Redact / Replace
- Verify: No personal student data should be present
- If any appear, replace with generic values
- Keep all system configuration terminology

### Output Filename
```
school-erp-fee-admin.png
```

### Quality Checklist
- [ ] Admin configuration view clear
- [ ] Fee structure visible
- [ ] Programs shown
- [ ] Fee categories shown
- [ ] Amounts readable
- [ ] System-wide perspective
- [ ] No student names
- [ ] Sharp and readable

---

## ASSET 6: STUDENT FEE STRUCTURE

### Source
- **PDF:** Student Fee Structure - School.pdf
- **Exact Page:** Page 1–2 (verified)
- **Screen:** Student-specific fee assignment and management view

### Purpose
Role-based design example (School perspective). Demonstrates school/center staff view of student fee assignment, showing which student has which program and how fees are applied and managed at the center level.

### Location Strategy
1. Open Student Fee Structure - School.pdf
2. Page 1 shows student fee management view
3. Shows student "Kevin Lee Franklin" with program "VII - B"
4. Shows guardian information and fee structure

### Crop Instructions

**KEEP VISIBLE:**
- Student information (with name to be redacted)
- Program assignment (e.g., "VII - B")
- Program name/type
- Enrollment date
- Guardian information (with names to be redacted)
- Services list (Food Program, Transportation, Health, Records, Documents)
- Fee heads/categories
- Installment information
- Discount controls
- Action buttons (Assign Program Fee, Apply Discount, etc.)
- School/center perspective indicator

**REMOVE/EXCLUDE:**
- Personal contact details (with redaction)

**Crop Emphasis:**
- Show student context and program assignment
- Show services and fees structure
- Show available actions
- Show school-specific perspective

**Result:** Clear demonstration of school staff's fee management workflow (student assignment and operation, not system configuration).

### Keep Visible (Checklist)
- [ ] Student context (name will be redacted)
- [ ] Program assignment
- [ ] Enrollment information
- [ ] Guardian information (names will be redacted)
- [ ] Services list
- [ ] Fee structure/breakdown
- [ ] Installment management
- [ ] Action controls
- [ ] School/center perspective

### Redact / Replace

| Original | Replacement |
|---|---|
| Kevin Lee Franklin (Student) | Student Name |
| Michelle Lee Franklin (Guardian) | Guardian Name |
| michelle.lee@gmail.com | guardian@example.com |
| 60126817526 (Phone) | +00 000 000 0000 |
| Feb 2017 (Enrollment date) | Keep or use sample date |
| VII - B (Program) | Keep as-is |
| Food Program, Transportation, etc. | Keep as-is |

### Output Filename
```
school-erp-fee-school.png
```

### Quality Checklist
- [ ] Student fee management view clear
- [ ] Program assignment visible
- [ ] Services list visible
- [ ] Action controls clear
- [ ] No real student name
- [ ] No real guardian name
- [ ] No real email
- [ ] No real phone
- [ ] School perspective evident
- [ ] Sharp and readable

---

## OPTIONAL: STUDENT ENROLLMENT DETAIL

### Source
- **PDF:** Lead-Enrollment.pdf
- **Exact Page:** Page number to be confirmed during extraction
- **Screen:** Student enrollment detail view

### Purpose
Optional detail crop for enrollment section (only extract if materially improves the workflow story).

### Decision Criterion
Extract ONLY if:
- Source provides visually distinct detail view
- Adds meaningful additional evidence beyond Asset 4
- Improves case study narrative flow
- Does not create redundancy

### If Extracted

**KEEP VISIBLE:**
- Enrollment information
- Student context
- Program details
- Services
- Documents section
- Health record section
- Enrollment-related actions

**REDACT/REPLACE:**
- All personal identifiers (student name, guardian name, contact info)

### Output Filename (If Extracted)
```
school-erp-enrollment-detail.png
```

### Decision to Report
In Asset Tracking Table, document:
- Was optional enrollment detail extracted? YES / NO
- Rationale for decision

---

## HELD ASSETS (DO NOT EXTRACT)

**Do NOT prepare:**
- Classroom (Class-Room.pdf)
- Reports (Report.pdf)
- Admin Masters (Admin-Master.pdf)

These remain on hold for Phase 2 (if needed).

---

## ILLUSTRATOR / PDF TOOL WORKFLOW

### Recommended Process

1. **Open Source PDF**
   - Open home.pdf (or other source) in Illustrator or Preview
   - Locate the verified page number
   - Verify you have the correct screen

2. **Create Working Copy**
   - Export or save the page as a working image (PSD, TIFF, or temporary file)
   - Do NOT modify the original PDF

3. **Crop and Rasterize**
   - Crop to the required area (see crop instructions per asset)
   - If editing in vector (Illustrator), flatten/merge layers
   - Rasterize text if needed for legibility preservation

4. **Replace Personal Data**
   - Use paint/text tools to replace names, emails, phones with generic values
   - Use consistent placeholder patterns (see redaction tables)
   - Ensure redaction completely covers original text
   - No partial visibility of original data

5. **Verify Redaction**
   - Zoom to 200% and check every text field
   - Check peripheral/small text areas
   - Verify no original information remains
   - Verify no blurred/hidden original text underneath

6. **Export PNG**
   - Export as PNG (lossless format)
   - Target width: ~2400px (if source quality supports)
   - Maintain aspect ratio
   - Ensure text is readable
   - Do NOT artificially upscale low-quality sources

7. **Final Verification**
   - Open the exported PNG independently in Preview/image viewer
   - Verify image quality and clarity
   - Verify no original personal information visible
   - Verify no unintended whitespace or clipping
   - Compare against source for accuracy

### Batch Processing Tip
If processing multiple assets from the same PDF:
- Open PDF once
- Extract all relevant pages/crops
- Process all redactions
- Export all PNGs
- Batch verify all redactions

---

## FINAL PRIVACY CHECKLIST

**For every exported PNG, verify:**

- [ ] No real student names remain
- [ ] No real guardian/parent names remain
- [ ] No real phone numbers remain (even partial)
- [ ] No real email addresses remain (even partial)
- [ ] No personal addresses remain
- [ ] No date-of-birth values remain
- [ ] No enrollment IDs or student numbers remain
- [ ] No personal identifiable information in small text
- [ ] No recoverable original text underneath overlays
- [ ] No accidental visibility in peripheral areas
- [ ] Redaction is permanent and complete (PNG is rasterized)

**Export the PNG, re-open it independently, and re-verify privacy.**

---

## FINAL VISUAL QUALITY CHECKLIST

**For every exported PNG, verify:**

- [ ] UI is sharp and clear
- [ ] Text is easily readable at display size
- [ ] Crop boundaries are intentional (no accidental clipping)
- [ ] No unnecessary whitespace
- [ ] Aspect ratio is reasonable for display
- [ ] Color and contrast are clear
- [ ] UI hierarchy is preserved
- [ ] Redaction does not obscure UX evidence
- [ ] Image quality matches existing Kit Management assets
- [ ] File size is reasonable (~80K–400K range)

---

## ASSET TRACKING TABLE

After extracting all assets, document completion in this table:

| Asset | Source PDF | Exact Page | Crop | Redaction | Output Filename | Dimensions (WxH) | Privacy Verified | Quality Verified |
|---|---|---:|---|---|---|---|---|---|
| Dashboard | home.pdf | 1–2 | Exclude activity stream | None needed | school-erp-dashboard.png | 2400×???? | ✓ | ✓ |
| Lead List | Lead.pdf | 1–2 | Full list view | Names, emails, phones, staff | school-erp-lead-list.png | 2400×???? | ✓ | ✓ |
| Student + Family | Enrollment.pdf | TBD | Full form/list | All personal data | school-erp-student-family-[form\|information].png | 2400×???? | ✓ | ✓ |
| Enrollment WF 1 | Enrollment.pdf | TBD | [Stage 1] | Personal data per stage | school-erp-enrollment-[stage].png | 2400×???? | ✓ | ✓ |
| Enrollment WF 2 | Enrollment.pdf | TBD | [Stage 2] | Personal data per stage | school-erp-enrollment-[stage].png | 2400×???? | ✓ | ✓ |
| Enrollment WF 3 | Enrollment.pdf | TBD | [Stage 3] (if extracted) | Personal data per stage | school-erp-enrollment-[stage].png | 2400×???? | ✓ | ✓ |
| Fee Admin | Fee Structure-admin.pdf | TBD | Full config view | None/minimal | school-erp-fee-admin.png | 2400×???? | ✓ | ✓ |
| Fee School | Student Fee Structure-School.pdf | 1–2 | Full student view | Names, emails, phones | school-erp-fee-school.png | 2400×???? | ✓ | ✓ |
| Enrollment Detail | Lead-Enrollment.pdf | TBD | Full detail view (if extracted) | All personal data | school-erp-enrollment-detail.png | 2400×???? | ✓ (if created) | ✓ (if created) |

**Final Notes:**
- Document exact page numbers as you discover them
- Document enrollment workflow stages selected
- Note if optional enrollment detail was extracted and why
- Ensure all redactions are verified before marking private
- Ensure all quality checks pass before marking quality verified

---

## NEXT STEP

After extraction is complete:

1. **Copy all PNGs** to `public/images/projects/school-erp/`
2. **Update asset-manifest.md** with exact page numbers and filenames
3. **Verify source PDFs remain untouched**
4. **Do NOT** build the case-study page yet
5. **Report completion** with file listing and verification summary

---

**Guide Complete**

This document is ready for manual extraction workflow.

Do NOT extract, modify, or build page code until this guide is reviewed.
