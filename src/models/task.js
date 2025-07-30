const mongoose = require('mongoose');

// Standard task schema

const taskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String, required: true },
    status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);