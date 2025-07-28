import Header from "@/components/header.tsx";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const swings = [
  { club: "7 Iron", date: "7/28/25", goodSwing: true },
  { club: "Driver", date: "7/27/25", goodSwing: false },
  { club: "Pitching Wedge", date: "7/26/25", goodSwing: true },
  { club: "9 Iron", date: "7/25/25", goodSwing: true },
  { club: "5 Iron", date: "7/24/25", goodSwing: false },
  { club: "3 Wood", date: "7/23/25", goodSwing: true },
  { club: "Sand Wedge", date: "7/22/25", goodSwing: false },
  { club: "6 Iron", date: "7/21/25", goodSwing: true },
  { club: "Driver", date: "7/20/25", goodSwing: true },
  { club: "4 Iron", date: "7/19/25", goodSwing: false },
  { club: "Pitching Wedge", date: "7/18/25", goodSwing: true },
  { club: "7 Iron", date: "7/17/25", goodSwing: true },
  { club: "3 Wood", date: "7/16/25", goodSwing: false },
  { club: "9 Iron", date: "7/15/25", goodSwing: true },
  { club: "5 Iron", date: "7/14/25", goodSwing: true },
  { club: "Driver", date: "7/13/25", goodSwing: false },
  { club: "8 Iron", date: "7/12/25", goodSwing: true },
  { club: "Pitching Wedge", date: "7/11/25", goodSwing: true },
  { club: "6 Iron", date: "7/10/25", goodSwing: false },
  { club: "3 Wood", date: "7/9/25", goodSwing: true },
  { club: "9 Iron", date: "7/8/25", goodSwing: false },
  { club: "5 Iron", date: "7/7/25", goodSwing: true },
  { club: "Driver", date: "7/6/25", goodSwing: true },
  { club: "7 Iron", date: "7/5/25", goodSwing: false },
  { club: "Sand Wedge", date: "7/4/25", goodSwing: true },
  { club: "4 Iron", date: "7/3/25", goodSwing: true },
  { club: "Pitching Wedge", date: "7/2/25", goodSwing: false },
  { club: "6 Iron", date: "7/1/25", goodSwing: true },
  { club: "Driver", date: "6/30/25", goodSwing: true },
  { club: "9 Iron", date: "6/29/25", goodSwing: false },
]


export default function SwingBreakdown() {
    return (
        <div>
            <Header />
            <div className="flex h-screen">
                <div className="flex flex-1 flex-col border-muted border-r-1 border-b-2 items-center">
                    {/* Section that will be for photo selection */}
                    <ScrollArea className="flex flex-col h-7/8 w-full items-center m-1">
                        {swings.map((swing, index) => (
                            <Card key={index} className="m-2 mr-4 ml-4 p-2 border-ring">
                                <CardTitle>{swing.club}</CardTitle>
                                <CardDescription>
                                    <div>{`Date: ${swing.date}`}</div>
                                    <div>{`Good Swing: ${swing.goodSwing}`}</div>
                                </CardDescription>
                            </Card>
                        ))}
                    </ScrollArea>
                    <Button className="btn-gradient w-3/4 h-15 m-2" onClick={() => {alert("HERE IS A MESSAGE")}}>Add Video</Button>
                </div>
                <div className="flex flex-6 border-muted border-l-1">

                </div>
            </div>
        </div>
    )
}