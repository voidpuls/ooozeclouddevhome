'use client'

import { Carousel, CarouselSlide } from "@mantine/carousel";
import { ActionIcon, alpha, Box, Button, Divider, Group, List, ListItem, Paper, ScrollArea, SegmentedControl, Stack, Text, Tooltip } from "@mantine/core";
import { IconHeadset } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { settings } from "../../config/settings";

export default function PricingTable({ forceService, withLocationSwitcher, withBudgetSwitcher = true, data }) {
    const locations = [...new Set(Object.values(data).flatMap(planType => Object.values(planType).flatMap(service => service.map(plan => plan.location))))];
    const [location, setLocation] = useState(locations[0]);
    const [planType, setPlanType] = useState('Budget');
    const categories = withBudgetSwitcher ? Object.keys(planType === 'Premium' ? data["Premium"] : data["Budget"]) : [];
    const [service, setService] = useState(forceService || categories[0] || '');
    const activePlans = withBudgetSwitcher
        ? (planType === 'Premium' ? data["Premium"][service].filter(plan => plan.location === location) : data["Budget"][service].filter(plan => plan.location === location))
        : data;

    return (
        <Box>
            <Group gap="3rem" my="2rem" justify="center">
                {withLocationSwitcher && <SegmentedControl
                    classNames={{ root: "paperBgColor" }}
                    radius="xl" color="primary" size="md" withItemsBorders={false} value={location} onChange={setLocation}
                    data={locations} />}

                {!forceService && <ScrollArea miw="20rem">
                    <SegmentedControl
                        classNames={{ root: "paperBgColor" }}
                        radius="xl" color="primary" size="md" withItemsBorders={false} value={service} onChange={setService}
                        data={categories} /></ScrollArea>}

                {withBudgetSwitcher && <SegmentedControl
                    classNames={{ root: "paperBgColor" }}
                    radius="xl" color="primary" size="md" withItemsBorders={false} value={planType} onChange={setPlanType}
                    data={['Premium', 'Budget']} />}
            </Group>

            <Carousel
                maw={1200}
                slideSize={{ base: "90%", md: "33.333%" }}
                slideGap="md"
                slidesToScroll={1}
                align="start"
                height={640}
            >
                {activePlans.map((plan, index) => (
                    <CarouselSlide key={index}>
                        <PricingCard {...plan} />
                    </CarouselSlide>
                ))}
            </Carousel>
        </Box>
    )
}

function PricingCard({ name, link, description, features, price }) {
    return (
        <Paper p="2rem">
            <Stack gap={0}>
                <Text mb="0.4rem" fw={700} c="bright" fz="2rem">{name}</Text>
                <Text mb="0.4rem" c="dimmed">{description}</Text>
                <Group gap={4}>
                    <Text fw={700} c={alpha("#555", 0.5)} pos="relative" top="-1rem" fz="1.6rem">$</Text>
                    <Text fw={700} c="bright" fz="3rem">{price}</Text>
                    <Text c="dimmed" pos="relative" top="0.2rem">/month</Text>
                </Group>
            </Stack>

            <Divider className="pricing-card__divider" my="1rem" mb="2rem" />

            <List
                spacing="0.6rem"
                icon={<div className="pricing-card__indicator" />}
            >
                {features.map((feature, index) => <ListItem key={index}>{feature}</ListItem>)}
            </List>

            <Group gap="0.4rem" wrap="nowrap">
                <Button style={{ borderRadius: "15px 6px 6px 15px" }} size="md" my="1rem" fullWidth component={Link} href={link} variant="plain">Order this service</Button>
                <Tooltip label="Contact us for more information">
                    <ActionIcon c="bright" component={Link} href={settings.create_ticket_url} target="_blank" style={{ borderRadius: "6px 15px 15px 6px" }} size="2.6rem" variant="plain">
                        <IconHeadset size="1.4rem" />
                    </ActionIcon>
                </Tooltip>
            </Group>
        </Paper>
    )
}