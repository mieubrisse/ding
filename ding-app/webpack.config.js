"use strict"

// Utilities for getting path stuff
const path = require('path');

// Generate HTML file automatically
const htmlPlugin = require('html-webpack-plugin');


const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: SRC_DIR + '/main.tsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    
    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ],
        loaders: [
            // Convert all JS files to ES5
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ]
    },
    
    plugins: [
        new htmlPlugin({
            template: path.resolve(SRC_DIR, 'index.html'),
            title: "Ding",
        }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // See https://www.typescriptlang.org/docs/handbook/react-&-webpack.html for more info
    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    */
};