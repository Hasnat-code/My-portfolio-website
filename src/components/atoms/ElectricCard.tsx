import { useEffect, useRef, useState } from "react";

export type TElectricColor =
  | "blue"
  | "green"
  | "pink"
  | "purple"
  | "orange"
  | "cyan";

interface IElectricCard {
  color?: TElectricColor;
  /** CSS padding of the inner content */
  padding?: string;
  /** Outer corner radius in px */
  radius?: number;
  className?: string;
  children: React.ReactNode;
}

const SPARKS = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * Card with the animated electric border, sparks, glow and a cursor-following
 * light on hover. The colour comes from the `ec-<color>` class (see globals.css).
 */
const ElectricCard: React.FC<IElectricCard> = ({
  color = "blue",
  padding,
  radius,
  className = "",
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // Pause the animations while the card is off screen (keeps the page smooth)
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const style = {
    ...(padding ? { "--ec-pad": padding } : {}),
    ...(radius ? { "--ec-r": `${radius}px` } : {}),
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      className={`electric-card-wrapper ec-${color} ${
        visible ? "" : "ec-paused"
      } ${className}`}
    >
      <span className="electric-border" />

      {SPARKS.map((n) => (
        <span key={n} className={`spark s${n}`} />
      ))}

      <div className="electric-card">
        <div className="electric-light" />
        <div className="electric-content">{children}</div>
      </div>
    </div>
  );
};

export default ElectricCard;
