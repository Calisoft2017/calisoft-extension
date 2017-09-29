import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './store'

import { Button, Panel, ButtonGroup } from 'react-bootstrap';


export default class App extends React.Component<null, any> {

    render() {
        return (
            <Provider store={Store}>
                <Panel style={{ marginBottom: "0px" }} bsStyle="success" >
                    <div className="text-center">
                        <ButtonGroup>
                            <Button bsStyle="danger">Cargar Formulario</Button>
                            <Button bsStyle="primary">Pegar Formulario</Button>
                        </ButtonGroup>
                    </div>
                    <hr />
                    <Button block bsStyle="success">PRUEBA DE CARGA</Button>
                    <Button block bsStyle="success">PRUEBA DE ESTRÉS</Button>
                </Panel>
            </Provider>
        );
    }
}

render(<App />, document.getElementById("app"));