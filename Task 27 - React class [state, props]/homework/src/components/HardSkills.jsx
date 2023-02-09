export function HardSkills(props) {
    const {hardSkills} = props;
    return (
        <ul className="skills">
            {hardSkills.map(skill => {
                return (
                    <li key={skill.id}>{skill.text}</li>
                )
            })}
        </ul>
    )
}