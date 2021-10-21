const Select = ({onsubmit}) => {
    return ( 
        <div className="form-control"><label htmlFor="lastname">Last Name</label>

            <select name="select" id="" onChange={(e)=>{
               onsubmit(e.target.value)
            }} >
                <option value="20">20</option>
                <option value="30">30</option>
                </select>
                
                </div>
     );
}
 
export default Select;