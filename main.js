//Data to work with 

const inventors = [
    { first: 'Albert',     last: 'Einstein',    year: 1879, passed: 1955 },
    { first: 'Isaac',      last: 'Newton',      year: 1643, passed: 1727 },
    { first: 'Galileo',    last: 'Galilei',     year: 1564, passed: 1642 },
    { first: 'Marie',      last: 'Curie',       year: 1867, passed: 1934 },
    { first: 'Johannes',   last: 'Kepler',      year: 1571, passed: 1630 },
    { first: 'Nicolaus',   last: 'Copernicus',  year: 1473, passed: 1543 },
    { first: 'Max',        last: 'Planck',      year: 1858, passed: 1947 },
    { first: 'Katherine',  last: 'Blodgett',    year: 1898, passed: 1979 },
    { first: 'Ada',        last: 'Lovelace',    year: 1815, passed: 1852 },
    { first: 'Sarah E.',   last: 'Goode',       year: 1855, passed: 1905 },
    { first: 'Lise',       last: 'Meitner',     year: 1878, passed: 1968 },
    { first: 'Hanna',      last: 'Hammarström', year: 1829, passed: 1909 },
  ];


  const people = [
                  'Beck, Glenn', 
                  'Becker, Carl', 
                  'Beckett, Samuel',
                  'Beddoes, Mick',
                  'Beecher, Henry',
                  'Beethoven, Ludwig', 
                  'Begin, Menachem', 
                  'Belloc, Hilaire', 
                  'Bellow, Saul', 
                  'Benchley, Robert', 
                  'Benenson, Peter',
                  'Ben-Gurion, David',
                  'Benjamin, Walter', 
                  'Benn, Tony', 
                  'Bennington, Chester', 
                  'Benson, Leana', 
                  'Bent, Silas', 
                  'Bentsen, Lloyd', 
                  'Berger, Ric', 
                  'Bergman, Ingmar', 
                  'Berio, Luciano', 
                  'Berle, Milton', 
                  'Berlin, Irving', 
                  'Berne, Eric', 
                  'Bernhard, Sandra', 
                  'Berra, Yogi', 
                  'Berry, Halle', 
                  'Berry, Wendell', 
                  'Bethea, Erin',
                  'Bevan, Aneurin', 
                  'Bevel, Ken', 
                  'Biden, Joseph', 
                  'Bierce, Ambrose',
                  'Biko, Steve', 
                  'Billings, Josh', 
                  'Biondo, Frank', 
                  'Birrell, Augustine', 
                  'Black, Elk', 
                  'Blair, Robert',
                  'Blair, Tony', 
                  'Blake, William'
                ];

    const data = [
        'car', 
        'car', 
        'truck', 
        'truck', 
        'bike', 
        'walk', 
        'car', 
        'van', 
        'bike', 
        'walk', 
        'car', 
        'van', 
        'car', 
        'truck'
     ];


        const log = (content) => console.log(content);
 //Instructions

    //  Array.prototype.filter()
    // Creates a new array with all elements that pass the test implemented by the provided function.
    //  1. Filter the list of inventors for those who were born in the 1500's
     log('1. Array.prototype.filter()')
     log('');

    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    console.table(fifteen);

    // Array.prototype.map()
    // Creates a new Array with the results of calling a provided function on every element in the calling array
    // 2. Give an array of the inventors' first andlast names

    log('')
    log('2. Array.prototype.map()')
    log('')

    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.table(fullNames);

    inventors.map(inventor => inventor.lived = (inventor.passed-inventor.year));



    // Array.prototype.sort()
    // Sorts the elements of an array in place and returns the new array
    // 3. Sort the inventors by birthdate, oldest to youngest

    log('')
    log('3. Array.prototype.sort()')
    log('')

    const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

    console.table(ordered)

    // Array.prototype.reduce()
    // Executes a reducer function on each member of the array resulting in a single value 
    // 4.How manyyears did all the inventors live?

    log('')
    log('4. Array.prototype.reduce()')
    log('')

    const totalYears = inventors.reduce((total, inventor) => {
       return total + (inventor.passed - inventor.year);
    }, 0);

    console.log(totalYears);


    // 5. Sort the inventors by years lived

    log('')
    log('5. Sort the inventors by years lived')
    log('')

    const oldest = inventors.sort((a,b) => (a.passed - a.year) < (b.passed - b.year) ? 1 : -1);
    console.table(oldest);

    // 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    log('');
    log('6. Create a list of Boulevards in Paris that contain "de" anywhere in the name');
    log('');
    log('https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris')
    log('');

    log(` const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));

    const boulevardNames = links.map(link => link.textContent);
    const de = boulevardNames.filter(name => name.includes('de'));
    `);
    
    
    //7. Sort exercise
    //Sort the people alphabetically by last name

    log('')
    log('7. Sort the people alphabetically by last name')
    log('')

    const alpha = people.sort((a,b) => {
       const [aFirst,aLast] = a.split(',');
       const [bFirst,bLast] = b.split(',');
       return aFirst > bFirst ? 1 : -1;
    })

    log(alpha);

    // 8. Reduce exercise
    // Sum up the instances of each data

