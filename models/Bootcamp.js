const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true,"Please add a name"],
        required: true,
        trim: true,
        maxLength: [60, "Name cannot be more than 60 characters"]
    },
    slug: String, // this is basically a url friendly version of the name
    description: {
        type: String,
        required: [true,"Please add a description"],        
        maxLength: [600, "Name cannot be more than 600 characters"]
    }, 
    website: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    location: {
        type: String,
        enum: ['Point'],
        required: true,
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'        
        },
        formattedAddress: String,
        street: String,
        city: String,
        zipcode: String,
        country: String
    }, 
    careers: {
        // Array of strings
        type: [String],
        required: true,
        enum: [
            'Web Dev',
            'Mobile Dev',
            'UI/ Ux',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, "Rating must be at least 01"],
        max: [5, "Rating cannot be more than 05"]
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    houseing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.name
    }        
})


module.exports = mongoose.model('Bootcamp', BootcampSchema)