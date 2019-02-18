const path = require('path');
const createSrcPath = (pathname) => path.resolve(__dirname, 'src', pathname);
const autoprefixer = require('autoprefixer');
const NormalModuleReplacementPlugin = require('webpack').NormalModuleReplacementPlugin;
const {NODE_ENV='production'} = process.env;

module.exports = {
    entry: './src/index.js',
    mode:NODE_ENV,
    output: {
        path:     path.resolve(__dirname, 'public'),
        filename: '[name].js',
    },

    resolve: {
        alias: {
            components: createSrcPath('components'),
        },
    },
    module: {
        rules: [{
            oneOf: [
                {
                    test:    [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader:  require.resolve('url-loader'),
                    options: {
                        limit: 100000,
                        name:  'static/media/[name].[hash:8].[ext]',
                    },
                },
                {
                    test:    /\.js$/,
                    exclude: /node_modules/,
                    use:     [
                        'babel-loader',
                        'eslint-loader'
                    ],
                },

                {
                    test: /\.scss$/,
                    use:  [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader:  'css-loader',
                            options: {
                                modules:        'true',
                                localIdentName:
                                    '[path][name]__[local]--[hash:base64:16]',
                            },
                        },
                        {
                            loader:  'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['ie >= 11', 'last 4 version'],
                                    })
                                ],
                                sourceMap: true,
                            },
                        },
                        {
                            loader:  'sass-loader',
                            options: {
                                modules:        'true',
                                localIdentName:
                                    '[path][name]__[local]--[hash:base64:16]',
                            },
                        }
                    ],
                },

                {
                    exclude: [/\.js$/, /\.html$/, /\.json$/],
                    loader:  require.resolve('file-loader'),
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                }
            ],
        }],
    },

    plugins: [
        new NormalModuleReplacementPlugin(/(\.*)\/-development\/(\.*)/, function (resource) {
            console.log(resource);
            resource.request = resource.request.replace('development','-'+NODE_ENV.trim());
        })
    ],
    devServer: {
        contentBase:        path.resolve(__dirname, 'public'),
        historyApiFallback: true,
        inline:             true,
        port:               3000,
    },
};
