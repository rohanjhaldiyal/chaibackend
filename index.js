require("dotenv").config();
const express = require("express");
const app = express();
const userData = {
  login: "rohanjhaldiyal",
  id: 78672434,
  node_id: "MDQ6VXNlcjc4NjcyNDM0",
  avatar_url: "https://avatars.githubusercontent.com/u/78672434?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/rohanjhaldiyal",
  html_url: "https://github.com/rohanjhaldiyal",
  followers_url: "https://api.github.com/users/rohanjhaldiyal/followers",
  following_url:
    "https://api.github.com/users/rohanjhaldiyal/following{/other_user}",
  gists_url: "https://api.github.com/users/rohanjhaldiyal/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/rohanjhaldiyal/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/rohanjhaldiyal/subscriptions",
  organizations_url: "https://api.github.com/users/rohanjhaldiyal/orgs",
  repos_url: "https://api.github.com/users/rohanjhaldiyal/repos",
  events_url: "https://api.github.com/users/rohanjhaldiyal/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/rohanjhaldiyal/received_events",
  type: "User",
  site_admin: false,
  name: "Rohan Jhaldiyal",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: "Hey there, this is Rohan, a CS Major undergrad trying his hands on development.\r\n\r\nI am just starting to learn so any advice is welcome.\r\n\r\n~🐣",
  twitter_username: "rohanjhaldiyal",
  public_repos: 8,
  public_gists: 0,
  followers: 2,
  following: 3,
  created_at: "2021-02-07T03:26:54Z",
  updated_at: "2023-10-02T08:35:49Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("rohanjhaldiyal");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});
app.get("/github", (req, res) => {
  res.json(userData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
