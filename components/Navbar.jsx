import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="nav">
                <Link to="/">
                    <div>Main</div>
                </Link>
                <Link to="/back">
                    <div>Back Exercises</div>
                </Link>
                <Link to="/chest">
                    <div>Chest Exercises</div>
                </Link>
            </div>

            {/* <ul>
                <li>Neck</li>
                <li>Lower Arms</li>
                <li>Shoulders</li>
                <li>Heart</li>
                <li>Upper Arms</li>
           
                <li>Lower Legs</li>
    
                <li>Upper Legs</li>
                <li>Waist</li>
            </ul> */}
        </>
    );
}
