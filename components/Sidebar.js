import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ sections, isOpen, toggleSidebar }) => {
    return (
        <>
            <button
                className={`
                    fixed z-50 p-2 m-4 bg-black text-white dark:bg-white dark:text-black rounded-md shadow-md transition-all
                    top-1/2 -translate-y-1/2
                    ${isOpen ? 'left-64' : 'left-0'}
                    lg:${isOpen ? 'left-64' : 'left-0'}
                `}
                onClick={toggleSidebar}
            >
                {isOpen ? <ChevronLeft /> : <ChevronRight />}
            </button>

            {/* Sidebar */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40
                    transform transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:${isOpen ? 'translate-x-0' : '-translate-x-64'}
                `}
            >
                <nav className="px-6 py-6 space-y-4 overflow-y-auto max-h-[calc(100vh-60px)]">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600"
                            onClick={() => isOpen && toggleSidebar()}
                        >
                            {section.title}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
