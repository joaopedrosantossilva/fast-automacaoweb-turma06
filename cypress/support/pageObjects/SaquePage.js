class SaquePage{

    get valorInput(){
        return cy.get('#saque-view [class="form-input-valor"]')
    }

    get realizarSaqueButton(){
        return cy.get('[data-cy="btn-sacar"]')
    }

    get saqueRealizadoComSucessoMsg(){
        return cy.get('[data-cy="saque-message"]')
    }

    preencherValor(valor){
        this.valorInput.type(valor)
    }

    clicarEmRealizarSaque(){
        this.realizarSaqueButton.click()
    }

    validarSaqueRealizadoComSucesso(valor){
        const valorFormatado = parseFloat(valor).toFixed(2).replace('.',',');
        this.saqueRealizadoComSucessoMsg.should('be.visible').and('have.text', `Saque de R$ ${valorFormatado} realizado com sucesso.`)
    }

}

export default new SaquePage()