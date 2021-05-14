import React from 'react';

import './styles.scss';

const Modal = ({ ...props }) => {

    return (
        <div className="background">
            <div className="modal">
                <div className="header">
                    <button onClick={
                        () => { props.onClose() }
                    }>X</button>
                </div>
                <div className="image" style={{
                    backgroundImage: `url(${props.props.flag})`
                }} >
                </div>
                <div className="modal-info">
                    <div className="info-column">
                        <span className="info">Country: {props.props.name}</span>
                        <span className="info">Alpha2Code: {props.props.alpha2Code}</span>
                        <span className="info">Capital: {props.props.capital}</span>
                        <span className="info">Region: {props.props.region}</span>
                        <span className="info">Population: {props.props.population}</span>
                    </div>
                    <div className="info-column">
                        <span className="info">Lat: {props.props.latlng[0]} Lng: {props.props.latlng[1]}</span>
                        <span className="info">Current Time:  {props.props.timezones}</span>
                        <span className="info">Borders:  {props.props.borders} </span>
                        <span className="info">Currencies:  {props.props.currencies.map(index => index.name)}</span>
                        <span className="info">Official languages:  {props.props.languages.map(index => index.name)}</span>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default Modal