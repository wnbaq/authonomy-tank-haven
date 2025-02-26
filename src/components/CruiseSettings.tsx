
import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const CruiseSettings = () => {
  return (
    <div className="bg-tank-800/50 rounded-lg p-4">
      <h3 className="text-white/80 font-medium mb-4">Cruise Mode Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-white/60">Auto Navigation</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Obstacle Avoidance</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Path Recording</span>
          <Switch />
        </div>
        <Button variant="outline" className="w-full mt-4">
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default CruiseSettings;
