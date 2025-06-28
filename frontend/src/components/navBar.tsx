import * as React from "react"
import { Link } from "react-router-dom"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavBar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to={"/dashboard"}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Rounds</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80">
              <ListItem href="/rounds/log" title="Log Round">
                Record details from your most recent round.
              </ListItem>
              <ListItem href="/rounds/history" title="Round History">
                Browse and filter all previously logged rounds.
              </ListItem>
              <ListItem href="/rounds/compare" title="Compare Rounds">
                Analyze performance across multiple rounds.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Stats</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80">
              <ListItem href="/stats/driving" title="Driving">
                Track accuracy, distance, and trends off the tee.
              </ListItem>
              <ListItem href="/stats/approach" title="Approach">
                Analyze approach shot distances and consistency.
              </ListItem>
              <ListItem href="/stats/putting" title="Putting">
                See putting performance and strokes gained.
              </ListItem>
              <ListItem href="/stats/strokes-gained" title="Strokes Gained">
                Advanced breakdown of strokes gained by category.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80">
              <ListItem href="/practice/start" title="Start Session">
                Begin a focused practice session on any area.
              </ListItem>
              <ListItem href="/practice/drills" title="Drills">
                Explore targeted drills for each skill category.
              </ListItem>
              <ListItem href="/practice/history" title="Practice History">
                Review your recent practice sessions and progress.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Swing Analysis</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80">
              <ListItem href="/swing/breakdown" title="Swing Breakdown">
                Frame-by-frame analysis with visual cues and key metrics.
              </ListItem>
              <ListItem href="/swing/comparison" title="Swing Comparison">
                Compare swings over time or against a pro baseline.
              </ListItem>
              <ListItem href="/swing/upload" title="Upload Swing">
                Upload or record a new swing for instant analysis.
              </ListItem>
              <ListItem href="/swing/metrics" title="Swing Metrics">
                View angles, tempo, rotation, and other technical stats.
              </ListItem>
              <ListItem href="/swing/library" title="My Swings">
                Your personal swing library — organized, searchable, and taggable.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
