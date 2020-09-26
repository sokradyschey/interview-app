import React from 'react';


// JS to flip card on mouseover
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
                <button 
                onClick={this.flip} 
                onClick={this.flip} className={"CardContainer" + (this.state.flipped ? " flipped" : "")}>
                Flip
                </button>
        );
    }
}

export default FlipCard;