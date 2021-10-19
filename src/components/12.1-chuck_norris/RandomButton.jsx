const RandomButton = (props) => {
    return (
      <div className="box">
          <span>Hit The Button To See Some Magic</span>
            <button className="btn btn-primary"
        onClick={(e)=>{
            e.preventDefault()
            props.click(true)
        }}>
        Get Random Joke
        </button>
      </div>
      );
}
 
export default RandomButton;