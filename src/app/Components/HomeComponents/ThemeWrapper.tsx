"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export function ThemeWrapper() {
  return (
    <>
      <div className="fixed bottom-8 right-5 z-50">
        <ThemeToggle />
      </div>
    </>
  );
} 