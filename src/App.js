import React from 'react';
import './style.css';
import Child from './Child';

const myConext = React.createContext({ name: 'Jake', place: 'Banglore' });

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <myConext.Provider>
        <Child />
      </myConext.Provider>
    </div>
  );
}
