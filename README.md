# What is Hammster

Hi there! Thanks for checking out Hammster. This is an app I developed for my solo project while attending Prime Digital Academy. What originally started as a bit of a joke, my friend's and I used to always talk about how much we enjoyed Hamm's beer. Over the years this evolved into a genuine love for the product. Whenever one of us would find a bar that had Hamm's on tap we would text the rest of the people in our friends group and let them know. This was always exciting news because the amount of bars where a person can find it on tap is extremely limited. When I was trying to decide what to do for my solo project, I thought that a fun idea could be an app that keeps track of all known Twin Cities' bars that have Hamm's on tap. In addition to that, if someone found a new bar, they'd be able to add it to the app. I told my friends about the idea and they loved it. So that is how Hammster, an app that tracks local bars with Hamm's on tap, was born.


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
