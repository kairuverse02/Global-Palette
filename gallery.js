document.addEventListener("DOMContentLoaded", function() {
    const europeContent = document.getElementById("europe-content");
    const nAmericaContent = document.getElementById("nAmerica-content");
    const sAmericaContent = document.getElementById("sAmerica-content");

    function showContent(content) {
      europeContent.classList.add("hidden");
      nAmericarContent.classList.add("hidden");
      sAmericaContent.classList.add("hidden");

      content.classList.remove("hidden");
    }

    document.getElementById("btn-europe").addEventListener("click", function() {
      showContent(europeContent);
    });

    document.getElementById("btn-nAmerica").addEventListener("click", function() {
      showContent(nAmericaContent);
    });

    document.getElementById("btn-sAmerica").addEventListener("click", function() {
      showContent(sAmericaContent);
    });
  });