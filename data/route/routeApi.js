module.exports  = (db,router)=>{
    router.get('/',(req,res)=>{
                db.get()
                .then(projects =>{
                    if (projects.length !== 0){
                        res.json(projects)
                    }
                    else{
                        res.status(404)
                       .json({
                            message :`There is no project yet, add a new one`})
                    } 
                    
                })
                .catch(err =>{
                    res.status(500)
                    .json({
                        errorMessage :"server error"
                    })
                })
            });
        
    router.get('/:id',(req,res)=>{
                const id = req.params.id;
                        db.get()
                        .then(project =>{
                       
                            if (project[id-1]){
                                res.json(project[id-1])
                            }
                            else{
                                res.status(404)
                               .json({
                                    message :`The project with the specified ID =${id} does not exist.`})
                            } 
                        
                           
                        })
                        .catch(err =>{
                            res.status(500)
                            .json({
                                errorMessage :"server error"
                            })
                        })
                    });
    
    // POST
    
    router.post('/',(req,res)=>{
        const project = req.body;
        if (project.name  && project.description){
            db.insert(project)
            .then(project =>{
                res.json(project)
            })
            .catch(err =>{
                res.status(500)
                .json({
                    errorMessage :"server error"
                })
            })
           }
           else{
            res
            .status(400)
            .json({
                errorMessage: "Please provide name and description for the project."
            })} 
       
    });
    
    
    // UPDATE
    
    router.put('/:id',(req,res)=>{
        const projectUpdate = req.body;
        const id = Number(req.params.id);
        if (projectUpdate.name  && projectUpdate.description){
                                    db.update(id, projectUpdate)
                                    .then(project =>{
                                            res.json(project)
                                        } )
                                        .catch(err =>{
                                            res.status(500)
                                            .json({
                                                errorMessage :"server error"
                                            })
                                        })  
                            }
                            else{
                                res.status(404)
                               .json({
                                    message :`Please provide name and description for the project.`})
                            } 
       
    });
    
    router.delete('/:id',(req,res)=>{
        const id = Number(req.params.id);
        db.remove(id)
        .then(idDeleted =>{res.json(
            {Message:`${idDeleted} project deleted` })
                                        } )
           .catch(err =>{
            res.status(500)
            .json({
             errorMessage :"server error"
               }) })  
                            
                            
    });
    }