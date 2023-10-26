import './App.css';
import SearchBar from './searchbar';
import Main_Photo from './unipic'; 
import Top from './top';
// import Card from './card';
import CardList from './cardlist';
import Header from './haeder';
import CardList2 from './tut';
import BottomBar from './bottom';
import Btm_section from './featured';
import Footer from './footer';
import Mid_section from './middle';
import Mid_section2 from './middle2';


function App() {
  return (
    <div>
      <SearchBar/>
      <Main_Photo/>
      <Header/>
      <Top/>
      <Header/>
      {/* <Card/> */}
      <CardList/>
      <Mid_section/>
      <Btm_section/>
      
      <CardList2/>
      <Mid_section2/>
      <BottomBar/>
      <Footer/>
    
      
    </div>
  );
}

export default App;
