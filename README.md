# DesafioIndra

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Conteúdo

* [Tecnologias](#tecnologias)
* [Executando o projeto](#executando-o-projeto)
* [Melhorias e Desafios](#melhorias-e-desafios)
* [Changelog](#changelog)

### Tecnologias
* [Angular](https://v8.angular.io/docs)
* [Ng2-Charts](https://valor-software.com/ng2-charts/)
* [Font Awesome](https://fontawesome.com)
* [Bootstrap](https://getbootstrap.com/)
* [Sass](https://sass-lang.com/)

### Executando o projeto

1. Clone o repositório
```sh
git clone https://github.com/juniorpaiva95/desafio-indra.git
```
2. Instale as dependências NPM
```sh
npm install
```
3. Execute o script para startar o projeto
```sh
npm run start
```

## Melhorias e Desafios
Alguns itens que poderia ser feito para melhorar:
*  Implementação de loading para melhorar a experiência do usuário
*  Melhoria na tela de detalhe do pokemon e posicionamento dos elementos.
*  Implementação de scroll infinito para melhorar a experiência do usuário, uma vez que evita que o usuário tenha que clicar mais vezes.
*  Customização de estratégia do router provider do angular para permitir o reaproveitamento de estado do componente de listagem com finalidade de evitar que o componente seja desmontado e os dados sejam perdidos, evitando mais requisições no back-end.
*  Testes e2e utilizando o protractor
*  Há um bom tempo que não trabalho com bootstrap, e agora percebo que houve uma grande evolução nessas novas versões com relação a utilitários (Classes de apoio para construir layouts com menos escrita de css puro). 
*  Demonstrado uma maior variedade de conhecimento no angular, com relação a comunicação entre componentes e com relação a própria api do angular e lifecycle dos componentes. Utilizando @Input, @Output, @ViewChild e outros decorators.
*  Demonstrado de alguma forma melhor o uso da api de formulários com Reactive Forms. Não vi grande utilidade no desafio, tendo em vista que se trata apenas de um consumo de api. E não um sistema de informação por exemplo com cruds e etc.

## Raciocinio de desenvolvimento

*  Utilização de scss para pré-processamento de estilos, mixins e variables.
*  Utilização de lazy loading module para carregamento tardio.
*  Utilização de changelog e versionamento
*  Utilização de destructuring, rxjs operators


## Changelog
Changelog [here](./CHANGELOG.md).