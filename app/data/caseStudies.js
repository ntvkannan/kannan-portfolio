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
      {
        type: "problem",
        title: "The Challenge",
        content: "Educational institutions manage multiple complex workflows — from student information and enrollment to course management, attendance, and communication. Consolidating these across separate systems creates inefficiency and makes it difficult for stakeholders to find the information they need.",
      },
      {
        type: "solution",
        title: "The Approach",
        content: "School ERP was designed as a unified education management experience to bring multiple school workflows and information into one structured digital platform. The UX/UI design focused on organizing complex institutional data into clear, role-based views that serve different user types — administrators, teachers, students, and parents.",
      },
      {
        type: "gallery",
        title: "Project Gallery",
        items: [
          {
            id: 1,
            title: "Admin Dashboard",
            description: "Institutional overview and management interface",
          },
          {
            id: 2,
            title: "Teacher Portal",
            description: "Course, student, and attendance management",
          },
          {
            id: 3,
            title: "Student / Parent View",
            description: "Personalized academic progress and communication",
          },
        ],
      },
    ],
  },
  "seafood-restaurant": {
    sections: [
      {
        type: "problem",
        title: "Brand Identity & Visual Communication",
        content: "A seafood restaurant needed to establish a distinctive visual identity and create consistent, professional communication materials that reflect the business's character and appeal to customers. This includes everything from core brand identity through day-to-day marketing materials.",
      },
      {
        type: "solution",
        title: "Current Design Scope",
        content: "The project focused on developing brand identity and visual communication materials for the restaurant. This includes brand direction, visual guidelines, and practical marketing materials — business cards, brochures, flyers, and posters — that support the business across multiple touchpoints.",
      },
      {
        type: "solution",
        title: "The Next Step: Digital Product",
        content: "The project will later expand from brand and marketing design into a digital booking, ordering and delivery experience. The progression would move from established brand identity into UX, UI, and finally functional digital products. Status: Building.",
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
};
