'use client'

import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Flex, Group, Image } from "@mantine/core";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { settings } from "../../config/settings";

export default function Partners() {
    const autoscroll = useRef(AutoScroll({
        stopOnMouseEnter: false,
        speed: 1,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnFocusIn: false,
    }));

    return (
        <Carousel
            mb={80}
            plugins={[autoscroll.current]}
            height="2rem"
            slideGap="6rem"
            classNames={{
                root: "carousel-shadow",
            }}
            styles={{
                slide: {
                    filter: "grayscale(1)",
                    opacity: 0.6,
                }
            }}
            withControls={false}
            loop
            slideSize={{ base: "100%", sm: "50%", lg: "25%" }}
        >
            <CarouselSlide>
                <Flex gap="6rem">
                    {settings.partners.map((partner) => (
                        <Image radius={0} src={partner.image} alt={partner.name} h="2rem" w="auto" />
                    ))}
                </Flex>
            </CarouselSlide>
            <CarouselSlide>
                <Flex gap="6rem">
                    {settings.partners.map((partner) => (
                        <Image radius={0} src={partner.image} alt={partner.name} h="2rem" w="auto" />
                    ))}
                </Flex>
            </CarouselSlide>
            <CarouselSlide>
                <Flex gap="6rem">
                    {settings.partners.map((partner) => (
                        <Image radius={0} src={partner.image} alt={partner.name} h="2rem" w="auto" />
                    ))}
                </Flex>
            </CarouselSlide>
        </Carousel>
    )
}
