export default {
    mode: "development", devtool: "inline-source-map",

    entry: ["./src/App.tsx"],
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    module: {
        rules: [

            {test: /\.tsx?$/, loader: "ts-loader"},

            {
                test: /\.scss$/, use: [
                    {loader: "style-loader"},
                    {loader: "css-modules-typescript-loader"},
                    {loader: "css-loader", options: {modules: true}},
                    {loader: "sass-loader"},
                ]
            },

        ]
    }
};