import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, setEmail, setPassword } from "../../redux/userSlice";
import "./Login.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email1, setEmail1] = useState("");
  const [pass1, setPass1] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // register part
  const [regemail, setRegEmail] = useState("")
  const [regpass, setRegPass] = useState("")
  const [regname, setRegName] = useState("")

 


  const handleSubmit = (e) => {
    e.preventDefault();
        dispatch(login(name))
        dispatch(setEmail(email1))
        dispatch(setPassword(pass1))
        
        navigate('/demo')
  }


  return (
    <div className="login container mt-5">
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="text-dark fs-4">Name</Form.Label>
          <Form.Control type="text" required value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value) }/>
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-dark fs-4">Email address</Form.Label>
          <Form.Control value={email1} onChange={(e) => setEmail1(e.target.value)} type="text" required placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-dark fs-4">Password</Form.Label>
          <Form.Control value={pass1} onChange={e=> setPass1(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept cookies &amp; conditions" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2">
          Submit
        </Button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>

        <p className="forgot-password text-right">
          Don't have an account ?{" "}
          <Button variant="primary" onClick={() => setShow(true)}>
            Register
          </Button>
        </p>
      </Form>


      {/* const [regemail, setRegEmail] = useState("")
  const [regpass, setRegPass] = useState("") */}
  
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>REGISTER</Modal.Title>
        </ModalHeader>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label className="text-dark fs-5">Email address</Form.Label>
              <Form.Control value={regemail} onChange={e=>setRegEmail(e.target.value)} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label className="text-dark fs-5">Password</Form.Label>
              <Form.Control value={regpass} onChange={e=>setRegEmail(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label className="text-dark fs-5">Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
            
            

          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
