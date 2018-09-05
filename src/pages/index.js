import React from "react"
import moment from "moment"
import {amortizationSchedule} from "amortization"


class IndexPage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            principal: 39138.15,
            rate: 2.9,
            term: 5,
            date: moment("9/26/2018", "M/D/YYYY"),
        }

        this.onChange = this.onChange.bind(this)

    }

    onChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {

        const {principal, term, rate} = this.state
        const payments = amortizationSchedule(principal, term, rate)

        return (

            <div>

                <h1>Loan Amortization Calculator</h1>

                <form>

                    <label>Principal</label>
                    <input name="principal" onChange={this.onChange}></input>

                    <label>Rate</label>
                    <input name="rate" onChange={this.onChange}></input>

                    <label>Term</label>
                    <input name="term" onChange={this.onChange}></input>

                    <label>Date</label>
                    <input name="date" onChange={this.onChange}></input>

                </form>

                <table>

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Balance</th>
                            <th>Payment</th>
                            <th>Principal</th>
                            <th>Interest</th>
                            <th>Total Principal</th>
                            <th>Total Interest</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payments.map(
                            payment => {
                                return (
                                    <tr key={payment.paymentNumber}>
                                        <td>{this.state.date.add(payment.paymentNumber - 1, "months").format("MM/DD/YYYY")}</td>
                                        <td>{payment.principalBalance}</td>
                                        <td>{payment.payment}</td>
                                        <td>{payment.principalPayment}</td>
                                        <td>{payment.interestPayment}</td>
                                        <td>{this.state.principal - payment.principalBalance}</td>
                                        <td>{payment.accInterest}</td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>

                </table>

            </div>

        )

    }

}


// export
export default IndexPage
