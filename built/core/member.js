"use strict";
// Member Listener
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
exports.memberListener = void 0;
function memberJoinListener(Meet) {
    return __awaiter(this, void 0, void 0, function () {
        var member;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 5];
                    return [4 /*yield*/, Meet.page.waitForSelector(".iLNCXe", { visible: true, timeout: 0 })];
                case 1:
                    _a.sent(); // wait for member to join
                    return [4 /*yield*/, Meet.page.evaluate(function () {
                            var member = document.querySelector(".iLNCXe");
                            return member.innerText.replace(" has joined", "");
                        })];
                case 2:
                    member = _a.sent();
                    return [4 /*yield*/, Meet.emit("memberJoin", Meet.members[member])];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, Meet.page.waitForSelector(".iLNCXe", { hidden: true, timeout: 0 })];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function memberLeaveListener(Meet) {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var members, member;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    members = Meet.members;
                                    return [4 /*yield*/, Meet.page.waitForSelector(".aGJE1b", { visible: true, timeout: 0 })];
                                case 1:
                                    _b.sent(); // wait for member to leave
                                    return [4 /*yield*/, Meet.page.evaluate(function () {
                                            member = document.querySelector(".aGJE1b");
                                            if (member.innerText.endsWith(" has left the meeting")) {
                                                return member.innerText.replace(" has left the meeting", "");
                                            }
                                            else {
                                                return null;
                                            }
                                        })];
                                case 2:
                                    member = _b.sent();
                                    if (member === null) {
                                        return [2 /*return*/, "continue"];
                                    }
                                    return [4 /*yield*/, Meet.emit("memberLeave", members[member])];
                                case 3:
                                    _b.sent();
                                    return [4 /*yield*/, Meet.page.waitForSelector(".aGJE1b", { hidden: true, timeout: 0 })];
                                case 4:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function memberListener(Meet) {
    return __awaiter(this, void 0, void 0, function () {
        function getMembers() {
            return __awaiter(this, void 0, void 0, function () {
                var members;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Meet.page.evaluate(function () {
                                var mems = {};
                                var member_list = document.querySelector('div[role="list"]');
                                for (var i = 0; i < member_list.children.length; i++) {
                                    var member = {
                                        name: member_list.children[i].firstChild.lastChild.firstChild
                                            .firstChild.innerText,
                                        icon: member_list.children[i].firstChild.firstChild
                                            .firstChild.src,
                                    };
                                    mems[member.name] = member;
                                }
                                return mems;
                            })];
                        case 1:
                            members = _a.sent();
                            Meet.members = members;
                            return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMembers()];
                case 1:
                    _a.sent();
                    memberJoinListener(Meet);
                    memberLeaveListener(Meet);
                    return [4 /*yield*/, Meet.page.exposeFunction("getMembers", getMembers)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Meet.page.evaluate(function () {
                            var memberObserver = new MutationObserver(function () {
                                getMembers();
                            });
                            memberObserver.observe(document.querySelector('div[role="list"]'), {
                                subtree: true,
                                childList: true,
                            });
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.memberListener = memberListener;
