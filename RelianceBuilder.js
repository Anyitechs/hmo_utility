// const reliance = require('./Reliance');
const axios = require('axios');

class RelianceBuilder {

    constructor(state, plan_id, tiers, page, limit) {
        // this.name = name;
        this.state = state;
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

    onTier(tiers) {
        this.tiers = tiers;
        return this;
    }

    locatedIn(state) {
        this.state = state;
        return this;
    }

    async get({page,limit}) {
        this.page = page;
        this.limit = limit;
        try {
            let healthProvider = await axios.get(`https://sandboxapi.fsi.ng/relianceHMO/utilities/providers`, {
                params: this,
                headers: {
                    'Sandbox-Key': '93e53a2a0373eedf7c9091791d6d4a6d',
                    'Content-Type': 'application/json'
                },
            });
            console.log(healthProvider.data)
            return healthProvider.data;
        } catch (error) {
            console.log(error.message)   
        }
    }

}

module.exports = new RelianceBuilder;
