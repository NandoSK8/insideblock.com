---
layout: post
title: ID vs CLASS quem vence entre os seletores HTML
date: '2016-07-21T18:49:00.000-04:00'
modified_time: '2016-12-05T09:30:59.332-04:00'
tags: [Desenvolvimento, Códigos, Otimização]
category: [Desenvolvimento Web]
img: /id-vs-class-quem-vence-entre-os/id-vs-class-quem-vence-entre-os.jpg
author: true
author_ediano: true
coauthor_luciana: false
comments: true
ads: true
ads_adsense: true
---

Os IDs e as Classes são seletores importantes de uma estrutura HTML, eles são tão importante que não é possível desenvolver qualquer tipo de site sem eles. Entretanto ele tem todas as igualdades e apenas uma diferença.

Em minha pouca experiência com HTML e CSS, eu proponho minha própria opinião sobre o assunto, ao qual tenho em mente que isso pode ajudar muitos os iniciantes com desenvolvimento web.

Para criar um site é necessário que você siga os padrões do HTMl, já para os IDs e as CLASS não existe padrões de nomes de seletor, portanto não é preciso criar um nome padronizado para usar no seu projeto.

As únicas regras usadas como padrões é o forma de fazer o apontamento para o seletor; Toda vez que você usar um ID para apontar o CSS, você se usar "#" sem aspas antes do nome do seletor; E para fazer o apontamento para o CSS de uma ClASS você deve usar "." sem aspas antes do nome do seletor.

**#ID:** A regra básica dos ID é para o nome do seletor, o nome nunca pode se repetir ou ser adicionado a outro ID, ou seja os IDs carrega nomes de seletores únicos. Veja o exemplo abaixo.

    <h1 id="id-seletor1"> ID nunca pode se repete </h1>

    <h2 id="id-seletor2"> ID nunca pode se repete </h2>

    <h3 id="id-seletor3"> ID nunca pode se repete </h3>

**.CLASS:** Já para as CLASS não à regras de nome do seletor, elas pode se repetir sem nem um problema, não importa quantas vezes você tenha usar a mesma CLASS. Veja o exemplo.

    <h1 class="class-seletor"> CLASS sempre pode se sepete </h1>

    <h3 class="class-seletor"> CLASS sempre pode se sepete </h3>

    <h3 class="class-seletor"> CLASS sempre pode se sepete </h3>

Com você tem visto os exemplos. Geralmente quando se usar IDs, você também usar um código CSS maior; já para as CLASS um único seletor do código CSS, pode ser adicionado a vários outros, sem a necessidade de fazer um novo código.

Com base nisso percebo que as CLASS pode deixar seu site mais rápido, já que a mesma terá menos códigos para personaliza o site, e menos código para o carregamento ao abrir uma pagina.