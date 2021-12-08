### **Documentação da API**:

_base url_ : `http://localhost:8080/`

## Instalação

1. npm install ou yarn para instalar as depêndencias
2. Criar um Banco de Dados em MySQL com o nome: _adOptChallenge_ e importar o ficheiro adOptChallenge.sql
3. Importa o ficheiro adOptChallenge.sql lá na bd criada
5. Dentro do directorio `src/insomnia/insomnia.json`
   Exportar esse ficheiro lá no insominia do seu computador
6. No terminal:

# development

$ yarn dev


7. Testar as rotas no insomnia

### **Rodando no Docker**

Basta abrir o terminal no diretorio do projecto e rodar o seguinte:

1.  `docker-compose build/sudo docker-compose build` - no windows/Linux
2.  `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3.  `docker-compose up/docker-compose up` - Para rodar a aplicação também
4.  Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando
5.  Testar os endpoints


## **Tecnologias/Ferramentas usadas**

- NodeJs
- ExpressJs
- TypeScript
- MySQL
- typeorm
- docker
- Lint
- Prettier
- Insomnia

_By: luiscaputo_

## Rodando a Aplicação
