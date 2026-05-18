export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  features: string[];
  challenges: string[];
  benefits: string[];
  hasImage: boolean;
  demoStatus?: "live" | "private" | "not-live";
  codeStatus?: "public" | "private";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "giant-bd-erp",
    title: "Giant BD ERP",
    description: "Enterprise Resource Planning (ERP) system designed to manage business operations efficiently.",
    fullDescription: "The Giant BD ERP system was developed to manage and streamline the complete business operations of a footwear manufacturing company. In a footwear manufacturing business, multiple departments (production, planning, inventory, sales, etc.) need to work together. This system centralizes all departments, improves efficiency, reduces manual work, and ensures accurate data handling across the organization, solving problems like data inconsistency and tracking delays.",
    image: "/projects/giant-bd.png",
    github: "#",
    demo: "#",
    tags: ["Next.js", "Nest JS", "REST API", "PostgreSQL"],
    features: [
      "Product Management: Create and manage footwear products with colors, categories, and variations",
      "Order Management: Track orders from creation to delivery with real-time status monitoring",
      "Inventory Management: Track stock intake, raw materials, and finished goods to prevent shortages",
      "Planning Department: Handle production planning and generate material requisitions",
      "Production Tracking: Monitor manufacturing stages from raw material to finished product",
      "Reports & Dashboard: Real-time insights into sales, stock, and production for management",
      "Role-Based Access Control: Secure access levels for Admin, Manager, and Staff"
    ],
    challenges: [
      "Integrating multiple complex manufacturing departments into one cohesive system",
      "Ensuring real-time synchronization between production stages and inventory",
      "Designing a user-friendly interface for non-technical factory staff"
    ],
    benefits: [
      "Centralized data management across all departments",
      "Improved operational efficiency and coordination",
      "Better inventory control and stock accuracy",
      "Faster, data-driven decision making with real-time reports",
      "Significant reduction in manual work and human error"
    ],
    hasImage: true,
    demoStatus: "private",
    codeStatus: "private",
    featured: true
  },
  {
    id: "finger-flight",
    title: "Finger Flight",
    description: "Online Travel Agency (OTA) platform for managing flight bookings with a modern full-stack architecture.",
    fullDescription: "Finger Flight is a comprehensive Online Travel Agency platform developed to manage all operations of a travel agency in one centralized system. It handles the large volumes of bookings, customer data, and financial transactions that modern agencies deal with daily, solving problems like booking errors and slow customer service through automation and real-time updates.",
    image: "/projects/OTA-1.png",
    github: "#",
    demo: "#",
    tags: ["Next.js", "Laravel Api", "API Integration"],
    features: [
      "Flight Booking Management: Search, book, and manage status (pending, confirmed, canceled) with automated ticketing",
      "Passenger Management: Centralized database for passenger details, passport info, and travel history",
      "Booking Confirmation: Automated confirmation system with integrated invoice generation",
      "Accounts & Finance: Track payments, manage refunds, and generate detailed financial reports",
      "Support & Help Desk: Integrated system for handling customer queries and tracking support tickets",
      "Real-time Dashboard: Management overview of total bookings, revenue, and active customers",
      "Permission System: Role-based access for Admins, Agents, and Accountants to ensure security"
    ],
    challenges: [
      "Synchronizing real-time flight availability across multiple GDS providers",
      "Building a secure and reliable financial tracking system for complex travel transactions",
      "Designing an intuitive dashboard that summarizes massive amounts of booking data"
    ],
    benefits: [
      "Faster and significantly more accurate booking process",
      "Centralized data management for better organization",
      "Improved customer service efficiency and response times",
      "Better financial tracking and transparent reporting",
      "Secure and controlled access through role-based permissions"
    ],
    hasImage: true,
    demoStatus: "private",
    codeStatus: "private",
    featured: true
  },
  {
    id: "dbl-lifestyle-ecommerce",
    title: "DBL Lifestyle E-commerce",
    description: "A modern lifestyle shopping platform built with Next.js frontend and NestJS backend, powered by PostgreSQL and WebSocket.",
    fullDescription: "DBL Lifestyle E-commerce is an online shopping platform developed to sell lifestyle and fashion-related products through a modern digital system. The platform provides customers with an easy shopping experience while allowing administrators to efficiently manage products, orders, inventory, and business operations. It was created to provide 24/7 online shopping access, simplify product and order management, improve customer experience, and increase sales through digital commerce.",
    image: "/projects/DBL.png",
    github: "#",
    demo: "#",
    tags: ["Next.js", "Nest JS", "PostgreSQL", "WebSocket"],
    features: [
      "Product Management: Admin can create, update, and manage products with name, price, description, images, category, and variants",
      "Category & Brand Management: Organize products by category and brand for easier customer navigation",
      "User Authentication: Secure registration and login with account management",
      "Shopping Cart & Wishlist: Add products to cart, update quantities, remove items, and save favorites",
      "Order Management: Place orders online and track pending, confirmed, shipped, and delivered status",
      "Payment System: Supports online payment integration and cash on delivery with a secure checkout process",
      "Coupon & Discount System: Admin-created coupons and user-applied discount codes during checkout",
      "Inventory Management: Monitor stock, prevent out-of-stock issues, and update inventory automatically after sales",
      "Admin Panel: Full system control for products, orders, customers, discounts, and reports",
      "Dashboard & Reports: Sales reports, order statistics, revenue overview, and customer activity monitoring",
      "Role-Based Permissions: Admin, Manager, and Staff access levels for secure workflow control"
    ],
    challenges: [
      "Implementing a scalable frontend and backend architecture for modern e-commerce requirements",
      "Building real-time order and inventory updates using WebSocket integration",
      "Designing a centralized admin panel that supports comprehensive product, order, and report management"
    ],
    benefits: [
      "Easy online shopping experience with 24/7 access",
      "Faster order processing and improved customer satisfaction",
      "Better inventory management and prevention of stock issues",
      "Centralized business control through a unified admin dashboard",
      "Increased sales and operational efficiency for online retail"
    ],
    hasImage: true,
    demoStatus: "not-live",
    codeStatus: "private",
    featured: true
  },
  {
    id: "malamal",
    title: "MalaMal",
    description: "A Flutter-based B2B wholesale mobile application built with Supabase backend for enterprise transactions and real-time operations.",
    fullDescription: "MalaMal is a comprehensive mobile application designed to streamline B2B wholesale transactions and business operations. The app solves the critical problem of inefficient order management and supplier-buyer communication by providing a centralized platform with real-time data synchronization. It's valuable for wholesale distributors and retailers seeking to modernize their transaction processes, reduce manual paperwork, and improve operational efficiency through a unified digital platform.",
    image: "/projects/MalaMal.jpeg",
    github: "#",
    demo: "#",
    tags: ["Flutter", "Dart", "Supabase", "TypeScript", "Firebase", "Edge Functions", "Realtime Database", "C++", "Swift"],
    features: [
      "Real-time order management system",
      "User authentication and role-based access control",
      "Database-level security with Row Level Security (RLS) policies",
      "Edge Functions for serverless backend operations",
      "Storage bucket management with security policies",
      "Real-time data synchronization across connected clients",
      "Webhook integration for event-driven workflows",
      "Multi-role user system with custom database types"
    ],
    challenges: [
      "Implementing complex Row Level Security policies for multi-tenant B2B operations",
      "Designing real-time synchronization architecture with Supabase Realtime",
      "Managing database schema migrations across multiple environments",
      "Integrating Edge Functions for backend business logic",
      "Securing sensitive B2B transaction data with encryption and access controls"
    ],
    benefits: [
      "Streamlined wholesale order processing and management",
      "Real-time visibility into inventory and transactions",
      "Enhanced security through role-based access and RLS policies",
      "Scalable architecture using serverless Edge Functions",
      "Improved collaboration between suppliers and buyers"
    ],
    hasImage: true,
    demoStatus: "private",
    codeStatus: "private",
    featured: true
  },
  {
    id: "itm-connect",
    title: "ITM Connect",
    description: "A Flutter-based platform centralizing ITM department information, offering students and admins easy access to routines, notices, contacts, and feedback.",
    fullDescription: "ITM Connect is a Flutter application that consolidates ITM department data into a single hub. It streamlines access to class routines, notices, teacher directories, and feedback channels, helping institutions enhance student engagement, simplify administration, and provide seamless mobile access to critical information.",
    image: "/projects/ITM_Connect.jpeg",
    github: "#",
    demo: "#",
    tags: ["Flutter", "Dart", "JavaScript", "Firebase", "C++", "CMake", "HTML"],
    features: [
      "Animated landing screen with smooth transitions",
      "Dynamic home screen with bottom navigation",
      "Class routine management",
      "Notice board for announcements",
      "Teacher directory and contact info",
      "Feedback and contact submission",
      "Admin portal with role-based access",
      "Multi-screen navigation system"
    ],
    challenges: [
      "Designing intuitive multi-feature navigation",
      "Implementing animations and smooth transitions",
      "Structuring scalable code and file organization",
      "Integrating backend feedback and role-based access"
    ],
    benefits: [
      "Centralized institutional information",
      "Enhanced student engagement via notifications",
      "Streamlined student-admin communication",
      "Quick access to schedules and teacher contacts",
      "Reduced reliance on manual info distribution"
    ],
    hasImage: true,
    demoStatus: "private",
    codeStatus: "private",
    featured: true
  },
  {
    id: "stc-360",
    title: "STC 360",
    description: "Online education platform designed to provide students with access to online classes, courses, and resources.",
    fullDescription: "STC360 is a complete digital learning solution designed to provide students with flexible, accessible, and centralized access to education. It modernizes traditional learning systems by providing a structured environment for course enrollment, live/recorded classes, automated quizzes, and certification, connecting students and administrators through a single efficient system.",
    image: "/projects/STC360.png",
    github: "#",
    demo: "https://www.stc360.co/",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    features: [
      "Online Class System: Support for live and recorded sessions with an organized course-wise structure",
      "Course Management: System for both Bundle Courses and Normal single-course purchases",
      "Student Panel: Personalized dashboard for attending classes, taking quizzes, and downloading certificates",
      "Admin Panel: Full platform control including course creation, student enrollment, and content management",
      "Quiz & Evaluation: Automated quiz system with integrated result tracking and grading",
      "Certificate Generation: Automated generation and distribution of completion certificates",
      "Role-Based Access: Secure permission system for Admins, Students, and Staff"
    ],
    challenges: [
      "Building a scalable video delivery system for online classes",
      "Handling complex course bundle logic and purchase synchronization",
      "Implementing an automated and secure certificate generation engine"
    ],
    benefits: [
      "Easy access to quality education anytime and anywhere",
      "Highly organized course and student management for administrators",
      "Automated certification process reducing administrative workload",
      "Scalable architecture ready for growing student populations",
      "Significantly improved and structured learning experience"
    ],
    hasImage: true,
    demoStatus: "live",
    codeStatus: "private",
    featured: true
  },
  {
    id: "janani-fashion",
    title: "E-Commerce Platform",
    description: "Complete E-commerce system with separate Admin and User panels for global product selling.",
    fullDescription: "This comprehensive E-commerce platform is designed to modernize traditional retail by enabling 24/7 global sales. It features a seamless User Site for customers to browse, customize, and purchase products, alongside a powerful Admin Panel that centralizes product management, order fulfillment, and sales analytics into one automated workflow.",
    image: "/projects/E-commerce.png",
    github: "#",
    demo: "#",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "User Site: Dynamic product browsing with category filtering and real-time variant selection (size, color)",
      "Shopping Cart & Checkout: Full cart management with coupon code support and secure multi-method payments",
      "Admin Product Management: Full CRUD operations for products with complex variant and price control",
      "Coupon & Discount System: Centralized engine for creating and managing usage-limited discount rules",
      "Order Fulfillment: Real-time order tracking and management from pending to delivered status",
      "Admin Dashboard: High-level overview of total sales, customer activity, and revenue reports",
      "Role-Based Permissions: Granular access control for Super Admins, Managers, and Staff"
    ],
    challenges: [
      "Implementing complex product variant logic that updates prices and availability dynamically",
      "Building a secure and efficient coupon validation system for high-traffic sales",
      "Developing a responsive mobile-first UI that maintains high performance across all devices"
    ],
    benefits: [
      "Ability to sell products globally without time or location limits",
      "Easily manage massive inventories and orders from a single dashboard",
      "Significantly improved customer experience through personalization",
      "Fully automated business workflows reducing manual administrative work",
      "Data-driven decision making through integrated sales and transaction reports"
    ],
    hasImage: true,
    demoStatus: "not-live",
    codeStatus: "public",
    featured: true
  },
  {
    id: "online-health-care",
    title: "Online Health Care",
    description: "Multi-role healthcare platform for online appointments, medicine sales, and centralized management.",
    fullDescription: "The Online Healthcare Platform is a complete digital solution that bridges the gap between patients, medical professionals, and pharmacies. It solves traditional healthcare challenges like long wait times and poor accessibility by providing a centralized system for online appointment booking, digital medicine purchasing, and streamlined service management.",
    image: "/projects/health.png",
    github: "#",
    demo: "#",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Appointment System: Seamless booking, cancellation, and rescheduling engine for patients and doctors",
      "Medicine E-commerce: Full marketplace for pharmacies to list medicines and for patients to purchase them",
      "Doctor Dashboard: Dedicated interface for managing schedules, time slots, and patient consultations",
      "Seller Dashboard: Specialized inventory and order management system for pharmacy owners",
      "Admin Control: Centralized panel for approving doctor registrations and monitoring system-wide activity",
      "Order Tracking: Real-time status updates for both medical appointments and medicine deliveries",
      "Four-Way Role System: Granular access and unique workflows for Patients, Doctors, Sellers, and Admins"
    ],
    challenges: [
      "Building a complex multi-role authentication and permission system",
      "Ensuring real-time synchronization between doctor availability and patient booking slots",
      "Integrating a secure and reliable medicine inventory system with e-commerce functionality"
    ],
    benefits: [
      "Saves significant time for patients through remote booking and purchasing",
      "Provides easy and direct access to medical professionals anytime",
      "Ensures medicine availability and convenience through online ordering",
      "Highly efficient and centralized healthcare management for administrators",
      "Secured and organized data handling for all medical and financial records"
    ],
    hasImage: false,
    demoStatus: "not-live",
    codeStatus: "public",
    featured: true
  }
];
