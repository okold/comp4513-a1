import Header from "./Header";
import FavoritesList from "./FavoritesList"
import Filters from "./Filters"
import PlayList from "./PlayList"

import "./PlayBrowser.css"

const PlayBrowser = (props) => {
    return (
        <div id="play-browser">
            <Header/>
            <FavoritesList getFavFunctions={props.getFavFunctions}/>
            <Filters title={props.title} filterPlays={props.filterPlays}/>
            <PlayList addToFavs={props.getFavFunctions().addToFavs} getPlayList={props.getPlayList}/>
        </div>
    );
}

export default PlayBrowser;