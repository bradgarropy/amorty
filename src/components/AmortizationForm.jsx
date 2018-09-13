import React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"

// styles
import "../scss/AmortizationForm.scss"


const AmortizationForm = ({amount, rate, term, date, errors, onChange, onSubmit}) => {

    return (

        <form
            className="amortization-form"
            onSubmit={onSubmit}
        >

            <div className="amortization-form-element">

                <label>Principal</label>

                <input
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={onChange}
                />

                {errors.amount && <p>{errors.amount}</p>}

            </div>

            <div className="amortization-form-element">

                <label>Rate</label>

                <input
                    name="rate"
                    type="number"
                    value={rate}
                    onChange={onChange}
                />

                {errors.rate && <p>{errors.rate}</p>}

            </div>

            <div className="amortization-form-element">

                <label>Term</label>

                <input
                    name="term"
                    type="number"
                    value={term}
                    onChange={onChange}
                />

                {errors.term && <p>{errors.term}</p>}

            </div>

            <div className="amortization-form-element">

                <label>Date</label>

                <input
                    name="date"
                    type="date"
                    value={format(date, "YYYY-MM-DD")}
                    onChange={onChange}
                />

                {errors.date && <p>{errors.date}</p>}

            </div>

            <button type="submit">
                Calculate
            </button>

        </form>

    )

}


AmortizationForm.propTypes = {
    amount: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    term: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}


// export
export default AmortizationForm
