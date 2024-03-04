"use strict";
// Main initializing function
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
// Only logs in, however we can skip this by just waiting for the chat button or the leave meeting button. Then signing in can be done manually with headless mode disabled, and the package just automates the other stuff
function authenticate(_a) {
    var meetingLink = _a.meetingLink, email = _a.email, pw = _a.pw;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, _d, signInButton, e_1, input, input, join, i;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!meetingLink.startsWith("https://meet.google.com/")) {
                        throw "Meeting Link isn't valid. Make sure it looks like 'https://meet.google.com/xyz-wxyz-xyz'!";
                    }
                    if (!email.endsWith("@gmail.com")) {
                        throw "Email isn't a Google Account";
                    }
                    this.meetingLink = meetingLink;
                    this.email = email;
                    _b = this;
                    return [4 /*yield*/, this.puppeteer.launch({ headless: false })];
                case 1:
                    _b.browser = _e.sent();
                    _c = this;
                    return [4 /*yield*/, this.browser.newPage()];
                case 2:
                    _c.page = _e.sent();
                    _d = this;
                    return [4 /*yield*/, this.browser.defaultBrowserContext()];
                case 3:
                    _d.ctx = _e.sent();
                    return [4 /*yield*/, this.ctx.overridePermissions("https://meet.google.com", [
                            "microphone",
                            "camera",
                            "notifications",
                        ])];
                case 4:
                    _e.sent();
                    return [4 /*yield*/, this.page.goto(meetingLink)];
                case 5:
                    _e.sent();
                    // Authenticating with credentials
                    console.log("Logging in...");
                    _e.label = 6;
                case 6:
                    _e.trys.push([6, 10, , 11]);
                    return [4 /*yield*/, this.page.waitForSelector(".NPEfkd", {
                            visible: true,
                            timeout: 10000,
                        })];
                case 7:
                    signInButton = _e.sent();
                    return [4 /*yield*/, signInButton.focus()];
                case 8:
                    _e.sent();
                    return [4 /*yield*/, signInButton.click()];
                case 9:
                    _e.sent();
                    return [3 /*break*/, 11];
                case 10:
                    e_1 = _e.sent();
                    console.log(e_1);
                    return [3 /*break*/, 11];
                case 11: return [4 /*yield*/, this.page.waitForSelector("input[type=email]", {
                        visible: true,
                        timeout: 0,
                    })];
                case 12:
                    input = _e.sent();
                    return [4 /*yield*/, input.focus()];
                case 13:
                    _e.sent();
                    return [4 /*yield*/, this.page.keyboard.type(email)];
                case 14:
                    _e.sent();
                    return [4 /*yield*/, this.page.keyboard.press("Enter")];
                case 15:
                    _e.sent();
                    return [4 /*yield*/, this.page.waitForSelector("input[type=password]", {
                            visible: true,
                            timeout: 0,
                        })];
                case 16:
                    input = _e.sent();
                    return [4 /*yield*/, input.focus()];
                case 17:
                    _e.sent();
                    return [4 /*yield*/, this.page.keyboard.type(pw)];
                case 18:
                    _e.sent();
                    return [4 /*yield*/, this.page.keyboard.press("Enter")];
                case 19:
                    _e.sent();
                    console.log("Authenticated successfully!");
                    return [4 /*yield*/, this.screenshot("logged-in.png")];
                case 20:
                    _e.sent(); // Double check that the meet is about to be joined to. Quickest way to make sure that there aren't any prompts (Like Google's "confirm recovery email" prompt), that can leave the browser hanging.
                    // Although you can edit the package's code to fit your scenario, the easiest way to fix anything that leaves this program hanging, is to just run the package without headless mode. That way you can continue on any prompts or see issues fast.
                    // Join Google Meet
                    return [4 /*yield*/, this.page.waitForSelector("div[role=button]")];
                case 21:
                    // Although you can edit the package's code to fit your scenario, the easiest way to fix anything that leaves this program hanging, is to just run the package without headless mode. That way you can continue on any prompts or see issues fast.
                    // Join Google Meet
                    _e.sent();
                    return [4 /*yield*/, this.page.waitForSelector(".VfPpkd-vQzf8d", {
                            visible: true,
                            timeout: 0,
                        })];
                case 22:
                    join = _e.sent();
                    i = 3;
                    _e.label = 23;
                case 23:
                    if (!(i > 0)) return [3 /*break*/, 27];
                    return [4 /*yield*/, this.toggleMic(this.page)];
                case 24:
                    _e.sent();
                    return [4 /*yield*/, this.toggleVideo(this.page)];
                case 25:
                    _e.sent();
                    _e.label = 26;
                case 26:
                    i--;
                    return [3 /*break*/, 23];
                case 27: // toggle mic and video 3 times because Google Meet glitches and leaves mic on if it's toggled as soon as page loads
                return [4 /*yield*/, join.click()];
                case 28:
                    _e.sent();
                    // Beyond, is code separate from logging in. You could log in manually and just wait for the chat button to show up to start the bot, for example.
                    return [4 /*yield*/, this.page.waitForXPath("/html/body/div[1]/c-wiz/div[1]/div/div[9]/div[3]/div[10]/div[3]/div[3]/div/div/div[3]/span/button", { visible: true, timeout: 0 })];
                case 29:
                    // Beyond, is code separate from logging in. You could log in manually and just wait for the chat button to show up to start the bot, for example.
                    _e.sent(); // wait for chat button
                    return [4 /*yield*/, this.toggleMemberList()];
                case 30:
                    _e.sent();
                    return [4 /*yield*/, this.toggleChat()];
                case 31:
                    _e.sent();
                    this.message.messageListener(this);
                    this.member.memberListener(this); // Start listeners
                    this.isChatEnabled = this.chatEnabled;
                    this.Audio = new this.audio(this.page);
                    console.log("Meeting joined, and listeners are listening!");
                    this.emit("ready");
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = authenticate;
