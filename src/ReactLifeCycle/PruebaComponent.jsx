import { Component } from "react";

const user = "Dami";

class PruebaComponent extends Component {
    constructor() {
        super();
        this.state = {
            session: false,
            info: "No se ha cargado la info"
        }
        console.log("Ejecutando el contructor");
    }

    componentDidMount() {
        console.log("Ejecutando el componentDidMount");
        setTimeout(() => {
            this.setState({
                session: true,
                info: `Bienvenido ${user}`
            })
        }, 3000)
    }

    componentDidUpdate(){
        console.log("Ejecutando el componentDidUpdate");
    }

    componentWillUnmount (){
        console.log("Ejecutando el componentWillUnmount");
    }

    render(){
        console.log("Ejecutando el render")
        console.log(this.state.info)
        return (
            <div>
                <h1>Componente Prueba</h1>
                <h2>{this.state.info}</h2>
                <button>Iniciar sesion</button>

            </div>
        )
    }

}
export default PruebaComponent;