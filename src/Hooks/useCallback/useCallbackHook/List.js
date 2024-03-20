import React, { useEffect, useState } from 'react'

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //this will create a new function again again when number get updated
    setItems(getItems(1));
    //this console will trigger every time when getItems changed
    console.log('Updating Items');
  }, [getItems]);

  return items.map(item => <div key={item}>{item}</div>)
}
