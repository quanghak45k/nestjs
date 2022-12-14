import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskDTO } from "./dto/task.dto";

export class TaskApi {
    public static async getAll(): Promise<TaskDTO[]> {
        const resp = await fetch('http://localhost:3000/task', {
           method: 'GET', 
        })

        const data = await resp.json();

        return data;
    }

    public static async createOne(createRequest: CreateTaskDTO){
        const resp = await fetch('http://localhost:3000/task', {
           method: 'POST',
           headers: {
            'content-type': 'application/json',
           },
           body: JSON.stringify(createRequest), 
        })

        const data = await resp.json();
        return data;

    }

    public static async deleteOne(taskId: number){
        await fetch(`http://localhost:3000/task/${taskId}`, {
            method: 'DELETE',
        })
    }
}