import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Globe, Clock } from 'lucide-react';
import ServiceCard from '@/components/service/Servicecard';

const services = [
    {
        icon: Truck,
        title: "Freight Transportation",
        description: "End-to-end freight solutions with real-time tracking across road, rail, and intermodal networks. Reliable delivery schedules that keep your supply chain moving seamlessly."
    },
    {
        icon: Package,
        title: "Warehousing & Distribution",
        description: "State-of-the-art storage facilities with intelligent inventory management. Streamlined distribution networks that reduce costs and accelerate order fulfillment."
    },
    {
        icon: Globe,
        title: "Global Shipping",
        description: "International logistics expertise spanning 150+ countries. Customs brokerage, documentation, and compliance handled with precision for smooth cross-border operations."
    },
    {
        icon: Clock,
        title: "Express Delivery",
        description: "Time-critical shipments delivered with guaranteed urgency. Same-day and next-day options with priority handling for your most sensitive cargo."
    }
];

export default function Services() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-lime-100/50 rounded-full blur-3xl" />
                    <div className="absolute top-20 -left-20 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-lime-50/50 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100/80 border border-lime-200/50 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                            <span className="text-sm font-medium text-lime-700">Trusted by 500+ Enterprises</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Logistics Solutions
                            <span className="block mt-2 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                                Built for Scale
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            From local distribution to global supply chains, we deliver comprehensive logistics services that power your business growth with precision and reliability.
                        </p>
                    </motion.div>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
                    >
                        {[
                            { value: "99.8%", label: "On-Time Delivery" },
                            { value: "150+", label: "Countries Served" },
                            { value: "24/7", label: "Live Support" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</div>
                                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-lime-600 font-semibold text-sm tracking-wider uppercase">
                                Our Services
                            </span>
                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Comprehensive Logistics Expertise
                            </h2>
                            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                                Every aspect of your supply chain, optimized and managed by industry experts.
                            </p>
                        </motion.div>
                    </div>

                    {/* Services list - Vertical */}
                    <div className="max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                index={index}
                                isLast={index === services.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>



            {/* Footer accent */}
            <div className="h-1 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400" />
        </div>
    );
}