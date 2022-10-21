import { ReactComponent as Github } from '../../assets/icons/github-logo.svg';
import { ReactComponent as LinkIcon } from '../../assets/icons/link-icon.svg';

import './style.scss';

type ProjectType = {
  title: string;
  url: string;
  repo: string;
  photo: string;
}

type ProjectProps = {
  dataTestid: string;
  data: ProjectType;
}

const Project = ({ dataTestid, data }: ProjectProps) => {
  return (
    <div data-testid={dataTestid} className="App-project">
      <a className="title" href={`http://${data.url}`} target="_blank">
        <h3>{data.title}</h3>
      </a>
      <a href={`http://${data.url}`} target="_blank">
        <img width="300" src={data.photo} alt={data.title} />
      </a>
      <div className="actions">
        <a href={`http://${data.url}`} target="_blank">
          <LinkIcon className="icon link" />
          <span>Link</span>
        </a>
        <a href={`http://${data.repo}`} target="_blank">
          <Github className="icon github" />
          <span>Github</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
