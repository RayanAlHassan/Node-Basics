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
  let myInput = text;
  myInput = myInput.replace("\n", "");
  myInput = myInput.split(" ");
  console.log(myInput);

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
  } else if (text === "remove 1\n") {
    removeFirst(tasks);
  } else if (text === "remove 2\n") {
    removeSecond(tasks);
  } else if (text.startsWith("remove")) {
    remove(text.slice(6));
  } else if (text.startsWith("edit")) {
    let number = 0;
    let text = "";
    if (Number(myInput[1])) {
      number = myInput[1];

      for (let i = 2; i < myInput.length; i++) {
        text += myInput[i];
        text += " ";
      }
    } else {
      for (let i = 1; i < myInput.length; i++) {
        text += myInput[i];
        text += " ";
      }
    }
    editing(number, text);
  } else if (text.startsWith("check")) {
    check(text.slice(5));
  } else if (text.startsWith("uncheck")) {
    uncheck(text.slice(7));
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
const tasks = [
  { task: "add", done: true },
  { task: "remove", done: true },
  { task: "list", done: false },
];

function list() {
  let mybool = "[ ]";
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    if (tasks[index].done == true) {
      mybool = "[✓]";
    }

    console.log(` ${mybool} ${index + 1}. ${tasks[index].task}`);
    mybool = "[ ]";
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

/**
 * remove the last element
 *
 * @returns {void}
 */
function remove(notIncl) {
  ni = notIncl.trim();
  if (ni) {
    for (let i = 0; i < tasks.length; i++) {
      if (ni !== i + 1) {
        console.log("this is not include");
        break;
      }
    }
  } else {
    tasks.pop();
  }
}

/**
 * remove the first element
 * @param {Array} tasks
 * @returns {void}
 */
function removeFirst(tasks) {
  tasks.shift();
}

/**
 * remove the second element
 * @param {Array} tasks
 * @returns {void}
 */
function removeSecond(tasks) {
  tasks.splice(1, 1);
}

/**
 * edit the tasks
 * @returns {void}
 */
function editing(number, edt) {
  ed = edt.trim();

  // let arr = [number, ed];
  // console.log(arr);

  if (!number) {
    //if we dont have a number
    tasks[tasks.length - 1].task = ed;
  } else {
    tasks[number - 1].task = ed;
  }

  // if (ed) {
  //   if (ed === "new text") {
  //     tasks[tasks.length - 1] = "new text";
  //   } else if (ed.startsWith("1")) {
  //     tasks[0] = "new text";
  //   }
  // } else console.log("error");
}

/**
 * check
 * @returns {void}
 */

function check(checkk) {
  let checked = checkk.trim();
  if (checked) {
    tasks[checked - 1].done = true;
    // if ((tasks[index].done = true)) {
    //  tasks[checked - 1].done = true;
    console.log("	✓");
    // } else console.log(" ");
  } else console.log("error");
}

function uncheck(uncheckk) {
  let uncheckedd = uncheckk.trim();
  if (uncheckedd) {
    // console.log(uncheckedd)
    tasks[uncheckedd - 1].done = false;
    // if ((tasks[index].done = true)) {
    console.log("	");
    // } else console.log(" ");
  } else console.log("error");
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
hello x : hello x!
list : it will list all tasks
add x : it will add an item , x is whatever
add : give an error
remove : remove the last element
remove 1 : remove the first element
remove 2: remove the second element`
  );
}

// The following line starts the application
startApp("rayan al hassan");
