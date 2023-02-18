module.exports = {
    /// khi nhận về 1 list thì cover sang object literal
    mutipleMongooseToObject: mongooseArr => mongooseArr.map(mongoose => mongoose.toObject()),
    // khi nhận vào 1 phần tử thì không cần pthuc map()
    mongooseToObject: mongoose =>mongoose.toObject(),
};