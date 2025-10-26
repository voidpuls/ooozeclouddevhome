import { IconCode, IconHeadset, IconServer } from "@tabler/icons-react"

export const careersConfig = {
    page_title: "Join Our Team",
    page_description: "Be part of something special. Join us in shaping the future of hosting.",
    positions: [
        {
            id: 1,
            title: "Senior DevOps Engineer",
            icon: <IconServer size={24} />,
            description: "We're looking for an experienced DevOps Engineer to help us build and maintain our cloud infrastructure.",
            duties: [
                "Design and implement scalable cloud infrastructure",
                "Manage and optimize Kubernetes clusters",
                "Implement and maintain CI/CD pipelines",
                "Monitor system performance and reliability",
                "Collaborate with development teams on deployment strategies"
            ],
            requirements: [
                "5+ years of experience in DevOps or similar role",
                "Strong knowledge of AWS/GCP/Azure",
                "Experience with Kubernetes and Docker",
                "Proficiency in scripting languages (Python, Bash)",
                "Understanding of security best practices"
            ],
            salary: "£65,000 - £85,000",
            apply_link: "https://discord.gg/buzz",
            apply_button_text: "Apply via Discord"
        },
        {
            id: 2,
            title: "Technical Support Specialist",
            icon: <IconHeadset size={24} />,
            description: "Join our support team to help customers succeed with our hosting solutions.",
            duties: [
                "Provide technical support via tickets and Discord",
                "Troubleshoot hosting-related issues",
                "Create and maintain documentation",
                "Monitor system alerts and respond to incidents",
                "Assist with server migrations and setups"
            ],
            requirements: [
                "2+ years of technical support experience",
                "Knowledge of Linux systems",
                "Understanding of web hosting technologies",
                "Excellent communication skills",
                "Ability to work in shifts"
            ],
            salary: "£30,000 - £40,000",
            apply_link: "https://discord.gg/buzz",
            apply_button_text: "Apply via Discord"
        },
        {
            id: 3,
            title: "Full Stack Developer",
            icon: <IconCode size={24} />,
            description: "Help us build and maintain our customer-facing applications and internal tools.",
            duties: [
                "Develop new features for our hosting platform",
                "Maintain and improve existing applications",
                "Write clean, maintainable code",
                "Collaborate with the design team",
                "Participate in code reviews"
            ],
            requirements: [
                "3+ years of full stack development experience",
                "Proficiency in React and Node.js",
                "Experience with TypeScript",
                "Understanding of REST APIs",
                "Knowledge of database systems"
            ],
            salary: "£45,000 - £65,000",
            apply_link: "https://discord.gg/buzz",
            apply_button_text: "Apply via Discord"
        }
    ]
} 