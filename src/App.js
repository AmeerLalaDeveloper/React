import './App.css';
// import EX1 from './components/3.1-boxes/EX1'
// import Quiz from './components/3.2-quiz/Quiz'
// import EX4_1 from './components/4.1-buttons/EX4_1';
import Card from './components/4.2-cards/Card';
import Buttons from './components/4.2-cards/Buttons';
function App() {

  return (
    <div className="App">
      {/* <EX1></EX1> */}
        {/* <Quiz></Quiz> */}
        {/* <EX4_1 /> */}
        <Card img ="https://source.unsplash.com/random" title="img1" description="First Image" >
          <Buttons></Buttons>
          </Card>
        <Card  img ="https://source.unsplash.com/weekly?water
" title="img2" description="SEcond Image" >
         <Buttons></Buttons>
          </Card>
        <Card  img ="https://source.unsplash.com/daily" title="img3" description="Third Image" >
         <Buttons></Buttons>
          </Card>

    </div>
  );
}

export default App;
