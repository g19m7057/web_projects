// heading graph
const heading = document.createElement("h1");
var info = document.createTextNode("This is the tribute infomation")
heading.appendChild(info);

// list of tribute information
const one = document.createTextNode("Dr. Norman Borlaug was born in March 25, 1914.")
const two =  document.createTextNode("he was a agronomist who led what was known as the green revolution where there was an increase in agricultural output")
const three = document.createTextNode("he was awarded multiple honours for he contributions including a noble peace prize the Presidential Medal of Freedom and the Congressional Gold Medal");

const ul = document.createElement("ul");

var li1 = document.createElement("li");
li1.appendChild(one);
var li2 = document.createElement("li");
li2.appendChild(two);
var li3 = document.createElement("li");
li3.appendChild(three);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


function fun()
{
    document.getElementById("tribute-info").appendChild(heading);
    heading.style.textAlign = "center";
    document.getElementById("tribute-info").appendChild(ul);
    ul.style.textAlign = "center";
    ul.style.listStyleType = "none";
}