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
  } else if (text.startsWith("add")) {
    addx(text.slice(3));
  } else if (text === "add\n") {
    err();
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
const tasks = ["add", "remove", "list"];

function list() {
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

/**
 *add to the list
 *
 * @returns {void}
 */
function addx(tsk) {
  try {
    let ts = tsk.trim();
    if (ts) {
      tasks.push(ts);
    } else if (!ts) {
      throw new Error("An error occurred because someCondition is true.");
    }
  } catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
  }
}

// /**
//  * error for no adding
//  *
//  * @returns {void}
//  */
// function err() {
//   try {
//     // the message of error and it will appear eventually because there is no condition in try
//     throw new Error("This is a custom error message.");
//   } catch (error) {
//     // Handle the error and take the previous err msg
//     console.error("An error occurred:", error.message);
//   }
// }
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
