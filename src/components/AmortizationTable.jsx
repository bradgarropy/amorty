import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"


const AmortizationTable = ({periods}) => {

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
                {periods.map(
                    period => {

                        const {
                            number,
                            date,
                            balance,
                            payment,
                            principal,
                            interest,
                            totalPrincipal,
                            totalInterest,
                        } = period

                        return (
                            <tr key={number}>
                                <td>{format(date, "MM/DD/YYYY")}</td>
                                <td>{balance}</td>
                                <td>{payment}</td>
                                <td>{principal}</td>
                                <td>{interest}</td>
                                <td>{totalPrincipal}</td>
                                <td>{totalInterest}</td>
                            </tr>
                        )

                    }
                )}
            </tbody>

        </table>

    )

}


AmortizationTable.propTypes = {
    periods: PropTypes.arrayOf(PropTypes.object).isRequired,
}


// export
export default AmortizationTable
