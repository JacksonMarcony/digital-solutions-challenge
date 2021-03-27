const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', 
    {useNewUrlParser: true, 
    useUnifiedTopology: true})
    .then(resolve => console.log("banco conectado", resolve))
    .catch(error => console.log(error))
