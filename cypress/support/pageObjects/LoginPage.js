class LoginPage {

    visitar(){
        cy.visit('qa_bank.html')
    }

    get loginInput(){
        return cy.get("[data-cy='input-login-email']")
    }

    get senhaInput(){
        return cy.get("[data-cy='input-login-password']")
    }

    get entrarButton(){
        return cy.get("[data-cy='btn-login']")
    }

    get nomeDisplay(){
        return cy.get("[data-cy='user-name-display']")
    }

    get credenciasInvalidasMsg(){
        return cy.get('[data-cy="login-message"]')
    }

    get criarContaButton(){
        return cy.get('[data-cy="btn-toggle-register"]')
    }
    
    preencherEmail(email){
        this.loginInput.type(email)
    }

    preencherSenha(senha){
        this.senhaInput.type(senha)
    }

    clicarEmEntrar(){
        this.entrarButton.click()
    }

    realizarLogin(email,senha){
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarEmEntrar()
    }

    validarNomeDoUsuario(nome){
        this.nomeDisplay.should('have.text', nome)
    }

    validarMensagemCredenciaisInvalidas(){
        this.credenciasInvalidasMsg.should('have.text','Email ou senha inválidos.')
    }

    clicarEmQueroCriarUmaConta(){
        this.criarContaButton.click()
    }

}

export default new LoginPage()