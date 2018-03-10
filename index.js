function showRepositories(event,data) {
  console.log(this.responseText)
  let repoList = '<ul>'

  for (var i = 0; i < this.responseText.length; i++) {
    array[i]
  }
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListiner("load", showRepositories)
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
