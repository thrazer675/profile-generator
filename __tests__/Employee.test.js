const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Stephen"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test('Set ID', () => {
    const testId = 320570;
    const employee = new Employee("Stephen", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => {
    const testEmail = "stephen@fake.com"
    const employee = new Employee("Stephen", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('get name from getName', () => {
    const testName = "Stephen"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "320570"
    const employee = new Employee("Stephen", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "stephen@fake.com"
    const employee = new Employee("Stephen", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Stephen", 1, "stephen@fake.com");
    expect(employee.getRole()).toBe(testRole);
});