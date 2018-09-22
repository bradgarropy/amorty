import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import BuiltBy from "./BuiltBy"

// favicon
import favicon from "../icons/morty-head.png"

// styles
import "../scss/main.scss"
import "../scss/Layout.scss"


const Layout = ({children}) => {

    return (

        <div className="layout">

            <Helmet>
                <title>amorty</title>

                <meta name="description" content="💳 morty powered loan amortization calculator"/>
                <meta name="keywords" content="gatsby, react, scss, eslint, loan, amortization, calculator"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:creator" content="@bradgarropy"/>
                <meta name="twitter:title" content="amorty"/>
                <meta name="twitter:description" content="💳 morty powered loan amortization calculator"/>
                <meta name="twitter:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_1:1,c_mpad,w_600,b_white/bradgarropy/morty-head.png"/>

                <meta property="og:url" content="https://amorty.netlify.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="amorty"/>
                <meta property="og:description" content="💳 morty powered loan amortization calculator"/>
                <meta property="og:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,h_600,b_white/bradgarropy/morty-head.png"/>

                <link rel="icon" type="image/png" href={favicon}/>
            </Helmet>

            <img src="/images/ceo-morty.png"/>

            {children}

            <BuiltBy/>
            <img src="/images/intern-morty.png"/>

        </div>

    )

}

Layout.propTypes = {
    children: PropTypes.func,
}

// export
export default Layout
