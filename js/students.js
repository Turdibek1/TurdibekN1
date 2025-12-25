document.addEventListener("DOMContentLoaded", function() {

    const classes = ["Boshlang'ich","1-sinf","2-sinf","3-sinf","4-sinf","5-sinf","6-sinf","7-sinf","8-sinf","9-sinf","10-sinf","11-sinf"];
    const totalStudents = 400; 
    const studentsPerClass = Math.floor(totalStudents / classes.length); 
    const extraStudents = totalStudents % classes.length; 

    const firstNamesMale = ["Ali","Jasur","Sardor","Olim","Akmal","Sanjar","Shohrux","Odil","Anvar","Farruh"];
    const firstNamesFemale = ["Malika","Nilufar","Feruza","Dildora","Shahnoza","Nigora","Madina","Shahrizat","Dilnoza","Madina"];
    const lastNames = ["Karimov","Tursunov","Rahimov","Sobirov","Abdullayev","Jo‘rayev","Mirzaev","Qodirov","Xolmatov","Ergashev"];

    const studentsByClass = classes.map((cls,index)=>{
        let count = studentsPerClass + (index < extraStudents ? 1 : 0); 
        let arr = [];
        for(let i=0;i<count;i++){
            const gender = Math.random() < 0.5 ? "Erkak" : "Ayol";
            const firstName = gender==="Erkak" ? firstNamesMale[Math.floor(Math.random()*firstNamesMale.length)]
                                               : firstNamesFemale[Math.floor(Math.random()*firstNamesFemale.length)];
            const lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
            arr.push(firstName + " " + lastName);
        }
        return arr;
    });

    const classRow = document.getElementById("classRow");
    const studentBody = document.getElementById("studentBody");
    const totalRow = document.getElementById("totalRow");

    // Ustunlar
    classes.forEach(cls=>{
        const th = document.createElement("th");
        th.textContent = cls;
        classRow.appendChild(th);
    });

    const maxRows = Math.max(...studentsByClass.map(arr=>arr.length));

    // Qatorlar
    for(let i=0;i<maxRows;i++){
        const tr = document.createElement("tr");

        // № ustuni
        const tdNum = document.createElement("td");
        tdNum.textContent = i+1;
        tr.appendChild(tdNum);

        // Sinf ustunlari
        studentsByClass.forEach(arr=>{
            const td = document.createElement("td");
            td.textContent = arr[i] || "";
            tr.appendChild(td);
        });

        studentBody.appendChild(tr);
    }

    // Tfoot – jami sonlar
    totalRow.innerHTML = ""; // avvalgi yozuvlarni tozalaymiz

    // № ustuni uchun
    const tdNum = document.createElement("td");
    tdNum.textContent = "Jami";
    totalRow.appendChild(tdNum);

    // Sinf ustunlari
    studentsByClass.forEach(arr=>{
        const td = document.createElement("td");
        td.textContent = arr.length;
        td.style.textAlign = "center";
        totalRow.appendChild(td);
    });

});

