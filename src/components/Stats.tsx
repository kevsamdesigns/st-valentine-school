import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 800, suffix: "+", label: "Students" },
  { value: 30, suffix: "+", label: "Teachers" },
  { value: 7, suffix: "", label: "Streams" },
  { value: 22000, suffix: "+", label: "Alumni" },
];

const useCounter = (target: number, active: boolean, duration = 1800) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return n;
};

const StatItem = ({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) => {
  const n = useCounter(value, active);
  return (
    <div className="text-center">
      <p className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-2">
        {n.toLocaleString()}{suffix}
      </p>
      <p className="text-primary-foreground/80 uppercase tracking-widest text-sm">{label}</p>
    </div>
  );
};

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};
