export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "brink-co",
    title: "Brink Co — Agency Portfolio",
    description: "Freelance web design & development agency site. Dark theme, lime accent, Syne typography. Targeting local Pune businesses.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/nach1ket03/nachiket-brinkco",
    demo: "https://brinkco.in",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-lime-500/80 to-emerald-700/80",
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "aura-fitness",
    title: "AURA Fitness — Luxury Gym App",
    description: "Premium gym membership platform with Razorpay payments, animated UI, and a high-end aesthetic built with Next.js & Framer Motion.",
    tags: ["Next.js", "TypeScript", "Razorpay", "Framer Motion"],
    github: "https://github.com/nach1ket03/luxury-gym-app",
    featured: true,
    deviceType: "mobile",
    bgColor: "bg-linear-to-br from-slate-800/90 to-zinc-900/90",
    screenshots: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    id: "lumiere",
    title: "LUMIÈRE — Luxury Salon Site",
    description: "Elegant salon website demo showcasing high-end brand design, smooth animations, and a bespoke appointment-ready layout.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/nach1ket03/lumiere",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-rose-900/80 to-pink-800/80",
    screenshots: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "internbot",
    title: "InternBot — AI Outreach Tool",
    description: "Self-contained HTML app using the Anthropic API to help students find internships and generate cold email drafts.",
    tags: ["HTML", "Anthropic API", "Vanilla JS"],
    github: "https://github.com/nach1ket03",
    featured: true,
    deviceType: "mobile",
    bgColor: "bg-linear-to-br from-violet-600/80 to-indigo-700/80",
    screenshots: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=900&auto=format&fit=crop",
    ],
  },
];
