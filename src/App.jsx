import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";


const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  return ( 
      <div className='pattern'>
          <div className="wrapper">
            <Header/>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            
          </div>
      </div>
  )
};

export default App;
