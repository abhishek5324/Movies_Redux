import React,{Component} from 'react';
import '../index.css';
class Navbar extends Component {
    
    render() { 
        return ( 
            <div className="nav">
                <div className="search-container">
                    <input />
                    <button id="search-btn">search</button>
                </div>
            </div>
         );
    }
}
 
export default Navbar;