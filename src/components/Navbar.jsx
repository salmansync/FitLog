"use client";

import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PlanHead from "./PlanHead";
import SaveHead from "./SaveHead";
import logo from "../assets/logo.png";

const NavbarContent = () => {
    const pathname = usePathname();

    const links = [
        { name: "Workouts", href: "/" },
        { name: "My Plan", href: "/my-plan" },
    ];

    const getLinkClass = (href) => {
        const isActive =
            href === "/"
                ? pathname === "/" || pathname.startsWith("/work/")
                : pathname === href || pathname.startsWith(`${href}/`);

        return `rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive
            ? "bg-[#C6FF00]/10 text-[#C6FF00] ring-1 ring-[#C6FF00]/20"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`;
    };

    return (
        <div className="w-full border-b border-[#252932] bg-[#0C0D10]">
            <div className="navbar mx-auto max-w-400 px-3 shadow-sm sm:px-6">


                <div className="navbar-start gap-1">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            aria-label="Open navigation menu"
                            className="btn btn-ghost btn-circle lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-50 mt-3 w-52 rounded-xl border border-[#252932] bg-[#15171D] p-2 shadow-xl"
                        >
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={getLinkClass(link.href)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <Link
                        href="/"
                        className="group flex items-center gap-2 rounded-xl px-2 py-2 transition-all duration-300 hover:bg-[#C6FF00]/5 sm:px-3"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C6FF00]/10 ring-1 ring-[#C6FF00]/30 sm:h-10 sm:w-10">
                            <Image
                                src={logo}
                                alt="FitLog logo"
                                className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <span className="text-xl font-black tracking-tight text-white sm:text-2xl">
                            Fit<span className="text-[#C6FF00]">Log</span>
                        </span>
                    </Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={getLinkClass(link.href)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="navbar-end">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <PlanHead />
                        <SaveHead />
                    </div>
                </div>

            </div>
        </div>
    );
};

const Navbar = () => {
    return (
        <Suspense
            fallback={
                <div className="h-16 w-full border-b border-[#252932] bg-[#0C0D10]" />
            }
        >
            <NavbarContent />
        </Suspense>
    );
};

export default Navbar;