const router = require("express").Router();
let Student = require("../models/Student");


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;    // also can use D- structure

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
            res.json("Student Aded!")
    }).catch((err)=>{
            console.log(err);
    })    

})

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const { name, age, gender } = req.body;  // D structure

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({statuse : "User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({statuse : "Error with Updating data"}); // 500 - Error with Server side
    })  
})

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({statuse : "User Deleted"})
    })
    .catch((err)=>{
        console.log(err.message);
        res.status(500).send({statuse : "Error with delete Student", error : err.message})

    })
})


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    const user = await Student.findById(userId)
        .then((student)=>{
            res.status(200).send({statuse : " User fetched",student});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({statuse: "Error with get user", error : err.message});
        })
})

module.exports = router;