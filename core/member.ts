// Member Listener

async function memberJoinListener(Meet) {
  while (true) {
    await Meet.page.waitForSelector(".iLNCXe", { visible: true, timeout: 0 }); // wait for member to join
    let member = await Meet.page.evaluate(() => {
      const member = document.querySelector(".iLNCXe") as HTMLElement;
      return member.innerText.replace(" has joined", "");
    });
    await Meet.emit("memberJoin", Meet.members[member]);
    await Meet.page.waitForSelector(".iLNCXe", { hidden: true, timeout: 0 });
  }
}

async function memberLeaveListener(Meet) {
  while (true) {
    let members = Meet.members; // memberLeaveListener keeps own copy of member list (because when a member leaves, the list gets updated and memberLeaveListener doesn't get the member's info)
    await Meet.page.waitForSelector(".aGJE1b", { visible: true, timeout: 0 }); // wait for member to leave
    let member = await Meet.page.evaluate(() => {
      member = document.querySelector(".aGJE1b");
      if (member.innerText.endsWith(" has left the meeting")) {
        return member.innerText.replace(" has left the meeting", "");
      } else {
        return null;
      }
    });
    if (member === null) {
      continue;
    }
    await Meet.emit("memberLeave", members[member]);
    await Meet.page.waitForSelector(".aGJE1b", { hidden: true, timeout: 0 });
  }
}

export async function memberListener(Meet) {
  async function getMembers() {
    let members = await Meet.page.evaluate(() => {
      let mems = {};
      let member_list = document.querySelector('div[role="list"]');
      for (let i = 0; i < member_list.children.length; i++) {
        let member = {
          name: (
            member_list.children[i].firstChild.lastChild.firstChild
              .firstChild as HTMLElement
          ).innerText,
          icon: (
            member_list.children[i].firstChild.firstChild
              .firstChild as HTMLImageElement
          ).src,
        };
        mems[member.name] = member;
      }
      return mems;
    });
    Meet.members = members;
  }
  await getMembers();

  memberJoinListener(Meet);
  memberLeaveListener(Meet);

  await Meet.page.exposeFunction("getMembers", getMembers);

  await Meet.page.evaluate(() => {
    let memberObserver = new MutationObserver(() => {
      getMembers();
    });
    memberObserver.observe(document.querySelector('div[role="list"]'), {
      subtree: true,
      childList: true,
    });
  });
}
