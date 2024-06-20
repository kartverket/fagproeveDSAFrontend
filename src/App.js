import { Box, Header, Footer} from "@kvib/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./Main"
import { Admin } from "./Admin";

function App() {
  return (
      <Box bg="#d6d3cb">
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/admin" element={<Admin/>}/>
              </Routes>
              <Footer/>
          </Router>
      </Box>
  );
}

export default App;
