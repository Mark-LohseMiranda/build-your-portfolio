
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name:'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where do you live:'
    },
    {
        type: 'input',
        name: 'story',
        message: 'What is your story:'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your linkedin profile url:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github profile url:'
    }
])
.then((data) => {
const htmlData = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
            crossorigin="anonymous">
        <title>Welcome to your Profile</title>
    </head>
    <body>
        <div class="jumbotron text-center">
            <hr class="my-4">
            <h1 class="display-4">Hello, Vistor!</h1>
            <hr class="my-4">
            <nav class="navbar navbar-dark bg-dark">
                <a href="#name" class="navbar-nav">Name</a>
                <a href="#location" class="navbar-nav">Location</a>
                <a href="#biography" class="navbar-nav">Biography</a>
                <a href="#linkedin" class="navbar-nav">LinkedIn</a>
                <a href="#github" class="navbar-nav">GitHub</a>
            </nav>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-3 col-lg-2">
                    <p class="text-center text-md-right text-lg-right
                        font-weight-bold" id="name">Name:</p>
                </div>
                <div class="col-12 col-md-9 col-lg-10">
                    <p class="text-center text-md-left">${data.name}</p>
                </div>
                <div class="col-12 col-md-3 col-lg-2">
                    <p class="text-center text-md-right text-lg-right
                        font-weight-bold" id="location">Location:</p>
                </div>
                <div class="col-12 col-md-9 col-lg-10">
                    <p class="text-center text-md-left">${data.location}</p>
                </div><div class="col-12 col-md-3 col-lg-2">
                    <p class="text-center text-md-right text-lg-right
                        font-weight-bold" id="biography">Biography</p>
                </div>
                <div class="col-12 col-md-9 col-lg-10">
                    <p class="text-center text-md-left">${data.story}</p>
                </div><div class="col-12 col-md-3 col-lg-2">
                    <p class="text-center text-md-right text-lg-right
                        font-weight-bold" id="linkedin">Linkedin:</p>
                </div>
                <div class="col-12 col-md-9 col-lg-10">
                    <p class="text-center text-md-left"><a href="http://${data.linkedin}/" target="_blank">${data.linkedin}</a></p>
                </div><div class="col-12 col-md-3 col-lg-2">
                    <p class="text-center text-md-right text-lg-right
                        font-weight-bold" id="github">Github:</p>
                </div>
                <div class="col-12 col-md-9 col-lg-10">
                    <p class="text-center text-md-left"><a href="http://${data.github}/" target="_blank">${data.github}</a></p>
                </div>
            </div>
        </div>
    </body>
</html>
`;

fs.writeFile('index.html', htmlData, (err) =>
    err ? console.log(err) : console.log('success')
);
});