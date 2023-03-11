import { useRef, useEffect, useState } from 'react';

export default function MutableRef() {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  }

  useEffect(() => {

    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return (() => stopTimer())
  }, [])

  return (
    <>
      HookTImer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </>
  );
}
