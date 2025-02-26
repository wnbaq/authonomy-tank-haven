
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden p-6 bg-white/80 backdrop-blur-lg border-tank-200/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-tank-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4 text-tank-600">{icon}</div>
        <h3 className="text-lg font-semibold text-tank-800 mb-2">{title}</h3>
        <p className="text-tank-600 text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
