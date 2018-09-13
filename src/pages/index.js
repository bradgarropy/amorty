import React from "react"
import parse from "date-fns/parse"
import isEmpty from "lodash.isempty"
import amortizationPeriods from "../utils/amortization"

// components
import AmortizationTable from "../components/AmortizationTable"
import AmortizationForm from "../components/AmortizationForm"

// styles
import "../scss/IndexPage.scss"


class IndexPage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            amount: 30000.0,
            rate: 3.0,
            term: 5,
            date: parse(new Date()),
            periods: {},
            show: false,
            errors: {},
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(event) {

        const {name, type} = event.target
        let {value} = event.target

        switch(type) {
            case "text":
                break
            case "number":
                value = parseFloat(value)
                break
            case "date":
                value = parse(value)
                break
        }

        this.setState({[name]: value}, this.validate(name))

    }

    onSubmit(event) {

        event.preventDefault()

        const {amount, term, rate, date, errors} = this.state

        if(isEmpty(errors)) {

            const periods = amortizationPeriods(
                amount,
                term,
                rate,
                date
            )

            this.setState({
                periods,
                show: true,
            })
        }

    }

    validate(name) {

        return function() {

            const value = this.state[name]
            let errors = {...this.state.errors}

            if(value <= 0 || isNaN(value)) {
                errors[name] = "Enter a positive number."
            }
            else {
                delete errors[name]
            }

            this.setState({errors})

        }

    }

    render() {

        const {amount, term, rate, date, periods, show, errors} = this.state

        return (

            <main className="index-page">

                <h1>Loan Amortization Calculator</h1>

                <AmortizationForm
                    amount={amount}
                    rate={rate}
                    term={term}
                    date={date}
                    errors={errors}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />

                {show && <AmortizationTable periods={periods}/>}

            </main>

        )

    }

}


// export
export default IndexPage
