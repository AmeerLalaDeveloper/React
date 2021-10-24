const Card = ({persons}) => {
    return (  
        <div>
            {
                persons.map(person=>{
                    return <div style={{border:'1px solid gray' ,display:'flex',justifyContent:'space-between',padding:'1rem',maxWidth:'1000px',width:'500px'}}>
                        <span style={{display:'block'}}>{person.name}</span>
                        <span tyle={{display:'block'}}> {person.birthday}</span>
                        <span tyle={{display:'block'}}>{person.favoriteFoods.meats.map(item=><span>{item}</span>)}</span>
                        <span tyle={{display:'block'}}> {person.favoriteFoods.fish}</span>
                    </div>
                })
            }
        </div>
    );
}
 
export default Card;