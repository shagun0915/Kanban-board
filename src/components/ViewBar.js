import React from 'react'
import '../css/ViewBar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function ViewBar() {
    return (
        <div className='view'>
            <div className="view__search">
                <h5>View:</h5>
                <button>
                    <AssessmentOutlinedIcon />
                    Board
                    <ExpandMoreIcon />
                </button>
            </div>
            <div className="view__options">
                <div className="view__input d-none d-md-flex">
                    <SearchIcon style={{color: "#72777e"}} />
                    <input type="text" placeholder="Search" />
                </div>
                <FilterListOutlinedIcon /> 
                <h5>Filter</h5>
                <img height="25" src="https://img.icons8.com/windows/32/000000/sort-amount-up.png" alt="" /> 
                <h5 style={{margin: "0"}}>Sort:</h5>
                <h5 style={{marginLeft: "0", paddingLeft: "0", color: "#000000"}}>Time</h5>
                <MoreHorizIcon style={{marginLeft: "0", marginRight: "10px", color: "#72777e" }} />
            </div>
        </div>
    )
}

export default ViewBar
