const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "thrazer675";
    const employee = new Engineer("Stephen", 1, "stephen@fake.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Stephen", 1, "stephen@fake.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "thrazer675";
    const employee = new Engineer("Stephen", 1, "stephen@fake.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})