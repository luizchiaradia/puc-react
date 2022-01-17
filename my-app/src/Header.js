import logo from './logo.svg';
import { Component } from 'react';
import { UserScreen } from './UserScreen';

export class Header extends Component {
    state = {//state é um objeto
        count: 0,
    }
    componentDidMount() {
        console.log('Componente montado');
    }
    componentDidUpdate() {
        console.log('Atualizou');
    }
    componentWillUnmount() {
        console.log('Componente desmontado');
    }
    componentDidCatch(error, info) {
        console.log('Erro capturado');
    }
    render() {
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                {this.props.message}
            </h1>
            <p>Você clicou {this.state.count} vezes no botão.</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Incrementar</button>
            <UserScreen />
            </header>
        );
    }
}
