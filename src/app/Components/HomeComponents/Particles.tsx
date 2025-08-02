"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";

export function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#a800ab");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setColor(resolvedTheme === "dark" ? "#a800ab" : "#a800ab");
  }, [resolvedTheme]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 h-screen w-full overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={50}
        color={color}
        refresh={false}
        staticity={30}
      />
    </div>
  );
}
