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
    Col,
    NavItem,
    NavLink,
    Nav
  } from "reactstrap";
  
  import React, {useState} from "react"
  import { Link } from "react-router-dom";
  
  /*
  import Cookies from 'universal-cookie';
  const cookies = new Cookies();
  cookies.set('myCat', 'Pacman', { path: '/' });
  console.log(cookies.get('myCat')); // Pacman
  */
  
  
  const Login_Reinas = () => {   
  
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
      xhr.open('POST', 'http://localhost:3001/api/pagina_login/login_reinas')
      
      //Mandamos la request con el email y la contraseña
      xhr.send(JSON.stringify({ email: email , password: password }))
  
    };
    
    
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-darker mb-4 f-size-2">
                <strong>RABINO 7 REINAS</strong>
              </div>
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
                  <Link to= "/admin/perfil_usuario"><Button className="my-4" color="primary" type="submit">
                    Iniciar Sesión
                  </Button>
                  </Link>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            
            <Col className="text-right" xs="4">
              <Nav className="m-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon text-light"
                    to="/pagina_login/register_reinas"
                    tag={Link}
                  >
                    <small>Crear una cuenta</small>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Col>
      </>
    );
  
  };
  
  export default Login_Reinas;
  