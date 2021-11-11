import React from "react";

const PlayControl = (props) => {
    return (
        <div>
            <label>Act</label>
            <select onChange={e => props.setAct(e.target.value)}>
                {props.data.acts.map((a, index) => <option value={index}>{a.name}</option>)}
            </select>
            <label>Scene</label>
            <select onChange={e => props.setScene(e.target.value)}>
                {props.act !== null &&
                    props.data.acts[props.act].scenes.map((s, index) => <option value={index}>{s.name}</option>)}
            </select>
            <label>Character</label>
            <select onChange={e => props.setCharacter(e.target.value)}>
                <option value="" selected></option>
                {props.data.persona.map((p, index) => <option value={p.player}>{p.player}</option>)}
            </select>
        </div>
    )
    
}

export default PlayControl;