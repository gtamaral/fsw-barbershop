"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var next_auth_1 = require("next-auth");
var header_1 = require("../_components/header");
var route_1 = require("../api/auth/[...nextauth]/route");
var navigation_1 = require("next/navigation");
var booking_item_1 = require("../_components/booking-item");
var prisma_1 = require("../_lib/prisma");
var date_fns_1 = require("date-fns");
var BookingsPage = function () { return __awaiter(void 0, void 0, void 0, function () {
    var session, bookings, confirmedBookings, finishedBookings;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, next_auth_1.getServerSession(route_1.authOptions)
                // se ele nao estive logado, redirect para a pag de login
            ];
            case 1:
                session = _a.sent();
                // se ele nao estive logado, redirect para a pag de login
                if (!(session === null || session === void 0 ? void 0 : session.user)) {
                    return [2 /*return*/, navigation_1.redirect("/")];
                }
                return [4 /*yield*/, prisma_1.db.booking.findMany({
                        where: {
                            userId: session.user.id
                        },
                        include: {
                            service: true,
                            barbershop: true
                        }
                    })];
            case 2:
                bookings = _a.sent();
                confirmedBookings = bookings.filter(function (booking) { return date_fns_1.isFuture(booking.date); });
                finishedBookings = bookings.filter(function (booking) { return date_fns_1.isPast(booking.date); });
                return [2 /*return*/, (React.createElement(React.Fragment, null,
                        React.createElement(header_1["default"], null),
                        React.createElement("div", { className: "px-5 py-7" },
                            React.createElement("h1", { className: "text-xl font-bold" }, "Agendamentos"),
                            React.createElement("h2", { className: "text-gray-400 uppercase font-bold text-sm mt-6 mb-3" }, "Confirmados"),
                            React.createElement("div", { className: "flex flex-col gap-5" }, confirmedBookings.map(function (booking) { return React.createElement(booking_item_1["default"], { key: booking.id, booking: booking }); })),
                            React.createElement("h2", { className: "text-gray-400 uppercase font-bold text-sm mt-6 mb-3" }, "Finalizados"),
                            React.createElement("div", { className: "flex flex-col gap-5" }, finishedBookings.map(function (booking) { return React.createElement(booking_item_1["default"], { key: booking.id, booking: booking }); })))))];
        }
    });
}); };
exports["default"] = BookingsPage;
