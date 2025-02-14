import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";


const App = () => {
  const [search, setSearch] = useState();
  return ( 
      <div className='pattern'>
          <div className="wrapper">
            <Header/>
            <Search search={search} setSearch={setSearch}/>
          </div>
      </div>
  )
};

export default App;
