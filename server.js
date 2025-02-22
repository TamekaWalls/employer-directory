const express = require("express")
const employees = require('./employees')
const app = express()

app.get("/", (req,res)=>{
  res.send("Hello employees!")
})

app.get("/employees", (req,res)=>{
  res.json(employees)
})

app.listen(3000, () => console.log("Server running on port 3000"))