import React from "react"

// components
import Logo from "./Logo"

// styles
import "../scss/BuiltBy.scss"


const BuiltBy = () => {

    return (

        <div className="built-by">
            <span>built by</span>
            <a href="https://bradgarropy.com">
                <Logo/>
            </a>
        </div>

    )

}


// export
export default BuiltBy
