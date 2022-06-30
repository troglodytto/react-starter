import { useState } from 'react';

export default function App() {
  const [thisState] = useState('Somethgin');
  return <div className="App">{thisState}</div>;
}
