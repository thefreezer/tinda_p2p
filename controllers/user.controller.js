const getUser = (req, res) => {
    const query = 'SELECT * FROM users WHERE user_id = ';
    
    console.log("GET USER");
    res.send(req.body)
}

module.exports = {
    getUser
}

