---
layout: post
title: Como redirecionar páginas de erro no Blogger para a Página inicial
date: '2016-07-21 16:41:00'
tags: [blogger, seo, js]
category: [js]
image: /assets/img/como-redirecionar-paginas-de-erro-no/como-redirecionar-paginas-de-erro-no.jpg
author_ediano: true
coauthor_luciana: false
comments: true
ads: true
---

Os blogs por suas maiorias não estão livres de problemas ou erros. Uns dos problemas mais enfrentador pelo blogueiros são páginas ou artigos (posts) não encontrador.

Para resolver estes problemas, temos em mão um ótimo script de redirecionamento para sua página inicial.

**Como funciona?** Todas vez que um usuários, cair em uma página não encontrada ou que não exista em seu blog, o script redireciona automaticamente seus usuários para a página inicial do próprio e facilitante seus usuários a encontrar novos artigos.

1. Vá ao Painel do *Blogger\Configurações\Preferências de pesquisa*.

2. Clique em *Editar* da opção "*Página não encontrada" personalizada?*, copie e cole o código abaixo, dentro da caixa de definições.

```html
Desculpe, mas a página que você está procurando nesse blog não existe. Você será redirecionado a nossa página inicial em instantes.
<script type = "text/javascript">
BSPNF_redirect = setTimeout(function() { location.pathname= "/" }, 5000);
</script>
```

{:start="3"}
3. Clique em "*Salvar alterações*" e pronto agora é fazer o teste e aproveitar.

Este script funciona apenas para á plataforma Blogger, caso você tente usar em outra plataforma nos não nos responsabilizamos por danos causados em seus template ou em redirecionamento de links do seu blog para qualquer outra página.