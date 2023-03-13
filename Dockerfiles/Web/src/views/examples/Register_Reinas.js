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
    Col,
    NavItem,
    NavLink,
    Nav
  } from "reactstrap";
  
  import React, {useState} from "react"
  import { Link } from "react-router-dom";

  
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
              <div className="text-center text-darker mb-4 f-size-2">
                <strong>RABINO 7 REINAS</strong>
              </div>
              <div className="text-center text-muted mb-4">
                <small>Introduzca sus datos para poder registrarse</small>
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
                  <Link to= "/pagina_login/login_reinas"><Button className="mt-4" color="primary" type="submit">
                    Crear cuenta
                  </Button>
                  </Link>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default Register;
  