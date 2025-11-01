
import type { Service, CaseStudy, BlogPost, TeamMember, Resource, NavItem, Testimonial, Award, Webinar, LiveEvent, OnDemandVideo, FooterNav, Faq, Solution, AiResource, ComplianceRegulation, SolutionDetails, ProductDetails, IndustryDetails, CareersData } from "@/lib/types";
import { ShieldCheck, Server, Cloud, Database, Network, Laptop, LifeBuoy, BrainCircuit, CheckCircle, Building, Handshake, Users, Briefcase } from "lucide-react";

export const navItems: NavItem[] = [
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Managed IT Services", href: "/services/managed-it" },
      { title: "Co-Managed IT", href: "/services/co-managed-it" },
      { title: "IT Help Desk", href: "/services/help-desk" },
      { title: "IT Security", href: "/services/cybersecurity" },
      { title: "Microsoft Consulting", href: "/services/it-consulting" },
      { title: "Azure Cloud Services", href: "/services/cloud-services" },
      { title: "Microsoft Security", href: "/services/microsoft-security" },
      { title: "VCIO Consulting", href: "/services/vcio-consulting" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    children: [
      { title: "AI and Automation", href: "/solutions/ai-and-automation" },
      { title: "Entra ID & Intune Migration", href: "/solutions/entra-id-and-intune-migration" },
      { title: "Employee Engagement", href: "/solutions/employee-engagement" },
      { title: "Business Process Automation", href: "/solutions/business-process-automation" },
      { title: "Technology Mergers and Acquisitions", href: "/solutions/technology-mergers-and-acquisitions" },
      { title: "Communication and Collaboration", href: "#" },
      { title: "Network Monitoring", href: "/solutions/network-monitoring" },
      { title: "Cloud Management & Deployment", href: "/services/cloud-services" },
      { title: "Zero Touch Deployment Services", href: "/solutions/zero-touch-deployment" },
      { title: "Compliance Management System", href: "/solutions/compliance-management" },
      { title: "Employee Lifecycle Management", href: "#" },
    ],
  },
  {
    title: "Products",
    href: "/products",
    children: [
      { title: "Procurement Services", href: "/products/procurement-services" },
      { title: "Security", href: "/products/security-products" },
      { title: "Microsoft Licensing", href: "/products/microsoft-licensing" },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      { title: "Finance", href: "/industries/financial-technology-services" },
      { title: "Healthcare", href: "/industries/healthcare-technology-services" },
      { title: "Life Sciences", href: "/industries/life-sciences-technology-services" },
      { title: "Non-Profits", href: "/industries/non-profit-technology-services" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "eGuides", href: "/resources" },
      { title: "Events", href: "/events" },
    ],
  },
  {
    title: "Culture",
    href: "/about",
    children: [
      { title: "About Us", href: "/about" },
      { title: "Awards & Certifications", href: "/about/awards" },
      { title: "Leadership Team", href: "/leadership" },
      { title: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    children: [
        { title: "Contact Us", href: "/contact" },
        { title: "Customer Support", href: "/contact/customer-support" },
        { title: "Partner with Us", href: "/contact/partner" },
    ],
  },
];

export const footerNav: FooterNav[] = [
    {
        title: "Services",
        links: [
            { title: "Managed IT Services", href: "/services/managed-it" },
            { title: "IT Help Desk", href: "/services/help-desk" },
            { title: "Managed IT Security Solutions", href: "/services/cybersecurity" },
            { title: "Microsoft Consulting Services", href: "/services/it-consulting" },
            { title: "Microsoft Security Services", href: "/services/microsoft-security" },
            { title: "Azure Cloud Managed Services", href: "/services/cloud-services" },
            { title: "Compliance Management", href: "/solutions/compliance-management" },
            { title: "Backup and Disaster Recovery...", href: "/services/data-backup" },
            { title: "Remote Management and Monitoring...", href: "/solutions/network-monitoring" },
            { title: "Virtual CIO Consulting Services", href: "/services/vcio-consulting" },
        ]
    },
    {
      title: "Solutions",
      links: [
        { title: "Zero Touch Deployment Services", href: "/solutions/zero-touch-deployment" },
        { title: "Entra ID and Intune...", href: "/solutions/entra-id-and-intune-migration" },
        { title: "Employee Engagement", href: "/solutions/employee-engagement" },
        { title: "Business Process Automation", href: "/solutions/business-process-automation" },
        { title: "Technology Mergers and Acquisitions", href: "/solutions/technology-mergers-and-acquisitions" },
        { title: "Communication and Collaboration", href: "#" },
        { title: "Simplified Cloud Management and...", href: "/services/cloud-services" },
      ]
    },
     {
      title: "Products",
      links: [
        { title: "Procurement", href: "/products/procurement-services" },
        { title: "Security", href: "/products/security-products" },
        { title: "Microsoft Licensing", href: "/products/microsoft-licensing" },
      ]
    },
    {
        title: "Contact",
        links: [
            { title: "Contact Us", href: "/contact" },
            { title: "Customer Support", href: "/contact/customer-support" },
            { title: "Partners", href: "/contact/partner" },
            { title: "Careers", href: "/careers" },
        ]
    }
];

export const services: Service[] = [
  {
    slug: "managed-it",
    title: "Managed IT Services",
    shortDescription: "Comprehensive IT management for your peace of mind.",
    icon: Laptop,
    description: "Improve productivity, gain predictability in controlled costs and mitigate the impact of infrastructure challenges on your daily operations with our Managed IT Services.",
    imageUrl: "service-managed-it",
    imageHint: "remote management",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Solutions",
    shortDescription: "Protect your digital assets from evolving threats.",
    icon: ShieldCheck,
    description: "We offer multi-layered security solutions, including firewall management, endpoint protection, threat detection, and employee training. Our proactive approach helps safeguard your sensitive data against cyberattacks and ensures compliance with industry regulations.",
    imageUrl: "service-security",
    imageHint: "data security",
  },
  {
    slug: "cloud-services",
    title: "Azure Cloud Services",
    shortDescription: "Leverage the power and scalability of the cloud.",
    icon: Cloud,
    description: "Unlock flexibility and efficiency with our cloud services. We help you migrate, manage, and optimize your cloud infrastructure, whether you're using public, private, or hybrid cloud environments. Services include cloud hosting, data backup, and disaster recovery.",
    imageUrl: "service-cloud",
    imageHint: "cloud network",
  },
  {
    slug: "data-backup",
    title: "Data Backup & Recovery",
    shortDescription: "Ensure business continuity with reliable backups.",
    icon: Database,
    description: "Protect your critical business data from loss due to hardware failure, human error, or cyberattacks. We implement automated, secure backup solutions and develop robust disaster recovery plans to get you back up and running quickly.",
    imageUrl: "service-data",
    imageHint: "server rack",
  },
  {
    slug: "it-consulting",
    title: "Microsoft Consulting Services",
    shortDescription: "Strategic guidance to align technology with your goals.",
    icon: BrainCircuit,
    description: "Discover the transformational power of Microsoft Solutions tailored to suit your needs and propel your business forward through the guidance of our Specialized Microsoft Experts.",
    imageUrl: "service-consulting",
    imageHint: "leadership team",
  },
  {
    slug: "help-desk",
    title: "IT Help Desk",
    shortDescription: "Fast and friendly technical support when you need it.",
    icon: LifeBuoy,
    description: "Our dedicated help desk team is available around the clock to provide expert technical assistance. We offer remote and on-site support to resolve your employees' IT issues quickly, minimizing downtime and boosting productivity.",
    imageUrl: "service-voip",
    imageHint: "customer support",
  },
  {
    slug: "co-managed-it",
    title: "Co-Managed IT",
    shortDescription: "Collaborative IT support to empower your in-house team.",
    icon: Users,
    description: "Our Co-Managed IT services provide a flexible partnership, supplementing your existing IT team with our expertise, resources, and tools. We fill the gaps, you maintain control.",
    imageUrl: "co-managed-it-hero",
    imageHint: "team collaboration",
  },
  {
    slug: "microsoft-security",
    title: "Microsoft Security",
    shortDescription: "Specialized security for your Microsoft environment.",
    icon: ShieldCheck,
    description: "Leverage our deep expertise in Microsoft's security stack. We help you implement and manage solutions like Microsoft Sentinel, Defender, and Entra ID to protect your assets.",
    imageUrl: "service-ms-security",
    imageHint: "Microsoft security",
  },
  {
    slug: "vcio-consulting",
    title: "VCIO Consulting",
    shortDescription: "Strategic IT leadership to guide your business.",
    icon: Briefcase,
    description: "Get the benefit of high-level strategic IT guidance without the cost of a full-time executive. Our vCIOs help with budgeting, planning, and aligning your technology with your business goals.",
    imageUrl: "service-vcio",
    imageHint: "business strategy",
  },
  {
    slug: 'ai-and-automation',
    title: 'AI and Automation',
    shortDescription: 'Streamline processes and enhance productivity with AI.',
    icon: BrainCircuit,
    description: 'Leverage cutting-edge AI and automation technologies to streamline processes, enhance productivity, and drive innovation across your organization.',
    imageUrl: 'solution-ai',
    imageHint: 'AI automation'
  },
  {
    slug: 'network-monitoring',
    title: 'Network Monitoring',
    shortDescription: 'Proactive monitoring to ensure network health and performance.',
    icon: Network,
    description: 'Stay ahead of downtime with a proactive IT support team and network monitoring tools so you can focus on what\'s important.',
    imageUrl: 'solution-network',
    imageHint: 'network datasheet',
  },
  {
    slug: 'zero-touch-deployment',
    title: 'Zero Touch Deployment',
    shortDescription: 'Automated device setup and configuration for seamless onboarding.',
    icon: Laptop,
    description: 'Save time and costs on manual device set-up while enhancing security and compliance.',
    imageUrl: 'solution-deployment',
    imageHint: 'white papers',
  },
  {
    slug: 'compliance-management',
    title: 'Compliance Management',
    shortDescription: 'Maintain optimal compliance standards with expert support.',
    icon: ShieldCheck,
    description: 'Ensure your organization is protected and prepared with our detailed security offerings.',
    imageUrl: 'compliance-hero',
    imageHint: 'compliance management',
  },
];

export const solutions: SolutionDetails[] = [
    {
        slug: "ai-and-automation",
        title: "AI and Automation",
        description: "Leverage cutting-edge AI and automation technologies to streamline processes, enhance productivity, and drive innovation across your organization.",
        imageUrl: "solution-ai",
        imageHint: "cybersecurity tools",
        href: "/solutions/ai-and-automation"
    },
    {
        slug: "entra-id-and-intune-migration",
        title: "Entra ID & Intune Migration",
        description: "Seamlessly move identity and device management from legacy on-prem systems to modern, cloud-based solutions.",
        imageUrl: "entra-id-employee-lifecycle",
        imageHint: "employee lifecycle",
        href: "/solutions/entra-id-and-intune-migration"
    },
    {
        slug: "employee-engagement",
        title: "Employee Engagement",
        description: "Cultivating Efficiency with Viva—Microsoft's Ultimate Employee Engagement Tool",
        imageUrl: "viva-employee-engagement",
        imageHint: "employee engagement",
        href: "/solutions/employee-engagement"
    },
    {
        slug: "business-process-automation",
        title: "Business Process Automation",
        description: "Streamline Business Processes with Microsoft Power Platform.",
        imageUrl: "power-platform-asset",
        imageHint: "power platform",
        href: "/solutions/business-process-automation"
    },
    {
        slug: "technology-mergers-and-acquisitions",
        title: "Technology Mergers and Acquisitions",
        description: "Seamlessly Integrate Your Systems Without Missing a Beat.",
        imageUrl: "mergers-acquisitions-hero",
        imageHint: "business deal",
        href: "/solutions/technology-mergers-and-acquisitions"
    },
    {
        slug: "communication-and-collaboration",
        title: "Communication and Collaboration",
        description: "Enhance collaboration and streamline communications with Microsoft Teams Collaboration tools and our reliable support.",
        imageUrl: "solution-collaboration",
        imageHint: "microsoft teams",
        href: "#"
    },
    {
        slug: "network-monitoring",
        title: "Network Monitoring",
        description: "Stay ahead of downtime with a proactive IT support team and network monitoring tools so you can focus on what's important.",
        imageUrl: "solution-network",
        imageHint: "network datasheet",
        href: "/solutions/network-monitoring"
    },
    {
        slug: "cloud-management-and-deployment",
        title: "Cloud Management & Deployment",
        description: "Our team of cloud experts is here to help you leverage the power of the cloud seamlessly to meet the needs your business.",
        imageUrl: "solution-cloud",
        imageHint: "cloud service",
        href: "/services/cloud-services"
    },
    {
        slug: "zero-touch-deployment",
        title: "Zero Touch Deployment Services",
        description: "Save time and costs on manual device set-up while enhancing security and compliance.",
        imageUrl: "solution-deployment",
        imageHint: "white papers",
        href: "/solutions/zero-touch-deployment"
    },
    {
        slug: "compliance-management-system",
        title: "Compliance Management System",
        description: "From onboarding to offboarding, automate the employee lifecycle while enhancing productivity and security.",
        imageUrl: "solution-employee",
        imageHint: "resources hero",
        href: "/solutions/compliance-management"
    }
];

export const products: ProductDetails[] = [
  {
    slug: "procurement-services",
    title: "Procurement Services",
    description: "Buy, Deploy, and Scale Smarter with our managed IT procurement services."
  },
  {
    slug: "security-products",
    title: "Security Products",
    description: "Powerful Standalone Security Tools to Protect What Matters Most."
  },
  {
    slug: "microsoft-licensing",
    title: "Microsoft Licensing",
    description: "Top Microsoft Cloud Solution Provider offering low rates and premium support."
  }
];

export const industries: IndustryDetails[] = [
    {
        slug: "financial-technology-services",
        title: "Finance",
        description: "Optimize operations, improve customer experience, and meet regulatory requirements with our tailored IT solutions for financial institutions.",
        imageUrl: "industry-finance"
    },
    {
        slug: "healthcare-technology-services",
        title: "Healthcare",
        description: "Modernize your systems to protect patients, ensure HIPAA compliance, and boost performance with our specialized healthcare IT services.",
        imageUrl: "industry-healthcare"
    },
    {
        slug: "life-sciences-technology-services",
        title: "Life Sciences",
        description: "Accelerate discovery and development with secure, compliant, and collaborative IT solutions for the pharma and life sciences sectors.",
        imageUrl: "industry-life-sciences"
    },
    {
        slug: "non-profit-technology-services",
        title: "Non-Profits",
        description: "Drive social change and extend your reach with cost-effective technology solutions and expert guidance for non-profit organizations.",
        imageUrl: "industry-non-profit"
    }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "global-research-leader-m365-integration",
    title: "Global Clinical Research Leader Achieves Seamless Microsoft 365 Integration for Enhanced Efficiency and Security",
    description: "Consolidated Microsoft 365 tenants. Migrated 62 users and over 120GB of data. Ensured business continuity.",
    imageUrl: "case-study-1",
    imageHint: "clinical research",
  },
  {
    slug: "red-door-scales-it-support",
    title: "Red Door Leveraged Managed IT Services to Scale Support & Enhance IT Infrastructure",
    description: "Provided full-service Managed IT Services. Scaled level of support & modernized internal systems. Saved ample time for internal IT team.",
    imageUrl: "case-study-2",
    imageHint: "modern office",
  },
  {
    slug: "radiology-it-solutions",
    title: "Radiology IT Solutions – Enhanced Tech Support for Mission-Critical Operations",
    description: "Revamped imaging process reduced setup time to 1-2 hours. Automation eliminated over 90% of manual tasks. Saved hours per deployment.",
    imageUrl: "case-study-3",
    imageHint: "radiology imaging",
  },
    {
    slug: "nationwide-senior-living-hybrid-cloud",
    title: "Nationwide Senior Living Facility Saves $250,000 With Hybrid Cloud",
    description: "Address HIPPA & PCI compliance issues. Reduce IT overhead. Save $250,000.",
    imageUrl: "case-study-4",
    imageHint: "senior living"
  },
  {
    slug: "western-digital-migration",
    title: "Managed Solution Migrates 30,000 Users and Saves Western Digital $5M",
    description: "Save $5M over a few years. Increase productivity. Create a more secure infrastructure.",
    imageUrl: "case-study-5",
    imageHint: "data storage"
  },
    {
    slug: "wd-40-azure-migration",
    title: "WD-40 Cuts Significant Costs & Increases Productivity by Migrating to Azure",
    description: "Save $3.5M over 5 years. Reduce time from weeks to minutes. Create an more agile and secure business than ever before.",
    imageUrl: "case-study-6",
    imageHint: "manufacturing facility"
  },
    {
    slug: "financial-org-google-to-m365",
    title: "Financial Organization Stays Compliant With Managed Solution & Microsoft",
    description: "Migrate from Google to Microsoft 365. Reduce daily internal IT headaches. Enable backup & disaster recovery.",
    imageUrl: "case-study-7",
    imageHint: "financial office"
  },
      {
    slug: "sierra-college-email-security",
    title: "Sierra College Enables Secure & Accessible Email",
    description: "Access email from anywhere, whether a student or teacher. Meet FERPA compliancy requirements. Reduce internal IT help desk tickets.",
    imageUrl: "case-study-8",
    imageHint: "college campus"
  },
  {
    slug: "pathway-genomics-it-outsourcing",
    title: "Pathway Genomics Outsources IT To Leverage Greater Talent At Lower Cost",
    description: "Migrate to Office 365. Increase & secure remote collaboration. Cut costs by outsourcing their IT.",
    imageUrl: "case-study-9",
    imageHint: "genomics lab"
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "security-toolkit-cybersecurity-awareness-month",
    title: "Security Toolkit: 18 Resources for Cybersecurity Awareness Month",
    author: "Marketing Team",
    date: "2024-10-01",
    excerpt: "Explore 18 essential resources to enhance your cybersecurity awareness and protect your organization during Cybersecurity Awareness Month and beyond.",
    content: "Content for Security Toolkit blog post...",
    imageUrl: "blog-security-toolkit-hero",
    imageHint: "cybersecurity lock",
  },
  {
    slug: "harnessing-ai-for-zero-trust-architecture",
    title: "Harnessing AI for Zero Trust Architecture",
    author: "John Smith",
    date: "2024-09-25",
    excerpt: "Discover how Artificial Intelligence is revolutionizing Zero Trust security models, providing dynamic, adaptive, and predictive threat detection.",
    content: "Content for Harnessing AI for Zero Trust Architecture blog post...",
    imageUrl: "blog-zerotrust-hero",
    imageHint: "AI security",
  },
  {
    slug: "microsoft-365-business-premium-new-offerings",
    title: "Microsoft 365 Business Premium New Offerings for SMBs",
    author: "Jane Doe",
    date: "2024-09-18",
    excerpt: "Learn about the latest updates to Microsoft 365 Business Premium tailored for small and medium-sized businesses, enhancing productivity and security.",
    content: "Content for Microsoft 365 Business Premium blog post...",
    imageUrl: "blog-m365-hero",
    imageHint: "business team",
  },
  {
    slug: "microsoft-copilot-gpt-5-available-now",
    title: "Microsoft Copilot GPT-5 Available NOW",
    author: "AI Team",
    date: "2024-09-12",
    excerpt: "The next generation of AI assistance is here. Explore the groundbreaking features of Microsoft Copilot powered by GPT-5 and what it means for your business.",
    content: "Content for Microsoft Copilot GPT-5 blog post...",
    imageUrl: "blog-7",
    imageHint: "AI chatbot",
  },
  {
    slug: "copilot-vs-chatgpt-which-is-safer-for-work",
    title: "Copilot vs ChatGPT: Which Is Safer for Work?",
    author: "Security Team",
    date: "2024-09-05",
    excerpt: "A comparative analysis of the security features and enterprise-readiness of Microsoft Copilot and OpenAI's ChatGPT for professional use.",
    content: "Content for Copilot vs ChatGPT blog post...",
    imageUrl: "blog-8",
    imageHint: "AI security",
  },
  {
    slug: "clutch-names-managed-solution-market-leader-2025",
    title: "Clutch Names Managed Solution Market Leader in Managed IT for 2025",
    author: "Press Team",
    date: "2024-08-28",
    excerpt: "We are proud to be recognized by Clutch as a market leader in Managed IT services for 2025, a testament to our commitment to client success.",
    content: "Content for Clutch award blog post...",
    imageUrl: "blog-9",
    imageHint: "award graphic",
  },
  {
    slug: "preventing-microsoft-teams-hacking-social-engineering",
    title: "Preventing Microsoft Teams Hacking & Social Engineering Attacks",
    author: "Security Team",
    date: "2024-08-21",
    excerpt: "Learn the best practices to secure your Microsoft Teams environment from hacking attempts and sophisticated social engineering attacks.",
    content: "Content for Microsoft Teams Hacking blog post...",
    imageUrl: "blog-10",
    imageHint: "social engineering",
  },
  {
    slug: "managed-solution-inc-5000-list-2025",
    title: "Managed Solution Named to the 2025 Inc. 5000 List of America's Fastest-Growing Private Companies",
    author: "Press Team",
    date: "2024-08-15",
    excerpt: "For the 10th time, Managed Solution appears on the Inc. 5000, ranking among the nation's fastest-growing private companies.",
    content: "Content for Inc. 5000 blog post...",
    imageUrl: "blog-11",
    imageHint: "Inc 5000 logo",
  },
  {
    slug: "sharepoint-zero-day-fix-cve-2025-53770",
    title: "SharePoint Zero-Day Fix for CVE-2025-53770 & 53771",
    author: "Security Team",
    date: "2024-08-08",
    excerpt: "A critical vulnerability has been identified in SharePoint. Learn about the zero-day fix for CVE-2025-53770 and CVE-2025-53771 and how to protect your organization.",
    content: "Content for SharePoint Zero-Day Fix blog post...",
    imageUrl: "blog-12",
    imageHint: "security orb",
  },
];

export const team: TeamMember[] = [
  {
    name: "Sean Ferrel",
    role: "CEO/Founder",
    imageUrl: "team-sean",
    imageHint: "man headshot",
    bio: "Founded EternalMinds; champions the vision of driving business growth by empowering people behind technology solutions."
  },
  {
    name: "Jennell Mott",
    role: "COO",
    imageUrl: "team-jennell",
    imageHint: "woman headshot",
    bio: "One of the first employees (2004); developed profound expertise in Microsoft technology."
  },
  {
    name: "Richard Swaisgood",
    role: "Director of Cloud Productivity & Automation",
    imageUrl: "team-richard",
    imageHint: "man headshot",
    bio: "With the company since 2007; holds over 12 Microsoft Certifications."
  },
  {
    name: "Derek Graf",
    role: "Director of Customer Support Services",
    imageUrl: "team-derek",
    imageHint: "man headshot",
    bio: "Ensures every client is provided the highest level of support; works with the customer support team."
  },
  {
    name: "Amanda Hawthorne",
    role: "Director of People & Culture",
    imageUrl: "team-amanda",
    imageHint: "woman headshot",
    bio: "Puts the human back in human resources; with the company since 2015."
  },
  {
    name: "Ashley Triplett",
    role: "Director of Cloud & Procurement Services",
    imageUrl: "team-ashley",
    imageHint: "woman headshot",
    bio: "Joined in 2020; specializes in IT procurement and is the expert on Microsoft licensing."
  },
  {
    name: "Martin Wojnar",
    role: "Director of Performance Marketing",
    imageUrl: "team-martin",
    imageHint: "man headshot",
    bio: "Joined in 2024; leads marketing initiatives with 15 years of IT industry experience."
  },
  {
    name: "Kat Grunzinger",
    role: "Talent Advisor",
    imageUrl: "team-kat",
    imageHint: "woman headshot",
    bio: "HR professional with almost 20 years of experience; holds SHRM-CP certification."
  },
  {
    name: "Alexis Hesseltine",
    role: "Channel Manager",
    imageUrl: "team-alexis",
    imageHint: "woman headshot",
    bio: "Dedicated to fostering strong relationships between the company and its valued partners."
  }
];

export const resources: Resource[] = [
    {
        title: "IT Outsourcing Management: A Guide for CTOs and CIOs",
        description: "A comprehensive guide for technology leaders on managing IT outsourcing effectively.",
        imageUrl: "eguide-1",
        imageHint: "ebook cover"
    },
    {
        title: "The CIO's Role in AI Value Creation",
        description: "Explore how Chief Information Officers can drive significant business value through strategic AI implementation.",
        imageUrl: "eguide-2",
        imageHint: "AI ebook"
    },
    {
        title: "The Ultimate Managed IT Services Guide for 2025",
        description: "Your go-to resource for understanding and leveraging managed IT services in the coming year.",
        imageUrl: "eguide-3",
        imageHint: "IT guide"
    }
];

export const testimonials: Testimonial[] = [
  {
    name: "Fern Usry",
    comment: "I would highly recommend EternalMinds for your IT needs. They resolve things quickly and efficiently.",
    date: "2024-07-12"
  },
  {
    name: "John Grillo",
    comment: "My IT issue was holding up a Sales Contract from being sent out. The EternalMinds team took care of it in less than 5 minutes!",
    date: "2024-07-10"
  },
  {
    name: "Tim McMullen",
    comment: "They are always great at helping me out. The fast response … highly recommend this company!",
    date: "2024-07-08"
  },
    {
        name: "Annglia C.",
        company: "Polara Health",
        comment: "They are ALWAYS so pleasant to work with and have a sense of urgency. The whole team is very helpful and knowledgeable! Thank you for all that you do for us!",
        date: "2024-07-18"
    },
    {
        name: "Molly Wardell",
        company: "COOWardell Builders",
        comment: "The tech was very patient with me and very knowledgeable. He was very patient with me and very knowledgeable. He was able to fix my issue in a timely manner. Thank you for your help!",
        date: "2024-07-17"
    },
    {
        name: "Barbara R.",
        company: "CA Assoc of Marriage & Family Therapists",
        comment: "I am always so impressed with the level of service I receive from EternalMinds. They are always so quick to respond and always resolve my issues.",
        date: "2024-07-16"
    }
];

export const vcioTestimonials: Testimonial[] = [
    {
        name: "Annglia C.",
        company: "Polara Health",
        comment: "They are ALWAYS so pleasant to work with and have a sense of urgency. The whole team is very helpful and knowledgeable! Thank you for all that you do for us!",
        date: "2024-07-18"
    },
    {
        name: "Molly Wardell",
        company: "COOWardell Builders",
        comment: "The tech was very patient with me and very knowledgeable. He was able to fix my issue in a timely manner. Thank you for your help!",
        date: "2024-07-17"
    },
    {
        name: "Barbara R.",
        company: "CA Assoc of Marriage & Family Therapists",
        comment: "I am always so impressed with the level of service I receive from EternalMinds. They are always so quick to respond and always resolve my issues.",
        date: "2024-07-16"
    }
];

export const coManagedTestimonials: Testimonial[] = [
    {
        name: "Dennis Gonzales",
        comment: "We'd worked with EternalMinds on a successful IT project in the past, so we had a good idea of their capabilities. Since they were at Microsoft Partner, in addition to projects they were able to support our software licensing. This was especially important to make sure that we have a compliant IT function error radar.",
        date: "Sr. Principal, Information Systems and Technology"
    }
];

export const helpDeskTestimonials: Testimonial[] = [
    {
        name: "Annglia C.",
        company: "Polara Health",
        comment: "They are ALWAYS so pleasant to work with and have a sense of urgency. The whole team is very helpful and knowledgeable! Thank you for all that you do for us!",
        date: "2024-07-18"
    },
    {
        name: "Elizabeth S.",
        company: "Shore Solutions",
        comment: "The tech was very patient with me and very knowledgeable. He was able to fix my issue in a timely manner. Thank you for your help!",
        date: "2024-07-17"
    },
    {
        name: "Barbara R.",
        company: "CA Assoc of Marriage & Family Therapists",
        comment: "I am always so impressed with the level of service I receive from EternalMinds. They are always so quick to respond and always resolve my issues.",
        date: "2024-07-16"
    }
];

export const securityTestimonials: Testimonial[] = [
    {
        name: "Annglia C.",
        company: "Polara Health",
        comment: "They are ALWAYS so pleasant to work with and have a sense of urgency. The whole team is very helpful and knowledgeable! Thank you for all that you do for us!",
        date: "2024-07-18"
    },
    {
        name: "Elizabeth S.",
        company: "Shore Solutions",
        comment: "The tech was very patient with me and very knowledgeable. He was able to fix my issue in a timely manner. Thank you for your help!",
        date: "2024-07-17"
    },
    {
        name: "Barbara R.",
        company: "CA Assoc of Marriage & Family Therapists",
        comment: "I am always so impressed with the level of service I receive from EternalMinds. They are always so quick to respond and always resolve my issues.",
        date: "2024-07-16"
    }
];

export const awards: Award[] = [
    { title: "Microsoft Partner - Security", imageId: "award-1" },
    { title: "Microsoft Partner - Modern Work", imageId: "award-2" },
    { title: "Microsoft Partner - Azure Infrastructure", imageId: "award-3" },
    { title: "CRN MSP 500", imageId: "award-4" },
    { title: "UpCity National Excellence", imageId: "award-5" },
    { title: "MSUS Award Partner Winner", imageId: "award-6" },
];

export const awardTimeline = [
    { year: 2025, awards: ["CRN Solution Provider 500 Award", "CRN MSP 500 Award", "CloudTango MSP Select"] },
    { year: 2023, awards: ["CRN TRIPLE CROWN Award", "CRN Fast Growth 150 Award", "BBB Torch Award for Ethics Finalist", "Cloudtango - MSP Select Top Managed Services Provider in the US"] },
    { year: 2022, awards: ["CRN's Managed Services Provider Top 500", "San Diego Business Journal's Best Place to Work - Top 100", "Cloudtango's Managed Service Provider US Select 2022"] },
    { year: 2021, awards: ["UpCity's Best of Cloud Consulting", "CRN's Managed Service Provider Top 500", "Cloudtango's Top Managed Services Provider in the United States"] },
    { year: 2020, awards: ["San Diego Union Tribune Top Places to Work", "Best IT Managed Service Providers in San Diego (Expertise)"] },
    { year: 2019, awards: ["CRN's Tech Elite 250", "CRN's Managed Service Provider Top 500", "San Diego Business Journal Fastest Growing Private Companies"] },
    { year: 2018, awards: ["CRN's 2018 Fast Growth 150", "MSUS Partner of the Year – Modern Workplace – Teamwork"] },
    { year: 2017, awards: ["Inc. 500 Fastest Growing Companies", "Microsoft SoCal SMB Partner Award Azure Rainmaker", "Top 100 Cloud Service Providers"] },
    { year: 2016, awards: ["Microsoft 2016 US SMB Champions Club SMB Marketer of the Year", "CRN's 2016 Fast Growth 150 List"] },
    { year: 2015, awards: ["Talkin' Cloud 100", "Microsoft Top West Region Small and Midsize Business Cloud Partner", "San Diego Business Journal Fastest Growing Private Companies"] },
    { year: 2010, awards: ["San Diego Business Journal Fastest Growing Private Companies", "Microsoft Partner Network Winning on Value Award"] },
    { year: 2009, awards: ["Microsoft Partner Network Pipeline Accelerator Award"] },
    { year: 2008, awards: ["CEO Sean Ferrel honored as one of San Diego's “40 under 40” brightest young leaders."] },
    { year: 2002, awards: ["EternalMinds was established"] },
];

export const certifications = {
  gold: [
    "Devices and Deployment",
    "Small and Midmarket Cloud Solutions",
    "Hosting",
    "Cloud Productivity",
    "Cloud Platform",
  ],
  silver: [
    "Cloud Productivity",
    "Hosting",
    "Identity and Access",
    "Cloud CRM",
    "CRM Online Acceleration Partner",
  ],
  individual: [
    { code: "MS-301", title: "Deploying SharePoint Server Hybrid, Deploying Microsoft 365 Teamwork" },
    { code: "MS-500", title: "Microsoft Security Security Administration" },
    { code: "MS-201", title: "Implementing a Hybrid and Secure Messaging Platform" },
    { code: "MS-200", title: "Planning and Configuring a Messaging Platform" },
    { code: "MS-100", title: "Microsoft 365 Identity & Services" },
    { code: "MS-101", title: "Microsoft 365 Mobility and Security" },
    { code: "MD-101", title: "Managing Modern Desktops" },
    { code: "AZ-104", title: "Microsoft Azure Administrator" },
    { code: "AZ-900", title: "Microsoft Azure Fundamentals" },
    { code: "MS-900", title: "Microsoft 365 Fundamentals" },
    { code: "MD-100", title: "Windows 10" },
    { code: "MS-700", title: "Managing Microsoft Teams" },
  ],
  other: [
      { name: "Cisco Certified Network Professional (CCNP)", description: "Validates advanced knowledge and skills in implementing, operating, configuring, and troubleshooting all converged IP networks and communications." },
      { name: "Certified Dell Gold Partner", description: "" }
  ],
  cisco: [
    "Cisco Certified Network Associate (CCNA)", "Cisco Advanced Routing and Switching Specialist", "Cisco Certified Design Associate (CCDA)", "Cisco Sales Expert", "Cisco Foundation Express Sales Specialist", "Cisco Certified Design Professional (CCDP)", "Cisco IP Communications Express Sales Specialist", "Cisco Certified Internetworking Expert (CCIE)", "Cisco Advanced Routing and Switching Sales Specialist", "Cisco Certified Security Professional (CCSP)", "Cisco Security Sales Specialist", "Cisco Certified Voice Professional (CCVP)", "Cisco Virtual Private Network Specialist", "Cisco Firewall Specialist", "Cisco Express Foundation Specialist", "Cisco IP Communications Express Specialist"
  ],
  dell: [
      "Dell Sales Workstation", "Dell Sales Data Center", "Dell Sales Server"
  ]
};

export const webinars: Webinar[] = [
    {
        slug: "copilot-agents",
        title: "Copilot Agents: Your New...",
        date: "October 21st, 2025 at 10:00am PST",
        imageUrl: "webinar-1",
        imageHint: "copilot agents",
    },
    {
        slug: "copilot-studio-deep-dive",
        title: "Copilot Studio Deep Dive:...",
        date: "November 4th, 2025 at 10:00am PST",
        imageUrl: "webinar-2",
        imageHint: "copilot studio",
    },
    {
        slug: "copilot-power-automate",
        title: "Copilot + Power Automate:...",
        date: "November 18th, 2025 at 10:00am PST",
        imageUrl: "webinar-3",
        imageHint: "copilot power automate",
    }
];

export const liveEvents: LiveEvent[] = [
    {
        slug: "copilot-studio-deep-dive",
        title: "Copilot Series Webinar 6 Studio Deep Dive",
        date: "November 4th, 2025 at 10:00am PST",
        description: "Copilot Studio Deep Dive: Build Highly Customized AI Agents. Explore how Copilot Studio lets you design custom AI assistants tailored to your team's unique processes and data. Learn how to build, connect, and deploy agents that deliver fast, consistent results across your organization.",
        imageUrl: "live-event-2",
        imageHint: "Copilot Studio",
    },
    {
        slug: "copilot-power-automate-1",
        title: "Copilot Power Automate 1",
        date: "November 18th, 2025 at 10:00am PST",
        description: "Copilot + Power Automate: AI-Driven Workflows in Action. Discover how combining Copilot with Power Automate can turn everyday requests into self-running workflows. See real examples of automations that save time, reduce manual work, and keep teams focused on high-value priorities.",
        imageUrl: "live-event-3",
        imageHint: "Copilot Power Automate",
    },
];

export const onDemandVideos: OnDemandVideo[] = [
    {
        slug: "copilot-agents",
        title: "Copilot Series Webinar 6 Agents",
        series: "Copilot Series",
        description: "Copilot Agents: Your New Digital Teammates. See how Copilot Agents can take on repetitive work, manage routine updates, and keep projects moving behind the scenes. You'll explore practical ways to set up and customize agents so they become reliable digital teammates for your team.",
        imageUrl: "on-demand-1",
        imageHint: "Copilot Agents",
    },
    {
        slug: "copilot-analyst",
        title: "Copilot Series Webinar 5 Analyst",
        series: "Copilot Series",
        description: "See how Copilot Agents can take on repetitive work, manage routine updates, and keep projects moving behind the scenes. You'll explore practical ways to set up and customize agents so they become reliable digital teammates for your team.",
        imageUrl: "on-demand-2",
        imageHint: "Copilot Analyst",
    },
    {
        slug: "copilot-create",
        title: "Copilot Series Webinar 4 Notebooks",
        series: "Microsoft Copilot Series",
        description: "In this 30-minute session, our Microsoft Solutions expert will demonstrate how Copilot Notebooks can capture ideas, structure projects, and support collaborative planning. You'll see real examples of brainstorming, meeting summaries, and long-form analysis - and get your questions answered during a live Q&A.",
        imageUrl: "on-demand-3",
        imageHint: "Copilot create",
    },
    {
        slug: "inside-copilot-notebooks",
        title: "Copilot Series Webinar 3 Notebooks",
        series: "Microsoft Copilot Series",
        description: "See how Copilot can transform meeting notes, outlines, and ideas into ready-to-share documents and presentations in minutes. This session includes live examples, practical tips for refining output, and time for your questions in a live Q&A.",
        imageUrl: "on-demand-4",
        imageHint: "Copilot notebooks",
    },
    {
        slug: "copilot-scheduler-researcher",
        title: "Copilot Scheduler & Researcher",
        series: "Microsoft Copilot Series",
        description: "Learn how to streamline meeting coordination, task follow-ups, and research by letting Copilot handle the scheduling and information gathering for you.",
        imageUrl: "on-demand-5",
        imageHint: "Copilot scheduler",
    },
    {
        slug: "prompt-like-a-pro",
        title: "Prompt Like a Pro: Strategies for Better Copilot Results",
        series: "Microsoft Copilot Series",
        description: "See Copilot in action during this impactful 30-minute session where our Microsoft Solutions expert will demonstrate how smarter prompting can drive better results across your Microsoft 365 apps.",
        imageUrl: "on-demand-6",
        imageHint: "Copilot prompt",
    },
];

export const faqs: Faq[] = [
    {
        question: "Are you a Managed IT services provider company in the USA?",
        answer: "Yes, we are rated a Top 100 MSP in the U.S. and offer nationwide IT services for businesses of all sizes, from small businesses to large enterprises."
    },
    {
        question: "Do you provide same day Managed IT Services in San Diego?",
        answer: "Yes, we provide same-day services in San Diego, Carlsbad, Orange County, Los Angeles, and throughout California."
    },
    {
        question: "How do I know if my business is ready for Managed IT Services?",
        answer: "You might be ready if you're experiencing frequent downtime, using outdated technology, or have limited IT expertise. If you're looking to scale, improve cybersecurity, or streamline operations without adding internal burden, it's a good time to consider an MSP."
    },
    {
        question: "Do you offer IT services for small businesses or enterprise?",
        answer: "Yes, our services are tailored for businesses of all sizes, from small to enterprise, designed to boost efficiency, security, and innovation."
    },
    {
        question: "Can Managed IT Services support our remote or hybrid workforce?",
        answer: "Absolutely. We specialize in optimizing infrastructure for remote and hybrid work, ensuring secure access, reliable collaboration tools, and uninterrupted connectivity for your team."
    },
    {
        question: "Will we lose control of our IT systems by outsourcing to an MSP?",
        answer: "No. A good MSP acts as an extension of your team. We provide transparency, collaboration, and tools that allow you to retain visibility and control while benefiting from our outsourced expertise."
    },
    {
        question: "Do you as an MSP offer 24×7×365 support?",
        answer: "Yes. We provide guaranteed proactive end-to-end IT management and support, including 24x7x365 network monitoring, patch management, and data protection. Our helpdesk agents are all based in the USA."
    },
];

export const azureFaqs: Faq[] = [
    { question: "What is Azure Managed Services?", answer: "Azure Managed Services involve outsourcing the management of your Microsoft Azure environment to a third-party expert like us. We handle monitoring, security, optimization, and support, allowing you to focus on your core business." },
    { question: "Why should I use a managed service provider for Azure?", answer: "An MSP with Azure expertise ensures your cloud environment is cost-effective, secure, and performing optimally. We bring specialized knowledge to manage the complexities of Azure, from resource deployment to compliance." },
    { question: "Can you help migrate our existing applications to Azure?", answer: "Yes, we provide complete migration services, including assessment, planning, execution, and post-migration support to ensure a seamless transition to the cloud." },
    { question: "How do you ensure the security of my data on Azure?", answer: "We implement a multi-layered security approach, leveraging Azure's native security tools, continuous monitoring, identity management, and compliance controls to protect your data." },
    { question: "How do you optimize Azure costs?", answer: "We continuously monitor your Azure consumption, identify underutilized resources, apply cost-saving measures like reserved instances, and provide detailed reporting to help you understand and control your cloud spend." }
];

export const securityFaqs: Faq[] = [
    {
        question: "What is Managed IT Security?",
        answer: "Managed IT Security involves outsourcing your cybersecurity needs to a specialized provider who handles threat monitoring, detection, response, and compliance. This allows you to protect your business without needing a large in-house security team."
    },
    {
        question: "How does 24/7 monitoring work?",
        answer: "Our Security Operations Center (SOC) continuously monitors your network, servers, and endpoints around the clock. We use advanced tools like SIEM to analyze activity, identify threats, and respond instantly to any security incidents."
    },
    {
        question: "Is security awareness training really necessary?",
        answer: "Yes. Employees are often the first line of defense against cyberattacks. Our phishing simulations and training programs educate your team to recognize and avoid threats, significantly reducing the risk of human error leading to a breach."
    },
    {
        question: "Can you help with industry-specific compliance (e.g., HIPAA, PCI)?",
        answer: "Absolutely. We have extensive experience helping businesses in regulated industries meet their compliance obligations. We can conduct risk assessments, implement necessary controls, and provide the documentation needed for audits."
    },
    {
        question: "What makes your security solutions 'specialized' with Microsoft?",
        answer: "As a premier Microsoft partner with specializations in security, we have deep expertise in deploying and managing Microsoft's security ecosystem, including Microsoft Sentinel (SIEM), Defender, and Entra ID. This allows us to provide tightly integrated and highly effective security solutions."
    }
];

export const helpDeskFaqs: Faq[] = [
    {
        question: "How can I contact the IT help desk?",
        answer: "You can contact our IT help desk via phone at 888.563.9132 (option 2), by email at support@optimalsolutions.com, or through our customer portal."
    },
    {
        question: "What are your help desk hours?",
        answer: "Our help desk is based in the USA and operates 24/7/365, including holidays, to ensure you always have access to support when you need it."
    },
    {
        question: "What is the average response time for a ticket?",
        answer: "Our average response time is under 10 seconds. We prioritize rapid acknowledgment and resolution to minimize your downtime."
    },
    {
        question: "What kind of issues can the help desk assist with?",
        answer: "Our help desk can assist with a wide range of issues, including software problems, hardware troubleshooting, network connectivity, password resets, security concerns, and support for Microsoft applications."
    },
    {
        question: "Do you offer on-site support?",
        answer: "Yes, our Level 3 support tier includes regularly scheduled on-site visits and hands-on assistance from our expert field engineers for issues that cannot be resolved remotely."
    },
    {
        question: "What is the pricing for help desk services?",
        answer: "Our pricing starts at $30.00 per user. We offer clear pricing structures and a 60-day satisfaction guarantee to ensure our service is the right fit for your business."
    }
];

export const coManagedFaqs: Faq[] = [
    {
        question: "What is co-managed IT?",
        answer: "Co-managed IT is a collaborative model where an external IT provider works alongside your in-house IT team. It allows you to supplement your team's capabilities with specialized expertise, resources, and tools without fully outsourcing your IT department."
    },
    {
        question: "How does co-managed IT differ from fully managed IT services?",
        answer: "In a fully managed model, the provider handles all aspects of your IT. In a co-managed model, it's a partnership. You choose which functions to keep in-house and which to delegate, giving you more flexibility and control."
    },
    {
        question: "What services can be included in a co-managed IT model?",
        answer: "Services are flexible but often include 24/7 help desk support, cybersecurity monitoring, compliance management, strategic CIO-level guidance, and access to advanced tools that your in-house team may not have."
    },
    {
        question: "Who benefits from co-managed IT?",
        answer: "Businesses with an existing IT team that need to scale, fill skill gaps, or free up their internal staff to focus on strategic projects instead of day-to-day maintenance and support."
    },
    {
        question: "Can co-managed IT help reduce costs?",
        answer: "Yes! It helps you avoid the high cost of hiring additional full-time specialists by providing access to a wide range of expertise on-demand. You only pay for the specific services you need, making it a cost-effective way to enhance your IT capabilities."
    }
];

export const vcioFaqs: Faq[] = [
    {
        question: "What is a vCIO?",
        answer: "A vCIO, or Virtual Chief Information Officer, is an outsourced executive who provides strategic IT guidance and management to businesses. They help align technology with business goals without the cost of a full-time CIO."
    },
    {
        question: "How does a vCIO differ from a traditional CIO?",
        answer: "A vCIO provides the same strategic expertise as a traditional CIO but on a fractional or part-time basis. This makes executive-level IT leadership accessible and affordable for businesses that don't need a full-time CIO."
    },
    {
        question: "What are the benefits of hiring a virtual CIO?",
        answer: "Benefits include cost savings, access to a wide range of expertise, improved IT strategy, better vendor management, and the ability to focus on your core business while your technology is strategically managed."
    },
    {
        question: "How can a vCIO improve my business's IT strategy?",
        answer: "A vCIO will assess your current technology, understand your business goals, and create a long-term IT roadmap. They ensure your technology investments support business growth, improve efficiency, and reduce risk."
    },
    {
        question: "What services does a virtual CIO typically provide?",
        answer: "Services include IT budget planning, risk management, vendor management, technology roadmap development, and ensuring that IT initiatives align with overall business objectives."
    },
    {
        question: "What industries benefit most from vCIO services?",
        answer: "Any industry can benefit, but they are particularly valuable for healthcare, finance, pharma, non-profits, manufacturing, and small businesses that need strategic IT guidance but not a full-time executive."
    }
];

export const aiFaqs: Faq[] = [
    {
        question: "What type of AI and automation service do you provide?",
        answer: "We specialize in three key areas: Azure OpenAI for business innovation, Robotic Process Automation (RPA) for help desk efficiency, and Microsoft Copilot implementation to enhance productivity across your organization."
    },
    {
        question: "What are some use cases for Azure OpenAI?",
        answer: "Use cases include advanced data analysis in finance, patient record summarization in healthcare, personalized customer experiences in retail, and predictive maintenance in manufacturing."
    },
    {
        question: "How can RPA improve our IT Help Desk?",
        answer: "RPA can automate routine tasks like ticket creation, password resets, and order tracking. This frees up your support team to focus on more complex issues, leading to faster resolutions and a better user experience."
    },
    {
        question: "Is it difficult to integrate Microsoft Copilot?",
        answer: "Our team ensures a seamless integration of Copilot with your existing Microsoft 365 apps like Teams, Outlook, Word, and Excel. We provide workshops, adoption programs, and security assessments to maximize its benefits."
    },
    {
        question: "What is the cost of implementing these AI solutions?",
        answer: "Costs vary depending on the solution. For example, Copilot for Microsoft 365 is available for $30 per user per month. We also offer cost optimization services and can provide up to 10-20% savings on Azure AI services as a Microsoft Tier 1 CSP."
    },
    {
        question: "What is Copilot Studio?",
        answer: "Copilot Studio is a low-code tool that allows you to customize Microsoft Copilot and build your own standalone copilots (chatbots) tailored to your specific business needs and processes."
    },
    {
        question: "What are the benefits of using Copilot Studio for IT?",
        answer: "It allows you to automate a wide range of IT tasks, such as managing user calendars, handling remote access requests, installing printers, and even running diagnostics. This significantly reduces the manual workload on your IT staff."
    },
    {
        question: "Do you offer training for our team on these new tools?",
        answer: "Yes, we offer comprehensive services including workshops and adoption programs to ensure your team is proficient and can fully leverage the capabilities of Copilot and other AI tools."
    },
    {
        question: "How do you ensure the security of AI implementations?",
        answer: "Security is a top priority. We conduct thorough security assessments for solutions like Copilot and adhere to best practices for data protection and privacy in all our AI and automation implementations, especially within Azure."
    },
    {
        question: "What is a Copilot Workshop?",
        answer: "Our Copilot Workshop is a session designed to help your organization understand the capabilities of Microsoft Copilot, identify high-impact use cases for your business, and create a clear roadmap for implementation."
    },
    {
        question: "How long is the Copilot Adoption program?",
        answer: "Our Copilot Adoption program is a structured three-week program designed to drive successful adoption and ensure your team gets the most value from your Copilot investment."
    }
];

export const aiResources: AiResource[] = [
    {
        title: "Exploring AI-Enhanced IT Help Desk Software: How Automation is Transforming Support",
        href: "/blog",
        imageId: "ai-blog-1",
        type: "article"
    },
    {
        title: "2024 Tech Recap: AI, Cybersecurity, and IT Breakthroughs",
        href: "/blog",
        imageId: "ai-blog-2",
        type: "article"
    },
    {
        title: "AI in Finance: Strengthening the CFO-CIO Partnership",
        href: "/blog",
        imageId: "ai-blog-3",
        type: "article"
    },
    {
        title: "4 Ways to Get Started in Teams",
        href: "/resources",
        imageId: "ai-ebook-1",
        type: "ebook"
    }
];
    
export const networkMonitoringFaqs: Faq[] = [
    {
        question: "What is network and systems management?",
        answer: "Network and systems management is the process of monitoring and managing your IT infrastructure to ensure its performance, security, and reliability. This includes proactive issue detection, performance optimization, and strategic planning."
    },
    {
        question: "Do you offer 24/7 network monitoring?",
        answer: "Yes, our U.S.-based team provides around-the-clock monitoring to detect and respond to issues immediately, minimizing downtime and protecting your operations."
    },
    {
        question: "Can you monitor cloud and on-premise environments?",
        answer: "Absolutely. We provide a single, unified view across your entire hybrid environment, whether your assets are on-premise, in the cloud, or spread across multiple clouds."
    },
    {
        question: "How do you help reduce 'alert fatigue'?",
        answer: "We use LogicMonitor's intelligent, AIOps-driven alerting to filter out noise and escalate only the critical issues that require attention, allowing your team to focus on what matters."
    },
    {
        question: "What makes your network monitoring service 'managed'?",
        answer: "Beyond providing the tools, we offer a fully staffed team of experts who handle deployment, configuration, continuous management, security, and optimization, freeing your team to focus on innovation."
    },
    {
        question: "Can your monitoring solutions scale with my business?",
        answer: "Yes. Our solutions are designed to scale seamlessly. We ensure you maintain complete visibility and control over your infrastructure as your business grows and your technology stack evolves."
    }
];

export const complianceRegulations: ComplianceRegulation[] = [
    {
        name: "California Consumer Privacy Act",
        acronym: "CCPA",
        description: "A state statute intended to enhance privacy rights and consumer protection for residents of California."
    },
    {
        name: "Health Insurance Portability and Accountability Act",
        acronym: "HIPAA",
        description: "A federal law that required the creation of national standards to protect sensitive patient health information from being disclosed without the patient's consent or knowledge."
    },
    {
        name: "General Data Protection Regulation",
        acronym: "GDPR",
        description: "A regulation in EU law on data protection and privacy in the European Union and the European Economic Area."
    },
    {
        name: "Personal Information Protection & Electronic Documents Act",
        acronym: "PIPEDA",
        description: "A Canadian law relating to data privacy. It governs how private sector organizations collect, use, and disclose personal information in the course of commercial business."
    },
    {
        name: "Sarbanes-Oxley Act",
        acronym: "SOX",
        description: "A federal law that established sweeping auditing and financial regulations for public companies."
    },
    {
        name: "NIST 800-53 & NIST 800-171",
        acronym: "NIST",
        description: "Standards and guidelines from the National Institute of Standards and Technology to help federal agencies and contractors meet the requirements of the Federal Information Security Management Act (FISMA)."
    },
    {
        name: "Payment Card Industry Data Security Standard",
        acronym: "PCI DSS",
        description: "A set of security standards designed to ensure that all companies that accept, process, store or transmit credit card information maintain a secure environment."
    },
    {
        name: "Service Organization Control 2",
        acronym: "SOC 2",
        description: "A voluntary compliance standard for service organizations, developed by the American Institute of CPAs (AICPA), which specifies how organizations should manage customer data."
    },
    {
        name: "Financial Industry Regulatory Authority",
        acronym: "FINRA",
        description: "A private American corporation that acts as a self-regulatory organization that regulates member brokerage firms and exchange markets."
    }
];

export const complianceTestimonials: Testimonial[] = [
    {
        name: "Annglia C.",
        company: "Polara Health",
        comment: "They are ALWAYS so pleasant to work with and have a sense of urgency. The whole team is very helpful and knowledgeable! Thank you for all that you do for us!",
        date: "2024-07-18"
    },
    {
        name: "Mary Wardell",
        company: "COOWardell Builders",
        comment: "The tech was very patient with me and very knowledgeable. He was very patient with me and very knowledgeable. He was able to fix my issue in a timely manner. Thank you for your help!",
        date: "2024-07-17"
    },
    {
        name: "Barbara R.",
        company: "CA Assoc of Marriage & Family Therapists",
        comment: "I am always so impressed with the level of service I receive from EternalMinds. They are always so quick to respond and always resolve my issues.",
        date: "2024-07-16"
    }
];

export const entraIdIntuneFaqs: Faq[] = [
    { question: "What is the difference between Entra and Intune?", answer: "Microsoft Entra ID is an identity and access management solution that handles user authentication and access policies. Microsoft Intune is a mobile device management (MDM) and mobile application management (MAM) solution for managing endpoint devices." },
    { question: "How does Entra support Single Sign-On (SSO)?", answer: "Entra ID enables SSO by allowing users to sign in once with a single set of credentials to access multiple applications and services, improving both user experience and security." },
    { question: "Can Intune manage both company-owned and personal devices?", answer: "Yes, Intune supports both company-owned devices (COD) and bring-your-own-device (BYOD) scenarios, allowing you to apply different policies to protect corporate data while respecting user privacy." },
    { question: "What is a tenant-to-tenant migration?", answer: "This is a complex process, typically during mergers or acquisitions, where users, devices, apps, and policies are migrated from one Microsoft 365 tenant to another. We specialize in making this process seamless." },
    { question: "Why migrate from SCCM (Configuration Manager) to Intune?", answer: "Migrating to Intune provides a modern, cloud-based approach to endpoint management, offering better support for remote work, simplified administration, and integration with the broader Microsoft security ecosystem." },
    { question: "What is Zero Trust architecture?", answer: "Zero Trust is a security model that assumes no user or device is trusted by default. It requires strict verification for every person and device trying to access resources, regardless of their location." },
    { question: "What happens to Azure Active Directory?", answer: "Azure Active Directory (Azure AD) has been renamed to Microsoft Entra ID. It's the same service with the same capabilities, just under a new name as part of the Microsoft Entra product family." },
    { question: "What is 'Copilot in Intune'?", answer: "Copilot in Intune uses AI to provide insights and automation for endpoint management, helping IT admins make better decisions, troubleshoot issues faster, and proactively manage their device fleet." },
    { question: "How long does a migration take?", answer: "The timeline varies depending on the complexity, number of users, and number of devices. We start with a detailed assessment to provide a clear roadmap and timeline for your specific project." }
];

export const employeeEngagementFaqs: Faq[] = [
    { question: "What is Microsoft Viva?", answer: "Microsoft Viva is an employee experience platform integrated directly into Microsoft Teams. It combines communications, knowledge, learning, resources, and insights into a unified experience to improve employee engagement and productivity." },
    { question: "What are the main components of Microsoft Viva?", answer: "Viva includes modules like Viva Connections (culture and communications), Viva Insights (productivity and wellbeing), Viva Topics (knowledge and expertise), and Viva Learning (skill development)." },
    { question: "How does Viva improve employee engagement?", answer: "By bringing essential tools and resources directly into the flow of work, Viva reduces context-switching, fosters a sense of community, makes knowledge easily accessible, and provides insights for both individuals and managers to improve work patterns." },
    { question: "Is Microsoft Viva included with Microsoft 365?", answer: "Some core features of Viva are included in many Microsoft 365 and Office 365 plans. More advanced features and premium modules may require additional licensing." },
    { question: "Can we customize Microsoft Viva?", answer: "Yes, Viva is highly customizable. Viva Connections, for example, can be branded and tailored to reflect your company's culture and provide targeted content for different employee groups." }
];

export const powerPlatformFaqs: Faq[] = [
    { question: "What is the Microsoft Power Platform?", answer: "The Microsoft Power Platform is a suite of low-code/no-code tools that allows you to build custom apps (Power Apps), automate workflows (Power Automate), analyze data (Power BI), and create intelligent chatbots (Power Virtual Agents)." },
    { question: "Do I need to be a developer to use Power Apps?", answer: "No. Power Apps is designed for everyone. Its low-code approach means business users can create custom applications with minimal coding, while professional developers can still use it for more complex scenarios." },
    { question: "What is the difference between Power Automate and Power Apps?", answer: "Power Apps is for building custom applications for users to interact with. Power Automate is for creating automated workflows that connect different apps and services to perform tasks in the background." },
    { question: "How does Power BI help with data visualization?", answer: "Power BI allows you to connect to hundreds of data sources, create interactive dashboards and reports, and gain actionable insights from your data. It makes complex data easy to understand and share." },
    { question: "Can Power Virtual Agents integrate with other systems?", answer: "Yes, you can easily integrate Power Virtual Agents with other services and systems using hundreds of pre-built connectors or by creating custom workflows with Power Automate, allowing your chatbots to perform actions on behalf of the user." }
];

export const mergersAcquisitionsFaqs: Faq[] = [
    { question: "Why is technology integration a critical part of a merger or acquisition?", answer: "Seamless technology integration is crucial for realizing the value of an M&A deal. Failure to properly merge IT systems can lead to operational disruptions, security vulnerabilities, and a poor employee experience, ultimately eroding the benefits of the merger." },
    { question: "What are the biggest IT challenges during an M&A?", answer: "Common challenges include consolidating different email systems (e.g., Microsoft 365 and Google Workspace), merging separate Active Directory domains, integrating diverse document management platforms, and unifying security policies and tools." },
    { question: "What is 'identity management' in the context of an M&A?", answer: "It involves creating a single, unified identity for each employee across both organizations. This is essential for providing seamless access to applications and data while maintaining strong security and control." },
    { question: "How do you ensure data security during the integration process?", answer: "We conduct a thorough security assessment of both environments and create a unified security framework. This includes standardizing security policies, integrating threat detection tools, and ensuring all data is protected throughout the migration and consolidation process." },
    { question: "Your case study mentions a move from an Enterprise Agreement to CSP. What is the benefit?", answer: "Moving to a Cloud Solution Provider (CSP) model offers greater flexibility, pay-as-you-go pricing, and direct support from the partner. For the enterprise customer in our case study, this switch resulted in significant cost savings—$2.5 million in the first year alone." }
];

export const careersData: CareersData = {
    employeePerks: [
        {
            title: "Accelerate your career...",
            description: "Ample growth opportunities and a compassionate team."
        },
        {
            title: "Access Ongoing Development Opportunities",
            description: "We will prepay the exam costs of most relevant certs."
        },
        {
            title: "Flexible Work Opportunities",
            description: "A hybrid working environment and many employees working fully remote across the country."
        },
        {
            title: "Dynamic team culture",
            description: "Frequent employee events, volunteer opportunities, wellness activities, and so much more."
        },
        {
            title: "High standard of conduct",
            description: "We are committed to maintaining a high standard of conduct.",
            link: "#"
        }
    ],
    benefits: [
        "PTO",
        "401k",
        "Paid Holidays",
        "Progressive benefits plans",
        "Free $100K Life/AD&D policy",
        "Employee Assistance Program"
    ],
    openPositions: [
        "Strategic Technical Account Manager",
        "vCIO, (MSP)",
        "Modern Workplace Sr Systems Engineer",
        "Sr Client Technology Consultant",
        "Account Executive, MSP (100% Hunter)",
        "Technical Support Specialist, L1",
        "Senior Technical Account Manager",
        "Customer Support Representative, L2",
        "Solution Architect, Modern Work"
    ],
    testimonials: [
        "The way our Leaders run each team is great and cohesive. It's critical to our happiness",
        "Flexibility and being involved in all aspects of the business and technology",
        "There's always a new challenge and it's really dynamic. Everyone is very open to Feedback",
        "Teamwork!! Everyone is willing to help each other out"
    ]
};
