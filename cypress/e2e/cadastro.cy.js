import loginPage from "../support/pageObjects/LoginPage"
import cadastroPage from "../support/pageObjects/CadastroPage"
import {novoCadastro} from "../fixtures/dados.json"

describe('Cadastro de nova conta', () => {

  beforeEach(() => {
    //ARRANGE
    loginPage.visitar()
    loginPage.clicarEmQueroCriarUmaConta()
  })

  it('Com sucesso', () => {
    //ACT
    cadastroPage.preencherFormulario(novoCadastro.nome, novoCadastro.email, novoCadastro.password, novoCadastro.sexo)
    
    //ASSERT
    cadastroPage.validarMsgDeNovoCadastroComSucesso()
  }) 
  
})