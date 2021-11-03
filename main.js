const linksSocialMedia = {
  github: 'macielfrancisco',
  youtube: 'UCYWmoz09iLvQ6oLzgJzGA_w',
  facebook: 'macielfranciscoo',
  instagram: '_macielfrancisco',
  twitter: '_macielfrancisc'
}
/*
  function changeSocialMediaLinks() {
    document.getElementById(('userName'.textContent = 'Olivia'))
  }
  // Acessando o DOM e pegando o elemento h1 pelo ID atribuído para modificar o nome

  userName.textContent = 'Marcelo'
  // Pelo ID o JS já entende que a função já quer acessar o documento para modificar o nome, sem a necessidade de delegar isso no código

  changeSocialMediaLinks()
*/

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // Pode ser tanto '.children', como .textContent
    // for está utilizando como contador, as tags filhas de li
    const social = li.getAttribute('class')
    // pegando o elemento <li> pelo atributo class;
    // Necessário, devido o JS não irá conseguir mostrar todo o conteúdo do elemento chamado pela função
    // Variável de escopo, ou seja, caso a função acabe, ou siga um loop, ela seguirá de acordo, mesmo sendo uma const

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // Para acessar os conteúdos do objeto para atribuir na variável social, necessário utilizar [] para acessar o conteúdo do objeto a partir da variável
    // Acessando o filho da tag li na posição 0, pegando o href para fazer o loop  e trocar o acesso das redes sociais através da variável social e do objeto linksSocialMedia, usando o template string

    // alert(li.children[0].href)
    // acessando os filhos do elemento li, que são os links das redes sociais e mostrando ao usuário
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    /* Pegando a url através do JSON, que pra ele é apenas uma resposta - O fetch não sabe que o documento é um JSON
     */
    .then(response =>
      response.json()
    ) /* Promise onde irá pegar as respostas - pegando a variável e convertendo em JSON - chaves retiradas devido está passando apenas uma informação */
    .then(data => {
      userName.textContent = data.name
      /* Trocando o nome do h1 pela id para o nome que está no github */

      userBio.textContent = data.bio
      /* Trocando o texto da descrição na tag p pela id, para o nome que está no github */

      userGitHub.textContent = data.login
      /* Trocando o nome da tag a pela id, para o nome que está no github */

      userProfile.href = data.html_url
      /* Trocando o link do href na tag a pela id, para o link do perfil do seu usuário que está no github */

      userImage.src = data.avatar_url
    }) /* Armazenando a resposta em JSON */
}

getGithubProfileInfos()
