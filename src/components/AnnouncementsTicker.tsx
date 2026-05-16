import { Megaphone } from "lucide-react";

const announcements = [
  "📢 Form 1 admissions are open — apply today!",
  "🎓 KCSE 2025 candidates: revision camp begins next week.",
  "🏆 Congratulations to our netball team — county champions!",
  "💳 Pay fees via MPESA Paybill 884060 (Account: Student Name / Adm No).",
  "📅 Visiting Day scheduled — see Upcoming Events for details.",
];

export const AnnouncementsTicker = () => (
  <div className="bg-secondary text-secondary-foreground border-y border-secondary/50 overflow-hidden">
    <div className="container flex items-center gap-4 py-2">
      <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest shrink-0">
        <Megaphone className="w-4 h-4" /> Live
      </span>
      <div className="flex-1 overflow-hidden relative">
        <div className="flex gap-12 whitespace-nowrap animate-[ticker_40s_linear_infinite]">
          {[...announcements, ...announcements].map((a, i) => (
            <span key={i} className="text-sm font-medium">{a}</span>
          ))}
        </div>
      </div>
    </div>
    <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
  </div>
);
