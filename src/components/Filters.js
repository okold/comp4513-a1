import FilterTitle from './FilterTitle';

import "./Filters.css"


const Filters = (props) => {
    return (
        <div id="filters">
            <h2>Filters</h2>
            <label>Title</label>
            <FilterTitle title={props.title} filterPlays={props.filterPlays}/>
        </div>
    );
}

export default Filters;