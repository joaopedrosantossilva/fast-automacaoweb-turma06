class PainelPage{

    get saqueOption(){
        return cy.get("[data-cy='nav-saque']")
    }

    acessarSaque(){
        this.saqueOption.click()
    }
    
}

export default new PainelPage()