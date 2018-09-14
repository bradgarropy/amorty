import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import BuiltBy from "../components/BuiltBy"

// favicon
import favicon from "../icons/morty-head.png"

// styles
import "../scss/main.scss"
import "../scss/IndexLayout.scss"


const IndexLayout = ({children}) => {

    return (

        <div className="index-layout">

            <Helmet>
                <title>amorty</title>
                <link rel="icon" type="image/png" href={favicon}/>
                <meta name="description" content="💳 morty powered loan amortization calculator"/>
                <meta name="keywords" content="gatsby, react, scss, eslint, loan, amortization, calculator"/>
            </Helmet>

            <img src="/images/ceo-morty.png"/>

            {children()}

            <BuiltBy/>
            <img src="/images/intern-morty.png"/>

        </div>

    )

}

IndexLayout.propTypes = {
    children: PropTypes.func,
}

// export
export default IndexLayout
