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

  var user = new _userModel.default({
    username: req.body.username.toLowerCase(),
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  });
  user.save(function (error) {
    if (error) {
      if (error.code === 11000) {
        return res.status(403).json({
          message: 'Username is already taken'
        });
      }

      return res.status(500).json({});
    }

    return res.status(201).json();
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

  if (_stringUtil.default.isEmpty(body.first)) {
    errors += 'First name is required.';
  }

  if (_stringUtil.default.isEmpty(body.last)) {
    errors += 'Last name is required.';
  }

  return {
    isValid: _stringUtil.default.isEmpty(errors),
    message: errors
  };
}