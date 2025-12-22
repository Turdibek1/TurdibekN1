const teachers = [
    {name:"Aliyev Anvar", subject:"Matematika", gender:"Erkak", category:"Oliy toifa"},
    {name:"Karimova Dilnoza", subject:"Matematika", gender:"Ayol", category:"1-toifa"},
    {name:"Usmonov Baxtiyor", subject:"Matematika", gender:"Erkak", category:"2-toifa"},
    {name:"Sobirova Nilufar", subject:"Matematika", gender:"Ayol", category:"Mutaxassis"},
    {name:"Tursunov Sardor", subject:"Fizika", gender:"Erkak", category:"Oliy toifa"},
    {name:"Karimov Jamshid", subject:"Fizika", gender:"Erkak", category:"1-toifa"},
    {name:"Rashidova Gulbahor", subject:"Fizika", gender:"Ayol", category:"2-toifa"},
    {name:"Xolmatov Javlon", subject:"Fizika", gender:"Erkak", category:"Mutaxassis"},
    {name:"Yodgorova Dildora", subject:"Ingliz tili", gender:"Ayol", category:"Oliy toifa"},
    {name:"Ergashev Olim", subject:"Ingliz tili", gender:"Erkak", category:"1-toifa"},
    {name:"Abdullayev Farruh", subject:"Ingliz tili", gender:"Erkak", category:"2-toifa"},
    {name:"G‘anieva Nigora", subject:"Ingliz tili", gender:"Ayol", category:"Mutaxassis"},
    {name:"Ismoilov Sardor", subject:"Tarix", gender:"Erkak", category:"Oliy toifa"},
    {name:"Toshpulatova Malika", subject:"Tarix", gender:"Ayol", category:"1-toifa"},
    {name:"Rahimov Jahongir", subject:"Tarix", gender:"Erkak", category:"2-toifa"},
    {name:"Akbarova Nilufar", subject:"Tarix", gender:"Ayol", category:"Mutaxassis"},
    {name:"Xudoyberdiyev Anvar", subject:"Biologiya", gender:"Erkak", category:"Oliy toifa"},
    {name:"Saidova Dilnoza", subject:"Biologiya", gender:"Ayol", category:"1-toifa"},
    {name:"Qodirov Shohruh", subject:"Biologiya", gender:"Erkak", category:"2-toifa"},
    {name:"Jo‘rayev Madina", subject:"Biologiya", gender:"Ayol", category:"Mutaxassis"},
    {name:"Toshmatova Feruza", subject:"Kimyo", gender:"Ayol", category:"Oliy toifa"},
    {name:"Nurmurodov Jamshid", subject:"Kimyo", gender:"Erkak", category:"1-toifa"},
    {name:"Rahmonov Akmal", subject:"Kimyo", gender:"Erkak", category:"2-toifa"},
    {name:"Shodmonova Nilufar", subject:"Kimyo", gender:"Ayol", category:"Mutaxassis"},
    {name:"Karimov Odil", subject:"Geografiya", gender:"Erkak", category:"Oliy toifa"},
    {name:"Sultonova Shahrizat", subject:"Geografiya", gender:"Ayol", category:"1-toifa"},
    {name:"Murodov Jasur", subject:"Geografiya", gender:"Erkak", category:"2-toifa"},
    {name:"Ibragimova Nigora", subject:"Geografiya", gender:"Ayol", category:"Mutaxassis"},
    {name:"Raxmonov Sanjar", subject:"Fizika", gender:"Erkak", category:"Oliy toifa"},
    {name:"Zokirova Shahnoza", subject:"Fizika", gender:"Ayol", category:"1-toifa"},
    {name:"Toshpo‘latov Sardor", subject:"Fizika", gender:"Erkak", category:"2-toifa"},
    {name:"Yusupova Dildora", subject:"Fizika", gender:"Ayol", category:"Mutaxassis"},
    {name:"Abdullayev Akmal", subject:"Matematika", gender:"Erkak", category:"Oliy toifa"},
    {name:"Mirzaeva Malika", subject:"Matematika", gender:"Ayol", category:"1-toifa"},
    {name:"Qodirov Shoxruh", subject:"Matematika", gender:"Erkak", category:"2-toifa"},
    {name:"Shamsiddinova Nilufar", subject:"Matematika", gender:"Ayol", category:"Mutaxassis"},
    {name:"Toshpo‘latova Feruza", subject:"Ingliz tili", gender:"Ayol", category:"Oliy toifa"},
    {name:"Xudoyberdiyev Sardor", subject:"Ingliz tili", gender:"Erkak", category:"1-toifa"},
    {name:"Rahimova Malika", subject:"Ingliz tili", gender:"Ayol", category:"2-toifa"},
    {name:"Ergashev Shohrux", subject:"Ingliz tili", gender:"Erkak", category:"Mutaxassis"},
    {name:"Nurmurodov Anvar", subject:"Tarix", gender:"Erkak", category:"Oliy toifa"},
    {name:"Jo‘rayev Malika", subject:"Tarix", gender:"Ayol", category:"1-toifa"},
    {name:"Toshmatov Jasur", subject:"Tarix", gender:"Erkak", category:"2-toifa"},
    {name:"Saidova Nilufar", subject:"Tarix", gender:"Ayol", category:"Mutaxassis"},
    {name:"Karimov Odil", subject:"Biologiya", gender:"Erkak", category:"Oliy toifa"},
    {name:"Shodmonova Malika", subject:"Biologiya", gender:"Ayol", category:"1-toifa"},
    {name:"Murodov Sardor", subject:"Biologiya", gender:"Erkak", category:"2-toifa"},
    {name:"Ibragimova Feruza", subject:"Biologiya", gender:"Ayol", category:"Mutaxassis"},
    {name:"Toshmatova Nilufar", subject:"Kimyo", gender:"Ayol", category:"Oliy toifa"},
    {name:"Rahmonov Akmal", subject:"Kimyo", gender:"Erkak", category:"1-toifa"},
    {name:"Karimova Shahnoza", subject:"Kimyo", gender:"Ayol", category:"2-toifa"},
    {name:"Xolmatov Odil", subject:"Kimyo", gender:"Erkak", category:"Mutaxassis"},
    {name:"Saidov Sanjar", subject:"Geografiya", gender:"Erkak", category:"Oliy toifa"},
    {name:"Mirzaeva Shahrizat", subject:"Geografiya", gender:"Ayol", category:"1-toifa"},
    {name:"Rahmonova Nigora", subject:"Geografiya", gender:"Ayol", category:"2-toifa"},
    {name:"Toshmatov Sardor", subject:"Geografiya", gender:"Erkak", category:"Mutaxassis"}
];

// Jadvalni to‘ldirish kodi shu yerga qo‘shiladi (avvalgi js kod bilan)


const tbody = document.querySelector("#teacherTable tbody");
const subjects = [...new Set(teachers.map(t => t.subject))];

let totalMale=0, totalFemale=0, totalSpecialist=0, total2=0, total1=0, totalHigh=0;

subjects.forEach(sub=>{
    const maleNames = teachers.filter(t=>t.subject===sub && t.gender==="Erkak").map(t=>t.name).join(", ");
    const femaleNames = teachers.filter(t=>t.subject===sub && t.gender==="Ayol").map(t=>t.name).join(", ");
    const specialistNames = teachers.filter(t=>t.subject===sub && t.category==="Mutaxassis").map(t=>t.name).join(", ");
    const toifa2Names = teachers.filter(t=>t.subject===sub && t.category==="2-toifa").map(t=>t.name).join(", ");
    const toifa1Names = teachers.filter(t=>t.subject===sub && t.category==="1-toifa").map(t=>t.name).join(", ");
    const highNames = teachers.filter(t=>t.subject===sub && t.category==="Oliy toifa").map(t=>t.name).join(", ");

    totalMale += teachers.filter(t=>t.subject===sub && t.gender==="Erkak").length;
    totalFemale += teachers.filter(t=>t.subject===sub && t.gender==="Ayol").length;
    totalSpecialist += teachers.filter(t=>t.subject===sub && t.category==="Mutaxassis").length;
    total2 += teachers.filter(t=>t.subject===sub && t.category==="2-toifa").length;
    total1 += teachers.filter(t=>t.subject===sub && t.category==="1-toifa").length;
    totalHigh += teachers.filter(t=>t.subject===sub && t.category==="Oliy toifa").length;

    const row = document.createElement("tr");
    row.innerHTML = `<td>${sub}</td>
                     <td>${maleNames}</td>
                     <td>${femaleNames}</td>
                     <td>${specialistNames}</td>
                     <td>${toifa2Names}</td>
                     <td>${toifa1Names}</td>
                     <td>${highNames}</td>`;
    tbody.appendChild(row);
});

document.getElementById("totalMale").textContent = totalMale;
document.getElementById("totalFemale").textContent = totalFemale;
document.getElementById("totalSpecialist").textContent = totalSpecialist;
document.getElementById("total2").textContent = total2;
document.getElementById("total1").textContent = total1;
document.getElementById("totalHigh").textContent = totalHigh;