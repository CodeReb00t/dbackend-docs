import React from 'react';
import { features } from '@/data/Features';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Features() {
    return (
        <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-900">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
                🧩 Backend Building Blocks
            </h2>

            <div className="space-y-24">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        <div className="md:w-1/2 text-center md:text-left space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
                                 {feature.title}
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                {feature.description}
                            </p>
                        </div>

                        <div className="md:w-1/2 w-full h-auto rounded-xl overflow-hidden shadow-lg bg-white/30 dark:bg-white/5 p-4 backdrop-blur-md flex items-center justify-center">
                            {feature.img ? (
                                <Image
                                    src={feature.img}
                                    alt={feature.imageAlt}
                                    width={500}
                                    height={300}
                                    className="rounded-lg object-contain"
                                />
                            ) : (
                                <span className="italic text-sm text-gray-500 dark:text-gray-400">{feature.imageAlt}</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Features;
