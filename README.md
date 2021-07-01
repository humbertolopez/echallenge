# A little project using React.js
This app gives you a search input if you want to check for React's GitHub repo issues.

### Features:
- This project searches React's repo issues by title using GitHub's API.
- The search input waits for the user to stop typing before making the API call.
- Each title at the list of results it's a link to the issues page at GitHub.

### Want to clone this repo?

If you want to clone this repo and use it on your local machine, here's what you'll need:

- Git. Mainly, for cloning this repo.
- Node.js. At least its recent LTS version, just to be sure.

### Now, how to install?

First, clone this repo:

``git clone git@github.com:humbertolopez/echallenge.git``

Then, navigate to the project's folder and ask NPM to install it:

``cd echallenge``
``npm install``

Wait for NPM to do its thing and then run the project:

``npm start``

Enjoy (?), now the project might be running on ``http://localhost:3000``

### Some stuff I should do next:
- Highlight the search query value on each title at the list of results.
- Handle errors, it should show a message to the users if the response from the API couldn't be resolved.
- Create a new Hook for the API call.
- Tests!