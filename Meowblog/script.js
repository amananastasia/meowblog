/* Button */

$('.chip').click(function() {
    $('.chip').removeClass(' chip_active');
    $(this).addClass(' chip_active')
  });

/* Course */

function viewDataAnalyst(){
    document.getElementById("Data_Analyst").style.display = "block";
    document.getElementById("Data_Engineer").style.display = "none";
    document.getElementById("Machine_Learning").style.display = "none";
    document.getElementById("Bussines").style.display = "none";
};

function viewDataEngineer(){
    document.getElementById("Data_Analyst").style.display = "none";
    document.getElementById("Data_Engineer").style.display = "block";
    document.getElementById("Machine_Learning").style.display = "none";
    document.getElementById("Bussines").style.display = "none";
};

function viewMachineLearning(){
    document.getElementById("Data_Analyst").style.display = "none";
    document.getElementById("Data_Engineer").style.display = "none";
    document.getElementById("Machine_Learning").style.display = "block";
    document.getElementById("Bussines").style.display = "none";
};

function viewBussines(){
    document.getElementById("Data_Analyst").style.display = "none";
    document.getElementById("Data_Engineer").style.display = "none";
    document.getElementById("Machine_Learning").style.display = "none";
    document.getElementById("Bussines").style.display = "block";
};

function viewAll(){
    document.getElementById("Data_Analyst").style.display = "block";
    document.getElementById("Data_Engineer").style.display = "block";
    document.getElementById("Machine_Learning").style.display = "block";
    document.getElementById("Bussines").style.display = "block";
};

/* Blog */

function viewAllBlog(){
    document.getElementById("Finance").style.display = "block";
    document.getElementById("Code").style.display = "block";
    document.getElementById("Bussines").style.display = "block";
};

function viewFinanceBlog(){
    document.getElementById("Finance").style.display = "block";
    document.getElementById("Code").style.display = "none";
    document.getElementById("Bussines").style.display = "none";
};

function viewCodeBlog(){
    document.getElementById("Finance").style.display = "none";
    document.getElementById("Code").style.display = "block";
    document.getElementById("Bussines").style.display = "none";
};

function viewBussinesBlog(){
    document.getElementById("Finance").style.display = "none";
    document.getElementById("Code").style.display = "none";
    document.getElementById("Bussines").style.display = "block";
};