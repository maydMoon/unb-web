# Unb Web
### Alunos: Mateus Valério e Maylla Krislainy
### Engenharia de Software 2023.1

O projeto Chamadas UNB SAAS tem como objetivo de ser um Software as a Service que possibilite o professor crie turmas e aulas para que seu alunos assinem a chamada. O aplicativo pretende fazer isso por meio da geração de um QRCODE único para cada aula. Com seu smartphone o aluno irá escanear esse QRCODE provido pelo professor e então será capaz de assinar a chamada.

## Instalar as Dependencias

Clone este repositório ou simplesmente baixe-o. Para instalar as dependência: `pip install -r requirements.txt`

## Run App

` python -m flask --app application run` or `flask --app application run`

## Criar migration incial para app (Não necessário se a pasta migration já estiver presente no diretório)

`flask --app application db init` (Caso não haja um banco de dados presente) `flask --app application db migrate -m "Initial migration."` `flask --app application db upgrade`

## Criar novo banco de dados

Se desejas criar uma nova base de dados, será preciso:
1 - Deletar a pasta migrations e o arquio data.sqlite dentro de /app
2 - Executar os comandos para criar a migration inicial, explicados acima (db init, dg migrate e db upgrade)
3 - (Opcional mas recomendado) Popular o banco de dados com dados fictícios

## Popular o banco de dados com dados iniciais fictícios

É importante dar seed na seguinte ordem:
`flask --app application seed professores`
`flask --app application seed alunos` 
`flask --app application seed turmas`
`flask --app application seed aulas`

