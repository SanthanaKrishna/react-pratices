import React from 'react'
import { useState } from 'react'
import UseLocalStorage from './useLocalStorage';

function DebugValue(value) {
  const [firstName, setFirstName] = UseLocalStorage('FirstName', 'Santhana');
  const [lastNAme, setLastNAme] = useState('cook')
  return (
    <div>
      FIrst: {" "}
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <br />
      Last: {" "}
      <input value={lastNAme} onChange={e => setLastNAme(e.target.value)} />
    </div>
  )
}

export default DebugValue;
