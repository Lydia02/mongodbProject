const { Schema, model}  = require('mongoose');

const taskSchema = new Schema(
    {
    morning:{
        title: 'Morning Routine',
        description:'This is what to be done every morning',
        time:' 7am - 10am',
        type: String,
        required: true,
        unique: true,
    },
    afternoon:{
            title: 'Afternoon Routine',
            description:'This is what to be done every afernoon',
            time:' 12noon - 3pm',
            type: String,
            required: true,
            unique: true,
        },
        evening:{
    
            title: 'Evening Routine',
            description:'This is what to be done every evening',
            time:' 4pm- 10pm',
            type: String,
            required: true,
            unique: true,
        },
        midnight:{
            title: 'Midnight Routine',
            description:'This is what to be done every midnight',
            time:' 11pm - 4am',
            type: String,
            required: true,
            unique: true,
        },
},
        { timestamps: true }
      
);

const taskModel = model("tasks", taskSchema);

module.exports = taskModel;
