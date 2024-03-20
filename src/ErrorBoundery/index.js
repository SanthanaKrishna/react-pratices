import React, { Component } from 'react'
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

class Error extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary fallback={<h2>Something went wrong....</h2>}>
                    <Hero heroName="batman" />
                </ErrorBoundary>

                <ErrorBoundary fallback={<h2>Something went wrong....</h2>}>
                    <Hero heroName="Superman" />
                </ErrorBoundary>

                <ErrorBoundary fallback={<h2>Something went wrong....</h2>}>
                    <Hero heroName="joker" />
                </ErrorBoundary>
            </div>
        )
    }
}

export default Error;