import React from 'react';
import PlayControl from './PlayControl';

import './PlayDetails.css'

class PlayDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "details",
            has_more: "false",
            loading: "false",
            data: {},
            act: 0, 
            scene: 0,
            character: "",
            seach_word: ""
        }

        this.setMode=this.setMode.bind(this);
        this.setAct=this.setAct.bind(this);
        this.setScene=this.setScene.bind(this);
        this.setCharacter=this.setCharacter.bind(this);
        this.setSearchWord=this.setSearchWord.bind(this);
        this.highlight=this.highlight.bind(this);
    }

    async componentDidMount() {
        if (this.props.current.filename !== "") {
            this.setState({loading: true})
            try {
                let data = localStorage.getItem(this.props.current.id);
                if (data) {
                  data = JSON.parse(data);
                }
                else {
                  const response = await fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" + this.props.current.id);
                  data = await response.json();
                  localStorage.setItem(this.props.current.id, JSON.stringify(data));
                }
                this.setState({has_more: true, data: data, loading: false});
              }
              catch {
                console.error("Failed to load play information");
                this.setState({loading: false});
              }
        }
        
    }

    setMode(new_mode) {
        this.setState({mode: new_mode});
    }

    setAct(num) {
        this.setState({act: num, scene: 0, character: ""});
    }

    setScene(num) {
        this.setState({scene: num, character: ""})
    }

    setCharacter(name) {
        this.setState({character: name})
    }

    setSearchWord(str) {
        this.setState({seach_word: str})
    }

    // dummy function... not enough time to finish it
    highlight(str) {
        return str;
    }

    createButtonBar(current_mode) {
        return (
            <div>
                {current_mode === "details" &&
                    <button className="current-mode">Details</button>
                }
                {current_mode !== "details" &&
                    <button onClick={e => this.setMode("details")}>Details</button>
                }
                {this.state.has_more === true && current_mode === "characters" &&
                    <button className="current-mode">Characters</button>
                }
                {this.state.has_more === true && current_mode !== "characters" &&
                    <button onClick={e => this.setMode("characters")}>Characters</button>
                }
                {this.state.has_more === true && current_mode === "text" &&
                    <button className="current-mode">Text</button>
                }
                {this.state.has_more === true && current_mode !== "text" &&
                    <button onClick={e => this.setMode("text")}>Text</button>
                }
                {this.state.loading === true &&
                    <span>Loading more play info...</span>
                }
            </div>
        );
    }

    render() {
        if (this.state.mode === "details") {
            return (
                <div className="scrollable">
                    {this.createButtonBar("details")}
                    <h2>Play Details</h2>
                    <div class="details">
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
        if (this.state.mode === "characters") {
            return (
                <div className="scrollable">
                    {this.createButtonBar("characters")}
                    <h2>Characters</h2>
                    <ul>
                        {this.state.data.persona.map(p => <li><strong>{p.player},</strong>{p.desc}</li>)}
                    </ul>
                </div>
            )
        }
        // i know this is horrible but it's 10pm and it works?
        if (this.state.mode === "text") {
            return (
                <div className="scrollable">
                    {this.createButtonBar("text")}
                    <PlayControl 
                        data={this.state.data} 
                        act={this.state.act} 
                        scene={this.state.scene}
                        setAct={this.setAct} 
                        setScene={this.setScene} 
                        setCharacter={this.setCharacter}
                        setSearchWord={this.setSearchWord}    
                        />
                    <h2 className="serif">{this.state.data.title}</h2>
                    <h3 className="serif">{this.state.data.acts[this.state.act].name}</h3>
                    <h4 className="serif">{this.state.data.acts[this.state.act].scenes[this.state.scene].name}</h4>
                    <p className="serif">{this.state.data.acts[this.state.act].scenes[this.state.scene].title}</p>
                    <p className="serif">{this.state.data.acts[this.state.act].scenes[this.state.scene].stageDirection}</p>
                    {this.state.data.acts[this.state.act].scenes[this.state.scene].speeches.map(s => {
                        if (this.state.character === "" || this.state.character === s.speaker) {
                            return (
                            <div className="speech">
                                <p className="serif"><strong>{s.speaker}</strong></p>
                                {s.lines.map(l => <p className="serif">{this.highlight(l)}</p>)}
                            </div>
                        )}
                        else return null})}
                </div>
            )
        }
        return <div><p>Invalid mode... You shouldn't be seeing this??</p></div>
    }
}

export default PlayDetails;