'use client';

import { motion } from "framer-motion";

export default function Privacy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      title: "Introduction",
      content: "This policy outlines how we use your data, what data we collect and store, how we protect stored data, data retention, and waivers of rights. It also outlines our procedures for handling cases under the general data protection regulations in the European Union, as well as our further commitment to supporting industry best security practices and supporting the protection of children while they utilize our platform. This policy was last reviewed and approved for publication on September 28, 2025, and is scheduled for re-review on March 28, 2026."
    },
    {
      title: "Allocated Data Protection Officer",
      content: "For this agreement, the Data Protection Officer assigned to observe and oversee the active functions of this policy shall hereby be assigned to Mr Austin Johnson."
    },
    {
      title: "Binding Nature",
      content: "This policy shall remain in effect for the remainder of the customers' use of our services, with an additional term of five (5) years. By utilizing any service or part of our platform owned or controlled by us, you accept that you agree with all clauses within this policy."
    },
    {
      title: "Staff Server Access",
      content: "Important Notice: OozeCloud staff may request access to customer servers at any time for maintenance, support, or security purposes. However, server access requires explicit approval from the server owner before any staff member can manage or access the server. Disclaimer: It is the server owner's responsibility to manage and revoke staff access permissions. OozeCloud is not responsible if users forget to remove staff member access after support or maintenance is completed. All staff access requests will be communicated through our official Discord server, and customers should only approve access requests from verified OozeCloud staff members."
    },
    {
      title: "Children's Privacy",
      content: "We may collect and store children's information because our services are directly targeted towards children, as they are the products' focus and target audience. We will ensure parent consent has been obtained from parents of children under 16 registered on our site. We collect a child's information when they: Create an account to be utilized on our platform, Purchase any product or service we offer, Interact with any of our customer service platforms, Interact with our platform or services. We will never sell your child's data to any third party and will only share what is necessary with trusted third parties who allow us to operate our business day-to-day. We ask children to share certain information with us for notification, transaction, and security purposes, and we strongly recommend that the guardian(s) of children utilize their details instead of permitting their children to use any of their information on any section of our platform. By agreeing to utilize any part of our platform or services, the child and parent expressly consent that they have read, understood, and agreed to all clauses within this policy. We cannot be held liable for any interaction your child has due to purchasing one of our multiplayer game products, as these services are privately owned and not managed or controlled by us. We recommend that guardians/parents regularly review their children's activities online to ensure they remain safe."
    },
    {
      title: "Data Retention",
      content: "Per our commitment to the European Union's GDPR ('General Data Protection Regulations'), we will only retain data for as long as necessary. By purchasing, using, or subsequently accessing any services we own or control, you accept that we may hold your data for 5 years past the point that we deem the data no longer reasonable to maintain. We keep this data for further taxation purposes and our financial obligation to the United States. Site access logs and requests are retained indefinitely to ensure security. This includes cookie-based data, which will naturally expire if the end user deletes or expires the cookie. Service files, hereby defined as 'information uploaded to a service provided by OozeCloud,' will be retained only as long as necessary, even past the termination of business between the end user and OozeCloud."
    },
    {
      title: "Data Erasure",
      content: "Data erasure will be carried out when a client requests the erasure of their data should take place. In many cases, you must provide proof of the name and address assigned to the billing account before we can process or access your data and proceed with any erasure request. This policy does not serve as a waiver of rights. The following outlines our policy regarding data erasure:",
      bulletPoints: [
        "The formal process begins with the client's request to proceed with an erasure request; this must be received via our official Discord server.",
        "Within 24-48 hours (dependent on office hours and public holidays), OozeCloud may request proof of identification, including photographic state/government-issued identification and/or a letter to the client's name and address.",
        "The client will then have 7 days to submit documents.",
        "OozeCloud will confirm the document and provide the next steps.",
        "OozeCloud will then provide a written response to the request, either accepting the erasure request or, in cases where there is a reason why we cannot proceed with a request, providing feedback relating to this and offering the opportunity to resolve the reasoning behind our rejection (E.g., identification is not sufficient).",
        "If an erasure request is lost at any point, OozeCloud cannot be held responsible for damages, and this is an express waiver of responsibility concerning any erasure requests either being filed incorrectly or lost in transmission.",
        "The parent can request the erasure of data attained by someone under 13 or the child's legal guardian. The guardian may be required to provide transaction-based identification before we can process an erasure request."
      ]
    },
    {
      title: "Right of Appeal",
      content: "If you believe we erred in our judgment of your erasure request, you can follow the appeal steps in the final written response from OozeCloud. To be able to appeal, you accept that you must appeal within 28 days of receiving this response confirming the steps to appeal. If you do not appeal the decision within 28 days, you waive your right to appeal."
    },
    {
      title: "Data we Collect",
      content: "We collect and store a series of data, such as (but not exhaustive): Personally-identifiable information ('PII') For example, your name, email, phone number, postal address, IP address, geolocation. Cookies Log-based data Technical Data Internet Protocol ('IP') address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. Third-party services may additionally collect data. These respective services have their own data protection and privacy policies, which the end user is expected to review. Some, not all, of the third-party services we use include:",
      bulletPoints: [
        "Google Advertising",
        "FontAwesome",
        "DEZERX",
        "Cloudflare",
        "CosmicGuard",
        "Discord",
        "Amazon",
        "Arb Hosting",
        "Because of any data shared with third-party services – we may be unable to regulate erasure requests with the listed companies/services above, and you may be required to submit erasure requests to the specific company as listed above."
      ]
    },
    {
      title: "Access Arrangements",
      content: "A valid court order, subpoena, or equivalent legal document must support requests for access to customer data by law enforcement agencies. Such requests and all relevant documentation should be directed to our Discord server for a 24-hour response. Access to specific recorded customer data is granted to authorized employees strictly for operational purposes. This access is governed by confidentiality and nondisclosure agreements, ensuring the protection and proper handling of all data in compliance with applicable privacy laws and company policies."
    },
    {
      title: "Right to Review Data we Hold",
      content: "You retain the right to access the data we hold concerning you. You can request one (1) data record export within 30 days. A maximum of six (6) data record exports may be requested within a calendar year. Additional requests may be processed subject to an administrative fee of $80. All requests must be submitted via our Discord server. We reserve up to one (1) month to respond to any Subject Access Request ('SAR'). If the processing of a SAR requires significant production efforts, an administrative fee may be assessed. Customers will be notified of any such fee before we process it. Upon submitting a Subject Access Request, you must provide proof of identification to ensure security and compliance. The identification process will adhere to strict verification standards, after which a comprehensive record of all data held about you will be provided."
    },
    {
      title: "Data Breaches",
      content: "In the unlikely event of a data breach, We will take the following actions in compliance with applicable data protection regulations:",
      bulletPoints: [
        "Affected parties will be notified within forty-eight (48) hours of us becoming aware of the breach.",
        "We will disclose, to the extent known at the time, the nature of the breach, the categories of information believed to have been compromised, and the discovery timeline.",
        "Where applicable, we will notify relevant data controllers to facilitate a thorough investigation and ensure appropriate measures are taken in response to the breach.",
        "Any services identified as compromised will be subject to immediate suspension to prevent further unauthorized access. Such services will remain suspended until the source of the breach has been thoroughly investigated and mitigated.",
        "Our data protection officer will inform you and provide the next steps per the above protocol."
      ]
    },
    {
      title: "Data Collection Consent",
      content: "By using any of our services, including but not limited to our website, game servers, virtual private server services, dedicated server services, and domain registration services, you acknowledge and consent to collecting, processing, and recording your data per this policy. Your use of these services constitutes a formal agreement to such data collection practices."
    },
    {
      title: "Links to Third-Party Services",
      content: "Our services may contain links to third-party websites or services. We disclaim any responsibility or liability for such third parties' content, privacy practices, or data handling procedures. Customers are advised to review the privacy policies of any third-party websites or services before engaging with them."
    },
    {
      title: "Changes to This Policy",
      content: "We reserve the right to update or modify this Privacy Policy anytime. Any changes will be communicated by posting the revised Privacy Policy on this page. You must review this Privacy Policy periodically to stay informed of any updates. All modifications to this Privacy Policy shall take effect immediately upon posting unless otherwise specified. Your continued use of our services constitutes acceptance of the revised Privacy Policy."
    },
    {
      title: "Contacting the Data Protection Officer",
      content: "We welcome any questions, comments, or concerns regarding this Privacy Policy. If you believe that we have failed to adhere to the provisions outlined in this policy, please contact our Data Protection Officer (DPO) using the following contact information: Contact Information: Discord Server: https://discord.gg/6Gj6rnhpFa All data protection inquiries, erasure requests, and general privacy concerns should be submitted through our official Discord server."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#28a745]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#28a745]/50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#28a745] via-orange-500 to-[#28a745] mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative px-2 sm:px-4"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#28a745]/30 to-transparent hidden sm:block"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center">
                <span className="text-[#28a745] mb-2 sm:mb-0 sm:mr-4">{index + 1}.</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {section.title}
                </span>
              </h2>

              <div className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8 sm:pl-8">
                {section.content}
              </div>

              {section.subsections && (
                <div className="space-y-6 sm:space-y-8 sm:pl-8">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.title} className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#28a745]/20 to-transparent hidden sm:block"></div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#28a745]/90 mb-2 sm:mb-3">
                        {subsection.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-400 leading-relaxed pl-0 sm:pl-4">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.bulletPoints && (
                <div className="pl-4 sm:pl-12 space-y-2 sm:space-y-3">
                  {section.bulletPoints.map((point) => (
                    <div key={point} className="flex items-center group">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#28a745]/50 group-hover:bg-[#28a745] transition-colors mr-3 sm:mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {index !== sections.length - 1 && (
                <div className="mt-8 sm:mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800"
        >
          <p className="text-sm sm:text-base text-gray-400">
            Last updated: September 28, 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
}
