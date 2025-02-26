
import { Shield, Target, Navigation, Camera } from "lucide-react";
import TankStats from "@/components/TankStats";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-tank-50 to-tank-100">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-32 mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-tank-600 bg-tank-100 rounded-full">
          Next Generation Combat
        </div>
        <h1 className="mb-8 text-5xl font-bold tracking-tight text-tank-900 sm:text-6xl">
          Autonomous Tank
          <span className="block text-tank-600">Platform</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-tank-600">
          Advanced autonomous system with state-of-the-art technology for modern battlefield operations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-tank-900 text-white hover:bg-tank-800 transition-colors"
          >
            Request Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-tank-300 text-tank-700 hover:bg-tank-100"
          >
            Technical Specs
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-24 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Advanced Protection"
            description="Multi-layered armor system with active protection capabilities."
          />
          <FeatureCard
            icon={<Target className="w-8 h-8" />}
            title="Precision Targeting"
            description="AI-powered targeting system with thermal imaging."
          />
          <FeatureCard
            icon={<Navigation className="w-8 h-8" />}
            title="Smart Navigation"
            description="Autonomous path-finding with terrain adaptation."
          />
          <FeatureCard
            icon={<Camera className="w-8 h-8" />}
            title="360° Awareness"
            description="Comprehensive situational awareness with multi-spectral sensors."
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="max-w-xl mx-auto">
          <TankStats />
        </div>
      </section>
    </div>
  );
};

export default Index;
