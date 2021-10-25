const Box = ({boxName,id,setItems,isChecked}) => {
    // console.log('boxName',boxName);
    // console.log('isChecked',isChecked);
    return (  
        <div id={id}>
            <label htmlFor="input">{boxName}</label>
            <input type="checkbox" name="input"  onClick={(e)=>setItems(id)} defaultChecked={isChecked}/>
        </div>
    );
}
 
export default Box;