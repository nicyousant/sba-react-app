import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <nav className="nav" >
                <Link to="/">
                    <div className="navItem">Home</div>
                </Link>
                
                
              <Link to="/arms">
                    <div className="navItem">Arms</div>
                </Link>
              <Link to="/back">
                    <div className="navItem">Back</div>
                </Link>
                    <Link to="/cardio">
                    <div className="navItem">Cardio</div>
                </Link>
                <Link to="/chest">
                    <div className="navItem">Chest</div>
                </Link>
                   <Link to="/legs">
                    <div className="navItem">Legs</div>
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
                <Link to="/favorites">
  <div className="navItem">Favorites ★</div>
</Link>
            </nav>

   
        </>
    );
}
