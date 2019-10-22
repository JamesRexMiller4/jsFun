const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.reduce((acc, kitten) => {
      if (kitten.color === 'orange') {
        acc.push(kitten.name)
      }
      return acc
    }, [])
      
    return result;

    // Annotation:
    // Since we are returning an array of only the kitten's names whose color is orange, we
    // will want to use the reduce method. By adding a conditional that pushes only the kittens whose
    // color property is orange into the array we are filtering our results while also reducing to only
    // the names of those kittens.
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a,b) => b.age - a.age);
    return result;

    // Annotation:
    // We are asked to sort the array based on age, and so we will use the sort method.
    // The results are in ascending order so we amend our sort method by subtracting a's
    // age from from b's.
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kittens => {
      return {name: kittens.name, age: kittens.age + 2, color: kittens.color};
    });
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, curVal) => {
      curVal.members.forEach(teacher => {
        if (acc[teacher]){
          acc[teacher].push(curVal.club)
        } else acc[teacher] = [curVal.club]
      })
      return acc
    }, {});
    return result;

    // Annotation:
    // Since we are returning an object we will want to use reduce. 
    // In order to create the property names as each teacher, I use forEach, 
    // to access the array of each current value of members, and then add conditional
    // logic so that as we progress through the reduce method we can add to our already 
    // existing prooperty name arrays and avoid any duplicates
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(element => {
      return {mod: element.mod, studentsPerInstructor: (element.students / element.instructors)}
    });
    return result;
    // Annotation:
    // Since the result we are returning is in the same format as the starting array
    // (an array of objects), we will want to use the map method as we can map a new array
    // of objects that will still have our property of mod for each object index of the array,
    // but also gives us the ability to write a new property of studentsPerInstructors based off the 
    // value of the previous arrays properties of students and instructors. 
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(element => {
      return { flavor: element.cakeFlavor, inStock: element.inStock};
    });
    return result;

    // Annotation:
    // Since the returned result is in the same format (an array of objects) as 
    // our dataset, the map method should be the best to use in this scenario. We return 
    // an object that has a property name of flavor and set its value to the element.cakeFlavor, 
    // and then add the inStock property and set its value to the element.inStock
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(element => element.inStock > 0);
    return result;

    // Annotation:
    // Since we are returning a shortened array of objects, we will want to use filter here.
    // We will filter our results based on whose values of inStock are greater than 0.
    // Write your annotation here as a comment
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, curVal) => acc + curVal.inStock, 0);
    return result;

    // Annotation:
    // Since we are returning a sum amount of all the objects in the dataset reduce will be
    // the most effective method. I assign an accumulator to the value of 0 and then add its value
    // with each elements.inStock value.
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, curVal) => {
      curVal.toppings.forEach(element => {
        if (!acc.includes(element)) {
          acc.push(element);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // Since we are returning an array but working with a dataset that is an array of objects, we could use
    // map or reduce. I went with reduce here since I am also wanting to filter out my results of any duplicates.
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((acc, curVal) => {
      curVal.toppings.forEach(element => {
        if (acc[element]) {
          acc[element] += 1;
        } else acc[element] = 1;
      })
      return acc;
    }, {});
    return result;

    // Annotation:
    // Since I am returning an object but my dataset is an array of objects I am going to use
    // reduce since I can change the datatype of my return result into the desired datatype. As I 
    // access each object in my cakes array I am then going to run a forEach method on the array of 
    // toppings for each object, set each topping as a property name for my accumulator object, and 
    // then add conditional logic that says if this property name already exists then increase its value
    // by one, otherwise create this property and set its value to one.
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(element => element.program === 'FE');
    return result;

    // Annotation:
    // Since we are returning the same datatype (an array of objects) as we are initially working 
    // with, but returning a filtered version that has less elements than the original, the best method
    // to use would be filter. By only returning elements that have their .program values equal to 'FE'
    // I am able to filter my results to only return the objects that are front end classrooms.
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, curVal) => {
      let feCapacity = 0;
      let beCapacity = 0;
      classrooms.forEach(element => {
        if (element.program === 'FE') {
          return feCapacity += element.capacity;
        } else if (element.program === 'BE') {
          return beCapacity += element.capacity;
        }
      });
      acc.feCapacity = feCapacity;
      acc.beCapacity = beCapacity;

      return acc;

    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // The prompt asks us to return the original array but sorted based on each objects capacity values, 
    // so the sort method is the method to use to accomplish that. We will give it an a and b parameter, 
    // each of which represents an index of the classrooms array. We then add .capacity to access each objects
    // capacity values and then sort then based on whether the a or the b value is larger.
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, curVal) => acc + curVal.beers.length, 0);
    return result;

    // Annotation:
    // Since we are doing some math and returning a sum of all the elements of the DataTransferItem, reduce is
    // the best method for the job. I set the accumulator value to 0 and return  it plus the curVal.beers.length for
    // each element.
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery => {
      return {name: brewery.name, beerCount: brewery.beers.length}
    });
    return result;

    // Annotation:
    // Since we are returning the same datatype that we are working with, and the number of indices will be the same
    // we will want to use the map method. So as we go through each brewery object we return an object with a property of name
    // set to the value of the brewery.name and another property of beerCount set to the value of the brewery.beers.length
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, curVal) => {
      let max = 0;
      let beerObj = undefined;
      curVal.beers.forEach(beer => {
        if (beer.abv > max) {
          max = beer.abv
          beerObj = beer;
        }
      })
      return acc = beerObj
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(teacher => {
      let mapped = cohorts.map(element => element.studentCount);
      return {name: teacher.name, studentCount: mapped[teacher.module - 1]};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, curVal) => {
      let teachersNum = 0;
      instructors.forEach(teacher => {
        if (teacher.module === curVal.module) {
          teachersNum += 1;
        }
      });
      acc[`cohort${curVal.cohort}`] = (curVal.studentCount / teachersNum);
      return acc;
    }, {});
    return result;

    // Annotation:
    // Since we are returning a singular object we want to start off using reduce.
    // In order to create the key property names we interpolate the value of 
    // curVal.cohort onto the cohort string. We then do a for each for the instructors
    // dataset and for each match of curVal.module with the entirety of the instructors 
    // dataset we can accumulate that number and assign it to a variable that we divide
    // the curVal.studentCount by to get our students per instructors
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, currentTeacher) => {
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(topic => {
          if (currentTeacher.teaches.includes(topic)) {
            if (acc[currentTeacher.name]) {
              if(!acc[currentTeacher.name].includes(cohort.module)) {
                acc[currentTeacher.name].push(cohort.module);
              }
            } else acc[currentTeacher.name] = [cohort.module];
          }
        });   
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Since we are returning one large object we want to start off with reduce. We then use a nested
    // forEach inside a forEach so that as we cycle through the cohorts array, we access the array of 
    // curriculum for each cohort, and then for each topic check to see if it is included in our 
    // currentTeacher.teaches array. We have add conditional logic where we first check to see if the 
    // property name exists, if it does than we want to check if it does not already include the cohort.module,
    // if it doesnt than push the value in, and if it does already exist in the array than do nothing. Finally
    // if the property has not already been created, create it and assign it the value of an array for the
    // cohort.module.
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, curVal) => {
      instructors.forEach(teacher => {
        curVal.curriculum.forEach(topic => {
          if (teacher.teaches.includes(topic)) {
            if(acc[topic]){
              if(!acc[topic].includes(teacher.name)){
                acc[topic].push(teacher.name);
              }
            } else acc[topic] = [teacher.name];
          }
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // We want to return one large object so we will use reduce to start. We start on the cohorts
    // dataset so that as we cycle through each curriculum topic we compare it to see if it is included
    // in the instructors.teaches array for each instructors. We add conditional logic that says if this
    // topic is inlcuded in the instructors.teaches array than check and see if this property exists, if it does 
    // than check to see that this instructors.name is not already in this array, if it is not than push the name, 
    // otherwise do nothing. If the property doesn't exist in the first place than create it and assign it the value
    // of the teacher.name
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = Object.values(bosses).map(boss => {
      let loyaltyNum = 0;
      sidekicks.forEach(sidekick => {
        if (sidekick.boss === boss.name) {
          loyaltyNum += sidekick.loyaltyToBoss;
        }
      });
      return {bossName: boss.name, sidekickLoyalty: loyaltyNum};
    });
    return result;

    // Annotation:
    // In order to create a datatype of the correct size most easily, I start off with Object.keys of the bosses,
    // then map that array and return an object for each index of the Object.keys array. Then I run a forEach loop
    // inside of the that to find all the sidekicks that belong to that boss and accumulate their loyalty scores and 
    // store that in a variable. Finally, return the object with the property keys and values.
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = stars.filter(star => {
      let consties = Object.keys(constellations);
      let starConst;
      consties.forEach(constie => {
        if (constellations[constie].stars.includes(star.name)) {
          starConst = star;
        }
      });
      return starConst;
    });
    return result;

    // Annotation:
    // I chose the filter method to solve this one since we are returning a shortened version of the 
    // stars Array, limited to only those star objects that are present in any of the constellations. Next
    // I create another array of the constellations object's keys, so that I can iterate over the constellation
    // objects within. Using a forEach I am able to pass each key index and access the stars property which is an array,
    // and check to see if it includes the name of the star object my filter method is current on.
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, curVal) => {
      if (!acc[curVal.color]) {
        acc[curVal.color] = [curVal]
      } else acc[curVal.color].push(curVal);
      return acc;
    }, {});
    return result;

    // Annotation:
    // Not working with the other dataset for this one, and since I am returning one large object I will 
    // use reduce. I first check to see if the property name has already been created, if not then create the property
    // key name and assign it the value of the curVal. If it does already exist than push the curVal into the array.
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]


    const result = stars.sort((a, b) => a.visualMagnitude - b.visualMagnitude).reduce((acc, curVal) => {
      if (curVal.constellation === '') {
      } else acc.push(curVal.constellation);
      return acc;
    }, []);
    return result;

    // Annotation:
    // Use reduce to be able to return an array of all the constellation names in the star array, but
    // with the added capacity of being able to filter the results to not include the empty string. To get the
    // constellations in the correct order based on their luminosity I run a sort method on the array before I begin.
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((acc, curVal) => {
      curVal.weapons.forEach(weapon => acc += weapons[weapon].damage);
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.reduce((acc, character) => {
      let damagesum = 0;
      let rangesum = 0;
      let boob = character.name;
      let obj = character.weapons.reduce((acc, weapon) => {
        damagesum += weapons[weapon].damage;
        rangesum += weapons[weapon].range;
        acc[boob] = {damage: damagesum, range: rangesum};
        return acc;
      }, {});
      acc.push(obj);
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((acc, curVal) => {
      let dinoArr = [];
      curVal.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome){
          dinoArr.push(dino);
        }
      });
      acc[curVal.title] = (dinoArr.length);
      return acc;
    },{});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      { 
        'Steven Spielberg': 
          { 
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37 
          },
        'Joe Johnston': 
          { 
            'Jurassic Park III': 44 
          },
        'Colin Trevorrow': 
          { 
            'Jurassic World': 56
           },
        'J. A. Bayona': 
          { 
            'Jurassic World: Fallen Kingdom': 59 
          } 
      }
    */

    const result = movies.reduce((acc, curVal) => {
      let age = curVal.cast.reduce((acc, cast) => {
        return acc += (curVal.yearReleased - humans[cast].yearBorn);
      }, 0) / curVal.cast.length;
      if (!acc[curVal.director]) {
        let obj = {};
        obj[curVal.title] = Math.floor(age);
        acc[curVal.director] = obj;
      } else {
        let obj = {};
        obj[curVal.title] = Math.floor(age);
        Object.assign(acc[curVal.director], obj);
      }
      return acc;
    }, {});

    return result;


    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result =  Object.keys(humans).reduce((acc, actor) => {
      let mar = movies.flatMap(poop => poop.cast);
      if (!mar.includes(actor)) {
        let obj = {name: actor, nationality: humans[actor].nationality, imdbStarMeterRating: humans[actor].imdbStarMeterRating};
        acc.push(obj);
      }
      return acc;
    }, []).sort((a, b) => {
      if ( a.nationality < b.nationality ){
        return -1;
      }
      if ( a.natinoality > b.nationality ){
        return 1;
      }
      return 0;
    });
    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = Object.keys(humans).reduce((acc, curVal) => {
      let ageArr = [];
      movies.forEach(movie => {
        if (movie.cast.includes(curVal)) {
          age = movie.yearReleased - humans[curVal].yearBorn;
          ageArr.push(age);
        }
      });
      if (ageArr.length > 0) {
        acc.push({name: curVal, ages: ageArr});
      }
      return acc;
    }, []);

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  dinosaurPrompts
};