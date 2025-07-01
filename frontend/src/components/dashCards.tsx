import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";



export default function DashboardCards() {
    // To create fade in on load effect
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timeout);
    })
    return (
        <div className="grid grid-cols-4 py-8 px-8 gap-8 items-stretch">
            <Card className={`gap-y-10 bg-dashboard-cards text-shadow-2xs border-1 border-ring transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
                <CardHeader>
                    <CardDescription className="font-semibold text-foreground">Handicap Index</CardDescription>
                    <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        11
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <TrendingDown />
                            -1.2
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Updated June 28th, 2025 for 15 rounds of golf
                    </div>
                </CardFooter>
            </Card>
            <Card className={`gap-y-10 bg-dashboard-cards text-shadow-2xs border-1 border-ring transition-opacity duration-1500 ${loaded ? "opacity-100" : "opacity-0"}`}>
                <CardHeader>
                    <CardDescription className="font-semibold text-foreground">Latest Round</CardDescription>
                    <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        85
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            +13
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        18 Hole Par 72 played on June 23rd, 2025
                    </div>
                </CardFooter>
            </Card>
            <Card className={`gap-y-10 bg-dashboard-cards text-shadow-2xs border-1 border-ring transition-opacity duration-2000 ${loaded ? "opacity-100" : "opacity-0"}`}>
                <CardHeader>
                    <CardDescription className="font-semibold text-foreground">Handicap Index</CardDescription>
                    <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        11
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <TrendingDown />
                            -1.2
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Updated June 28th, 2025 for 15 rounds of golf
                    </div>
                </CardFooter>
            </Card>
            <Card className={`gap-y-10 bg-dashboard-cards text-shadow-2xs border-1 border-ring transition-opacity duration-2500 ${loaded ? "opacity-100" : "opacity-0"}`}>
                <CardHeader>
                    <CardDescription className="font-semibold text-foreground">Handicap Index</CardDescription>
                    <CardTitle className="text-4xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        11
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <TrendingDown />
                            -1.2
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Updated June 28th, 2025 for 15 rounds of golf
                    </div>
                </CardFooter>
            </Card>
        </div>
    )

}