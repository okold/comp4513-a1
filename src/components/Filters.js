import FilterTitle from './FilterTitle';

import "./Filters.css"


const Filters = (props) => {
    return (
        <div id="filters">
            FILTERS
            <label>Title</label>
            <FilterTitle title={props.title} filterPlays={props.filterPlays}/>
        </div>
    );
}

export default Filters;