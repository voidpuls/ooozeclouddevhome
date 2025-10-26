import {
    Box,
    Container,
    Divider,
    Group,
    Paper,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "./Utils/Link";
import { useTranslations } from "next-intl";

export default function KnowledgebaseLayout({ children, article }) {
    const t = useTranslations('Knowledgebase');
    return (
        <Container size={850} className="knowledgebase" pb="4rem" mt="calc(3% + 8rem)">
            <Link mb="1rem" c="dimmed" href="/knowledgebase">
                <Group gap="0.4rem">
                    <IconArrowLeft strokeWidth={1.5} />
                    <Text c="inherit">{t('backToKnowledgebase')}</Text>
                </Group>
            </Link>
            <Title mb="1rem" maw="50rem" fz={{ base: "1.8rem", md: "2.4rem" }}>{article.title}</Title>
            <Text mb="1rem" c="dimmed">{article.description}</Text>
            <Group position="apart">
                <Text size="sm" c="dimmed">{t('author')}: <Text component="span" fw={700} c="bright">{article.author}</Text></Text>
                <Text size="sm" c="dimmed">{t('readTime')}: <Text component="span" fw={700} c="bright">{article.readTime}m</Text></Text>
                <Text size="sm" c="dimmed">{t('datePublished')}: <Text component="span" fw={700} c="bright">{new Date(article.date).toLocaleDateString('en-GB')}</Text></Text>
            </Group>
            <Group my="1rem" spacing="xs">
                <Paper p="0.4rem 1rem" radius={100}>
                    <Text tt="uppercase" fz="0.7rem" fw={600} c="bright">{article.category}</Text>
                </Paper>
                {article.tags.map((tag) => (
                    <Paper key={tag} p="0.4rem 1rem" radius={100}>
                        <Text tt="uppercase" fz="0.7rem" fw={600} c="bright">#{tag}</Text>
                    </Paper>
                ))}
            </Group>
            <Box mt="2rem">
                <Divider my="2rem" />
                {children}
            </Box>
        </Container>
    )
}