import "./FavoritesList.css"

const FavoritesList = (props) => {
    return (
        <div id="fav-list">
            <h2>Favourites</h2>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td className="thin-col">Del</td>
                    </tr>
                </thead>
                <tbody>
                    { props.getFavFunctions().getFavList().map(p => { return <tr>
                        <td>{p.title}</td>
                        <td className="thin-col" onClick={e => props.getFavFunctions().removeFromFavs(p)}>X</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default FavoritesList;