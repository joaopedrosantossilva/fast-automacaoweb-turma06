import loginPage from "../support/pageObjects/LoginPage"

describe('Login', () => {

  beforeEach(()=> {
    //ARRANGE
    loginPage.visitar()
    cy.fixture('dados').as('users')
  })

  it('Com sucesso - Usuario Admin', () => {
    cy.get('@users').then((response) => 
    {
      //ACT    
      loginPage.realizarLogin(response.admin.email, response.admin.password)
    
      //ASSERT
      loginPage.validarNomeDoUsuario(response.admin.nome)

    })
  }) 

  it('Com credenciais invalidas - Usuario Admin', () => {
    cy.get('@users').then((response) => 
    {
      //ACT
      loginPage.realizarLogin(response.admin.email, response.admin.password_incorreta)
      
      //ASSERT
      loginPage.validarMensagemCredenciaisInvalidas()

      }) 
  }) 

})