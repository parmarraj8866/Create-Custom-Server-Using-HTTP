const http = require('http')
const fs = require('fs')
const port = 5000

const server = http.createServer((req, res) => {

    let url = req.url

    switch (url) {

        case "/":
            fs.readFile("./src/Home.html", "utf-8", (err, data) => {
                if (err) return res.end("Page Not Found")
                else res.end(data)
            })
            break

        case "/skills":
            fs.readFile("./src/Skill.html", "utf-8", (err, data) => {
                if (err) return res.end("Page Not Found")
                else res.end(data)
            })
            break

        case "/projects":
            fs.readFile("./src/Projects.html", "utf-8", (err, data) => {
                if (err) return res.end("page not found")
                else res.end(data)
            })
            break

        case "/contact":
            fs.readFile("./src/Contact.html", "utf-8", (err, data) => {
                if (err) return res.end("page not found")
                else res.end(data)
            })
            break
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Page Not Found</h1>");
            break;
    }

})

server.listen(port, () => console.log(`http://localhost:${port}`))
