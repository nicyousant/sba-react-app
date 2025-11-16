import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <nav className="nav" style={{ padding: "1rem", display: "flex", gap: "1rem", position: "relative" }}>
                <Link to="/">
                    <div className="navItem">Home</div>
                </Link>
                
              <Link to="/arms">
                    <div className="navItem">Arms</div>
                </Link>
              <Link to="/back">
                    <div className="navItem">Back</div>
                </Link>
                <Link to="/chest">
                    <div className="navItem">Chest</div>
                </Link>
                <Link to="/neck">
                    <div className="navItem">Neck</div>
                </Link>
                  <Link to="/shoulder">
                    <div className="navItem">Shoulders</div>
                </Link>
                           <Link to="/waist">
                    <div className="navItem">Waist</div>
                </Link>
            </nav>

            

            {/* <ul>
                
                <li>Lower Arms</li>
             
                <li>Heart</li>
                <li>Upper Arms</li>
           
                <li>Lower Legs</li>
    
                <li>Upper Legs</li>
                <li>Waist</li>
            </ul> */}
        </>
    );
}
