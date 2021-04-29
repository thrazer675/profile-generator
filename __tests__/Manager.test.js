const Manager = require('../lib/Manager');

test("set office number", () => {
    const testValue = "1";
    const employee = new Manager("Drew", 1, "drew@fake.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
})

test("getRole", () => {
    const testValue = "Manager";
    const employee = new Manager("Drew", 1, "drew@fake.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})