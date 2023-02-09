import {Component} from "react";
import {HardSkills} from "../components/HardSkills";

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hardSkills: [],
        }
    }


    addSkill = (event) => {
        event.preventDefault();
        this.setState({
            hardSkills: [...this.state.hardSkills, {
                id: Math.random() * 10,
                text: event.target[0].value
            }]
        }, () => {
            event.target[0].value = ""
        })
    }

    getFullName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    }

    render() {
        const {firstName, lastName} = this.props;
        const {hardSkills} = this.state;
        const fullName = this.getFullName({firstName, lastName})
        return (
            <div className={"Card"}>
                <form action="#" onSubmit={this.addSkill}>
                    <input type="text"/>
                    <button>Add your hard skill</button>
                </form>
                <h1>Hi, I am : {fullName}</h1>
                <h2>My hard skills:</h2>
                <HardSkills hardSkills={hardSkills}/>
            </div>
        )
    }

}