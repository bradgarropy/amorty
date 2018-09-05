import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components

// styles


const IndexLayout = ({children}) => {

    return (

        <div>

            <Helmet>
                <title>amorty</title>
                <meta name="description" content="Sample"/>
                <meta name="keywords" content="sample, something"/>
            </Helmet>

            {children()}

        </div>

    )

}

IndexLayout.propTypes = {
    children: PropTypes.func,
}

// export
export default IndexLayout
