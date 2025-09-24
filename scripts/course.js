const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: false,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

const allcourses = document.querySelector("#all");
const csecourses = document.querySelector("#cse");
const wddcourses = document.querySelector("#wdd");
const coursesTag = document.querySelector("#courses");
const creditsTag = document.querySelector("#credits");

displayCourses(courses);
displayCredits(courses);

function displayCredits(courses) {
  let credits = courses.map((course) => {
    return course.credits; // used ai for little help here
  });

  totalCredits = credits.reduce((acc, current) => acc + current);
  creditsTag.innerHTML = totalCredits;
}

function displayCourses(coursesList) {
  coursesTag.innerHTML = ""; // found on stack overflow
  displayCredits(coursesList);
  coursesList.forEach((course) => {
    const p = document.createElement("p");
    p.setAttribute("class", "course");
    p.setAttribute("id", `${course.subject}${course.number}`);

    // if completed add a styling to courses
    if (course.completed == true) {
      p.classList.add("completed");
    }

    p.innerHTML = `${course.subject}${course.number}`;

    coursesTag.appendChild(p);

    p.addEventListener("click", () => {
      courseDetails.showModal();
      displayCourse(course);
    });
  });
}

csecourses.addEventListener("click", () => {
  const cseCourses = courses.filter((course) => course.subject == "CSE");
  displayCourses(cseCourses);
});

wddcourses.addEventListener("click", () => {
  const wddCourses = courses.filter((course) => course.subject == "WDD");
  displayCourses(wddCourses);
});

allcourses.addEventListener("click", () => {
  displayCourses(courses);
});

// dialog details
const courseDetails = document.querySelector("#course-details");
const closeModal = document.querySelector("#close-modal");
const courseList = document.querySelector(".course");

courseDetails.addEventListener("click", (event) => {
  if (event.target === courseDetails) {
    courseDetails.close();
  }
});

function displayCourse(course) {
  courseDetails.innerHTML = "";
  const h2 = document.createElement("h2");
  const closeBtn = document.createElement("button");
  const title = document.createElement("p");
  const credits = document.createElement("p");
  const description = document.createElement("p");
  const certificate = document.createElement("p");
  const techStack = document.createElement("p");

  h2.innerHTML = `${course.subject} ${course.number}`;
  title.innerHTML = `${course.title} `;
  credits.innerHTML = `Course Credits: ${course.credits}`;
  description.innerHTML = `${course.description}`;
  certificate.innerHTML = `Certificate: ${course.certificate}`;
  techStack.innerHTML = `Technology Stack: ${course.technology}`;
  closeBtn.classList.add("close-modal");
  closeBtn.setAttribute("id", "close-modal");

  courseDetails.appendChild(h2);
  courseDetails.appendChild(closeBtn);
  courseDetails.appendChild(title);
  courseDetails.appendChild(credits);
  courseDetails.appendChild(description);
  courseDetails.appendChild(certificate);
  courseDetails.appendChild(techStack);

  closeBtn.addEventListener("click", () => {
    courseDetails.close();
  });
}
