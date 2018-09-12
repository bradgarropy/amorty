module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-sass",
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "ubuntu mono: 400,700",
                ],
            },
        },
    ],
}
