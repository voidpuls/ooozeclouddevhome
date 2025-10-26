import { Container, Divider, Text, Title } from "@mantine/core";
import { settings } from "../../../../config/settings";

export const metadata = {
    title: "Terms of Service | " + settings.company_name,
    description: "Read our terms of service before ordering a service or products from us. These terms outline the rules and regulations for the use of our services and products.",
    openGraph: {
        title: "Terms of Service | " + settings.company_name,
        description: "Read our terms of service before ordering a service or products from us. These terms outline the rules and regulations for the use of our services and products.",
    }
}

export default function Page() {
    return (
        <Container size={850} my="calc(3% + 8rem)">
            <Title mb="1rem" fz="1.8rem" order={2}>Terms of Service</Title>
            <Text mb="1rem">
                Please read these terms of service carefully before using our service. They outline the rules and
                regulations for the use of our services and products. Do not order a
                product or service if you do not agree with the terms and conditions outlined below.
            </Text>

            <Text>Enter your terms of service here...</Text>

        </Container>
    )
}