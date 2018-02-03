---
layout: post
title: Como desativar a seleção de texto no Blogger
date: '2016-07-21T14:05:00.000-04:00'
modified_time: '2016-12-05T09:30:22.149-04:00'
tags: [Aplicação, Otimização, Códigos]
category: [Segurança Digital]
img: /como-desativar-selecao-de-texto-no/como-desativar-selecao-de-texto-no.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
ads_top_post: true
ads_top_post_ads: true
ads_foot_post: true
ads_foot_post_ads: true
---

A maioria dos blogueiros, procuram sempre uma forma de adquirir mais segurança ao seus blogs, boa parte deles procuram como evitar o plagio (copia do original), entre outros crimes cometidos na internet, unas das formas mais fácil é com a instalação de código de segurança em HTML dentro de seus Templates.

Onde o código tem a função de desativar as seleções de texto do seu blog, e evitando que seus artigos seja selecionados para copia, e publicado em qualquer outro blog.

Se você publica tutoriais entre outros posts em seu blog, onde seus visitantes tenha que copiar algum tipo de código ou texto como neste artigo, não recomendamos que instale este código em seu Template.

Recomendamos que antes de fazer qualquer alteração em seu template que faça o <b>BACKUP</b> do próprio.

* Acesse o Painel do Blogger, escolha o blog que você deseja instalar, selecione a opção "Modelo" e clique em "Editar HTML".

* Agora procure pelo código abaixo. 

        </head>

* Cole o seguinte código ABAIXO do tag encontrada.

        <script type="text/javascript">
        function disableSelection(target){
        if (typeof target.onselectstart!="undefined") //IE route
        target.onselectstart=function(){return false}
        else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
        target.style.MozUserSelect="none"
        else //All other route (ie: Opera)
        target.onmousedown=function(){return false}
        target.style.cursor = "default"
        }
        </script>
        <script>
        function click() {
        if (event.button==2||event.button==3) {
        oncontextmenu='return false';
        }
        }
        document.onmousedown=click
        document.oncontextmenu = new Function("return false;")
        </script>

* Procure pelo seguinte código.

        </body>

* Cole o código abaixo acima do código encontrado.

        <script type="text/javascript">
        disableSelection(document.body) //disable text selection on entire body of page
        </script>

O código instalado em seu Template desativa, qualquer tipo de seleção de texto em seu blog, mesmo que eles esteja ou não dentro de seus artigos publicados.