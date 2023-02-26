import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    ticketsAvaliable:{
        type: Number,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
});

const Event = mongoose.model("Event", EventSchema);

export default Event;