// import RelianceBuilder from './RelianceBuilder';
const RelianceBuilder = require('./RelianceBuilder')

const fsi =  RelianceBuilder.healthProviders()
            .inHMO('Reliance')
            .onTier(1,2)
            .locatedIn('NG-LA')
            .get();

console.log(fsi);
