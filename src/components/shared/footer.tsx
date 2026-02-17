import Link from "next/link";

import FeatherIcon from "feather-icons-react";

import {Container} from "@/components/shared/container";
import {base, withBase} from "../../../lib/path";

const footerNavigation = [
    {
        name: "Home",
        slug: "/",
        icon: "home",
    },
    {
        name: "Bookmarks",
        slug: "/bookmarks",
        icon: "bookmark",
    },
    {
        name: "Form",
        slug: "/form",
        icon: "plus-circle",
    },
    {
        name: "Profile",
        slug: "/profile",
        icon: "user",
    }
];

export function Footer() {
    return (
        <footer className="fixed bottom-0 inset-x-0 bg-linear-to-t from-cyan-700 to-blue-500">
            <Container>
                <ul className="flex items-center justify-evenly h-16">
                    {footerNavigation.map((item, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <Link href={withBase(item.slug)} aria-label={item.name}>
                                <FeatherIcon icon={item.icon} size={32} color={"white"} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </footer>
    )
}