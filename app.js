// Simple app used to demonstrate a CI/CD pipeline
function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}! Welcome to the DevOps CI/CD demo.`;
}

module.exports = { add, greet };

// Run directly: node app.js
if (require.main === module) {
  console.log(greet("DecodeLabs"));
}
