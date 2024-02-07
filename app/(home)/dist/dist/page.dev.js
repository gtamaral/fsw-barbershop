"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;

var header_1 = require("../_components/header"); // datefns


var date_fns_1 = require("date-fns");

var locale_1 = require("date-fns/locale");

var search_1 = require("./_components/search");

var booking_item_1 = require("../_components/booking-item"); // db


var barbershop_item_1 = require("./_components/barbershop-item");

var next_auth_1 = require("next-auth");

var prisma_1 = require("../_lib/prisma");

var auth_1 = require("../_lib/auth");

function Home() {
  var _a;

  return __awaiter(this, void 0, void 0, function () {
    var session, _b, barbershops, confirmedBookings;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          return [4
          /*yield*/
          , next_auth_1.getServerSession(auth_1.authOptions)];

        case 1:
          session = _c.sent();
          return [4
          /*yield*/
          , Promise.all([prisma_1.db.barbershop.findMany({}), (session === null || session === void 0 ? void 0 : session.user) ? prisma_1.db.booking.findMany({
            where: {
              userId: session.user.id,
              date: {
                gte: new Date()
              }
            },
            include: {
              service: true,
              barbershop: true
            }
          }) : Promise.resolve([])])];

        case 2:
          _b = _c.sent(), barbershops = _b[0], confirmedBookings = _b[1];
          return [2
          /*return*/
          , // chamar prisma e pegar barbearias
          React.createElement("div", null, React.createElement(header_1["default"], null), React.createElement("div", {
            className: "px-5 pt-5"
          }, React.createElement("h2", {
            className: "text-xl font-bold"
          }, (session === null || session === void 0 ? void 0 : session.user) ? "Ol\xE1, " + ((_a = session.user.name) === null || _a === void 0 ? void 0 : _a.split(" ")[0]) : "Olá, vamos agendar um corte?"), React.createElement("p", {
            className: "capitalize text-sm text-gray-400 mt-1"
          }, date_fns_1.format(new Date(), "EEEE','d 'de' MMMM", {
            locale: locale_1.ptBR
          }))), React.createElement("div", {
            className: "px-5 mt-6"
          }, React.createElement(search_1["default"], null)), React.createElement("div", {
            className: "mt-6"
          }, confirmedBookings.length > 0 && React.createElement(React.Fragment, null, React.createElement("h2", {
            className: "pl-5 text-xs mb-3 uppercase text-gray-400 font-bold"
          }, "Agendamentos"), React.createElement("div", {
            className: "px-5 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          }, confirmedBookings.map(function (booking) {
            return React.createElement(booking_item_1["default"], {
              key: booking.id,
              booking: booking
            });
          })))), React.createElement("div", {
            className: "mt-6"
          }, React.createElement("h2", {
            className: "text-xs px-5 mb-3 uppercase text-gray-400 font-bold"
          }, "Recomendados"), React.createElement("div", {
            className: "flex gap-2 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          }, barbershops.map(function (barbershop) {
            return React.createElement(barbershop_item_1["default"], {
              key: barbershop.id,
              barbershop: barbershop
            });
          }))), React.createElement("div", {
            className: "mt-6 mb-[4.5rem]"
          }, React.createElement("h2", {
            className: "text-xs px-5 mb-3 uppercase text-gray-400 font-bold"
          }, "Populares"), React.createElement("div", {
            className: "flex gap-2 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          }, barbershops.map(function (barbershop) {
            return React.createElement(barbershop_item_1["default"], {
              key: barbershop.id,
              barbershop: barbershop
            });
          }))))];
      }
    });
  });
}

exports["default"] = Home;