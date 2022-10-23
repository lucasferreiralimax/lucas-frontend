export type ProjectType = {
  title: string;
  url: string;
  repo: string;
  photo: string;
  description: string;
}

export type ProjectProps = {
  dataTestid: string;
  data: ProjectType;
}
