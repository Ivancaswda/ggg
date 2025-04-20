import mongoose from 'mongoose'

const connectDb = async () => {

    mongoose.connection.on('connected', () => {
        console.log('mongodb is connected')
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/fitness-trainer`)
}
export default connectDb