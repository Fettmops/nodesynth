// Generated by CoffeeScript 1.10.0
(function() {
  var Combiner, Common,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Common = require('./common');

  Combiner = (function(superClass) {
    extend(Combiner, superClass);

    function Combiner(left1, right1, method) {
      this.left = left1;
      this.right = right1;
      this.method = method;
    }

    Combiner.prototype.valueAt = function(time) {
      return this.method(this.left.valueAt(time), this.right.valueAt(time));
    };

    Combiner.add = function(left, right) {
      return new Combiner(left, right, function(a, b) {
        return a + b;
      });
    };

    Combiner.subtract = function(left, right) {
      return new Combiner(left, right, function(a, b) {
        return a - b;
      });
    };

    Combiner.multiply = function(left, right) {
      return new Combiner(left, right, function(a, b) {
        return a * b;
      });
    };

    Combiner.divide = function(left, right) {
      return new Combiner(left, right, function(a, b) {
        return a / b;
      });
    };

    Combiner.exponent = function(left, right) {
      return new Combiner(left, right, function(a, b) {
        return Math.pow(a, b);
      });
    };

    Combiner.modulo = function(left, right) {
      return new Combiner(left, right, function(a, b) {
        return a % b;
      });
    };

    Combiner.mix = function(left, right) {
      return new Combiner(left, right, function(a, b) {
        var z;
        a = (a + 1) / 2;
        b = (b + 1) / 2;
        z = a < 0.5 && b < 0.5 ? 2 * a * b : 2 * (a + b) - (2 * a * b) - 1;
        return (z * 2) - 1;
      });
    };

    return Combiner;

  })(Common);

  module.exports = Combiner;

}).call(this);

//# sourceMappingURL=combiner.js.map
