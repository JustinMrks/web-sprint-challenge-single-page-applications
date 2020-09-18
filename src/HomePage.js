import React from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

const HomePage = () => {
    return( 
        <div id='buttonHolder'>
            <Link to='/pizza' style={{textDecoration:'none', color:'black'}}>Pizza Time?</Link>
        </div>
    )
}

export default HomePage