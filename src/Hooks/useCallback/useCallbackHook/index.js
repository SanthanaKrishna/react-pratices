import React, { useCallback, useState } from 'react'
import List from './List';

function useCallbackHooks() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //this function recreated again and again
  //useCallback is same as use memo, it will avoid to re-create this method when number updated with same value
  /**diff b/w use memo and callback.
   *  useMemo - it take a function and return the value of that function
   *  useCallback - it take a function and return as a function 
   */
  // 
  const getItems = useCallback((incrementor) => {
    return [number, number + 1 + incrementor, number + 2];
  }, [number]);

  const theme = {
    backgrounfColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }
  return (
    <div style={theme}>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default useCallbackHooks
