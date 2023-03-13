/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import React, {useState} from "react"

/*
import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat')); // Pacman
*/


const Login = () => {   

  //Cosas que vamos a guardar para el formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  //Guardar el cambio en los atributos
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  };
  
  //Submit al servidor
  const loginSubmit = event => {
    event.preventDefault();
    alert(`Your state values: 
            email: ${email} 
            password: ${password}
            Se ha mandado al servidor la información`);

    //Petición http
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })

    // Abrimos una request de tipo post en nuestro servidor
    xhr.open('POST', 'http://localhost:3001/api/auth/login')
    
    //Mandamos la request con el email y la contraseña
    xhr.send(JSON.stringify({ email: email , password: password }))

  };
  
  
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Inicie Sesión introduciendo sus datos</small>
            </div>
            <Form role="form" onSubmit={loginSubmit}> 
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    //
                    onChange={handleEmailChange}
                    value={email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="new-password"
                    //
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Recordar datos</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Iniciar Sesión
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>¿Ha olvidado su contraseña?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Crear una cuenta</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );

};

export default Login;
