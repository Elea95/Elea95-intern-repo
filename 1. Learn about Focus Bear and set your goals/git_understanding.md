# Understanding Merge Conflicts

## 🚨 What caused the conflict?

The conflict happened because I modified the same line in `test.txt` on two different branches (`main` and `conflict-test`). When merging, Git couldn’t automatically decide which change to keep.

## 🛠 How did I resolve it?

I used GitHub Desktop to open the conflicting file. The conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) showed me both versions of the line. I manually combined them into a single meaningful sentence, saved the file, marked the conflict as resolved, and committed the merge.

## 📚 What did I learn?

- Merge conflicts happen when Git can’t automatically merge changes.
- Git provides clear conflict markers to help resolve issues.
- Using GitHub Desktop makes conflict resolution easier without needing the terminal.
- Always **pull the latest changes** before starting work to reduce the chance of conflicts!

📅 **Date:** 14.03.2025
👤 **Author:** Ilia
