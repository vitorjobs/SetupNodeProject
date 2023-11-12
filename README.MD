Setup padrão

Node
TypeScript
Jest: npx jest --init para iniciar o arquivo jest.config.js
Pritter
ESLint (Iniciar o arquivo eslint: npx eslint --init)
Husky - Padronização de commits (Vai rodar o Pritter ESLint e os testes antes para validar o commit)

- npm run husky:prepare para criar a pasta .husky
- npx husky add .husky/pre-commit "npm run lint-staged" (deve ser executado antes de todos os commits)
- criar arquivo manualmete no .lintstagerdrc.json
