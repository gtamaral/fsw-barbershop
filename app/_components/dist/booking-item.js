"use strict";
exports.__esModule = true;
var avatar_1 = require("./ui/avatar");
var badge_1 = require("./ui/badge");
var card_1 = require("./ui/card");
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var BookingItem = function (_a) {
    var booking = _a.booking;
    var isBookingConfirmed = date_fns_1.isFuture(booking.date);
    return (React.createElement(card_1.Card, null,
        React.createElement(card_1.CardContent, { className: "py-0 flex px-0" },
            React.createElement("div", { className: "flex flex-col gap-2 py-5 flex-[3] pl-5" },
                React.createElement(badge_1.Badge, { variant: isBookingConfirmed ? "secondary" : "default", className: "bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit" }, isBookingConfirmed ? "Confirmado" : "Finalizado"),
                React.createElement("h2", { className: "text-xl font-bold" }, booking.service.name),
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement(avatar_1.Avatar, { className: "h-6 w-6" },
                        React.createElement(avatar_1.AvatarImage, { src: booking.barbershop.imageUrl })),
                    React.createElement("h3", { className: "text-sm" }, booking.barbershop.name))),
            React.createElement("div", { className: "flex flex-col items-center justify-center px-3 flex-1 border-l border-solid border-secondary" },
                React.createElement("p", { className: "text-sm capitalize" }, date_fns_1.format(booking.date, "MMMM", {
                    locale: locale_1.ptBR
                })),
                React.createElement("p", { className: "text-2xl" }, date_fns_1.format(booking.date, "dd")),
                React.createElement("p", { className: "text-sm" }, date_fns_1.format(booking.date, "hh:mm"))))));
};
exports["default"] = BookingItem;
