class SaquePage{

    get valorInput(){
        return cy.get('#saque-view [class="form-input-valor"]')
    }

    get realizarSaqueButton(){
        return cy.get('[data-cy="btn-sacar"]')
    }

    preencherValor(valor){
        this.valorInput.type(valor)
    }

    clicarEmRealizarSaque(){
        this.realizarSaqueButton.click()
    }

}

export default new SaquePage()