// Math Functions

function log(v) {
  return Math.log(v)
}

function log10(v) {
  return java.lang.Math.log10(v)
}

function capitalizeName(name) {
  if (!name) return '';

  // Check if the entire string is either all uppercase or all lowercase
  const isAllUpperCase = name === name.toUpperCase();
  const isAllLowerCase = name === name.toLowerCase();

  // Only proceed with capitalization if the string is all upper or lower case
  if (isAllUpperCase || isAllLowerCase) {
    // Split the name into words
    name = name.toLowerCase();
    const words = name.split(' ');

    // Capitalize each word and handle hyphenated and apostrophized parts
    const capitalizedWords = words.map(word => {
      // Split by hyphen or apostrophe, capitalize each part, and join them back
      const capitalizeParts = (word, delimiter) => {
        return word.split(delimiter).map(part => {
          if (part.length === 0) return part;
          return part[0].toUpperCase() + part.slice(1);
        }).join(delimiter);
      };

      // First handle hyphens
      word = capitalizeParts(word, '-');
      // Then handle apostrophes
      word = capitalizeParts(word, '\'');

      return word;
    });

    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
  }

  // Return the original string if it's not all upper or lower case
  return name;
}

function capitalizeTitle(title) {
  if (!title) return '';

  // Canonical list of acronyms, alphabetically ordered
  const acronymsList = [
    "CA", "CDPH", "ACS", "AbbVie", "PHS", "GSK", "NIMH", "FAA", "US", "MRPI",
    "UCRI", "EPA", "UT", "UC","NIH","NCI", "NIAID", "NIDCR", "NIDDK", "NHLBI",
    "NIMH", "NINDS", "NLM", "NICHD", "NIGMS", "NEI", "NIEHS", "NIAAA", "NIA",
    "NIAMS", "NINR", "NIDCD", "NHGRI", "NIBIB", "NIMHD",
    'CDC', 'CIA', 'DARPA', 'DOD', 'DOE', 'EPA', 'ESA', 'EU', 'FBI',
    'IMF', 'JPL', 'NASA', 'NIH', 'NOAA', 'NSERC', 'NSF', 'OECD',
    'OPEC', 'UN', 'UNESCO', 'UNICEF', 'USA', 'USDA', 'WHO', 'WTO'
  ];

  // Create the acronyms object dynamically for fast lookups
  const acronyms = {};
  acronymsList.forEach(acronym => {
    acronyms[acronym] = true;
  });

  // Check if the entire string is either all uppercase or all lowercase
  const isAllUpperCase = title === title.toUpperCase();
  const isAllLowerCase = title === title.toLowerCase();

  // Only proceed with capitalization if the string is all upper or lower case
  if (isAllUpperCase || isAllLowerCase) {
    // Split the title into words
    title = title.toLowerCase();
    const words = title.split(' ');

    // Capitalize each word and handle hyphenated and apostrophized parts
    const capitalizedWords = words.map(word => {
      const upperCaseWord = word.toUpperCase();
      if (acronyms[upperCaseWord]) return upperCaseWord;
      // Split by hyphen or apostrophe, capitalize each part, and join them back
      const capitalizeParts = (word, delimiter) => {
        return word.split(delimiter).map(part => {
          if (part.length === 0) return part;
          return part[0].toUpperCase() + part.slice(1);
        }).join(delimiter);
      };

      // Just do the word
      word = capitalizeParts(word, ' ');

      return word;
    });

    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
  }

  // Return the original string if it's not all upper or lower case
  return title;
}

// CamelCase a string
// Words to be combined are separated by a space in the string.
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

// https://www.30secondsofcode.org/js/s/levenshtein-distance
function levenshteinDistance (s, t) {
  if (!s.length) return t.length;
  if (!t.length) return s.length;
  var arr = [];
  for (var i = 0; i <= t.length; i++) {
    arr[i] = [i];
    for (var j = 1; j <= s.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
            );
    }
  }
  return arr[t.length][s.length];
}

function distanceFromTitleCase(str) {
  return levenshteinDistance(str,toTitleCase(str))
}

function toCamelCase(str) {
  function ucFirst(word)    {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function lcFirst(word)    {
    return word.toLowerCase();
  }

  function cc(word,index)   {
    return (index == 0) ? lcFirst(word) : ucFirst(word);
  }

  return str.split(' ')
    .map(cc)
    .join('');
}
