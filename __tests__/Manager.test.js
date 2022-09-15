const Manager = require('../lib/Manager');

describe('Manager', () => {
  //arrange
  it('Should create Manager instance', () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object")
  });

  it('Should have a name', () => {
    const name = "Ely";
    const e = new Manager(name, 0, "email@email.com")
    expect(e.name).toBe(name);

  });

  it('should have an id', () => {
    const id = 0;
    const e = new Manager("Ely", id, "email@email.com")
    expect(e.id).toBe(id);
  });

  it('Should have an email', () => {
    const email = "email@email.com";
    const e = new Manager("Ely", 0, email)

    expect(e.email).toBe(email);
  });
  it('Should have an office number', () => {
    const officeNumber = 0;
    const e = new Manager("Ely", 0, "email@email.com", officeNumber)

    expect(e.officeNumber).toBe(officeNumber);
  });
});

test("Should be able to get name from method", () => {
  const name = "Jack"
  const e = new Manager(name, 0, "email@email.com")

    expect(e.getName()).toBe(name)
})

test("Should be able to get id from method", () => {
  const id = 0
  const e = new Manager("Ely", id, "email@email.com")

    expect(e.getId()).toBe(id)
})

test("Should be able to get email from method", () => {
  email = "email@email.com"

  const e = new Manager("Ely", 0, email)
  

    expect(e.getEmail()).toBe(email)
})

test("Should be able to get office number from method", () => {
    officeNumber = 3
  
    const e = new Manager("Ely", 0, "email", officeNumber)
    
  
      expect(e.getOfficeNumber()).toBe(officeNumber)
  })
