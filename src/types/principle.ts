import { DivideIcon as LucideIcon } from 'lucide-react';

export interface PrincipleType {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  highlights?: string[];
}