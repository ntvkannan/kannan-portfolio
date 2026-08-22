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
      {
        type: "problem",
        title: "The Challenge",
        content: "Consultation workflows require a clear and intuitive experience that helps users efficiently connect with service providers while maintaining confidence in the process. The digital experience must support complex interactions between multiple parties while remaining accessible and straightforward.",
      },
      {
        type: "solution",
        title: "The Approach",
        content: "Advocate Consultation Platform was designed as a comprehensive experience to support consultation workflows. The UX/UI design focused on creating clarity in the consultation process, building trust through transparent communication, and providing practical navigation that guides users through each step.",
      },
      {
        type: "gallery",
        title: "Project Gallery",
        items: [
          {
            id: 1,
            title: "Consultation Dashboard",
            description: "Main interface for managing consultation requests and scheduling",
          },
          {
            id: 2,
            title: "Provider Directory",
            description: "Service provider discovery and connection interface",
          },
          {
            id: 3,
            title: "Communication Center",
            description: "Secure messaging and interaction management",
          },
        ],
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
