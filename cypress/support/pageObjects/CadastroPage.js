class CadastroPage {

    get nomeInput(){
        return cy.get('input[data-cy="input-register-name"]')
    }

    get emailInput(){
        return cy.get('[data-cy="input-register-email"]')
    }

    get passwordInput(){
        return cy.get('[data-cy="input-register-password"]')
    }

    get sexoSelect(){
        return cy.get('[data-cy="select-register-sexo"]')
    }
    
    get salvarCadastroButton(){
        return cy.get('[data-cy="btn-register-submit"]')
    }

    get contaCriadaComSucessoMsg(){
        return cy.get('[data-cy="register-message"]', {timeout: 10000})
    }
    
    preencherNome(nome){
        this.nomeInput.type(nome)
    }

    preencherEmail(email){
        this.emailInput.type(email)
    }

    preencherPassword(password){
        this.passwordInput.type(password)
    }

    selecionarSexo(sexo_name){
        this.sexoSelect.select(sexo_name)
    }

    clicarEmSalvar(){
        this.salvarCadastroButton.click()
    }

    preencherFormulario(nome,email,password,sexo){
        this.preencherNome(nome)
        this.preencherEmail(email)
        this.preencherPassword(password)
        this.selecionarSexo(sexo)
        this.clicarEmSalvar()
    }

    validarMsgDeNovoCadastroComSucesso(){
        this.contaCriadaComSucessoMsg.should('be.visible').and('contain.text','Conta criada com sucesso! ')
    }
}

export default new CadastroPage;