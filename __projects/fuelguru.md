---
layout: post
title: "Fuel Guru - Fuel Price Prediction"
date: 2017-10-19 10:13:42 +1000
author: "Chris Joy"
categories: platform
published: true
image: /images/projects/fuelguru-cover.jpg
---

Fuel Guru is an intuitive, user friendly web app allowing users to quickly find fuel stations to fit their needs. It allows users to specify what is important to them about their fuel and then easily view relevant results, helping to save both time and money for everyone using the app. In order to provide accurate information the price and location data in our system is updated daily from various sources including Fuel NSW and Google Maps. This ensures that all data provided to users is accurate, up to date, and relevant.

Users will have the option to sort results for their chosen fuel type based on pricing, distance from current location, whether the station is en route to their current destination, fuel vouchers the user has or time to fuel station (note: this is not strongly correlated to distance, especially in built-up areas), It is also important that users be able to then view these results on a map, in order to quickly and in a familiar manner understand where nearby fuel stations are relative to their location. These factors also make our web app unique, as most existing solutions provide either a map view or (unsortable) list view, but not both.

The first of two identifying factors of our web app is the ability to predict fuel prices over the upcoming two weeks for all fuel types and all fuel stations. This feature will be exclusive to our solution, and does not exist on the market yet. The second identifying feature is the ability to search for fuel stations en route to a destination with the ‘Trip Search’ functionality. These two features together distinguish the web app from all existing solutions on the market.

Minimal Admin/Moderator presence will be required to maintain the web app, as all data is automatically retrieved and updated daily from a reliable source (NSW Gov). This will simplify the running of the site, and allow System Admins to focus on fixing bugs as they appear and upgrading existing features.

## Software Architecture
Initially, the team had decided to go with Django (python based web-framework). However, after revising several system requirements (especially the requirements that require reactive DOM elements), Django would not have been the best choice for this project, as it would require extensive custom tweaking, which was not feasible as it was out of the team’s technical scope. 

<p align="center"> 
    <img src="{{site.url}}/images/projects/fuelguru/sa1.JPG">
</p>

We decided to proceed with a MEAN stack. The decision to implement a REST API for the system’s core functions was so that the team could work independently, following the microservices approach, keeping the systems functions, technology agnostic (meaning team members could work on different parts of the system in any programming language, communicating to the rest api via http).

<p align="center"> 
    <img src="{{site.url}}/images/projects/fuelguru/sa2.JPG">
</p>

## Front-End Stack
The platform’s front-end will be entirely client side. The decision to go with a client side framework was so that we could reduce server costs. It also provides users with a smoother user experience when transitioning between pages, as the server doesn’t need to dynamically render each page request. 
### AngularJS
Angular is a front-end JavaScript-based framework, developed by Google, which combines declarative, dependency injection and templating, allowing developers to build modern applications for the web.
### Design Frameworks
Instead of writing our own CSS/JS elements for the user interface, we have decided to use Twitter’s Bootstrap and Google’s Material Design Lite libraries. The decision to use these external design frameworks was because of scheduling feasibility (mainly due to the limited time given to complete this project).


## Back-End Stack
The back-end mainly consists of a REST API used as a layer in between the front-end and the database. Most of the platform’s back-end will be written in NodeJS using the ExpressJS framework for routing and dozens of JavaScript modules used for the non-core tasks (ie. the JavaScript-Web-Token & Passport node modules for user authentication). 
### Express JS/Rest API
Express is a lightweight NodeJS web framework that was used to build the REST API. It's essentially a node-based micro webserver. Express was chosen primarily due to its wide use and availability of documentation.
### MongoDB
MongoDB is a NoSQL database suite widely used in conjunction with JavaScript-based frameworks. MongoDB can handle schemaless data models. This is ideal, since during development, most models will be constantly changed (ie. by adding and removing attributes to each model/class).

## Build Systems and Tooling
### Gulp
Gulp is the toolkit our team is using to automate build tasks, such as compiling asset files (CSS, JS, etc) and manage cache files during development. In order to use Gulp, we essentially wrote a Gulp script (ie. the Gulpfile), which defines each task and their respective processes.
### Docker
Since most of our team members have different operating systems on their development devices, we would be facing compatibility issues would pop up sooner or later. We sought a VM like solution, so that we emulate a common environment during development, however the overhead of a VM was too large and not sustainable in the long-term. Docker, provides similar benefits of a VM, without the overhead. Docker uses container technology (similar to that of linux’s LXC containers), which allows for consistent environments in both development and production contexts.

## External APIs and Libraries
### NSW FuelPrice Check API
The recently released NSW FuelPrice API has current and reliable information on the prices of different petrol stations. This API is critical to our project as it will be the main data source for the different fuel prices for each petrol station. It also contains a large amount of historical data that will be needed by our machine learning algorithm to make accurate predictions on price.
### American Government’s Fuel Economy API
The American Government’s fuel economy API provides detailed information on almost every make of car since 1984. It contains information on how much fuel is consumed by models. This API will be used to make a more accurate evaluation on which petrol station is cheapest based on fuel consumed to get there. It can also be used to evaluate which petrol stations are reachable with the trip search option. It has information on what fuel types each car can use.
### Google Maps Distance Matrix API
The Google Maps Distance Matrix API can be used to calculate the distances certain locations are away from each other. This will be very useful for evaluating the different distances for petrol stations to enable the user to filter their search by proximity. It is also critical to the trip search algorithm which will rely on these distances to help find the smallest detour for when the user is driving between two locations.
### Google Maps Geolocation API
This API allows the web application to find where the user currently is. Although it is not an essential part of our project, it will help the user experience by speeding up the process of finding petrol stations that are close to their current location.
### Google Maps Embedded API
The Google Maps Embedded API allows you to embed Google Maps within a web application. This will allow users a visualisation of where they are, where their desired petrol station is, as well as having the option to then use Google Maps as their navigation system.
### Google Places API
The Google Places API allows information about different places to be found. This includes the opening and closing hours of the facilities as well as ratings of the petrol station. We will use this information to help provide information to the users on the petrol station. 
### TensorFlow
TensorFlow has many different machine learning algorithms within its libraries. These algorithms will allow us to do the price predictions. After doing some preliminary testing we intend to use the neural network regressor as it provides the greatest accuracy. 

## Machine Learning Stack
### Flask Server
The machine learning stack was created entirely separate from the rest of the system and is built with a Flask server. It communicates to the node back-end through http requests. We chose to build it in this manner as this would mean that the two systems are decoupled. The Flask server could be developed completely separately from the rest of the system and different models were trialled throughout the project. The flask server allowed for the development of the machine learning models in python (Flask is a python web framework). Python is a more suitable language than javascript to make the required models due to the support for machine learning and data science (both in packages and documentation).
### Datasets
Our dataset is  mainly historical fuel price data from the NSW Government that has been enriched with several other sources including historical data of the Singapore Mogas 95 (the Singapore Mogas 95 is a market price that helps determine the benchmark price for Australian fuel). The historical data of this benchmark price is very useful to helping predict price as it generally takes about two weeks for prices to filter through. This is ideal as it gives a useful window to predict what petrol prices are going to do on a longer time basis.
### Models
<p align="center"> 
    <img src="{{site.url}}/images/projects/fuelguru/sa3.JPG">
</p>

## Key Benefits of System
The largest benefits this system provides is in its intuitive display of features which fill existing gaps in the market. As on time of development, there is no system which includes any feature similar to the ‘Trip Search’, only searching near a single given location. This is often impractical for users which do not know the area they are driving through, for example those on long distance drives. This feature will likely appeal to these users in particular, as no knowledge of the area you are driving through is required in order to find the necessary fuel.

There are also very few existing solutions which allow any form of price prediction, and those which do are targeted at those with knowledge of price cycles, and are therefore almost unintelligible to the everyday user. The benefit of this system is that it presents this complex information in a simple manner, even going to far as to simplify it into two basic sentences at the top of the page.

## Interface Design
The breakdown of main features from above was used to focus the design stage of the project. Each main feature was largely made into a separate page (in some cases two features were grouped together). Mockups on paper were used to mark out the rough layout of these different pages and these were then translated into wireframes using Balsamiq. 

The front-end was then developed with reference to the wireframes. Html templates were created for all pages, with associated css to customise the look of these pages, and angular controllers to make these pages reactive for the user and integrating the google maps javascript api into the website.
The largest change to the appearance of the front-end was the relocation of the menu bar. A decision was made to shift the menu from a horizontal bar located at the top of the screen to a vertical bar on the left hand side. This was a deliberate decision, based on feedback from user testing. The feedback from this testing was that the solid menu bar at the top of the screen came with an ‘early 2000’s’ feel, rather than the new, dynamic feel that the front-end tries to achieve. Rather than allocate hours to make the menu more dynamic, it was relocated to the left hand side. When the new solution was presented to the same users, the feedback was overwhelmingly positive.



## Links
- fuelguru.net (expired)
- [Github Repo](https://github.com/mrchrisjoy/fuelguru)

## Collaborators
- Oliver Dolk
- Raycole Dai
- Chris Johnston
- Lachlan Jones