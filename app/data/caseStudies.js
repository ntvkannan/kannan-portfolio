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
  "kit-management": {
    sections: [
      {
        type: "problem",
        title: "The Challenge",
        content: "Managing operational kits and equipment across distributed operations requires visibility into availability, location, condition, and usage. Without a structured system, it becomes difficult to track assets, coordinate distribution, and maintain operational efficiency.",
      },
      {
        type: "solution",
        title: "The Approach",
        content: "Kit Management was designed as a structured management experience to simplify operational workflows and improve visibility across kit-related processes. The UX/UI design focused on providing clear, at-a-glance status of all kits, streamlined workflows for checking in and out, and transparent reporting that helps teams coordinate and plan.",
      },
      {
        type: "gallery",
        title: "Project Gallery",
        items: [
          {
            id: 1,
            title: "Kit Inventory",
            description: "Real-time view of all kits and their current status",
          },
          {
            id: 2,
            title: "Request & Allocation",
            description: "Interface for requesting kits and coordinating distribution",
          },
          {
            id: 3,
            title: "Reports & Analytics",
            description: "Usage tracking and operational insights",
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
};
