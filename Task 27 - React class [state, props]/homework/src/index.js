import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card  } from "./containers/Card";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card firstName={"Daniil"} lastName={"Shliakhov"} />
  </React.StrictMode>
);

