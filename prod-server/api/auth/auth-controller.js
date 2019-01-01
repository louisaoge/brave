"use strict";

var _interopRequireDefault = require("/Users/yoke/Documents/Training/MEVN/brave/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtil = _interopRequireDefault(require("../../utilities/string-util"));

var _userModel = _interopRequireDefault(require("../../model/user-model"));

function index(req, res) {
  var validation = validateIndex(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  _userModel.default.findOne({
    username: req.body.username.toLowerCase()
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(401).json();
    }

    var passwordsMatch = true;

    if (!passwordsMatch) {
      return res.status(401).json();
    }

    return res.status(200).json();
  });
}

function validateIndex(body) {
  var errors = '';

  if (_stringUtil.default.isEmpty(body.username)) {
    errors += 'Username is required.';
  }

  if (_stringUtil.default.isEmpty(body.password)) {
    errors += 'Password is required.';
  }

  return {
    isValid: _stringUtil.default.isEmpty(errors),
    message: errors
  };
}