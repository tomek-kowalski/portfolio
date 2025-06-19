import classes from "./skillitemgrid.module.css";
import SkillItem from "../Skillitem/SkillItem";

export default function SkillsGrid({skills}) {

    return <ul className={classes.skillitemgrid}>
        {skills.map(skill => 
        <li key={skill.id}>
            <SkillItem {...skill}/>
        </li>)}
    </ul>

}