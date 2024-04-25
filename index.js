import express from 'express'

const app = express() ;

app.use(express.urlencoded({extended:true})); 

app.use(express.static("public")) ; 

app.get("/", (req,res) => {
    billets = [] ;
    res.render("index.ejs")
})

let billets = [];
let horodatage = [] ;

app.post("/submit", (req, res) => {
    let texte = req.body["billet"] ;
    billets.push(texte) ;

    let horaire = new Date() ;
    function donneHorodatage() {
        let joliMinutes = horaire.getMinutes()
        if (horaire.getMinutes()< 10) {
            joliMinutes = `0${joliMinutes}`
        }
        else {}        
    return `le ${horaire.toLocaleDateString()} à ${horaire.getHours()}h${joliMinutes}`
    }
    horodatage.push(donneHorodatage())

    res.render("index.ejs", {billets, horodatage})

})
