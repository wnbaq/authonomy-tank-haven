
import React from 'react';
import { Battery, Compass, RotateCcw } from 'lucide-react';

const StatusPanel = () => {
  return (
    <div className="bg-tank-800/50 rounded-lg p-4 grid grid-cols-3 gap-4">
      <div className="flex items-center gap-2 text-white/80">
        <Battery className="w-5 h-5" />
        <span>85%</span>
      </div>
      <div className="flex items-center gap-2 text-white/80">
        <Compass className="w-5 h-5" />
        <span>274°</span>
      </div>
      <div className="flex items-center gap-2 text-white/80">
        <RotateCcw className="w-5 h-5" />
        <span>Roll: 2°</span>
      </div>
    </div>
  );
};

export default StatusPanel;
