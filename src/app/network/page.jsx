import { ActionIcon, Box, Button, Container, Grid, GridCol, Group, Paper, SimpleGrid, Text, Title } from "@mantine/core";
import { IconArrowRight, IconBolt, IconGlobe, IconHeadset, IconNetwork, IconRouter, IconServer, IconShieldCheck } from "@tabler/icons-react";
import { FaDiscord } from "react-icons/fa6";
import Hero from "../../components/Hero";
import Link from "../../components/Utils/Link";
import Globe from "../../components/Globe";
import Partners from "../../components/Partners";
import { settings } from "../../../config/settings";
import { useTranslations } from "next-intl";

export const metadata = {
    title: "Network | " + settings.company_name,
    description: 'Our network is designed to provide the best performance and security for your website or application.',
    openGraph: {
        title: "Network | " + settings.company_name,
        description: 'Our network is designed to provide the best performance and security for your website or application.',
    }
}


const networkStats = [
    { label: "Network Uptime", value: "99.99% SLA", icon: <IconBolt size={24} /> },
    { label: "Global PoPs", value: "25+", icon: <IconGlobe size={24} /> },
    { label: "Bandwidth Capacity", value: "100 Tbps", icon: <IconNetwork size={24} /> },
    { label: "DDoS Protection", value: "Up to 10 Tbps", icon: <IconShieldCheck size={24} /> },
];

const networkFeatures = [
    {
        icon: <IconRouter size={24} />,
        title: "Multi-Homed Network",
        description: "Our network is connected to multiple Tier 1 providers, ensuring optimal routing and redundancy."
    },
    {
        icon: <IconServer size={24} />,
        title: "Global CDN",
        description: "Leverage our worldwide Content Delivery Network for faster content delivery to your users."
    },
    {
        icon: <IconNetwork size={24} />,
        title: "Low Latency",
        description: "Benefit from our strategically placed Points of Presence (PoPs) for minimal latency worldwide."
    },
    {
        icon: <IconShieldCheck size={24} />,
        title: "Advanced DDoS Protection",
        description: "Our network is equipped with state-of-the-art DDoS mitigation to keep your services safe."
    },
];

export default function NetworkPage() {
    const t = useTranslations('Network');

    return (
        <Container my="6rem">
            <Hero
                title={<Title lh={1.2} fz={{ base: "2.4rem", md: "3.4rem" }} ta="center" c="bright">
                    <Text inherit c="primary">{t('hero.title')}</Text> {t('hero.subtitle')}
                </Title>}
                description={t('hero.description')}
            >
                <Button size="lg" variant="magic" component={Link} href="#features">{t('hero.buttonText')}</Button>
            </Hero>

            <Box pos="relative" mt="12rem">
                <Box style={{ zIndex: -1, opacity: 0.3, transform: "translateY(-25%)", left: "50%", marginLeft: "-500px" }} visibleFrom="md" pos="absolute">
                    <Globe width={1000} height={1000} />
                </Box>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
                    {networkStats.map((stat, index) => (
                        <Paper className="hover" key={index} p="xl" withBorder>
                            <Group mb="md">
                                {stat.icon}
                                <Text c="bright" fw={500} fz="lg">{t(`stats.statLabel${index + 1}`)}</Text>
                            </Group>
                            <Text fz="1.6rem" fw={700} c="primary">{t(`stats.statValue${index + 1}`)}</Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Box>

            <Box mt="1rem" id="features">
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    {networkFeatures.map((feature, index) => (
                        <Paper className="hover" key={index} p="xl" withBorder>
                            <Group mb="md">
                                {feature.icon}
                                <Text fw={500} fz="lg">{t(`features.featureTitle${index + 1}`)}</Text>
                            </Group>
                            <Text c="dimmed">{t(`features.featureDescription${index + 1}`)}</Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Box>

            <Grid gutter="1rem" align="center" my="8rem">
                <GridCol span={{ base: 12, md: 7 }}>
                    <Title mb="1.4rem" fz="1.8rem" order={2}>{t('map.title')}</Title>
                    <Text maw="36rem" mb="1.4rem" size="lg">{t('map.description')}</Text>
                </GridCol>
                <GridCol span={{ base: 12, md: 5 }}>
                    <Paper p="2rem" mah="20rem">
                        <Text mb="1rem" size="xl" fw={600} c="bright">{t('network.title')}</Text>
                        <Text c="dimmed">{t('network.description')}</Text>
                    </Paper>
                </GridCol>
            </Grid>

            <Partners />

            <Title mb="1.4rem" fz="1.8rem" order={2}>{t('about.title')}</Title>
            <Text>{t('about.description')}</Text>

            <Text mb="1rem">{t('infrastructure.description')}</Text>

            <Text mb="1rem">{t('security.description')}</Text>

            <Text mb="1rem">{t('monitoring.description')}</Text>

            <Text>{t('transparency.description')}</Text>

            <Paper className="globe_paper_large" p={{ base: "2rem 1rem", sm: "4rem 2rem" }} mt="6rem">
                <Title mb="1rem" order={2} fz={{ base: "2rem", md: "2.4rem" }}>{t('info.title')}</Title>
                <Text c="dimmed" maw="40rem" mb="1rem" size="lg">{t('info.description')}</Text>
                <Group maw="20rem" gap="0.4rem" wrap="nowrap">
                    <Button style={{ borderRadius: "15px 6px 6px 15px" }} leftSection={<FaDiscord />} size="xl" my="1rem" fullWidth component={Link} href={settings.socials.other.discord.link} target="_blank" variant="plain">{t('info.discordButton')}</Button>
                    <ActionIcon c="bright" component={Link} href={settings.create_ticket_url} target="_blank" style={{ borderRadius: "6px 15px 15px 6px" }} size="3.7rem" variant="plain">
                        <IconHeadset size="1.4rem" />
                    </ActionIcon>
                </Group>
            </Paper>
        </Container>
    );
}