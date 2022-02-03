# rbw-website-test

This is a personal test repo for a website, which holds multiple sites in separate folders.

It is hosted on Heroku at https://rbw-website-test.herokuapp.com

To create a new site :
- in a new folder, copy index.php from another folder, and rename your index.html to home.html
- populate the folder
- update Procfile to point to the folder of the website you want to test on Heroku

To deploy to Heroku (https://dashboard.heroku.com/apps/rbw-website-test) :
- in the Deploy tab, select the Github branch you want to deploy
- deploy from Heroku (click on the Deploy Branch button), or commit to Github on that branch
- wait for the end of the build and deploy phases, then open the app : https://rbw-website-test.herokuapp.com
