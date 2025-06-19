
import classes from './skillitem.module.css';

export default function SkillItem({ title, image,description, skills, solutions }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{description}</p>
        <p>{skills}</p>
        <p>{solutions}</p>
      </div>
    </article>
  );
}