// Message Listener

export async function messageListener(Meet) {
  async function getRecentMessage() {
    var message = await Meet.page.evaluate(() => {
      let chat = document.querySelector(".z38b6").lastChild;
      return {
        author: (chat.firstChild.firstChild as HTMLElement).innerText,
        time: (chat.firstChild.lastChild as HTMLElement).innerText,
        content: (chat.lastChild.lastChild as HTMLElement).innerText,
      }; // See div.html
    });
    if (message.author !== "You") {
      await Meet.emit("message", message);
      Meet.recentMessage = message;
      return message;
    }
  }

  await Meet.page.waitForSelector(".GDhqjd", { timeout: 0 });
  getRecentMessage();

  await Meet.page.exposeFunction("getRecentMessage", getRecentMessage);

  await Meet.page.evaluate(() => {
    // https://stackoverflow.com/questions/47903954/how-to-inject-mutationobserver-to-puppeteer
    // https://stackoverflow.com/questions/54109078/puppeteer-wait-for-page-dom-updates-respond-to-new-items-that-are-added-after/54110446#54110446
    let messageObserver = new MutationObserver(() => {
      getRecentMessage();
    });
    messageObserver.observe(document.querySelector(".z38b6"), {
      subtree: true,
      childList: true,
    });
  });
}
