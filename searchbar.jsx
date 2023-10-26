import "./searchbar.css";

const SearchBar = () => {
    return(
    <div className="Search_bar"> 
        <p> Deakin University </p>   
        <input type="search" placeholder='search' />
        <p>Post</p>
        <p>Login</p>
    </div>
    );
};

export default SearchBar;