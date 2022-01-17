const para = document.createElement("p");
const info = document.createTextNode("Dr. Norman Borlaug was born in March 25, 1914, he was a agronomist who led what was known as the green revolution where there were increase in agricultural output, he was awarded multiple honours for he contributions including a noble peace prize the Presidential Medal of Freedom and the Congressional Gold Medal");
para.appendChild(info);

function fun()
{
    document.getElementById("tribute-info").appendChild(para);
}