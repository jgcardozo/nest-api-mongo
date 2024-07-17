import { TaskStatus } from "./tasks.entity";
import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
	@IsString()
	@IsNotEmpty()
	title: string;
	description: string;
}

export class UpdateTaskDto {
	@IsString()
	@IsOptional()
	title?: string;
	@IsOptional()
	description?: string;
	@IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
	status?: TaskStatus;
}