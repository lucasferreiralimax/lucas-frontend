import './style.scss';
import techs from './data';

const Tech = () => {
  return (
    <section className="app-tech" data-testid="app-tech">
      {techs.map((item, index) => (
        <a href={item.url} target="_blank" key={`tech-${index}`}>
          {item.icon}
        </a>
      ))}
    </section>
  )
}

export default Tech;
