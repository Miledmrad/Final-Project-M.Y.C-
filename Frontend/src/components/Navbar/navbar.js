import React,{useState} from "react";
import "../Navbar/navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";


function Navbar({isLoggedIn, username, onLogout}) {
    const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.trim() === '') {
      setSuggestions([]);
    } else {
      setSuggestions(getSuggestions(newSearchTerm));
    }
  };

  const handleSearch = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
  const encodedSearchTerm = encodeURIComponent(lowercasedSearchTerm);
     
   if(lowercasedSearchTerm.trim().length === 0){
    toast('Please Enter a search term')
    return;
   }
  const navigationMap = {
    'avast': '/Avastpage',
    'smadav': '/smadav',
    'iobit': '/iobitpage',
    'auslog': '/auslogpage',
    'gridinsoft': '/gridinpage',
    'propresenter': '/propresenter',
    'hitpaw': '/hitpaw',
    'wincam': '/wincam',
    'zortam': '/zortam',
    'windows 10': '/ospage',
    'windows 11': '/win11',
    'windows 7': '/win7',
    'windows 7 sp1': '/win7sp1',
    'windows 8 pro': '/win8',
    'jobs': '/tutorialpage',
    'method': '/method',
    'screenshots on dell': '/dellcomputer',
    'monitor your child': '/monitor',
    'solving tools': '/prob-solution',

  };

  const pageToNavigate = navigationMap[lowercasedSearchTerm];

  if (pageToNavigate) {
    navigate(`${pageToNavigate}?query=${encodedSearchTerm}`);
  } else {
    toast(`No matching page for searchTerm`);
  }

  setSearchTerm('');
  setSuggestions([]);
};
  
  

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const getSuggestions = (input) => {
    const allSuggestions = [
        'Auslog', 'Avast', 'Smadav', 'IObit', 'GridinSoft',
        'Propresenter', 'Hitpaw', 'wincam', 'Zortam', 'ColorPicker', 
        'Windows 10', 'Windows 11', 'Windows 7', 'windows 7 sp1', 'windows 8 pro', 
        'Jobs', 'Method', 'Monitor Your Child', 'ScreenShots On Dell', 'Solving Tools', 
        'Jobs', 'Method', 'Monitor Your Child', 'ScreenShots On Dell', 'Solving Tools', 
      ];
    const lowercasedInput = input.toLowerCase();
    return allSuggestions.filter(name => name.toLowerCase().includes(lowercasedInput));
  };
  

    return (
        <div className="navbar-container">
            <div className="profile-dropdown">
                {isLoggedIn ? (
                    <>
                        <span className="fs-4">Welcome {username}</span>
                        <button className="btn btn-sm btn-secondary mx-2 fs-5" onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="animated-link">
                            Login
                        </Link>
                        <Link to="/register" className="animated-link">
                            &nbsp; Register
                        </Link>
                    </>
                )}
            </div>
            <div className="text-container">
                <div className="searchBar">
                <input id="searchBar" placeholder="Search for app" type="text" 
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}/>
                <button className="btn btn-small  searchbutton" onClick={handleSearch}><CiSearch className="searchIcons"/> </button>
                </div>
                {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
                <h1 className="text">Welcome to M.Y.C Software</h1>
            </div>
            <div className="logo">
                <Link to="/">M.Y.C Software</Link>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <NavLink
                            exact
                            to="/virus"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Anti-Virus
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/multimedia"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Multimedia
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/operating-system"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Operating System
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/tutorial"
                            activeClassName="active-link"
                            className="nav-link"
                        >
                            Tutorials
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
