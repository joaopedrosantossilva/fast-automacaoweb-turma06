import loginPage from "../support/pageObjects/LoginPage";
import painelPage from "../support/pageObjects/PainelPage";
import saquePage from "../support/pageObjects/SaquePage";

describe('Realizar', () => {

  beforeEach(()=> {
    cy.loginAdminViaStorage()
    loginPage.visitar()
    painelPage.acessarSaque()
  }) 
   it('Com sucesso - Usuario Admin', () => {
    const valor = 500
    saquePage.preencherValor(valor)
    saquePage.clicarEmRealizarSaque()
    saquePage.validarSaqueRealizadoComSucesso(valor)
    

   })
})