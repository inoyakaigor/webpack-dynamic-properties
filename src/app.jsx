import React, {Component} from "react";
import { inject } from "mobx-react";

class App extends Component {
    render() {
        return this.props.firstStore.callme()
    }
}

const app = inject('firstStore')(App)
export default app