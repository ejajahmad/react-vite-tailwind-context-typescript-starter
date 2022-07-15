import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                y: [-50, 0],
            }}
            exit={{ opacity: 0 }}
            className=" min-w-full  py-6 px-5 bg-white text-black hidden sm:grid grid-cols-3 border-b-2 border-yellow-500 mb-5 "
        >
            <div className="left text-center my-auto hidden sm:block">
                <nav className="flex items-center justify-end gap-10 text-lg font-bold ">
                    <Link
                        to="/"
                        className="text-black dark:text-black hover:underline underline-offset-8 transition-all"
                    >
                        Discover
                    </Link>
                    <Link
                        to="/about"
                        className="text-black dark:text-black hover:underline underline-offset-8 transition-all"
                    >
                        Popular
                    </Link>
                    <Link
                        to="/contact"
                        className="text-black dark:text-black hover:underline underline-offset-8 transition-all"
                    >
                        Tours
                    </Link>
                </nav>
            </div>
            <div className="center text-center">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [-50, 0],
                    }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                        scale: 1.1,
                        color: '#eab308',
                    }}
                    className="text-3xl font-extrabold flex items-center justify-center "
                >
                    <Link to="/" className="text-black">
                        HotelX
                    </Link>
                </motion.h1>
            </div>
            <div className="right text-center my-auto hidden sm:block">
                <nav className="flex items-center justify-start gap-10 text-lg font-bold ">
                    <Link
                        to="/"
                        className="text-black dark:text-black hover:underline underline-offset-8 transition-all"
                    >
                        About
                    </Link>
                    <Link
                        to="/about"
                        className="text-black dark:text-black hover:underline underline-offset-8 transition-all"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white dark:text-black hover:underline underline-offset-8 transition-all"
                    >
                        Blog
                    </Link>
                </nav>
            </div>
        </motion.div>
    );
}
