'use client'

import { motion } from 'framer-motion';

export default function FadeDownOnLoad({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and positioned 50px above
            animate={{ opacity: 1, y: 0 }}   // Animate to opacity 1 and its original position
            transition={{ duration: 0.3 }}     // Adjust the duration of the animation
        >
            {children}
        </motion.div>
    );
};

