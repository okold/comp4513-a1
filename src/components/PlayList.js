import "./PlayList.css"

const PlayList = (props) => {
    return (
        <div id="play-list">
        <h2>Play List</h2>
            <table id="play-data">
                <thead>
                    <tr>
                        <td>Title</td><td>Year</td><td className="thin-col">Fav</td><td className="thin-col">View</td>

                </tr>
                </thead>
                <tbody>
                    { props.plays.map(p => {
                        return (
                        <tr>
                            <td>{p.title}</td>
                            <td className="thin-col">{p.likelyDate}</td>
                            {props.favFuncs.isFav(p) && 
                                <td className="thin-col" onClick={e => props.favFuncs.removeFromFavs(p)}>&#128420;</td>
                            }
                            {!props.favFuncs.isFav(p) &&
                                <td className="thin-col" onClick={e => props.favFuncs.addToFavs(p)}>&#9825;</td>
                            }
                            <td className="thin-col">View</td>
                        </tr>)} ) }
                </tbody>
            </table>
            {props.plays.length === 0 &&
                        <p>No matches found!</p>
                    }
        </div>
    );
}

export default PlayList;