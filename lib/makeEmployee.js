const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const makeEmployee = ({
    name,
    id,
    email,
    officeNumber,
    github,
    school,
    role,
}) => {
    let e;
    if (!role) {
        e = new Manager (name, id, email, officeNumber);
    }
    else if (role === "Engineer") {
        e = new Engineer (name, id, email, github);
    }
    else if (role === "Intern") {
        e = new Intern (name, id, email, school);
    }
    return e;
}

module.exports = makeEmployee;