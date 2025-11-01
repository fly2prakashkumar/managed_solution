

import type { Service, CaseStudy, BlogPost, TeamMember, Resource, NavItem, Testimonial, Award, Webinar, LiveEvent, OnDemandVideo, FooterNav, Faq, Solution } from "@/lib/types";
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
        { title: "AI & Automation", href: "#" },
        { title: "Network Monitoring", href: "#" },
        { title: "Zero Touch Deployment", href: "#" },
        { title: "Compliance Management System", href: "#" },
        { title: "Entra ID and Intune Migration", href: "#" },
        { title: "Employee Engagement", href: "#" },
        { title: "Business Process Automation", href: "#" },
        { title: "Technology Mergers and Acquisitions", href: "#" },
    ],
  },
  {
    title: "Products",
    href: "#",
    children: [
      { title: "Procurement", href: "#" },
      { title: "Security", href: "/services/cybersecurity" },
      { title: "Microsoft Licensing", href: "#" },
    ],
  },
  {
    title: "Industries",
    href: "#",
    children: [
      { title: "Healthcare", href: "#" },
      { title: "Finance", href: "#" },
      { title: "Life Sciences", href: "#" },
      { title: "Non-Profit", href: "#" },
    ]
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Events", href: "/events" },
      { title: "White Papers", href: "/resources" },
    ]
  },
  {
    title: "Culture",
    href: "/about",
    children: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "#" },
      { title: "Awards", href: "/about" },
    ]
  },
  {
    title: "Contact",
    href: "/contact",
    children: [
      { title: "Contact Us", href: "/contact" },
      { title: "Book Consultation", href: "/contact" },
    ]
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
            { title: "Microsoft Security Services", href: "/services/cybersecurity" },
            { title: "Azure Cloud Managed Services", href: "/services/cloud-services" },
        ]
    },
    {
        title: "Industries",
        links: [
            { title: "Healthcare", href: "#" },
            { title: "Financial", href: "#" },
            { title: "Life Sciences", href: "#" },
            { title: "Nonprofit", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { title: "About Us", href: "/about" },
            { title: "Blog", href: "/blog" },
            { title: "Case Studies", href: "/case-studies" },
            { title: "Events", href: "/events" },
            { title: "Careers", href: "#" },
            { title: "Contact Us", href: "/contact" },
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
    title: "Microsoft Consulting",
    shortDescription: "Strategic guidance to align technology with your goals.",
    icon: BrainCircuit,
    description: "Our expert consultants work with you to develop a long-term technology roadmap. We provide strategic advice on IT infrastructure, digital transformation, and budgeting to ensure your technology investments drive business growth and innovation.",
    imageUrl: "service-consulting",
    imageHint: "business meeting",
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
];

export const solutions: Solution[] = [
    {
        slug: "ai-automation",
        title: "AI and Automation",
        description: "Leverage cutting-edge AI and automation technologies to streamline processes, enhance productivity, and drive innovation across your organization.",
        imageUrl: "solution-ai",
        imageHint: "AI automation",
        href: "#"
    },
    {
        slug: "communication-collaboration",
        title: "Communication and Collaboration",
        description: "Enhance collaboration and streamline communications with Microsoft Teams Collaboration tools and our reliable support.",
        imageUrl: "solution-collaboration",
        imageHint: "team meeting",
        href: "#"
    },
    {
        slug: "network-monitoring",
        title: "Network Monitoring",
        description: "Stay ahead of downtime with a proactive IT support team and network monitoring tools so you can focus on what's important.",
        imageUrl: "solution-network",
        imageHint: "network monitoring",
        href: "#"
    },
    {
        slug: "cloud-management",
        title: "Cloud Management & Deployment",
        description: "Our team of cloud experts is here to help you leverage the power of the cloud seamlessly to meet the needs your business.",
        imageUrl: "solution-cloud",
        imageHint: "cloud management",
        href: "#"
    },
    {
        slug: "zero-touch-deployment",
        title: "Zero Touch Deployment Services",
        description: "Save time and costs on manual device set-up while enhancing security and compliance.",
        imageUrl: "solution-deployment",
        imageHint: "device setup",
        href: "#"
    },
    {
        slug: "employee-lifecycle",
        title: "Employee Lifecycle Management",
        description: "From onboarding to offboarding, automate the employee lifecycle while enhancing productivity and security.",
        imageUrl: "solution-employee",
        imageHint: "employee journey",
        href: "#"
    }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-chain-network-overhaul",
    title: "Retail Chain Network Overhaul",
    clientName: "Pathway Genomics",
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
    name: "Fern Usry",
    comment: "I would highly recommend Managed Solution for your IT needs. They resolve things quickly and efficiently.",
    date: "2024-07-12"
  },
  {
    name: "John Grillo",
    comment: "My IT issue was holding up a Sales Contract from being sent out. The Managed Solution team took care of it in less than 5 minutes!",
    date: "2024-07-10"
  },
  {
    name: "Tim McMullen",
    comment: "They are always great at helping me out. The fast response … highly recommend this company!",
    date: "2024-07-08"
  },
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
        comment: "I am always so impressed with the level of service I receive from Managed Solution. They are always so quick to respond and always resolve my issues.",
        date: "2024-07-16"
    }
];

export const coManagedTestimonials: Testimonial[] = [
    {
        name: "Dennis Gonzales",
        comment: "We'd worked with Managed Solution on a successful IT project in the past, so we had a good idea of their capabilities. Since they were at Microsoft Partner, in addition to projects they were able to support our software licensing. This was especially important to make sure that we have a compliant IT function error radar.",
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
        comment: "I am always so impressed with the level of service I receive from Managed Solution. They are always so quick to respond and always resolve my issues.",
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
        comment: "I am always so impressed with the level of service I receive from Managed Solution. They are always so quick to respond and always resolve my issues.",
        date: "2024-07-16"
    }
]

export const awards: Award[] = [
  { title: "Microsoft Partner - Modern Work", imageId: "award-1" },
  { title: "Microsoft Partner - Infrastructure Azure", imageId: "award-2" },
  { title: "Inc 5000", imageId: "award-3" },
  { title: "MSP Today - Product of the Year 2025", imageId: "award-4" },
  { title: "Cloudtango MSP Select 2025", imageId: "award-5" },
];

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
        answer: "You can contact our IT help desk via phone at 888.563.9132 (option 2), by email at support@managedsolution.com, or through our customer portal."
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

    

    


