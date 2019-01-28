# NodeGenda
Agenda de compromissos criada com NodeJS

### Requisitos Não Funcionais

| Cod. | Nome | Descrição | Categoria |
| -------- | -------- | -------- | -------- |
| NF01 | Sistema Web |	A aplicação será disponível através da internet e o acesso através de navegadores. | Obrigatório|
| NF02 | NodeJS | A aplicação será construída usando a tecnologia NodeJS e a framework Express | Obrigatório|
| NF03 | Persistência | A persistência do sistema ocorrerá em uma base de dados. | Obrigatório |
| NF04 | Conta no sistema |	A aplicação só poderá ser usada através de uma conta no sistema. | Obrigatório|
| NF05 | SGBD Relacional | A aplicação terá dados armazenados em sistema de gerenciamento de banco de dados relacional (SQLite 3)| Obrigatório  |

### Casos de Uso

| Cod. | Nome | Descrição | Categoria |
| -------- | -------- | -------- | -------- |
| UC01 | Cadastrar Comprimisso |	O usuário cria um compromisso no sistema e este compromisso é cadastrado no sistema. | Obrigatório|
| UC02 | Listar Compromissos | O sistema lista os compromissos criados para o usuário | Obrigatório|
| UC03 | Login no Sistema | O usuário entra no sistema através do email e da senha. | Obrigatório |
| UC04 | Deletar Compromisso |	O usuário deleta um compromisso escolhido. | Obrigatório|
| UC05 | Editar Compromisso | O usuário edita um dos atributos do compromisso. | Obrigatório  |


### Glossário

| Nome | Descrição |
| ------- | --------|
| Compromisso | Compreende-se como compromisso neste sistema uma entidade que possui uma descrição, data e hora, podendo ou não informar o lugar |
