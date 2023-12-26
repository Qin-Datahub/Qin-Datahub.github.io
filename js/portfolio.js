// my expertise - change the display when clicking the left and right arrow
document.addEventListener('DOMContentLoaded', function() {

  var dataVisualization = document.getElementById("data-visualization");
  console.log(dataVisualization);

  var predictiveAnalysis = document.getElementById("predictive-analysis");
  console.log(predictiveAnalysis);

  var mlops = document.getElementById("mlops");
  console.log(mlops);

  // Add event listeners to the buttons
  dataVisualization.addEventListener("click", function() {
    // Remove "active" class from other buttons
    predictiveAnalysis.classList.remove("active");
    mlops.classList.remove("active");

    // Add "active" class to the clicked button
    dataVisualization.classList.add("active");

    // Add "non-active" class to other buttons
    predictiveAnalysis.classList.add("non-active");
    mlops.classList.add("non-active");

    var visualizationsBlock = document.getElementById("section1");
    visualizationsBlock.style.display = "flex";

    var predictiveAnalysisBlock = document.getElementById("section2");
    predictiveAnalysisBlock.style.display = "none";

    var mlopsBlock = document.getElementById("section3");
    mlopsBlock.style.display = "none";

  });

  predictiveAnalysis.addEventListener("click", function() {
    // Remove "active" class from other buttons
    dataVisualization.classList.remove("active");
    mlops.classList.remove("active");
  
    // Add "active" class to the clicked button
    predictiveAnalysis.classList.add("active");
  
    // Add "non-active" class to other buttons
    dataVisualization.classList.add("non-active");
    mlops.classList.add("non-active");

    var visualizationsBlock = document.getElementById("section1");
    visualizationsBlock.style.display = "none";

    var predictiveAnalysisBlock = document.getElementById("section2");
    predictiveAnalysisBlock.style.display = "block";

    var mlopsBlock = document.getElementById("section3");
    mlopsBlock.style.display = "none";
  });

  
  mlops.addEventListener("click", function() {
    // Remove "active" class from other buttons
    dataVisualization.classList.remove("active");
    predictiveAnalysis.classList.remove("active");
  
    // Add "active" class to the clicked button
    mlops.classList.add("active");
  
    // Add "non-active" class to other buttons
    dataVisualization.classList.add("non-active");
    predictiveAnalysis.classList.add("non-active");

    var visualizationsBlock = document.getElementById("section1");
    visualizationsBlock.style.display = "none";

    var predictiveAnalysisBlock = document.getElementById("section2");
    predictiveAnalysisBlock.style.display = "none";

    var mlopsBlock = document.getElementById("section3");
    mlopsBlock.style.display = "block";
  });
});
