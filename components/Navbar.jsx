import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [armsOpen, setArmsOpen] = useState(false);
    return (
        <>
            <nav className="nav" style={{ padding: "1rem", display: "flex", gap: "1rem", position: "relative" }}>
                <Link to="/">
                    <div className="navItem">Home</div>
                </Link>
              
                
      {/* Arms dropdown toggle */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setArmsOpen(!armsOpen)}
        >
          Arms ▼
        </button>

        {armsOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "white",
              border: "1px solid #ccc",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              zIndex: 10,
            }}
          >
                   <Link to="/lower-arm" onClick={() => setArmsOpen(false)}>
              Lower Arm
            </Link>
            <Link to="/upper-arm" onClick={() => setArmsOpen(false)}>
              Upper Arm
            </Link>
     

          </div>
        )}
      </div>
      
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
