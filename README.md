# React Basic Typescript Redux Starter

# package.json scripts
- `start:dev` inicia o servidor com ambiente de desenvolvimento
- `start:prod` inicia o servidor com ambiente de produção
- `build:dev` compila a aplicação com ambiente de desenvolvimento
- `build:prod` compila a aplicação com ambiente de produção

## Apresentação
Este projeto é uma coleção de toda a experiência praticada com react e outros frameworks como angular, agora venho trazer a comunidade esta experiência para que ela ajude as pessoas a organizarem seus projetos pessoais ou profissionais também ficarei grato a evolução do mesmo, logo estou disponibilizando sobre uma licença livre [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR)

## Definições
- Alias: Alias é um mapeamento para um aquivo ou diretório do código fonte da aplicação suas configures ficam no arquivo `tsconfig.paths.json` para saber mais veja em https://www.typescriptlang.org/docs/handbook/module-resolution.html, note que alias terminados com `/*` indicam um diretório logo este deve ser importado com o nome do arquivo desejado e alias simples importam o aquivo index.ts do diretório.

## Organização
Faz-se grande uso do eslint para organizar o código bem como a estrutura do projeto.
Abaixo serão apresentadas as organizações por diretório e seus alias para serem importados.

### SRC
Esta é a raiz do projeto nela se localizam 2 arquivos importantes o primeiro é o ponto de entrada da aplicação `index.tsx` onde é inicializado o react e importado o estilo principal.

### src/styles
Preferencialmente este projeto faz o uso do sass porém pode-se utilizar o css simples, a finalidade desta pasta é conter os estilos globais como resets, temas, variáveis de configurações do sass, aqui não guardamos estilos reservados a componentes, estes iremos ver mais em frente.

Seu alias é `@styles/*`.

Ex: `import '@styles/vars.scss'`

### src/media
Aqui ficam os arquivos de mídia como ícones, imagens, svg etc.

Seu alias é `@media/*`.

Ex: `import logo from '@media/logo.svg'`

### src/locale
Aqui se localizam as configurações e dicionários da biblioteca [i18next](https://www.i18next.com/) a qual nos ajuda a implementar o suporte a multiplas linguagens no react.
Suas estrutura é bastante simples na pasta languages ficam os dicionários separados por namespaces os quais são importados, organizados e exportados no aquivo index.ts de cada pasta de sua linguagem.
Este diretório não contém alias.

### src/app
Aqui se localiza a aplicação em si.

### src/app/components
Para melhor organizar o projeto foram categorizados os componentes e seus usos no react.
- Todos elementos, views e shared são exportados como default em seguida são exportados com uma nomeclatura pelo index.ts das respectivas pastas.

#### src/app/components/elements
Nesta pasta se localizam os elementos básicos da interface da aplicação como botões, links inputs etc.
- Note que cada componente se localiza em uma pasta com o seu mesmo nome seguido do seu css próprio.
- Todos os componentes devem ser exportados no index.ts

Seu alias é `@components/elements`.

Ex: `import { Button } from '@components/elements`

#### src/app/components/shared
Nesta pasta se localizam componentes compostos e criados com uma finalidade mais específica,podemos colocar aqui menus e itens de layout entre outros.
- Note que cada componente se localiza em uma pasta com o seu mesmo nome seguido do seu css próprio.
- Todos os componentes devem ser exportados no index.ts

Seu alias é `@components/shared`.

Ex: `import { MobileHeader, TabletHeader, WebHeader } from '@components/shared`

#### src/app/components/views
Nesta pasta se localizam os componentes apresentados na aplicação dependendo da aplicação elas podem ser apresentadas ao lado de outras views ou roteadas utilizando-se do react-router.
Alguns projetos utilizam de containers porém com a vinda dos react-hooks estes perdem o sentido do uso, logos dispatch's no redux são feitos direto nas views.
- Todos os componentes devem ser exportados no index.ts

Seu alias é `@components/views`.

Ex: `import { AppView } from '@components/views`


#### src/app/components/hooks
Com a vinda dos react-hooks tornou-se a necessidade de se criar alguns hooks customizados conforme a necessidade surge durante o desenvolvimento da aplicação, então aqui ficam os hooks customizados.
- Todos os hooks devem ser exportados no index.ts
- Todos os hoks devem ser exportados no index.ts

Seu alias é `@components/hooks`.

Ex: `import { useDevice } from '@components/hooks`

### src/app/config
Aqui ficam as configurações gerais da aplicação como rotas de api ou rotas do próprio router dentre outras configurações.

Seu alias é `@config/*`.

Ex: `import themeColors from '@config/theme'`


### src/app/utils
Nesta pasta ficam as funções, constantes e outras ferramentas reutilizáveis pela aplicação.

### src/app/types
Na aplicação principalmente com o redux precisamos organizar a tipagem bem como outras utilidades, logo nesta pasta ficam os tipos globais da aplicação como o `IAppState` que mapeia todo o estado da aplicação no redux.
- Todos os tipos deve ser exportados no index.ts

Seu alias é `@types`.

Ex: `import { IAppState } from '@types`

### src/app/redux/actions
Aqui são definidas todas as action creators e as constantes do redux.
Todos os arquivos de actions devem terminar com `.actions.ts`
- Note que as actions creators são agrupadas em um objeto e assim exportadas isolando o contexto e assim evitando conflitos de nomeclatura bem como a simplificação das mesmas.

Seu alias é `@redux/actions/*`.

Ex: `import { todoActions } from '@redux/actions/todo.actions`

### src/app/redux/reducers
Aqui são definidos os reducers.
No arquivo `index.ts` são mapeados os reducers.

Todos os arquivos de reducers devem terminar com `.reducer.ts`

Preste muita atenção pois os reducers mapeados aqui devem ser mapeados na interface `IAppState`.

## Conceitos
Use e abuse de tipos.
Ao utilizar um estado do redux mapeie utilizando da interface `IAppState`

EX: `const todosState = useSelector((state: IAppState) => state.todos.todos);`

Isto ajuda a evitar erros de nomeclatura bem como erros de tipos ou ao tentar acessar um atributo de algo nulo ou undefined.