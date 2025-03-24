🔥 Challenges Faced
1️⃣ Permission Issues with npm
Encountered EACCES (permission denied) errors when installing global packages.

Solved by changing ownership of the .npm folder:
sudo chown -R $(whoami):$(id -g) ~/.npm

2️⃣ Tailwind Command Not Found (npx tailwindcss init -p Removed)
Tailwind v4 removed the init command, causing confusion.

Fixed by manually creating tailwind.config.js.

3️⃣ npm Cache Errors (EEXIST, EACCESS, mkdir Issues)
Faced npm cache issues when installing packages.

Fixed by cleaning the cache:
npm cache clean --force

4️⃣ Wrong Path for Tailwind CSS Content
Initially, Tailwind styles were not applied.

Fixed by ensuring content paths in tailwind.config.js included all src files.

🎯 Final Thoughts
Setting up React with Tailwind CSS required overcoming several installation and configuration issues, mostly due to npm permissions, Tailwind v4 changes, and Vite-specific setup.
