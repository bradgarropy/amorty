import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"


const AmortizationForm = ({amount, rate, term, date, onChange}) => {

    return (

        <form>

            <label>Principal</label>
            <input
                type="number"
                name="principal"
                value={amount}
                onChange={onChange}
            />

            <label>Rate</label>
            <input
                type="number"
                name="rate"
                value={rate}
                onChange={onChange}
            />

            <label>Term</label>
            <input
                type="number"
                name="term"
                value={term}
                onChange={onChange}
            />

            <label>Date</label>
            <input
                name="date"
                type="date"
                value={format(date, "YYYY-MM-DD")}
                onChange={onChange}
            />

        </form>

    )

}


AmortizationForm.propTypes = {
    amount: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    term: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
}


// export
export default AmortizationForm
