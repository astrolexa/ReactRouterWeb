import './css/App.css';
//import bootstrap from 'bootstrap'
import FAQ from './components/FAQ.js';
import Tour from './components/Tour.js';
import TourDetail from './components/TourDetail.js';
import TourList from './components/TourList.js';
import { Routes, Route, Link,Outlet } from "react-router-dom";
import { enable, disable, isEnabled } from 'cursor-flashlight';
enable({ size: '15vmax' });
function Home() {  
  return (
    <>
      <main>        
        <div className="bg">
          <h2 className="title">歡迎來到高雄旅遊網</h2>
          <p className="intro">港都風華，細細品味</p>
          <div className="blockBox">
            <p class="blockquotef">Kaohsiung</p>
            <p class="blockquotef">is</p>
            <p class="blockquoteb">Beautiful.</p>
            <p class="blockFooter">Beauty is everywhere. It is not that she is lacking to our eye, but our eyes which fail to perceive her.</p>  
          </div>
        </div>
      </main>    
    </>
  );
}
function Layout() {

  return (
    <>
      <div className="header"> 
        <div className="navBox">
          <nav className="nav">        
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>首頁</Link>       
          </nav>
          <nav className="nav">
            <Link to='/tour' style={{ color: 'white', textDecoration: 'none' }}>旅遊景點</Link> 
          </nav>
          <nav className="nav">
            <Link to='/faq' style={{ color: 'white', textDecoration: 'none' }}>問答區</Link> 
          </nav>      
        </div>  
      </div>
      <div className="uter">
        <Outlet/>
        <div id="MyBlog_1">
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>首頁</Link> 
        </div>
        <div id="MyBlog_2">
          <Link to='/tour' style={{ color: 'white', textDecoration: 'none' }}>旅遊景點</Link> 
        </div>
        <div id="MyBlog_3">
          <Link to='/faq' style={{ color: 'white', textDecoration: 'none' }}>問答區</Link> 
        </div>
              
      </div>
      <div className="footer">
        <p className="footerTxt_1">| HexSchool React 讀書會 | Aug. 2022 |</p>
        <p className="footerTxt_2" >Vada Chen
      </p>
      </div>      
    </>
  );
}
function App() {
  const handleToggleFlashlight = () => {
    if (isEnabled()) {
      disable()
    } else {
      enable({ size: '15vmax' })
    }
  }
  return (    
    <div className="App">
      <div id="MyBlog_4">
          太暗了嗎?  
          <button style={{ border: 'none' }}onClick={handleToggleFlashlight}> 點我開燈</button>
        </div> 
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tour" element={<Tour />} >
             <Route index element={<TourList />} />
             <Route path=":Id" element={<TourDetail />} />
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
