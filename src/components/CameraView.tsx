
import React from 'react';

interface CameraViewProps {
  title: string;
}

const CameraView = ({ title }: CameraViewProps) => {
  return (
    <div className="relative bg-tank-900 rounded-lg overflow-hidden">
      <div className="absolute top-2 left-2 text-white/80 text-sm font-medium">
        {title}
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-tank-400 text-sm">No Signal</div>
      </div>
    </div>
  );
};

export default CameraView;
