import logo from "@/assets/logo.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Compassion Academy home">
      <img
        src={logo}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
      />
      <span className="font-display text-lg leading-none tracking-tight">
        Compassion <span className="text-primary">Academy</span>
      </span>
    </a>
  );
}
