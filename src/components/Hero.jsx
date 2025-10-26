import { Box, Group, Paper, Stack, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import FadeIn from "./Framer/FadeIn";

export default function Hero({ promoText, promoLink, title, description, children }) {
    return (
        <FadeIn>
            <Stack mt="12rem" px="1rem" align="center">
                {promoText && <Paper w="fit-content" p="0.4rem 1rem" component={promoLink ? Link : "div"} href={promoLink}>
                    <Group td="none" c="dimmed">
                        <BsStars size="1rem" color="#CF5CE5" />
                        <Text fw={500} size="xs">{promoText}</Text>
                        <IconArrowRight c="inherit" size="1.2rem" />
                    </Group>
                </Paper>}
                <Box>
                    {title}
                </Box>
                <Text my="1rem" ta="center" maw="36rem" size="lg">{description}</Text>
                {children}
            </Stack>
        </FadeIn>
    )
}