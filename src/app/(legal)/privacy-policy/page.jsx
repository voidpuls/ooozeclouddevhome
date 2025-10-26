import { Container, Text, Title } from '@mantine/core';
import { settings } from '../../../../config/settings';
import { useTranslations } from 'next-intl';

const company_name = settings.company_name;

export const metadata = {
    title: "Privacy Policy | " + company_name,
    description: "Our privacy policy for " + company_name,
    openGraph: {
        title: "Privacy Policy | " + company_name,
        description: "Our privacy policy for " + company_name,
    }
}


export default function Page() {
    const t = useTranslations('PrivacyPolicy');
    return (
        <Container size={850} my="calc(3% + 8rem)">
            <Title mt="3rem" mb="1rem">{t('title')}</Title>
            <Text mb="1rem">This privacy notice for {company_name} ('Company', 'we', 'us', or 'our'), describes how and why we might
                collect, store, use, and/or share ('process') your information when you use our services
                ('Services'), such as when you:</Text>
            <ul>
                <li>Visit our website at {settings.website_domain}, or any website of ours that links to this privacy notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                <li>Purchase a product or service from us either privately or via the shop</li>
            </ul>

            <Text mb="1rem">Questions or concerns? Reading this privacy notice will help you understand your privacy rights
                and choices. If you do not agree with our policies and practices, please do not use our Services. If
                you still have any questions or concerns, please contact us at {settings.socials.email}.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem">
                SUMMARY OF KEY POINTS
            </Title>

            <Text mb="1rem">
                This summary provides key points from our privacy notice, but you can find out more details about
                any of these topics by using our table of contents
                below to find the section you are looking for.
            </Text>

            <Text mb="1rem">What personal information do we process? When you visit, use, or navigate our Services, we may
                process personal information depending on how you interact with {company_name} and the Services, the
                choices you make, and the products and features you use. Learn more about personal information you
                disclose to us.</Text>

            <Text mb="1rem">Do we process any sensitive personal information? We do not process sensitive personal
                information.</Text>

            <Text mb="1rem">Do we receive any information from third parties? Yes. We may receive info from third parties to
                ensure the functionality of the site such as for the review or report system.
            </Text>

            <Text mb="1rem">How do we process your information? We process your information to provide, improve, and
                administer our Services, communicate with you, for security and fraud prevention, and to comply with
                law. We may also process your information for other purposes with your consent. We process your
                information only when we have a valid legal reason to do so.</Text>

            <Text mb="1rem">In what situations and with which types of parties do we share personal information? We may share
                information in specific situations and with specific categories of third parties.</Text>

            <Text mb="1rem">How do we keep your information safe? We have organisational and technical processes and
                procedures in place to protect your personal information. However, no electronic transmission over
                the internet or information storage technology can be guaranteed to be 100% secure, so we cannot
                promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be
                able to defeat our security and improperly collect, access, steal, or modify your
                information.</Text>

            <Text mb="1rem">What are your rights? Depending on where you are located geographically, the applicable privacy
                law may mean you have certain rights regarding your personal information.</Text>

            <Text mb="1rem">How do you exercise your rights? The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in
                accordance with applicable data protection laws.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem">
                TABLE OF CONTENTS
            </Title>

            <ol>
                <li>WHAT INFORMATION DO WE COLLECT?</li>
                <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
                <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
                <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
                <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                <li>DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ol>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                1. WHAT INFORMATION DO WE COLLECT?
            </Title>

            <Text mb="1rem">Personal information you disclose to us. <Text component="span" fw={700}>In Short:</Text> We
                collect personal information that you
                provide to us.</Text>

            <Text mb="1rem">We collect personal information that you voluntarily provide to us when you register on the
                Services, express an interest in obtaining information about us or our products and Services, when
                you participate in activities on the Services, or otherwise when you contact us.</Text>

            <Text mb="1rem">Personal Information Provided by You. The personal information that we collect depends on the
                context of your interactions with us and the Services, the choices you make, and the products and
                features you use. The personal information we collect may include the following:</Text>
            <ul>
                <li>your geographical location</li>
                <li>your browser and device characteristics</li>
                <li>your language preferences</li>
                <li>your referring URL</li>
            </ul>

            <Text mb="1rem">Sensitive Information: We do not store any sensitive information</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                2. HOW DO WE PROCESS YOUR INFORMATION?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We process your information to provide, improve,
                and administer our Services,
                communicate with you, for security and fraud prevention, and to comply with law. We may also process
                your information for other purposes with your consent.</Text>

            <Text mb="1rem">We process your personal information for a variety of reasons, depending on how you interact with
                our Services, including:</Text>
            <ul>
                <li>To respond to user inquiries/offer support to users. We may process your information to respond
                    to your inquiries and solve any potential issues you might have with the requested service.
                </li>
                <li>To enable user-to-user communications. We may process your information if you choose to use any
                    of our offerings that allow for communication with another user.
                </li>
                <li>To request feedback. We may process your information when necessary to request feedback and to
                    contact you about your use of our Services.
                </li>
                <li>To identify usage trends. We may process information about how you use our Services to better
                    understand how they are being used so we can improve them.
                </li>
                <li>To save or protect an individual's vital interest. We may process your information when
                    necessary to save or protect an individual’s vital interest, such as to prevent harm.
                </li>
            </ul>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We only process your personal information when we
                believe it is necessary and we have a
                valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to
                comply with laws, to provide you with services to enter into or fulfil our contractual obligations,
                to protect your rights, or to fulfil our legitimate business interests.
            </Text>

            <Text underline>If you are located in the EU or UK, this section applies to you.</Text>

            <Text mb="1rem">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal
                bases we rely on in order to process your personal information. As such, we may rely on the
                following legal bases to process your personal information:</Text>
            <ul>
                <li>Consent. We may process your information if you have given us permission (i.e. consent) to use
                    your personal information for a specific purpose. You can withdraw your consent at any time.
                    Learn more about withdrawing your consent.
                </li>
                <li>Performance of a Contract. We may process your personal information when we believe it is
                    necessary to fulfil our contractual obligations to you, including providing our Services or at
                    your request prior to entering into a contract with you.
                </li>
                <li>Legitimate Interests. We may process your information when we believe it is reasonably necessary
                    to achieve our legitimate business interests and those interests do not outweigh your interests
                    and fundamental rights and freedoms. For example, we may process your personal information for
                    some of the purposes described in order to:
                    <ul>
                        <li>Analyse how our Services are used so we can improve them to engage and retain users</li>
                        <li>Understand how our users use our products and services so we can improve user
                            experience
                        </li>
                    </ul>
                </li>
                <li>Legal Obligations. We may process your information where we believe it is necessary for
                    compliance with our legal obligations, such as to cooperate with a law enforcement body or
                    regulatory agency, exercise or defend our legal rights, or disclose your information as evidence
                    in litigation in which we are involved.
                </li>
                <li>Vital Interests. We may process your information where we believe it is necessary to protect
                    your vital interests or the vital interests of a third party, such as situations involving
                    potential threats to the safety of any person.
                </li>
            </ul>

            <Text underline>
                If you are located in Canada, this section applies to you.
            </Text>

            <Text mb="1rem">We may process your information if you have given us specific permission (i.e. express consent) to
                use your personal information for a specific purpose, or in situations where your permission can be
                inferred (i.e. implied consent). You can withdraw your consent at any time.</Text>

            <Text mb="1rem">In some exceptional cases, we may be legally permitted under applicable law to process your
                information without your consent, including, for example:</Text>

            <ul>
                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a
                    timely way
                </li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or
                    settle an insurance claim
                </li>
                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of
                    financial abuse
                </li>
                <li>If it is reasonable to expect collection and use with consent would compromise the availability
                    or the accuracy of the information and the collection is reasonable for purposes related to
                    investigating a breach of an agreement or a contravention of the laws of Canada or a province
                </li>
                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court
                    relating to the production of records
                </li>
                <li>If it was produced by an individual in the course of their employment, business, or profession
                    and the collection is consistent with the purposes for which the information was produced
                </li>
                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                <li>If the information is publicly available and is specified by the regulations</li>
            </ul>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We may share information in specific situations
                described in this section and/or with
                the following categories of third parties.</Text>

            <Text mb="1rem">Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with
                third-party vendors, service providers, contractors, or agents ('third parties') who perform
                services for us or on our behalf and require access to such information to do that work. We have
                contracts in place with our third parties, which are designed to help safeguard your personal
                information. This means that they cannot do anything with your personal information unless we have
                instructed them to do it. They will also not share your personal information with any organisation
                apart from us. They also commit to protect the data they hold on our behalf and to retain it for the
                period we instruct. The categories of third parties we may share personal information with are as
                follows:</Text>

            <ul>
                <li>User Account Registration & Authentication Services</li>
                <li>Data Analytics Services</li>
            </ul>

            <Text mb="1rem">We also may need to share your personal information in the following situations:</Text>
            <ul>
                <li>Business Transfers. We may share or transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                    portion of our business to another company.
                </li>
            </ul>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We are not responsible for the safety of any
                information that you share with third
                parties that we may link to or who advertise on our Services, but are not affiliated with, our
                Services.</Text>

            <Text mb="1rem">The Services may link to third-party websites, online services, or mobile applications and/or
                contain advertisements from third parties that are not affiliated with us and which may link to
                other websites, services, or applications. Accordingly, we do not make any guarantee regarding any
                such third parties, and we will not be liable for any loss or damage caused by the use of such
                third-party websites, services, or applications. The inclusion of a link towards a third-party
                website, service, or application does not imply an endorsement by us. We cannot guarantee the safety
                and privacy of data you provide to any third parties. Any data collected by third parties is not
                covered by this privacy notice. We are not responsible for the content or privacy and security
                practices and policies of any third parties, including other websites, services, or applications
                that may be linked to or from the Services. You should review the policies of such third parties and
                contact them directly to respond to your questions.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We may use cookies and other tracking
                technologies to collect and store your
                information.</Text>

            <Text mb="1rem">We may use cookies and similar tracking technologies (like web beacons and pixels) to access or
                store information. Specific information about how we use such technologies and how you can refuse
                certain cookies is set out at the bottom of this page.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </Title>

            <Text mb="1rem">Our Services do not offer you the ability to register and log in using your third-party social media
                accounts.
            </Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We may transfer, store, and process your
                information in countries other than your
                own.</Text>

            <Text mb="1rem">Our servers are located in central Europe. If you are accessing our Services from outside, please be aware that
                your information may be transferred to, stored, and processed by us in our facilities and by those
                third parties with whom we may share your personal information (see 'WHEN AND WITH WHOM DO WE SHARE
                YOUR PERSONAL INFORMATION?' above), in and other countries.</Text>

            <Text mb="1rem">If you are a resident in the European Economic Area (EEA) or United Kingdom (UK), then these
                countries may not necessarily have data protection laws or other similar laws as comprehensive as
                those in your country. However, we will take all necessary measures to protect your personal
                information in accordance with this privacy notice and applicable law.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                9. HOW LONG DO WE KEEP YOUR INFORMATION?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We keep your information for as long as necessary
                to fulfil the purposes outlined in
                this privacy notice unless otherwise required by law.</Text>

            <Text mb="1rem">We will only keep your personal information for as long as it is necessary for the purposes set
                out in this privacy notice, unless a longer retention period is required or permitted by law (such
                as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping
                your personal information for longer than six (6) months past the termination of the user's
                account.</Text>

            <Text mb="1rem">When we have no ongoing legitimate business need to process your personal information, we will
                either delete or anonymise such information, or, if this is not possible (for example, because your
                personal information has been stored in backup archives), then we will securely store your personal
                information and isolate it from any further processing until deletion is possible.
            </Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                10. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </Title>

            <Text mb="1rem">
                <Text component="span" fw={700}>In Short:</Text> We aim to protect your personal information through
                a system of organisational and
                technical security measures.
            </Text>

            <Text mb="1rem">We have implemented appropriate and reasonable technical and organisational security measures
                designed to protect the security of any personal information we process. However, despite our
                safeguards and efforts to secure your information, no electronic transmission over the Internet or
                information storage technology can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to
                defeat our security and improperly collect, access, steal, or modify your information. Although we
                will do our best to protect your personal information, transmission of personal information to and
                from our Services is at your own risk. You should only access the Services within a secure
                environment.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                11. DO WE COLLECT INFORMATION FROM MINORS?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> We do not knowingly collect data from or market
                to children under 18 years of age. You
                must be over the age of eighteen (18) to use this platform and it's Services.</Text>

            <Text mb="1rem">We do not knowingly solicit data from or market to children under 18 years of age. By using the
                Services, you represent that you are at least 18 or that you are the parent or guardian of such a
                minor and consent to such minor dependent’s use of the Services. If we learn that personal
                information from users less than 18 years of age has been collected, we will deactivate the account
                and take reasonable measures to promptly delete such data from our records. If you become aware of
                any data we may have collected from children under age 18, please contact us at
                {settings.socials.email}.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                12. WHAT ARE YOUR PRIVACY RIGHTS?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> In some regions, such as the European Economic
                Area (EEA), United Kingdom (UK), and
                Canada, you have rights that allow you greater access to and control over your personal information.
                You may review, change, or terminate your account at any time.
            </Text>

            <Text mb="1rem">In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data
                protection laws. These may include the right (i) to request access and obtain a copy of your
                personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of
                your personal information; and (iv) if applicable, to data portability. In certain circumstances,
                you may also have the right to object to the processing of your personal information. You can make
                such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU
                CONTACT US ABOUT THIS NOTICE?' below.</Text>

            <Text mb="1rem">We will consider and act upon any request in accordance with applicable data protection
                laws.</Text>

            <Text mb="1rem">If you are located in the EEA or UK and you believe we are unlawfully processing your personal
                information, you also have the right to complain to your Member State data protection authority or
                UK data protection authority.</Text>

            <Text mb="1rem">If you are located in Switzerland, you may contact the Federal Data Protection and Information
                Commissioner.</Text>

            <Text mb="1rem">Withdrawing your consent: If we are relying on your consent to process your personal information,
                which may be express and/or implied consent depending on the applicable law, you have the right to
                withdraw your consent at any time. You can withdraw your consent at any time by contacting us by
                using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'
                below.</Text>

            <Text mb="1rem">However, please note that this will not affect the lawfulness of the processing before its
                withdrawal nor, when applicable law allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds other than consent.</Text>

            <Text mb="1rem">Opting out of marketing and promotional communications: You can unsubscribe from our marketing and
                promotional communications at any time by clicking on the unsubscribe link in the emails that we
                send, or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT
                THIS NOTICE?' below. You will then be removed from the marketing lists. However, we may still
                communicate with you — for example, to send you service-related messages that are necessary for the
                administration and use of your account, to respond to service requests, or for other non-marketing
                purposes.</Text>

            <Title mt="3rem" mb="1rem" order={3}>
                Account Information
            </Title>

            <Text mb="1rem">If you would at any time like to review or change the information in your account or terminate
                your account, you can:</Text>
            <ul>
                <li>Log in to your account settings and update your user account.</li>
            </ul>

            <Text mb="1rem">Upon your request to terminate your account, we will deactivate or delete your account and
                information from our active databases. However, we may retain some information in our files to
                prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or
                comply with applicable legal requirements.</Text>

            <Text mb="1rem">Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you
                choose to remove cookies or reject cookies, this could affect certain features or services of our
                Services. You may also opt out of interest-based advertising by advertisers on our Services. For
                further information, please see the Cookie Notice at the bottom of this page.
            </Text>

            <Text mb="1rem">If you have questions or comments about your privacy rights, you may email us at
                {settings.socials.email}.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                13. CONTROLS FOR DO-NOT-TRACK FEATURES
            </Title>

            <Text mb="1rem">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
                ('DNT') feature or setting you can activate to signal your privacy preference not to have data about
                your online browsing activities monitored and collected. At this stage no uniform technology
                standard for recognising and implementing DNT signals has been finalised. As such, we do not
                currently respond to DNT browser signals or any other mechanism that automatically communicates your
                choice not to be tracked online. If a standard for online tracking is adopted that we must follow in
                the future, we will inform you about that practice in a revised version of this privacy
                notice.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                14. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> Yes, if you are a resident of California, you are
                granted specific rights regarding
                access to your personal information.</Text>

            <Text mb="1rem">California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users
                who are California residents to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we disclosed to third parties for
                direct marketing purposes and the names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year. If you are a California resident
                and would like to make such a request, please submit your request in writing to us using the contact
                information provided below.</Text>

            <Text mb="1rem">If you are under 18 years of age, reside in California, and have a registered account with
                Services, you have the right to request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us using the contact information provided
                below and include the email address associated with your account and a statement that you reside in
                California. We will make sure the data is not publicly displayed on the Services, but please be
                aware that the data may not be completely or comprehensively removed from all our systems (e.g.
                backups, etc.).</Text>

            <Title mt="3rem" mb="1rem" order={3}>
                CCPA Privacy Notice
            </Title>

            <Text mb="1rem">The California Code of Regulations defines a 'resident' as:
            </Text>

            <Text mb="1rem">(1) every individual who is in the State of California for other than a temporary or transitory
                purpose and
                (2) every individual who is domiciled in the State of California who is outside the State of
                California for a temporary or transitory purpose</Text>

            <Text mb="1rem">All other individuals are defined as 'non-residents'.
                If this definition of 'resident' applies to you, we must adhere to certain rights and obligations
                regarding your personal information.</Text>

            <Text mb="1rem">What categories of personal information do we collect?</Text>

            <Text mb="1rem">We have collected the following categories of personal information in the past twelve (12)
                months:</Text>
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderRight: "1px solid #555",
                                borderLeft: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <span style={{ fontSize: 15 }}>
                                    <span>
                                        <strong>Category</strong>
                                    </span>
                                </span>
                            </span>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderTop: "1px solid #555",
                                borderRight: "1px solid #555"
                            }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <span style={{ fontSize: 15 }}>
                                    <span>
                                        <strong>Examples</strong>
                                    </span>
                                </span>
                            </span>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555",
                                textAlign: "center"
                            }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <span style={{ fontSize: 15 }}>
                                    <span>
                                        <strong>Collected</strong>
                                    </span>
                                </span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>A. Identifiers</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderTop: "1px solid #555",
                                borderRight: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            Contact details, such as real name, alias, postal address,
                                            telephone or mobile contact number, unique personal identifier,
                                            online identifier, Internet Protocol address, email address, and
                                            account name
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                verticalAlign: "middle",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>YES</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            B. Personal information categories listed in the California
                                            Customer Records statute
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            Name, contact information, education, employment, employment
                                            history, and financial information
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>NO</span>
                                    </span>
                                </span>
                            </div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            C. Protected classification characteristics under California or
                                            federal law
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>Gender and date of birth</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>NO</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>D. Commercial information</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            Transaction information, purchase history, financial details,
                                            and payment information
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>NO</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>E. Biometric information</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>Fingerprints and voiceprints</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>NO</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>F. Internet or other similar network activity</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            Browsing history, search history, online behaviour, interest
                                            data, and interactions with our and other websites,
                                            applications, systems, and advertisements
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>NO</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>G. Geolocation data</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>Device location</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>YES</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            H. Audio, electronic, visual, thermal, olfactory, or similar
                                            information
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            Images and audio, video or call recordings created in connection
                                            with our business activities
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>NO</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "33.8274%",
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>I. Professional or employment-related information</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "51.4385%",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>
                                            Business contact details in order to provide you our Services at
                                            a business level or job title, work history, and professional
                                            qualifications if you apply for a job with us
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                width: "14.9084%",
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>NO</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555",
                                width: "33.8274%"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>J. Education Information</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555",
                                width: "51.4385%"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span style={{ fontSize: 15 }}>
                                        <span>Student records and directory information</span>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderTop: "1px solid #555",
                                width: "14.9084%"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>NO</div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                border: "1px solid #555",
                                width: "33.8274%"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    <span>K. Inferences drawn from other personal information</span>
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                borderBottom: "1px solid #555",
                                borderTop: "1px solid #555",
                                borderRight: "1px solid #555",
                                width: "51.4385%"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <span style={{ fontSize: 15 }}>
                                    Inferences drawn from any of the collected personal information
                                    listed above to create a profile or summary about, for example,
                                    an individual’s preferences and characteristics
                                </span>
                            </div>
                        </td>
                        <td
                            style={{
                                textAlign: "center",
                                borderRight: "1px solid #555",
                                borderBottom: "1px solid #555",
                                borderTop: "1px solid #555",
                                width: "14.9084%"
                            }}
                        >
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                            <div style={{ lineHeight: "1.5" }}>
                                <span>NO</span>
                            </div>
                            <div style={{ lineHeight: "1.5" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                borderLeft: "1px solid #555",
                                borderRight: "1px solid #555",
                                borderBottom: "1px solid #555"
                            }}
                        >
                            <span style={{ fontSize: 15 }}>
                                <span>L. Sensitive Personal Information</span>
                            </span>
                        </td>
                        <td
                            style={{
                                borderRight: "1px solid #555",
                                borderBottom: "1px solid #555",
                                lineHeight: "1.5"
                            }}
                        />
                        <td
                            style={{
                                borderRight: "1px solid #555",
                                borderBottom: "1px solid #555"
                            }}
                        >
                            <div data-empty="true" style={{ textAlign: "center" }}>
                                <br />
                            </div>
                            <div
                                data-empty="true"
                                style={{ textAlign: "center", lineHeight: "1.5" }}
                            >
                                NO
                            </div>
                            <div data-empty="true" style={{ textAlign: "center" }}>
                                <br />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Text my="1rem">We may also collect other personal information outside of these categories through instances where
                you interact with us in person, online, or by phone or mail in the context of:</Text>
            <ul>
                <li>We may also collect other personal information outside of these categories through instances
                    where you interact with us in person, online, or by phone or mail in the context of:
                </li>
                <li>Participation in customer surveys or contests</li>
            </ul>

            <Text mb="1rem">How do we use and share your personal information?</Text>

            <Text mb="1rem">More information about our data collection and sharing practices can be found in this privacy
                notice and our Cookie Notice at the bottom of this page.
            </Text>

            <Text mb="1rem">You may contact us by email at {settings.socials.email}, or by referring to the contact details at the
                bottom of this document.</Text>

            <Text mb="1rem">If you are using an authorised agent to exercise your right to opt out we may deny a request if
                the authorised agent does not submit proof that they have been validly authorised to act on your
                behalf.
            </Text>

            <Title mt="3rem" mb="1rem" order={3}>
                Will your information be shared with anyone else?
            </Title>

            <Text mb="1rem">We may disclose your personal information with our service providers pursuant to a written
                contract between us and each service provider. Each service provider is a for-profit entity that
                processes the information on our behalf, following the same strict privacy protection obligations
                mandated by the CCPA.</Text>

            <Text mb="1rem">We may use your personal information for our own business purposes, such as for undertaking
                internal research for technological development and demonstration. This is not considered to be
                'selling' of your personal data.</Text>

            <Text mb="1rem">{company_name} has not sold or shared any personal information to third parties for a business or
                commercial purpose in the preceding twelve (12) months. {company_name} has disclosed the following
                categories of personal information to third parties for a business or commercial purpose in the
                preceding twelve (12) months:</Text>

            <Text mb="1rem">The categories of third parties to whom we disclosed personal information for a business or
                commercial purpose can be found under 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                INFORMATION?'.</Text>

            <Title mt="3rem" mb="1rem" order={3}>
                Your rights with respect to your personal data
            </Title>

            <Text mb="1rem">Right to request deletion of the data — Request to delete</Text>

            <Text mb="1rem">You can ask for the deletion of your personal information. If you ask us to delete your personal
                information, we will respect your request and delete your personal information, subject to certain
                exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or
                her right to free speech, our compliance requirements resulting from a legal obligation, or any
                processing that may be required to protect against illegal activities.
            </Text>

            <Text mb="1rem">Right to be informed — Request to know</Text>

            <Text mb="1rem">Depending on the circumstances, you have a right to know:</Text>

            <ul>
                <li>whether we collect and use your personal information;</li>
                <li>the categories of personal information that we collect;</li>
                <li>the purposes for which the collected personal information is used;</li>
                <li>whether we sell or share personal information to third parties;</li>
                <li>the categories of personal information that we sold, shared, or disclosed for a business
                    purpose;
                </li>
                <li>the categories of third parties to whom the personal information was sold, shared, or disclosed
                    for a business purpose;
                </li>
                <li>the business or commercial purpose for collecting, selling, or sharing personal information;
                </li>
                <li>the specific pieces of personal information we collected about you.</li>
            </ul>

            <Text mb="1rem">In accordance with applicable law, we are not obligated to provide or delete consumer information
                that is de-identified in response to a consumer request or to re-identify individual data to verify
                a consumer request.
            </Text>

            <Text mb="1rem">Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights. We will not
                discriminate against you if you exercise your privacy rights.</Text>

            <Text mb="1rem">Right to Limit Use and Disclosure of Sensitive Personal Information. Right to Limit Use and
                Disclosure of Sensitive Personal Information</Text>

            <Text mb="1rem">Verification process</Text>

            <Text mb="1rem">Upon receiving your request, we will need to verify your identity to determine you are the same
                person about whom we have the information in our system. These verification efforts require us to
                ask you to provide information so that we can match it with information you have previously provided
                us. For instance, depending on the type of request you submit, we may ask you to provide certain
                information so that we can match the information you provide with the information we already have on
                file, or we may contact you through a communication method (e.g. phone or email) that you have
                previously provided to us. We may also use other verification methods as the circumstances
                dictate.</Text>

            <Text mb="1rem">We will only use personal information provided in your request to verify your identity or
                authority to make the request. To the extent possible, we will avoid requesting additional
                information from you for the purposes of verification. However, if we cannot verify your identity
                from the information already maintained by us, we may request that you provide additional
                information for the purposes of verifying your identity and for security or fraud-prevention
                purposes. We will delete such additionally provided information as soon as we finish verifying
                you.</Text>

            <Text mb="1rem">Other privacy rights</Text>
            <ul>
                <li>You may object to the processing of your personal information.</li>
                <li>You may request correction of your personal data if it is incorrect or no longer relevant, or
                    ask to restrict the processing of the information.
                </li>
                <li>You can designate an authorised agent to make a request under the CCPA on your behalf. We may
                    deny a request from an authorised agent that does not submit proof that they have been validly
                    authorised to act on your behalf in accordance with the CCPA.
                </li>
                <li>You may request to opt out from future selling or sharing of your personal information to third
                    parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly
                    possible, but no later than fifteen (15) days from the date of the request submission.
                </li>
            </ul>

            <Text mb="1rem">To exercise these rights, you can contact us by email at {settings.socials.email}, or by referring to the
                contact details at the bottom of this document. If you have a complaint about how we handle your
                data, we would like to hear from you.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                15. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> Yes, if you are a resident of Virginia, you may
                be granted specific rights regarding
                access to and use of your personal information.</Text>

            <Text mb="1rem">Virginia CDPA Privacy Notice</Text>

            <Text mb="1rem">Under the Virginia Consumer Data Protection Act (CDPA):

                'Consumer' means a natural person who is a resident of the Commonwealth acting only in an individual
                or household context. It does not include a natural person acting in a commercial or employment
                context.

                'Personal data' means any information that is linked or reasonably linkable to an identified or
                identifiable natural person. 'Personal data' does not include de-identified data or publicly
                available information.

                'Sale of personal data' means the exchange of personal data for monetary consideration.</Text>

            <Text mb="1rem">If this definition 'consumer' applies to you, we must adhere to certain rights and obligations
                regarding your personal data.
            </Text>

            <Text mb="1rem">The information we collect, use, and disclose about you will vary depending on how you interact
                with {company_name} and our Services. To find out more, please visit the following links:</Text>

            <ul>
                <li>Personal data we collect</li>
                <li>How we use your personal data</li>
                <li>When and with whom we share your personal data</li>
                <li>Your rights with respect to your personal data</li>
                <li>Right to be informed whether or not we are processing your personal data</li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to request deletion of your personal data</li>
                <li>Right to obtain a copy of the personal data you previously shared with us</li>
                <li>Right to opt out of the processing of your personal data if it is used for targeted advertising,
                    the sale of personal data, or profiling in furtherance of decisions that produce legal or
                    similarly significant effects ('profiling')
                </li>
            </ul>

            <Text mb="1rem">{company_name} has not sold any personal data to third parties for business or commercial purposes.
                {company_name} will not sell personal data in the future belonging to website visitors, users, and other
                consumers.
            </Text>

            <Text mb="1rem">Exercise your rights provided under the Virginia CDPA</Text>

            <Text mb="1rem">More information about our data collection and sharing practices can be found in this privacy
                notice and our Cookie Notice at the bottom of this page.
            </Text>

            <Text mb="1rem">You may contact us by email at {settings.socials.email} or
                by referring to the contact details at the bottom of this document.

                If you are using an authorised agent to exercise your rights, we may deny a request if the
                authorised agent does not submit proof that they have been validly authorised to act on your
                behalf.</Text>

            <Text mb="1rem">Verification process</Text>

            <Text mb="1rem">We may request that you provide additional information reasonably necessary to verify you and your
                consumer's request. If you submit the request through an authorised agent, we may need to collect
                additional information to verify your identity before processing your request.

                Upon receiving your request, we will respond without undue delay, but in all cases, within
                forty-five (45) days of receipt. The response period may be extended once by forty-five (45)
                additional days when reasonably necessary. We will inform you of any such extension within the
                initial 45-day response period, together with the reason for the extension.
            </Text>

            <Text mb="1rem">Right to appeal</Text>

            <Text mb="1rem">If we decline to take action regarding your request, we will inform you of our decision and
                reasoning behind it. If you wish to appeal our decision, please email us at {settings.socials.email}.
                Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or
                not taken in response to the appeal, including a written explanation of the reasons for the
                decisions. If your appeal if denied, you may contact the Attorney General to submit a
                complaint.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                16. DO WE MAKE UPDATES TO THIS NOTICE?
            </Title>

            <Text mb="1rem"><Text component="span" fw={700}>In Short:</Text> Yes, we will update this notice as necessary to
                stay compliant with relevant laws.</Text>

            <Text mb="1rem">We may update this privacy notice from time to time. The updated version will be indicated by an
                updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we
                make material changes to this privacy notice, we may notify you either by prominently posting a
                notice of such changes or by directly sending you a notification. We encourage you to review this
                privacy notice frequently to be informed of how we are protecting your information.</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem" >
                17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </Title>

            <Text mb="1rem">If you have questions or comments about this notice, you may email us at {settings.socials.email}. We
                will always be happy to try our best to resolve any issue or query you have.</Text>

            <Text mb="1rem">- {company_name}</Text>

            <Title mt="3rem" mb="1rem" order={2} fz="1.6rem">
                18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </Title>

            <Text mb="1rem">
                Based on the applicable laws of your country, you may have the right to request access to the
                personal information we collect from you, change that information, or delete it. To request to
                review, update, or delete your personal information, please email {settings.socials.email}.
            </Text>
        </Container>
    )
}