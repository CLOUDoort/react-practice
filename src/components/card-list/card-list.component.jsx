import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props
        return(
            <div>
                {monsters.map((element) => (
                    <div key={element.name}>
                            <h1>{element.name}</h1>
                    </div>
                ))} 
            </div>
        )
    }
}

export default CardList