var body=document.getElementsByTagName("body");
body.setAttribute("class","bg-dark");

let divstart=document.createElement("div");
divstart.classList("divstart","container");


let calculatordiv=document.createElement("div");
calculatordiv.classList("calculator","container");

let calculatorheaderdiv=document.createElement("div");
calculatorheaderdiv.classList("calc_header","container");

let outputdiv=document.createElement("div");
outputdiv.classList("output","container");

let inputdiv=document.createElement("div");
inputdiv.classList("input","container");

calculatorheaderdiv.append(outputdiv,inputdiv);

let branddiv=document.createElement("div");
branddiv.setAttribute("class","brand");
let brandname=document.createElement("a");
brandname.setAttribute("href","#");
brandname.innerText="Guvi calculator";
branddiv.appendChild(brandname);

let calc_buttonsdiv=document.createElement("div");
calc_buttonsdiv.classList("calc_buttons","container");
let rowdiv1=document.createElement("div");
rowdiv1.setAttribute("class","row");
let columndiv1=document.createElement("div");
columndiv1.classlist("col-2","buttons");
columndiv1.setAttribute("id","mc");
columndiv1.innerText="MC";
let columndiv2=document.createElement("div");
columndiv2.classlist("col-2","buttons");
columndiv2.setAttribute("id","mr");
columndiv2.innerText="MR";
let columndiv3=document.createElement("div");
columndiv3.classlist("col-2","buttons");
columndiv3.setAttribute("id","ms");
columndiv3.innerText="MS";
let columndiv4=document.createElement("div");
columndiv4.classlist("col-2","buttons");
columndiv4.setAttribute("id","m+");
columndiv4.innerText="M+";
let columndiv5=document.createElement("div");
columndiv5.classlist("col-2","buttons");
columndiv5.setAttribute("id","m-");
columndiv5.innerText="M-";
rowdiv1.append(columndiv1,columndiv2,columndiv3,columndiv4,columndiv5);

let rowdiv2=document.createElement("div");
rowdiv2.setAttribute("class","row");
let columndiv6=document.createElement("div");
columndiv6.classlist("col-2","buttons");
columndiv6.setAttribute("id","backspace");
columndiv6.innerText="←";
let columndiv7=document.createElement("div");
columndiv7.classlist("col-2","buttons");
columndiv7.setAttribute("id","ce");
columndiv7.innerText="CE";
let columndiv8=document.createElement("div");
columndiv8.classlist("col-2","buttons");
columndiv8.setAttribute("id","c");
columndiv8.innerText="C";
let columndiv9=document.createElement("div");
columndiv9.classlist("col-2","buttons");
columndiv9.setAttribute("id","plusminus");
columndiv9.innerText="±";
let columndiv10=document.createElement("div");
columndiv10.classlist("col-2","buttons");
columndiv10.setAttribute("id","sqrroot");
columndiv10.innerText="√";
rowdiv2.append(columndiv6,columndiv7,columndiv8,columndiv9,columndiv10);

let rowdiv3=document.createElement("div");
rowdiv3.setAttribute("class","row");
let columndiv11=document.createElement("div");
columndiv11.classlist("col-2","buttons");
columndiv11.setAttribute("id","seven");
columndiv11.innerText="7";
let columndiv12=document.createElement("div");
columndiv12.classlist("col-2","buttons");
columndiv12.setAttribute("id","eight");
columndiv12.innerText="8";
let columndiv13=document.createElement("div");
columndiv13.classlist("col-2","buttons");
columndiv13.setAttribute("id","nine");
columndiv13.innerText="9";
let columndiv14=document.createElement("div");
columndiv14.classlist("col-2","buttons");
columndiv14.setAttribute("id","divide");
columndiv14.innerText="/";
let columndiv15=document.createElement("div");
columndiv15.classlist("col-2","buttons");
columndiv15.setAttribute("id","modulus");
columndiv15.innerText="%";
rowdiv3.append(columndiv11,columndiv12,columndiv13,columndiv14,columndiv15);

let rowdiv4=document.createElement("div");
rowdiv4.setAttribute("class","row");
let columndiv11=document.createElement("div");
columndiv16.classlist("col-2","buttons");
columndiv16.setAttribute("id","four");
columndiv16.innerText="4";
let columndiv17=document.createElement("div");
columndiv17.classlist("col-2","buttons");
columndiv17.setAttribute("id","five");
columndiv17.innerText="5";
let columndiv18=document.createElement("div");
columndiv18.classlist("col-2","buttons");
columndiv18.setAttribute("id","six");
columndiv18.innerText="6";
let columndiv19=document.createElement("div");
columndiv19.classlist("col-2","buttons");
columndiv19.setAttribute("id","multiply");
columndiv19.innerText="*";
let columndiv20=document.createElement("div");
columndiv20.classlist("col-2","buttons");
columndiv20.setAttribute("id","reciprocal");
columndiv20.innerText="1/x";
rowdiv4.append(columndiv16,columndiv17,columndiv18,columndiv19,columndiv20);

let rowdiv5=document.createElement("div");
rowdiv5.setAttribute("class","row");
let columndiv21=document.createElement("div");
columndiv21.classlist("col-2","buttons");
columndiv21.setAttribute("id","one");
columndiv21.innerText="1";
let columndiv22=document.createElement("div");
columndiv22.classlist("col-2","buttons");
columndiv22.setAttribute("id","two");
columndiv22.innerText="2";
let columndiv23=document.createElement("div");
columndiv23.classlist("col-2","buttons");
columndiv23.setAttribute("id","three");
columndiv23.innerText="3";
let columndiv24=document.createElement("div");
columndiv24.classlist("col-2","buttons");
columndiv24.setAttribute("id","plus");
columndiv24.innerText="+";
let columndiv25=document.createElement("div");
columndiv25.classlist("col-2","buttons");
columndiv25.setAttribute("id","minus");
columndiv25.innerText="-";
rowdiv5.append(columndiv21,columndiv22,columndiv23,columndiv24,columndiv25);

let rowdiv6=document.createElement("div");
rowdiv6.setAttribute("class","row");
let columndiv26=document.createElement("div");
columndiv26.classlist("col-4","buttons");
columndiv26.setAttribute("id","zero");
columndiv26.innerText="0";
let columndiv27=document.createElement("div");
columndiv27.classlist("col-2","buttons");
columndiv27.setAttribute("id","dot");
columndiv27.innerText=".";
let columndiv28=document.createElement("div");
columndiv28.classlist("col-4","buttons");
columndiv28.setAttribute("id","equal");
columndiv28.innerText="=";
rowdiv6.append(columndiv26,columndiv27,columndiv28);
calc_buttonsdiv.append(rowdiv1,rowdiv2,rowdiv3,rowdiv4,rowdiv5,rowdiv6);

calculatordiv.append(calculatorheaderdiv,branddiv,calc_buttonsdiv);

let notediv=document.createElement("div");
notediv.classList("notes","container");


divstart.append(calculatordiv,notediv);
body.appendChild(divstart);