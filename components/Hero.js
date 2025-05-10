import React from 'react';
import {motion} from "framer-motion";
import Link from "next/link";

function Hero(props) {
    return (
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 text-center dark:text-white bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"
            >
                <span className="text-gray-700 dark:text-white">("d"</span>{' '}
                <span className="text-purple-500">||</span>{' '}
                <span className="text-gray-700 dark:text-white">"The") + </span>
                <span className="text-black dark:text-white">"backend"</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl max-w-3xl text-gray-700 dark:text-gray-300 mb-8"
            >
                The ultimate open-source backend developer library—everything you need to build, secure, and scale your APIs.
                From plug-and-play modules to full examples, it's all here.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link
                    href="/learn"
                    className="px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition shadow-lg font-medium"
                >
                    Start Learning
                </Link>
                <Link
                    href="/reference"
                    className="px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition shadow-lg font-medium"
                >
                    View References
                </Link>
            </motion.div>
        </section>

    );
}

export default Hero;