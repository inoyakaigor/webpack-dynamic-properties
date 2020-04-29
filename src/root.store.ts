/**
 * Root store connecting child stores for access to data between it.
 * It is helpful in cases when  there is a need to get data from some dataStore
 * filtered by paramteres from some parametersStore.
 * It is a standart practice in Mobx https://mobx.js.org/best/store.html#combining-multiple-stores
 */
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
            this.constructor.name.charAt(0).toLowerCase() +
            this.constructor.name.slice(1),
            this
        )
    }
}