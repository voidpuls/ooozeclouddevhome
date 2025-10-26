'use client'

import { ActionIcon, Anchor, Box, Button, Container, Group, Image, Stack, Text } from '@mantine/core';
import Link from "next/link";
import classes from '../../theme/components/Footer.module.css';
import { settings } from '../../config/settings';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
export default function Footer() {
    const t = useTranslations('Footer');

    const groups = settings.footer_links.map((group) => {
        const links = group.links.map((link, index) => (
            <Anchor
                td="none"
                target={link.link.startsWith('http') ? '_blank' : '_self'}
                key={index}
                c="dimmed"
                href={link.link}
            >
                {link.label}
            </Anchor>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text tt="uppercase" mb="1rem" fw={700} c="bright">{group.title}</Text>
                <Stack gap="0.2rem">
                    {links}
                </Stack>
            </div>
        );
    });


    return (
        <Box p="2rem">
            <footer className={classes.footer}>
                <Container>
                    <Box className={classes.inner}>
                        <Box mb={{ base: "3rem", md: 0 }}>
                            <Link href="/">
                                <Image lightHidden className="logo" src="/logo_light.svg" alt="Logo" w="50" h="auto" />
                                <Image darkHidden className="logo" src="/logo_dark.svg" alt="Logo" w="50" h="auto" />
                            </Link>
                            <Text maw="20rem" my="1rem" c="dimmed">
                                {t('description')}
                            </Text>
                            <Group maw="14rem">
                                {Object.values(settings.socials.other).map((social, index) => (
                                    <ActionIcon key={index} variant="transparent" size="lg" component={Link} href={social.link} target="_blank">
                                        {social.icon}
                                    </ActionIcon>
                                ))}
                            </Group>
                        </Box>
                        <div className={classes.groups}>{groups}</div>
                    </Box>
                    <Group mt="2rem" justify="space-between">
                        <Text c="dimmed" size="sm">
                            {t('copyright')}
                        </Text>
                        <Group>
                            {settings.color_scheme.force_color_scheme === "auto" && <ThemeSwitcher />}
                            {settings.translation_system.enabled && <LanguageSwitcher />}
                        </Group>
                    </Group>
                </Container>
            </footer>
        </Box>
    );
}