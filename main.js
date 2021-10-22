const linksSocialMedia = {
  github: 'St4rThabs',
  youtube: 'UCp4wZ4xsYixx3tVlxVT8KsQ',
  facebook: 'Thábata Lima',
  instagram: 'thabata_limaa45',
  twitter: 'thabatalima45'
}

function changesSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Olivia'  ---- é o mesmo que o comando de baixo por causa que o javascript usando o DOM já entende que está pegando o id
  //userName.textContent = 'Marcelo'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changesSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
