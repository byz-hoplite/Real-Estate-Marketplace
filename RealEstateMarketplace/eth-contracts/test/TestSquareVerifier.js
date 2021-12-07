let squareVerifier = artifacts.require('SquareVerifier');
let proof = require('../../zokrates/code/square/proof.json');

contract('TestSquareVerifier', accounts => {
    const account_one = accounts[0];

    describe('Test verification with correct proof', function () {
        beforeEach(async function () {
            this.contract = await squareVerifier.new({from: account_one});
        });

        it('verification with correct proof', async function () {
            let verified = await this.contract.verifyTx.call( proof.proof.a, proof.proof.b,
                proof.proof.c, proof.inputs,{from:account_one});
            assert.equal(verified, true, "verification is not correct");
        });

        it('Test verification with incorrect proof', async function () {
            let verified = await this.contract.verifyTx.call( proof.proof.a, proof.proof.b,
                proof.proof.c, [10, 1],{from:account_one});
            assert.equal(verified, false, "verification is correct");
        })
    })
});