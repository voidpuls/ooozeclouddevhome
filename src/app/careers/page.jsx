import { Box, Button, Container, Grid, GridCol, Group, List, ListItem, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core"
import { careersConfig } from "../../../config/careers"
import { settings } from "../../../config/settings"
import Hero from "../../components/Hero"
import Link from "../../components/Utils/Link"

export const metadata = {
    title: "Careers | " + settings.company_name,
    description: careersConfig.page_description,
    openGraph: {
        title: "Careers | " + settings.company_name,
        description: careersConfig.page_description,
    }
}

export default function CareersPage() {
    return (
        <Container size={1000} my="6rem">
            <Hero
                title={<Title lh={1.2} fz={{ base: "2.4rem", md: "3.4rem" }} ta="center" c="bright">
                    {careersConfig.page_title}
                </Title>}
                description={careersConfig.page_description}
            />

            <Grid mt="6rem">
                <GridCol span={{ base: 12, md: 8 }}>
                    <Box>
                        <SimpleGrid cols={1} spacing="xl">
                            {careersConfig.positions.map((position) => (
                                <Paper key={position.id} p="xl">
                                    <Stack>
                                        <Group mb="xs">
                                            {position.icon}
                                            <Title order={3} size="h4">{position.title}</Title>
                                        </Group>

                                        <Text size="sm" c="dimmed" mb="md">
                                            {position.description}
                                        </Text>

                                        <Title order={4}>Responsibilities</Title>
                                        <List ml="1rem" mb="md">
                                            {position.duties.map((duty, index) => (
                                                <ListItem key={index} size="sm" c="dimmed">
                                                    {duty}
                                                </ListItem>
                                            ))}
                                        </List>

                                        <Title order={4}>Requirements</Title>
                                        <List ml="1rem" mb="md">
                                            {position.requirements.map((requirement, index) => (
                                                <ListItem key={index} size="sm" c="dimmed">
                                                    {requirement}
                                                </ListItem>
                                            ))}
                                        </List>

                                        <Title order={4}>Salary Range</Title>
                                        <Text size="sm" c="dimmed" mb="xl">
                                            {position.salary}
                                        </Text>

                                        <Button
                                            w="fit-content"
                                            component={Link}
                                            href={position.apply_link}
                                            target="_blank"
                                        >
                                            {position.apply_button_text}
                                        </Button>
                                    </Stack>
                                </Paper>
                            ))}
                        </SimpleGrid>
                    </Box>
                </GridCol>
                <GridCol span={{ base: 12, md: 4 }}>
                    <Paper className="globe_paper_large" p={{ base: "2rem 1rem", sm: "2rem" }}>
                        <Title mb="1rem" order={2}>Don't see the right role?</Title>
                        <Text c="dimmed" maw="40rem" mb="1rem" size="lg">
                            We're always looking for talented individuals to join our team. Feel free to reach out and introduce yourself!
                        </Text>

                        <Text c="dimmed" maw="40rem" mb="1rem" size="lg">
                            If you are passionate about technology and innovation, we would love to hear from you. Our team is dedicated to creating a supportive and inclusive environment where everyone can thrive.
                        </Text>

                        <Text>
                            <Button
                                component={Link}
                                href={settings.socials.other.discord.link}
                                target="_blank"
                            >
                                Join Our Discord
                            </Button>
                        </Text>
                    </Paper>
                </GridCol>
            </Grid>

            <Paper className="globe_paper_large" p={{ base: "2rem 1rem", sm: "4rem 2rem" }} mt="4rem">
                <Title mb="1rem" order={2} fz={{ base: "2rem", md: "2.4rem" }}>Don't see the right role?</Title>
                <Text c="dimmed" maw="40rem" mb="1rem" size="lg">
                    We're always looking for talented individuals to join our team. Feel free to reach out and introduce yourself!
                </Text>
                <Button
                    variant="magic"
                    component={Link}
                    href={settings.socials.other.discord.link}
                    target="_blank"
                >
                    Join Our Discord
                </Button>
            </Paper>
        </Container>
    )
} 