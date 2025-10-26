import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Illustration } from './Illustration';
import classes from './NothingFound.module.css';
import Link from 'next/link';

export function NothingFoundBackground() {
    return (
        <Container mt="8rem" className={classes.root}>
            <div className={classes.inner}>
                <Illustration className={classes.image} />
                <div className={classes.content}>
                    <Title className={classes.title}>Whoops, error.</Title>
                    <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                        This page does not exist. It may have been removed or relocated.
                    </Text>
                    <Group justify="center">
                        <Button component={Link} href="/" size="md">Go back home</Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}