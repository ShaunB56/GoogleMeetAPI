import { EventEmitter } from "events";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import authenticate from "./core/authenticate";
import * as meeting from "./core/meeting";
import * as message from "./core/message";
import * as member from "./core/member";
import audio from "./core/audio"; // not working

type puppeteer = typeof puppeteer;

export class Meet extends EventEmitter {
  message: typeof message;
  member: typeof member;
  audio: typeof audio;

  meetingLink: string | undefined;
  email: string | undefined;

  puppeteer: puppeteer;
  browser: undefined;
  page: undefined;
  ctx: undefined;

  isMicEnabled: boolean;
  isVideoEnabled: boolean;
  isChatEnabled: boolean | undefined;

  recentMessage: string | undefined;
  members: string[] | undefined;
  constructor() {
    super();
    console.log("Client created!");

    // Listeners (for use in login function)
    this.message = message;
    this.member = member;
    this.audio = audio;

    this.meetingLink = undefined;
    this.email = undefined;

    this.puppeteer = puppeteer.use(StealthPlugin());
    this.browser = undefined;
    this.page = undefined;
    this.ctx = undefined;

    this.isMicEnabled = true;
    this.isVideoEnabled = true;
    this.isChatEnabled = undefined;

    this.recentMessage = undefined;
    this.members = undefined;
  }

  login = authenticate;

  toggleMic = meeting.toggleMic;
  toggleVideo = meeting.toggleVideo;
  toggleChat = meeting.toggleChat;
  toggleMemberList = meeting.toggleMemberList;
  chatEnabled = meeting.chatEnabled;
  sendMessage = meeting.sendMessage;
  screenshot = meeting.screenshot;
}

/* Notes */

// Various XPaths and element class names or ids are not explained throughout this source; there's probably a better way to have a permanent selector to a specific element though

// The Audio part of this package has not yet been implemented

// This code can be improved in many ways, but I wrote this during the beginning of Covid lockdown; I've only now decided to add a license and create a repository to publish

// This package aims to be similar to the Discord JS library
