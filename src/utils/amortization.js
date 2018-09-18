import addMonths from "date-fns/add_months"
import {amortizationSchedule} from "amortization"


function amortizationPeriods(amount, term, rate, date) {

    const schedule = amortizationSchedule(amount, term, rate)

    const periods = schedule.map(
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

    return periods

}


// exports
export default amortizationPeriods
