import { useMouse } from "@uidotdev/usehooks";

type MouseGradientProps = {
  darkModeValue: boolean;
  isMobile: boolean;
};

const MouseGradient = ({ darkModeValue, isMobile }: MouseGradientProps) => {
  const [mouse] = useMouse();

  // combined with mouse coordinates, made gradient dynamically follow mouse cursor
  const radial =
    !isMobile && mouse.x > 0 && mouse.y > 0
      ? `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, ${
          darkModeValue ? "rgba(14, 165, 233,0.16)" : "rgba(37, 99, 235, 0.1)"
        }, transparent 70%)`
      : "";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 transition duration-300"
      style={{
        background: radial,
      }}
    />
  );
};
export default MouseGradient;
