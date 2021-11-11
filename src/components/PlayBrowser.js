import Header from "./Header";
import FavoritesList from "./FavoritesList"
import Filters from "./Filters"
import PlayList from "./PlayList"
import PlayInfo from "./PlayInfo";
import PlayDetails from "./PlayDetails";

import "./PlayBrowser.css"

const PlayBrowser = (props) => {
    return (
        <div id="play-browser">
            <Header closeCurrent={props.closeCurrent}/>
            <FavoritesList getFavFunctions={props.getFavFunctions} setCurrent={props.setCurrent}/>
            {!props.single_view &&
                <Filters title={props.title} filterPlays={props.filterPlays} clearFilter={props.clearFilter}/>
            }
            {!props.single_view &&
                <PlayList favFuncs={props.getFavFunctions()} plays={props.plays} sortPlays={props.sortPlays} setCurrent={props.setCurrent}/>
            }
            {props.single_view &&
                <PlayInfo current={props.current} closeCurrent={props.closeCurrent} favFuncs={props.getFavFunctions()}/>
            }
            {props.single_view &&
                <PlayDetails current={props.current}/>
            }
            
        </div>
    );
}

export default PlayBrowser;