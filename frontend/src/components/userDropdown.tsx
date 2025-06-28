import * as React from "react"
import { Link } from "react-router-dom"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { CircleUser } from "lucide-react"

export default function UserDropdown() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <CircleUser />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-20">
                            <ListItem href="/profile" title="Profile" />
                            <ListItem href="/profile/gear" title="My Gear" />
                            <ListItem href="/profile/Settings" title="Settings" />
                            <ListItem href="/" title="Logout" />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>

        </NavigationMenu>
    )
}

function ListItem({
    title,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}