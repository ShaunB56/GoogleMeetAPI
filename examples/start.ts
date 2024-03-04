import { Meet } from "../meet";
const client = new Meet();

let config = {
  meetingLink: "https://meet.google.com/xyz-wxyz-xyz",
  email: "",
  pw: "",
};

async function command(client, message) {
  if (message.content.startsWith("!quote")) {
    await client.sendMessage(
      `${message.author} said, "${message.content.replace("!quote ", "")}" at ${
        message.time
      }`,
    );
  }
}

(async () => {
  client.once("ready", async () => {
    console.log("ready");
  });

  await client.login(config);

  client.on("message", async (message) => {
    command(client, message);
  });

  client.on("memberJoin", async (member) => {
    await client.sendMessage(`Welcome, ${member.name}!`);
  });

  client.on("memberLeave", async (member) => {
    await client.sendMessage(`Goodbye, ${member.name}!`);
  });
})();

/*
 Async/await syntax is required if you need to execute specific actions with Puppteer or don't want to be limited to only the events already implemented.
*/

// If errors like "Node is detached" get thrown, restarting almost always fixes most errors
