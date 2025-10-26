'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FadeInOnScroll({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: false, // Only trigger once when the component comes into view
        threshold: 0.1,    // Percentage of the element in view (0.1 = 10%)
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

