1. Sistema de Login
    - **Descrição**: O usuário poderá se autenticar para gerenciar os livros.

    - Funcionalidades
        - Logar o usuário por matrícula e senha;

    - Casos de Testes
        - Verificar se a matrícula existe no banco de dados;
        - Verificar se o campo não está nulo;
        - Verificar se a senha está correta;

    - Erros
        - Deverá mostrar erro caso matrícula e/ou senha esteja errado;
        - Deve alegar erro se usuário não existir;
        - Após múltiplas tentativas, impedir acesso por 10 minutos;  

2. Lista de livros disponíveis
    - **Descrição**: Obtém a lista de livros disponíveis naquele momento;
    
    - Funcionalidades
        - Mostrar a lista de livros que estão disponíveis para retirada;
    
