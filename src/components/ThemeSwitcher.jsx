'use client'

import { ActionIcon, Box, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export default function ThemeSwitcher() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const toggleTheme = () => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ActionIcon style={{borderRadius: 10, border: "none"}} size="lg" variant="light" color="dark.2" onClick={toggleTheme}>
            <Box lightHidden>
                <IconMoon color="#fff" size={20} />
            </Box>
            <Box darkHidden>
                <IconSun color="#333" size={20} />
            </Box>
        </ActionIcon>
    );
}