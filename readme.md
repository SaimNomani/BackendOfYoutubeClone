# **YOUTUBE CLONE BACKEND**

-   [data model diagram](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

---

## **LECTURE 5: SETTING UP PROFESSIONAL BACKEND PROJECT**

### **KEY HIGHLIGHTS:**

-   **Empty Folder in Git**:

    -   When you create an empty folder in your project and try to push it to Git, Git will not track the folder, as it only tracks files. If you try to commit, it will show a message like "nothing to commit."
    -   **Solution**: To resolve this, create an empty `.gitkeep` file inside the folder. Git will now track the folder because it is non-empty with the `.gitkeep` file.

-   **Gitignore Generator**:

    -   You can use a [gitignore generator](https://gitignore.io/) to automatically generate a `.gitignore` file that includes all the common files and directories you don't want to commit to Git (e.g., build artifacts, system files, dependencies).
    -   This helps avoid accidentally pushing unnecessary files like logs, caches, or editor-specific settings.

-   **.env File**:

    -   The `.env` file is commonly used to store sensitive information, like API keys, database credentials, and environment variables.
    -   **Security Tip**: These variables are typically kept **out of version control** (by adding `.env` to `.gitignore`), ensuring sensitive data is not shared publicly.
    -   **System Variables**: It's best practice to use environment variables directly from the system or hosting platform (e.g., Heroku, AWS) for added security instead of hardcoding them in files like `.env`.

-   **Nodemon**:

    -   **Nodemon** is a utility for Node.js that automatically restarts the server when file changes in the directory are detected. This helps improve the development workflow.
    -   **Example Usage**:
        -   To install Nodemon as a development dependency:
            ```bash
            npm install -D nodemon
            ```
        -   You can add a custom script to your `package.json` to run the server with Nodemon:
            ```json
            "scripts": {
              "dev": "nodemon src/index.js"
            }
            ```

-   **Development Dependencies**:

    -   Development dependencies (`devDependencies`) are packages that are needed only during the development process and are **not included in production**. These are typically tools like linters, test frameworks, or build tools.
    -   Example:
        -   To install Nodemon as a dev dependency:
            ```bash
            npm install -D nodemon
            ```

-   **Prettier**:

    -   **Prettier** is a code formatting tool that ensures all developers on a project follow the same code style. It can automatically format your code to follow consistent rules, improving readability and reducing errors.
    -   **Setup**:

        1. Install Prettier:
            ```bash
            npm install --save-dev prettier
            ```
        2. Create a `.prettierrc` file to define your project’s Prettier settings, such as:
            ```json
            {
                "semi": true,
                "singleQuote": true
            }
            ```
        3. Create a `.prettierignore` file to list files or directories that should be excluded from Prettier’s formatting:
            ```
            node_modules/
            build/
            ```
        4. **Prettier Ignore Generator**: You can use Prettier ignore generator tools to easily create `.prettierignore` files, which can help you specify files or directories to exclude from formatting.

        ***

        ## **LECTURE 6: HOW TO CONNECT DATABASE (MONGODB) IN MERN**

        -   **MongoDB** is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents, making it ideal for applications that require fast and scalable data handling.

        -   **MongoDB Atlas** is a fully managed cloud database service for MongoDB, providing automated deployment, scaling, and backup on cloud providers like AWS, Google Cloud, and Azure.

        ### BTS of MongoDB Atlas:

        Behind the scenes, MongoDB Atlas automates and streamlines several processes to manage MongoDB databases in the cloud:

        1. **Provisioning and Deployment:** Atlas creates and configures MongoDB clusters with necessary settings, choosing suitable configurations based on user preferences (like instance type, region, and cloud provider). It sets up replica sets automatically for high availability.

        2. **Scaling and Performance Optimization:** Atlas supports vertical and horizontal scaling. Vertical scaling adjusts instance size, while horizontal scaling (sharding) distributes data across multiple servers to handle growing workloads. It also automatically tunes database performance with indexing, memory usage adjustments, and other optimizations.

        3. **Data Backup and Recovery:** Atlas provides continuous backups with automated snapshots, making point-in-time recovery possible. It also supports custom backup scheduling and retains data backups per configured policies.

        4. **Security and Compliance:** Atlas secures data through network isolation, IP whitelisting, VPC peering, and encryption at rest and in transit. It integrates with Identity and Access Management (IAM) and supports role-based access control, ensuring compliance with standards like GDPR and HIPAA.

        5. **Monitoring and Alerts:** Atlas continuously monitors cluster metrics (CPU, memory, I/O, etc.), generating real-time dashboards and logs. Customizable alerts notify users of potential issues, like high latency or disk space usage, enabling proactive database management.

        6. **Automated Updates and Patching:** Atlas keeps MongoDB clusters up to date with automated maintenance, applying patches and updates during scheduled maintenance windows to minimize downtime and ensure security.

        7. **Data and Network Configuration:** Atlas simplifies configuring replica sets, sharding, and network settings for global applications. Multi-region clusters enable data distribution across geographies, ensuring low-latency access for users worldwide.

        MongoDB Atlas abstracts these complex processes, allowing users to focus on application development without managing database infrastructure manually.

        #### Whitelisting IPs in MongoDB Atlas: Handling Large User Traffic

        When using MongoDB Atlas, you only need to whitelist the IP addresses of the servers that directly interact with the database—not the IPs of individual website visitors. Here’s how it works:

        1.  **Backend Servers Handle Database Access**

        -   Only your **backend server** (e.g., on AWS or DigitalOcean) connects directly to MongoDB Atlas. This server is whitelisted, allowing it to communicate securely with Atlas.

        2.  **Client Requests Go Through the Backend**

        -   When thousands or millions of users access your website, they interact with the **backend server**, which handles all communication with the database. This design keeps MongoDB Atlas isolated from direct public access, enhancing security.

        3. **Whitelisting is Only Required for Backend Servers**

        -   You do not need to whitelist the IP addresses of individual users. Only the **IP addresses of your backend servers** are needed to ensure secure, controlled access.

        This approach ensures that MongoDB Atlas remains secure, with access limited to trusted backend servers, while your application remains scalable to handle large volumes of user traffic.

        #### **Phases/Envronments of Software Development Lifecycle:**

        1. **Development Environment**: Where developers write and test code locally, making changes and experimenting with features.

        2. **Testing Environment**: Used to run tests, identify bugs, and ensure code quality. It simulates production to validate functionality and stability.

        3. **Deployment Environment**: The staging area where the code is deployed as a final test. It closely mirrors production, allowing for final checks before release.

        4. **Production Environment**: The live environment where the final, stable version of the software is made accessible to end users.

        #### **Listeners in Express**

        In Express, listeners refer to functions that are attached to certain events or actions that occur during the lifecycle of the application. These events allow the application to respond to specific actions, such as errors, requests, or server activity.

        For example:

        ```javascript
        app.on('error', (err) => {...})
        ```

        -   This is an event listener attached to the error event. It triggers when an error occurs in the application.

        ```javascript
        app.listen(port, () => {...})
        ```

        -   This is a listener that listens for incoming requests on a specific port.  
            Listeners are often used for handling specific events like server startup, shutdown, or handling errors. They allow you to define custom behavior when certain conditions are met.

        #### **Process in Node**

        In Node.js, process is a global object that provides information about the current Node.js process and allows interaction with the operating system. It is used for:

        -   **Accessing environment variables:** process.env
        -   **Handling command-line arguments:** process.argv
        -   **Exiting the process:** process.exit()
        -   **Reading and writing to standard input/output:** process.stdin, process.stdout
        -   **Handling process signals:** process.on('exit', callback)

        It is essential for controlling the behavior and lifecycle of Node.js applications.

        **_process.exit()_** in Node.js is used to terminate the current process. It can take an optional argument that indicates the exit status:

        -   **process.exit(0):** Exits the process with a success status (code 0).
        -   **process.exit(1):** Exits the process with an error status (code 1), indicating failure or an error.

        Any other non-zero number: Exits with the given code, typically used to indicate various error states.

        ### **Two Ways of Database Connection in Node.js**

    -   **Inside index.js with IIFE (Immediately Invoked Function Expression):**

              ```javascript
                  (async function connectDB() {
                  try {
                      await mongoose.connect(process.env.MONGODB_URI);
                      console.log('Connected to DB');
                  } catch (err) {
                      console.log('Error connecting to DB', err);
                  }
                  })();
              ```

        **Why IIFE:** It allows the database connection to be established immediately when the file is executed without waiting for other asynchronous code to complete. It keeps the code self-contained and avoids polluting the global scope.

    -   **Separate db Folder with Exported Function:**

                  ```javascript
                  // db/connect.js
                  import mongoose from 'mongoose';
                  export async function connectDB() {
                  try {
                      await mongoose.connect(process.env.MONGODB_URI);
                      console.log('Connected to DB');
                  } catch (err) {
                      console.log('Error connecting to DB', err);
                  }
                  }

                  // index.js
                  import { connectDB } from './db/connect.js';
                  connectDB();
                  ```

        **Why This Approach:** Separating the logic into a different file keeps the code modular, easier to maintain, and reusable. It also makes it easier to test the database connection independently.

        ### **_Key Takeaways:_**

    -   Behind the scenes, MongoDB Atlas deploys on AWS, creating all necessary connection strings and provisioning required software configurations.

    -   To access MongoDB (especially through Atlas), two key requirements must be met:

        1. The IP address must be whitelisted to allow access.
        2. A valid username, password, and connection URL are required.

    -   Only the IP address of the machine hosting the backend code, such as an AWS or DigitalOcean instance, is typically added to the whitelist.

    -   In a production-grade environment, access is restricted to specific IPs only. During testing, temporary IP allowances can be made for limited time frames.

    -   To connect to the database, you will need a properly configured connection string.
    -   We must import dotenv at top of index because it is necessary to load all our environment variables as sson as possible
