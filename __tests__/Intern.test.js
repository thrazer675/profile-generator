const Intern = require("../lib/Intern");

test("set school via constructor argument", () => {
    const testValue = "Troy University";
    const employee = new Intern("Stephen", 1, "stephen@fake.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole", () => {
    const testValue = "Intern";
    const employee = new Intern("Stephen", 1, "stephen@fake.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("getSchool", () => {
    const testValue = "Troy University";
    const employee = new Intern("Stephen", 1, "stephen@fake.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});