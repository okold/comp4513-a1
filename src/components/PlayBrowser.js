import Header from "./Header";
import FavoritesList from "./FavoritesList"
import Filters from "./Filters"
import PlayList from "./PlayList"

import "./PlayBrowser.css"

const PlayBrowser = (props) => {
    return (
        <div id="play-browser">
            <Header/>
            <FavoritesList/>
            <Filters/>
            <PlayList addToFavs={props.addToFavs} getPlayList={props.getPlayList}/>
        </div>
    );
}

export default PlayBrowser;