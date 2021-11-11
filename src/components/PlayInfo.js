import './PlayInfo.css'

const PlayInfo = (props) => {
    return (
        <div>
            <h2>{props.current.title}</h2>
            <h3>Synopsis</h3>
            <p>{props.current.synopsis}</p>
            <div id="play-controls"> 
                {props.favFuncs.isFav(props.current) && 
                    <div className="fav-button" onClick={e => props.favFuncs.removeFromFavs(props.current)}>&#128420;</div>
                                }
                {!props.favFuncs.isFav(props.current) &&
                    <div className="fav-button" onClick={e => props.favFuncs.addToFavs(props.current)}>&#9825;</div>
                                }
                <button onClick={props.closeCurrent}>Close</button>
            </div>
            
        </div>
    );
}

export default PlayInfo;