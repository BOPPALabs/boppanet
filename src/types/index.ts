export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type ServerInfo = {
  name: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon: string;
};