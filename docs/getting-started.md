# Getting Started

This guide will walk you through the process of cloning this repository without origin and creating a new GitHub repo.

## Step 1: Clone the Repository

First, clone the repository without the origin. To do this, use the `git clone` command with the `--no-hardlinks` option:

```bash
git clone --no-hardlinks https://github.com/luciancaetano/base-react-typescript-project.git <new-directory>
```

## Step 2: Create a New Git Repository

Now, create a new repository on GitHub. Do not initialize it with a README, .gitignore, or License.

## Step 3: Link the New Repository

Finally, link your local repository to the new GitHub repository:

```bash
git remote add origin <new-repository-url>
git branch -M main
git push -u origin main
```

Replace `<new-repository-url>` with the URL of your new GitHub repository.

And that's it! You've successfully cloned the repository without origin and created a new GitHub repo.
