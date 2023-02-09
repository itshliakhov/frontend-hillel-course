import {Component} from 'react';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const {children} = this.props;
        const {hasError} = this.state;
        if (hasError) {
            return <h1>Sorry, something went wrong! Reload the page...</h1>
        }
        return children;
    }
}
