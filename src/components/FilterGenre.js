// todo: not harde code this
const FilterGenre = (props) => {
    return ( <select onChange={e => props.filterPlays("genre", e.target.value)}>
        <option default></option>
        <option value="comedy">Comedy</option>
        <option value="tragedy">Tragedy</option>
        <option value="history">History</option>
    </select>
    );
}

export default FilterGenre;