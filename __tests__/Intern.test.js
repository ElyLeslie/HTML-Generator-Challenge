const Intern = require('../lib/Intern');

describe('Intern', () => {
  //arrange
  it('Should create Intern instance', () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object")
  });

  it('Should have a name', () => {
    const name = "Ely";
    const e = new Intern(name, 0, "email@email.com")
    expect(e.name).toBe(name);

  });

  it('should have an id', () => {
    const id = 0;
    const e = new Intern("Ely", id, "email@email.com")
    expect(e.id).toBe(id);
  });

  it('Should have an email', () => {
    const email = "email@email.com";
    const e = new Intern("Ely", 0, email)

    expect(e.email).toBe(email);
  });
  it('Should have a school', () => {
    const school = "SCSU";
    const e = new Intern("Ely", 0, "email@email.com", school)

    expect(e.school).toBe(school);
  });
});

test("Should be able to get name from method", () => {
  const name = "Jack"
  const e = new Intern(name, 0, "email@email.com")

    expect(e.getName()).toBe(name)
})

test("Should be able to get id from method", () => {
  const id = 0
  const e = new Intern("Ely", id, "email@email.com")

    expect(e.getId()).toBe(id)
})

test("Should be able to get email from method", () => {
  email = "email@email.com"

  const e = new Intern("Ely", 0, email)
  

    expect(e.getEmail()).toBe(email)
})

test("Should be able to get school from method", () => {
    school = "SCSU"
  
    const e = new Intern("Ely", 0, email, school)
  
      expect(e.getSchool()).toBe(school)
  })
