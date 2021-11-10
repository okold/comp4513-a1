import "./PlayList.css"

const PlayList = (props) => {
    return (
        <div id="play-list">
            <table id="play-data">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Year</td>
                        <td></td><td></td>

                </tr>
                </thead>
                <tbody>

                    { props.getPlayList().map(p => {
                        return (
                        <tr>
                            <td>{p.title}</td>
                            <td>{p.likelyDate}</td>
                            <td onClick={e => props.addToFavs(p)}>HRT</td>
                            <td>View</td>
                        </tr>)} ) }
                </tbody>
            </table>
           
        </div>
    );
}

export default PlayList;