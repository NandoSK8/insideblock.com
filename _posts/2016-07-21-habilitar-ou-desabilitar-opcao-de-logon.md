---
layout: post
title: Habilitar ou desabilitar opção de logon (Ctrl-Alt-Delete)
date: '2016-07-21T18:42:00.000-04:00'
modified_time: '2016-10-02T00:24:25.495-04:00'
tags: [Sistema, Aplicação]
category: [Sistema]
img: /habilitar-ou-desabilitar-opcao-de-logon/habilitar-ou-desabilitar-opcao-de-logon.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
ads_top_post: true
ads_top_post_ads: true
ads_foot_post: true
ads_foot_post_ads: true
---

O tela segura de logon do Windows, geralmente fica disponível para usuários que estão dentro de rede corporativa, controlado por um servidor de AD, em casos raros esta tela também pode ser exibida para usuários de computadores comuns, causando um certo desconforto para o usuário, obrigando a pressionar as teclas Ctrl-Alt-Del toda vez que ele ligar o computador ou quando ele ativar a tela de bloqueio.

Para que você não tenha mais esse desconforto, siga o tutorial abaixo; Detalhe para os usuários de AD, não é possível desativar esta opção em seu computador, pois o mesmo é controlado por um servidor remotamente.

## Primeiro método
1. Pressione a tecla “Windows+R” digite “netplwiz” e pressione Enter”

2. Clique em Avançado, desmarque a opção “Exibir que os usuários pressionem Ctrl-Alt-Delete”.

3. Reinicie o Windows, caso continue pedindo Ctrl-Alt-Delete na tela de logon, siga para o próximo método.

![Contas de usuário](/assets/img/post/habilitar-ou-desabilitar-opcao-de-logon/contas-de-usuario.png)

## Segundo método
1. Pressione a tecla “Windows+R” digite “secpol.msc” sem aspas e pressione Enter.

2. Navegue para Politicas locais › Opções de segurança; De um clique duplo em “Logon interativo: não exigir Ctrl-Alt-Del”.

3. Marque a opção Desabilitado, Aplique e em OK.

![Politicas de segurança local](/assets/img/post/habilitar-ou-desabilitar-opcao-de-logon/politicas-de-seguranca.png)

Espero ter ajudado como esta informações, caso tenha alguma outra duvida deixe um comentários.