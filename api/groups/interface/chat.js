module.exports = [
    {
     method: 'get',   
     path: '/',
     work: (req,res) => {
        res.send('hi');
     }
    }
];