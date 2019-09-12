function resume() {
    alert("RESUME TO COME");
}

function resume_hover(){
    //want the resume button to change to yellow when hovered over and clicked on
}

document.getElementById("resume_link").addEventListener("click", resume_clicked)
document.getElementById("projects_link").addEventListener("click", projects_clicked)
document.getElementById("quick_about").addEventListener("click", about_clicked)

function about_clicked(){
    //show about
    document.getElementById("about_container").style.display="block";
    document.getElementById("quick_about").style.color="#1a53ff";
    document.getElementById("quick_about").style.background="white";

    //hide tocome
    document.getElementById("tocome").style.display="none";
    document.getElementById("projects_link").style.color="white";
    document.getElementById("projects_link").style.background="black";

    //hide resume
    document.getElementById("resume_pdf").style.display="none";
    document.getElementById("resume_link").style.color="white";
    document.getElementById("resume_link").style.background="black";
}

function resume_clicked() {
    //hide about
    document.getElementById("about_container").style.display="none";
    document.getElementById("quick_about").style.color="white";
    document.getElementById("quick_about").style.background="black";

    //hide tocome
    document.getElementById("tocome").style.display="none";
    document.getElementById("projects_link").style.color="white";
    document.getElementById("projects_link").style.background="black";

    //show resume
    document.getElementById("resume_pdf").style.display="block";
    document.getElementById("resume_link").style.color="#1a53ff";
    document.getElementById("resume_link").style.background="white";
}

function projects_clicked() {
    //hide about
    document.getElementById("about_container").style.display="none";
    document.getElementById("quick_about").style.color="white";
    document.getElementById("quick_about").style.background="black";

    //hide resume
    document.getElementById("resume_pdf").style.display="none";
    document.getElementById("resume_link").style.color="white";
    document.getElementById("resume_link").style.background="black";

    //show projects
    document.getElementById("tocome").style.display="block";
    document.getElementById("projects_link").style.color="#1a53ff";
    document.getElementById("projects_link").style.background="white";
}

