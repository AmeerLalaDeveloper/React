import { Link } from "react-router-dom";

const Tie = () => {

    return (  
        <div>
              <Link to='/products/tie'>Tie</Link>
            <Link to="/products/beautifulljacket">Jacket</Link>
            <Link to="/products/jeans">Jeans</Link>
            <Link to="/products/style">Hat</Link>
        </div>
    );
}
 
export default Tie;