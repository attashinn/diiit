import {
  Award,
  BookOpenCheck,
  Briefcase,
  Code2,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  MapPin,
  Megaphone,
  Network,
  PartyPopper,
  Plane,
  ShieldCheck,
  Truck,
  UserSquare,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Award,
  BookOpenCheck,
  Briefcase,
  Code2,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  MapPin,
  Megaphone,
  Network,
  PartyPopper,
  Plane,
  ShieldCheck,
  Truck,
  UserSquare,
  Users,
  Wallet,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = iconMap[name] ?? Globe;
  return <C strokeWidth={1.5} className={className} />;
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5H16.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.9 8.7H3.8V20h3.1V8.7zM5.4 4a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zM20.2 13.5c0-3-1.6-5-4.3-5-1.4 0-2.4.8-2.8 1.5V8.7H10V20h3.1v-5.8c0-1.5.6-2.6 2-2.6s1.9 1.1 1.9 2.6V20h3.2v-6.5z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}
