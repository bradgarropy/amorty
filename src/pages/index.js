import React from "react"
import parse from "date-fns/parse"
import addMonths from "date-fns/add_months"
import {amortizationSchedule} from "amortization"

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

        const {errors} = this.state

        if(!errors) {
            this.setState({show: true})
        }

    }

    validate(name) {

        return function() {

            const value = this.state[name]
            let errors = {...this.state.errors}

            if(value <= 0 || isNaN(value)) {
                errors[name] = `${name} error`
            }
            else {
                delete errors[name]
            }

            this.setState({errors})

        }

    }

    render() {

        const {amount, term, rate, date, show} = this.state

        let schedule = null
        let periods = null

        if(show) {

            schedule = amortizationSchedule(amount, term, rate)

            periods = schedule.map(
                period => {

                    const {
                        paymentNumber,
                        principalBalance,
                        payment,
                        principalPayment,
                        interestPayment,
                        accInterest,
                    } = period

                    return({
                        number: paymentNumber,
                        date: addMonths(date, paymentNumber - 1),
                        balance: principalBalance.toFixed(2),
                        payment: payment.toFixed(2),
                        principal: principalPayment.toFixed(2),
                        interest: interestPayment.toFixed(2),
                        totalPrincipal: (amount - principalBalance).toFixed(2),
                        totalInterest: accInterest.toFixed(2),
                    })

                }
            )

        }

        return (

            <main className="index-page">

                <h1>Loan Amortization Calculator</h1>

                <AmortizationForm
                    amount={amount}
                    rate={rate}
                    term={term}
                    date={date}
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
