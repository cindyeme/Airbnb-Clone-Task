"use client";

import React, { useState, useEffect } from "react";
import Loader from "./Loader";

interface RouterMountingProps {
  children: React.ReactNode;
}

const RouterMounting: React.FC<RouterMountingProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <Loader />;

  return <>{children}</>;
};

export default RouterMounting;
