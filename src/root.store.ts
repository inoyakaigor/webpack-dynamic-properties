class RootStore {
    stores = {}
    setChildStore = (name, store) => {
        this.stores[name] = store
    }
}

const Root = new RootStore()

export class RootInitiator {
    constructor() {
        this.root = Root
        Root.setChildStore(
            this.constructor.name.toLowerCase(),
            this
        )
    }
}