const RandomButton = (props) => {
    return (
        <button className="btn btn-primary"
        onClick={(e)=>{
            e.preventDefault()
            props.click(true)
        }}>
        Get Random Joke
        </button>
      );
}
 
export default RandomButton;