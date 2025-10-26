'use client'

import { ActionIcon, Anchor, Burger, Button, Collapse, Drawer, Group, HoverCard, HoverCardDropdown, HoverCardTarget, Image, Paper, SimpleGrid, Stack, Text, ThemeIcon, Tooltip, UnstyledButton } from "@mantine/core"
import { IconChevronDown, IconLifebuoy } from "@tabler/icons-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { settings } from "../../config/settings"
import { useTranslations } from 'next-intl';
import FadeDownOnLoad from "./Framer/FadeDown";

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [opened, setOpened] = useState(false);
    const [openedServices, setOpenedServices] = useState(false);
    const [navbarStyle, setNavbarStyle] = useState({ top: "25px" });

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setNavbarStyle({ top: "25px" });
            } else {
                setNavbarStyle({ top: "-100px" });
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="navbar" style={{ ...navbarStyle, position: 'fixed', width: '100%', transition: 'top 0.3s'}}>
            <FadeDownOnLoad>
                <Group mt="2rem" w="100%" justify="center">
                    <Paper w={{ base: "calc(100% - 2rem)", sm: "auto" }} p="0.6rem 1rem">
                        <Group visibleFrom="sm" gap="3rem">
                            <Link href="/">
                                <Image lightHidden src="/logo_light.svg" alt="logo" w="2.6rem" h="auto" />
                                <Image darkHidden src="/logo_dark.svg" alt="logo" w="2.6rem" h="auto" />
                            </Link>
                            <Anchor c="bright" component={Link} href="/">{t('home')}</Anchor>
                            <HoverCard>
                                <HoverCardTarget>
                                    <Group className="pointer" gap="0.4rem">
                                        <Text c="bright">{t('solutions')}</Text>
                                        <IconChevronDown size="1rem" />
                                    </Group>
                                </HoverCardTarget>
                                <HoverCardDropdown classNames={{ dropdown: "paper" }}>
                                    <SimpleGrid p="0.6rem" w="40rem" cols={2} spacing="0.6rem">
                                        {settings.navbar_dropdown_items.map((service) => (
                                            <UnstyledButton component={Link} href={service.href} className="navbar__dropdown-item" key={service.title}>
                                                <Group wrap="nowrap" align="flex-start">
                                                    <ThemeIcon size={34} variant="default" radius="md">
                                                        <service.icon size="1rem" />
                                                    </ThemeIcon>
                                                    <div>
                                                        <Text c="bright" size="sm" fw={500}>
                                                            {service.title}
                                                        </Text>
                                                        <Text size="xs" c="dimmed">
                                                            {service.description}
                                                        </Text>
                                                    </div>
                                                </Group>
                                            </UnstyledButton>
                                        ))}
                                    </SimpleGrid>
                                </HoverCardDropdown>
                            </HoverCard>
                            <Anchor c="bright" href="/#pricing">{t('pricing')}</Anchor>
                            <Anchor c="bright" component={Link} href="/network">{t('network')}</Anchor>
                            <Anchor c="bright" component={Link} href="/contact-us">{t('contact')}</Anchor>
                            <Button component={Link} href={settings.billing_url} target="_blank" variant="filled">{t('order')}</Button>
                        </Group>

                        <Group hiddenFrom="sm" justify="space-between">
                            <Image lightHidden src="/logo_light.svg" alt="logo" w="2.6rem" h="auto" />
                            <Image darkHidden src="/logo_dark.svg" alt="logo" w="2.6rem" h="auto" />
                            <Burger opened={opened} onClick={() => setOpened(true)} />
                        </Group>
                    </Paper>
                    <Paper visibleFrom="sm" lh={0}>
                        <Tooltip label={t('support')}>
                            <div>
                                <Link href="/knowledgebase">
                                    <ActionIcon c="bright" bg="transparent" size="3.8rem">
                                        <IconLifebuoy size="1.8rem" />
                                    </ActionIcon></Link>
                            </div>
                        </Tooltip>
                    </Paper>
                </Group>


                <Drawer size="20rem" opened={opened} onClose={() => setOpened(false)} title={<Link href="/" onClick={() => setOpened(false)}><Image lightHidden src="/logo_light.svg" alt="logo" w="2.6rem" h="auto" />
                    <Image darkHidden src="/logo_dark.svg" alt="logo" w="2.6rem" h="auto" /></Link>}>
                    <Stack p="1rem">
                        <Anchor onClick={() => setOpened(false)} c="bright" component={Link} href="/">{t('home')}</Anchor>
                        <Group gap="0.4rem" className="pointer" onClick={() => setOpenedServices(!openedServices)}>
                            <Text c="bright">{t('services')}</Text>
                            <IconChevronDown size="1rem" />
                        </Group>
                        <Collapse onClick={() => setOpened(false)} in={openedServices}>
                            <Stack pl="md" spacing="xs">
                                {settings.navbar_dropdown_items.map((service) => (
                                    <Anchor
                                        key={service.title}
                                        c="bright"
                                        component={Link}
                                        href={service.href}
                                        size="sm"
                                    >
                                        {service.title}
                                    </Anchor>
                                ))}
                            </Stack>
                        </Collapse>
                        <Anchor onClick={() => setOpened(false)} c="bright" href="/#pricing">{t('pricing')}</Anchor>
                        <Anchor onClick={() => setOpened(false)} c="bright" component={Link} href="/network">{t('network')}</Anchor>
                        <Anchor onClick={() => setOpened(false)} c="bright" component={Link} href="/contact-us">{t('contact')}</Anchor>
                        <Anchor onClick={() => setOpened(false)} c="bright" component={Link} href="/blog">{t('blog')}</Anchor>
                        <Button onClick={() => setOpened(false)} component={Link} href={settings.billing_url} target="_blank" variant="filled">{t('order')}</Button>
                    </Stack>
                </Drawer>
            </FadeDownOnLoad>
        </div>
    )
}