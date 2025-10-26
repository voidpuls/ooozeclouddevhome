'use client'

import React from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { Paper } from "@mantine/core";

export const CardHoverEffect = () => {
    const data = {
        id: 4,
        title: "Yet another beautiful Card",
        description: `This is a description of the card. It's a beautiful card, and it's got a nice hover effect. Hover over me to reveal things.`,
        icon: <FaLaptopCode style={{ fontSize: '1rem' }} />,
        pattern: {
            y: 16,
            squares: [
                [0, 1],
                [1, 3],
            ],
        },
    };

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Paper
            onMouseMove={onMouseMove}
            style={{
                borderRadius: '1rem',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                padding: '2rem',
                position: 'relative',
                maxWidth: '24rem',
            }}
        >
            <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div style={{ position: 'relative', zIndex: 10 }}>
                <span>{data.icon}</span>
                <h3 style={{ marginTop: '1.5rem', fontWeight: '600', color: '#fff', letterSpacing: '0.05em', lineHeight: '1.5' }}>
                    {data.title}
                </h3>
                <p style={{ marginTop: '0.5rem', color: '#4B5563', lineHeight: '1.5' }}>
                    {data.description}
                </p>
            </div>
        </Paper>
    );
};

function Effect({ mouseX, mouseY, ...gridProps }) {
    let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div>
            <motion.div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '1rem',
                    background: 'linear-gradient(to right, #161616, #525252)',
                    opacity: 0.3,
                    transition: 'opacity 300ms',
                    ...style
                }}
            />
        </div>
    );
}