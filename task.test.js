const mongoose = require('mongoose');
const Task = require('./src/models/task');

describe('Task Model', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/test_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

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
});