const chat = require('./groups/interface/chat');
module.exports = async (app) => {
    return await new Promise((resolve,reject)=>{
        const routes= [
            ...chat
        ];
        routes.forEach(route=>{
            app[route.method](route.path,...route.middleware,route.work)
        })
        resolve();
    }) 
}