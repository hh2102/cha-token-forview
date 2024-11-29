"use client";

import React from 'react';

interface FixedAsideProps {
  children: React.ReactNode;
}

const FixedAside: React.FC<FixedAsideProps> = ({ children }) => {
  return (
    <div className="relative">
      <aside
        className="sticky p-4 top-4 w-[360px] transition-all duration-300"
        style={{
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'auto',
        }}
      >
        {children}
      </aside>
    </div>
  );
};

export default FixedAside;

