'use client';

import { motion } from "framer-motion";

export default function Terms() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const sections = [
    {
      title: "1. Introduction",
      content: `These terms govern and control the relationship between the parties named herein. Revisions may be implemented to improve clarity and readability. However, you are strongly advised to review and fully understand the agreement before using or conducting business with OozeCloud.

This policy was last reviewed and approved for publication on September 28, 2025, and is scheduled for re-review on March 28, 2026.`
    },
    {
      title: "2. Definitions",
      content: `The terms "you," "I," "the client," or any similar designation shall reasonably refer to the individual or entity agreeing to, utilizing, or purchasing goods or services provided by OozeCloud.

The terms "us," "we," "our," "OozeCloud," or "the company" refer to OozeCloud, a registered entity in the Ohio, with Business Identification Number [Insert Number].

The term "services" refers to the products and assets the company provides for the client's use, including but not limited to all website functionalities and features made available to the client.`
    },
    {
      title: "3. Binding Terms",
      content: `By using or purchasing any goods or services from OozeCloud or continuing to conduct business with the company, you agree to all terms outlined in this agreement. These terms are subject to periodic review and modification without your prior notice. You agree to be bound by all future revisions and are responsible for reviewing this document regularly to stay informed of updates.

You agree to be bound by these terms until all business between you and OozeCloud has concluded and the company has confirmed the closure of your client account.

Given the nature of international transactions, OozeCloud cannot guarantee that your consumer protection and privacy rights will not be waived. However, the company will reasonably comply with applicable regional regulations regarding such rights. By continuing to use or purchase goods or services from the company, you acknowledge and agree that you may waive specific regional consumer protection and privacy rights.

You agree to be bound by all terms outlined in this document and acknowledge that any breach may result in the termination or suspension of your services and render any business with the company void.

For this agreement, the symbol '†' may denote additional information or definitions for a subsection/clause that can be found at the end of the agreement. From this point on, it shall be taken that the client is aware of additional 'dagger clauses' included at the end of this agreement.`
    },
    {
      title: "4. Revisions to this Agreement",
      content: `We reserve the exclusive right to modify, revise, or amend this agreement. Continued business or use of any goods or services provided by the company constitutes your agreement to and acceptance of any such modifications.

This agreement was last updated on September 28, 2025, and is subject to periodic revisions every three months.

This agreement is subject to revision at any time. The client's sole responsibility is to remain informed of any modifications made to this Agreement throughout their business relationship with the company.`
    },
    {
      title: "5. Warranties",
      content: `No representations or warranties, whether express or implied, are made regarding the suitability or accuracy of any information contained in this agreement.`
    },
    {
      title: "6. General Governance and Arbitration",
      content: `No waiver or amendment of any terms within this agreement shall be valid or enforceable unless provided in writing, delivered via postal service, and signed, with a witness, by an authorized OozeCloud leadership team member. The company's failure to enforce strict compliance with any term or delay in exercising any right or power granted under this agreement shall not constitute a waiver of such rights or powers. All rights and powers conferred herein remain fully enforceable.

This agreement shall be governed by the laws of the [Insert State/Country]. Notwithstanding this jurisdiction, OozeCloud prioritizes the security of client data and endeavors, where feasible, to comply with the General Data Protection Regulation (GDPR) established by the European Union and applicable data protection regulations in the United States.

The data security and protection policy for this agreement can be viewed online at: https://www.oozecloud.com/privacy-policy

All disputes arising from or in connection with OozeCloud shall be resolved per the Rules of Arbitration of the International Chamber of Commerce (ICC). The arbitration shall occur at a location determined by OozeCloud, and the company may appoint one or more arbitrators to ensure an impartial resolution. The emergency arbitrator provisions of the ICC Rules shall not apply. This agreement is governed by the laws of the United States of America, and arbitration is a mandatory prerequisite to litigation. Clients must make reasonable efforts to resolve disputes amicably, including attempting out-of-court settlements, before initiating arbitration or litigation.`
    },
    {
      title: "7. Fair Use",
      content: `For services described as "unlimited" or "unmetered," including but not limited to storage, bandwidth, or other resources, clients are expected to adhere to a fair use standard to maintain service quality for all users. We reserve the right to enforce reasonable usage limits where necessary.

We reserve the right, at our sole discretion, to determine whether a client has violated the fair use policy. If so, the company may terminate the client's services immediately and without prior notice.

A fair use threshold is set at no more than 10% of overall system resources or network bandwidth. If usage exceeds 5% but remains below 10%, the client will receive a written notice requesting immediate resolution. Failure to comply may result in further action.

Clients should exercise reasonable judgment to ensure compliance with fair use policies.`
    },
    {
      title: "8. Abuse",
      content: `Restrictions for specific services will be specified at checkout. By proceeding, clients must acknowledge and agree to these restrictions.

Prohibited activities include, but are not limited to:`,
      bulletPoints: [
        "Hacking, unauthorized access, port scanning, phishing",
        "Hosting infringing or unauthorized content",
        "Spamming or bulk unsolicited messaging",
        "Distributing illegal or obscene content, including child pornography",
        "Threatening DDoS or doxing activities",
        "Hosting illegal software or codes",
        "Using services for illegal activities under applicable laws"
      ],
      additionalContent: "Any violation will result in immediate termination of services without a refund."
    },
    {
      title: "9. Termination of Service",
      content: `Upon suspension or termination, associated files or add-ons may be permanently lost, even if reminders are sent. Clients are responsible for backing up their data.

Important:

OozeCloud is not responsible for data loss. Users are strongly recommended to create their own backups. We do our best to backup servers before scheduled maintenance at the user's request, but no guarantees are made regarding data recovery. It is solely the client's responsibility to maintain copies of their data.

After 2 days, all data will be irretrievably deleted and cannot be recovered.

We reserve the right to terminate services at our discretion for violations of policies, including abuse or acceptable use violations.

In cases of abuse-related termination, data may be retained up to 365 days, subject to circumstances, and may be shared with authorities as required.

Contesting termination involves review by our Compliance Department, but no guarantees are made regarding data accessibility or recovery.`
    },
    {
      title: "10. Payments, Cancellations, and Chargebacks",
      content: "Payments:",
      subsections: [
        {
          title: "Payments",
          content: "Clients agree to pay all required charges before service periods. Payment information must be kept accurate. Invoices are generated 15 days prior to due date; automatic payments may be processed if a payment method is on file. Payments via credit/debit cards are processed by third-party payment processors; additional fees may apply."
        },
        {
          title: "Cancellations",
          content: "Services continue until explicitly canceled. Clients must manage automatic payments; refunds are limited to payments within the last 180 days."
        },
        {
          title: "Chargebacks",
          content: "Chargebacks are strictly prohibited. Initiating a chargeback results in immediate service suspension. Full repayment plus fees are required for reinstatement. Fraudulent activity may be reported to credit bureaus and fraud prevention partners."
        }
      ]
    },
    {
      title: "11. Severability",
      content: `If any provision is deemed invalid or unenforceable, the remaining provisions shall remain in full force. The invalid provision shall be replaced with a valid one that closely reflects the original intent.`
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
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Please read these terms carefully before using our services.
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
                <span className="text-[#28a745] mb-2 sm:mb-0 sm:mr-4">{section.title.split('.')[0]}.</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {section.title.split('.')[1]}
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

              {section.additionalContent && (
                <div className="text-base sm:text-lg text-gray-400 leading-relaxed mt-4 sm:mt-6 sm:pl-8">
                  {section.additionalContent}
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
