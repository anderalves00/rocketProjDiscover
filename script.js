function toggleMode() {
  const html = document.documentElement                                   //document é a representação de um objeto em JS
                                                                            //.documentElement permite acesso ao html
                                                                            //.body permite acesso ao body
  html.classList.toggle("light")                                          //toggle é uma função nativa do JS que faz automaticamente a lógica abaixo
  /*
  if (html.classList.contains('light')) {                                 //verifica de a lista de classe do html contem a ('classe informada')
    html.classList.remove('light')                                        //se o retorno for verdadeiro a classe será removida
  } else {
    html.classList.add('light')                                           //se o retorno for falso a classe será adiciona
  }
  */
  const img = document.querySelector("#profile img")                      //.querySelector permite acesso ao ('seletor CSS indicado')
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/andy-avatar-light.jpg")                  //.setAttribute permite alterar o ('atributo informado', 'pela alteração indicada')
    img.setAttribute("alt", "Foto de perfil do usuário no modo light")
  } else {
    img.setAttribute("src", "./assets/andy-avatar-dark.jpg")
    img.setAttribute("alt", "Foto de perfil do usuário no modo dark")
  }
}