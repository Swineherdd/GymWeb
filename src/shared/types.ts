export enum SelectedSection
{
  Home = 'home',
  About = 'about',
  Benefits = 'benefits',
  Portfolio = 'portfolio',
  Contact = 'contact',
  OurClasses = 'ourclasses',
}
export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
export interface ClassType {
    img: string;
    title: string;
    description: string;
}