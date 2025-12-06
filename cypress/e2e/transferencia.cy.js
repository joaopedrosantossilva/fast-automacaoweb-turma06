import transferenciaPage from '../support/pageObjects/TransferenciaPage';
import painelPage from '../support/pageObjects/PainelPage';
import loginPage from '../support/pageObjects/LoginPage';

describe('Fluxo de Transferência (E2E)', () => {

  beforeEach(() => {
    cy.fixture('transferencia').as('dados');
    cy.get('@dados').then((response) => {
      cy.sendUsuario(response.usuarioDestino);
      cy.sendUsuario(response.usuarioOrigem);
      cy.loginViaStorage(response.usuarioOrigem);
    });
    loginPage.visitar()
    painelPage.clicarEmTransferencia()
  });

  it('deve realizar transferência com sucesso e atualizar saldo', () => {
    cy.get('@dados').then((dados) => {
      const valorTransf = 100;
      const saldoEsperado = dados.usuarioOrigem.balance - valorTransf;
      transferenciaPage.realizarTransferencia(dados.usuarioDestino.accountNumber, valorTransf);
      transferenciaPage.validarMensagemSucesso(dados.usuarioDestino.accountNumber, valorTransf);
      transferenciaPage.validarSaldo(saldoEsperado);
    });
  });
});