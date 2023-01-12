const SearchBar = () => {
    return (
        <form className="flex gap-0">
            <input className="search-bar" type="text" name="query" placeholder="Enter the items or restuarant to search"/>
            <button className="button" type="button">Search</button>
        </form>
    )
}

export default SearchBar