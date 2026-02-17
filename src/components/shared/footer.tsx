import {Container} from "@/components/shared/container";
import FeatherIcon from "feather-icons-react";

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
                            <a href={item.slug} aria-label={item.name}>
                                <FeatherIcon icon={item.icon} size={32} color={"white"} />
                            </a>
                        </li>
                    ))}
                </ul>
            </Container>
        </footer>
    )
}