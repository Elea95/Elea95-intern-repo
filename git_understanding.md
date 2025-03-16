# Understanding Staging vs. Committing in Git

## Difference Between Staging and Committing
- **Staging (`git add`)** prepares changes before committing.  
- **Committing (`git commit`)** saves the staged changes in Git history.  

## Why Git Separates Staging and Committing  
- Allows organizing changes before committing.  
- Helps group related modifications into a single commit.  
- Prevents committing unfinished work accidentally.  

## When to Stage Without Committing  
- When working on multiple features but committing them separately.  
- When reviewing changes before making them permanent.  
- When preparing commits for a clean Git history.  

# Understanding Branching & Team Collaboration in Git

## Why Pushing Directly to Main is Problematic  
- Changes could break the main branch.  
- Unfinished or buggy code could be deployed accidentally.  
- No opportunity for review and feedback.  

## How Branches Help with Reviewing Code  
- Developers can test features in isolation before merging.  
- Code reviews via pull requests improve code quality.  
- Issues can be addressed without affecting production code.  

## What Happens When Two People Edit the Same File on Different Branches?  
- A **merge conflict** occurs if the same lines are changed.  
- Git requires **manual conflict resolution** before merging.  
- Teams use **code reviews and rebase strategies** to manage conflicts.  
