import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index, isLast }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`relative py-12 ${!isLast ? 'border-b border-slate-200' : ''}`}
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                {/* Text content - Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="flex-1 text-center md:text-left"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                        {title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-xl">
                        {description}
                    </p>
                </motion.div>

                {/* Icon - Right side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="relative"
                >
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-lime-50 to-green-50 flex items-center justify-center shadow-lg shadow-lime-500/10">
                        <Icon className="w-12 h-12 md:w-16 md:h-16 text-lime-600" strokeWidth={1.5} />
                        {/* Decorative blur */}
                        <div className="absolute inset-0 bg-lime-400/20 rounded-2xl blur-2xl scale-110" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}