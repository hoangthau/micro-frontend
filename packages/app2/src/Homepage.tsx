import NameContextProvider from 'library/NameContextProvider';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Homepage() {
  const ctx = React.useContext(NameContextProvider);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ backgroundColor: '#C9EEFF', padding: 50 }}>
            <div style={{ marginBottom: 20 }}>
              Hello again {ctx.name}. This is app2. The button &amp; context used is from components
              app.
            </div>
            <div>
              <Link to="/">Home</Link>
            </div>
          </div>
        }
        index
      />
    </Routes>
  );
}

export default Homepage;
