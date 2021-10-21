const Input = ({onsubmit}) => {  
    return ( 
        <div className="form-control"><label htmlFor="firstname">First Name:</label>
        <input type="text" onChange={(e)=>{
                onsubmit(e.target.value)
            }}/>
            </div>
     );
}
export default Input;