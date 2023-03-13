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
  CardHeader,
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

const Register = () => {

  //Cosas que vamos a guardar para el formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
  //Guardar el cambio en los atributos
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  };

  const handleNameChange = event => {
    setName(event.target.value)
  };
  
  //Submit al servidor
  const registerSubmit = event => {
    event.preventDefault();
    alert(`Your state values:
            email: ${email}
            password: ${password}
            name: ${name}
            Se ha mandado al servidor la información`);

    //Petición http
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })

    // Abrimos una request de tipo post en nuestro servidor
    xhr.open('POST', 'http://localhost:3001/api/auth/register')
    
    //Mandamos la request con el email y la contraseña
    xhr.send(JSON.stringify({ name: name, email: email , password: password }))

  };

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Introduzca sus datos</small>
            </div>
            <Form role="form" onSubmit={registerSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                    placeholder="Nombre de avatar" 
                    type="text" 
                    onChange={handleNameChange}
                    value={name}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
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
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  Seguridad de contraseña:{" "}
                  <span className="text-red font-weight-700">debil</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        Estoy de acuerdo con los{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                         Terminos y condiciones de uso
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Crear cuenta
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
