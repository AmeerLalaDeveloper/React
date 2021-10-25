import './App.css';

// import EX1 from './components/3.1-boxes/EX1'
// import Quiz from './components/3.2-quiz/Quiz'
// import EX4_1 from './components/4.1-buttons/EX4_1';
// import Card from './components/4.2-cards/Card';
// import Buttons from './components/4.2-cards/Buttons';
// import Counter from './components/7.1-increment/Counter'
// import Box from './components/7.2-hide_and_seek/Box';
// import LifeCycleMethods from './components/8.1.1-life-cycle-methods/LifeCycleMethods';
// import BoxAnimation from './components/8.1.2-box_animation/BoxAnimation'
// import Box from './components/8.2-changing_box/Box';
// import Spinner from './components/9.1-spinner/Spinner';
// import ChuckNorris from './components/12.1-chuck_norris/ChuckNorris';
// import Main from './components/11.1-change_color/Main'
// import EX11_2 from './components/11.2-checkbox/EX11_2';
// import EX11_3 from './components/11.3-formreview/EX11_3';
// import DataMsg from './components/13.1-data_messaging/DataMsg';
// import EX13_2 from './components/13.2-avatar/EX13_2';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/16.2-products/Header'
import BeauitfullJacket from './components/16.2-products/BeauitfullJacket';
import Tie from './components/16.2-products/Jeans';
import Products from './components/16.2-products/Products';
import Home from './components/16.2-products/Home';
import Jeans from './components/16.2-products/Jeans'
import StylishHat from './components/16.2-products/StylishHat';
function App() {

  return (
    <div className="App">

      {/* <EX1></EX1> */}
        {/* <Quiz></Quiz> */}
        {/* <EX4_1 /> */}
        {/* <Card img ="https://source.unsplash.com/random" title="img1" description="First Image" >
          <Buttons></Buttons>
          </Card>
        <Card  img ="https://source.unsplash.com/weekly?water
" title="img2" description="SEcond Image" >
         <Buttons></Buttons>
          </Card>
        <Card  img ="https://source.unsplash.com/daily" title="img3" description="Third Image" >
         <Buttons></Buttons>
          </Card> */}
    {/* <Counter></Counter> */}
    {/* <Box></Box> */}
    {/* <LifeCycleMethods/> */}
    {/* <BoxAnimation></BoxAnimation> */}
    {/* <Box></Box> */}
    {/* <Spinner></Spinner> */}
    {/* <ChuckNorris></ChuckNorris> */}
    {/* <Main></Main> */}
    {/* <EX11_2></EX11_2> */}
    {/* <EX11_3/>
     */}
     {/* <DataMsg></DataMsg> */}
     {/* <EX13_2/>
      */}
      <BrowserRouter>
     
          <Header></Header>
          <Route path='/' exact component={Home}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/products/jeans' exact component={Jeans}></Route>
          <Route path='/products/tie' exact component={Tie}></Route>
          <Route path='/products/style' exact component={StylishHat}></Route>
          <Route path='/products/beautifulljacket' exact component={BeauitfullJacket}></Route>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
