const chai = require('chai');
const chaiHttp = require('chai-http')
const partidasModel = require('../models/partidasModels')
const server = require('../routes/partidasRoute')


chai.should();
chai.use(chaiHttp)

describe('/partidas/:id', () => {
    it('debe traer la partida segun su id', (done) => {
        let primerPartida = new partidasModel(
            {
                id:1,
                nombre: "primer partida",
                nivel: 1,
                filas: 1,
                columnas:5
            });
        primerPartida.save((err, partida) => {
            chai.request(server)
                .get('/partidas' + partida.id)
                .send(partida)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('nombre');
                    res.body.should.have.property('nivel');
                    res.body.should.have.property('filas');
                    res.body.should.have.property('columnas');
                    res.body.should.have.property('id').eql(partida.id);
                    done();
                });
        });

    });
});
