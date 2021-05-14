import React from 'react';

import Card from '../Card'


import './styles.scss';

class Home extends React.Component {
    constructor() {
        super()

        this.container = React.createRef();
        this.state = {
            countryDetails: [],
            defaultCountryDetails: [],
            input: "",
            openButton: false,
            filter: [],
            filterRegion: [],
            filterLanguages: [],
            filterTimeZone: [],
            filterCurrencies: [],
            openRegionButton: false,
            openLanguagesButton: false,
            openTimeZonesButton: false,
            openCurrenciesButton: false
        }
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(response => {
                const region = response.map(index => (index.region))
                const filterRegion = [...new Set(region)]

                const languages = response.map(index => (index.languages.map(language => (language.name))))
                const filterLanguages = [...new Set(languages.flat(1))]

                const timezone = response.map(index => (index.timezones))
                const filterTimeZone = [...new Set(timezone.flat(1))]

                const currencie = response.map(index => (index.currencies.map(currencie => (currencie.name))))
                const filterCurrencies = [...new Set(currencie.flat(1))]

                this.setState({
                    countryDetails: response,
                    defaultCountryDetails: response,
                    filterRegion, filterLanguages,
                    filterTimeZone,
                    filterCurrencies
                })
            })

        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {

        if (
            this.container.current &&
            !this.container.current.contains(event.target)
        ) {
            this.setState({
                openButton: false,
                openRegionButton: false,
                openCurrenciesButton: false,
                openLanguagesButton: false,
                openTimeZonesButton: false
            });
        }
    };

    handleButtonClick = () => {
        this.setState({
            openButton: true
        })
    }

    handleRegionButtonClick = () => {
        this.setState({
            openRegionButton: true,
            openLanguagesButton: false,
            openTimeZonesButton: false,
            openCurrenciesButton: false
        })
    }

    handleLanguagesButtonClick = () => {
        this.setState({
            openLanguagesButton: true,
            openRegionButton: false,
            openTimeZonesButton: false,
            openCurrenciesButton: false
        })
    }

    handleTimeZonesButtonClick = () => {
        this.setState({
            openTimeZonesButton: true,
            openRegionButton: false,
            openLanguagesButton: false,
            openCurrenciesButton: false
        })
    }

    handleCurrenciesButtonClick = () => {
        this.setState({
            openCurrenciesButton: true,
            openRegionButton: false,
            openLanguagesButton: false,
            openTimeZonesButton: false,
        })
    }

    udpdateInput = (event) => {
        const filteredName = this.state.defaultCountryDetails.filter(country => {
            return country.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        const filteredCapital = this.state.defaultCountryDetails.filter(country => {
            return country.capital.toLowerCase().includes(event.target.value.toLowerCase())
        })

        const filteredalphaCode = this.state.defaultCountryDetails.filter(country => {
            return country.alpha2Code.toLowerCase().includes(event.target.value.toLowerCase())
        })

        const unfilteredList = [...filteredalphaCode, ...filteredCapital, ...filteredName]

        const filteredList = [...new Set(unfilteredList)];

        this.setState({
            countryDetails: filteredList
        })
    }

    handleFilterChange = (filter, type) => {
        if (type === "region" || type === "timezones") {
            const filtered = this.state.defaultCountryDetails.filter(country => {

                return country[type].includes(filter)
            })
            this.setState({ countryDetails: filtered })
        } else if (type === "languages") {
            const filtered = this.state.defaultCountryDetails.filter(country => {
                const filteredLanguages = country.languages.map(language => (language.name))
                if (filteredLanguages.includes(filter)) {
                    return country[type]
                }
            })
            this.setState({ countryDetails: filtered })
        } else if (type === "currencies") {
            const filtered = this.state.defaultCountryDetails.filter(country => {
                const filteredCurrencies = country.currencies.map(currency => (currency.name))
                if (filteredCurrencies.includes(filter)) {
                    return country[type]
                }
            })
            this.setState({ countryDetails: filtered })
        }
    }

    render() {

        return (
            <div>
                <div className="header">
                    <div className="dropdown" ref={this.container}>
                        <button type="button" className="dropdown-btn" onClick={this.handleButtonClick}>Filters</button>
                        {this.state.openButton && (
                            <div className="dropdown-content">

                                <div><button className="dropdown-content-b" onClick={this.handleRegionButtonClick}>Region</button>
                                    {this.state.openRegionButton && (
                                        <div className="sub-dropdown">

                                            {this.state.filterRegion.map(region => (
                                                <div className="sub-dropdown-content">
                                                    <button className="sub-dropdown-button" onClick={() => { this.handleFilterChange(region, "region") }}>{region}</button>
                                                </div>

                                            ))}

                                        </div>
                                    )}
                                </div>

                                <div><button className="dropdown-content-b" onClick={this.handleLanguagesButtonClick}>Languages</button>
                                    {this.state.openLanguagesButton && (
                                        <div className="sub-dropdown">

                                            {this.state.filterLanguages.map(language => (
                                                <div className="sub-dropdown-content">

                                                    <button className="sub-dropdown-button" onClick={() => { this.handleFilterChange(language, "languages") }}>{language}</button>
                                                </div>
                                            ))}

                                        </div>
                                    )}
                                </div>

                                <div><button className="dropdown-content-b" onClick={this.handleTimeZonesButtonClick}>Time Zones</button>
                                    {this.state.openTimeZonesButton && (
                                        <div className="sub-dropdown">

                                            {this.state.filterTimeZone.map(timezone => (
                                                <div className="sub-dropdown-content">

                                                    <button className="sub-dropdown-button" onClick={() => { this.handleFilterChange(timezone, "timezones") }}>{timezone}</button>
                                                </div>
                                            ))}

                                        </div>
                                    )}
                                </div>

                                <div><button className="dropdown-content-b" onClick={this.handleCurrenciesButtonClick}>Currencies</button>
                                    {this.state.openCurrenciesButton && (
                                        <div className="sub-dropdown">
                                            {this.state.filterCurrencies.map(currency => (
                                                <div key={currency} className="sub-dropdown-content">
                                                    <button className="sub-dropdown-button" onClick={() => { this.handleFilterChange(currency, "currencies") }}>{currency}</button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                        }
                    </div>
                    <input
                        type="search"
                        className="search"
                        onChange={(event) => this.udpdateInput(event)}
                        placeholder="Search..."
                    >
                    </input>
                </div>

                <div className="preview">
                    {!this.state.countryDetails.length && <div className="error">Sorry we couldn't find any country for that criteria</div>}
                    {
                        this.state.countryDetails.map(({ alpha3Code, ...props }) => (
                            <Card key={this.state.countryDetails.alpha3Code} {...props} />
                        ))
                    }
                </div>

            </div >
        )
    }
}

export default Home