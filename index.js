// import RelianceBuilder from './RelianceBuilder';
const RelianceBuilder = require('./RelianceBuilder')

const fsi = RelianceBuilder.healthProviders()
            .inHMO('Reliance')
            .onTier("1,2")
            .locatedIn('NG-LA')
            .get({page: 1, limit: 50});

console.log(fsi);

