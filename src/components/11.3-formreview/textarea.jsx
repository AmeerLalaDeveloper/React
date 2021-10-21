const TextArea = ({onsubmit}) => {
    return ( 
         <div className="form-control">
               <textarea name="textarea" id="" cols="30" rows="10" onChange={(e)=>{
                   onsubmit(e.target.value)
               }}></textarea>
        </div>
     );
}
 
export default TextArea;