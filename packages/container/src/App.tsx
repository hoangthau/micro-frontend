import './App.css';

import App2 from 'app2/App2Index';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

const app2RoutingPrefix = 'app2';

function App1() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path={`/${app2RoutingPrefix}/*`} element={<App2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App1;
