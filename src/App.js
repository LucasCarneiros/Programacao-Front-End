import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Button, Card, Form, ButtonGroup, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">

     

        <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#Início">Famosos.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#link">Ajuda</Nav.Link>
            <NavDropdown title="Perguntas Frequentes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pergunta 01</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Pergunta 02
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pergunta 03</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Link separado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Form>
         <Row>
          <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Exemplo@email.com" />
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId='formPassword'>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="Senha" placeholder="Senha" />
          </Form.Group>
          </Col>
         </Row>
          <Button variant="primary" type='submit'>Entrar</Button>
        </Form>
        <Card>
          <Card.Img src='https://picsum.photos/100/50'/>
          <Card.Body>
            <Card.Title>
              NOTÍCIA
            </Card.Title>
            <Card.Text>
              Veja as últimas notícias sobre a vida dos famoso agora!
            </Card.Text>
            <Button variant="primary">Leia mais</Button>
          </Card.Body>
        </Card>
        <ButtonGroup aria-label="Primeiro grupo">
          <Button>1</Button>
          <Button variant="outline-primary">2</Button>
          <Button variant="outline-primary">3</Button>
        </ButtonGroup>
        </Container>
      </header>
    </div>
  );
}

export default App;
