require("dotenv").config()


module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "amorty",
                short_name: "amorty",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "minimal-ui",
                icon: "src/icons/morty-head.png",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "ubuntu mono: 400,700",
                ],
            },
        },
        {
            resolve: "gatsby-plugin-sass",
        },
    ],
}
