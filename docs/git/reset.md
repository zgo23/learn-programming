# What git reset does?

-   Step1: Move Head: moves the branch that HEAD is pointing to. This means if HEAD is set to the master branch (i.e. you’re currently on the master branch), running git reset 9e5e6a4 will start by making master point to 9e5e6a4. With **reset --soft**, it will simply stop there. it essentially undid the last git commit command.
-   Step 2: Updating the Index (--mixed), default behaviour of **git reset**. it still undid your last commit, but also unstaged everything. You rolled back to before you ran all your git add and git commit commands.
-   Step 3: Updating the Working Directory (--hard), You undid your last commit, the git add and git commit commands, and all the work you did in your working directory.
-   Recap

    1. Move the branch HEAD points to (stop here if --soft).
    2. Make the index look like HEAD (stop here unless --hard).
    3. Make the working directory look like the index.

# What does **git reset <file_path>** do?

-   copy the file from the snapshot pointed by Head to the index. This has the practical effect of unstaging the file.
