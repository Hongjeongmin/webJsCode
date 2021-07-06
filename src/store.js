export class Store {
    constructor(){
        this.route = ['root'];
        this.deeps = [];
        this.root = true;
        this.data = [];
        this.cache = new Map();
    }

    getCache(id) {
        const obj = this.cache.get(id);
        console.log("obj "+ obj);
        if(obj===null || obj===undefined)
            return null;
        return obj;
    }

    update() {
        this.root = this.route.length === 1;
    }

    routePush(name) {
        this.route.push(name);
    }

    routePop() {
        this.route.pop();
    }

    deepsPush() {
        this.deeps.push(this.data);
    }

    deepsPop() {
        return this.deeps.pop();
    }

    getDataObj(id) {
        for(let obj of this.data) {
            if(obj.id === id) 
                return obj;
        }
        return null;
    }
}