import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch () {
        this.setState({ hasError: true });
    }

    render () {
        if (this.state.hasError) {
            return (
                <pre>Something went wrong!</pre>
            );
        }

        return this.props.children;
    }
}
