import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import format from "date-fns/format"
import isEmpty from "lodash.isempty"

// styles
import "../scss/AmortizationForm.scss"


const AmortizationForm = ({amount, rate, term, date, errors, onChange, onSubmit}) => {

    return (

        <form
            className="amortization-form"
            onSubmit={onSubmit}
        >

            <div className={classNames(
                "amortization-form-element",
                {"amortization-form-element-error": errors.amount}
            )}>

                <label>Principal</label>

                <input
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={onChange}
                />

                {errors.amount && <p>{errors.amount}</p>}

            </div>

            <div className={classNames(
                "amortization-form-element",
                {"amortization-form-element-error": errors.rate}
            )}>

                <label>Rate</label>

                <input
                    name="rate"
                    type="number"
                    value={rate}
                    onChange={onChange}
                />

                {errors.rate && <p>{errors.rate}</p>}

            </div>

            <div className={classNames(
                "amortization-form-element",
                {"amortization-form-element-error": errors.term}
            )}>

                <label>Term</label>

                <input
                    name="term"
                    type="number"
                    value={term}
                    onChange={onChange}
                />

                {errors.term && <p>{errors.term}</p>}

            </div>

            <div className={classNames(
                "amortization-form-element",
                {"amortization-form-element-error": errors.date}
            )}>

                <label>Date</label>

                <input
                    name="date"
                    type="date"
                    value={format(date, "YYYY-MM-DD")}
                    onChange={onChange}
                />

                {errors.date && <p>{errors.date}</p>}

            </div>

            <button type="submit" disabled={!isEmpty(errors)}>
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
