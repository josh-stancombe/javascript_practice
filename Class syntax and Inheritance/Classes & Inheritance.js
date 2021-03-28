class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  };
  
  get name(){
   return this._name 
  }; 
  get level(){
   return this._level 
  }; 
  get numberOfStudents(){
   return this._numberOfStudents 
  };

  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents === 'Number') {
      this._numberOfStudents = newNumberOfStudents;
    }
    else {
      console.log('Invalid input numberOfStudents must be set to a Number.');
    }
  };

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  };

  pickSubstitueTeacher(substituteTeachers){
    const val = Math.floor(Math.random()  substituteTeachers.length);
    return substituteTeachers[val];
  };
};


class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'Primary', numberOfStudents); 
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
};

class Middle extends School {
  constructor(){
    
  }
};

class High extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'High', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
};

//Primary
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();
lorraineHansbury.pickSubstitueTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli');

//High 
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);