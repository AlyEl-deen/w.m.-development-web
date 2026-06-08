import { Project } from "./lib/utils";

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "fc-academy",
    name: "FC Academy System",
    shortDescription: "The Complete Management Solution for Modern Training & Courses Centers",
    fullDescription: "FC Academy is a powerful desktop management system designed to help educational centers streamline operations, manage students efficiently, and scale with confidence. Built using Tauri, React, and TypeScript, the platform delivers enterprise-level performance in a fast, secure, and visually modern desktop experience. Whether you run a language center, technical institute, online academy, tutoring center, or professional training organization, FC Academy provides the tools needed to manage your entire educational workflow from one place.",
    imageUrl: "/images/FC-Academy-1.png",
    galleryImages: [
      "/images/FC-Academy-2.png",
      "/images/FC-Academy-3.png",
      "/images/FC-Academy-4.png",
      "/images/FC-Academy-5.png",
      "/images/FC-Academy-6.png",
      "/images/FC-Academy-7.png",
    ],
    category: "System",
    features: [
      "Complete student profiles and records",
      "Attendance and performance tracking",
      "Enrollment and registration management",
      "Instructor scheduling and coordination",
      "Course, class, and group organization",
      "Payment tracking, invoicing, and analytics",
      "Smart dashboard with real-time insights",
      "Modern desktop UI with smooth animations"
    ],
    techStack: ["Tauri", "React", "TypeScript", "Tailwind CSS"],
    priceRange: "$25,000 - $100,000"
  },
  {
    id: "future-dental",
    name: "FC Dental Management",
    shortDescription: "A complete clinic command center for appointments, patients, procedure costs, collections, and profit tracking.",
    fullDescription: "FC Dental Management is a focused desktop management system built for dental clinics that need live operational control without spreadsheet chaos. The system brings patient records, appointment booking, procedure pricing, payment collection, treatment sessions, cost breakdowns, and profit visibility into one polished dashboard. Clinic owners can track total accounts, collected and remaining balances, daily bookings, procedure activity, material and nursing costs, service fees, and net position from a single secure workspace. Designed with a clean BSET-inspired interface, FC Dental Management helps teams book faster, understand each case financially, and keep the clinic running with confidence.",
    imageUrl: "/images/future-dental-logo.png",
    galleryImages: [
      "/images/future-dental-dashboard.png",
      "/images/future-dental-booking.png",
      "/images/future-dental-breakdown.png",
      "/images/future-dental-login.png"
    ],      
    category: "System",
    features: [
      "Clinic dashboard with live account, collection, remaining balance, and net position metrics",
      "Patient and appointment booking workflow with new operation and continued session support",
      "Procedure pricing with materials, nursing, services, session count, cost, profit, and margin tracking",
      "Daily bookings overview with payment progress and remaining balances per patient",
      "Secure login screen and clinic-branded desktop experience",
      "Backup-ready workflow for protecting clinic data"
    ],
    techStack: ["Tauri", "React", "TypeScript", "Tailwind CSS"],
    priceRange: "$18,000 - $55,000"
  },
  {
    id: "dentlistmax",
    name: "Dentlistmax.com",
    shortDescription: "A dental education app hub for course discovery, professional registration, audience growth, and launch capture.",
    fullDescription: "Dentlistmax.com is a dental education web platform created as the public launch and registration hub for the DentlistMax mobile app. The experience introduces the brand, captures early interest through a coming-soon registration form, explains the platform for dental professionals, and presents upcoming accredited courses led by field experts. It also includes social proof metrics, role-based registration paths for patients, students, dentists, mentors, instructors, consultants, nurses, technicians, and stores, plus a clean responsive layout designed to feel trustworthy across desktop and mobile.",
    imageUrl: "/images/dentlistmax-logo.jpeg",
    galleryImages: [
      "/images/dentlistmax-coming-soon.png",
      "/images/dentlistmax-stats.png",
      "/images/dentlistmax-courses.png",
      "/images/dentlistmax-roles.png"
    ],
    category: "Website",
    features: [
      "Coming-soon registration flow for early app launch interest",
      "Brand introduction section explaining the DentlistMax dental education hub",
      "Upcoming courses showcase with speaker cards and online course labeling",
      "Audience metrics for followers, views, subscriptions, and likes",
      "Role-based registration paths for dental professionals and related users",
      "Responsive teal-and-white interface tuned for dental education branding"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    priceRange: "$8,000 - $25,000",
    liveUrl: "https://dentlistmax.com"
  },
  {
    id: "vortex-ecom",
    name: "Vortex E-commerce",
    shortDescription: "A dynamic and immersive shopping platform.",
    fullDescription: "Vortex is a premium e-commerce system featuring glassy product cards, 3D previews, and a lightning-fast checkout system. Designed to convert through motion and visual storytelling.",
    imageUrl: "/images/FC-Academy-3.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1510511459019-5dee.9.0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327270-a5a9ca67479d?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Website",
    features: ["3D Product Previews", "One-Click Pay", "AI Recommendations", "Inventory Motion Sync"],
    techStack: ["Next.js", "Three.js", "Stripe"],
    priceRange: "$20,000 - $60,000"
  }
];
