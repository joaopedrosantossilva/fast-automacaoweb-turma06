class PainelPage{

    get saqueOption(){
        return cy.get("[data-cy='nav-saque']")
    }

    get transferenciaOption() {
        return cy.get('[data-cy="nav-transferencia"]')
    }

    clicarEmTransferencia(){
        this.transferenciaOption.click()
    }

    acessarSaque(){
        this.saqueOption.click()
    }
    
}

export default new PainelPage()