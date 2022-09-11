import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { TaskApi } from '../api/task.api';
import { TaskDTO } from '../api/dto/task.dto';
import { isPropertySignature } from 'typescript';

interface Props {
    onTaskCreated: (task: TaskDTO) => void;
}

function ColorSchemesExample(Props: Props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState<undefined | string>(undefined);

    const createTask = async () => {
        const resp = await TaskApi.createOne({
                title,
                description,
            });

            Props.onTaskCreated(resp);
            console.log("new task created successfully", resp);
           
    };


    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand className="justify-content-end">Task Management</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="success" className="m-1" onClick={handleShow}>Create New Task</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="title" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="string"
                                placeholder="Title"
                                autoFocus
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="description"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={createTask}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ColorSchemesExample;