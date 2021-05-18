import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

export const CountUp = () => {
    const { countUp, start, pauseResume, reset, update } = useCountUp({ duration: 5, end: 10000, startOnMount: false })
    return (
        <div>
            <div>
                <h1>{countUp}</h1>
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>Pause / Resume</button>
                <button onClick={() => update(2000)}>update</button>
            </div>
            <CountUp end={200} />
            <br />
            <CountUp end={200} duration={5} />
            <br />
            <CountUp end={200} duration={5} />
            <br />
            <CountUp start={500} end={200} duration={5} />
            <br />
            <CountUp start={1000} end={1000} duration={5} prefix='$' decimals={2} />
            <br />
            <CountUp start={1000} end={1000} duration={5} suffix='USD' decimals={2} />
        </div>
    )
}
