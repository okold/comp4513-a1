import "./FavoritesList.css"

const FavoritesList = (props) => {
    return (
        <div id="fav-list">
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    { props.getFavFunctions().getFavList().map(p => { return <tr>
                        <td>{p.title}</td>
                        <td onClick={e => props.getFavFunctions().removeFromFavs(p)}>X</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default FavoritesList;