const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
   return tutorials.map(tutorial =>{
     return tutorial.split(' ')
     .map(word => {
      if (word === word.toUpperCase()) {
        return word;
      }
       return word[0].toUpperCase() + word.slice(1).toLowerCase();
       }).join(' '); 
      });
     }
     const titleCasedTutorials =titleCased();
     console.log(titleCasedTutorials);

     function titleCased() { 
      return tutorials.map(tutorial => { 
        const words = tutorial.split(' '); 
      const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); 
      return capitalizedWords.join(' '); 
    }); 
  }