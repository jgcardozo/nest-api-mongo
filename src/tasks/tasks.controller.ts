import {
	Controller,
	Get,
	Post,
	Body,
	Delete,
	Param,
	Patch
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	getAllTasks() {
		return this.tasksService.getAllTask();
	}

	@Post()
	createTask(@Body() newTask: CreateTaskDto) {
		return this.tasksService.createTask(newTask.title, newTask.description);
	}

	@Delete(':id')
	deleteTask(@Param('id') id: string) {
		this.tasksService.deleteTask(id);
	}

	@Patch(':id')
	updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
		return this.tasksService.updateTask(id, updatedFields);
	}
}
