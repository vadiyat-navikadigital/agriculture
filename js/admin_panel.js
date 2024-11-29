// JavaScript to toggle tables
    document.getElementById("jobPostBtn").addEventListener("click", function () {
      document.getElementById("jobPostTable").style.display = "block";
      document.getElementById("membersTable").style.display = "none";
      this.classList.add("active");
      document.getElementById("membersBtn").classList.remove("active");
    });

    document.getElementById("membersBtn").addEventListener("click", function () {
      document.getElementById("membersTable").style.display = "block";
      document.getElementById("jobPostTable").style.display = "none";
      this.classList.add("active");
      document.getElementById("jobPostBtn").classList.remove("active");
    });