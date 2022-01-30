const path = require('path')

// Paths for src (custom code), public (static assets) and build (production build) folders
module.exports = {
    src: path.resolve(__dirname, '../src'),
    build: path.resolve(__dirname, '../build'),
    public: path.resolve(__dirname, '../public'),
}