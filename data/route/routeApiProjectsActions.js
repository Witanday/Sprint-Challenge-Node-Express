module.exports  = (db,router)=>{
 router.get('/actions/:projectId',(req,res)=>{
    
    const projectId = req.params.projectId;
            db.getProjectActions(projectId)
            .then(actions =>{
                const result = Object.entries(actions)
                  console.log( result.length)
                if (actions.length !== 0){
                    res.json(actions)
                }
                else{
                    res.status(404)
                   .json({
                        message :`No action for this projects`})
                } 
            
               
            })
            .catch(err =>{
                res.status(500)
                .json({
                    errorMessage :"server error"
                })
            })
        });
    }