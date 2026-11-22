export const site = {
  name: "Learning Hub",
  tagline: "Math and physics lessons, videos and worksheets",
  outschoolUrl: "https://outschool.com/teachers/Marcelo",
};

// Builds a list of lessons. Add each YouTube video ID and worksheet link later.
const makeLessons = (n) =>
  Array.from({ length: n }, (_, i) => ({
    title: `Lesson ${i + 1}`,
    videoId: "",
    worksheetUrl: "",
  }));

export const topics = [
  {
    id: "integers",
    subject: "Math",
    title: "Integers, Rational Numbers & Powers",
    description:
      "A seven lesson course that builds confident number skills: integers, rational numbers and exponents, with clear explanations and guided practice that prepare students for algebra.",
    goals:
      "Work with integers, apply the order of operations, convert and calculate with fractions and decimals, and use the exponent rules.",
    lessons: makeLessons(7),
  },
  {
    id: "inequalities",
    subject: "Math",
    title: "Solving and Graphing Inequalities",
    description:
      "A three lesson course on solving and graphing inequalities, from simple to compound, with step by step explanations and guided practice.",
    goals:
      "Solve and graph one step, multi step and compound inequalities, read solutions on a number line, and use inequalities in word problems.",
    lessons: makeLessons(3),
  },
  {
    id: "factoring",
    subject: "Math",
    title: "Factoring Quadratic Equations",
    description:
      "A five lesson course on factoring quadratic polynomials, with guided worksheets and more than 100 solved examples and practice problems.",
    goals:
      "Factor out the greatest common factor, factor simple and complex trinomials, and recognize special patterns such as the difference of squares.",
        lessons: [
      { title: "Lesson 1: Introduction to Factoring and the Greatest Common Factor", videoId: "", worksheetUrl: "" },
      { title: "Lesson 2: Factoring Simple Trinomials (a = 1)", videoId: "", worksheetUrl: "" },
      { title: "Lesson 3: Factoring Complex Trinomials (a ≠ 1)", videoId: "", worksheetUrl: "" },
      { title: "Lesson 4: Difference of Squares and Perfect Square Trinomials", videoId: "", worksheetUrl: "" },
      { title: "Lesson 5: Factoring Practice with Mixed Problems", videoId: "", worksheetUrl: "" },
    ],
  },
  {
    id: "polynomials",
    subject: "Math",
    title: "Polynomials and Solving Linear Equations",
    description: "This course is still being prepared. Details coming soon.",
    goals: "",
    lessons: makeLessons(7),
  },
  {
    id: "exponents",
    subject: "Math",
    title: "Exponents and Radicals Foundations",
    description: "This course is still being prepared. Details coming soon.",
    goals: "",
    lessons: makeLessons(2),
  },
  {
    id: "kinematics",
    subject: "Physics",
    title: "Kinematics for Motion in 1D & 2D",
    description:
      "A three lesson course on how things move in one and two dimensions: displacement, velocity, acceleration and motion graphs, with guided practice problems.",
    goals:
      "Describe and analyze motion, calculate speed, velocity and acceleration, solve motion problems with algebra, and read motion graphs.",
     lessons: [
      { title: "Lesson 1: Describing Motion, Concepts and Motion Graphs", videoId: "", worksheetUrl: "" },
      { title: "Lesson 2: 1D Motion, Kinematic Equations and Constant Acceleration", videoId: "", worksheetUrl: "" },
      { title: "Lesson 3: 2D Motion, Projectile Motion", videoId: "", worksheetUrl: "" },
    ],
  },
  {
    id: "artemis",
    subject: "Physics",
    title: "The Physics of Space Exploration using Artemis Missions",
    description:
      "A one lesson course that uses real data from the NASA Artemis II mission to apply physics formulas to escape velocity, orbital speed, gravity, energy and travel time.",
    goals:
      "Calculate escape velocity and orbital speed, find gravitational acceleration on different planets, work out energy values from data, and use formulas with the correct units.",
        lessons: [
      { title: "The Physics Behind Space Exploration", videoId: "", worksheetUrl: "" },
    ],
  },
];