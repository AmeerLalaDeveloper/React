import { Link } from "react-router-dom";
const Header = () => {
    return (  
        <div style={{width:'100vw',background:'gray'}}>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            
        </div>
    );
}
 
export default Header;