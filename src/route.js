const UserController = require('./controllers/UserController')
const CarController = require('./controllers/CarController')
const BookController = require('./controllers/BookController')
const SpeakerController = require('./controllers/SpeakerController')
const CourseController = require('./controllers/CourseController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    app.get('/users', UserController.index)

    //--- Car API
    app.post('/car', CarController.create)
    
    app.put('/car/:carId', CarController.put)
    
    app.delete('/car/:carId', CarController.remove)
    
    app.get('/car/:carId', CarController.show)
    
    app.get('/cars', CarController.index)

    //--- Book API
    app.post('/book', BookController.create)
    
    app.put('/book/:bookId', BookController.put)
    
    app.delete('/book/:bookId', BookController.remove)
    
    app.get('/book/:bookId', BookController.show)
    
    app.get('/books', BookController.index)

    //--- Speaker API
    app.post('/speaker', SpeakerController.create)
    
    app.put('/speaker/:speakerId', SpeakerController.put)
    
    app.delete('/speaker/:speakerId', SpeakerController.remove)
    
    app.get('/speaker/:speakerId', SpeakerController.show)
    
    app.get('/speakers', SpeakerController.index)

    //--- Course API---
    app.post('/course', CourseController.create)
    
    app.put('/course/:courseId', CourseController.put)
    
    app.delete('/course/:courseId', CourseController.remove)
    
    app.get('/course/:courseId', CourseController.show)
    
    app.get('/courses', CourseController.index)

}