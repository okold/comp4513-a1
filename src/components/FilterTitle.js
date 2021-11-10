const FilterTitle = (props) => {
    return  <input defaultValue={props.title} onChange={e => props.filterPlays("title", e.target.value)}></input>;
}

export default FilterTitle;