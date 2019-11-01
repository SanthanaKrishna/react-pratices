import React, { Component, lazy, Suspense } from 'react'
// import lazyComponent from './lazyComponent';
const LazyComponent = lazy(() => import('./lazyComponent'));

class LazyLoading extends Component {
    render() {
        return (
            <div>
                <div>another Component</div>
                <Suspense fallback={<div>loading.....</div>}>
                    <LazyComponent />
                </Suspense>
            </div >
        )
    }
}


export default LazyLoading;
