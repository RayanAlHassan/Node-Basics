/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text === "hello\n") {
    hello();
  } else if (text.startsWith("hello")) {
    hellox(text.slice(6));
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list();
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */

function hello() {
  console.log(`hello!`);
}

/**
 * Says hello x
 *
 * @returns {void}
 */

function hellox(x) {
  let name = x.trim(); // we need trim to cut the spaces after the slice because i took arg from 6 till the end of line
  console.log(`hello ${name}!`);
}

/**
 * list tasks
 *
 * @returns {void}
 */

function list() {
  const tasks = ["add", "remove", "list"];
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

/**
 *give a help list for some text input
 *
 * @returns {void}
 */
function help() {
  console.log(
    `hello : hello!
qiut OR exit :Quitting now, goodbye! 
hello x : hello x!`
  );
}

// The following line starts the application
startApp("rayan al hassan");
