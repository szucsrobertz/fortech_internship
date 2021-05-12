import React from 'react';

import './styles.scss';

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            response: {}
        }
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(response => this.setState({ response }))
    }

    render() {
        console.log(this.state.response);
        return (
            <div>
                <h1>Country</h1>
            </div>
        )
    }

}

export default Home