const mongoose = require('mongoose');
const Task = require('./src/models/task');

describe('Task Model', () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/test_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

    // Create a Task

    describe('Create', () => {
        it('should create a task with valid data', async () => {
            const taskData = {
                title: 'Test task',
                description: 'Test description',
                status: 'in-progress'
            };

            const task = new Task(taskData);
            const savedTask = await task.save();

            expect(savedTask._id).toBeDefined();
            expect(savedTask.title).toBe(taskData.title);
            expect(savedTask.description).toBe(taskData.description);
            expect(savedTask.status).toBe(taskData.status);
        });

        it('should use default status if not provided', async () => {
            const taskData = {
                title: 'No status task',
                description: 'Only title and description'
            };

            const task = new Task(taskData);
            const savedTask = await task.save();

            expect(savedTask.status).toBe('todo');
        });

        it('should throw validation error without description', async () => {
            const task = new Task({
                title: 'No description'
            });

            let error;
            try {
                await task.save();
            } catch (err) {
                error = err;
            }

            expect(error).toBeDefined();
            expect(error.errors.description).toBeDefined();
        });
    });

    // Update a Task

    describe('Update', () => {
        let task;

        beforeEach(async () => {

            task = new Task({
                title: 'Initial title',
                description: 'Initial description',
                status: 'todo'
            });
            await task.save();
        });

        it('should update the status of a task', async () => {
            task.status = 'done';
            const updatedTask = await task.save();

            expect(updatedTask.status).toBe('done');
            expect(updatedTask.updatedAt).toBeDefined();
            expect(updatedTask.updatedAt).not.toEqual(updatedTask.createdAt);
        });

        it('should update the title and description', async () => {
            task.title = 'Updated title';
            task.description = 'Updated description';
            const updatedTask = await task.save();

            expect(updatedTask.title).toBe('Updated title');
            expect(updatedTask.description).toBe('Updated description');
        });

        it('should not accept invalid status', async () => {
            task.status = 'not-a-valid-status';

            let error;
            try {
                await task.save();
            } catch (err) {
                error = err;
            }

            expect(error).toBeDefined();
            expect(error.errors.status).toBeDefined();
        });
    });

    // Reading a Task

    describe('Read', () => {
        let task;

        beforeEach(async () => {
            task = new Task({
                title: 'Read test',
                description: 'Read description',
                status: 'in-progress'
            });
            await task.save();
        });

        it('should find a task by ID', async () => {
            const foundTask = await Task.findById(task._id);

            expect(foundTask).not.toBeNull();
            expect(foundTask.title).toBe('Read test');
            expect(foundTask.description).toBe('Read description');
        });

        it('should return all tasks', async () => {
            const tasks = await Task.find();

            expect(Array.isArray(tasks)).toBe(true);
            expect(tasks.length).toBeGreaterThan(0);

            const match = tasks.find(t => t._id.toString() === task._id.toString());
            expect(match).toBeDefined();
            expect(match.title).toBe('Read test');
        });

        it('should return null for non-existing ID', async () => {
            const nonExistingId = new mongoose.Types.ObjectId();
            const result = await Task.findById(nonExistingId);

            expect(result).toBeNull();
        });
    });

    // Delete a Task

    describe('Delete', () => {
        let task;

        beforeEach(async () => {
            task = new Task({
                title: 'Task to delete',
                description: 'Will be removed',
                status: 'todo'
            });
            await task.save();
        });

        it('should delete a task by ID', async () => {
            const deleted = await Task.findByIdAndDelete(task._id);
            const found = await Task.findById(task._id);

            expect(deleted).not.toBeNull();
            expect(deleted._id.toString()).toBe(task._id.toString());
            expect(found).toBeNull();
        });

        it('should return null when deleting a non-existing task', async () => {
            const nonExistingId = new mongoose.Types.ObjectId();
            const result = await Task.findByIdAndDelete(nonExistingId);

            expect(result).toBeNull();
        });
    });

});
