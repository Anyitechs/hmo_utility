class Reliance {

    constructor(builder) {
        this.name = builder.name;
        this.stateCode = builder.stateCode;
        this.plan_id = builder.plan_id;
        this.tiers = builder.tiers;
        this.page = builder.page || 1;
        this.limit = builder.limit || 50
    }

    toString() {
        return JSON.stringify(this);
    }

}

export default new Reliance;