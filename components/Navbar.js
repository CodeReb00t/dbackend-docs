'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { ModeToggle } from '@/components/ModeToggle'

function Navbar() {
    return (
        <nav className="w-full px-4 py-3 md:px-8 md:py-4 bg-white dark:bg-black shadow-sm dark:shadow-md border-b dark:border-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  <span className=" transition-transform duration-300">
                    D<span className="text-neutral-600 dark:text-neutral-300">Backend</span>
                  </span>
                </Link>

                {/* Navigation Links */}
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium">
                    <Link href="/learn" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Learn</Link>
                    <Link href="/reference" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Examples</Link>
                    <ModeToggle />
                    <Link
                        href="https://github.com/CodeReb00t/dbackend"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/devansh-kumar-gupta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
