import mongoose from "mongoose";

const { Schema,model } = mongoose

const Chatschema = Schema({
    name: {
        type: String,
        required: true
    }
    
})