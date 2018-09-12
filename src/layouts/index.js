import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components

// styles
import "../scss/main.scss"
import "../scss/IndexLayout.scss"


const IndexLayout = ({children}) => {

    return (

        <div className="index-layout">

            <Helmet>
                <title>amorty</title>
                <meta name="description" content="Sample"/>
                <meta name="keywords" content="sample, something"/>
            </Helmet>

            <img src="/images/ceo-morty.png"/>

            {children()}

            <img src="/images/intern-morty.png"/>

        </div>

    )

}

IndexLayout.propTypes = {
    children: PropTypes.func,
}

// export
export default IndexLayout
