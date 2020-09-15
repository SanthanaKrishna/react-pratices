// just an async helper
function fakeAPICall() {
    return new Promise(resolve => {
        setTimeout(resolve, 300)
    })
}

function SearchForm() {
    const [inputVal, setInputVal] = React.useState("")
    const [query, setQuery] = React.useState("")
    const inputRef = React.useRef("")
    const [callCount, setCallCount] = React.useState(0)
    const timeoutId = React.useRef()

    function handleChange(e) {
        setInputVal(e.target.value)
        // mimic the value so we can access
        // the latest value in our API call
        inputRef.current = e.target.value
    }

    React.useEffect(() => {
        // if the user keeps typing, stop the API call!
        clearTimeout(timeoutId.current)
        // don't make an API call with no data
        if (!inputVal.trim()) return
        // capture the timeoutId so we can
        // stop the call if the user keeps typing
        timeoutId.current = setTimeout(() => {
            // grab our query, but store it in state so
            // I can show it to you below in the example 😄
            setQuery(inputRef.current)
            fakeAPICall()
                // here we pass a callback so we get the current callCount value
                // from the useState hook's setter function
                // we use a Ref for timeoutId to avoid this same problem
                .then(() => setCallCount(callCount => callCount + 1))
        }, 800)
    }, [inputVal])

    return (
        <div>
            <h2>Type in this Box ⬇️</h2>
            <input onChange={handleChange} value={inputVal} />
            <p>Current Data: {inputVal}</p>
            <p>Query Sent: {query}</p>
            <p>Calls Done: {callCount}</p>
        </div>
    )
}

render(SearchForm)