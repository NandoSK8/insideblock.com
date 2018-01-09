---
layout: post
title: Ocultar elementos em páginas específica do Blogger
date: '2016-07-21T22:34:00.000-04:00'
modified_time: '2016-12-05T09:30:45.666-04:00'
tags: [Desenvolvimento, Otimização, Web]
category: [Aplicação]
img: /ocultar-elementos-em-paginas-especifica/ocultar-elementos-em-paginas-especifica.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
---

Com esta dica você vai aprender a ocultar e exibir elementos do blogger em determinadas paginas, quando instalamos um elemento no blogger por parão ele mostra na página inicial, nas páginas internas, incluindo as páginas de arquivos e marcadores.

Para que você possa ocultar ou exibir elementos em determinadas página você tem que fazer uso das condicionais do Blogger, são com elas que você poderá deixar seu template de modo que a página inicial se diferencie das demais páginas, ajuda a melhorar o carregamento do seu blog, ao ocultar certos elementos ‘mais pesados’ da página inicial.

## Exemplificando para um melhor entendimento
Digamos que você instalou um anuncio em seu blog, por padrão este anuncio vai aparecer em todas as página, porem você que que ele apereça apenas na página inicial (home).

Acesse o **Painel do Blogger › Modelo › Editar HTML**. (Recomendamos que faça o backup do seu template ante de fazer qualquer alteração).

No nosso exemplo, este elemento é o anuncio, então o código html que inicia este anuncio vai estar assim:

    <!--Inicio do Anuncio Que Iremos Ocultar-->
    <div id="ads" class="ads">

    </div>
    <!--Fim do Anuncio Que Iremos Ocultar-->

Agora você deve colar o código da condicional que define onde o anuncio irá aparecer, que no nosso exemplo será apenas na home.

Você deve colar o código de abertura da condicional logo ACIMA da linha que inicia o código html do anuncio, e APÓS o código de encerramento do anuncio, você deve colar a tag de fechamento da condicional.

Deverá ficar assim:

    <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <!--Inicio do Anuncio Que Iremos Ocultar-->
    <div id="ads" class="ads">

    </div>
    <!--Fim do Anuncio Que Iremos Ocultar-->
    </b:if>

No exemplo acima, o anuncio vai aparecer somente na página inicial do blog.

Não esqueça que: Sempre que quiser ocultar um elemento em determinada página, você deve colar o código de abertura da condicional logo ACIMA da linha que inicia o código html do elemento, e APÓS o código de encerramento dele, você deve colar a tag de fechamento da condicional.

## Código específicos da condicional para função ocultar
Para Ocultar um elemento APENAS na Página Inicial:
> &lt;b:if cond='data:blog.homepageUrl != data:blog.url'&gt;

Para Ocultar um elemento APENAS nas Páginas internas(de postagens):
> &lt;b:if cond='data:blog.pageType != "item"'&gt;

Para Ocultar um elemento APENAS na página inicial, de marcadores e arquivo:
> &lt;b:if cond='data:blog.pageType == "item"'&gt;

Para ocultar um elemento APENAS nas Páginas Estáticas:
> &lt;b:if cond='data:blog.pageType != "static_page"'&gt;

## Código específicos da condicional para função exibir/mostrar
Para MOSTRAR um elemento APENAS na Página Inicial:
> &lt;b:if cond='data:blog.url == data:blog.homepageUrl'&gt;

Para MOSTRAR um elemento APENAS nas Páginas Inicial, de Marcadores e de Arquivos:
> &lt;b:if cond='data:blog.pageType != "item"'&gt;

Para MOSTRAR um elemento APENAS nas Páginas Individuais dos Posts(páginas internas):
> &lt;b:if cond='data:blog.pageType == "item"'&gt;

Para MOSTRAR um elemento APENAS nas Páginas Estáticas:
> &lt;b:if cond='data:blog.pageType == "static_page"'&gt;

Para MOSTRAR um elemento APENAS na Página de um Post Específico:
> &lt;b:if cond='data:blog.url == "URL-DO-POST"'&gt;

Para MOSTRAR um elemento APENAS nas Páginas de Arquivos:
> &lt;b:if cond='data:blog.pageType == "archive"'&gt;

Estas são as condicionais suportáveis pelo Blogger. Se algum código que você inseriu não deu certo, eu recomendo que você teste, usando o outro.