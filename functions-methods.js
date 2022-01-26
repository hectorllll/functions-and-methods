// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft.
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email) {
    const getEmailIndex = email.indexOf('@');
    const domein = email.substring(getEmailIndex + 1);
     return domein
}

const domein1 = getEmailDomain('n.eeken@novi-education.nl');
const domein2 = getEmailDomain('t.mellink@novi.nl');
const domein3 = getEmailDomain('a.wiersma@outlook.com');
console.log(domein1);
console.log(domein2);
console.log(domein3);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email2) {
    const getTypeDomein = email2.indexOf('@');
    const typeDomain = email2.substring(getTypeDomein + 1);
    //return typeDomain;
    if (typeDomain === "novi-education.nl") {
        return "Student"
    } else if (typeDomain === "novi.nl") {
        return "Medewerker"
    } else {
        return "Extern"
    }
}
const userDomain1 = typeOfEmail("n.eeken@novi-education.nl");
const userDomain2 = typeOfEmail("t.mellink@novi.nl");
const userDomain3 = typeOfEmail("novi.nlaapjesk@outlook.com");
const userDomain4 = typeOfEmail("a.wiersma@outlook.com");
console.log(userDomain1);
console.log(userDomain2);
console.log(userDomain3);
console.log(userDomain4);



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailadres) {
    const containsAt = emailadres.includes("@");
    const containsComma = emailadres.includes(",");
    const containsDot = emailadres.lastIndexOf(".");

    const checkDot = containsDot !== emailadres.length -1;

    if (containsAt && !containsComma && checkDot) {
        return true
    }
    else  {
        return false
    }
}

const validity1 = checkEmailValidity("n.eeken@novi.nl");
const validity2 = checkEmailValidity("tessmellink@novi.nl");
const validity3 = checkEmailValidity("n.eekenanovi.nl");
const validity4 = checkEmailValidity("n.eeken@novinl.");
const validity5 = checkEmailValidity("tessmellink@novi,nl");

console.log(validity1);
console.log(validity2);
console.log(validity3);
console.log(validity4);
console.log(validity5);