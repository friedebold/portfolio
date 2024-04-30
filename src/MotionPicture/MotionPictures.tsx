import { animate, motion, useMotionValue } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import { lightning, plane } from "./paths";
import { useFlubber } from "./use-flubber";

const paths = [plane, lightning, plane];

export default function App() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);

  React.useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 2,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex, progress]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="68" height="68" /* style={{background: 'red'}} */>
        <g transform="translate(10 10) scale(2 2)">
          <motion.path
            fill={"transparent"}
            d={path}
            color={"red"}
            stroke="#323232"
            strokeWidth={0.5}
          />
        </g>
      </svg>
    </div>
  );
}
