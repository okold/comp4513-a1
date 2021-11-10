const FavSet = (props) => {
    return (
        <div>
            <h2>Favourites</h2>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td className="thin-col">Del</td>
                    </tr>
                </thead>
                <tbody>
                    { props.favs.set.map(p => { return <tr>
                        <td>{p.title}</td>
                        <td className="thin-col" onClick={e => props.removeFromFavs(p)}>X</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default FavSet;