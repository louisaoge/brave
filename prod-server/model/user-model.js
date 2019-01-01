"use strict";

var _interopRequireDefault = require("/Users/yoke/Documents/Training/MEVN/brave/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _stringUtil = _interopRequireDefault(require("../utilities/string-util"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var userSchema = new _mongoose.default.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
  var first = _stringUtil.default.capitalize(this.first.toLowerCase());

  var last = _stringUtil.default.capitalize(this.last.toLowerCase());

  return "".concat(first, " ").concat(last);
});
userSchema.pre('save', function (next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  var unsafePassword = this.password;
  this.password = _bcrypt.default.hashSync(unsafePassword, 10);
  next();
});

var _default = _mongoose.default.model('user', userSchema);

exports.default = _default;