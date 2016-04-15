function __param (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = __param;
}

exports.__param = __param;