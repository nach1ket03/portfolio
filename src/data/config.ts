import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/nach1ket03",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nachiket",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:nachiket@brinkco.in",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Nachiket",
  title: "MERN Stack & AI/ML Developer",
  description: "Building useful products with modern web stack",
  role: "Full Stack Developer",
  location: "Pune, IN",
  brand: "Brink Co",
  brandUrl: "https://brinkco.in",
};
