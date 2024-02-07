"use client";
"use strict";
exports.__esModule = true;
var badge_1 = require("@/app/_components/ui/badge");
var button_1 = require("@/app/_components/ui/button");
var card_1 = require("@/app/_components/ui/card");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var BarbershopItem = function (_a) {
    var barbershop = _a.barbershop;
    var router = navigation_1.useRouter();
    var handleBookingClick = function () {
        router.push("/barbershop/" + barbershop.id);
    };
    return (React.createElement(card_1.Card, { className: "min-w-[167px] max-w-[167px] rounded-2xl" },
        React.createElement(card_1.CardContent, { className: "px-1 py-0" },
            React.createElement("div", { className: "px-1 w-full h-[159px] relative" },
                React.createElement("div", { className: "absolute z-50 top-3 left-3" },
                    React.createElement(badge_1.Badge, { variant: "secondary", className: "opacity-90 flex items-center justify-between gap-1 " },
                        React.createElement(lucide_react_1.StarIcon, { size: 12, className: "fill-primary text-primary" }),
                        React.createElement("span", { className: "text-xs" }, "5,0"))),
                React.createElement(image_1["default"], { alt: barbershop.name, src: barbershop.imageUrl, fill: true, style: {
                        objectFit: "cover"
                    }, className: "rounded-2xl" })),
            React.createElement("div", { className: "px-2 pb-3" },
                React.createElement("h2", { className: "font-bold mt-3 text-ellipsis text-nowrap" }, barbershop.name),
                React.createElement("p", { className: "text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap" }, barbershop.address),
                React.createElement(button_1.Button, { className: "w-full mt-3", variant: "secondary", onClick: handleBookingClick }, "Reservar")))));
};
exports["default"] = BarbershopItem;
