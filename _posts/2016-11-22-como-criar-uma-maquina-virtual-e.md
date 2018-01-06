---
layout: post
title: Como criar uma máquina virtual e instalar o Windows
date: '2016-11-22T21:21:00.000-04:00'
modified_time: '2016-11-22T21:21:36.121-04:00'
tags: [ Tutoriais, Windows, Informática ]
category: [ Tutoriais, Windows, Informática ]
img: /como-criar-uma-maquina-virtual-e/como-criar-uma-maquina-virtual-e.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
---

Ter um segundo computador para fazer testes é muito importante, evita que você comprometa o sistema operacional e os arquivos do computador principal, porém nem todos tem dois computadores, mas é possível ter vários a partir de um.

Um software criado pela Oracle (Oracle VM VirtualBox Manager) possibilita a criação de VMs (Máquinas Virtuais), que roda dentro do seu próprio computador, sem a necessidade de formatar o sistema operacional atual, entretanto para usar o VirtualBox em seu computador o mesmo deve seguir alguns pré-requisitos, ter pelo mesmo 4GB de memória RAM, 500GB de HD e processador Intel ou AMD de 1.5GHz.

**Detalhe:** É muito importante que você tenha noções básicas de formatação, em todo caso recomendo que veja o artigo <a href="http://www.insideblock.com/2016/07/como-formatar-seu-computador-com.html" target="_blank">como formatar seu computador com Windows 10</a>.

Se o seu PC físico estiver dentro dos pré-requisitos, podemos iniciar a instalação do VirtualBox, acesse <a href="https://www.virtualbox.org/wiki/Downloads" rel="nofollow" target="_blank">este link</a> para fazer o download do software! Mas antes de fazer a instalação temos uma dica para você que deve ser feita durante a mesma, quando chegar na segunda janela de instalação, onde é exibido as extensões dos tipos de conexões, clique em "**VirtualBox Host-Only Networking**" e desative a mesma alterando para "**Entire feature will be unavailable**", esta alteração vai evitar que ocorra erro ou conflito de conexões via rede caso esteja dentro de uma rede corporativa.

1. Com o VirtualBox instalado inicie o mesmo, repare que o software é bem simples e o mesmo tem poucas opções de configurações.

2. Agora com o VirtualBox aberto iremos criar e configurar a nova VM, clique em “**New**” (Novo), escolha um nome para a VM de sua preferência, em nosso caso iremos colocar “Windows 7” e usar o tipo “Microsoft WIndows”, versão “Windows 7 (64-bit)”.

3. Clique em “**Next**”, veja que agora o software lhe sugeriu uma quantidade de memória mínima para executar o tipo de plataforma selecionada, caso também esteja instalado o Windows 7 recomendó que aumente para 1024MB a quantia de memória RAM.

4. Novamente clique em “**Next**” em “**Create**” e na próxima tela novamente em “**Next**”, “**Next**”.

5. Agora em “**File location and size**”, escolha o tamanho do HD que você deseja usar na VM, eu recomendo deixar como padrão, caso use para fazer testes simples e poucos arquivos, mas se você costuma fazer testes com arquivos grandes, neste caso recomendo que aumente o tamanho do mesmo.

6. Clique em “**Create**”, veja que agora você voltou para a janela inicial do VirtualBox, quando você clica sobre a VM do lado direito e exibindo as informações de configurações, clique com o botão direito do mouse em uma das áreas das informações e habilite todas as funções que não estiver desativada.

Até aqui tudo certo, nossa VM já está criada e configurada, porém ela ainda não vai funcionar, pois agora iremos instalar o sistema operacional, como eu criei a VM para atender os requisitos do Windows 7 irei instalar o mesmo, para isso vou precisar de um DVD ou ISO original do sistema, do mesmo jeito que você também vai precisar, independente da plataforma escolhida!

7. Agora dê um duplo clique sobre a VM, aguarde alguns segundo para ela iniciar, veja que a VM iniciou mas a mesma ficou congelada com uma pequena janela no meio, clique no ícone de pasta e selecione o DVD ou a ISO de instalação do sistema operacional, clique em “**Abrir**” em em “**Start**”, conclua a instalação do sistema e pronto, agora você vai poder fazer os teste sem se preocupar com o computador físico. Leia também <a href="http://www.insideblock.com/2016/07/como-formatar-seu-computador-com.html" target="_blank">Como formatar seu computador com Windows 10</a>.

As VMs são verdadeiras quebra galhos, com elas podemos fazer todos os tipos de testes, desde a instalação de software complexos, baixar arquivos de natureza desconhecida, à fazer teste com vírus. Por hoje é só, até a próxima.