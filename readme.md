# **YOUTUBE CLONE BACKEND**
- [data model diagram](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

---

## **LECTURE 5: SETTING UP PROFESSIONAL BACKEND PROJECT**

### **KEY HIGHLIGHTS:**

- **Empty Folder in Git**:
  - When you create an empty folder in your project and try to push it to Git, Git will not track the folder, as it only tracks files. If you try to commit, it will show a message like "nothing to commit."
  - **Solution**: To resolve this, create an empty `.gitkeep` file inside the folder. Git will now track the folder because it is non-empty with the `.gitkeep` file.

- **Gitignore Generator**:
  - You can use a [gitignore generator](https://gitignore.io/) to automatically generate a `.gitignore` file that includes all the common files and directories you don't want to commit to Git (e.g., build artifacts, system files, dependencies).
  - This helps avoid accidentally pushing unnecessary files like logs, caches, or editor-specific settings.

- **.env File**:
  - The `.env` file is commonly used to store sensitive information, like API keys, database credentials, and environment variables.
  - **Security Tip**: These variables are typically kept **out of version control** (by adding `.env` to `.gitignore`), ensuring sensitive data is not shared publicly.
  - **System Variables**: It's best practice to use environment variables directly from the system or hosting platform (e.g., Heroku, AWS) for added security instead of hardcoding them in files like `.env`.

- **Nodemon**:
  - **Nodemon** is a utility for Node.js that automatically restarts the server when file changes in the directory are detected. This helps improve the development workflow.
  - **Example Usage**:
    - To install Nodemon as a development dependency:
      ```bash
      npm install -D nodemon
      ```
    - You can add a custom script to your `package.json` to run the server with Nodemon:
      ```json
      "scripts": {
        "dev": "nodemon src/index.js"
      }
      ```

- **Development Dependencies**:
  - Development dependencies (`devDependencies`) are packages that are needed only during the development process and are **not included in production**. These are typically tools like linters, test frameworks, or build tools.
  - Example:
    - To install Nodemon as a dev dependency:
      ```bash
      npm install -D nodemon
      ```

- **Prettier**:
  - **Prettier** is a code formatting tool that ensures all developers on a project follow the same code style. It can automatically format your code to follow consistent rules, improving readability and reducing errors.
  - **Setup**:
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

