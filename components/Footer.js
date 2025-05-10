'use client'

import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="bg-white dark:bg-black text-gray-900 dark:text-white py-8 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {/* Connect Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-500">Connect</h3>
                    <div className="flex space-x-4">
                        <Link href="https://github.com/CodeReb00t/dbackend" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-6 h-6 text-gray-700 dark:text-white hover:text-purple-500 transition-colors" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/devansh-kumar-gupta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6 text-gray-700 dark:text-white hover:text-purple-500 transition-colors" />
                        </Link>
                    </div>
                </div>

                {/* Learn Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-500">Learn</h3>
                    <div className="flex flex-col space-y-2">
                        <Link href="/learn" className="hover:text-purple-500 transition-colors">Learn 1</Link>
                        <Link href="/learn" className="hover:text-purple-500 transition-colors">Learn 2</Link>
                        <Link href="/learn" className="hover:text-purple-500 transition-colors">Learn 3</Link>
                    </div>
                </div>

                {/* Reference Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-500">Reference</h3>
                    <div className="flex flex-col space-y-2">
                        <Link href="/reference" className="hover:text-purple-500 transition-colors">Reference 1</Link>
                        <Link href="/reference" className="hover:text-purple-500 transition-colors">Reference 2</Link>
                        <Link href="/reference" className="hover:text-purple-500 transition-colors">Reference 3</Link>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
                <p>&copy; 2025 DBackend. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
