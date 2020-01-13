module.exports = function (module) {
    return function (/* some_params */) {
        let args = [module.filename].concat([].slice.call(arguments));

        console.log.apply(console, args);
    };
};
