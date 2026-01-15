import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="flex flex-col h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
            <Header toggleSidebar={toggleSidebar} />

            <div className="flex flex-1 overflow-hidden">
                {/* Backdrop for mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={closeSidebar}
                    />
                )}

                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

                <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
                    <div className="max-w-7xl mx-auto min-h-full">
                        <Outlet />
                    </div>
                    <footer className="mt-12 py-8 border-t border-[var(--border-color)]">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-[var(--text-muted)] text-sm">
                                &copy; {new Date().getFullYear()} DevHub. Built for developers.
                            </div>
                            <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
                                <Link to="/about" className="hover:text-[var(--accent-primary)] transition-colors">About</Link>
                                <Link to="/privacy" className="hover:text-[var(--accent-primary)] transition-colors">Privacy</Link>
                                <Link to="/terms" className="hover:text-[var(--accent-primary)] transition-colors">Terms</Link>
                                <Link to="/contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</Link>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
