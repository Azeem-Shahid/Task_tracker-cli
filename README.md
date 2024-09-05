Description
The Task Tracker CLI is a simple command-line application built with Node.js for tracking and managing tasks in your to-do list. This project helps users efficiently organize their tasks, enabling them to add, update, delete, and track the status of their tasks through a straightforward command-line interface.

Features
Add Tasks: Easily add new tasks with descriptions.
Update Tasks: Modify existing tasks, including their descriptions and status.
Delete Tasks: Remove tasks from the list.
Mark Tasks: Set tasks as 'in-progress' or 'done'.
List Tasks: View all tasks or filter tasks by their current status (todo, in-progress, done).
Persistent Storage: All tasks are stored in a tasks.json file, ensuring data is preserved between sessions.
Requirements
Node.js installed on your system.
Basic understanding of command-line operations.
Usage
To use the Task Tracker CLI, navigate to the project directory in your terminal and run commands using the following syntax:

bash
Copy code
# Add a new task
node taskTracker.js add "Your task description"

# List all tasks
node taskTracker.js list

# List tasks by status
node taskTracker.js list [todo|in-progress|done]

# Update a task
node taskTracker.js update [task ID] "New task description"

# Delete a task
node taskTracker.js delete [task ID]

# Mark a task as in progress
node taskTracker.js mark-in-progress [task ID]

# Mark a task as done
node taskTracker.js mark-done [task ID]
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/task-tracker.git
Navigate into the project directory:
bash
Copy code
cd task-tracker
Initialize the task file (the application will create this file if it doesn’t exist):
bash
Copy code
node taskTracker.js
Contributing
Feel free to submit issues, feature requests, or pull requests to enhance the functionality of this CLI application.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize any part of the description to better fit your style or add additional information as needed!
