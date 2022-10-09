let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let cat = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: cat
  };
  longEar.walk(); 
  alert(longEar.jumps); 