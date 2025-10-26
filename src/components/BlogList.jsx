'use client'


import { Container, Title, Text, TextInput, Grid, GridCol, ActionIcon, Paper, Image, Group, Stack, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Hero from './Hero';
import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { blogPosts } from '../../config/blogs';
import Link from './Utils/Link';
import { FaDiscord } from 'react-icons/fa';
import { IconHeadset } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { settings } from '../../config/settings';

export default function BlogList() {
    const t = useTranslations('Blog');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container my="6rem">
            <Hero
                title={<Title lh={1.2} fz={{ base: '2.4rem', md: '3.4rem' }} ta="center" c="bright">
                    {t('hero.title')}
                </Title>}
                description={t('hero.description')}
            />

            <TextInput
                placeholder={t('search.placeholder')}
                leftSection={<IconSearch size="1.2rem" />}
                size="lg"
                radius="md"
                my="2rem"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.currentTarget.value)}
            />

            <Grid mb="2rem" gutter="xl">
                {filteredPosts.map((blog) => (
                    <GridCol key={blog.id} span={{ base: 12, sm: 6, md: 4 }}>
                        <Link td="none" href={blog.link}>
                            <Paper p="1rem">
                                <Stack mih="30rem" justify="space-between" h="100%">
                                    <div>
                                        <Image mb="1rem" src={blog.image} alt={blog.title} />
                                        <Text lineClamp={2} fw={500} c="bright" my="0.6rem" fz="1.4rem" order={2}>{blog.title}</Text>
                                        <Text lineClamp={3} c="dimmed">{blog.description}</Text>
                                    </div>
                                    <Group gap="0.8rem">
                                        <Text size="lg">{t('blog.readPost')}</Text>
                                        <IconArrowRight size="1.2rem" />
                                    </Group>
                                </Stack>
                            </Paper>
                        </Link>
                    </GridCol>
                ))}
            </Grid>

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
    );
}