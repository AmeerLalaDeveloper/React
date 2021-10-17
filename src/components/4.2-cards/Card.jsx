import './EX4_2.css'
const Card = (props) => {
    return ( 
        <div className='card'>

        
            <img src={props.img} alt="" />
        <h2 className="title">{props.title}</h2>
        <p className="des">{props.description}</p>
        {props.children?props.children:''}
        </div>
     );
}
 
export default Card;