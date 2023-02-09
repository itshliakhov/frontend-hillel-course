import '../components/Card.css';

function Card() {

    const getFullName = (obj) => {
        return `${obj.firstName} ${obj.lastName}`;
    }

    const user = {
        firstName: "Daniil",
        lastName: "Shliakhov",
        profession: "React Developer",
        hardSkills: "HTML, CSS, JavaScript",
        softSkills: "Organizational, Communicative, Team-working person"
    }


    return (
        <div className={"card"}>
            <h1>Hi, I am: {getFullName(user)} </h1>
            <h2>My profession is: {user.profession}</h2>
            <h3>My Hard Skills are: {user.hardSkills}</h3>
            <h4>And my Soft Skills are: {user.softSkills}</h4>
        </div>
    )
}

export default Card;