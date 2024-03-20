import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }
}
export default ErrorBoundary;