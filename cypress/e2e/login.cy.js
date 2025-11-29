import loginPage from "../support/pageObjects/LoginPage"

describe('Login', () => {
  it('Com sucesso - Usuario Admin', () => {
    //ARRANGE
    loginPage.visitar()

    //ACT
    loginPage.realizarLogin("admin@qabank.com", "admin123")
    
    //ASSERT
    loginPage.validarNomeDoUsuario('Admin do Sistema')
  }) 
})