import { ActionIcon, Anchor, Button, Container, Grid, GridCol, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconHeadset, IconMail, IconPhone, IconTicket } from "@tabler/icons-react";
import { useTranslations } from 'next-intl';
import { FaDiscord } from "react-icons/fa6";
import { settings } from "../../../config/settings";
import FadeIn from "../../components/Framer/FadeIn";
import Link from "../../components/Utils/Link";

export const metadata = {
    title: "Contact Us | " + settings.company_name,
    description: 'Get in touch with us for any inquiries or support.',
    openGraph: {
        title: "Contact Us | " + settings.company_name,
        description: 'Get in touch with us for any inquiries or support.',
    }
}


export default function ContactUsPage() {
    const t = useTranslations('ContactUs');

    return (
        <FadeIn>
            <Container mb="6rem" mt="12rem">
                <Title fz="2.6rem" order={2} mb="md" ta="center">{t('title')}</Title>

                <Grid mb="1rem">
                    <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                        <Anchor c="bright" href={`mailto:${settings.socials.email}`} className="hover">
                            <Paper p="1rem" className="hover">
                                <Group>
                                    <IconMail size="3rem" />
                                    <div>
                                        <Text c="bright" fz="1.2rem">Email us</Text>
                                        <Text c="dimmed" fz="1rem">{settings.socials?.email}</Text>
                                    </div>
                                </Group>
                            </Paper>
                        </Anchor>
                    </GridCol>
                    <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                        <Paper p="1rem" className="hover">
                            <Group>
                                <IconTicket size="3rem" />
                                <div>
                                    <Text c="bright" fz="1.2rem">Open a ticket</Text>
                                    <Anchor target="_blank" href={settings.create_ticket_url} c="dimmed" fz="1rem">Create a new ticket</Anchor>
                                </div>
                            </Group>
                        </Paper>
                    </GridCol>
                    <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                        <Paper p="1rem" className="hover">
                            <Group>
                                <FaDiscord size="3rem" />
                                <div>
                                    <Text c="bright" fz="1.2rem">Discord</Text>
                                    <Anchor target="_blank" href={settings.socials.other.discord.link} c="dimmed" fz="1rem">Join our Discord</Anchor>
                                </div>
                            </Group>
                        </Paper>
                    </GridCol>
                </Grid>
                <Paper mb="2rem" p="xl" pb="4.9rem">
                    <Stack>
                        <Title order={2} mb="md">{t('getInTouch.title')}</Title>
                        <Text>{t('getInTouch.description')}</Text>

                        {settings.socials.email && (
                            <Group>
                                <IconMail size={24} />
                                <Text>{t('contact.email.label')}: <Anchor href={`mailto:${settings.socials.email}`}>{settings.socials.email}</Anchor></Text>
                            </Group>
                        )}

                        {settings.socials.phone && (
                            <Group>
                                <IconPhone size={24} />
                                <Text>{t('contact.phone.label')}: {settings.socials.phone}</Text>
                            </Group>
                        )}

                        <Title order={3} mt="xl">{t('followUs.title')}</Title>
                        <Group>
                            {Object.values(settings.socials?.other).map((social, index) => (
                                <ActionIcon key={index} variant="transparent" size="xl" color="white" component={Link} href={social.link} target="_blank">
                                    {social.icon}
                                </ActionIcon>
                            ))}
                        </Group>
                    </Stack>
                </Paper>

                <Paper className="globe_paper_large" p={{ base: "2rem 1rem", sm: "4rem 2rem" }}>
                    <Title mb="1rem" order={2} fz={{ base: "2rem", md: "2.4rem" }}>{t('needSomethingElse.title')}</Title>
                    <Text c="dimmed" maw="40rem" mb="1rem" size="lg">{t('needSomethingElse.description')}</Text>
                    <Group maw="20rem" gap="0.4rem" wrap="nowrap">
                        <Button style={{ borderRadius: "15px 6px 6px 15px" }} leftSection={<FaDiscord />} size="xl" my="1rem" fullWidth component={Link} href={settings.socials.other.discord.link} target="_blank" variant="plain">{t('needSomethingElse.discordButton')}</Button>
                        <ActionIcon c="bright" component={Link} href={settings.create_ticket_url} target="_blank" style={{ borderRadius: "6px 15px 15px 6px" }} size="3.7rem" variant="plain">
                            <IconHeadset size="1.4rem" />
                        </ActionIcon>
                    </Group>
                </Paper>
            </Container>
        </FadeIn>
    );
}