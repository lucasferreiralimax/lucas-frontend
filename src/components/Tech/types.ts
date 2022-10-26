export type TechType = {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url: string;
}

export type TechProps = {
  show?: string[];
}
