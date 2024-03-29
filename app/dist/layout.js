"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var footer_1 = require("./_components/footer");
var auth_1 = require("./_providers/auth");
var sonner_1 = require("./_components/ui/sonner");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className + " dark" },
            React.createElement(auth_1["default"], null,
                children,
                React.createElement(sonner_1.Toaster, null),
                React.createElement(footer_1["default"], null)))));
}
exports["default"] = RootLayout;
