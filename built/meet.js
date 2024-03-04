"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meet = void 0;
var events_1 = require("events");
var puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
var puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
var authenticate_1 = __importDefault(require("./core/authenticate"));
var meeting = __importStar(require("./core/meeting"));
var message = __importStar(require("./core/message"));
var member = __importStar(require("./core/member"));
var audio_1 = __importDefault(require("./core/audio")); // not working
var Meet = /** @class */ (function (_super) {
    __extends(Meet, _super);
    function Meet() {
        var _this = _super.call(this) || this;
        _this.login = authenticate_1.default;
        _this.toggleMic = meeting.toggleMic;
        _this.toggleVideo = meeting.toggleVideo;
        _this.toggleChat = meeting.toggleChat;
        _this.toggleMemberList = meeting.toggleMemberList;
        _this.chatEnabled = meeting.chatEnabled;
        _this.sendMessage = meeting.sendMessage;
        _this.screenshot = meeting.screenshot;
        console.log("Client created!");
        // Listeners (for use in login function)
        _this.message = message;
        _this.member = member;
        _this.audio = audio_1.default;
        _this.meetingLink = undefined;
        _this.email = undefined;
        _this.puppeteer = puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
        _this.browser = undefined;
        _this.page = undefined;
        _this.ctx = undefined;
        _this.isMicEnabled = true;
        _this.isVideoEnabled = true;
        _this.isChatEnabled = undefined;
        _this.recentMessage = undefined;
        _this.members = undefined;
        return _this;
    }
    return Meet;
}(events_1.EventEmitter));
exports.Meet = Meet;
/* Notes */
// Various XPaths and element class names or ids are not explained throughout this source; there's probably a better way to have a permanent selector to a specific element though
// The Audio part of this package has not yet been implemented
// This code can be improved in many ways, but I wrote this during the beginning of Covid lockdown; I've only now decided to add a license and create a repository to publish
// This package aims to be similar to the Discord JS library
