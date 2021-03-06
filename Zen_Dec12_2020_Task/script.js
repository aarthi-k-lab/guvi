let maindiv=document.createElement("div");
maindiv.setAttribute("class", "main");

let headerdiv=document.createElement("div");
headerdiv.setAttribute("class","header");

let resumepicdiv=document.createElement("div");
resumepicdiv.setAttribute("id","resumepicdiv");
let pic_backgrounddiv=document.createElement("div");
pic_backgrounddiv.setAttribute("id","pic_background");
let picdiv=document.createElement("div");
picdiv.setAttribute("id","pic");
pic_backgrounddiv.appendChild(picdiv);
resumepicdiv.appendChild(pic_backgrounddiv);

let namemaindiv=document.createElement("div");
namemaindiv.setAttribute("class","namemaindiv");

let lsidenamediv=document.createElement("div");
lsidenamediv.setAttribute("id","lsidenamediv");
let whitestrike=document.createElement("div");
whitestrike.setAttribute("class","whitestrike");
lsidenamediv.appendChild(whitestrike);

let name_border=document.createElement("div");
name_border.setAttribute("id","name_border");
let namediv=document.createElement("div");
namediv.setAttribute("id","name");
let nameh1=document.createElement("h1");
nameh1.innerText="BRIAN DUDEY";
namediv.appendChild(nameh1);
name_border.appendChild(namediv);

let rsidenamediv=document.createElement("div");
rsidenamediv.setAttribute("id","rsidenamediv");
let whitestrike1=document.createElement("div");
whitestrike1.setAttribute("class","whitestrike");
rsidenamediv.appendChild(whitestrike1);
namemaindiv.append(lsidenamediv,name_border,rsidenamediv);

headerdiv.append(resumepicdiv,namemaindiv);

let contentdiv=document.createElement("div");
contentdiv.setAttribute("class","content");

let contactinfosection=document.createElement("section");
contactinfosection.setAttribute("id","contactinfo");
contactinfosection.innerText="N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.corn";

let hr=document.createElement("hr");

let infodiv=document.createElement("div");
infodiv.setAttribute("class","infodiv");

let leftpanediv=document.createElement("div");
leftpanediv.setAttribute("class","leftpane");
let Profile_div=document.createElement("div");
Profile_div.setAttribute("class","Profile_div");
let profile_header=document.createElement("div");
profile_header.setAttribute("class","profile_header");
let h2prohead=document.createElement("h2");
h2prohead.innerText="Profile";
profile_header.appendChild(h2prohead);
let profile_content=document.createElement("div");
profile_content.setAttribute("class","profile_content");
let spanprocont=document.createElement("span");
spanprocont.innerText="Innovative optimized seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assduous, animated, and an alliteration advocate.";
profile_content.appendChild(spanprocont);
Profile_div.append(profile_header,profile_content);
let skills_div=document.createElement("div");
skills_div.setAttribute("class","skills_div");
let skills_header=document.createElement("div");
skills_header.setAttribute("class","skills_header");
let h2skillhead=document.createElement("h2");
h2skillhead.innerText="Skills";
skills_header.appendChild(h2skillhead);
let skills_content=document.createElement("div");
skills_content.setAttribute("class","skills_content");
let skills_table=document.createElement("table");
skills_table.setAttribute("class","skills_table");
let trskilltable1=document.createElement("tr");
let thskilltable1=document.createElement("th");
thskilltable1.colSpan="2";
thskilltable1.style.textAlign="center";
thskilltable1.innerText="Technical Skills";
trskilltable1.appendChild(thskilltable1);
let trskilltable2=document.createElement("tr");
let tdskilltable1=document.createElement("td");
tdskilltable1.innerText="JavaScript";
let tdskilltable2=document.createElement("td");
tdskilltable2.setAttribute("class","slidecontainer");
let inputskill1=document.createElement("input");
inputskill1.setAttribute("class","slider");
inputskill1.setAttribute("id","slider1");
inputskill1.setAttribute("type","range");
inputskill1.setAttribute("min","1");
inputskill1.setAttribute("max","10");
inputskill1.setAttribute("value","8");
inputskill1.setAttribute("disabled","true");
tdskilltable2.appendChild(inputskill1);
trskilltable2.append(tdskilltable1,tdskilltable2);
let trskilltable3=document.createElement("tr");
let tdskilltable3=document.createElement("td");
tdskilltable3.innerText="css";
let tdskilltable4=document.createElement("td");
tdskilltable4.setAttribute("class","slidecontainer");
let inputskill2=document.createElement("input");
inputskill2.setAttribute("class","slider");
inputskill2.setAttribute("id","slider2");
inputskill2.setAttribute("type","range");
inputskill2.setAttribute("min","1");
inputskill2.setAttribute("max","10");
inputskill2.setAttribute("value","8");
inputskill2.setAttribute("disabled","true");
tdskilltable4.appendChild(inputskill2);
trskilltable3.append(tdskilltable3,tdskilltable4);
let trskilltable4=document.createElement("tr");
let tdskilltable5=document.createElement("td");
tdskilltable5.innerText="HTML";
let tdskilltable6=document.createElement("td");
tdskilltable6.setAttribute("class","slidecontainer");
let inputskill3=document.createElement("input");
inputskill3.setAttribute("class","slider");
inputskill3.setAttribute("id","slider3");
inputskill3.setAttribute("type","range");
inputskill3.setAttribute("min","1");
inputskill3.setAttribute("max","10");
inputskill3.setAttribute("value","6");
inputskill3.setAttribute("disabled","true");
tdskilltable6.appendChild(inputskill3);
trskilltable4.append(tdskilltable5,tdskilltable6);
let trskilltable5=document.createElement("tr");
let tdskilltable7=document.createElement("td");
tdskilltable7.innerText="React";
let tdskilltable8=document.createElement("td");
tdskilltable8.setAttribute("class","slidecontainer");
let inputskill4=document.createElement("input");
inputskill4.setAttribute("class","slider");
inputskill4.setAttribute("id","slider4");
inputskill4.setAttribute("type","range");
inputskill4.setAttribute("min","1");
inputskill4.setAttribute("max","10");
inputskill4.setAttribute("value","6");
inputskill4.setAttribute("disabled","true");
tdskilltable4.appendChild(inputskill4);
trskilltable5.append(tdskilltable7,tdskilltable8);
let trskilltable6=document.createElement("tr");
let tdskilltable9=document.createElement("td");
tdskilltable9.innerText="Redux";
let tdskilltable10=document.createElement("td");
tdskilltable10.setAttribute("class","slidecontainer");
let inputskill5=document.createElement("input");
inputskill5.setAttribute("class","slider");
inputskill5.setAttribute("id","slider5");
inputskill5.setAttribute("type","range");
inputskill5.setAttribute("min","1");
inputskill5.setAttribute("max","10");
inputskill5.setAttribute("value","8");
inputskill5.setAttribute("disabled","true");
tdskilltable10.appendChild(inputskill5);
trskilltable6.append(tdskilltable9,tdskilltable10);
let trskilltable7=document.createElement("tr");
let tdskilltable11=document.createElement("td");
tdskilltable11.innerText="Mongo";
let tdskilltable12=document.createElement("td");
tdskilltable12.setAttribute("class","slidecontainer");
let inputskill6=document.createElement("input");
inputskill6.setAttribute("class","slider");
inputskill6.setAttribute("id","slider6");
inputskill6.setAttribute("type","range");
inputskill6.setAttribute("min","1");
inputskill6.setAttribute("max","10");
inputskill6.setAttribute("value","8");
inputskill6.setAttribute("disabled","true");
tdskilltable12.appendChild(inputskill6);
trskilltable7.append(tdskilltable11,tdskilltable12);
let trskilltable8=document.createElement("tr");
let tdskilltable13=document.createElement("td");
tdskilltable13.innerText="Deployment";
let tdskilltable14=document.createElement("td");
tdskilltable14.setAttribute("class","slidecontainer");
let inputskill7=document.createElement("input");
inputskill7.setAttribute("class","slider");
inputskill7.setAttribute("id","slider7");
inputskill7.setAttribute("type","range");
inputskill7.setAttribute("min","1");
inputskill7.setAttribute("max","10");
inputskill7.setAttribute("value","10");
inputskill7.setAttribute("disabled","true");
tdskilltable4.appendChild(inputskill7);
trskilltable8.append(tdskilltable13,tdskilltable14);
let trskilltable9=document.createElement("tr");
let thskilltable2=document.createElement("th");
thskilltable2.colSpan="2";
thskilltable2.style.textAlign="center";
thskilltable2.innerText="Additional Skills";
trskilltable9.appendChild(thskilltable2);
let trskilltable10=document.createElement("tr");
let tdskilltable15=document.createElement("td");
tdskilltable15.innerText="Project Mnagement";
let tdskilltable16=document.createElement("td");
tdskilltable16.setAttribute("class","slidecontainer");
let inputskill8=document.createElement("input");
inputskill8.setAttribute("class","slider");
inputskill8.setAttribute("id","slider8");
inputskill8.setAttribute("type","range");
inputskill8.setAttribute("min","1");
inputskill8.setAttribute("max","10");
inputskill8.setAttribute("value","10");
inputskill8.setAttribute("disabled","true");
tdskilltable16.appendChild(inputskill8);
trskilltable10.append(tdskilltable15,tdskilltable16);
let trskilltable11=document.createElement("tr");
let tdskilltable17=document.createElement("td");
tdskilltable17.innerText="Recruitment";
let tdskilltable18=document.createElement("td");
tdskilltable18.setAttribute("class","slidecontainer");
let inputskill9=document.createElement("input");
inputskill9.setAttribute("class","slider");
inputskill9.setAttribute("id","slider9");
inputskill9.setAttribute("type","range");
inputskill9.setAttribute("min","1");
inputskill9.setAttribute("max","10");
inputskill9.setAttribute("value","8");
inputskill9.setAttribute("disabled","true");
tdskilltable18.appendChild(inputskill9);
trskilltable11.append(tdskilltable17,tdskilltable18);
let trskilltable12=document.createElement("tr");
let tdskilltable19=document.createElement("td");
tdskilltable19.innerText="Business Development";
let tdskilltable20=document.createElement("td");
tdskilltable20.setAttribute("class","slidecontainer");
let inputskill10=document.createElement("input");
inputskill10.setAttribute("class","slider");
inputskill10.setAttribute("id","slider10");
inputskill10.setAttribute("type","range");
inputskill10.setAttribute("min","1");
inputskill10.setAttribute("max","10");
inputskill10.setAttribute("value","10");
inputskill10.setAttribute("disabled","true");
tdskilltable20.appendChild(inputskill10);
trskilltable12.append(tdskilltable19,tdskilltable20);
let trskilltable13=document.createElement("tr");
let tdskilltable21=document.createElement("td");
tdskilltable21.innerText="Editing";
let tdskilltable22=document.createElement("td");
tdskilltable22.setAttribute("class","slidecontainer");
let inputskill11=document.createElement("input");
inputskill11.setAttribute("class","slider");
inputskill11.setAttribute("id","slider11");
inputskill11.setAttribute("type","range");
inputskill11.setAttribute("min","1");
inputskill11.setAttribute("max","10");
inputskill11.setAttribute("value","8");
inputskill11.setAttribute("disabled","true");
tdskilltable22.appendChild(inputskill11);
trskilltable13.append(tdskilltable21,tdskilltable22);
let trskilltable14=document.createElement("tr");
let tdskilltable23=document.createElement("td");
tdskilltable23.innerText="Business Development";
let tdskilltable24=document.createElement("td");
tdskilltable24.setAttribute("class","slidecontainer");
let inputskill12=document.createElement("input");
inputskill12.setAttribute("class","slider");
inputskill12.setAttribute("id","slider12");
inputskill12.setAttribute("type","range");
inputskill12.setAttribute("min","1");
inputskill12.setAttribute("max","10");
inputskill12.setAttribute("value","10");
inputskill12.setAttribute("disabled","true");
tdskilltable24.appendChild(inputskill12);
trskilltable14.append(tdskilltable23,tdskilltable24);
skills_table.append(trskilltable1,trskilltable2,trskilltable3,trskilltable4,trskilltable5,trskilltable6,trskilltable7,trskilltable8,
    trskilltable9,trskilltable10,trskilltable11,trskilltable12,trskilltable13,trskilltable14);
skills_content.appendChild(skills_table);
skills_div.append(skills_header,skills_content);


let workexperience1_div=document.createElement("div");
workexperience1_div.setAttribute("class","workexperience1_div");
let workexperience1_header=document.createElement("div");
workexperience1_header.setAttribute("class","workexperience1_header");
let h2workExphead=document.createElement("h2");
h2workExphead.innerText="Work experience";
workexperience1_header.appendChild(h2workExphead);
let workexperience1_content=document.createElement("div");
workexperience1_content.setAttribute("class","workexperience1_content");
let wrkexp_table=document.createElement("table");
let trwrktable1=document.createElement("tr");
let thwrktable1=document.createElement("th");
thwrktable1.innerText="Event Manager";
let tdwrktable1=document.createElement("td");
tdwrktable1.style.width="290px";
tdwrktable1.style.textAlign="left";
tdwrktable1.innerText="03/2014-02/2017";
trwrktable1.append(thwrktable1,tdwrktable1);
let trwrktable2=document.createElement("tr");
let tdwrktable2=document.createElement("td");
tdwrktable2.colSpan="2";
tdwrktable2.innerText="C3 Presents, Washington DC";
trwrktable2.appendChild(tdwrktable2);
wrkexp_table.append(trwrktable1,trwrktable2);
let wrkexpul=document.createElement("ul");
let wrkexpli1=document.createElement("li");
wrkexpli1.innerText="Lead and execute all phases of event planning and production committee spanning recruitment, training, vendor relationships and on-site facilitation.";
let wrkexpli2=document.createElement("li");
wrkexpli2.innerText="Brought new business to the organizatbn through relentless networking and stewardship which helped the company with the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women";
let wrkexpli3=document.createElement("li");
wrkexpli3.innerText="Exercise fiscal control over budget creation, tracking and reporthg. Collaborate with employees at all organizational levels to advance cohesive operations";
wrkexpul.append(wrkexpli1,wrkexpli2,wrkexpli3);
workexperience1_content.append(wrkexp_table,wrkexpul);
workexperience1_div.append(workexperience1_header,workexperience1_content);
leftpanediv.append(Profile_div,skills_div,workexperience1_div);

let rightpanediv = document.createElement("div");
rightpanediv.setAttribute("class","rightpane");
let workexperience2_div=document.createElement("div");
workexperience2_div.setAttribute("class","workexperience2_div");
let workexperience2_header=document.createElement("div");
workexperience2_header.setAttribute("class","workexperience2_header");
let h2workExphead2=document.createElement("h2");
h2workExphead2.innerText="Work experience";
workexperience2_header.appendChild(h2workExphead2);
let workexperience2_content=document.createElement("div");
workexperience2_content.setAttribute("Class","workexperience2_content");
let wrkexp2_table=document.createElement("table");
let trwrk2table1=document.createElement("tr");
let thwrk2table1=document.createElement("th");
thwrk2table1.innerText="Community Relations Manager";
thwrk2table1.style.width="200px";
thwrk2table1.style.textAlign="left";
let tdwrk2table1=document.createElement("td");
tdwrk2table1.style.paddingLeft="60px";
tdwrk2table1.innerText="06/2011-01/2014";
trwrk2table1.append(thwrk2table1,tdwrk2table1);
let trwrk2table2=document.createElement("tr");
let tdwrk2table2=document.createElement("td");
tdwrk2table2.colSpan="2";
tdwrk2table2.innerText="Gay & Lesbian Housing, Los Angeles";
trwrk2table2.appendChild(tdwrk2table2);
wrkexp2_table.append(trwrk2table1,trwrk2table2);
let wrkexp2ul=document.createElement("ul");
let wrkexp2li1=document.createElement("li");
wrkexp2li1.innerText="Arranging presentations and pitch deck. Buildng relationships with key media players.Designing a PR plan and establishing important focus points. Designing, creating and managing content across multiple communication platforms";
let wrkexp2li2=document.createElement("li");
wrkexp2li2.innerText="Designing a PR plan and establishing important focus points. Designing, creating and managing content across multiple communication platforms.";
let wrkexp2li3=document.createElement("li");
wrkexp2li3.innerText="Buildng relationships with key media players.Designing a PR plan and establishing important focus points. Designing, creating and managing content across multiple communication platforms.";
wrkexp2ul.append(wrkexp2li1,wrkexp2li2,wrkexp2li3);
workexperience2_content.append(wrkexp2_table,wrkexp2ul);
workexperience2_div.append(workexperience2_header,workexperience2_content);
let education_div=document.createElement("div");
education_div.setAttribute("class","education_div");
let education_header=document.createElement("div");
education_header.setAttribute("class","education_header");
let h2education=document.createElement("h2");
h2education.innerText="Education";
education_header.appendChild(h2education);
let education_content=document.createElement("div");
education_content.setAttribute("Class","education_content");
let education_table=document.createElement("table");
let treducationtable1=document.createElement("tr");
let theducationtable1=document.createElement("th");
theducationtable1.innerText="Engineering Immersion Program";
theducationtable1.style.textAlign="left";
let tdeducationtable1=document.createElement("td");
tdeducationtable1.style.paddingLeft="40px";
tdeducationtable1.innerText="11/2018 - 06/2018";
treducationtable1.append(theducationtable1,tdeducationtable1);
let treducationtable2=document.createElement("tr");
let tdeducationtable2=document.createElement("td");
tdeducationtable2.colSpan="2";
tdeducationtable2.innerText="Thinkful Chicago, IL";
treducationtable2.appendChild(tdeducationtable2);
education_table.append(treducationtable1,treducationtable2);
let educationp=document.createElement("p");
educationp.innerText="Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technicalstack.";
let educationul=document.createElement("ul");
let educationli1=document.createElement("li");
educationli1.innerText=" Developed a fullstack web application, 'RalewU', using React that allows users to express various aspects of meditation. Users progress is stored on a backend created using Node and MongoDB.";
let educationli2=document.createElement("li");
educationli2.innerText="Developed a language learning app, 'Foodie Phonetics' using spaced repetition and a Inked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technicalstack.";
let educationli3=document.createElement("li");
educationli3.innerText="Developed a concierge app, 'Pley', for indivduals looking for curated suggestions when visithg a new place. React was used to devebp the front end which incüdes real-time chat, drag and drop and variety of advanced features. The backend, built ushg Node Express, and Mongo, takes advantage of well- developed RESTful API, Geospatial searching and user authentication with JWT.";
educationul.append(educationli1,educationli2,educationli3);
let education_table2=document.createElement("table");
let treducation2table1=document.createElement("tr");
let theducation2table1=document.createElement("th");
theducation2table1.innerText="BA English";
theducation2table1.style.textAlign="left";
let tdeducation2table1=document.createElement("td");
tdeducation2table1.style.fontStretch="expanded";
tdeducation2table1.innerText="09/2001 - 09/2005";
treducation2table1.append(theducation2table1,tdeducation2table1);
let treducation2table2=document.createElement("tr");
let tdeducation2table2=document.createElement("td");
tdeducation2table2.colSpan="2";
tdeducation2table2.innerText="University of California, Los Angles";
treducation2table2.appendChild(tdeducation2table2);
education_table2.append(treducation2table1,treducation2table2);
education_content.append(education_table,educationp,educationul,education_table2);
education_div.append(education_header,education_content);
let br=document.createElement("br");

rightpanediv.append(workexperience2_div,education_div,br,br,br,br);

infodiv.append(leftpanediv,rightpanediv);
contentdiv.append(contactinfosection,hr,infodiv);
maindiv.append(headerdiv,contentdiv);

let body=document.querySelector("body");
body.appendChild(maindiv);