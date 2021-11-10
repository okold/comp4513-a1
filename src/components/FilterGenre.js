// i know i shouldn't hard code this but i'm PRESSED FOR TIME
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