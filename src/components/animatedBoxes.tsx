import React, { useState, useEffect, useRef } from "react";

interface BoxState {
  id: number;
  isPurple: boolean;
}

const AnimatedBoxes: React.FC = () => {
  const gridSize = 12;
  const totalBoxes = gridSize * gridSize;
  const numberOfPurples = 10;

  const [boxes, setBoxes] = useState<BoxState[]>(() =>
    Array.from({ length: totalBoxes }, (_, i) => ({
      id: i,
      isPurple: false,
    }))
  );

  const previousPurples = useRef<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate new unique purple box IDs
      const newPurpleIds = new Set<number>();
      while (newPurpleIds.size < numberOfPurples) {
        const randomId = Math.floor(Math.random() * totalBoxes);
        newPurpleIds.add(randomId);
      }

      // Update boxes: only newPurpleIds are purple, others are white
      setBoxes((prevBoxes) =>
        prevBoxes.map((box) => ({
          ...box,
          isPurple: newPurpleIds.has(box.id),
        }))
      );

      // Store current purple set for next round
      previousPurples.current = newPurpleIds;
    }, 1200); // slower interval (1.2 seconds)

    return () => clearInterval(interval);
  }, [totalBoxes]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="relative">
        <div
          className="grid gap-1 p-6 bg-white rounded-2xl shadow-2xl"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            background: "linear-gradient(145deg, #ffffff, #f8fafc)",
          }}
        >
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`
                w-6 h-6 rounded-sm transition-all duration-1000 ease-in-out transform
                ${
                  box.isPurple
                    ? "bg-gradient-to-br from-purple-500 to-purple-700 scale-110 shadow-md"
                    : "bg-white hover:bg-gray-100 scale-100"
                }
                border border-gray-100
              `}
              style={{
                transitionDelay: `${Math.random() * 150}ms`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl -z-10 animate-pulse" />
      </div>
    </div>
  );
};

export default AnimatedBoxes;
