"use strict";
// Core meeting methods
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenshot = exports.sendMessage = exports.chatEnabled = exports.toggleMemberList = exports.toggleChat = exports.toggleVideo = exports.toggleMic = void 0;
function toggleMic() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.page.keyboard.down("ControlLeft")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, this.page.keyboard.press("KeyD")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, this.page.keyboard.up("ControlLeft")];
                case 3:
                    _a.sent();
                    this.isMicEnabled = !this.isMicEnabled;
                    return [2 /*return*/];
            }
        });
    });
}
exports.toggleMic = toggleMic;
function toggleVideo() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.page.keyboard.down("ControlLeft")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, this.page.keyboard.press("KeyE")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, this.page.keyboard.up("ControlLeft")];
                case 3:
                    _a.sent();
                    this.isVideoEnabled = !this.isVideoEnabled;
                    return [2 /*return*/];
            }
        });
    });
}
exports.toggleVideo = toggleVideo;
function toggleChat() {
    return __awaiter(this, void 0, void 0, function () {
        var chatBtn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.page.waitForXPath("/html/body/div[1]/c-wiz/div[1]/div/div[9]/div[3]/div[10]/div[3]/div[3]/div/div/div[3]/span/button")];
                case 1:
                    chatBtn = _a.sent();
                    return [4 /*yield*/, chatBtn.click()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.toggleChat = toggleChat;
function toggleMemberList() {
    return __awaiter(this, void 0, void 0, function () {
        var memberListBtn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.page.waitForXPath("/html/body/div[1]/c-wiz/div[1]/div/div[9]/div[3]/div[10]/div[3]/div[3]/div/div/div[2]/span/button")];
                case 1:
                    memberListBtn = _a.sent();
                    return [4 /*yield*/, memberListBtn.click()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.toggleMemberList = toggleMemberList;
function chatEnabled() {
    return __awaiter(this, void 0, void 0, function () {
        var disabled;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.page.waitForSelector("#bfTqV")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, this.page.evaluate(function () {
                            disabled = document.querySelector("#bfTqV");
                            if (disabled.disabled === false) {
                                return true;
                            }
                            else if (disabled.disabled === true) {
                                return false;
                            }
                        })];
                case 2:
                    disabled = _a.sent();
                    return [2 /*return*/, disabled];
            }
        });
    });
}
exports.chatEnabled = chatEnabled;
function sendMessage(message) {
    return __awaiter(this, void 0, void 0, function () {
        var chat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.chatEnabled()];
                case 1:
                    if (!_a.sent()) return [3 /*break*/, 6];
                    return [4 /*yield*/, this.page.waitForSelector("#bfTqV")];
                case 2:
                    chat = _a.sent();
                    return [4 /*yield*/, chat.focus()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, this.page.$eval("#bfTqV", function (input, message) {
                            input.value = message;
                            console.log(input);
                            console.log(message);
                        }, message)];
                case 4:
                    _a.sent(); // replaced `await page.keyboard.type(message)`, because this is a little more instant
                    return [4 /*yield*/, this.page.keyboard.press("Enter")];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.sendMessage = sendMessage;
function screenshot(path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.page.screenshot({ path: path, fullPage: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.screenshot = screenshot;
