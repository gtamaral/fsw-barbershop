"use client";
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
var avatar_1 = require("./ui/avatar");
var badge_1 = require("./ui/badge");
var card_1 = require("./ui/card");
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var sheet_1 = require("./ui/sheet");
var image_1 = require("next/image");
var button_1 = require("./ui/button");
var cancel_booking_1 = require("../_actions/cancel-booking");
var sonner_1 = require("sonner");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var alert_dialog_1 = require("./ui/alert-dialog");
var BookingItem = function (_a) {
    var booking = _a.booking;
    var _b = react_1.useState(false), isDeleteLoading = _b[0], setIsDeleteLoading = _b[1];
    var isBookingConfirmed = date_fns_1.isFuture(booking.date);
    var handleCancelClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsDeleteLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, cancel_booking_1.CancelBooking(booking.id)];
                case 2:
                    _a.sent();
                    sonner_1.toast.success("Reserva cancelada com sucesso!");
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsDeleteLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(booking.service.price);
    return (React.createElement(sheet_1.Sheet, null,
        React.createElement(sheet_1.SheetTrigger, { asChild: true },
            React.createElement(card_1.Card, { className: "min-w-full" },
                React.createElement(card_1.CardContent, { className: "py-0 flex px-0" },
                    React.createElement("div", { className: "flex flex-col gap-2 py-5 flex-[3] pl-5" },
                        React.createElement(badge_1.Badge, { variant: isBookingConfirmed ? "default" : "secondary", className: "w-fit" }, isBookingConfirmed ? "Confirmado" : "Finalizado"),
                        React.createElement("h2", { className: "font-bold" }, booking.service.name),
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement(avatar_1.Avatar, { className: "h-6 w-6" },
                                React.createElement(avatar_1.AvatarImage, { src: booking.barbershop.imageUrl })),
                            React.createElement("h3", { className: "text-sm" }, booking.barbershop.name))),
                    React.createElement("div", { className: "flex flex-col items-center justify-center px-3 flex-1 border-l border-solid border-secondary" },
                        React.createElement("p", { className: "text-sm capitalize" }, date_fns_1.format(booking.date, "MMMM", {
                            locale: locale_1.ptBR
                        })),
                        React.createElement("p", { className: "text-2xl" }, date_fns_1.format(booking.date, "dd")),
                        React.createElement("p", { className: "text-sm" }, date_fns_1.format(booking.date, "hh:mm")))))),
        React.createElement(sheet_1.SheetContent, { className: "px-0" },
            React.createElement(sheet_1.SheetHeader, { className: "px-5 text-left pb-6 border-b border-solid border-secondary" },
                React.createElement(sheet_1.SheetTitle, null, "Informa\u00E7\u00F5es da reserva")),
            React.createElement("div", { className: "px-5" },
                React.createElement("div", { className: "relative h-[180px] w-full mt-6" },
                    React.createElement(image_1["default"], { src: "/barbercard.png", fill: true, style: {
                            objectFit: 'contain'
                        }, alt: booking.barbershop.name }),
                    React.createElement("div", { className: "w-full absolute bottom-4 left-0 px-5" },
                        React.createElement(card_1.Card, { className: "" },
                            React.createElement(card_1.CardContent, { className: "p-3 flex gap-2" },
                                React.createElement(avatar_1.Avatar, null,
                                    React.createElement(avatar_1.AvatarImage, { src: booking.barbershop.imageUrl })),
                                React.createElement("div", null,
                                    React.createElement("h2", { className: "font-bold" }, booking.barbershop.name),
                                    React.createElement("h3", { className: "text-xs" }, booking.barbershop.address)))))),
                React.createElement(badge_1.Badge, { variant: isBookingConfirmed ? "secondary" : "default", className: "w-fit mt-3 mb-6" }, isBookingConfirmed ? "Confirmado" : "Finalizado"),
                React.createElement(card_1.Card, null,
                    React.createElement(card_1.CardContent, { className: "p-3 gap-3 flex flex-col" },
                        React.createElement("div", { className: "flex justify-between" },
                            React.createElement("h2", { className: "font-bold" }, booking.service.name),
                            React.createElement("h3", { className: "font-bold text-sm" }, formattedPrice)),
                        React.createElement("div", { className: "flex justify-between" },
                            React.createElement("h3", { className: "text-gray-400" }, "Data"),
                            React.createElement("h4", { className: "text-sm" }, date_fns_1.format(booking.date, "dd 'de' MMMM", {
                                locale: locale_1.ptBR
                            }))),
                        React.createElement("div", { className: "flex justify-between" },
                            React.createElement("h3", { className: "text-gray-400 text-sm" }, "Hor\u00E1rio"),
                            React.createElement("h4", { className: "text-sm" }, date_fns_1.format(booking.date, "hh:mm"))),
                        React.createElement("div", { className: "flex justify-between" },
                            React.createElement("h3", { className: "text-gray-400" }, "Barbearia"),
                            React.createElement("h4", { className: "text-sm" }, booking.barbershop.name)))),
                React.createElement(sheet_1.SheetFooter, { className: "flex-row gap-3 mt-6 pb-8 " },
                    React.createElement(sheet_1.SheetClose, { asChild: true },
                        React.createElement(button_1.Button, { className: "w-full", variant: "secondary" }, "Voltar")),
                    React.createElement(alert_dialog_1.AlertDialog, null,
                        React.createElement(alert_dialog_1.AlertDialogTrigger, { asChild: true },
                            React.createElement(button_1.Button, { disabled: !isBookingConfirmed || isDeleteLoading, className: "w-full ", variant: "destructive" },
                                isDeleteLoading && (React.createElement(lucide_react_1.Loader2, { className: "mr-2 h-4 w-4 animate-spin" })),
                                "Cancelar reserva")),
                        React.createElement(alert_dialog_1.AlertDialogContent, { className: "w-[90%]" },
                            React.createElement(alert_dialog_1.AlertDialogHeader, null,
                                React.createElement(alert_dialog_1.AlertDialogTitle, null, "Voc\u00EA tem certeza que vai cancelar?"),
                                React.createElement(alert_dialog_1.AlertDialogDescription, null, "Uma vez cancelado, n\u00E3o tem como voltar atr\u00E1s.")),
                            React.createElement(alert_dialog_1.AlertDialogFooter, { className: "flex-row gap-3" },
                                React.createElement(alert_dialog_1.AlertDialogCancel, { className: "w-full mt-0" }, "Voltar"),
                                React.createElement(alert_dialog_1.AlertDialogAction, { disabled: isDeleteLoading, className: "w-full", onClick: handleCancelClick },
                                    isDeleteLoading && (React.createElement(lucide_react_1.Loader2, { className: "mr-2 h-4 w-4 animate-spin" })),
                                    "Confirmar")))))))));
};
exports["default"] = BookingItem;
