import { Link } from 'react-router-dom';
import FilterInput from './FilterInput';
import "./Home.css"


const Home = (props) => {

    return (
        <div id="fill">
            <div id="home-box">
                <h2>Play Browser</h2>
                {props.loading && // https://reactjs.org/docs/conditional-rendering.html
                    <img src="spinner.gif" alt="loading"/>
                }
                {!props.loading &&
                    <form>
                        <label>Title</label>
                        <FilterInput title={props.title} type="title" filterPlays={props.filterPlays}/>
                        <Link to="/comp4513-a1/browse" className="link-btn">Search Plays</Link>
                        <Link to="/comp4513-a1/browse" className="link-btn" onClick={props.clearFilter}>View All</Link>
                    </form>
                }
            </div>
        </div>
        );
}

export default Home;