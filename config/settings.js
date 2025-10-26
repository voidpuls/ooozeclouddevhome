import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconCloudComputing, IconSend, IconServer, IconWorld, IconBrandTiktok, IconBrandYoutube, IconMail } from "@tabler/icons-react"
import { FaDiscord } from "react-icons/fa6"

export const settings = {
   company_name: "OozeCloud",
   website_domain: "oozecloud.com",
   billing_url: "https://client.oozecloud.com",
   socials: {
      email: "info@buzzy.hosting",
      phone: "+1 (123) 456-7890",
      other: {
         discord: {
            link: "https://discord.gg/oozecloud",
            icon: <FaDiscord size="1rem" />
         },
         youtube: {
            link: "https://youtube.com/",
            icon: <IconBrandYoutube size="1rem" />
         },
         email: {
            link: "mailto:business@buzzhosting.co",
            icon: <IconMail size="1rem" />
         }
      }
   },
   home_page_promotion: {
      enabled: true,
      link: "/vps",
   },
   top_banner: {
      enabled: true,
      message: "Get up to 10% off on all plans. Use code NEW10",
   },
   create_ticket_url: "https://billing.oozecloud.com",
   translation_system: {
      enabled: true, // Will hide language switcher if disabled
      default_language: "en", // Default language to use if no language is selected
      languages: [
         { flag: '/language_icons/en.png', value: "English", key: 'en' },
         // { flag: '/language_icons/de.png', value: "German", key: 'de' },
         // { flag: '/language_icons/es.png', value: "Spanish", key: 'es' },
         // { flag: '/language_icons/nl.png', value: "Dutch", key: 'nl' },
         // add more languages...
      ]
   },
   google_analytics_id: "G-ID_HERE", // Google Analytics ID, leave empty if you don't want to use it
   color_scheme: {
      force_color_scheme: "auto", // "light", "dark" or "auto"
      default_color_scheme: "auto", // "light", "dark" or "auto"
   },
   hero_panel_image: {
      visible: true,
      light: "/panel_image.png",
      dark: "/panel_image.png"
   },
   partners_visible: true,
   partners: [
      {
         name: "Dell",
         image: "/partners/dell.png"
      },
      {
         name: "Avast",
         image: "/partners/avast.svg"
      },
      {
         name: "ASRock",
         image: "/partners/asrock.svg"
      },
      {
         name: "Microsoft",
         image: "/partners/microsoft.svg"
      },
      {
         name: "HP",
         image: "/partners/hp.png"
      },
      {
         name: "Docker",
         image: "/partners/docker.svg"
      },
   ],
   reviews_visible: true,
   reviews: [
      {
         title: "Excellent uptime",
         message: "I've been using this hosting service for over a year and have experienced minimal downtime. Highly recommend!",
         avatar: "https://avatars.githubusercontent.com/u/2?v=4"
      },
      {
         title: "Fantastic support",
         message: "Their customer support is top-notch. They resolved my issue within minutes!",
         avatar: "https://avatars.githubusercontent.com/u/3?v=4"
      },
      {
         title: "User-friendly interface",
         message: "The dashboard is very intuitive and easy to navigate. Perfect for beginners.",
         avatar: "https://avatars.githubusercontent.com/u/4?v=4"
      },
      {
         title: "Affordable pricing",
         message: "Great value for the features offered. I switched from another provider and saved money!",
         avatar: "https://avatars.githubusercontent.com/u/5?v=4"
      },
      {
         title: "Fast loading times",
         message: "My website loads significantly faster since I switched to this hosting service.",
         avatar: "https://avatars.githubusercontent.com/u/6?v=4"
      },
      {
         title: "Reliable service",
         message: "I have never had any issues with my hosting. It's been smooth sailing!",
         avatar: "https://avatars.githubusercontent.com/u/7?v=4"
      },
      {
         title: "Great for developers",
         message: "The features available for developers are fantastic. I love the flexibility.",
         avatar: "https://avatars.githubusercontent.com/u/8?v=4"
      },
      {
         title: "Easy migration",
         message: "Migrating my site was a breeze. The support team guided me through every step.",
         avatar: "https://avatars.githubusercontent.com/u/9?v=4"
      },
      {
         title: "Highly recommended",
         message: "I recommend this hosting service to all my friends. They love it too!",
         avatar: "https://avatars.githubusercontent.com/u/10?v=4"
      },
      {
         title: "Great security features",
         message: "I feel safe knowing my site is protected with their security measures.",
         avatar: "https://avatars.githubusercontent.com/u/11?v=4"
      },
      {
         title: "Flexible plans",
         message: "I appreciate the variety of plans available. There's something for everyone.",
         avatar: "https://avatars.githubusercontent.com/u/12?v=4"
      },
      {
         title: "Excellent performance",
         message: "My website's performance has improved dramatically since switching hosts.",
         avatar: "https://avatars.githubusercontent.com/u/13?v=4"
      },
      {
         title: "Great documentation",
         message: "The documentation is thorough and very helpful for troubleshooting.",
         avatar: "https://avatars.githubusercontent.com/u/14?v=4"
      },
      {
         title: "Responsive support team",
         message: "I always get quick responses from the support team. They are very helpful.",
         avatar: "https://avatars.githubusercontent.com/u/15?v=4"
      },
      {
         title: "Good backup options",
         message: "I love the automated backup options. It gives me peace of mind.",
         avatar: "https://avatars.githubusercontent.com/u/16?v=4"
      },
      {
         title: "Great for e-commerce",
         message: "This hosting service is perfect for my online store. Everything works seamlessly.",
         avatar: "https://avatars.githubusercontent.com/u/17?v=4"
      },
      {
         title: "Customisable features",
         message: "I can easily customise my hosting features to suit my needs. Very flexible.",
         avatar: "https://avatars.githubusercontent.com/u/18?v=4"
      },
      {
         title: "Great community",
         message: "The community around this hosting service is very supportive and helpful.",
         avatar: "https://avatars.githubusercontent.com/u/19?v=4"
      },
      {
         title: "Consistent updates",
         message: "I appreciate that they regularly update their software and features.",
         avatar: "https://avatars.githubusercontent.com/u/20?v=4"
      },
      {
         title: "Overall satisfaction",
         message: "I am very satisfied with my experience. I would not switch to another provider.",
         avatar: "https://avatars.githubusercontent.com/u/21?v=4"
      }
   ],
   bento_grid_image: "/support_tickets_image.png",
   bento_grid_image_alt: "Support tickets",

   // Array of blog post IDs from the blogs.js file to display on the home page
   home_page_blogs: [1, 2, 3], // Maximum of 3
   navbar_support_link: "https://discord.gg/oozecloud",

   // Icons: https://react-icons.github.io/react-icons/
   // Ensure to import the icon at the top of the file
   navbar_dropdown_items: [
      {
         icon: IconSend,
         title: 'VPS',
         description: 'Explore our Virtual Private Servers',
         href: '/vps'
      },
      {
         icon: IconServer,
         title: 'Dedicated',
         description: 'Explore our Dedicated Servers',
         href: '/dedicated'
      },
      {
         icon: IconWorld,
         title: 'Colocation',
         description: 'Explore our Colocation options',
         href: '/colocation'
      },
      {
         icon: IconCloudComputing,
         title: 'Website Hosting',
         description: 'Explore our Website Hosting options',
         href: '/website-hosting'
      },
   ],
   footer_links: [
      {
         title: 'GENERAL',
         links: [
            { label: 'Home', link: '/' },
            { label: 'Pricing', link: '/#pricing' },
            { label: 'Blog', link: '/blog' },
            { label: 'Contact us', link: '/contact-us' },
            { label: 'Knowledgebase', link: '/knowledgebase' },
            { label: 'Create a ticket', link: 'https://billing.oozecloud.com' },
            { label: 'Join our Discord', link: 'https://discord.gg/oozecloud' },
            { label: 'Careers', link: '/careers' },
         ],
      },
      {
         title: 'OUR SERVICES',
         links: [
            { label: 'Dedicated Servers', link: '/dedicated' },
            { label: 'VPS Servers', link: '/vps' },
            { label: 'Colocation', link: '/colocation' },
            { label: 'Website Hosting', link: '/website-hosting' },
            { label: 'Our Network', link: '/network' },
         ],
      },
      {
         title: 'LEGAL',
         links: [
            { label: 'Terms of Service', link: '/terms-of-service' },
            { label: 'Privacy Policy', link: '/privacy-policy' },
         ],
      },
   ]
}