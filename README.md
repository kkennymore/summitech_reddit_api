# Develop an API for a reddit clone Using JavaScript

This is a code challenge by Summitech as the recruitment process for the position of a backend-engineer.

## Data Storage Engine
MongoDB

## Programming Language
JavaScript

## Endpoints

1. Sign up [/v1/api/signup]
2. Login [/v1/api/login]
3. Logout [/v1/api/logout]
4. Create subreddit [/v1/api/create_sub]
5. Edit subreddit [/v1/api/edit_sub]
6. Create new posts under subreddits [/v1/api/create_post]
7. Add comments to posts [/v1/api/add_post]


## Change Streams

Change streams allow applications to access real-time data changes without the complexity and risk of tailing the oplog. With the use change streams, i can be able to create an audit trail based on user activities on [/v1/api/add_post],[/v1/api/create_sub],[/v1/api/edit_sub],[/v1/api/create_post] Endpoints. When the user add a Post, Edit, delete etc.

## How To Run The API
2. Clone this repo, ```npm install```, fire up MongoDB, and ```npm start```

