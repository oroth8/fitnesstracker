const Workout = require("../models/Workout")
module.exports = function(app){ 
    // Workouts GET (display all workouts)
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });
    // Workouts POST - create workouts
    app.post("/api/workouts", function(req,res){
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
    // Workouts GET
    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });
    // Workouts POST Range   
    app.post("/api/workouts/range",function (req,res){    
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
    // Workouts PUT /workouts/:id  
    // find by the workout id and update new values
    app.put("/api/workouts/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {
        new: true,
        runValidators:true 
    })
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}