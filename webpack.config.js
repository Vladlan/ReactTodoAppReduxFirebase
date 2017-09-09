var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//tweak webpack to work of with environment variables
//global variables set by machines environment
//lets us check environment variable - is NODE_ENV
// (course, yon first need to set it by console: set NODE_ENV=production)
//this let us decrease weight of bundle.js file in production (see 'devtool:' in module.exports)
//webpack -p --> will decrease weight better!)
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.OldWatchingPlugin(),
        //to hide huge cascade of messages in bash after webpack -p
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new BundleAnalyzerPlugin({
            // analyzerMode: 'server',
            // analyzerHost: 'localhost',
            // analyzerPort: 9002,
            // reportFilename: 'report.html',
            // openAnalyzer: true,
            // // Log level. Can be 'info', 'warn', 'error' or 'silent'.
            // logLevel: 'info'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            app: 'app',
            applicationStyles: 'app/styles/app.scss',
            actions: 'app/actions/actions.jsx',
            reducers: 'app/reducers/reducers.jsx',
            configureStore: 'app/store/configureStore.jsx',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};