## READ THIS AND USE THESE BEST PRACTICES EACH DAY


### Best Practices for Pulling from Origin

Regularly pulling changes from the origin (remote repository) is crucial for maintaining an up-to-date local repository and avoiding conflicts. Here are best practices for how often and when you should pull from origin:

#### Why You Should Pull from Origin Regularly

1. **Stay Updated:** Pulling regularly ensures you have the latest changes from the remote repository, keeping your local branch up-to-date with the main branch and other collaborators' work.
2. **Reduce Conflicts:** Frequent pulls help minimize the risk of merge conflicts by integrating small, incremental changes rather than a large set of changes.
3. **Collaborate Effectively:** Regular pulls ensure you are working with the most recent code, which is especially important when multiple team members are working on the same project.

#### When to Pull from Origin

1. **At the Start of Your Day:**
   - Begin your workday by pulling the latest changes from the main branch to ensure you start with the most current version of the project.
   ```sh
   git checkout main
   git pull origin main
   ```

2. **Before Starting a New Feature:**
   - Before creating a new branch for a feature or bug fix, pull the latest changes to ensure your new branch starts from the latest state of the main branch.
   ```sh
   git checkout main
   git pull origin main
   ```

3. **Before Pushing Your Changes:**
   - Before pushing your changes to the remote repository, pull the latest changes to ensure your branch is up-to-date and to minimize conflicts.
   ```sh
   git fetch origin
   git merge origin/main
   ```

4. **Before Creating a Pull Request (PR):**
   - Ensure your branch is synchronized with the latest changes from the main branch before submitting a PR. This reduces the likelihood of conflicts and makes the review process smoother. **Important**
   ```sh
   git fetch origin
   git merge origin/main
   ```

5. **When Notified of Changes:**
   - If you receive notifications or messages about significant updates or changes to the project, pull those changes immediately to stay in sync.
   ```sh
   git fetch origin
   git merge origin/main
   ```

6. **Regular Intervals During Long Tasks:**
   - For long-running tasks or features, pull at regular intervals to keep your branch updated. This helps catch and resolve conflicts early.
   ```sh
   git fetch origin
   git merge origin/main
   ```

#### How to Pull from Origin

1. **Fetch and Merge:**
   - Fetch updates from the remote repository and merge them into your current branch. This two-step process ensures you review changes before merging.
   ```sh
   git fetch origin
   git merge origin/main
   ```

2. **Pull (Combined Fetch and Merge):**
   - The `git pull` command is a shorthand that performs both fetch and merge in one step.
   ```sh
   git pull origin main
   ```

#### Example Daily Workflow

1. **Start of the Day:**
   ```sh
   git checkout main
   git pull origin main
   ```

2. **Before Creating a New Branch:**
   ```sh
   git checkout main
   git pull origin main
   git checkout -b ui-tests/username/feature-description
   ```

3. **While Working on a Feature:**
   - At regular intervals or before significant commits:
   ```sh
   git fetch origin
   git merge origin/main
   ```

4. **Before Pushing Changes:**
   ```sh
   git fetch origin
   git merge origin/main
   ```

5. **Check Status:**
   ```sh
   git status
   ```


6. **Before Creating a PR:**
   ```sh
   git fetch origin
   git merge origin/main
   git push origin ui-tests/username/feature-description
   ```


