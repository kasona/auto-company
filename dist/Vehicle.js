"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = (function () {
  function Vehicle(name, chassis, color, engine, transmission, tires) {
    _classCallCheck(this, Vehicle);

    this._name = name;
    this._chassis = chassis;
    this._color = color;
    this._engine = engine;
    this._transmission = transmission;
    this._tires = tires;
  }

  _createClass(Vehicle, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }, {
    key: "chassis",
    get: function get() {
      return this._chassis;
    },
    set: function set(chassis) {
      this._chassis = chassis;
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      this._color = color;
    }
  }, {
    key: "tires",
    get: function get() {
      return this._tires;
    },
    set: function set(tires) {
      this._tires = tires;
    }
  }, {
    key: "engine",
    get: function get() {
      return this._engine;
    },
    set: function set(engine) {
      this._engine = engine;
    }
  }, {
    key: "transmission",
    get: function get() {
      return this._transmission;
    },
    set: function set(transmission) {
      this._transmission = transmission;
    }
  }]);

  return Vehicle;
})();

exports["default"] = Vehicle;
module.exports = exports["default"];