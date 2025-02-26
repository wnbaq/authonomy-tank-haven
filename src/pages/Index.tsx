
import React from 'react';
import TankViewer3D from '@/components/TankViewer3D';
import CameraView from '@/components/CameraView';
import StatusPanel from '@/components/StatusPanel';
import CruiseSettings from '@/components/CruiseSettings';
import Map from '@/components/Map';

const Index = () => {
  return (
    <div className="min-h-screen bg-tank-950 p-4">
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-2rem)]">
        {/* Left Column - 3D View and Status */}
        <div className="col-span-3 space-y-4">
          <div className="h-[60%]">
            <TankViewer3D />
          </div>
          <div className="h-[35%]">
            <CruiseSettings />
          </div>
        </div>

        {/* Center Column - Camera Views */}
        <div className="col-span-6 grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <CameraView title="Front Camera" />
            <CameraView title="Rear Camera" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CameraView title="Left Camera" />
            <CameraView title="Right Camera" />
          </div>
        </div>

        {/* Right Column - Status and Controls */}
        <div className="col-span-3 space-y-4">
          <StatusPanel />
          <div className="bg-tank-800/50 rounded-lg p-4 h-[400px]">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
