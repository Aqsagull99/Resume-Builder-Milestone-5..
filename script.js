// listing element
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// document.getElementById('resumeForm')?.addEventListener('submit', function(event){
//     event.preventDefault();
//     type assertion
// const nameElement = document.getElementById('name') as HTMLInputElement;
// const emailElement = document.getElementById('email') as HTMLInputElement;
// const phoneElement = document.getElementById('phone') as HTMLInputElement;
// const educationElement = document.getElementById('education') as HTMLInputElement;
// const experienceElement = document.getElementById('experience') as HTMLInputElement;
// const skillsElement = document.getElementById('skills') as HTMLInputElement;
// if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const education = educationElement.value;
//     const experience = experienceElement.value;
//     const skills = skillsElement.value;
// create  the resume output
// const resumeOutput = `
// <h2>Resume</h2>
// <p><strong>Name:</strong> <span id="edit-name" class="editable">  ${name} </span> </p>
// <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span>  </p>
// <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span>  </p>
// <h3>Education</h3>
// <p id="edit-education" class="editable> ${education}</p>
// <h3>Experince</h3>
// <p id="edit-experience" class="editable> ${experience}</p>
// <h3>Skills</h3>
// <p id="edit-skills" class="editable> ${skills}</p>
// `;
// display the resume output
// const resumeOutputElement = document.getElementById('resumeOutput');
// if (resumeOutputElement){
// resumeOutputElement.innerHTML = resumeOutput;
// makeEditable();
// }
// }else{
//     console.log('one or more elements are not available')
// }
//  })
//  function makeEditable(){
//     const editableElements = document.querySelectorAll('.editable');
// editableElements.forEach(element => {
//      element.addEventListener('click', function(){
//        const currentElement = element as HTMLElement;
//        const currentValue = currentElement.textContent || "";
//    replace  content
//     if (currentElement.tagName === "P" || currentElement.tagName === "SPAN"){
// const input=document.createElement("input");
// input.type = "text";
// input.value = currentValue;
// input.classList.add("editing-input");
// input.addEventListener("blur", function(){
// currentElement.textContent = input.value;
// currentElement.style.display = "inline";
// input.remove();
// })
// currentElement.style.display = "none";
// currentElement.parentNode?.insertBefore(input, currentElement);
// input.focus();
// }
// })
// })
//  }
//  2  coreection final with picture
//   document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//    event.preventDefault();
// get refrences  to form  element using their ids
// const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
// Type assertion
// const nameElement = document.getElementById('name') as HTMLInputElement;
// const emailElement = document.getElementById('email') as HTMLInputElement;
// const phoneElement = document.getElementById('phone') as HTMLInputElement;
// const educationElement = document.getElementById('education') as HTMLInputElement;
// const experienceElement = document.getElementById('experience') as HTMLInputElement;
// const skillsElement = document.getElementById('skills') as HTMLInputElement;
//
//  const usernameElement = document.getElementById('username') as HTMLInputElement;
// if (usernameElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const education = educationElement.value;
//     const experience = experienceElement.value;
//     const skills = skillsElement.value;
//     const username = usernameElement.value;
//     const uniquePath = `resumes/${username.replace()/\s+/g , '_' }_cv.html`
//     const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;
// picture element
// const profilePictureFile = profilePictureInput.files?.[0]
// const profilePictureUrl =profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
// Create the resume output
//  const resumeOutput = `
//      <h2>Resume</h2>
//      ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profilePicture">` : ''}
//      <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
//      <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
//      <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
//      <h3>Education</h3>
//      <p id="edit-education" class="editable">${education}</p>
//      <h3>Experience</h3>
//      <p id="edit-experience" class="editable">${experience}</p>
//     <h3>Skills</h3>
//      <p id="edit-skills" class="editable">${skills}</p>
//  `;
// const downloadLink = document.createElement('a');
// downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
// downloadLink.download = uniquePath;
// downloadLink.textContent = `Download Your Resume`;
// Display the resume output
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             makeEditable();
// resumeOutputElement.appendChild(downloadLink)
//             resumeOutputElement.style.display = 'block';
//         }
//     } else {
//         console.log('One or more elements are not available');
//     }
// });
// function makeEditable() {
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click', function() {
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";
//             Replace content
//             if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
//                 const input = document.createElement("input");
//                 input.type = "text";
//                 input.value = currentValue;
//                 input.classList.add("editing-input");
//                 input.addEventListener("blur", function() {
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = "inline";
//                     input.remove();
//                 });
//                 currentElement.style.display = "none";
//                 currentElement.parentNode?.insertBefore(input, currentElement);
//                 input.focus();
//             }
//         });
//     });
// }
//  3 coreection
// Importing UUID for generating unique identifiers (ensure you include this in your project)
// declare var uuid: { v4: () => string };
// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
// Get input values
// const nameElement = document.getElementById('name') as HTMLInputElement;
// const emailElement = document.getElementById('email') as HTMLInputElement;
// const phoneElement = document.getElementById('phone') as HTMLInputElement;
// const educationElement = document.getElementById('education') as HTMLTextAreaElement;
// const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
// const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
// Check if all fields are filled
// if (nameElement.value && emailElement.value && phoneElement.value && educationElement.value && experienceElement.value && skillsElement.value) {
//     const uniqueID = uuid.v4(); // Generate a unique ID for the resume
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const education = educationElement.value;
//     const experience = experienceElement.value;
//     const skills = skillsElement.value.split(',').map(skill => skill.trim()).join(', ');
// Create the resume output
//         const resumeOutput = `
//             <h2>Resume</h2>
//             <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
//             <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
//             <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
//             <h3>Education</h3>
//             <p id="edit-education" class="editable">${education}</p>
//             <h3>Experience</h3>
//             <p id="edit-experience" class="editable">${experience}</p>
//             <h3>Skills</h3>
//             <p id="edit-skills" class="editable">${skills}</p>
//             <p><strong>Shareable Link:</strong> <a href="http://example.com/resume/${uniqueID}" target="_blank">http://example.com/resume/${uniqueID}</a></p>
//         `;
//         // Display the resume output
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             makeEditable(); // Enable editing functionality
//         }
//     } else {
//         console.log('All fields are required');
//     }
// });
// // Function to make resume fields editable
// function makeEditable() {
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click', function() {
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";
//             const input = document.createElement("input");
//             input.type = "text";
//             input.value = currentValue;
//             input.classList.add("editing-input");
//             input.addEventListener("blur", function() {
//                 currentElement.textContent = input.value;
//                 currentElement.style.display = "inline";
//                 input.remove();
//             });
//             currentElement.style.display = "none";
//             currentElement.parentNode?.insertBefore(input, currentElement);
//             input.focus();
//         });
//     });
// }
// with pdf
// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLInputElement;
//     const experienceElement = document.getElementById('experience') as HTMLInputElement;
//     const skillsElement = document.getElementById('skills') as HTMLInputElement;
//     const usernameElement = document.getElementById('username') as HTMLInputElement;
//     if (usernameElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;
//         const username = usernameElement.value;
//         const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;
//         const profilePictureFile = profilePictureInput.files?.[0];
//         const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
//         const resumeOutput = `
//             <h2>Resume</h2>
//             ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profilePicture">` : ''}
//             <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
//             <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
//             <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
//             <h3>Education</h3>
//             <p id="edit-education" class="editable">${education}</p>
//             <h3>Experience</h3>
//             <p id="edit-experience" class="editable">${experience}</p>
//             <h3>Skills</h3>
//             <p id="edit-skills" class="editable">${skills}</p>
//         `;
//         const downloadLink = document.createElement('a');
//         downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
//         downloadLink.download = uniquePath;
//         downloadLink.textContent = `Download Your Resume`;
// Add PDF download button
// const pdfDownloadButton = document.createElement('button');
// pdfDownloadButton.textContent = 'Download PDF';
// pdfDownloadButton.onclick = function() {
// Type assertion for jsPDF
// const jsPDF = (window as any).jspdf; // Using 'any' to bypass type errors
// const doc = new jsPDF();
// Add content to the PDF
//     doc.fromHTML(resumeOutput, 15, 15);
//     doc.save(`${username.replace(/\s+/g, '_')}_cv.pdf`);
// };
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             resumeOutputElement.appendChild(downloadLink);
//             resumeOutputElement.appendChild(pdfDownloadButton); // Add PDF download button
//             resumeOutputElement.style.display = 'block';
//         }
//     } else {
//         console.log('One or more elements are not available');
//     }
// });
// renew
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    if (usernameElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        //******************************************************************* */
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        //******************************************************************* */
        // const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        //******************************************************************* */
        // without styling
        //         const downloadLink = document.createElement("button");
        //         downloadLink.textContent = `copy shareable link `;
        //         downloadLink.addEventListener("click", async () => {
        //  try {
        //  creat a uniqueshareablelink 
        // const uniquePath = `https://yourdomain.com/resumes/${name.replace(/\s+/g, '_')}_cv.html`;
        // // use Clipboard api to copy 
        // await navigator.clipboard.writeText(downloadLink);
        // alert("sharable link copied successfully");
        //  }catch(err){
        //     console.error("Failed to download", err);
        //     alert("failed to download link plase try again");
        //  }
        //         });
        // with styling
        var downloadLink = document.createElement("button");
        downloadLink.textContent = "Copy Shareable Link";
        downloadLink.className = "styled-button"; // Add a class for styling
        downloadLink.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var uniquePath, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        uniquePath = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, '_'), "_cv.html");
                        // Use Clipboard API to copy 
                        return [4 /*yield*/, navigator.clipboard.writeText(uniquePath)];
                    case 1:
                        // Use Clipboard API to copy 
                        _a.sent(); // Copy the uniquePath instead of downloadLink
                        alert("Shareable link copied successfully");
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error("Failed to copy", err_1);
                        alert("Failed to copy link, please try again");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // makeEditable();
            resumeOutputElement.classList.remove("hidden");
            // creat container for buttons
            // const buttonContainer = document.createElement("div");
            // buttonContainer.id = "buttonContainer";
            // resumeOutputElement.appendChild(buttonContainer);
            //  add downlod pdf button
            // const downloadButton = document.createElement("button");
            // downloadButton.textContent = "Download as PDF";
            // downloadButton.addEventListener("click", ( ) =>{
            // window.print(); //open the  print dialog
            // });
            // buttonContainer.appendChild(downloadButton);
            // Pdf button styling
            var buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonContainer";
            resumeOutputElement.appendChild(buttonContainer);
            // Add download PDF button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.className = "styled-button"; // Add a class for styling
            downloadButton.addEventListener("click", function () {
                window.print(); // Open the print dialog
            });
            buttonContainer.appendChild(downloadButton);
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.log('One or more elements are not available');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
