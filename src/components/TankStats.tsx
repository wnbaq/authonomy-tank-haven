
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatProps {
  label: string;
  value: number;
  maxValue: number;
}

const Stat = ({ label, value, maxValue }: StatProps) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-tank-400">{label}</span>
      <span className="text-tank-600 font-medium">{value}/{maxValue}</span>
    </div>
    <Progress value={(value / maxValue) * 100} className="h-1.5" />
  </div>
);

const TankStats = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-lg border-tank-200/50">
      <h3 className="text-lg font-semibold text-tank-800 mb-4">System Status</h3>
      <div className="space-y-4">
        <Stat label="Battery Level" value={85} maxValue={100} />
        <Stat label="Armor Integrity" value={95} maxValue={100} />
        <Stat label="Ammunition" value={24} maxValue={30} />
        <Stat label="Fuel Level" value={78} maxValue={100} />
      </div>
    </Card>
  );
};

export default TankStats;
