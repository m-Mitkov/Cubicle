module.exports = validateProduct = function(req, res, next){
    let isValid = true;
    let data = req.body;

    if (data.name.trim().length < 2) {
        isValid = false;

    }else if(data.description.length < 5){
        isValid = false;

    }else if(!data.imageUrl){
        isValid = false;
    }
    if (isValid) {
        next();
    }
}