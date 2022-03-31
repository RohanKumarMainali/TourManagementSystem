import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  FormLabel,
  Stack,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Card } from "react-bootstrap";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import './Style.css';
import AddForm from './AddForm';
import Update from './Update';
import {Link} from 'react-router-dom';
import {Modal} from 'react-modal';
import {BrowserRouter,Route,Routes} from 'react-router-dom';



export default class Navbarcomp extends Component {

    constructor(props){
    super(props);
    this.state={
          packages:[],
       activeItem:{
       id:null,
       name:'',
       description: '',
       price:null,
       category:'',
       seat:'',
       image:'',

       },
       editing: false
           }
//           calling functions
       this.fetchPackage=this.fetchPackage.bind(this)

    };

    componentWillMount(){
        this.fetchPackage()
    }
// ----------------------feting Data from api --------------------------------------------------------------
    fetchPackage(){

        console.log("Fetching....")
        fetch('http://127.0.0.1:8000/api/packages/')
        .then(response=>response.json())
        .then(data=>this.setState({packages:data}))
    }
 onClick(){
    <Link to="/update"></Link>
}


//    const updatePackage(id,updatedPackage)=>{
//        this.state.packages(packages.map((package)=>package.id===id? updatedPackage: package))
//    }

  render() {
    var packages=this.state.packages
    var self=this

    return (
      <div
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment:"fixed",

        }}
      >
        <Navbar variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Tour</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Tour Status</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* ======================================================================================= */}
        <div
          style={{
            position: "fixed",
            right: 34,
            bottom: 34,
          }}
        >
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => (
              <Tooltip id="button-tooltip" {...props}>
                Add new packages
              </Tooltip>
            )}
          >
            <Fab color="primary" aria-label="add">
            <Link to="/add"><AddIcon style={{color:"white"}}/></Link>

            </Fab>
          </OverlayTrigger>
        </div>
        {/* ======================================================================================================= */}
          <Container>
          <Row>

            {packages.map(function(package_item){
             return(
              <Col md={{ span: 3 }}>
                {/* ======================================================================= */}
                <Card className="card bg-light text-black">
                    <Card.Title>{package_item.name}</Card.Title>
                    <Card.Text>
                      {package_item.description}
                    </Card.Text>
                    <div className="btn-right">
                    <button type="submit" className="btn-update button" onClick={()=>console.log(package_item.id)}>Update</button>
                    <button type="submit" className="btn-delete button">Delete</button>
                    </div>
                </Card>
                <br />
              </Col>

                    )
                })}
             </Row>

          </Container>


      </div>
    );
  }
}