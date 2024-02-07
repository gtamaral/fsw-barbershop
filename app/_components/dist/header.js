"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var card_1 = require("./ui/card");
var button_1 = require("./ui/button");
var lucide_react_1 = require("lucide-react");
var react_1 = require("next-auth/react");
var sheet_1 = require("./ui/sheet");
var side_menu_1 = require("./side-menu");
var link_1 = require("next/link");
var Header = function () {
    var _a = react_1.useSession(), data = _a.data, status = _a.status;
    var handleLogoutClick = function () {
        react_1.signOut();
    };
    var handleLoginClik = function () {
        react_1.signIn("google");
    };
    return (React.createElement(card_1.Card, null,
        React.createElement(card_1.CardContent, { className: "p-5 flex justify-between flex-row items-center" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(image_1["default"], { src: "/logo.png", alt: "logo fsw", height: 18, width: 120 })),
            React.createElement(sheet_1.Sheet, null,
                React.createElement(sheet_1.SheetTrigger, { asChild: true },
                    React.createElement(button_1.Button, { variant: "outline", size: "icon", className: "h-8 w-8" },
                        React.createElement(lucide_react_1.MenuIcon, { size: 16 }))),
                React.createElement(sheet_1.SheetContent, { className: "p-0" },
                    React.createElement(side_menu_1["default"], null))))));
};
exports["default"] = Header;
