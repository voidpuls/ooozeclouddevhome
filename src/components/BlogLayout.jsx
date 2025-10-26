import {
    Box,
    Container,
    Divider,
    Grid,
    GridCol,
    Group,
    Image,
    Paper,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "./Utils/Link";
import { useTranslations } from "next-intl";

export default function BlogLayout({ children, blog }) {
    const t = useTranslations('Blog');
    return (
        <Container size={850} className="blog" pb="4rem" mt="calc(3% + 8rem)">
            <Grid columns={24} gutter="4rem">
                <GridCol span={24}>
                    <Link mb="1rem" c="dimmed" href="/blog">
                        <Group gap="0.4rem">
                            <IconArrowLeft strokeWidth={1.5} />
                            <Text c="inherit">{t('backToBlogs')}</Text>
                        </Group>
                    </Link>
                    <Title mb="1rem" maw="50rem" fz={{ base: "1.8rem", md: "2.4rem" }}>{blog.title}</Title>
                    <Text mb="1rem" c="dimmed">{blog.description}</Text>
                    <Group position="apart">
                        <Text size="sm" c="dimmed">{t('author')}: <Text component="span" fw={700} c="bright">{blog.author}</Text></Text>
                        <Text size="sm" c="dimmed">{t('readTime')}: <Text component="span" fw={700} c="bright">{blog.readTime}m</Text></Text>
                        <Text size="sm" c="dimmed">{t('datePublished')}: <Text component="span" fw={700} c="bright">{new Date(blog.date).toLocaleDateString('en-GB')}</Text></Text>
                    </Group>
                    <Group my="1rem" spacing="xs">
                        {blog.tags.map((tag) => {
                            return (
                                <Paper key={tag} p="0.4rem 1rem" radius={100}>
                                    <Text tt="uppercase" fz="0.7rem" fw={600} c="bright">#{tag}</Text>
                                </Paper>
                            )
                        })}
                    </Group>
                    <Image mb="2rem" radius={15} fit="cover" src={blog.image} alt={blog.title} h={400} w="100%" />
                    <Box mt="1rem">
                        {children}
                    </Box>
                </GridCol>
            </Grid>
        </Container>
    )
}