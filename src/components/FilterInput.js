const FilterInput = (props) => {
    return  <input defaultValue={props.title} onChange={e => props.filterPlays(props.type, e.target.value)}></input>;
}

export default FilterInput;