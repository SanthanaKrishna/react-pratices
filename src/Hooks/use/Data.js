import React, { use } from 'react'

export default function Data({ url, shouldFetch }) {
  let data = 'Default Data';

  if (shouldFetch) {
    data = use(fetch(url).then(res => res.json()));
  }

  // to trigger error boundary - passing error
  // const data = use(Promise.reject('Error'));
  //we can pass context to use hooks
  //use(Context)  
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
