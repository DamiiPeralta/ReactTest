import { Component } from "react";

class SaludoPersonalizado extends Component {
    constructor(props) {
        super(props);
        this.state = {mensaje: `Hola, ${this.props.nombre}!`};
    }
    render(){
        return (
            <div>
                <p>{this.state.mensaje}</p>
            </div>
        )
    }
}

export default SaludoPersonalizado;