import { RootInitiator } from "./root.store";

class SecondStore extends RootInitiator {
    constructor() {
        super()
    }

    getHello = () => `Hello world`
}

const secondStore = new SecondStore()

export default secondStore
