// const reliance = require('./Reliance');
const axios = require('axios');

class RelianceBuilder {

    constructor(name, stateCode, plan_id, tiers, page = 1, limit = 50) {
        this.name = name;
        this.stateCode = stateCode;
        this.plan_id = plan_id;
        this.tiers = tiers;
        this.page = page;
        this.limit = limit;
    }

    healthProviders(plan_id=25) {
        this.plan_id = plan_id;
        return this;
    }

    inHMO(name='Reliance') {
        this.name = name;
        return this;
    }

    onTier(tiers=(1,2)) {
        this.tiers = tiers;
        return this;
    }

    locatedIn(stateCode='NG-LA') {
        this.stateCode = stateCode;
        return this;
    }

    async get({page,limit}) {
        this.page = page;
        this.limit = limit;
        let healthProvider = await axios.get('https://sandboxapi.fsi.ng/relianceHMO/utilities/providers', {
            headers: {
                'Sandbox-Key': '93e53a2a0373eedf7c9091791d6d4a6d',
                'Content-Type': 'application/json'
            },
            params: {
                this: this
            }
        })
        console.log('health')
        console.log(healthProvider.data)
        return healthProvider.data;
    }

}

module.exports = new RelianceBuilder;
// export default ;