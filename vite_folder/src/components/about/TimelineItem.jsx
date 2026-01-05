import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TimelineItem({ icon: Icon, year, title, description, index, isLast }) {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div ref={itemRef} className="relative flex gap-8 pb-12">
            {/* Timeline line */}
            <div className="relative flex flex-col items-center">
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center shadow-lg shadow-lime-500/30"
                >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                {/* Vertical line */}
                {!isLast && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isVisible ? { height: '100%' } : { height: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        className="w-0.5 bg-gradient-to-b from-lime-400 to-green-300 absolute top-16 bottom-0"
                    />
                )}
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                className="flex-1 pt-3"
            >
                <div className="inline-block px-4 py-1 rounded-full bg-lime-100 text-lime-700 font-semibold text-sm mb-3">
                    {year}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
            </motion.div>
        </div>
    );
}