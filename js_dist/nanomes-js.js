import _asyncToGenerator from "/Users/calumk/Programming/2021/nanomes/nanomes-vue/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/calumk/Programming/2021/nanomes/nanomes-vue/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "/Users/calumk/Programming/2021/nanomes/nanomes-vue/node_modules/@babel/runtime/helpers/esm/defineProperty";
import "regenerator-runtime/runtime.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.array.concat.js";
import "regenerator-runtime";
import proxymise from "proxymise";
/** 
* The NanoMes Class is the main class to be imported into your application to allow communication with NanoMes-api
*
* @class NanoMes
* @constructor
*/

var NanoMes =
/**
* The constructior for NanoMes
* 
* constructor
* @param {Object} obj An Object comprised of a endpoint (url) and a jwt_token
*/
function NanoMes(obj) {
  var _this = this;

  _classCallCheck(this, NanoMes);

  _defineProperty(this, "operations", {
    "==": function _(operand1, operand2) {
      return operand1 == operand2;
    },
    "!=": function _(operand1, operand2) {
      return operand1 != operand2;
    },
    ">=": function _(operand1, operand2) {
      return operand1 >= operand2;
    },
    "<=": function _(operand1, operand2) {
      return operand1 <= operand2;
    }
  });

  _defineProperty(this, "maths", {
    val: 5,

    get value() {
      return this.val;
    },

    inc: function inc() {
      _this.maths.val = _this.maths.val + 1;
      return _this.maths;
    },
    dec: function dec() {
      _this.maths.val = _this.maths.val - 1;
      return _this.maths;
    }
  });

  _defineProperty(this, "Hello", {
    get: {
      sync: function sync(name) {
        return "Hello (Sync) , ".concat(name);
      },
      async: function () {
        var _async = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    setTimeout(function () {
                      resolve("Hello (Async), ".concat(name));
                    }, 100);
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function async(_x) {
          return _async.apply(this, arguments);
        }

        return async;
      }(),
      api: function () {
        var _api = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var name,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  name = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'Anne';
                  _context2.next = 3;
                  return _this.api_fetch("hello/".concat(name));

                case 3:
                  return _context2.abrupt("return", _context2.sent);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function api() {
          return _api.apply(this, arguments);
        }

        return api;
      }()
    }
  });

  _defineProperty(this, "Stations", {
    get: {
      data: null,
      // choose one, all or query
      all: function () {
        var _all = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this.api_fetch("stations");

                case 2:
                  _this.Stations.get.data = _context3.sent;
                  return _context3.abrupt("return", _this.Stations.get);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function all() {
          return _all.apply(this, arguments);
        }

        return all;
      }(),
      one: function () {
        var _one = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var docuemntId,
              _args4 = arguments;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  docuemntId = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 'x';
                  _context4.next = 3;
                  return _this.api_fetch("stations/".concat(docuemntId));

                case 3:
                  _this.Stations.get.data = _context4.sent;
                  return _context4.abrupt("return", _this.Stations.get);

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function one() {
          return _one.apply(this, arguments);
        }

        return one;
      }(),
      query: function query() {
        _this.Stations.get.data;
        return _this.Stations.get;
      },
      // choose one, all or query
      filterTemplate: function filterTemplate(slug) {
        _this.Stations.get.data = _this.Stations.get.data.filter(function (station) {
          return station.template_slug == slug;
        });
        return _this.Stations.get;
      },
      // choose one, all or query
      filterData: function filterData(parameter, operation, slug) {
        _this.Stations.get.data = _this.Stations.get.data.filter(function (station) {
          try {
            return _this.operations[operation](station.data[parameter].value.content, slug);
          } catch (_unused) {
            return false;
          }
        });
        return _this.Stations.get;
      }
    },
    post: {
      one: function () {
        var _one2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(station) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this.api_fetch("stations", 'POST', station);

                case 2:
                  return _context5.abrupt("return", _context5.sent);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function one(_x2) {
          return _one2.apply(this, arguments);
        }

        return one;
      }()
    },
    delete: {
      one: function () {
        var _one3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(station) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _this.api_fetch("stations", 'DELETE', station);

                case 2:
                  return _context6.abrupt("return", _context6.sent);

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        function one(_x3) {
          return _one3.apply(this, arguments);
        }

        return one;
      }()
    },
    query: function query(_query) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this2.api_fetch("stations/query", 'POST', _query);

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  });

  _defineProperty(this, "Operations", {
    get: {
      data: null,
      // choose one, all or query
      all: function () {
        var _all2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return _this.api_fetch("operations");

                case 2:
                  _this.Operations.get.data = _context8.sent;
                  return _context8.abrupt("return", _this.Operations.get);

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        function all() {
          return _all2.apply(this, arguments);
        }

        return all;
      }(),
      one: function () {
        var _one4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          var docuemntId,
              _args9 = arguments;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  docuemntId = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : 'x';
                  _context9.next = 3;
                  return _this.api_fetch("operations/".concat(docuemntId));

                case 3:
                  _this.Operations.get.data = _context9.sent;
                  return _context9.abrupt("return", _this.Operations.get);

                case 5:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        function one() {
          return _one4.apply(this, arguments);
        }

        return one;
      }(),
      query: function query() {
        _this.Operations.get.data;
        return _this.Operations.get;
      },
      // choose one, all or query
      filterTemplate: function filterTemplate(slug) {
        _this.Operations.get.data = _this.Operations.get.data.filter(function (operation) {
          return operation.template_slug == slug;
        });
        return _this.operation.get;
      },
      // choose one, all or query
      filterData: function filterData(parameter, operation, slug) {
        _this.Operations.get.data = _this.Operations.get.data.filter(function (operation) {
          try {
            return _this.operations[operation](operation.data[parameter].value.content, slug);
          } catch (_unused2) {
            return false;
          }
        });
        return _this.Operations.get;
      }
    },
    post: {
      one: function () {
        var _one5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(operation) {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return _this.api_fetch("operations", 'POST', operation);

                case 2:
                  return _context10.abrupt("return", _context10.sent);

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        function one(_x4) {
          return _one5.apply(this, arguments);
        }

        return one;
      }()
    },
    delete: {
      one: function () {
        var _one6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(operation) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return _this.api_fetch("operations", 'DELETE', operation);

                case 2:
                  return _context11.abrupt("return", _context11.sent);

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        function one(_x5) {
          return _one6.apply(this, arguments);
        }

        return one;
      }()
    },
    query: function query(_query2) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _this3.api_fetch("operations/query", 'POST', _query2);

              case 2:
                return _context12.abrupt("return", _context12.sent);

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    }
  });

  _defineProperty(this, "Products", {
    get: {
      data: null,
      // choose one, all or query
      all: function () {
        var _all3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return _this.api_fetch("products");

                case 2:
                  _this.Products.get.data = _context13.sent;
                  return _context13.abrupt("return", _this.Products.get);

                case 4:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        function all() {
          return _all3.apply(this, arguments);
        }

        return all;
      }(),
      one: function () {
        var _one7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
          var docuemntId,
              _args14 = arguments;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  docuemntId = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : 'x';
                  _context14.next = 3;
                  return _this.api_fetch("products/".concat(docuemntId));

                case 3:
                  _this.Products.get.data = _context14.sent;
                  return _context14.abrupt("return", _this.Products.get);

                case 5:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        function one() {
          return _one7.apply(this, arguments);
        }

        return one;
      }(),
      query: function query() {
        _this.Products.get.data;
        return _this.Products.get;
      },
      // choose one, all or query
      filterTemplate: function filterTemplate(slug) {
        _this.Products.get.data = _this.Products.get.data.filter(function (product) {
          return station.template_slug == slug;
        });
        return _this.Products.get;
      },
      // choose one, all or query
      filterData: function filterData(parameter, operation, slug) {
        _this.Products.get.data = _this.Products.get.data.filter(function (product) {
          try {
            return _this.operations[operation](product.data[parameter].value.content, slug);
          } catch (_unused3) {
            return false;
          }
        });
        return _this.Products.get;
      }
    },
    post: {
      one: function () {
        var _one8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(product) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return _this.api_fetch("products", 'POST', product);

                case 2:
                  return _context15.abrupt("return", _context15.sent);

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        function one(_x6) {
          return _one8.apply(this, arguments);
        }

        return one;
      }()
    },
    delete: {
      one: function () {
        var _one9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(product) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return _this.api_fetch("products", 'DELETE', product);

                case 2:
                  return _context16.abrupt("return", _context16.sent);

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        function one(_x7) {
          return _one9.apply(this, arguments);
        }

        return one;
      }()
    },
    query: function query(_query3) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _this4.api_fetch("products/query", 'POST', _query3);

              case 2:
                return _context17.abrupt("return", _context17.sent);

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }))();
    }
  });

  _defineProperty(this, "Orders", {
    get: {
      data: null,
      // choose one, all or query
      all: function () {
        var _all4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return _this.api_fetch("orders");

                case 2:
                  _this.Orders.get.data = _context18.sent;
                  return _context18.abrupt("return", _this.Orders.get);

                case 4:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));

        function all() {
          return _all4.apply(this, arguments);
        }

        return all;
      }(),
      one: function () {
        var _one10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
          var docuemntId,
              _args19 = arguments;
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  docuemntId = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : 'x';
                  _context19.next = 3;
                  return _this.api_fetch("orders/".concat(docuemntId));

                case 3:
                  _this.Orders.get.data = _context19.sent;
                  return _context19.abrupt("return", _this.Orders.get);

                case 5:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));

        function one() {
          return _one10.apply(this, arguments);
        }

        return one;
      }(),
      query: function query() {
        _this.Orders.get.data;
        return _this.Orders.get;
      },
      // choose one, all or query
      filterTemplate: function filterTemplate(slug) {
        _this.Orders.get.data = _this.Orders.get.data.filter(function (order) {
          return order.template_slug == slug;
        });
        return _this.Orders.get;
      },
      // choose one, all or query
      filterData: function filterData(parameter, operation, slug) {
        console.log(_this.Orders.get.data);
        _this.Orders.get.data = _this.Orders.get.data.filter(function (order) {
          try {
            console.log(order[parameter]);
            return _this.operations[operation](order[parameter], slug);
          } catch (_unused4) {
            return false;
          }
        });
        return _this.Orders.get;
      }
    },
    post: {
      one: function () {
        var _one11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(order) {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.next = 2;
                  return _this.api_fetch("orders", 'POST', order);

                case 2:
                  return _context20.abrupt("return", _context20.sent);

                case 3:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20);
        }));

        function one(_x8) {
          return _one11.apply(this, arguments);
        }

        return one;
      }()
    },
    delete: {
      one: function () {
        var _one12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(order) {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.next = 2;
                  return _this.api_fetch("orders", 'DELETE', order);

                case 2:
                  return _context21.abrupt("return", _context21.sent);

                case 3:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));

        function one(_x9) {
          return _one12.apply(this, arguments);
        }

        return one;
      }()
    },
    query: function query(_query4) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return _this5.api_fetch("orders/query", 'POST', _query4);

              case 2:
                return _context22.abrupt("return", _context22.sent);

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }))();
    }
  });

  _defineProperty(this, "Logs", {
    get: {
      data: null,
      // choose one, all or query
      all: function () {
        var _all5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  _context23.next = 2;
                  return _this.api_fetch("logs");

                case 2:
                  _this.Logs.get.data = _context23.sent;
                  return _context23.abrupt("return", _this.Logs.get);

                case 4:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee23);
        }));

        function all() {
          return _all5.apply(this, arguments);
        }

        return all;
      }(),
      one: function () {
        var _one13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
          var logId,
              _args24 = arguments;
          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  logId = _args24.length > 0 && _args24[0] !== undefined ? _args24[0] : 'x';
                  _context24.next = 3;
                  return _this.api_fetch("logs/".concat(logId));

                case 3:
                  _this.Logs.get.data = _context24.sent;
                  return _context24.abrupt("return", _this.Logs.get);

                case 5:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee24);
        }));

        function one() {
          return _one13.apply(this, arguments);
        }

        return one;
      }(),
      query: function query() {
        _this.Logs.get.data;
        return _this.Logs.get;
      },
      // choose one, all or query
      filterTemplate: function filterTemplate(slug) {
        _this.Logs.get.data = _this.Logs.get.data.filter(function (operation) {
          return operation.template_slug == slug;
        });
        return _this.operation.get;
      },
      // choose one, all or query
      filterData: function filterData(parameter, operation, slug) {
        _this.Logs.get.data = _this.Logs.get.data.filter(function (operation) {
          try {
            return _this.Logs[operation](operation.data[parameter].value.content, slug);
          } catch (_unused5) {
            return false;
          }
        });
        return _this.Logs.get;
      }
    },
    post: {
      one: function () {
        var _one14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(operation) {
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return _this.api_fetch("logs", 'POST', operation);

                case 2:
                  return _context25.abrupt("return", _context25.sent);

                case 3:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25);
        }));

        function one(_x10) {
          return _one14.apply(this, arguments);
        }

        return one;
      }()
    },
    delete: {
      one: function () {
        var _one15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(operation) {
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return _this.api_fetch("logs", 'DELETE', operation);

                case 2:
                  return _context26.abrupt("return", _context26.sent);

                case 3:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26);
        }));

        function one(_x11) {
          return _one15.apply(this, arguments);
        }

        return one;
      }(),
      all: function () {
        var _all6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.next = 2;
                  return _this.api_fetch("logs_all", 'DELETE');

                case 2:
                  return _context27.abrupt("return", _context27.sent);

                case 3:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27);
        }));

        function all() {
          return _all6.apply(this, arguments);
        }

        return all;
      }()
    },
    query: function query(_query5) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return _this6.api_fetch("logs/query", 'POST', _query5);

              case 2:
                return _context28.abrupt("return", _context28.sent);

              case 3:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28);
      }))();
    }
  });

  _defineProperty(this, "api_fetch", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(_path) {
      var _method,
          _body,
          req_options,
          req,
          _args29 = arguments;

      return regeneratorRuntime.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _method = _args29.length > 1 && _args29[1] !== undefined ? _args29[1] : 'GET';
              _body = _args29.length > 2 && _args29[2] !== undefined ? _args29[2] : {};
              req_options = {};
              req_options.method = _method;

              if (_method == 'GET') {
                req_options.headers = {
                  "Authorization": _this.auth_header_string
                };
              }

              if (_method == 'POST') {
                req_options.body = JSON.stringify(_body);
                req_options.headers = {
                  "Authorization": _this.auth_header_string
                };
              }

              if (_method == 'DELETE') {
                req_options.body = JSON.stringify(_body);
                req_options.headers = {
                  "Authorization": _this.auth_header_string,
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                };
                req_options.mode = 'cors';
              }

              _context29.next = 9;
              return fetch("".concat(_this.endpoint, "/api/v1/").concat(_path), req_options);

            case 9:
              req = _context29.sent;
              _context29.next = 12;
              return req.json();

            case 12:
              return _context29.abrupt("return", _context29.sent);

            case 13:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29);
    }));

    return function (_x12) {
      return _ref.apply(this, arguments);
    };
  }());

  this.endpoint = obj.endpoint;
  this.jwt_token = obj.jwt_token || null;
  console.log("NanoMes has started on ".concat(this.endpoint));
};

;
module.exports = proxymise(NanoMes);