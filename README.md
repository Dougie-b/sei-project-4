
# Warzone Gun Builder Thingy

In one week I built an app to create and save different variations of attachments on weapons from the game Call of Duty Warzone.


## Brief

Build a Full-Stack application making my own back end and front end.

Use a Python Django API using Django REST Framework to serve my data from a Postgres database.

Consume our API with a seperate front-end built in react.
## Deployment

Please use the following link to view the project


## Tech Stack

**Server:** Python, Django, Django REST Framework, PostgreSQL

**Client:** Axios, React, SASS, CSS, JavaScript, React Router DOM, JWT

**Dev Tools:** TablePlus, Cloudinary, Heroku, Visual Studio Code, Insomnia, Github, Git

## Planning

Initially I mapped out on quickdatabasediagrams how I needed my Back-End to interact and which databases I would need.

SCREENSHOT

I then wireframed out how I would want the Front-End to look, deciding which pages I needed and which would be secure.

SCREENSHOT
## Build

**Home Page**

The home page has a link to the random generator (which unfortunately I did not manage to finish in time) as well as a header with links to login, register, view your profile and the weapon builder page

It also will pull a random weapon from the API and display it as a suggestion to try it out.

![Home Screenshot](https://i.postimg.cc/4NLXJ048/Screenshot-2022-04-19-at-14-57-54.png)

**Weapon Builder** 

First you select a weapon type from the filter & the page will pull weapons that match the filter choice. 

![Weapon builder 1](https://i.postimg.cc/50BxbNjv/Screenshot-2022-04-19-at-14-46-58.png)

Then you select which weapon you want to build and it takes you to the next page to choose attachments.

![Weapon builder 2](https://i.postimg.cc/2jxzt6sN/Screenshot-2022-04-19-at-14-49-22.png)

You can then save this set-up to your profile using the button at the bottom.

**Register & Login**

There are various pages that you can only view when logged in, such as the profile. I kept the login and register pages simple to stay in theme with the rest of the app.

![Register Screenshot](https://i.postimg.cc/NFQQMqrn/Screenshot-2022-04-19-at-14-52-05.png)

![Login Screenshot](https://i.postimg.cc/Xqx4BHfY/Screenshot-2022-04-19-at-14-52-54.png)

I used custom authentication to check that users have provided the correct information & that certain fields are unique as needed.

![Auth Screenshot](https://i.postimg.cc/Fss9Xvvd/Screenshot-2022-04-19-at-14-54-59.png)

![JS Screenshot](https://i.postimg.cc/g2xmrKnG/Screenshot-2022-04-19-at-14-56-37.png)
## Challenges

I chose a a project that would have been better suited for a non-SQL database so determining the relationships was quite difficult to do.

This gave me less time to complete the Front-End than I had planned for and had to skip out a couple of features.



## Wins

Due to my use-case being awkward it really forced me to learn and understand how to create & interact with a Django database.

I found Python very intuitive to use and am looking forward to developing my understanding of it.
## Bugs

I had to hard code a couple of things due to time restraints that broke some of the functionality of the app.
## Future Features

Add in the weapon & attachment randomiser.

Fix the attachment pulling function to work properly instead of doing it a bit cheaty.
## Key Learnings

This project really helped me understand the difference between SQL and non-SQL databases and their use cases.

