const CheckBox = ({isChecked,text,setCheckBox}) => {
    return (
       <div>
        <input type="checkbox"
         name="checkbox" id=""
        defaultChecked={isChecked}/>
        <p>{text}</p>
       </div>
      );
}
 
export default CheckBox;