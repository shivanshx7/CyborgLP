import React, { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 2000;
    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  return (
    <span className="stats-hud__value">
      {display.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export default function StatsHUD() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "FOOTFALL",            value: 175000, suffix: "+" },
    { label: "COLLEGES PARTICI…",   value: 2500,   suffix: "+" },
    { label: "PRIZE POOL (₹ LAKHS)", value: 40,    suffix: "L+" },
  ];

  return (
    <aside
      ref={ref}
      className="stats-hud"
      aria-label="Techfest statistics"
    >




      <ul className="stats-hud__list">
        {stats.map(({ label, value, suffix }) => (
          <li key={label} className="stats-hud__item">
            <span className="stats-hud__item-label">{label}</span>
            <span className="stats-hud__item-bar" aria-hidden="true" />
            {visible
              ? <AnimatedCounter target={value} suffix={suffix} />
              : <span className="stats-hud__value">0{suffix}</span>
            }
          </li>
        ))}
      </ul>

      
    </aside>
  );
}
