export const caseStudies = {
  "osel-signage-cms": {
    sections: [
      // 03. The Challenge
      {
        type: "problem",
        title: "The Challenge",
        content: "Digital signage management involves more than displaying a single piece of content. The OSEL product manages a broader ecosystem where content is organized, placed into layouts, scheduled, assigned to displays, and managed through user roles and permissions. This creates a product with several connected management workflows rather than a single linear task.",
      },
      {
        type: "challenge-diagram",
        title: "From Content to Displays",
        items: [
          { label: "Media", description: "Content sources" },
          { label: "Layout", description: "Visual structure" },
          { label: "Schedule", description: "Timing & status" },
          { label: "Display", description: "Screen assignment" },
          { label: "Monitor", description: "Playback tracking" },
        ],
        layout: "horizontal",
      },

      // 04. My Role
      {
        type: "role-metadata",
        title: "My Role",
        responsibilities: [
          "Product information structure and navigation",
          "Management screens and workflows",
          "Layout and template creation experiences",
          "Scheduling and display management",
          "User and role-based permissions",
          "Enterprise reporting and administration",
        ],
      },

      // 05. Understanding the Product
      {
        type: "ecosystem-diagram",
        title: "One Platform, Multiple Connected Workflows",
        items: [
          {
            label: "CONTENT",
            items: ["Media", "Media Groups", "Playlists"],
          },
          {
            label: "EXPERIENCE",
            items: ["Layouts", "Layout Templates"],
          },
          {
            label: "OPERATIONS",
            items: ["Schedules", "Displays", "Display Groups"],
          },
          {
            label: "ADMINISTRATION",
            items: ["Users", "Roles", "Permissions"],
          },
        ],
      },

      // 05B. Dashboard Overview (Visual evidence)
      {
        type: "feature-showcase",
        title: "The Dashboard",
        features: [
          {
            title: "Administrative Environment",
            description:
              "The OSEL dashboard provides an at-a-glance view of the overall signage management system, connecting display status, media inventory, scheduled content, and recent activity.",
            image: "/images/projects/osel/dashboard.png",
            imageAlt: "OSEL dashboard showing display, media, schedule and recent activity overview",
          },
        ],
      },

      // 06. Core Workflow
      {
        type: "workflow-visual",
        title: "From Content to Display",
        steps: [
          {
            title: "New Layout",
            description: "Start the layout creation process by defining a name and description",
            image: "/images/projects/osel/layout-step-01.png",
            imageAlt: "OSEL layout creation workflow showing the first step for defining a new layout",
          },
          {
            title: "Choose Template",
            description: "Select a reusable template based on required region structure and display format",
            image: "/images/projects/osel/layout-step-02.png",
            imageAlt: "OSEL layout template selection showing available templates with different region configurations",
          },
          {
            title: "Assign Media",
            description: "Assign media to individual regions while maintaining layout structure and preview visibility",
            image: "/images/projects/osel/layout-step-03.png",
            imageAlt: "OSEL layout workflow showing media assignment to regions with live preview",
          },
          {
            title: "Schedule",
            description: "Connect the layout to a time period and display assignment for scheduled playback",
            image: "/images/projects/osel/scheduling.png",
            imageAlt: "OSEL scheduling interface showing running, upcoming and expired schedules with time and display assignments",
          },
          {
            title: "Display & Monitor",
            description: "Manage connected displays and track assigned schedules and playback status",
            image: "/images/projects/osel/display-detail.png",
            imageAlt: "OSEL display management showing display details and assigned schedule information",
          },
        ],
      },

      // 07. Key Design Challenges
      {
        type: "challenges",
        title: "Key Design Challenges",
        challenges: [
          {
            title: "Structuring Product Complexity",
            challenge:
              "The product contains multiple management domains that are related but serve different purposes.",
            decision:
              "Organize related capabilities into clear product areas with consistent management patterns across the platform.",
            outcome:
              "The final interface presents a broad signage-management system through recognizable functional areas rather than one undifferentiated workspace.",
          },
          {
            title: "Connecting Content to Layouts",
            challenge:
              "Media is not simply uploaded and displayed directly. It must be organized and assigned to regions within a layout.",
            decision:
              "Create a structured workflow that separates template selection from media assignment while maintaining layout context and region visibility.",
            outcome:
              "Users move through a clear path from selecting a template to assigning media to specific regions.",
            image: "/images/projects/osel/layout-builder.png",
            imageAlt: "OSEL layout builder showing flexible region configuration with multiple regions and media assignment options",
          },
          {
            title: "Making Scheduling Operational",
            challenge:
              "A layout becomes operational only when connected to a time period and a display.",
            decision:
              "Present schedules as manageable records with clear status categories and key scheduling attributes.",
            outcome:
              "The schedule interface makes operational state visible through Running, Upcoming, and Expired groupings.",
          },
        ],
      },

      // 08. Enterprise Administration
      {
        type: "feature-showcase",
        title: "Managing Role-Based Access",
        layout: "grid",
        features: [
          {
            title: "Permissions Matrix",
            description:
              "The product includes a dedicated permission-management matrix supporting feature-level access configuration.",
            points: [
              "Feature-level permission control",
              "Granular access management",
            ],
            image: "/images/projects/osel/permissions.png",
            imageAlt: "OSEL permissions screen showing role-based access controls for display management and other features",
          },
          {
            title: "Role Management",
            description:
              "Pre-defined roles such as Admin, Authorizer, and Publisher can be configured and managed through the enterprise administration interface.",
            points: [
              "Pre-defined roles available",
              "Customizable role assignments",
              "Clear role hierarchy",
            ],
            image: "/images/projects/osel/roles.png",
            imageAlt: "OSEL roles interface showing Admin, Authorizer and Publisher role configurations",
          },
        ],
      },

      // 09. Supporting Experience
      {
        type: "feature-showcase",
        title: "Supporting Workflows",
        layout: "grid",
        features: [
          {
            title: "Media Management",
            description:
              "Organize and manage content across multiple media types and create reusable playlists.",
            points: [
              "Content search and filtering",
              "Media groups and organization",
              "Supported content types",
            ],
            image: "/images/projects/osel/media-management.png",
            imageAlt: "OSEL media management interface showing content organization with search, filtering and media type support",
          },
          {
            title: "Proof of Play & Reporting",
            description:
              "Track signage playback activity and operational status through comprehensive reporting features.",
            points: [
              "Playback activity tracking",
              "Status monitoring",
              "Operational insights",
            ],
            image: "/images/projects/osel/proof-of-play.png",
            imageAlt: "OSEL reporting interface showing playback history and proof-of-play metrics for scheduled content",
          },
        ],
      },

      // 10. Outcome
      {
        type: "solution",
        title: "Outcome",
        content:
          "The resulting interface brings content management, layout creation, scheduling, display administration, permissions, and reporting into a connected signage-management experience.",
      },

      // 11. Reflection
      {
        type: "reflection",
        title: "Reflection",
        content:
          "OSEL demonstrates the importance of designing enterprise products as connected systems rather than collections of individual screens. The most significant design consideration is the relationship between content, layouts, schedules, displays, and administrative permissions. Good enterprise UX makes complex relationships understandable.",
      },

      // 12. Next Project
      {
        type: "next-project",
        title: "Next Case Study",
        nextProjectSlug: "advocate-consultation-platform",
      },
    ],
  },
  "advocate-consultation-platform": {
    sections: [
      // 01. The Challenge
      {
        type: "problem",
        title: "The Challenge",
        content: "Connecting clients seeking legal consultation with available advocates requires more than a simple booking system. The platform must support two distinct user groups with different needs: advocates managing professional profiles, availability, subscriptions, and client information; and clients discovering advocates, evaluating credentials, booking appointments, and preparing case details. Both workflows must integrate seamlessly within a single platform.",
      },

      // 02. Designing for Two User Roles
      {
        type: "feature-showcase",
        title: "Designing for Two User Roles",
        features: [
          {
            title: "Advocate Operations",
            description: "Legal professionals need tools to establish credibility, manage their time, handle incoming client bookings, and access case information before consultations. The advocate experience prioritizes profile management, availability control, and appointment administration.",
            points: [
              "Professional profile and credentials",
              "Subscription and service tiers",
              "Availability scheduling",
              "Appointment management",
              "Client case information access",
            ],
            image: "/images/projects/advocate/advocate-02-advocate-registration.png",
            imageRatio: "9:16",
            imageAlt: "Advocate registration form showing profile setup for legal professionals",
          },
          {
            title: "Client Consultation Journey",
            description: "Clients need to discover qualified advocates, evaluate their credentials and specializations, select available time slots, complete payment, and provide case context. The client experience emphasizes discovery, evaluation, booking, and preparation.",
            points: [
              "Location-based advocate discovery",
              "Specialization and rating filters",
              "Advocate profile and testimonials",
              "Appointment booking and payment",
              "Pre-consultation case information",
            ],
            image: "/images/projects/advocate/advocate-06-client-discovery.png",
            imageRatio: "9:16",
            imageAlt: "Client advocate discovery interface showing filtered list of legal professionals",
          },
        ],
      },

      // 03. Advocate Operations Workflow
      {
        type: "workflow-visual",
        title: "Advocate Operations",
        steps: [
          {
            title: "Profile & Registration",
            description: "Set up professional profile with name, qualifications, specialization, and license information",
            image: "/images/projects/advocate/advocate-02-advocate-registration.png",
            imageAlt: "Advocate registration form with fields for personal and professional information",
          },
          {
            title: "Configure Time Slots",
            description: "Define working hours by day and time period, with support for flexible slot durations",
            image: "/images/projects/advocate/advocate-03-time-slot-config.png",
            imageRatio: "9:16",
            imageAlt: "Time-slot configuration interface showing day selection and time period setup",
          },
          {
            title: "Manage Availability",
            description: "View availability calendar and toggle specific time slots between available and unavailable",
            image: "/images/projects/advocate/advocate-04-availability-calendar.png",
            imageRatio: "9:16",
            imageAlt: "Availability calendar showing color-coded available and booked consultation slots",
          },
          {
            title: "Handle Appointments",
            description: "Manage incoming client bookings, view case information, and track appointment status",
            image: "/images/projects/advocate/advocate-05-appointments.png",
            imageRatio: "9:16",
            imageAlt: "Advocate appointments interface showing list of booked consultations with client information",
          },
        ],
      },

      // 04. Client Consultation Journey
      {
        type: "workflow-visual",
        title: "Client Consultation Journey",
        steps: [
          {
            title: "Discover Advocates",
            description: "Search for advocates by location and browse available legal professionals filtered by specialization",
            image: "/images/projects/advocate/advocate-06-client-discovery.png",
            imageAlt: "Client advocate discovery list showing multiple legal professionals with ratings and specializations",
          },
          {
            title: "Evaluate Advocate",
            description: "Review advocate profile, qualifications, experience, specialization, and client testimonials",
            image: "/images/projects/advocate/advocate-07-advocate-profile.png",
            imageRatio: "9:16",
            imageAlt: "Advocate profile showing detailed information including qualifications and client feedback",
          },
          {
            title: "Select & Book Appointment",
            description: "Choose preferred date and time slot, select consultation mode (walk-in or video call), and complete payment",
            image: "/images/projects/advocate/advocate-08-booking.png",
            imageRatio: "9:16",
            imageAlt: "Appointment booking interface showing available time slots for selected date",
          },
          {
            title: "Provide Case Information",
            description: "Add case details, upload supporting documents and attachments to help advocate prepare for consultation",
            image: "/images/projects/advocate/advocate-09-case-information.png",
            imageRatio: "9:16",
            imageAlt: "Case information form with text field and file attachment support for document uploads",
          },
          {
            title: "Track Appointments",
            description: "View upcoming appointments, access appointment details, and manage consultation schedules",
            image: "/images/projects/advocate/advocate-10-client-appointments.png",
            imageRatio: "9:16",
            imageAlt: "Client appointments list showing upcoming and completed consultations with details",
          },
        ],
      },

      // 05. Core Design Challenges
      {
        type: "challenges",
        title: "Core Design Challenges",
        challenges: [
          {
            title: "Time-Slot Configuration at Scale",
            challenge: "Advocates must configure and manage 21+ time slots across a week (7 days × 3 time periods), plus handle flexible slot durations. Without a thoughtful interface, this becomes overwhelming.",
            decision: "Design a modular configuration system that separates day selection, time period entry, and slot size specification. Include an 'apply to all days' toggle to reduce repetition and minimize entry errors.",
            outcome: "Advocates can configure complete weekly schedules in a streamlined, manageable workflow without feeling overwhelmed by data entry.",
            image: "/images/projects/advocate/advocate-03-time-slot-config.png",
            imageAlt: "Time-slot configuration interface with modular design and apply-to-all functionality",
          },
          {
            title: "Availability Visibility & Management",
            challenge: "Advocates need clear visual feedback distinguishing available slots, booked slots, and unavailable times to prevent errors and ensure accurate availability management.",
            decision: "Implement a calendar-grid interface with color-coded states: available (visible), booked (marked), and unavailable (disabled). Add toggle controls for quick slot-state changes.",
            outcome: "Advocates gain at-a-glance clarity of their schedule, reducing mistakes and enabling confident availability management.",
            image: "/images/projects/advocate/advocate-04-availability-calendar.png",
            imageAlt: "Calendar grid showing color-coded time slots with available, booked and unavailable states",
          },
          {
            title: "Trust & Credibility in Advocate Discovery",
            challenge: "Clients must feel confident selecting an unfamiliar advocate for important legal matters. A simple list view is insufficient; clients need credibility signals and clear differentiation.",
            decision: "Combine advocate discovery with visible credentials (specialization, experience, qualifications) and social proof (star ratings and client testimonials). Support filtering and sorting by specialization.",
            outcome: "Clients gain confidence during discovery through visible credibility signals and can quickly identify advocates that match their legal needs.",
            image: "/images/projects/advocate/advocate-06-client-discovery.png",
            imageAlt: "Advocate discovery list with specialization filters, ratings, and client testimonials visible",
          },
          {
            title: "Case Information Collection Before Consultation",
            challenge: "Clients must provide case context for advocates to prepare effectively, but the process should feel natural rather than burdensome. This requires clear structure and file-attachment support.",
            decision: "Create a dedicated case-information form supporting both text descriptions and file uploads. Separate the form into logical sections: case details, attachments, and additional remarks.",
            outcome: "Clients can easily provide comprehensive case information, enabling advocates to prepare for more effective consultations.",
            image: "/images/projects/advocate/advocate-09-case-information.png",
            imageAlt: "Case information form with text input, file attachments, and structured fields",
          },
        ],
      },

      // 06. Key Features & Solutions
      {
        type: "feature-showcase",
        title: "Key Features & Solutions",
        layout: "grid",
        features: [
          {
            title: "Advocate Availability Management",
            description: "A structured time-slot configuration and calendar-based availability interface that makes scheduling intuitive and error-resistant.",
            points: [
              "Modular day and time period setup",
              "Flexible slot durations",
              "Visual availability calendar",
              "Quick state toggles",
            ],
          },
          {
            title: "Location-Based Advocate Discovery",
            description: "Clients discover advocates near them with filtering by specialization, enabling quick identification of qualified legal professionals.",
            points: [
              "Geographic search capability",
              "Specialization filtering",
              "Real-time availability view",
              "Ratings and reviews",
            ],
          },
          {
            title: "Advocate Profile & Trust Building",
            description: "Comprehensive advocate profiles displaying credentials, qualifications, experience, and client testimonials to build client confidence.",
            points: [
              "Detailed qualification display",
              "Client testimonials and ratings",
              "Specialization information",
              "Experience transparency",
            ],
          },
          {
            title: "Appointment Booking & Payment",
            description: "Streamlined booking interface where clients select time slots and complete subscription and payment in a single flow.",
            points: [
              "Visual time-slot selection",
              "Consultation mode choice",
              "Integrated payment processing",
              "Instant confirmation",
            ],
          },
          {
            title: "Pre-Consultation Case Preparation",
            description: "Structured case-information collection enabling clients to provide context and advocates to prepare effectively.",
            points: [
              "Case detail input",
              "File attachment support",
              "Document organization",
              "Advocate access before meeting",
            ],
          },
          {
            title: "Appointment Management for Both Roles",
            description: "Unified appointment tracking that serves both advocates managing their schedule and clients tracking their bookings.",
            points: [
              "Status visibility",
              "Reschedule capability",
              "Case context access",
              "History tracking",
            ],
          },
        ],
      },

      // 07. Reflection
      {
        type: "reflection",
        title: "Reflection",
        content: "Advocate demonstrates the importance of designing two-sided platforms with equal consideration for both user groups. The most significant design consideration is recognizing that advocates and clients have fundamentally different needs within the same platform. Advocates need operational efficiency (scheduling, availability, client information), while clients need confidence-building tools (credibility signals, discovery, evaluation). A successful design bridges these different requirements without compromising either experience. The platform succeeds when both sides feel understood and supported.",
      },

      // 08. Next Case Study
      {
        type: "next-project",
        title: "Next Case Study",
        nextProjectSlug: "school-erp",
      },
    ],
  },
  "school-erp": {
    sections: [
      // 01. The Challenge
      {
        type: "problem",
        title: "01 — The Challenge",
        content: "Building a unified School ERP system meant translating broad requirements into a coherent experience that could serve multiple school roles and workflows simultaneously — across admissions, student enrollment, academic operations, financial management, and staff administration.",
      },

      // 02. My Design Approach
      {
        type: "problem",
        title: "02 — My Design Approach",
        content: "My process: understand the requirements, map key workflows (admissions, enrollment, fee management, staff roles), structure the information architecture, design each workflow's UX, and refine through stakeholder feedback.",
      },

      // 02B. Admin Dashboard
      {
        type: "feature-showcase",
        title: "Administration Dashboard",
        features: [
          {
            title: "Operational Overview",
            description: "An administration-focused dashboard bringing core school operations into one structured view, from programs and academic terms to fee structures, classrooms, activities and events.",
            image: "/images/projects/school-erp/school-erp-dashboard.png",
            imageAlt: "School ERP administration dashboard showing programs, academic terms, fee structures, classrooms, activities and events overview",
          },
        ],
      },

      // 02C. Product Structure
      {
        type: "ecosystem-diagram",
        title: "The School ERP System",
        items: [
          {
            label: "ADMISSIONS",
            items: ["Leads", "Registrations", "Enrollments"],
          },
          {
            label: "PEOPLE",
            items: ["Students", "Families", "Users", "Roles"],
          },
          {
            label: "ACADEMIC",
            items: ["Classes", "Teachers", "Sessions"],
          },
          {
            label: "OPERATIONS",
            items: ["Tasks", "Events", "Activity", "Communication"],
          },
          {
            label: "FINANCE",
            items: ["Fee Structure", "Payments", "Collections"],
          },
          {
            label: "ADMINISTRATION",
            items: ["User Management", "Permissions", "Settings"],
          },
        ],
      },

      // 03. Primary Workflow
      {
        type: "challenge-diagram",
        title: "From Lead Management to Student Fee Assignment",
        items: [
          { label: "Lead Management", description: "Capture and qualify prospects" },
          { label: "Family Records", description: "Connect students with family information" },
          { label: "New Enrollment", description: "Multi-step enrollment process" },
          { label: "Enrollment Management", description: "Manage active enrollments" },
          { label: "Enrollment Detail", description: "Track record history and status" },
          { label: "Fee Structure", description: "Administrative configuration" },
          { label: "Student Fee Assignment", description: "Apply fees to enrolled students" },
        ],
        layout: "vertical",
      },

      // 04. Lead Management
      {
        type: "feature-showcase",
        title: "Lead Management",
        features: [
          {
            title: "High-Volume Lead Tracking",
            description: "The lead management interface demonstrates how to structure a high-volume prospect experience around searchable records, status tracking, assignment, and next actions. Each lead record contains key information — name, program interest, age, assignment, contact information, and lead date — organized in a scannable list format.",
            points: [
              "Search and filtering for 100+ records",
              "Lead status and assignment tracking",
              "Contact information at a glance",
              "Action controls without drilling into detail",
              "Structured column organization",
            ],
            image: "/images/projects/school-erp/school-erp-lead-list.png",
            imageAlt: "School ERP lead management list showing searchable records with prospect information, program details, lead status, assigned staff, contact information, and action controls",
          },
        ],
      },

      // 05. Family & Student Relationships
      {
        type: "feature-showcase",
        title: "Family Records & Relationships",
        features: [
          {
            title: "Family Information Management",
            description: "Family records connect students with related household information, giving staff a structured view of students, parents and other family members within the same record. Families are organized to show the student-family relationship and other household members.",
            points: [
              "Students connected to family records",
              "Family member roles and relationships",
              "Multiple members per household",
              "Centralized household information",
              "Clear member organization by relationship",
            ],
            image: "/images/projects/school-erp/school-erp-student-family-information.png",
            imageAlt: "School ERP family records showing student relationships with parents and household members, demonstrating family-based organization of student information",
          },
        ],
      },

      // 06. New Enrollment Workflow
      {
        type: "feature-showcase",
        title: "New Enrollment — Multi-Step Wizard",
        features: [
          {
            title: "Structured Enrollment Process",
            description: "New enrollment is handled through a structured workflow with dedicated steps: Student, Family, Program, Fees, Services, Health Record, and Documents. Each step focuses on specific data categories, making complex enrollment manageable by breaking it into clear, progressive stages.",
            points: [
              "Seven-step enrollment workflow",
              "Student information as first step",
              "Progressive data collection across related areas",
              "Clear step indicators and navigation",
              "Each stage focused on one data category",
            ],
            image: "/images/projects/school-erp/school-erp-enrollment-1.png",
            imageAlt: "School ERP enrollment wizard showing the student information entry step with tabs for Student, Family, Program, Fees, Services, Health Record, and Documents",
          },
        ],
      },

      // 06B. Enrollment Management
      {
        type: "feature-showcase",
        title: "Enrollment Management",
        features: [
          {
            title: "Active Enrollment Records",
            description: "Once enrollment records are created, staff can manage students across academic year, program and enrollment type while reviewing associated services and guardian information. The enrollment list provides a structured view for managing multiple students.",
            points: [
              "Filter by academic year, program, enrollment type",
              "Search and organize active enrollments",
              "Bulk actions for multiple records",
              "Program fee assignment from list view",
              "Guardian and services information visible",
            ],
            image: "/images/projects/school-erp/school-erp-enrollment-2.png",
            imageAlt: "School ERP enrollment management list showing multiple student records with program, services, and guardian information across academic years",
          },
        ],
      },

      // 06C. Enrollment Detail
      {
        type: "feature-showcase",
        title: "Enrollment Detail & History",
        features: [
          {
            title: "Student Enrollment Record",
            description: "The enrollment record brings program history, activities, notes and status changes into a single detailed view, supporting ongoing management after enrollment. Staff can review the complete enrollment journey and make adjustments as needed.",
            points: [
              "Program history and changes",
              "Activities and service enrollment",
              "Notes and communication record",
              "Enrollment timeline and status",
              "Detailed student context over time",
            ],
            image: "/images/projects/school-erp/school-erp-enrollment-3.png",
            imageAlt: "School ERP enrollment detail showing program history, activities, notes and status changes for an enrolled student",
          },
        ],
      },

      // 07. Role-Based Experience
      {
        type: "problem",
        title: "03 — Role-Based Design",
        content: "The system needed to serve different school roles with fundamentally different perspectives. Administrators need system-wide operational visibility and configuration controls. School/center staff need a local view of their students and operations. The design approach was to create distinct experiences optimized for how each role thinks about their work, rather than forcing them into a unified interface.\n\nA clear example is the fee management experience: administrators configure system-wide fee structures defining fees for all programs and centers, while school staff apply those structures to their specific students and track payments. Both work with the same underlying data, but from completely different perspectives.",
      },

      {
        type: "feature-showcase",
        title: "Admin Configuration vs. School Application",
        features: [
          {
            title: "Fee Structure Management",
            description: "Fee structures are organized as reusable configurations for different program and admission contexts. Administrators can manage multiple fee structures, each tailored to specific program-admission combinations, providing a centralized place to organize and apply fees across the system.",
            image: "/images/projects/school-erp/school-erp-fee-admin.png",
            imageAlt: "School ERP fee structure management showing reusable fee structure configurations organized by program and admission context",
          },
          {
            title: "School-Specific Fee Management",
            description: "School staff manage student-specific fee assignment at the local level, focusing on how individual students are enrolled in programs and assigned fee structures. The view demonstrates fee breakdown, discount management, and related management actions available to school staff.",
            image: "/images/projects/school-erp/school-erp-fee-school.png",
            imageAlt: "School ERP student fee management showing student enrollment, program assignment, fee breakdown, discounts, and school-specific management actions",
          },
        ],
        layout: "stacked",
      },

      // 08. Key Design Decisions
      {
        type: "problem",
        title: "04 — Key Design Decisions",
        content: "Several design decisions emerged from analyzing the School ERP workflows and requirements:",
      },

      {
        type: "role-metadata",
        title: "Design Principles",
        responsibilities: [
          "Separate Role-Based Interfaces — Different roles see different views of the same data (admin sees system configuration; school sees student application), each optimized for their mental model and workflow.",
          "Structured Workflows — Complex enrollment and data capture are broken into clear stages or sections, making the process feel manageable rather than overwhelming.",
          "Information Grouping — Related information (student + guardian) is grouped by semantic relationship, making dense information feel organized.",
          "List-Based Management — High-volume records (leads, students, enrollments) use searchable, filterable lists with status visibility and action controls.",
          "Progressive Disclosure — Complex forms show essential fields by default and provide options to show/hide advanced fields based on user needs.",
          "Consistent Patterns — Navigation, forms, lists, and filters use consistent patterns across modules, making the system feel cohesive despite handling diverse workflows.",
        ],
      },

      // 09. Outcome
      {
        type: "solution",
        title: "Outcome",
        content: "The complete School ERP UX/UI design was approved by the manager and handed over to the development team.",
      },

      // 10. Reflection
      {
        type: "reflection",
        title: "Reflection",
        content: "School ERP demonstrates the importance of approaching enterprise UX as systems thinking. The challenge was not optimizing a single screen, but structuring how dozens of interconnected workflows would be experienced by different user roles.\n\nRole-based design works best when each interface is optimized for a specific mental model rather than forcing all users into one view. Information density becomes manageable through semantic grouping and progressive disclosure. Most importantly, successful enterprise design starts by thoroughly understanding workflows and requirements, translating them into clear user experiences, and refining through stakeholder feedback.",
      },

      // 12. Next Project
      {
        type: "next-project",
        title: "Next Case Study",
        nextProjectSlug: "seafood-restaurant",
      },
    ],
  },
  "seafood-restaurant": {
    sections: [
      // 01. Hero (handled by ProjectPageHero)
      // 02. Project Overview (handled by ProjectOverview)

      // 03. The Challenge
      {
        type: "problem",
        title: "03 — The Challenge",
        content: "The restaurant needed to move beyond traditional approaches to reach customers online. The design work required several things simultaneously:\n\nFirst, creating a website that presented the menu clearly and made ordering straightforward. Second, establishing consistent visual presence across digital and print—the website, menu card, and promotional materials all needed to feel connected. Third, working within the limitations of the Google Sites platform while still achieving a professional, custom-designed feel.\n\nThe challenge wasn't just building a website; it was creating a complete brand experience across multiple formats.",
      },

      // 04. Designing Within Constraints
      {
        type: "problem",
        title: "04 — Designing Within Constraints",
        content: "I implemented the website using Google Sites, which meant working within a templated platform rather than custom development. This introduced real constraints—limited layout flexibility, predefined component options, and less control over responsive behavior than a custom-built site would offer.\n\nRather than see this as a limitation, I approached it as a design problem to solve. The focus became making intentional decisions about information hierarchy, content organisation, spacing, imagery, and visual consistency. Within the available layout options, I structured the pages to guide visitors clearly from first impression to menu discovery to ordering.\n\nThe result was a website that feels designed and considered, despite the platform's constraints. The visual direction and hierarchy were strong enough that the platform boundaries became invisible to the visitor.",
      },

      // 05. Website UX/UI
      {
        type: "problem",
        title: "05 — Website UX/UI",
        content: "The website needed five main sections: a home page to establish first impression and value; an About section to build trust; a Menu page for detailed offerings; an FAQ for customer questions; and a Contact page for ordering and location information. This structure created a clear path: discover → understand → browse menu → order.\n\nThe home page was the strongest part of the design. It opened with a clear tagline—\"Fresh Seafood Menu Crafted for You\"—followed by six value proposition cards explaining what made the restaurant different: fresh catch, no mixing of stocks, no chemicals, chettinad taste, hygienic preparation, and premium quality at honest pricing. Below that, I structured a menu showcase with food categories (Fry, Curry, Combo), a four-step process flow showing how to order, and owner information with an embedded map. The design guided visitors through a journey: who are you, what do you offer, how do I order, where are you located.\n\nThe menu page presented categories and items with descriptions and pricing, organized for easy scanning. Contact and ordering were made prominent throughout: WhatsApp for direct pre-ordering, Zomato for aggregator ordering, QR codes for quick access, and the business phone number repeated at multiple points. The design removed friction from the ordering process.",
      },

      // 05B. Website Showcase
      {
        type: "feature-showcase",
        title: "Website Structure in Practice",
        features: [
          {
            title: "Homepage",
            description: "Hero section with tagline and value propositions, menu showcase, process flow, and owner information with location.",
            image: "/images/projects/seafood-restaurant/home.png",
            imageAlt: "Sakisa Seafoods website homepage showing hero section, value propositions, menu categories, process flow, and location information",
            imageRatio: "auto",
          },
          {
            title: "Menu Page",
            description: "Organized menu categories with food imagery and clear information hierarchy for browsing.",
            image: "/images/projects/seafood-restaurant/menu.png",
            imageAlt: "Sakisa Seafoods website menu page showing organized food categories and items",
            imageRatio: "auto",
          },
          {
            title: "Contact & Ordering",
            description: "Multiple ordering options integrated throughout the site: WhatsApp, Zomato, QR codes, and map location.",
            image: "/images/projects/seafood-restaurant/contact.png",
            imageAlt: "Sakisa Seafoods website contact section with WhatsApp and Zomato ordering options and location map",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 06. Visual Language
      {
        type: "problem",
        title: "06 — Creating the Visual Language",
        content: "The visual direction wasn't something I inherited—the client provided the logo, but the color system, typography, layout approach, and consistency across materials were design decisions I made.\n\nThe palette used a deep brown/burgundy primary with golden yellow/orange accents and cream backgrounds. This combination conveyed warmth and trust while supporting appetite appeal for food imagery. The typography was clean and readable across scales, with strong heading hierarchy to guide scanning. The layout used structured sections, clear grouping, and balanced imagery to create visual rhythm.\n\nThese choices weren't complicated, but they were intentional. Every element served the goal of presenting the restaurant as professional and trustworthy while feeling approachable. The bilingual presentation—English and Tamil—ensured local relevance.\n\nThe strongest part of this visual language was its consistency. The same colors, typography, and layout patterns appeared on the website, menu card, and flyer. That consistency created recognition and professionalism across multiple contexts.",
      },

      // 07. Menu Card
      {
        type: "problem",
        title: "07 — Menu Card",
        content: "I designed the menu card from scratch as a single-page, double-sided format. The layout featured a circular arrangement of food dishes at the center—a visual anchor that made the card memorable and visually interesting. Around that, I organised the actual menu into categories: Curry, Fried, Masala, Meals, Dinner.\n\nThe design decisions were practical ones. The circular arrangement caught attention and broke the monotony of lists. The category organisation made the card scannable—a customer could quickly find what they were looking for. Pricing was clear and consistent. The logo and tagline grounded the card as a Sakisa Seafoods piece.\n\nThe menu names and pricing came from the business; the way I organised them, the visual hierarchy, the color treatment, the overall layout—those were design contributions.",
      },

      // 07B. Menu Card Visual
      {
        type: "feature-showcase",
        title: "Menu Card Design",
        features: [
          {
            title: "Menu Card",
            description: "Circular food arrangement anchors the design, with bilingual menu categories organized for easy browsing and clear pricing.",
            image: "/images/projects/seafood-restaurant/menu-card.png",
            imageAlt: "Sakisa Seafoods printed menu card with circular food arrangement and organized menu categories in English and Tamil",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 08. Promotional Flyer
      {
        type: "problem",
        title: "08 — Promotional Flyer",
        content: "The flyer was a front/back promotional piece designed to catch attention and drive ordering. The front side featured a large circular food arrangement paired with messaging about quality: \"Fresh Catch. No Mixing. No Chemicals. Chettinad Taste. Hygienic. Premium Quality.\" This wasn't marketing fluff—these were actual business practices the owner could stand behind.\n\nThe back side organised the menu by category with food imagery and prominent ordering CTAs: WhatsApp, Zomato, and QR codes. The design used the same color system and typography as the website and menu card, creating visual continuity.\n\nI also created an alternate flyer version, exploring different compositions while maintaining the same visual language and messaging.\n\nThe flyer demonstrated how the same visual direction could adapt to different formats and purposes—it wasn't just a miniaturised version of the website, but a separate design that solved the problem of promotional materials while maintaining brand consistency.",
      },

      // 08B. Flyer Visual
      {
        type: "feature-showcase",
        title: "Promotional Flyer Design",
        features: [
          {
            title: "Primary Flyer",
            description: "Front and back promotional design featuring value propositions, menu preview, and multiple ordering options.",
            image: "/images/projects/seafood-restaurant/flyer.jpg",
            imageAlt: "Sakisa Seafoods promotional flyer front and back with food arrangement, value propositions, menu categories and ordering CTAs",
            imageRatio: "auto",
          },
          {
            title: "Alternate Composition",
            description: "Alternate flyer design exploring a different visual arrangement while maintaining the same visual language, menu organization, and ordering calls-to-action.",
            image: "/images/projects/seafood-restaurant/flyer-alternate.jpg",
            imageAlt: "Sakisa Seafoods alternate promotional flyer using the same visual language, menu categories, and ordering information",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 09. One Visual Language Across Multiple Touchpoints
      {
        type: "problem",
        title: "09 — One Visual Language Across Multiple Touchpoints",
        content: "The strongest part of this project wasn't any single design, but the consistency across all three: website, menu card, flyer.\n\nA visitor encountering the website and later seeing the menu card or flyer would immediately recognise them as part of the same brand. The color palette was identical. The typography was consistent. The way information was organized followed similar patterns. Even the food imagery had a consistent visual treatment and tone.\n\nThis wasn't a formal design system with extensive documentation. It was visual consistency achieved through intentional design decisions and careful implementation. Every layout choice, color choice, and typography choice was made with an eye toward maintaining that cohesion.\n\nIn practice, this meant that the restaurant's brand voice was consistent regardless of where the customer encountered it—online or in print, on a large desktop screen or a printed card in their hands. That consistency is what creates recognition and trust.",
      },

      // 09B. Cross-Channel Composition
      {
        type: "feature-showcase",
        title: "Visual Consistency Across Formats",
        features: [
          {
            title: "Website",
            description: "Digital presence showing visual system in action across sections and interactions.",
            image: "/images/projects/seafood-restaurant/home.png",
            imageAlt: "Sakisa Seafoods website homepage as primary touchpoint",
            imageRatio: "auto",
          },
          {
            title: "Menu Card",
            description: "Print design applying the same visual language to a compact, functional format.",
            image: "/images/projects/seafood-restaurant/menu-card.png",
            imageAlt: "Sakisa Seafoods menu card showing consistent color and typography",
            imageRatio: "auto",
          },
          {
            title: "Promotional Flyer",
            description: "Marketing material adapting the visual direction for promotional impact.",
            image: "/images/projects/seafood-restaurant/flyer.jpg",
            imageAlt: "Sakisa Seafoods promotional flyer extending visual language to print promotion",
            imageRatio: "auto",
          },
        ],
        layout: "grid",
      },

      // 10. Content Creation
      {
        type: "problem",
        title: "10 — Content Creation",
        content: "The website content was created using AI based on business information the client provided—menu item names, descriptions, pricing, address, hours, and business details. I structured that content into the website experience, organising it for clarity and scannability.\n\nThis approach allowed the website to launch quickly with accurate business information without requiring me to independently create menu descriptions or business copy. The client remained the authority on what the restaurant offers; I structured that information for the digital format.",
      },

      // 11. Outcome
      {
        type: "problem",
        title: "11 — Outcome",
        content: "The project delivered:\n\n• A complete website designed and implemented on Google Sites\n• Five main pages (Home, About, Menu, FAQ, Contact) with clear information architecture\n• A menu card that organised the business's offerings for print distribution\n• A promotional flyer that communicated key differentiators and drove ordering\n• A consistent visual language across all digital and print materials\n• Integration with WhatsApp and Zomato ordering systems\n\nThe design demonstrates the ability to create cohesive brand experiences across different media and formats, to work effectively within platform constraints, and to balance visual design with practical user needs.\n\nNo measurable business outcome data was available for this project. The case study is based on the quality and breadth of the design work itself—the information architecture, visual consistency, and thoughtful implementation across web and print.",
      },

      // 12. Reflection
      {
        type: "reflection",
        title: "12 — Reflection",
        content: "This project illustrated how constraints can actually drive better design. Because I was limited by the Google Sites platform, I couldn't rely on custom code or complex interactions. I had to solve problems through clear hierarchy, strong layout decisions, and consistent visual language. The result was cleaner and more focused than it might have been otherwise.\n\nIt also demonstrated the value of working across multiple formats. The website, menu card, and flyer were different problems with different requirements, but solving them as a connected system created something stronger than any single piece alone. That kind of thinking—considering how one design choice supports the whole brand experience—is something I bring to every project.\n\nFinally, it reminded me that design at its best solves real problems for real people. Sakisa Seafoods is a functioning business with actual customers, not a fictional case study. The website, menu, and flyer had to work. The visual language had to be professional enough to build trust, but approachable enough to feel welcoming to local customers. Those practical constraints made the design better.",
      },

      // Next Project
      {
        type: "next-project",
        nextProjectSlug: "kannan-personal-website",
      },
    ],
  },
  "yoga-center": {
    sections: [
      {
        type: "problem",
        title: "Brand Identity & Visual Communication",
        content: "A yoga center needed to establish a distinctive visual identity and create consistent, professional communication materials that reflect the center's philosophy and attract students. This includes core brand identity and all supporting marketing and promotional materials.",
      },
      {
        type: "solution",
        title: "Current Design Scope",
        content: "The project focused on developing brand identity and visual communication materials for the center. This includes brand direction, visual guidelines, and practical marketing materials — business cards, brochures, flyers, and posters — that support the business across multiple touchpoints.",
      },
      {
        type: "solution",
        title: "The Next Step: Digital Product",
        content: "The project will later expand from brand and marketing design into digital attendance and management experiences. The progression would move from established brand identity into UX, UI, and finally functional digital products for class scheduling, attendance tracking, and member management. Status: Building.",
      },
      {
        type: "gallery",
        title: "Brand & Marketing Assets",
        items: [
          {
            id: 1,
            title: "Brand Identity",
            description: "Logo, color palette, and visual direction",
          },
          {
            id: 2,
            title: "Print Materials",
            description: "Business cards, brochures, flyers, and posters",
          },
          {
            id: 3,
            title: "Brand Applications",
            description: "Marketing and promotional materials",
          },
        ],
      },
    ],
  },
  "kannan-personal-website": {
    sections: [
      {
        type: "problem",
        title: "Objective",
        content: "Create a personal portfolio website that demonstrates the ability to design and build complete digital experiences from UX and UI design through frontend development. The website serves as both a professional portfolio and a living case study in design-to-code capability.",
      },
      {
        type: "solution",
        title: "Status: Building",
        content: "This project is actively under development. The website is being designed and developed as a practical design-to-code project, bringing together UX strategy, interface design, design systems and frontend development. It will eventually serve as a comprehensive case study demonstrating the complete workflow from concept through implementation.",
      },
      {
        type: "gallery",
        title: "Project Areas",
        items: [
          {
            id: 1,
            title: "UX & Information Architecture",
            description: "Site structure and user experience design",
          },
          {
            id: 2,
            title: "Design System",
            description: "Typography, colors, spacing, and component tokens",
          },
          {
            id: 3,
            title: "Frontend Development",
            description: "Next.js, React, and Tailwind CSS implementation",
          },
        ],
      },
    ],
  },

  "kit-management": {
    sections: [
      // 01. The Challenge
      {
        type: "problem",
        title: "01 — The Challenge",
        content: "Kit Management is a module within a school management system designed to handle the complete workflow of providing study kits to newly enrolled pre-school students. A study kit is a collection of essential materials—bags, books, stationery—configured for each grade level (Playgroup, Nursery, LKG, UKG).\n\nThe business operates through a Franchisor-Franchisee model: corporate offices manage kit configuration, stock, and dispatch, while individual pre-school centers onboard students and request kits. The kit serves a dual purpose—an operational necessity for new students and a revenue stream for payment collection.\n\nThe design challenge was to automate a workflow that previously relied on manual, paper-based processes between these two user groups. The system needed to create visibility for both sides: corporate oversight for operational management, and center-level tracking for request monitoring.",
      },

      // 02. Designing for Two Roles
      {
        type: "problem",
        title: "02 — Designing for Two Roles",
        content: "The fundamental design challenge was that two very different user groups needed to work within the same workflow, but with opposite mental models.\n\nThe Franchisor (Corporate Office) thinks in aggregates and operations. They need high-level visibility across all centers, operational dashboards showing metrics and trends, the ability to manage kit requests, and reporting to understand financial collection and performance.\n\nThe Franchisee (Pre-school Center) thinks in tasks and local context. They need to see newly enrolled students at their center, submit kit requests, provide payment information, and track whether requests have been processed and dispatched.\n\nRather than creating one interface that tried to serve both, the approach was to create two distinct experiences, each optimized for how its users think about the problem.",
      },

      // 02B. Role Comparison
      {
        type: "feature-showcase",
        title: "Separate Interfaces for Different Roles",
        features: [
          {
            eyebrow: "Franchisor Dashboard",
            title: "Operational Overview",
            description: "The corporate office sees a dashboard showing aggregate metrics across all centers, operational visibility into requests, and financial collection status.",
            image: "/images/projects/kit-management/franchisor-dashboard.png",
            imageAlt: "Franchisor dashboard showing aggregate metrics and operational overview",
            imageRatio: "auto",
          },
          {
            eyebrow: "Franchisee Dashboard",
            title: "Center-Specific View",
            description: "Each pre-school center sees their own enrollment, request status, and dispatch tracking—a local view rather than system-wide aggregates.",
            image: "/images/projects/kit-management/franchisee-dashboard.png",
            imageAlt: "Franchisee dashboard showing center-specific enrollment and status",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 03. Connecting the Workflow
      {
        type: "problem",
        title: "03 — Connecting the Workflow",
        content: "Despite having separate interfaces, both users are part of a single connected workflow. The workflow moves through distinct phases, each supporting a different part of the request lifecycle:\n\nFranchisee creates a request → Provides payment information → Franchisor reviews and processes → Kits are dispatched → Franchisee tracks status.\n\nThe design had to make this lifecycle clear for both sides while reflecting that they see different aspects of the same flow.",
      },

      {
        type: "challenge-diagram",
        title: "The Kit Request Lifecycle",
        items: [
          { label: "Student Enrollment", description: "Franchisee onboards new students" },
          { label: "Kit Request", description: "Franchisee creates request" },
          { label: "Payment Information", description: "Franchisee provides payment details" },
          { label: "Franchisor Processing", description: "Corporate office reviews and processes" },
          { label: "Kit Dispatch", description: "Kits are sent (full or partial)" },
          { label: "Status Tracking", description: "Franchisee monitors progress" },
        ],
        layout: "vertical",
      },

      // 04. My Design Approach
      {
        type: "problem",
        title: "04 — My Design Approach",
        content: "My process began by understanding the business requirements provided by the Project Manager, then mapping how each user group needed to interact with the system.\n\nFirst, I understood the ecosystem: What is a kit and how is it composed? Who manages what? What data matters to each user? Then I developed the information architecture: What features must each side have? How should they be organized? What information is critical at each step?\n\nNext, I designed workflows for each user group: How does a Franchisor operate at their dashboard level? How does a Franchisee execute the request creation task? What are the differences in their interaction patterns and needs?\n\nFinally, I refined the designs based on Project Manager feedback and prepared the complete module design for handoff to the development team.",
      },

      // 05. Franchisor Experience
      {
        type: "problem",
        title: "05 — Franchisor Experience",
        content: "The Franchisor interface is built on a dashboard-first approach, because the corporate office's primary need is operational visibility across all centers.",
      },

      {
        type: "feature-showcase",
        title: "Operational Dashboard",
        features: [
          {
            title: "Dashboard Overview",
            description: "The Franchisor dashboard shows aggregate metrics and gives corporate staff visibility into kit requests across all franchise locations. This operational view allows monitoring of submissions, tracking collections, and understanding fulfillment status at a glance.",
            image: "/images/projects/kit-management/franchisor-dashboard.png",
            imageAlt: "Franchisor dashboard showing metrics and operational overview",
            imageRatio: "auto",
          },
        ],
      },

      {
        type: "feature-showcase",
        title: "Request Management & Payment Processing",
        features: [
          {
            title: "Kit Requests List",
            description: "Franchisor can view all submitted requests from all centers, see request status, and understand the volume of pending work.",
            image: "/images/projects/kit-management/franchisor-requests.png",
            imageAlt: "Franchisor kit requests list showing request status and details",
            imageRatio: "auto",
          },
          {
            title: "Request Details & Payment Handling",
            description: "Franchisor can drill into individual requests to see student details, verify payment information, and manage the dispatch workflow.",
            image: "/images/projects/kit-management/franchisor-request-details.png",
            imageAlt: "Franchisor request detail view showing student and payment information",
            imageRatio: "auto",
          },
          {
            title: "Payment Verification",
            description: "The interface supports payment verification and collection tracking as a core part of request processing.",
            image: "/images/projects/kit-management/franchisor-collect-payment.png",
            imageAlt: "Franchisor payment collection and verification interface",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 06. Franchisee Experience
      {
        type: "problem",
        title: "06 — Franchisee Experience",
        content: "The Franchisee interface is designed around task completion. The center manager's core task is straightforward: see newly enrolled students, create a kit request for them, provide payment information, and then track that request through processing and dispatch.",
      },

      {
        type: "feature-showcase",
        title: "Kit Request Creation",
        features: [
          {
            title: "Request Creation Workflow",
            description: "The primary interaction for a Franchisee is the kit request creation experience. Centered on selecting students and providing payment information, the workflow is linear and task-focused.",
            image: "/images/projects/kit-management/franchisee-new-request.png",
            imageAlt: "Franchisee creating a new kit request with student selection",
            imageRatio: "auto",
          },
        ],
      },

      {
        type: "feature-showcase",
        title: "Request Tracking & Status Visibility",
        features: [
          {
            title: "Center Dashboard",
            description: "The Franchisee dashboard provides a center-specific view of enrollment, request status, and dispatch progress for their students.",
            image: "/images/projects/kit-management/franchisee-dashboard.png",
            imageAlt: "Franchisee dashboard showing center enrollment and request status",
            imageRatio: "auto",
          },
          {
            title: "Request List & Progress Tracking",
            description: "After submission, Franchisee can view their submitted requests and track status (Submitted, Partially Dispatched, or Dispatched) to understand what has been fulfilled.",
            image: "/images/projects/kit-management/franchisee-requests.png",
            imageAlt: "Franchisee requests list showing status and tracking information",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 07. Key UX Decisions
      {
        type: "problem",
        title: "07 — Key UX Decisions",
        content: "Several design decisions emerged from thinking through these workflows and how to serve two fundamentally different user groups:",
      },

      {
        type: "role-metadata",
        title: "Design Decisions",
        responsibilities: [
          "Separate Interfaces by Role — Two complete, distinct experiences instead of one multi-role interface. Each user sees only what's relevant to their role and workflow.",
          "Dashboard-First for Franchisor — Operational overview as the primary landing. Drill-down to specific requests provides detail as needed.",
          "Task-Focused for Franchisee — Linear request creation workflow. Create → provide payment → submit. No unnecessary options or complexity.",
          "Payment Information Connected to Request — Captured as part of the request submission itself, not a separate step. Keeps the workflow efficient.",
          "Status Visibility as Primary Communication — Request statuses (Submitted, Partially Dispatched, Dispatched) used consistently to show progress.",
          "Partial Dispatch as a Recognized State — The system acknowledges that kits might be dispatched in phases. This reflects real-world operational constraints.",
        ],
      },

      // 08. From Design to Development
      {
        type: "problem",
        title: "08 — From Design to Development",
        content: "The complete module design was prepared and handed to the development team. This included information architecture, screen designs for all major user flows, design assets, and specifications for both Franchisor and Franchisee interfaces.\n\nThe design demonstrates end-to-end UX thinking: from business requirements through user-focused interface design to development-ready specifications. The design provided the blueprint for implementation.",
      },

      // 09. Reflection
      {
        type: "problem",
        title: "09 — Reflection",
        content: "The separation of Franchisor and Franchisee interfaces addresses a fundamental design challenge: two very different users within one connected workflow. By tailoring the experience to each role's mental model—operations versus task completion—the design makes complex workflows feel natural for both users.\n\nThis project demonstrates an approach that transfers beyond Kit Management: when two user groups have opposite needs, separate interfaces often work better than forced unification. Dashboard-first is powerful for operational roles; task-first is powerful for transactional roles. Connecting payment information to the request keeps workflows efficient. Status visibility reduces support burden and builds user confidence.",
      },
    ],
  },

  "yoga-center": {
    sections: [
      // 01. Overview
      {
        type: "problem",
        title: "01 — Overview",
        content: "Nagendran Yoga International is a classical yoga center offering classes, courses, and teacher training programs. The center needed a visual identity and complete brand application across print, social media, promotional communication, and digital presence. Working directly with the center, I designed the logo, visual direction, and applied the identity across all marketing and communication touchpoints to create a cohesive, recognizable brand.",
      },

      // 02. The Identity
      {
        type: "feature-showcase",
        title: "02 — The Identity",
        features: [
          {
            title: "Primary Logo",
            description: "The NYi symbol combines three visual ideas: a yoga figure in meditation pose, wings extending on both sides, and a sun above. Together, these elements represent the core philosophy: the practice of yoga (the figure), spiritual elevation and growth (the wings), and energy and enlightenment (the sun). The symbol is anchored by 'NYi'—an abbreviation clear to the center's community.",
            image: "/images/projects/yoga-center/primary logo.jpg",
            imageAlt: "Nagendran Yoga International primary logo with yoga figure, wings, and sun symbol",
            imageRatio: "auto",
          },
          {
            title: "Circular Badge",
            description: "A circular badge format featuring the same symbol with the full organizational name around the perimeter, designed for certificates, credentials, and formal applications. The logo works in two primary versions, allowing flexibility across different contexts while maintaining consistent recognition.",
            image: "/images/projects/yoga-center/circular logo.png",
            imageAlt: "Circular badge variation with full organizational name and classical yoga shala tagline",
            imageRatio: "auto",
          },
        ],
        layout: "grid",
      },

      // 03. Visual Language
      {
        type: "problem",
        title: "03 — Visual Language",
        content: "Beyond the logo, the visual language is built from a tight palette of recurring elements. Orange serves as the dominant color, creating immediate energy and warmth across every touchpoint. A complementary maroon appears for depth and formal contexts. Typography is bold and clean, supporting clear communication across social media, print, and web. The graphic language draws from yoga imagery: meditation silhouettes, mandala patterns (representing inner peace and spirituality), sun and circular motifs, and decorative borders. Photography emphasizes practice, instructors, and outdoor natural settings. Together, these elements create a visual system recognizable even when individual applications vary significantly in layout or purpose.",
      },

      // 03B. Visual Language Board
      {
        type: "feature-showcase",
        title: "",
        features: [
          {
            title: "",
            description: "",
            image: "/images/projects/yoga-center/visual-language.png",
            imageAlt: "Visual language analysis board showing color palette, typography, graphic elements, logo usage, photography direction, and applications",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 04. Communication Design
      {
        type: "feature-showcase",
        title: "04 — Communication Design",
        features: [
          {
            title: "Course Promotions & Announcements",
            description: "The same visual language was applied to different communication formats without forcing every design into one template. Course promotions highlighted yoga practice and learning outcomes. Announcements celebrated milestones and openings. Educational graphics built credibility and trust. Each format required different information hierarchy, imagery approach, and spatial treatment—but all maintained the visual identity.",
            image: "/images/projects/yoga-center/Hatha Yoga 5am-01.jpg",
            imageAlt: "Hatha Yoga course promotion post with meditation silhouette and mandala pattern",
            imageRatio: "auto",
          },
          {
            title: "Multi-Format Adaptation",
            description: "Rather than constraints, the variety of formats demonstrated the flexibility and strength of the system. The identity worked equally well as a minimalist social media post and as a dense information design with detailed course curriculum.",
            image: "/images/projects/yoga-center/Pranayama Workshop-01.jpg",
            imageAlt: "Pranayama Workshop promotion combining content hierarchy with instructor credibility",
            imageRatio: "auto",
          },
          {
            title: "Photography-Led Formats",
            description: "Some promotional materials emphasized strong photography while maintaining visual identity through color palette and logo placement.",
            image: "/images/projects/yoga-center/Aerial Yoga TTC-02.jpg",
            imageAlt: "Aerial Yoga Teacher Training announcement with photography-led design and certification badges",
            imageRatio: "auto",
          },
          {
            title: "Milestone Announcements",
            description: "Celebration of achievements like certification registration and major milestones used illustrated scenes and celebratory messaging.",
            image: "/images/projects/yoga-center/RYS-01.jpg",
            imageAlt: "Yoga Alliance certification milestone announcement with illustrated sunset scene",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 05. Print Applications
      {
        type: "feature-showcase",
        title: "05 — Print Applications",
        features: [
          {
            title: "Formal Identity Application",
            description: "The visual identity extended beyond digital to print materials. Certificates used the maroon secondary color to convey formality and permanence, anchoring the identity in official contexts.",
            image: "/images/projects/yoga-center/certificate.png",
            imageAlt: "Formal identity application for yoga teacher training certification",
            imageRatio: "auto",
          },
          {
            title: "Brochure — Page 1",
            description: "A multi-page promotional piece extending the visual identity across course information, schedules, and supporting content.",
            image: "/images/projects/yoga-center/brochure-page-1.png",
            imageAlt: "Brochure cover page with visual identity and course information",
            imageRatio: "auto",
          },
          {
            title: "Brochure — Page 2",
            description: "Inner pages of the brochure demonstrating consistent application of typography, color, and graphic language throughout the complete promotional material.",
            image: "/images/projects/yoga-center/brochure-page-2.png",
            imageAlt: "Brochure inner page with detailed course offerings and identity system",
            imageRatio: "auto",
          },
        ],
        layout: "stacked",
      },

      // 06. Digital Presence
      {
        type: "feature-showcase",
        title: "06 — Digital Presence",
        features: [
          {
            title: "Website Design and Brand Integration",
            description: "The website served as the most comprehensive application of the visual identity. The design integrated the logo, color system, typography, photography, and graphic language across multiple sections: hero (establishing calm through nature imagery), about, class information (emphasizing variety with photography), trainer profiles, testimonials, and scheduling (color-coded calendar for clarity). The website needed to balance marketing (why choose NYi?) with practical information (what classes are available, when, what does it cost). The visual system provided both cohesion and flexibility—each section could emphasize different content while maintaining immediate brand recognition.",
            image: "/images/projects/yoga-center/website.png",
            imageAlt: "Complete Yoga Center website design showing integrated visual identity across all sections",
            imageRatio: "auto",
          },
        ],
      },

      // 07. One Identity, Many Touchpoints
      {
        type: "solution",
        title: "07 — One Identity, Many Touchpoints",
        content: "From a single symbol emerged an entire visual ecosystem. Logo, social media promotions, printed materials, certificates, and website all spoke with one voice while serving different purposes. The consistency was not rigid—it was intentional, allowing each application to solve its specific communication challenge while remaining immediately recognizable as part of the same brand. Social announcements celebrated milestones using illustrated scenes and celebratory messaging. Promotional posters combined the orange primary color with full course listings and strong visual hierarchy. The website integrated all visual elements across hero, classes, testimonials, and scheduling into a cohesive digital experience. This balance between unity and flexibility is the strength of the identity system.",
      },

      // 08. Reflection
      {
        type: "reflection",
        title: "08 — Reflection",
        content: "Working across multiple formats—social media, print, digital—taught me how visual identity systems need both clarity and flexibility. The core symbol and color palette provided the guardrails, but each application required problem-solving specific to its format and purpose. A social media post needed to catch attention in a crowded feed. A certificate needed to convey credibility and permanence. A website needed to balance marketing with practical information. The same identity language worked across all of these because it was strong enough to remain recognizable, yet flexible enough to adapt.\n\nIf I were approaching this project today, I would establish the usage guidelines and spatial rules for the identity even more explicitly at the outset. Creating a more detailed brand system document would make scaling to new applications easier, and would help anyone future-extending the identity maintain the same intentionality.\n\nThe work also reinforced how important consistency is in building brand trust. Every material, from a small social post to a large poster, contributed to a cohesive impression. The visual identity became synonymous with the center's values and positioning.",
      },

      // 09. Next Project
      {
        type: "next-project",
        nextProjectSlug: "seafood-restaurant",
      },
    ],
  },
};
