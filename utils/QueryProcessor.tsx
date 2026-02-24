export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "xinyuew4";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "xinyuew4"
  }
  
  if (query.includes("Which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      return Math.max(...numbers).toString();
    }
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/i);
  if (addMatch) {
    return (parseInt(addMatch[1]) + parseInt(addMatch[2])).toString();
  }


  return "";
}
