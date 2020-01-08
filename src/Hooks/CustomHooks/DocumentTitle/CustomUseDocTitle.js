import { useEffect } from 'react'

function useDocumentTitle(count) {
    console.log('count', count)
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle
