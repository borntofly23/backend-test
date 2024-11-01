require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "borntofly23",
  "id": 81086477,
  "node_id": "MDQ6VXNlcjgxMDg2NDc3",
  "avatar_url": "https://avatars.githubusercontent.com/u/81086477?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/borntofly23",
  "html_url": "https://github.com/borntofly23",
  "followers_url": "https://api.github.com/users/borntofly23/followers",
  "following_url": "https://api.github.com/users/borntofly23/following{/other_user}",
  "gists_url": "https://api.github.com/users/borntofly23/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/borntofly23/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/borntofly23/subscriptions",
  "organizations_url": "https://api.github.com/users/borntofly23/orgs",
  "repos_url": "https://api.github.com/users/borntofly23/repos",
  "events_url": "https://api.github.com/users/borntofly23/events{/privacy}",
  "received_events_url": "https://api.github.com/users/borntofly23/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rushikesh Jadhav",
  "company": null,
  "blog": "",
  "location": "Mumbai, India",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "born_to_fly23",
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 5,
  "created_at": "2021-03-21T12:24:31Z",
  "updated_at": "2024-10-31T20:28:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('google.com')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Login</h1>')
})

app.get("/youtube", (req, res) => {
  res.send("youtube.com")
})

app.get("/github", (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})