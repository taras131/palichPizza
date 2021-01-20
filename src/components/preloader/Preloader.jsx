import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => {
    return(
        <ContentLoader className = "pizza-block"
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#f09124"
            {...props}
        >
            <circle cx="140" cy="135" r="135" />
            <rect x="4" y="277" rx="6" ry="6" width="270" height="24" />
            <rect x="4" y="310" rx="6" ry="6" width="270" height="84" />
            <rect x="113" y="404" rx="18" ry="18" width="158" height="39" />
            <rect x="13" y="412" rx="0" ry="0" width="73" height="24" />
            <rect x="113" y="305" rx="0" ry="0" width="1" height="5" />
        </ContentLoader>
    )
}

export default Preloader