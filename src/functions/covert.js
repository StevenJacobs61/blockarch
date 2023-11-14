export function convertCamelToCapitalized(input) {
    const words = input.split(/(?=[A-Z])/);
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let isAcronym = capitalizedWords.every(word => word.length <= 1);
    
    const result = isAcronym ? capitalizedWords.join('') : capitalizedWords.join(' ');
    return result;
  }