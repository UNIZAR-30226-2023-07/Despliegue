import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Table,
    Media,
    Badge,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledDropdown,
    DropdownToggle,
    Progress,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";
  // core components
  //import UserHeader from "components/Headers/UserHeader.js";
  import Header from "components/Headers/Header.js";
  
  const Perfil_Usuario = () => {
    const victorias = 18; //Esta información se cogería del sevidor
    const derrotas = 32;
    const num_amigos = 25;
    const ranking = 5;

    function porcentaje_victorias(vic, der){
      return (vic/(vic + der))*100;
    };

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt-6" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/Imgs_7_Reinas/Ficha_de_rabino.png")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-4">
                        <div>
                          <span className="heading">{num_amigos}</span>
                          <span className="description">Amigos</span>
                        </div>
                        <div>
                          <span className="heading">{ranking}</span>
                          <span className="description">#Ranking</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-left">
                    <h3>
                      <span className="font-weight-bold">Usuario:</span>
                      <div>
                      <span className="font-weight-light">Jessica Jones</span>
                      </div>
                    </h3>
                    <h3>
                      <span className="font-weight-bold">Correo:</span>
                      <div>
                      <span className="font-weight-light">jjones@gmail.com</span>
                      </div>
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="border-0">
                    <h3 className="mb-0">Estadísticas del Juagador</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-normal">
                    <tr>
                      <th scope="col">Partidas Ganadas</th>
                      <th scope="col">Partidas Perdidas</th>
                      <th scope="col">Partidas Jugadas</th>
                      <th scope="col">% de Victorias</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <Media className="align-items-center">
                          <span className="mb-0 text-sm text-sm-center">
                          {victorias}
                          </span>
                        </Media>
                      </td>
                      <td>
                        <span className="mb-0 text-sm text-sm-center">
                          {derrotas}
                        </span>
                      </td>
                      <td>
                        <span className="mb-0 text-sm text-sm-center">
                          {derrotas + victorias}
                        </span>
                      </td>
                      <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{porcentaje_victorias(victorias, derrotas)}%</span>
                        <div>
                          <Progress
                            max="100"
                            value={porcentaje_victorias(victorias, derrotas)}
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                      </td>
                    </tr>
                    </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Perfil_Usuario;
  