'use client'

import { Avatar, Paper, Text } from "@mantine/core";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { settings } from "../../config/settings";
import { Carousel, CarouselSlide } from "@mantine/carousel";

const carouselProps = {
    height: "13rem",
    slideGap: "1rem",
    classNames: {
        root: "carousel-shadow",
    },
    styles: {
        slide: {
            filter: "grayscale(1)",
            opacity: 0.6,
        }
    },
    withControls: false,
    loop: true,
    slideSize: { base: "80%", xs: "50%", sm: "50%", md: "40%", lg: "30%", xl: "20%" }
}

const autoScrollProps = {
    stopOnMouseEnter: false,
    speed: 0.8,
    playOnInit: true,
    stopOnInteraction: false,
    stopOnFocusIn: false,
}

export default function ReviewsCarousel() {
    const reviews = settings.reviews;
    const autoscroll = useRef(AutoScroll({
        ...autoScrollProps
    }));
    const autoscroll2 = useRef(AutoScroll({
        direction: "backwards",
        ...autoScrollProps
    }));

    return <>
        <Carousel
            plugins={[autoscroll.current]}
            {...carouselProps}
        >
            {reviews.slice(0, reviews.length / 2).map((review, index) => (
                <CarouselSlide key={index}>
                    <Paper p="2rem">
                        <Avatar mb="0.4rem" src={review.avatar} size="md" />
                        <Text c="bright" fw={600} size="lg" mb="0.4rem">{review.title}</Text>
                        <Text lineClamp={2}>{review.message}</Text>
                    </Paper>
                </CarouselSlide>
            ))}
        </Carousel>
        <Carousel
            plugins={[autoscroll2.current]}
            {...carouselProps}
        >
            {reviews.slice(reviews.length / 2, reviews.length).map((review, index) => (
                <CarouselSlide key={index}>
                    <Paper p="2rem">
                        <Avatar mb="0.4rem" src={review.avatar} size="md" />
                        <Text c="bright" fw={600} size="lg" mb="0.4rem">{review.title}</Text>
                        <Text lineClamp={2}>{review.message}</Text>
                    </Paper>
                </CarouselSlide>
            ))}
        </Carousel>
    </>
}
