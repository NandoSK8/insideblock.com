---
layout: post
title: Como colocar o título do post antes do nome do Blog do Blogger
date: '2016-07-21T18:45:00.000-04:00'
modified_time: '2017-05-02T13:21:44.858-04:00'
tags: [Otimização, SEO, Códigos]
category: [Otimização]
img: /como-colocar-o-titulo-do-post-antes-do/como-colocar-o-titulo-do-post-antes-do.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
ads: true
ads_adsense: true
---

Nos Templates padrões do Blogger, quando se é aberto o mesmo blog em várias janelas ou guias em um navegador, aparece por primeiro o nome do blog e depois o título da postagem.

Com a personalização do título do Post antes do nome do Blog; Nos provedores de busca pode ajuda, a ter todas as paginas do blog indexadas e gerar mais visitas por isso vale a pena personaliza o títulos do post e nome do seu blog.

* Acesse o Painel do Blogger › Modelo › Editar html, aperte as teclas: ctrl+f Procure pela linha abaixo.

        <title><data:blog.pageTitle/></title>

Substitua o código encontrado, pelo código abaixo:

    <b:if cond='data:blog.pageType == &quot;item&quot;'>
    <title><data:blog.pageName/> - <data:blog.title/></title>
    <b:else/>
    <title><data:blog.pageTitle/></title>
    </b:if>

Clique em Visualizar, se estiver certo clique em ‘Salvar Modelo’.

Pronto. A partir de agora, o título de suas postagens será apresentado nos Sites de Busca, antes do nome do Blog. Só vale para o Blogger.