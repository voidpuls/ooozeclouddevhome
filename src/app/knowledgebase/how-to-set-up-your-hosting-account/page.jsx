import { Alert, Image, Text, Title } from "@mantine/core";
import { knowledgebaseArticles } from "../../../../config/knowledgebaseArticles";
import { settings } from "../../../../config/settings";
import KnowledgebaseLayout from "../../../components/KnowledgebaseLayout";

// Change this to the ID of the article you want to display from the knowledgebaseArticles.js file
const articleId = 1;

const article = knowledgebaseArticles.find(article => article.id === articleId);

export const metadata = {
    title: article.title + " | " + settings.company_name,
    description: article.description,
    keywords: article.tags.join(", "),
    openGraph: {
        title: article.title + " | " + settings.company_name,
        description: article.description,
    },
};

const code = `
const testVariable = "Hello World";
console.log(testVariable);
`;

export default function Page() {
    return (
        <KnowledgebaseLayout article={article}>
            <Title order={1}>Example of a title (h1)</Title>
            <Title order={2}>Example of a title (h2)</Title>
            <Title order={3}>Example of a title (h3)</Title>
            <Title order={4}>Example of a title (h4)</Title>
            <Title order={5}>Example of a title (h5)</Title>
            <Title mb="2rem" order={6}>Example of a title (h6)</Title>

            <Text mb="1rem">
                This is an example of a paragraph/text you can add in this article
            </Text>

            <Text mb="1rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus tempora, hic dolorem mollitia eveniet ducimus quod laudantium, quasi quas possimus numquam nam voluptate dolores, minima facere rem. Iste aut cupiditate recusandae ullam fuga beatae, veniam, quos porro corporis, minima nam.</Text>

            <Alert title="Need Help?" variant="info" mb="1rem">
                This is an example of an alert.
            </Alert>
            <Alert title="Need Help?" variant="success" mb="1rem">
                This is an example of an alert.
            </Alert>

            <Text>Example of an image</Text>

            <Image src="/panel_image.png" alt="Step 1" />

        </KnowledgebaseLayout >
    );
}