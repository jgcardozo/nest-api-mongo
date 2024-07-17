import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './task.dto';

@Injectable()
export class TasksService {
	private tasks: Task[] = [
		{
			id: '1',
			title: 'first task',
			description: 'descrip hardcoded',
			status: TaskStatus.PENDING
		}
	];

	getAllTask() {
		return this.tasks;
	}

	createTask(title: string, description: string) {
		const task = {
			id: v4(), //new Date().toISOString(),
			title,
			description,
			status: TaskStatus.PENDING
		};
		this.tasks.push(task);
        return task;
	}

	deleteTask(id: string) {
		this.tasks = this.tasks.filter(t => t.id !== id);
	}

	updateTask(id: string, updatedFields: UpdateTaskDto): Task {
		const task = this.getTaskById(id);
		const newTask = Object.assign(task, updatedFields);
		this.tasks = this.tasks.map(t => (t.id === id ? newTask : t));
        return newTask;
	}

	getTaskById(id: string): Task {
		return this.tasks.find(t => t.id === id);
	}
}
