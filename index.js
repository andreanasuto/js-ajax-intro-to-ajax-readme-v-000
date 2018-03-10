function showRepositories(event,data) {
  console.log(this.responseText)
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListiner("load", showRepositories)
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
