
import type { Service, CaseStudy, BlogPost, TeamMember, Resource, NavItem, Testimonial, Award, Webinar, LiveEvent, OnDemandVideo, FooterNav } from "@/lib/types";
import { ShieldCheck, Server, Cloud, Database, Network, Laptop, LifeBuoy, BrainCircuit } from "lucide-react";

export const navItems: NavItem[] = [
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Managed IT Services", href: "/services#managed-it" },
      { title: "IT Help Desk", href: "/services#help-desk" },
      { title: "Managed IT Security Solutions", href: "/services#cybersecurity" },
      { title: "Microsoft Consulting Services", href: "/services#it-consulting" },
      { title: "Microsoft Security Services", href: "/services#cybersecurity" },
      { title: "Azure Cloud Managed Services", href: "/services#cloud-services" },
      { title: "Compliance Management", href: "/services#cybersecurity" },
      { title: "Backup and Disaster Recovery Solutions", href: "/services#data-backup" },
      { title: "Remote Management and Monitoring Tools", href: "/services#managed-it" },
      { title: "Virtual CIO Consulting Services", href: "/services#it-consulting" },
    ],
  },
  {
    title: "Solutions",
    href: "#",
    children: [
        { title: "Zero Touch Deployment Services", href: "#" },
        { title: "Entra ID and Intune Migration", href: "#" },
        { title: "Employee Engagement", href: "#" },
        { title: "Business Process Automation", href: "#" },
        { title: "Technology Mergers and Acquisitions", href: "#" },
        { title: "Communication and Collaboration", href: "#" },
        { title: "Simplified Cloud Management and Deployment", href: "#" },
    ],
  },
  {
    title: "Products",
    href: "#",
    children: [
      { title: "Procurement", href: "#" },
      { title: "Security", href: "/services#cybersecurity" },
      { title: "Microsoft Licensing", href: "#" },
    ],
  },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Resources", href: "/resources" },
   { title: "Contact", href: "/contact" },
];

export const footerNav: FooterNav[] = [
    {
        title: "Services",
        links: [
            { title: "Managed IT Services", href: "/services#managed-it" },
            { title: "IT Help Desk", href: "/services#help-desk" },
            { title: "Managed IT Security Solutions", href: "/services#cybersecurity" },
            { title: "Microsoft Consulting Services", href: "/services#it-consulting" },
            { title: "Microsoft Security Services", href: "/services#cybersecurity" },
            { title: "Azure Cloud Managed Services", href: "/services#cloud-services" },
            { title: "Compliance Management", href: "/services#cybersecurity" },
            { title: "Backup and Disaster Recovery Solutions", href: "/services#data-backup" },
            { title: "Remote Management and Monitoring Tools", href: "/services#managed-it" },
            { title: "Virtual CIO Consulting Services", href: "/services#it-consulting" },
        ]
    },
    {
        title: "Solutions",
        links: [
            { title: "Zero Touch Deployment Services", href: "#" },
            { title: "Entra ID and Intune Migration", href: "#" },
            { title: "Employee Engagement", href: "#" },
            { title: "Business Process Automation", href: "#" },
            { title: "Technology Mergers and Acquisitions", href: "#" },
            { title: "Communication and Collaboration", href: "#" },
            { title: "Simplified Cloud Management and Deployment", href: "#" },
        ]
    },
    {
        title: "Products",
        links: [
            { title: "Procurement", href: "#" },
            { title: "Security", href: "/services#cybersecurity" },
            { title: "Microsoft Licensing", href: "#" },
        ]
    },
    {
        title: "Contact",
        links: [
            { title: "Contact Us", href: "/contact" },
            { title: "Customer Support", href: "#" },
            { title: "Partners", href: "#" },
            { title: "Careers", href: "#" },
        ]
    }
]

export const services: Service[] = [
  {
    slug: "managed-it",
    title: "Managed IT Services",
    shortDescription: "Comprehensive IT management for your peace of mind.",
    icon: Laptop,
    description: "Our Managed IT Services provide proactive monitoring, maintenance, and management of your entire IT infrastructure. From desktops to servers, we ensure your systems are running optimally, securely, and efficiently, allowing you to focus on your core business.",
    imageUrl: "service-managed-it",
    imageHint: "IT support",
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
    title: "Cloud Services",
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
    title: "IT Consulting & Strategy",
    shortDescription: "Strategic guidance to align technology with your goals.",
    icon: BrainCircuit,
    description: "Our expert consultants work with you to develop a long-term technology roadmap. We provide strategic advice on IT infrastructure, digital transformation, and budgeting to ensure your technology investments drive business growth and innovation.",
    imageUrl: "service-consulting",
    imageHint: "business meeting",
  },
  {
    slug: "help-desk",
    title: "24/7 Help Desk Support",
    shortDescription: "Fast and friendly technical support when you need it.",
    icon: LifeBuoy,
    description: "Our dedicated help desk team is available around the clock to provide expert technical assistance. We offer remote and on-site support to resolve your employees' IT issues quickly, minimizing downtime and boosting productivity.",
    imageUrl: "service-voip",
    imageHint: "customer support",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-chain-network-overhaul",
    title: "Retail Chain Network Overhaul",
    clientName: "Global Fashion Inc.",
    description: "We modernized the entire network infrastructure for a 50-store retail chain, resulting in a 99.9% uptime and a 40% increase in transaction speed. The solution involved implementing a secure SD-WAN and centralized cloud management.",
    imageUrl: "case-study-1",
    imageHint: "retail store",
  },
  {
    slug: "healthcare-hipaa-compliance",
    title: "Healthcare HIPAA Compliance",
    clientName: "Wellness Medical Group",
    description: "Developed and implemented a comprehensive cybersecurity framework to achieve full HIPAA compliance for a multi-clinic healthcare provider. This included risk assessments, security policy creation, and employee training, successfully passing all audits.",
    imageUrl: "case-study-2",
    imageHint: "healthcare clinic",
  },
  {
    slug: "architecture-firm-cloud-migration",
    title: "Architecture Firm Cloud Migration",
    clientName: "Creative Structures LLP",
    description: "Migrated a leading architecture firm's project data and collaboration tools to a hybrid cloud environment. This improved remote team access, enhanced data security, and reduced on-premise hardware costs by 60%.",
    imageUrl: "case-study-3",
    imageHint: "architecture firm",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "the-importance-of-proactive-cybersecurity-for-smbs",
    title: "The Importance of Proactive Cybersecurity for SMBs",
    author: "Jane Doe, Security Expert",
    date: "2024-07-15",
    excerpt: "Small and medium-sized businesses are increasingly targeted by cybercriminals. A proactive approach to cybersecurity is no longer a luxury but a necessity...",
    content: "Small and medium-sized businesses (SMBs) are increasingly becoming prime targets for cybercriminals. Many SMBs believe they are too small to be of interest to hackers, but this misconception makes them vulnerable. In reality, they are often seen as easy targets due to perceived weaker security measures compared to large corporations.\n\nA proactive approach to cybersecurity is no longer a luxury but a necessity for survival in the digital age. This means moving beyond basic reactive measures like antivirus software and firewalls. A comprehensive proactive strategy involves regular security assessments, employee training, multi-factor authentication (MFA), and a robust incident response plan.\n\nFor executives, investing in cybersecurity is about risk management and protecting the bottom line. A single breach can lead to devastating financial losses, reputational damage, and legal liabilities. For developers, this means adopting a 'security-first' mindset, integrating security practices throughout the software development lifecycle (DevSecOps), and staying updated on the latest threats and vulnerabilities. General users play a critical role as the first line of defense; being aware of phishing scams, using strong passwords, and reporting suspicious activity are vital for the organization's overall security posture.",
    imageUrl: "blog-1",
    imageHint: "cyber security",
  },
  {
    slug: "devops-vs-sre-choosing-the-right-model",
    title: "DevOps vs. SRE: Choosing the Right Model",
    author: "John Smith, Lead Engineer",
    date: "2024-06-28",
    excerpt: "DevOps and Site Reliability Engineering (SRE) are two popular models for managing modern software development and operations. While they share common goals, their approaches differ...",
    content: "DevOps and Site Reliability Engineering (SRE) are two of the most influential models for managing modern, large-scale software systems. Both aim to break down silos between development and operations teams to ship better products faster and more reliably. However, they originate from different philosophies and have distinct approaches.\n\nDevOps is a cultural philosophy that emphasizes collaboration, communication, and integration between software developers and IT operations professionals. It's a broad set of principles and practices aimed at automating and improving the software development lifecycle.\n\nSRE, on the other hand, is a more prescriptive implementation of DevOps principles, pioneered by Google. It treats operations as a software problem. SRE teams are typically composed of software engineers who apply engineering principles to create scalable and highly reliable software systems. They use Service Level Objectives (SLOs) and error budgets to balance reliability with the need for innovation.\n\nFor executives, the choice between them impacts team structure and budget allocation. DevOps can be a cultural shift across the organization, while SRE often involves creating specialized teams. For developers, SRE provides a clear, data-driven framework for reliability, which can be both empowering and demanding. It forces a rigorous focus on automation and measurement that benefits the entire engineering organization.",
    imageUrl: "blog-2",
    imageHint: "developer coding",
  },
  {
    slug: "benefits-of-hybrid-cloud-for-businesses",
    title: "The Top 5 Benefits of a Hybrid Cloud Strategy",
    author: "Emily White, Cloud Architect",
    date: "2024-05-19",
    excerpt: "A hybrid cloud approach, combining public and private cloud services, offers businesses the best of both worlds. It provides the flexibility to scale while maintaining control over sensitive data...",
    content: "As businesses navigate their digital transformation journeys, the 'cloud' is no longer a one-size-fits-all destination. A hybrid cloud strategy, which integrates a private cloud (on-premises infrastructure) with a public cloud (like AWS, Azure, or Google Cloud), has emerged as the dominant model for enterprises seeking flexibility, security, and cost-efficiency.\n\nHere are the top five benefits:\n\n1.  **Flexibility and Agility:** Run workloads where they make the most sense. Use the public cloud for scalable, non-sensitive applications and the private cloud for critical, sensitive data.\n\n2.  **Cost Optimization:** A hybrid approach allows you to avoid the large capital expenditure of a fully on-premises solution while controlling operational costs by moving workloads between environments based on demand and price.\n\n3.  **Enhanced Security and Compliance:** Keep sensitive data and critical workloads on a private cloud to maintain tight control and meet strict regulatory requirements, while leveraging the public cloud's robust security features for other applications.\n\n4.  **Improved Reliability and Disaster Recovery:** A hybrid model provides an ideal foundation for a disaster recovery plan. You can use the public cloud as a backup and recovery site for your on-premises data, offering a cost-effective way to ensure business continuity.\n\n5.  **Scalability:** Seamlessly 'cloud burst' from your private cloud into the public cloud to handle sudden peaks in demand without having to over-provision your own data center.",
    imageUrl: "blog-3",
    imageHint: "business collaboration",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dr. Evelyn Reed",
    role: "Founder & CEO",
    imageUrl: "team-1",
    imageHint: "professional woman",
  },
  {
    name: "Marcus Thorne",
    role: "Chief Technology Officer",
    imageUrl: "team-2",
    imageHint: "professional man",
  },
  {
    name: "Lena Petrova",
    role: "Lead Cybersecurity Analyst",
    imageUrl: "team-3",
    imageHint: "woman engineer",
  },
  {
    name: "David Chen",
    role: "Head of Cloud Solutions",
    imageUrl: "team-4",
    imageHint: "man smiling",
  },
];

export const resources: Resource[] = [
    {
        title: "The 2024 Cybersecurity Threat Landscape",
        description: "An in-depth white paper covering the latest cyber threats, trends, and defensive strategies for modern businesses. Learn how to protect your organization from phishing, ransomware, and more.",
        imageUrl: "resource-1",
        imageHint: "ebook cover"
    }
];

export const testimonials: Testimonial[] = [
  {
    name: "Tim McMullen",
    date: "2025-09-04",
    comment: "Great Team to work with!",
  },
  {
    name: "yune hwang",
    date: "2025-08-27",
    comment: "Managed solution is very efficient and quick to resolve my problems.",
  },
  {
    name: "Julie",
    date: "2025-08-15",
    comment: "Celeste saved my day by fixing my monitors that were blacking out.",
  },
  {
    name: "Alex Johnson",
    date: "2025-07-22",
    comment: "The migration to the new server was seamless. Minimal downtime and great communication.",
  }
];

export const awards: Award[] = [
  { title: "Microsoft Partner - Modern Work", imageId: "award-1" },
  { title: "Microsoft Partner - Infrastructure Azure", imageId: "award-2" },
  { title: "Inc 5000", imageId: "award-3" },
  { title: "MSP Today - Product of the Year 2025", imageId: "award-4" },
  { title: "Cloudtango MSP Select 2025", imageId: "award-5" },
];

export const webinars: Webinar[] = [
    {
        title: "Copilot Agents: Your New...",
        date: "October 21st, 2025 at 10:00am PST",
        imageUrl: "webinar-1",
        imageHint: "copilot agents",
    },
    {
        title: "Copilot Studio Deep Dive:...",
        date: "November 4th, 2025 at 10:00am PST",
        imageUrl: "webinar-2",
        imageHint: "copilot studio",
    },
    {
        title: "Copilot + Power Automate:...",
        date: "November 18th, 2025 at 10:00am PST",
        imageUrl: "webinar-3",
        imageHint: "copilot power automate",
    }
];

export const liveEvents: LiveEvent[] = [
    {
        slug: "copilot-agents",
        title: "Copilot Agents: Your New Digital Teammates",
        date: "October 21st, 2025 at 10:00am PST",
        description: "See how Copilot Agents can take on repetitive work, manage routine updates, and keep projects moving behind the scenes. You'll explore practical ways to set up and customize agents so they become reliable digital teammates for your team.",
        imageUrl: "live-event-1",
        imageHint: "Copilot Agents",
    },
    {
        slug: "copilot-studio-deep-dive",
        title: "Copilot Studio Deep Dive: Build Highly Customized AI Agents",
        date: "November 4th, 2025 at 10:00am PST",
        description: "Explore how Copilot Studio lets you design custom AI assistants tailored to your team's unique processes and data. Learn how to build, connect, and deploy agents that deliver fast, consistent results across your organization.",
        imageUrl: "live-event-2",
        imageHint: "Copilot Studio",
    },
    {
        slug: "copilot-power-automate",
        title: "Copilot + Power Automate: AI-Driven Workflows in Action",
        date: "November 18th, 2025 at 10:00am PST",
        description: "Discover how combining Copilot with Power Automate can turn everyday requests into self-running workflows. See real examples of automations that save time, reduce manual work, and keep teams focused on high-value priorities.",
        imageUrl: "live-event-3",
        imageHint: "Copilot Power Automate",
    },
];

export const onDemandVideos: OnDemandVideo[] = [
    {
        slug: "copilot-analyst",
        title: "Copilot Analyst: Smarter Data Workflows in Excel",
        series: "Copilot Analyst",
        description: "See how Copilot Agents can take on repetitive work, manage routine updates, and keep projects moving behind the scenes. You'll explore practical ways to set up and customize agents so they become reliable digital teammates for your team.",
        imageUrl: "on-demand-1",
        imageHint: "Copilot Excel",
    },
    {
        slug: "copilot-create",
        title: "Copilot Create: From Idea to Polished Product in Minutes",
        series: "Microsoft Copilot Series",
        description: "In this 30-minute session, our Microsoft Solutions expert will demonstrate how Copilot Notebooks can capture ideas, structure projects, and support collaborative planning. You'll see real examples of brainstorming, meeting summaries, and long-form analysis - and get your questions answered during a live Q&A.",
        imageUrl: "on-demand-2",
        imageHint: "Copilot create",
    },
    {
        slug: "inside-copilot-notebooks",
        title: "Inside Copilot Notebooks: AI-Powered Thinking Spaces",
        series: "Microsoft Copilot Series",
        description: "See how Copilot can transform meeting notes, outlines, and ideas into ready-to-share documents and presentations in minutes. This session includes live examples, practical tips for refining output, and time for your questions in a live Q&A.",
        imageUrl: "on-demand-3",
        imageHint: "Copilot notebooks",
    },
    {
        slug: "copilot-scheduler-researcher",
        title: "Copilot Scheduler & Researcher",
        series: "Microsoft Copilot Series",
        description: "Learn how to streamline meeting coordination, task follow-ups, and research by letting Copilot handle the scheduling and information gathering for you.",
        imageUrl: "on-demand-4",
        imageHint: "Copilot scheduler",
    },
    {
        slug: "prompt-like-a-pro",
        title: "Prompt Like a Pro: Strategies for Better Copilot Results",
        series: "Microsoft Copilot Series",
        description: "See Copilot in action during this impactful 30-minute session where our Microsoft Solutions expert will demonstrate how smarter prompting can drive better results across your Microsoft 365 apps.",
        imageUrl: "on-demand-5",
        imageHint: "Copilot prompt",
        isNew: true,
    },
    {
        slug: "copilot-for-finance",
        title: "Copilot For Finance: Strategic Budget Planning for 2025",
        series: "Microsoft 365 Copilot",
        description: "Discover how Copilot's advanced tools can drive a collaborative and cross-functional approach, enabling teams across departments to align on financial goals, optimize resources, and improve decision-making.",
        imageUrl: "on-demand-6",
        imageHint: "Copilot finance",
    },
]
