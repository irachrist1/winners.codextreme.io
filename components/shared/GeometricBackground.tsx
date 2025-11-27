interface GeometricBackgroundProps {
  variant?: "dark" | "light" | "gradient";
  intensity?: "low" | "medium" | "high";
}

export function GeometricBackground({
  variant = "dark",
}: GeometricBackgroundProps) {
  const gridSize = 80; // Unified grid size across entire site
  
  const bgClass =
    variant === "dark"
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      : variant === "gradient"
      ? "bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"
      : "bg-gradient-to-br from-gray-50 to-white";

  const gridColor = variant === "dark" ? "255,255,255" : "0,0,0";
  const gridOpacity = variant === "dark" ? 0.06 : 0.03;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className={`absolute inset-0 ${bgClass}`} />
      
      {/* CSS Grid pattern - unified 80px across site */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(${gridColor},${gridOpacity}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(${gridColor},${gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: '0 0',
        }}
      />
    </div>
  );
}
