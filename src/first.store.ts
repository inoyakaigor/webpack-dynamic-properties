import { RootInitiator } from "./root.store";

class FirstStore extends RootInitiator {
    constructor() {
        super()
    }

    callme = () => {
        debugger
        // An error there will be at next line
        // look into this.root.stores
        const secondStore = this.root.stores.secondStore
        return secondStore.getHello()
    }
}

const firstStore = new FirstStore()

export default firstStore
