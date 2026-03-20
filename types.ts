export enum PageView {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  PRICING = 'PRICING',
  CONTACT = 'CONTACT',
}

export interface NavItem {
  label: string;
  view: PageView;
}

export interface PlanProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}