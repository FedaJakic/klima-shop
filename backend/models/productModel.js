import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    sifraProizvoda: {
      type: String,
      required: true,
      default: ' ',
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    onSale: {
      type: Boolean,
      required: true,
      default: false,
    },
    sale: {
      type: Number,
      required: true,
      default: 0,
    },
    coldEff: {
      type: Number,
      required: true,
      default: 0,
    },
    warmEff: {
      type: Number,
      required: true,
      default: 0,
    },
    energyClass: {
      type: String,
      required: true,
      default: 'A',
    },
    sizeOfRoom: {
      type: String,
      required: true,
      default: 'do 15',
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    najtrazeni: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
