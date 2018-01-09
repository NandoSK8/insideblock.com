---
layout: post
title: 'Resolver problema: Perfil temporário do Windows'
date: '2016-07-21T14:08:00.000-04:00'
modified_time: '2016-10-01T14:08:51.276-04:00'
tags: [Sistema Operacional, Windows, Informática]
category: [Sistema Operacional]
img: /resolver-problema-perfil-temporario-do/resolver-problema-perfil-temporario-do.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
---

A mensagens de perfil temporário pode acontecer por vários motivos, toda vez que você faz logon em um determinado computador a mensagem de “perfil temporário” aparace na barra de notificações do Windows, e toda vez que você salva algum arquivo e reiniciar ou sair do usuário o arquivo é apagado apresentando novamente o mensagem de perfil temporário ao fazer logon. Este tipo de erro é comum em computadores ligados a uma rede corporativa conectada a uma domínio com usuário de AD.

Esta mensagem começa a aparece quando um usuário tem sua pasta excluída do “C:\Users”, cada usuário possui uma chave única de registro dentro do sistema operacional, quando esta pasta é removida o usuário continua com chave ativa mas não com todas as funções funcionando, por isso toda vez que ele fazer logon a mensagem de perfil temporário é apresentada, para que esta mensagem pare de aparecer você tem que remover a chave de registro do usuário do Windows.

1. Pressione tecla **WINDOWS + R**, digite “**regedit**” sem as aspas e pressione Enter. Lembrando para executar esta função você deve ser o administrador do sistema.

2. No editor do Regedit vá em **HKEY_LOCAL_MACHINE › SOFTWARE › Microsoft › Windows NT** dentro da pasta **Windows NT** expanda a guia **CurrentVersion** e procure pela pasta **ProfileList** expanda a pasta.

3. Procure pela pasta que contém o valor do usuário que tem o perfil temporário, Clique com o botão direito sobre a pasta e em **Excluir**, vai perguntar se tem certeza que deseja excluir clique em sim. Reinicia o Windows e faça logon novamente.

![Registro do Windows](/img/post/resolver-problema-perfil-temporario-do/regedit-windows.png)

Espero ter ajudado, se você gostou deste artigo, nos ajude e compartilhe com seus amigos.