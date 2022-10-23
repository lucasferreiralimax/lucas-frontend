type FormationDate = {
  start: string;
  end?: string;
}

export type FormationType = {
  translate: string;
  url?: string;
  photo: string;
  date: FormationDate
}

export type FormationProps = {
  dataTestid: string;
  data: FormationType;
}
