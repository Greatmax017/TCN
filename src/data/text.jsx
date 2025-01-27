import { CyberSecurityIcon, DigitalServicesIcon, ITConsultancyIcon, ProductDesignIcon, WebDevIcon } from "../ui/icons";
import { TbHelpCircleFilled } from "react-icons/tb";
import { GrCloudComputer } from "react-icons/gr";

import { 
    MdSupportAgent, // For Managed IT Support
    MdCloud, // For Cloud Solutions
    MdSecurity, // For Cybersecurity
    MdRouter, // For IT Infrastructure
    MdTransform, // For Digital Transformation
    MdBackup, // For Disaster Recovery
    MdBusiness // For IT Consultancy
} from "react-icons/md";

// Alternative icons if you prefer different styles:
import {
    BiSupport, // Alternative for Managed IT Support
    BiCloud, // Alternative for Cloud Solutions
    BiShield, // Alternative for Cybersecurity
    BiServer, // Alternative for IT Infrastructure
    BiReset, // Alternative for Digital Transformation
    BiSync, // Alternative for Disaster Recovery
    BiChat // Alternative for IT Consultancy
} from "react-icons/bi";

// Or using Outlined icons from Material Icons:
import {
    AiOutlineCustomerService, // Alternative for Managed IT Support
    AiOutlineCloud, // Alternative for Cloud Solutions
    AiOutlineSafety, // Alternative for Cybersecurity
    AiOutlineCluster, // Alternative for IT Infrastructure
    AiOutlineNodeIndex, // Alternative for Digital Transformation
    AiOutlineSync, // Alternative for Disaster Recovery
    AiOutlineSolution // Alternative for IT Consultancy
} from "react-icons/ai";

export const ServicesData = [
    {
        icon: ProductDesignIcon,
        title: "Managed IT Support",
        content: "Our comprehensive Managed IT Support service delivers round-the-clock monitoring and maintenance to keep your business technology operating at peak efficiency. Our dedicated team of IT professionals works proactively to identify and resolve potential issues before they impact your operations.",
        paragraphs: [
            "Our comprehensive Managed IT Support service delivers round-the-clock monitoring and maintenance to keep your business technology operating at peak efficiency. Our dedicated team of IT professionals works proactively to identify and resolve potential issues before they impact your operations.",

            "We understand that every minute of downtime costs your business money and productivity. That's why our support team maintains quick response times and provides both remote and on-site assistance when needed. Our helpdesk is staffed by certified technicians who can handle everything from basic troubleshooting to complex system issues.",

            "Using advanced monitoring tools, we track your network's health, server performance, and system updates in real-time. This proactive approach allows us to identify potential bottlenecks, security vulnerabilities, and performance issues before they escalate into major problems.",

            "We also provide detailed monthly reports on system performance, incident responses, and ongoing maintenance activities, giving you complete visibility into your IT infrastructure's health and our support activities. Our team continually updates their skills and knowledge to stay ahead of evolving technology trends and security threats."
        ]
    },
    {
        icon: AiOutlineCloud,
        title: "Cloud Solutions",
        content: "Our Cloud Solutions service helps businesses leverage the power of cloud computing through carefully planned migration strategies and ongoing cloud management. We specialize in deploying solutions across major platforms including Microsoft Azure, AWS, and Google Cloud, ensuring you get the most appropriate solution for your specific needs.",
        paragraphs: [
            "Our Cloud Solutions service helps businesses leverage the power of cloud computing through carefully planned migration strategies and ongoing cloud management. We specialize in deploying solutions across major platforms including Microsoft Azure, AWS, and Google Cloud, ensuring you get the most appropriate solution for your specific needs.",

            "Our team conducts thorough assessments of your current infrastructure and business requirements to develop a customized cloud migration strategy. We handle everything from initial planning and architecture design to data migration and post-deployment optimization, ensuring a smooth transition with minimal disruption to your operations.",

            "Security is at the forefront of our cloud solutions, with built-in redundancy, encryption, and access controls to protect your data. We implement industry best practices for cloud security and compliance, ensuring your cloud environment meets all regulatory requirements for your industry.",

            "Our cloud management services include continuous monitoring, cost optimization, and performance tuning to ensure you're getting the maximum value from your cloud investment. We help you take advantage of cloud scalability while maintaining cost control through careful resource management and optimization."
        ]
    },
    {
        icon: CyberSecurityIcon,
        title: "Cybersecurity Services",
        content: "Our comprehensive Cybersecurity Services provide multiple layers of protection to defend your business against evolving cyber threats. We implement a defense-in-depth strategy that combines advanced technology, proven methodologies, and expert monitoring to keep your data and systems secure.",
        paragraphs: [
            "Our comprehensive Cybersecurity Services provide multiple layers of protection to defend your business against evolving cyber threats. We implement a defense-in-depth strategy that combines advanced technology, proven methodologies, and expert monitoring to keep your data and systems secure.",

            "Our security solutions include next-generation firewalls, encrypted communications, advanced endpoint protection, and sophisticated threat detection systems. We continuously monitor your network for suspicious activities and potential security breaches, providing rapid response to any detected threats.",

            "Regular security assessments and penetration testing help identify vulnerabilities in your systems before they can be exploited. Our team stays current with the latest security threats and compliance requirements, ensuring your security measures remain effective and up-to-date.",

            "We also provide comprehensive security awareness training for your employees, recognizing that human error is often the weakest link in security. Our training programs help build a security-conscious culture within your organization, reducing the risk of security incidents."
        ]
    },
    {
        icon: MdRouter,
        title: "IT Infrastructure Management",
        content: "Our IT Infrastructure Management service provides end-to-end solutions for designing, implementing, and maintaining robust IT networks that support your business operations. We take a holistic approach to infrastructure management, ensuring all components work together seamlessly for optimal performance.",
        paragraphs: [
            "Our IT Infrastructure Management service provides end-to-end solutions for designing, implementing, and maintaining robust IT networks that support your business operations. We take a holistic approach to infrastructure management, ensuring all components work together seamlessly for optimal performance.",

            "From server deployment and storage solutions to network configuration and hardware upgrades, our team handles all aspects of your IT infrastructure. We implement redundancy and failover systems to ensure high availability of critical services and minimize potential downtime.",

            "Our infrastructure solutions are designed with scalability in mind, allowing your systems to grow alongside your business. We regularly assess your infrastructure needs and recommend upgrades or modifications to maintain optimal performance and efficiency.",

            "We utilize advanced monitoring tools and automation to maintain your infrastructure, ensuring consistent performance and early detection of potential issues. Our team provides regular maintenance, updates, and optimization to keep your systems running at peak efficiency."
        ]
    },
    {
        icon: DigitalServicesIcon,
        title: "Digital Transformation",
        content: "Our Digital Transformation service helps businesses evolve and adapt to the modern digital landscape by implementing innovative technologies and streamlined processes. We work closely with you to understand your business objectives and develop a transformation strategy that drives meaningful results.",
        paragraphs: [
            "Our Digital Transformation service helps businesses evolve and adapt to the modern digital landscape by implementing innovative technologies and streamlined processes. We work closely with you to understand your business objectives and develop a transformation strategy that drives meaningful results.",

            "Through careful analysis of your current operations, we identify opportunities for digital optimization and automation. Our solutions help eliminate manual processes, reduce operational costs, and improve overall efficiency through the strategic implementation of digital tools and technologies.",

            "We focus on creating integrated digital ecosystems that enhance collaboration, improve customer experience, and provide valuable business insights through data analytics. Our approach ensures that new digital solutions integrate seamlessly with your existing systems while providing a foundation for future growth.",

            "Change management is a key component of our digital transformation service. We provide comprehensive training and support to ensure your team successfully adopts new technologies and processes, maximizing the return on your digital investments."
        ]
    },
    {
        icon: MdBackup,
        title: "Disaster Recovery and Business Continuity",
        content: "Our Disaster Recovery and Business Continuity solutions provide comprehensive protection against data loss and system failures, ensuring your business can maintain operations even in challenging circumstances. We develop customized recovery strategies that align with your business priorities and compliance requirements.",
        paragraphs: [
            "Our Disaster Recovery and Business Continuity solutions provide comprehensive protection against data loss and system failures, ensuring your business can maintain operations even in challenging circumstances. We develop customized recovery strategies that align with your business priorities and compliance requirements.",

            "We implement robust backup solutions with multiple redundancies, ensuring your critical data is always protected and readily accessible when needed. Our team regularly tests backup and recovery procedures to ensure they perform as expected during actual emergencies.",

            "Our business continuity planning goes beyond simple backup solutions, incorporating detailed response procedures for various scenarios including natural disasters, cyber attacks, and system failures. We help you establish clear protocols and communication channels to maintain business operations during disruptions.",

            "Regular testing and updates of your disaster recovery plan ensure it remains effective and aligned with your evolving business needs. We provide detailed documentation and training to ensure your team knows exactly how to respond in emergency situations."
        ]
    },

    {
        icon: ITConsultancyIcon,
        title: "IT Consultancy and Strategy",
        content: "Our IT Consultancy and Strategy service provides expert guidance to help you make informed decisions about your technology investments and IT infrastructure. Our experienced consultants work with you to develop comprehensive IT strategies that align with your business goals and budget constraints.",
        paragraphs: [
            "Our IT Consultancy and Strategy service provides expert guidance to help you make informed decisions about your technology investments and IT infrastructure. Our experienced consultants work with you to develop comprehensive IT strategies that align with your business goals and budget constraints.",

            "We conduct thorough assessments of your current IT environment, identifying strengths, weaknesses, and opportunities for improvement. Our recommendations are based on industry best practices and deep technical expertise, ensuring you receive practical and effective solutions.",

            "Our strategic planning services help you develop technology roadmaps that support your business objectives while managing risks and costs effectively. We provide guidance on emerging technologies, vendor selection, and project planning to ensure successful implementation of new initiatives.",

            "Our consultants serve as trusted advisors, helping you navigate complex technology decisions and ensure your IT investments deliver maximum value. We provide ongoing support and guidance to help you adapt your IT strategy as your business needs evolve."
        ]
    },

    {
        type: "follow-up",
        icon: TbHelpCircleFilled,
        title: "Need Our Services",
        content: "Get in touch with us to learn more about our services and how we can help"
    }
];