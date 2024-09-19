//get references to the  form and diplay area
var form = document.getElementById("form-section");
var resumeSection = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
//handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact")
        .value;
    var linkedin = document.getElementById("linkedin")
        .value;
    var education = document.getElementById("education")
        .value;
    var institute = document.getElementById("institute")
        .value;
    var skills = document.getElementById("skills").value;
    var jobTitle = document.getElementById("experience")
        .value;
    var companyName = document.getElementById("experience").value;
    var dates = document.getElementById("dates-0").value;
    var summary = document.getElementById("summary")
        .value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        linkedin: linkedin,
        education: education,
        institute: institute,
        skills: skills,
        jobTitle: jobTitle,
        companyName: companyName,
        dates: dates,
        summary: summary,
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    //generate the resume content dynamically:
    var resumeHtmlContent = "\n      <h2><b>Resume</b></h2>\n      <h3>Personal Information</h3>\n      <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n      <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n      <p><b>Contact:</b><span contenteditable=\"true\"> ").concat(contact, "</span></p>\n      <p><b>LinkedIn:</b><span contenteditable=\"true\"> ").concat(linkedin, "</span></p>\n      <h3>Education</h3>\n      <p contenteditable=\"true\"> ").concat(education, "</span></p>\n      <p><b>Institute:</b><span contenteditable=\"true\"> ").concat(institute, "</span></p>\n\n      <h3>Skills</h3>\n      <p contenteditable=\"true\"> ").concat(skills, "</span></p>\n\n      <h3>Experience</h3>\n      <p><b>Job Title:</b><span contenteditable=\"true\"> ").concat(jobTitle, "</span></p>\n      <p><b>Company Name:</b><span contenteditable=\"true\"> ").concat(companyName, "</span></p>\n      <p><b>Duration:</b><span contenteditable=\"true\"> ").concat(dates, "</span></p>\n      <h3>Professional Summary</h3>\n      <p contenteditable=\"true\"> ").concat(summary, "</span></p>\n      ");
    //display generated resume
    if (resumeSection) {
        resumeSection.innerHTML = resumeHtmlContent;
    }
    else {
        console.log("Resume section not found");
    }
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('contact').value = resumeData.contact;
            document.getElementById('linkedin').value = resumeData.linkedin;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('institute').value = resumeData.education;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('experience').value = resumeData.jobTitle;
            document.getElementById('experience').value = resumeData.companyName;
            document.getElementById('dates').value = resumeData.dates;
            document.getElementById('summary').value = resumeData.summary;
        }
    }
});
