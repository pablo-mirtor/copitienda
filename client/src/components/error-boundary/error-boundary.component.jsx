import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
            hasErrored: false
        };
    }
    static getDerivedStateFromError(error){
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render(){
        if(this.state.hasErrored){
            return <div> Algo ha fallado </div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;