import { Link } from 'react-router-dom';
import FilterTitle from './FilterTitle';
import "./Home.css"


const Home = (props) => {

    return (
        <div id="fill">
            <div id="home-box">
                <h2>Play Browser</h2>
                {props.isLoading() && // https://reactjs.org/docs/conditional-rendering.html
                    <img src="spinner.gif" alt="loading"/>
                }
                {!props.isLoading() &&
                    <form>
                        <label>Title</label>
                        <FilterTitle title={props.title} filterPlays={props.filterPlays}/>
                        <Link to="/comp4513-a1/browse" className="link-btn">Search Plays</Link>
                        <Link to="/comp4513-a1/browse" className="link-btn" onClick={props.clearFilter}>View All</Link>
                    </form>
                }
                <p>Image: <a href="https://unsplash.com/photos/nz-UtZz81fI">Unsplash</a> |
                    Spinner: <a href="https://icons8.com/preloaders/en/circular">Preloaders.net</a></p>
            </div>
        </div>
        );
}

export default Home;