import React from 'react';
import Card from './Card.js';
import Back from './Back.js';

class FlipCard extends React.Component {
    constructor(props) {
        super();
        this.state = {flipped: false};
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({flipped: !this.state.flipped});
    }

    render() {
        return(
            <div onMouseEnter={this.flip}
            onMouseLeave={this.flip} 
            className={"CardContainer" + (this.state.flip ? " flipped" : "")}>
            <Card />
            </div>
        );
    }
}

export default FlipCard;