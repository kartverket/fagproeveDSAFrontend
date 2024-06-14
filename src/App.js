import { Box, Header, Footer} from "@kvib/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./Main"

function App() {
  return (
      <Box bg="#d6d3cb">
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<Main/>}/>
              </Routes>
              <Footer/>
          </Router>
      </Box>
  );
}

export default App;
