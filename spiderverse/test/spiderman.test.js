const spiderman = require('./../app/sipiderman');

describe("Unit test for spiderman class", () => {
    test('1)Create an spiderman object', () => {
      //Escribimos el código que queremos implementar
      //Objetivo : instanciar un objeto Spiderman con la siguiente info
      const spiderman = require('./../app/sipiderman')
      const andrewGarfield = new spiderman("Spiderman sony", 31, "Andrew Garfield",2,"Sony")

      //Validamos que el código funcione de la forma adecuada 

      expect(andrewGarfield.name).toBe("Spiderman sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
    });
    test ('2) Function that returns name and studio of the spiderman', () => 
    {
        const spiderman = require('./../app/sipiderman')
        const tomHolland = new spiderman ("Spiderman Marvel", 22, "Tom Holland",3,"Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
        
    });
  })