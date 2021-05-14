import React from 'react';

import Modal from "../Modal";

import './styles.scss';

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    setShowModal = (e) => () => {
        this.setState({
            showModal: e
        })
    }


    render() {
        return (
            <div style={{ width: "350px" }}>
                <div className="card-item" onClick={this.setShowModal(true)}>
                    <div className="image"
                        style={{
                            backgroundImage: `url(${this.props.flag})`
                        }} />
                    <div className="card-information">
                        <span className="info">Country: {this.props.name}</span>
                        <span className="info">Capital: {this.props.capital}</span>
                        <span className="info">Region: {this.props.region}</span>
                        <span className="info">Population size: {this.props.population}</span>
                    </div>


                </div>
                {this.state.showModal && <Modal onClose={this.setShowModal(false).bind(this)} showModal={this.state.showModal} props={this.props} />}
            </div>

        )
    }

}

export default Card;