type FormationDate = {
  start: string;
  end?: string;
}

export type FormationType = {
  title: string;
  description: string;
  url?: string;
  photo: string;
  date: FormationDate
}

export type FormationProps = {
  dataTestid: string;
  data: FormationType;
}
