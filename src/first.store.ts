import { RootInitiator } from "./root.store";

class FirstStore extends RootInitiator {
    constructor() {
        super()
    }

    callme = () => {
        debugger
        // An error there will be at next line
        const secondStore = this.root.stores.second
        return secondStore.getHello()
    }
}

const firstStore = new FirstStore()

export default firstStore
