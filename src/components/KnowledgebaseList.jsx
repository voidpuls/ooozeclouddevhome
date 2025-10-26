'use client'

import { Container, Title, Text, TextInput, Grid, GridCol, Paper, Group, Stack, Button, Pagination } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Hero from './Hero';
import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { knowledgebaseArticles } from '../../config/knowledgebaseArticles';
import Link from './Utils/Link';
import { useTranslations } from 'next-intl';
import { settings } from '../../config/settings';

export default function KnowledgebaseList() {
    const t = useTranslations('Knowledgebase');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activePage, setActivePage] = useState(1); // Add state for active page
    const articlesPerPage = 6; // Define how many articles per page

    const filteredArticles = knowledgebaseArticles.filter(article =>
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === 'All' || article.category === selectedCategory)
    );

    const paginatedArticles = filteredArticles.slice((activePage - 1) * articlesPerPage, activePage * articlesPerPage); // Slice articles for pagination

    const categories = ['All', ...new Set(knowledgebaseArticles.map(article => article.category))];

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

            <Group mb="2rem">
                {categories.map((category) => (
                    <Button
                    h="2.3rem"
                        key={category}
                        variant={selectedCategory === category ? 'filled' : 'outline'}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </Group>

            <Grid mb="2rem" gutter="xl">
                {paginatedArticles.map((article) => (
                    <GridCol key={article.id} span={{ base: 12, sm: 6 }}>
                        <Link td="none" href={article.link}>
                            <Paper p="1rem">
                                <Stack justify="space-between" h="100%">
                                    <div>
                                        <Text fw={500} c="bright" my="0.6rem" fz="1.2rem" order={2}>{article.title}</Text>
                                        <Text lineClamp={2} c="dimmed">{article.description}</Text>
                                    </div>
                                    <Group gap="0.8rem" mt="1rem">
                                        <Text size="sm">{t('article.readMore')}</Text>
                                        <IconArrowRight size="1rem" />
                                    </Group>
                                </Stack>
                            </Paper>
                        </Link>
                    </GridCol>
                ))}
            </Grid>

            <Pagination
                size="lg"
                total={Math.ceil(filteredArticles.length / articlesPerPage)} // Calculate total pages
                page={activePage} // Current active page
                onChange={setActivePage} // Update active page
                my="2rem" // Margin for pagination
            />

            <Paper className="globe_paper_large" p={{ base: "2rem 1rem", sm: "4rem 2rem" }}>
                <Title mb="1rem" order={2} fz={{ base: "2rem", md: "2.4rem" }}>{t('needMoreHelp.title')}</Title>
                <Text c="dimmed" maw="40rem" mb="1rem" size="lg">{t('needMoreHelp.description')}</Text>
                <Button component={Link} href={settings.create_ticket_url} target="_blank" size="lg" variant="filled">{t('needMoreHelp.createTicket')}</Button>
            </Paper>
        </Container>
    );
}