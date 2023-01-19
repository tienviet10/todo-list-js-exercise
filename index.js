// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDes = [];



// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// const newTask = (title, des) => {
//   taskTitles.push(title);
//   taskDes.push(des);
//   taskComplete.push(false);
// };

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// const completeTask = (taskIndex) => {
//   taskComplete[taskIndex] = true;
// };

// // Print the state of a task to the console in a nice readable way
// const logTaskState = (taskIndex) => {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// };

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

// const logTaskState = (task) => {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// };

// const completeTask = (task) => {
//   task.complete = true;
// };

const newTask = (title, des) => {
  const task = {
    title,
    des,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");


task1.logState();
task1.markCompleted();
task1.logState();
