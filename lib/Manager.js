const Manager = require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this._officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this._officeNumber;
    }

    getRole(){
        return "The Boss"
    }
}


module.exports = Manager
