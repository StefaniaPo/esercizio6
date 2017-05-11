var a = 10;
var c = 2;
b();
function b() {
    var a = 100;
    if (a === 100) {
        var ciccio = "Ciao!";
    }
    console.log(a*c);
    console.log(ciccio);
}



/* esempio */
person = {
    name: "Adriana",
    surname: "Lima",
    greet: function() {
        var self = this; //self mi serve per evitare il this riuscendo a identificare l'oggetto con self e creare un patter
        console.log("Ciao " + self.name + " " + self.surname);
        
        var altrafunc = function() {
            //this.surname = "Emily Ratacosa";
            return self.surname + "!!!";
        }
        console.log(altrafunc());
    }
}

person.greet();