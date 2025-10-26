import { ActionIcon, Accordion, Box, Button, Container, Group, Paper, SimpleGrid, Text, Title, AccordionControl, AccordionPanel, AccordionItem } from "@mantine/core";
import { IconServer, IconHeadset, IconShieldCheck, IconNetwork, IconCloudComputing, IconRocket } from "@tabler/icons-react";
import { FaDiscord } from "react-icons/fa6";
import Hero from "../../components/Hero";
import PricingTable from "../../components/PricingTable";
import Link from "../../components/Utils/Link";
import { dedicatedPlans } from "../../../data/plans/dedicated";
import { dedicatedFaqs } from "../../../config/faqs";
import { settings } from "../../../config/settings";
import { useTranslations } from 'next-intl';

export const metadata = {
    title: "Dedicated | " + settings.company_name,
    description: 'Dedicated hosting offers a dedicated server environment for your website or application, ensuring optimal performance and security.',
    openGraph: {
        title: "Dedicated | " + settings.company_name,
        description: 'Dedicated hosting offers a dedicated server environment for your website or application, ensuring optimal performance and security.',
    }
}


const features = [
    {
        icon: <IconServer size={24} />,
        key: 'feature1'
    },
    {
        icon: <IconShieldCheck size={24} />,
        key: 'feature2'
    },
    {
        icon: <IconNetwork size={24} />,
        key: 'feature3'
    },
    {
        icon: <IconCloudComputing size={24} />,
        key: 'feature4'
    },
    {
        icon: <IconRocket size={24} />,
        key: 'feature5'
    },
    {
        icon: <IconHeadset size={24} />,
        key: 'feature6'
    },
];

export default function DedicatedPage() {
    const t = useTranslations('Dedicated');

    return (
        <Container my="6rem">
            <Hero
                title={<Title lh={1.2} fz={{ base: "2.4rem", md: "3.4rem" }} ta="center" c="bright">
                    {t('hero.title.1')} <Text inherit c="primary">{t('hero.title.2')}</Text>
                </Title>}
                description={t('hero.description')}
            >
                <Button size="lg" variant="magic" component={Link} href="#pricing">{t('hero.viewPricing')}</Button>
            </Hero>

            <Box className="service__features" mt="10rem">
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
                    {features.map((feature, index) => (
                        <Paper className="hover" key={index} p="xl" withBorder>
                            <Group mb="md">
                                {feature.icon}
                                <Text fw={500} fz="lg">{t(`features.feature${index + 1}.title`)}</Text>
                            </Group>
                            <Text c="dimmed">{t(`features.feature${index + 1}.description`)}</Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Box>

            <Box className="service__pricing" mt="6rem" id="pricing">
                <Title order={2} ta="center" mb="3rem" fz={{ base: "2rem", md: "2.4rem" }}>{t('selectPlan.title')}</Title>
                <PricingTable forceService="Dedicated" withLocationSwitcher withBudgetSwitcher data={dedicatedPlans} />
            </Box>

            <Container mt="6rem" className="service__faq">
                <Title order={2} ta="center" mb="3rem" fz={{ base: "2rem", md: "2.4rem" }}>{t('faq.title')}</Title>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                    <Accordion variant="separated" chevronPosition="right" multiple>
                        {dedicatedFaqs.slice(0, Math.ceil(dedicatedFaqs.length / 2)).map((item) => (
                            <AccordionItem key={item.value} value={item.value}>
                                <AccordionControl c="bright">{item.question}</AccordionControl>
                                <AccordionPanel>
                                    <Text c="dimmed" mt="sm">{item.answer}</Text>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Accordion variant="separated" chevronPosition="right" multiple>
                        {dedicatedFaqs.slice(Math.ceil(dedicatedFaqs.length / 2)).map((item) => (
                            <AccordionItem key={item.value} value={item.value}>
                                <AccordionControl c="bright">{item.question}</AccordionControl>
                                <AccordionPanel>
                                    <Text c="dimmed" mt="sm">{item.answer}</Text>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </SimpleGrid>

                <Title order={2} mt="8rem" mb="1rem" fz={{ base: "2rem", md: "2.4rem" }}>{t('about.title')}</Title>
                <Text c="dimmed" maw="46rem" mb="6rem" size="lg">
                    {t('about.description')}
                </Text>
            </Container>

            <Paper className="globe_paper_large" p={{ base: "2rem 1rem", sm: "4rem 2rem" }} mt="8rem">
                <Title mb="1rem" order={2} fz={{ base: "2rem", md: "2.4rem" }}>{t('tailoredSolution.title')}</Title>
                <Text c="dimmed" maw="40rem" mb="1rem" size="lg">{t('tailoredSolution.description')}</Text>
                <Group maw="20rem" gap="0.4rem" wrap="nowrap">
                    <Button style={{ borderRadius: "15px 6px 6px 15px" }} leftSection={<FaDiscord />} size="xl" my="1rem" fullWidth component={Link} href={settings.socials.other.discord.link} target="_blank" variant="plain">{t('tailoredSolution.discord')}</Button>
                    <ActionIcon c="bright" component={Link} href={settings.create_ticket_url} target="_blank" style={{ borderRadius: "6px 15px 15px 6px" }} size="3.7rem" variant="plain">
                        <IconHeadset size="1.4rem" />
                    </ActionIcon>
                </Group>
            </Paper>
        </Container>
    );
}