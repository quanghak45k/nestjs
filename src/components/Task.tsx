import { Button, Card } from "react-bootstrap";
import { TaskDTO } from "../api/dto/task.dto";
import { TaskApi } from "../api/task.api";


interface Props {
    data: TaskDTO;
    onTaskDelete: (taskId: number) => void;
}

const Task = ({ data, onTaskDelete }: Props) => {

    const deleteTask = async () => {
        await TaskApi.deleteOne(data.id);
        onTaskDelete(data.id);
    };

    return <div>
        <Card>
            <Card.Header  style={{ fontWeight: 700 }}>Task</Card.Header>
            <Card.Body>
                <Card.Title>Title: {data.title}</Card.Title>
                <Card.Text>
                    Description: {data.description}
                    <br />
                    Status: {data.status}
                </Card.Text>
                <Card.Footer   >
                    <Button variant="primary"  className="m-1">Edit</Button>
                    <Button variant="danger" className="m-1" onClick={deleteTask}>Delete</Button>
                </Card.Footer>

            </Card.Body>
        </Card>
    </div>;
};

export default Task;