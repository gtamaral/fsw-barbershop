"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var avatar_1 = require("./ui/avatar");
var button_1 = require("./ui/button");
var sheet_1 = require("./ui/sheet");
var link_1 = require("next/link");
var react_1 = require("next-auth/react");
var SideMenu = function () {
    var _a, _b;
    var data = react_1.useSession().data;
    var handleLogoutClick = function () { return react_1.signOut(); };
    var handleLoginClik = function () { return react_1.signIn("google"); };
    return (React.createElement(React.Fragment, null,
        React.createElement(sheet_1.SheetHeader, { className: "text-left border-b border-solid border-secondary p-5" },
            React.createElement(sheet_1.SheetTitle, null,
                React.createElement("h1", { className: "" }, "Menu"))),
        (data === null || data === void 0 ? void 0 : data.user) ? (React.createElement("div", { className: "flex justify-between px-5 py-6 items-center" },
            React.createElement("div", { className: "flex items-center gap-3" },
                React.createElement(avatar_1.Avatar, null,
                    React.createElement(avatar_1.AvatarImage, { src: (_b = (_a = data.user) === null || _a === void 0 ? void 0 : _a.image) !== null && _b !== void 0 ? _b : '' })),
                React.createElement("h2", { className: "font-bold" }, data.user.name)),
            React.createElement(button_1.Button, { variant: "secondary", size: "icon" },
                React.createElement(lucide_react_1.LogOutIcon, { onClick: handleLogoutClick })))) : (React.createElement("div", { className: "flex flex-col px-5 py-6 gap-3" },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement(lucide_react_1.UserIcon, { size: 32 }),
                React.createElement("h2", { className: "font-bold" }, "Ol\u00E1, fa\u00E7a seu login!")),
            React.createElement(button_1.Button, { variant: "secondary", className: "w-full justify-start", onClick: handleLoginClik },
                React.createElement(lucide_react_1.LogInIcon, { className: "mr-2", size: 18 }),
                "Fazer Login"))),
        React.createElement("div", { className: "flex flex-col gap-3 px-5" },
            React.createElement(button_1.Button, { variant: "outline", className: "justify-start", asChild: true },
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement(lucide_react_1.HomeIcon, { size: 18, className: "mr-2" }),
                    "Inicio")),
            (data === null || data === void 0 ? void 0 : data.user) && (React.createElement(button_1.Button, { variant: "outline", className: "justify-start", asChild: true },
                React.createElement(link_1["default"], { href: "/bookings" },
                    React.createElement(lucide_react_1.CalendarIcon, { size: 18, className: "mr-2" }),
                    "Agendamentos"))))));
};
exports["default"] = SideMenu;
