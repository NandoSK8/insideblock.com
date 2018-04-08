---
layout: post
title: Como colocar numeração de páginas no Blogger
date: '2016-07-21T16:39:00.000-04:00'
modified_time: '2017-06-22T23:19:15.434-04:00'
tags: [SEO, Otimização, Desenvolvimento, Web]
category: [Desenvolvimento Web]
img: /como-colocar-numeracao-de-paginas-no/como-colocar-numeracao-de-paginas-no.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
ads_top_post: true
ads_top_post_ads: true
ads_foot_post: true
ads_foot_post_ads: true
---

Muitos usuários do Blogger, geralmente opta por fazer algumas alterações em seu template, para facilitar a navegação de seus usuários e tona-la mais acessível todas as informações publicada em seu blog. As alterações do template varia da necessidade de cada blogueiro, sendo assim hoje nos vamos lhe ensinar a por numeração de página em seu blog do Blogger.

A numeração de página para blogs facilita a navegação de seus usuários, deixando seu blog mais otimizado, para encontrar com mais facilidade seus artigos publicado, deixando cada um deles mais organizado junto com a categoria escolhida em suas pesquisas.

Antes de fazer qualquer alteração recomendamos que você faça o BACKUP do modelo atual do seu blog, para evitar problemas e alterações indesejáveis do template.

## Adicionando o Script
* Pressione Ctrl+F e procure pelo seguinte código

        </body>

Antes dele adicione o seguinte:

    <style type='text/css'>
    .blog-pager{float:right;font:bold 12px Arial;text-align:center;padding:15px 10px;margin:0}
    .showpageNum a,.showpage a{background:#fff;text-decoration:none;white-space:nowrap;color:#222;margin:10px 3px;padding:5px 10px;border:1px solid #ddd}
    .showpageNum a:hover,.article-post .showpage a:hover{color:#fff;text-decoration:none;background-color:#4285f4;border:1px solid #4285f4}
    .showpageOf{display:none;margin:0}
    .showpagePoint{color:#fff;text-decoration:none;background-color:#4285f4;font-size:12px;margin:10px 3px;padding:5px 10px;border:1px solid #4285f4}
    .blog-pager-newer-link,.article-post home-link,.article-post .blog-pager-older-link{padding:10px}
    </style>
    <script type='text/javascript'>
                var postperpage=10;
                var numshowpage=3;
                var upPageWord ='&#8249;Anterior ';
                var downPageWord =' Próximo&#8250;';
                var urlactivepage=location.href;
                var home_page="/";
    </script>
    <script src='https://multicamada.github.io/FreeCodeProject/JavaScript/PaginationForBlogger.js' type='text/javascript'></script>

##Alteração do código
Na linha **(var numshowpage=10;)** o numero 10 exibe a o resultado de página que o blog tem.

Na linha **(var postperpage =3;)** o numero 3 exibe o resultados de artigos encontrador por página.

No trecho **(#)** você pode alterar os valores (a frente de #), para combinar com as cores do seu blog.

## Corrigindo o Template
* Agora procure pelo trecho a seguinte:

        'data:label.url'

Substitua todos os código encontrado por:

    'data:label.url + &quot;?&amp;max-results=10&quot;'

Alterar o os resultados da correção do Template

No trecho **(‘max-results=5&quot;’)** do código, o numero 5 e o resultado de artigos encontrado por categoria selecionada.

Salve o template e faça os devidos teste, para ver se esta tudo certo, se você não gostou da numeração de página, você pode inserir o modelo antigo, o BACKUP que recomendamos fazer do modelo anterior do seu blog.