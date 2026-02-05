import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports']
    },
    Instock: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
