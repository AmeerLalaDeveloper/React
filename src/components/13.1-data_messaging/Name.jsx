const Name = ({names}) => {
    return (  
        <div>
            {
                names.map(name=>{

                    return <span style={{display:'block',margin:'1rem'
                ,fontSize:'20px'}}>Name is : {name}</span>
                })
            }
        </div>
    );
}
 
export default Name;