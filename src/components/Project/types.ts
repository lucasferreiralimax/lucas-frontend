export type ProjectType = {
  translate: string;
  url: string;
  repo: string;
  photo: string;
  techs?: string[];
}

export type ProjectProps = {
  dataTestid: string;
  data: ProjectType;
}
