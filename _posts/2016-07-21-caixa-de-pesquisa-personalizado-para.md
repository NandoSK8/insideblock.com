---
layout: post
title: Caixa de pesquisa personalizado para blogs
date: '2016-07-21T17:18:00.000-04:00'
modified_time: '2016-12-05T09:30:45.670-04:00'
tags: [Códigos, Otimização, SEO]
category: [Desenvolvimento Web]
img: /caixa-de-pesquisa-personalizado-para/caixa-de-pesquisa-personalizado-para.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
ads_top_post: true
ads_top_post_ads: true
ads_foot_post: true
ads_foot_post_ads: true
---

A caixa de pesquisa ( ou caixa de busca) é um dos recursos mais importantes em um blog. É através dela que o leitor irá procurar por outros posts mais antigos e de maior interesse dele. É muito útil também para o dono do blog encontrar seus próprios artigos e tornando mais fácil a navegação em seu blog ou site.

OBS. O código da caixa de pesquisa funciona para qualquer tipo de plataforma Blogger, WordPress e Outros, mas fique atento com todas as descrições do tutorial se você deseja editar o código.

## Primeiro passo
Entre no Painel do seu Blogger clique em Layout › Adicionar um Gadget › HTML/JavaScript e cole o código abaixo.

    <center><style type="text/css">
    #pesquisafsm-caixa {
    background: #eee; padding:15px; border:15 none; width:340px;
    }
    #pesquisafsm-botao {
    border: 1px solid #222;
    color: #eee;
    background: url(http://i.imgur.com/cz4sguf.png) no-repeat left #4591fa;
    margin-left: -3px;
    color:#fff;
    font: 'trebuchet ms', trebuchet;
    padding:15px 15px 15px 22px;
    border:0 none;
    font-weight:bold;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    }
    #pesquisafsm-botao:hover {
    cursor: pointer;
    background:  url(http://i.imgur.com/cz4sguf.png) no-repeat left #2375E6;
    }
    </style>
    <form action="/search" id="searchthis" method="get" style="display: inline;">
    <input id="pesquisafsm-caixa" name="q" placeholder="O que está procurando?" size="50" type="text" /> <input id="pesquisafsm-botao" type="submit" value="Pesquisar" /> </form></center>


**Veja as alterações que você pode fazer:** Observe que os trechos na caixa de pesquisa determina a posição da mesma, no código atual no centro de qualquer Gadget.

    <center> </center>

* Largura da caixa de pesquisa

        background: #eee; padding:15px; border:15 none; width:340px;

* O trecho (padding:15px; border:15 none;) desta linha determina pela altura da caixa de pesquisa.

* O trecho (width 340px;) desta linha determina pelo tamanho da caixa de pesquisa.

* Botão padding

        padding:15px 15px 15px 22px;


Posição do botão de pesquisa.

* Descrição da caixa de pesquisa

        <input id="pesquisafsm-caixa" name="q" placeholder="O que está procurando?" size="50" type="text" />


* (O que está procurando?) Este pequeno texto descreve-se dentro da caixa de pesquisa.

* O trecho (size="50") determina o numero de caracteres que pode ser digitado dentro da caixa de pesquisa.

As demais linha não é recomendado editar os valores dos numero, pois o mesmo pode calsar erros a caixa de pesquisa.