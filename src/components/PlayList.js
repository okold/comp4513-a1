import "./PlayList.css"

const PlayList = (props) => {
    return (
        <div id="play-list">
            <table id="play-header">
            <tr>
                <td>Title</td>
                <td>Year</td>
                <td></td><td></td>
            </tr>
            </table>
            <table id="play-data">
                { props.getPlayList().map(p => {
                    return (
                    <tr>
                        <td>{p.title}</td>
                        <td>{p.likelyDate}</td>
                        <td onClick={e => props.addToFavs(p)}>HRT</td>
                        <td>View</td>
                    </tr>)} ) }
            </table>
           
        </div>
    );
}

export default PlayList;