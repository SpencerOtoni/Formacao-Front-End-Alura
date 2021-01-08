import {Cliente} from "./Cliente.js"
import {Gerente} from './funcionarios/Gerente.js'
import {Diretor} from './funcionarios/Diretor.js'
import {SistemaAutenticacao} from './SistemaAutenticacao.js'

const diretor = new Diretor('Diretor', 10000, 11111111)
diretor.cadastrarSenha('123')

const gerente = new Gerente('Gerente', 10000, 11111111)
gerente.cadastrarSenha('12')

const cliente = new Cliente('Gerente', 10000, 11111111)

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '4')
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '11111111')

console.log(diretorEstaLogado, gerenteEstaLogado,clienteEstaLogado )