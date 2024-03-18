const userInformation = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello I'm ${userInformation.toto.name} from ${userInformation.toto.campus} Campus!`,
    e: "Oé",
    T: "u",
}));
