import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Rocket, Globe2, Award, Users, TrendingUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils/createPageUrl";
import { Button } from '@/components/ui/button';
import TimelineItem from '@/components/about/TimelineItem';

const timelineData = [
    {
        icon: Building2,
        year: '2015',
        title: 'Company Founded',
        description: 'Started with a vision to revolutionize logistics and supply chain management with innovative technology and customer-first approach.'
    },
    {
        icon: Rocket,
        year: '2017',
        title: 'National Expansion',
        description: 'Expanded operations across the country with 20+ distribution centers, serving thousands of businesses nationwide.'
    },
    {
        icon: Globe2,
        year: '2019',
        title: 'Global Reach',
        description: 'Extended services to 150+ countries worldwide, establishing strategic partnerships with international carriers and customs brokers.'
    },
    {
        icon: Award,
        year: '2021',
        title: 'Industry Recognition',
        description: 'Awarded "Logistics Provider of the Year" for excellence in service delivery, innovation, and sustainability initiatives.'
    },
    {
        icon: Users,
        year: '2023',
        title: 'Team Growth',
        description: 'Grew to a team of 500+ logistics experts, engineers, and support staff dedicated to delivering exceptional service.'
    },
    {
        icon: TrendingUp,
        year: '2024',
        title: 'Innovation Leader',
        description: 'Launched AI-powered route optimization and real-time tracking platform, setting new industry standards for efficiency.'
    }
];

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Back button */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
                <Link to={createPageUrl('Services')}>
                    <Button variant="ghost" className="gap-2 hover:bg-lime-50 hover:text-lime-600 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Services
                    </Button>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-lime-100/50 rounded-full blur-3xl" />
                    <div className="absolute top-20 -left-20 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="text-lime-600 font-semibold text-sm tracking-wider uppercase">
                            Our Story
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                            Building the Future of
                            <span className="block mt-2 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                                Global Logistics
                            </span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                            From a small startup to a global logistics leader, our journey has been driven by innovation, 
                            dedication, and an unwavering commitment to excellence in every shipment.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            { value: '500+', label: 'Team Members' },
                            { value: '150+', label: 'Countries' },
                            { value: '10K+', label: 'Happy Clients' },
                            { value: '99.8%', label: 'On-Time Rate' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-slate-800">{stat.value}</div>
                                <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-lime-600 font-semibold text-sm tracking-wider uppercase">
                            Our Journey
                        </span>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Milestones & Achievements
                        </h2>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                            A decade of growth, innovation, and setting new standards in the logistics industry.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {timelineData.map((item, index) => (
                            <TimelineItem
                                key={index}
                                icon={item.icon}
                                year={item.year}
                                title={item.title}
                                description={item.description}
                                index={index}
                                isLast={index === timelineData.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="relative py-16 lg:py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime-500/20 rounded-full blur-2xl" />
                            <h3 className="text-2xl font-bold text-white mb-4 relative">Our Mission</h3>
                            <p className="text-slate-300 leading-relaxed relative">
                                To provide seamless, reliable, and innovative logistics solutions that empower businesses 
                                to grow and succeed in the global marketplace. We're committed to sustainability, efficiency, 
                                and building lasting partnerships with our clients.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl" />
                            <h3 className="text-2xl font-bold text-white mb-4 relative">Our Vision</h3>
                            <p className="text-slate-300 leading-relaxed relative">
                                To be the world's most trusted logistics partner, leading the industry through innovation, 
                                technology, and a relentless focus on customer success. We envision a future where global 
                                commerce flows effortlessly through smart, sustainable supply chains.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}