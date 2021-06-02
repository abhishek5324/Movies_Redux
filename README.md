#
# First Contribution
Lets start by installing Git Bash. <a href="https://git-scm.com/downloads" />

# Fork Repository
Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account. 
  
  <img align="right" width="300"  src="https://camo.githubusercontent.com/fcf9a4ed664cc63de2fcb14d1135072ba6d4c74a8e9bdb224ad6ab1e72600c3b/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67">




# Clone the repository
Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

Open a terminal and run the following git command:
git clone "url you just copied"

For example:
```
git clone https://github.com/this-is-you/first-contributions.git
```
<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

# Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd first-contributions
```
Now create a branch using the git checkout command:
```
git checkout -b your-new-branch-name
```
For example:

```
git checkout -b myBranch
```

Note- you can give any name to branch (of your choice).

# Make necessary changes and commit those changes

Now open Contributors.md file in a text editor. Make changes and Now, save the file.

<img align="right" width="450" src="https://firstcontributions.github.io/assets/Readme/git-status.png" alt="git status" />
If you go to the project directory and execute the command git status, you'll see there are changes.

Add those changes to the branch you just created using the git add command:
git add Contributors.md
```
git commit -m "write changes done"
```

# Push changes to GitHub

Push your changes using the command git push:
```
git push origin <add-your-branch-name>
```


# Submit your changes for review
If you go to your repository on GitHub, you'll see a ```Compare & pull``` request button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />
Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

