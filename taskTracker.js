const fs = require("fs");

// Initialize the tasks.json file if it doesn't exist
function initTaskfile() {
  if (!fs.existsSync("tasks.json")) {
    fs.writeFileSync("tasks.json", JSON.stringify([]));
  }
}

// Main function to handle different commands
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  initTaskfile(); // Ensure the task file is initialized

  if (!command) {
    printHelp(); // If no command is given, print the help message
    return;
  }

  switch (command) {
    case "add":
      const description = args[1];
      addTask(description);
      break;
    case "list":
      listTasks(args[1]);
      break;
    case "update":
      const id = args[1];
      const newDescription = args[2];
      updateTask(id, newDescription);
      break;
    case "delete":
      deleteTask(args[1]);
      break;
    case "mark-in-progress":
      markInProgress(args[1]);
      break;
    case "mark-done":
      markDone(args[1]);
      break;
    default:
      printHelp(); // If the command is invalid, print the help message
  }
}

// Function to add a new task
function addTask(description) {
  const tasks = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
  const taskId = tasks.length + 1;
  const newTask = {
    id: taskId,
    description: description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 4));
  console.log(`Task added successfully (ID: ${taskId})`);
}

// Function to list tasks, optionally filtering by status
function listTasks(status) {
  const tasks = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
  tasks
    .filter((task) => !status || task.status === status)
    .forEach((task) => {
      console.log(
        `ID: ${task.id}, Description: ${task.description}, Status: ${task.status}, CreatedAt: ${task.createdAt}, UpdatedAt: ${task.updatedAt}`
      );
    });
}

// Function to update a task's description
function updateTask(id, newDescription) {
  const tasks = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
  const task = tasks.find((t) => t.id == id);
  if (task) {
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 4));
    console.log(`Task ${id} updated successfully.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Function to delete a task by ID
function deleteTask(id) {
  let tasks = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
  tasks = tasks.filter((task) => task.id != id);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 4));
  console.log(`Task ${id} deleted successfully.`);
}

// Function to mark a task as in-progress
function markInProgress(id) {
  updateTaskStatus(id, "in-progress");
}

// Function to mark a task as done
function markDone(id) {
  updateTaskStatus(id, "done");
}

// Helper function to update the status of a task
function updateTaskStatus(id, newStatus) {
  const tasks = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
  const task = tasks.find((t) => t.id == id);
  if (task) {
    task.status = newStatus;
    task.updatedAt = new Date().toISOString();
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 4));
    console.log(`Task ${id} status updated to ${newStatus}.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Print help menu for available commands
function printHelp() {
  console.log(`
        Task Tracker CLI:
        - Add Task: node taskTracker.js add "Task Description"
        - List Tasks: node taskTracker.js list
        - List by Status: node taskTracker.js list [todo|in-progress|done]
        - Update Task: node taskTracker.js update [id] "New Description"
        - Delete Task: node taskTracker.js delete [id]
        - Mark as In Progress: node taskTracker.js mark-in-progress [id]
        - Mark as Done: node taskTracker.js mark-done [id]
    `);
}

// Run the main function
main();
