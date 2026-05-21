const gradeMap = {
  'S': 10.0, 'A+': 9.0, 'A': 8.5, 'B+': 8.0, 'B': 7.5,
  'C+': 7.0, 'C': 6.5, 'D': 6.0, 'P': 5.5, 'LP': 4.0, 'F': 0
};

const gradeOptions = ["S", "A+", "A", "B+", "B", "C+", "C", "D", "P", "LP", "F"];

let semesterCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("semesters-container");
  const addSemesterBtn = document.getElementById("add-semester-btn");
  const calculateCgpaBtn = document.getElementById("calculate-cgpa-btn");

  addSemesterBtn.addEventListener("click", () => {
    addSemesterCard(container);
  });

  calculateCgpaBtn.addEventListener("click", () => {
    const allGradeInputs = document.querySelectorAll(".grade-input");
    const allCreditInputs = document.querySelectorAll(".credit-input");

    let totalCredits = 0;
    let totalGradePoints = 0;

    allGradeInputs.forEach((gradeInput, i) => {
      const grade = gradeInput.value;
      const credit = parseFloat(allCreditInputs[i].value);

      if (!isNaN(credit) && grade in gradeMap) {
        totalCredits += credit;
        totalGradePoints += gradeMap[grade] * credit;
      }
    });

    const cgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    document.getElementById("cgpa").textContent = cgpa.toFixed(2);
    document.getElementById("total-credits").textContent = totalCredits.toFixed(2);
  });

  addSemesterCard(container);
});

function addSemesterCard(container) {
  semesterCount++;
  const semIndex = semesterCount;

  const semesterDiv = document.createElement("div");
  semesterDiv.classList.add("semester");
  semesterDiv.setAttribute("data-semester", semIndex);

  semesterDiv.innerHTML = `
    <p class="sem-head">Semester ${semIndex}</p>
    <table>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Subject</th>
          <th>Credit</th>
          <th>Grade</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="subjects-body">
        ${createSubjectRow(semIndex, 1)}
      </tbody>
    </table>
    <div class="center-buttons">
      <button class="add-subject-btn" data-sem="${semIndex}">+ Add Subject</button>
    </div>

    <div class="center-buttons">
      <button class="calculate-btn calculate-sgpa-btn" data-sem="${semIndex}">Calculate SGPA</button>
    </div>

    <div class="results-wrapper">
      <div class="results-box">
        <p><strong>SGPA:</strong> <span id="sgpa-${semIndex}">0.00</span></p>
      </div>
      <div class="results-box">
        <p><strong>Total Credits Earned:</strong> <span id="credits-earned-${semIndex}">0</span></p>
      </div>
    </div>
    <div class="center-buttons">
      <button class="remove-semester-btn" data-sem="${semIndex}">Remove Semester</button>
    </div>
  `;

  container.appendChild(semesterDiv);
  attachSemesterEventListeners(semesterDiv, semIndex);
}

function createSubjectRow(semIndex, subjectIndex) {
  return `
    <tr>
      <td>${subjectIndex}</td>
      <td><input type="text" value="Subject ${subjectIndex}" class="subject-name-input" /></td>
      <td><input type="number" class="credit-input" min="0" /></td>
      <td>
        <select class="grade-input">
          ${gradeOptions.map(g => `<option value="${g}" ${g === "F" ? "selected" : ""}>${g}</option>`).join("")}
        </select>
      </td>
      <td><button class="remove-subject-btn">Remove</button></td>
    </tr>
  `;
}

function attachSemesterEventListeners(semesterDiv, semIndex) {
  const tbody = semesterDiv.querySelector(".subjects-body");
  const addSubjectBtn = semesterDiv.querySelector(".add-subject-btn");
  const removeSemesterBtn = semesterDiv.querySelector(".remove-semester-btn");
  const calculateSgpaBtn = semesterDiv.querySelector(".calculate-sgpa-btn");

  let subjectCount = 1;

  addSubjectBtn.addEventListener("click", () => {
    subjectCount++;
    tbody.insertAdjacentHTML("beforeend", createSubjectRow(semIndex, subjectCount));
  });

  tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-subject-btn")) {
      e.target.closest("tr").remove();
    }
  });

  removeSemesterBtn.addEventListener("click", () => {
    semesterDiv.remove();
  });

  calculateSgpaBtn.addEventListener("click", () => {
    const gradeInputs = semesterDiv.querySelectorAll(".grade-input");
    const creditInputs = semesterDiv.querySelectorAll(".credit-input");

    let totalCredits = 0;
    let earnedCredits = 0;
    let totalGradePoints = 0;

    gradeInputs.forEach((gradeInput, i) => {
      const credit = parseFloat(creditInputs[i].value);
      const grade = gradeInput.value;

      if (!isNaN(credit) && grade in gradeMap) {
        totalCredits += credit;
        totalGradePoints += gradeMap[grade] * credit;
        if (gradeMap[grade] > 0) earnedCredits += credit;
      }
    });

    const sgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    document.getElementById(`sgpa-${semIndex}`).textContent = sgpa.toFixed(2);
    document.getElementById(`credits-earned-${semIndex}`).textContent = earnedCredits.toFixed(2);
  });
}
