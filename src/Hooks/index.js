import React, { useEffect, useState } from 'react'

function HooksTest() {
  const storedTodos = localStorage.getItem('todos');
  const [todos, setTodos] = useState(JSON.parse(storedTodos) || []);

  return null;
}

export default HooksTest
