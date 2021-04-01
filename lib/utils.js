"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFileExist = exports.formatName = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _xxhashjs = _interopRequireDefault(require("xxhashjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H = _xxhashjs.default.h32(0xabcd); // seed = 0xABCD


var formatName = function formatName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(name, ".").concat(H.update(name).digest().toString(16));
};

exports.formatName = formatName;

var checkFileExist = function checkFileExist(file) {
  if (!_fs.default.existsSync(file)) {
    throw new Error('File not found: ' + file);
  }
};

exports.checkFileExist = checkFileExist;