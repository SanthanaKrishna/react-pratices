import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, { fallback = null } = { fallback: undefined }) => {
    const LazyComponent = lazy(importFunc);

    return (props) => (
        <Suspense fallback={fallback}>
            <LazyComponent {...props}
        </Suspense>
    )
}