import React, { Suspense } from 'react'
import { useState } from 'react'
import Data from './DAta';
import ErrorBoundary from '../../ErrorBoundery/ErrorBoundary';


const URLS = {
  USERS: 'https://jsonplaceholder.typicode.com/users',
  POSTS: 'https://jsonplaceholder.typicode.com/posts',
  COMMENTS: 'https://jsonplaceholder.typicode.com/comments'

}

export default function UseHook() {
  const [url, setUrl] = useState(URLS);
  return (
    <div>
      <ErrorBoundary fallback={<h2>Something went wrong....</h2>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Data url={url} shouldFetch />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
