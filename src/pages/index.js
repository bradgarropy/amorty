import React from "react"
import parse from "date-fns/parse"
import addMonths from "date-fns/add_months"
import {amortizationSchedule} from "amortization"

// components
import AmortizationTable from "../components/AmortizationTable"
import AmortizationForm from "../components/AmortizationForm"


class IndexPage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            amount: 39138.15,
            rate: 2.9,
            term: 5,
            date: parse("9/26/2018"),
        }

        this.onChange = this.onChange.bind(this)

    }

    onChange(event) {

        const {name, value, type} = event.target

        type === "number" ?
            this.setState({[name]: parseFloat(value)})
            :
            this.setState({[name]: value})

    }

    render() {

        const {amount, term, rate, date} = this.state

        let schedule = amortizationSchedule(amount, term, rate)
        schedule.forEach(element => {
            element.date = addMonths(date, element.paymentNumber - 1)
            element.totalPrincipal = amount - element.principalBalance
        })

        return (

            <div>

                <h1>Loan Amortization Calculator</h1>

                <AmortizationForm
                    amount={amount}
                    rate={rate}
                    term={term}
                    date={date}
                    onChange={this.onChange}
                />

                <AmortizationTable schedule={schedule}/>

            </div>

        )

    }

}


// export
export default IndexPage
