export class SistemaAutenticacao{
    static login(usuario, senha){
        return usuario.autenticar(senha)
    }
}