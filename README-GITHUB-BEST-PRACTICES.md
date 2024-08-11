## GitHub Workflow and Best Practices for QA Team

### Setting Up Your Environment

**Cloning the Repository:**
To clone the repository, use SSH. This command downloads a copy of the repository to your local machine.
```sh
git clone git@github.com:externships/ex7-git.git
```
*Ensure you have SSH keys set up for authentication. If you need to use HTTPS, use a personal access token instead of a password.*

**Starting the Application:**
To start the application locally, use this command to run the development server.
```sh
npm run dev
```
*Access the application at `http://localhost:3000/`.*

### Creating and Managing Branches

**Creating a New Branch:**
1. **Ensure your `main` branch is up to date:**
   Switch to the `main` branch to ensure you're working with the latest version of the code.
   ```sh
   git checkout main
   ```
   Pull the latest changes from the remote `main` branch to your local `main` branch.
   ```sh
   git pull origin main
   ```
2. **Create and switch to a new feature branch:**
   Create a new branch for your feature and switch to it. This isolates your work and makes it easier to manage changes.
   ```sh
   git checkout -b ui-tests/username/feature-description
   ```
3. **Push the new branch to the remote repository:**
   Push your new branch to GitHub, setting up a tracking connection between your local branch and the remote branch.
   ```sh
   git push -u origin ui-tests/username/feature-description
   ```

**Switching Branches:**
To switch to a different branch, use this command. Switching branches allows you to work on different features or bug fixes.
```sh
git checkout branch-name
```

### Synchronizing with the Main Branch

**Fetching and Pulling Updates:**
1. **Fetch all remote branches:**
   Update your local repository with information from the remote repository. This does not modify your working files.
   ```sh
   git fetch --all
   ```
2. **List all branches (local and remote):**
   Display all branches, both local and remote. This helps you see which branches exist.
   ```sh
   git branch -a
   ```

**Updating Your Feature Branch with Main:**
1. **Switch to your feature branch:**
   Ensure you are working on your feature branch before updating it with the latest `main` changes.
   ```sh
   git checkout your-branch-name
   ```
2. **Fetch the latest changes from the remote repository:**
   Get the latest updates from the remote repository to ensure you have the most recent changes.
   ```sh
   git fetch origin
   ```
3. **Merge the latest `main` branch changes into your feature branch:**
   Integrate changes from the `main` branch into your feature branch. This helps keep your branch up to date and reduces merge conflicts.
   ```sh
   git merge origin/main
   ```
4. **Push your updated branch to the remote repository:**
   After merging, push your changes to the remote branch to share your updated work with the team.
   ```sh
   git push origin your-branch-name
   ```

### Creating a Pull Request (PR)

1. **Ensure your branch is up to date with the latest changes from `main` (see the above section).**
2. **Create a PR from your branch to `main` on GitHub.**
   This allows your changes to be reviewed and integrated into the main codebase.
3. **Assign reviewers and provide a meaningful description of the changes.**
   This helps others understand what changes you made and why. Assign to Landon, Prashant, or Jonathan.

### Checking Out Branches

**To check out a branch locally:**
Switch to the branch you want to work on.
```sh
git checkout branch-name
```
*If it's a remote branch being checked out for the first time:*
```sh
git checkout -b branch-name origin/branch-name
```

### Deleting Branches

**Deleting a Local Branch:**
1. **Switch to a different branch (e.g., `main`):**
   Ensure you are not on the branch you want to delete.
   ```sh
   git checkout main
   ```
2. **Delete the branch safely:**
   Remove the branch from your local repository. This ensures you don't lose any changes.
   ```sh
   git branch -d branch-name
   ```
   Force delete if necessary (e.g., if the branch has unmerged changes):
   ```sh
   git branch -D branch-name
   ```

**Deleting a Remote Branch:**
Remove the branch from the remote repository to keep it clean and organized.
```sh
git push --delete origin branch-name
```

### Visualizing Commit History

**To visualize the commit history with a graphical representation:**
This command provides a visual representation of the commit history, making it easier to understand the project's history.
```sh
git log --graph --decorate --oneline
```

### Points to Remember

- **Staging and Committing:** Make frequent commits with meaningful messages to keep track of changes.
- **Branch Naming:** Use a consistent naming convention for branches (e.g., `ui-tests/username/feature-description`) for clarity.
- **Synchronization:** Regularly sync your branch with the `main` branch to avoid conflicts and ensure your work is up to date.
- **Collaboration:** Communicate with your team, especially before deleting branches that might affect their work.