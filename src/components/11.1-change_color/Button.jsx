const Button = ({color,getColor}) => {

    return (
        <button onClick={(e)=>getColor(e.target.textContent)} 
        style={{background:color}}
        > {color}</button>
        
      );
}
 
export default Button;