const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  //arrange
  it('Should create engineer instance', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object")
  });

  it('Should have a name', () => {
    const name = "Ely";
    const e = new Engineer(name, 0, "email@email.com")
    expect(e.name).toBe(name);

  });

  it('should have an id', () => {
    const id = 0;
    const e = new Engineer("Ely", id, "email@email.com")
    expect(e.id).toBe(id);
  });

  it('Should have an email', () => {
    const email = "email@email.com";
    const e = new Engineer("Ely", 0, email)

    expect(e.email).toBe(email);
  });
  it('Should have a gitHub', () => {
    const gitHub = "username";
    const e = new Engineer("Ely", 0, "email@email.com", gitHub)

    expect(gitHub).toBe(gitHub);
  });
});

test("Should be able to get name from method", () => {
  const name = "Jack"
  const e = new Engineer(name, 0, "email@email.com")

    expect(e.getName()).toBe(name)
})

test("Should be able to get id from method", () => {
  const id = 0
  const e = new Engineer("Ely", id, "email@email.com")

    expect(e.getId()).toBe(id)
})

test("Should be able to get email from method", () => {
  email = "email@email.com"

  const e = new Engineer("Ely", 0, email)

    expect(e.getEmail()).toBe(email)
})

test("Should be able to get GitHub from method", () => {
    gitHub = "username"
  
    const e = new Engineer("Ely", 0, email, gitHub)
  
      expect(e.getGithub()).toBe(gitHub)
  })
