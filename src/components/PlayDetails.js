import React from 'react';

import './PlayDetails.css'

class PlayDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mode: "details"}

        this.setMode=this.setMode.bind(this);
    }

    setMode(new_mode) {
        this.setState({mode: new_mode});
    }

    render() {
        if (this.state.mode === "details") {
            return (
                <div>
                    <div className="button-bar">
                        <button className="current-mode">Details</button>
                        <button>Characters</button>
                        <button>Text</button>
                    </div>
                    <h2>Play Details</h2>
                    <div id="play-details">
                        <p>Likely Date:</p>
                        <p>{this.props.current.likelyDate}</p>
                        <p>Genre:</p>
                        <p>{this.props.current.genre}</p>
                        <p>Link:</p>
                        <a href={this.props.current.wiki} target="_blank" rel="noreferrer">Wiki</a>
                        <p>Link:</p>
                        <a href={this.props.current.gutenberg} target="_blank" rel="noreferrer">Gutenberg</a>
                        <p>Link:</p>
                        <a href={this.props.current.shakespeareOrg} target="_blank" rel="noreferrer">Shakespeare.org</a>
                        <p>Description:</p>
                        <p>{this.props.current.desc}</p>
                    </div>
                </div>
            )
        }
        return <div><p>Invalid mode... You shouldn't be seeing this??</p></div>
    }
}

export default PlayDetails;