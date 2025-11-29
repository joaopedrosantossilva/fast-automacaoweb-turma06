import loginPage from "../support/pageObjects/LoginPage"
import cadastroPage from "../support/pageObjects/CadastroPage"

describe('Cadastro de nova conta', () => {

  it('Com sucesso', () => {

    //ARRANGE
    loginPage.visitar()
    loginPage.clicarEmQueroCriarUmaConta()

    //ACT
    cadastroPage.preencherFormulario("Novo usuario", "novousuario@qabank.com", "123456", "MASCULINO")
    
    //ASSERT
    cadastroPage.validarMsgDeNovoCadastroComSucesso()
  }) 
  
})