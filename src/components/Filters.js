import FilterInput from './FilterInput';
import FilterGenre from './FilterGenre';
import "./Filters.css"


const Filters = (props) => {
    return (
        <div id="filter-block">
            <h2>Filters</h2>
            <form id="filter-form">
                <h3>Title</h3>
                <FilterInput type="title" title={props.title} filterPlays={props.filterPlays}/>
                <h3>Year</h3>
                <label>Start</label>
                <FilterInput type="start" filterPlays={props.filterPlays}/>
                <label>End</label>
                <FilterInput type="end" filterPlays={props.filterPlays}/>
                <h3>Genre</h3>
                <FilterGenre filterPlays={props.filterPlays}/>
                <button type="reset" onClick={props.clearFilter}>Clear Filters</button>
            </form>
        </div>
    );
}

export default Filters;