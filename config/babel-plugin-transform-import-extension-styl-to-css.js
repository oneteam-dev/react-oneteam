// TODO:
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    manipulateOptions: function manipulateOptions(opts) {
      opts.resolveModuleSource = function (source) {
        return source.replace('.styl', '.css');
      };
    }
  };
};
