import { Alert, Text, Title } from "@mantine/core";
import { blogPosts } from "../../../../config/blogs";
import { settings } from "../../../../config/settings";
import BlogLayout from "../../../components/BlogLayout";

// ID of the blog post for this page from blogs.js
const blogId = 1;

const blog = blogPosts.find(blog => blog.id === blogId);

export const metadata = {
    title: blog.title + " | " + settings.company_name,
    description: blog.description,
    keywords: blog.tags.join(", "),
    openGraph: {
        title: blog.title + " | " + settings.company_name,
        description: blog.description,
    },
};

export default function Page() {
    return (
        <BlogLayout blog={blog}>
            <Text mb="1rem">
                Hosting a website can seem daunting at first, but with the right guidance, it becomes a manageable task. The first step in getting started with hosting is understanding the different types of hosting available. Shared hosting is often the most economical option, where multiple websites share the same server resources. This is ideal for small personal blogs or websites with low traffic. However, as your site grows, you may want to consider options like VPS (Virtual Private Server) hosting or dedicated hosting, which offer more resources and control over your server environment.
            </Text>
            <Alert variant="info" mb="1rem" title="Did you know?">
                <Text c="dimmed" size="sm">
                    Shared hosting is the most economical option, where multiple websites share the same server resources. This is ideal for small personal blogs or websites with low traffic.
                </Text>
            </Alert>
            <Text mb="1rem">
                Once you have chosen the type of hosting that suits your needs, the next step is to select a hosting provider. There are numerous providers available, each offering various features and pricing plans. It’s essential to research and compare these options based on factors such as uptime guarantees, customer support, and scalability. Look for reviews and testimonials from other users to gauge the reliability of the provider. Additionally, many hosting companies offer a money-back guarantee, allowing you to test their services without a long-term commitment.
            </Text>
            <Text mb="1rem">
                After selecting a hosting provider, you will need to register a domain name for your website. Your domain name is your online identity, so choose something that reflects your brand or the content of your site. Most hosting providers offer domain registration services, making it convenient to manage both your hosting and domain in one place. Once your domain is registered, you will need to point it to your hosting server, which typically involves updating the DNS settings. This process can take some time to propagate, so patience is key.
            </Text>
            <Text mb="1rem">
                With your hosting and domain set up, it’s time to upload your website files. If you are using a content management system (CMS) like WordPress, many hosting providers offer one-click installations that simplify this process. For custom-built websites, you can use FTP (File Transfer Protocol) clients to transfer your files to the server. Ensure that your website is optimised for performance, including image compression and minimising code, to provide a better user experience and improve loading times.
            </Text>
            <Alert variant="success" mb="1rem" title="Useful tip">
                <Text c="dimmed" size="sm">
                    Most hosting providers offer one-click installations that simplify this process.
                </Text>
            </Alert>
            <Text mb="1rem">
                Finally, once your website is live, it’s crucial to monitor its performance and security. Regularly update your software and plugins to protect against vulnerabilities. Consider implementing SSL certificates to secure your site and enhance trust with your visitors. Additionally, use analytics tools to track your website’s traffic and user behaviour, allowing you to make informed decisions about future content and improvements. Hosting is just the beginning of your online journey, and with the right approach, you can create a successful and engaging website.
            </Text>
        </BlogLayout>
    );
}