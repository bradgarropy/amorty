import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"


const AmortizationTable = ({schedule}) => {

    return (

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
                {schedule.map(
                    item => {

                        const {
                            paymentNumber: period,
                            date: date,
                            principalBalance: balance,
                            payment: payment,
                            principalPayment: principal,
                            interestPayment: interest,
                            totalPrincipal: totalPrincipal,
                            accInterest: totalInterest,
                        } = item

                        return (
                            <tr key={period}>
                                <td>{format(date, "MM/DD/YYYY")}</td>
                                <td>{balance.toFixed(2)}</td>
                                <td>{payment.toFixed(2)}</td>
                                <td>{principal.toFixed(2)}</td>
                                <td>{interest.toFixed(2)}</td>
                                <td>{totalPrincipal.toFixed(2)}</td>
                                <td>{totalInterest.toFixed(2)}</td>
                            </tr>
                        )

                    }
                )}
            </tbody>

        </table>

    )

}


AmortizationTable.propTypes = {
    schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
}


// export
export default AmortizationTable
