class LoginPage {

    visitar(){
        cy.visit('qa_bank.html')
    }

    preencherEmail(email){
        cy.get("[data-cy='input-login-email']").type(email)
    }

    preencherSenha(senha){
        cy.get("[data-cy='input-login-password']").type(senha)
    }

    clicarEmEntrar(){
        cy.get("[data-cy='btn-login']").click()
    }

    realizarLogin(email,senha){
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarEmEntrar()
    }

    validarNomeDoUsuario(nome){
        cy.get("[data-cy='user-name-display']").should('have.text', nome)
    }

}

export default new LoginPage()