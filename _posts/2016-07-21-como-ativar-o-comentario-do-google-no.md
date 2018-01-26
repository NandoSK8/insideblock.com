---
layout: post
title: Como ativar o comentário do Google+ no Blogger
date: '2016-07-21T12:40:00.000-04:00'
modified_time: '2016-12-05T09:30:45.658-04:00'
tags: [Redes Sociais, Otimização, SEO]
category: [Otimização]
img: /como-ativar-o-comentario-do-google-no/como-ativar-o-comentario-do-google-no.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
ads: true
ads_adsense: true
---

O Blogger e o Google Plus estão cada vez mais integrados um com o outro, o Google + por sua vez desenvolveu uma um caixa de comentários para integrar com o Blogger. Esta ferramenta pode trazer maiores resultados para os webmaster, aumentando a popularidade de seus projetos na internet, já que ela facilita a interatividade dos leitores entre si e com o administrador da página.

Portanto quando nos adicionamos os comentários do Google+ ao Blogger dever atender alguns requisitos, como criar um página para o seu blog, isso ajuda a popularizar melhor sua página e não alterar o URL do blog, pois se o URL do blog for alterado, isso afetará negativamente os comentários existentes.

* Clique na seta expandir sobre o blog selecionado Configurações › Postagens, comentários e compartilhamentos.

* Role a página ate "**Comentários do Google+**" selecione o botão dropdown "**Sim**".

Confira se a caixa de cometário foi adiciona ao blog automaticamente, caso ela não foi adicionada você terá que corrigir o HTML do seu blog.

Atenção: Antes de executar os passos a seguir recomendo que faça o backup do seu template HTML. Para isso clique em Modelo › Fazer backup/Restaurar e Fazer download do modelo completo. Ao concluir o download prossiga com os passos abaixo.

* Clique em Editar HTML procure por

        <div class='post-footer'>

* Adicione o código abaixo depois do código encontrado.

        <div class='cmt_iframe_holder' data-viewtype='FILTERED_POSTMOD' expr:href='data:blog.canonicalUrl'/>

Clique em "Salvar modelo" e confira como ficou suas postagens com a nova caixa de comentário.