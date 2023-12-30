// Layout.js
import React from 'react';

const Layout = ({ children, textColor, bgColor }) => {
  return (
    <div className={`text-${textColor} bg-${bgColor}`}>
      {/* Your common layout structure */}
      {children}
    </div>
  );
};

export default Layout;