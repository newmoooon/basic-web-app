
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

  // if (query.includes("multiplied by")) {
  //   const numbers = query.match(/\d+/g)?.map(Number);
  //   if (numbers && numbers.length >= 2) {
  //     return (numbers[0] * numbers[1]).toString();
  //   }
  // }
  if (query.includes("Which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const results = numbers.filter(numStr => {
        const n = parseInt(numStr);
        const isSquare = Math.round(Math.sqrt(n)) ** 2 === n;
        const isCube = Math.round(Math.cbrt(n)) ** 3 === n;
        return isSquare && isCube;
      });
      return results.join(", "); 
    }
  }
  if (query.includes("Which of the following numbers are primes")) {
    const numbers = query.match(/\d+/g)?.map(Number);

    if (numbers) {
      const primes = numbers.filter(n => {
        if (n < 2) return false;
        for (let i = 2; i < n; i++) {
          if (n % i === 0) return false;
        }
        return true;
      });
      return primes.join(", ");
    }
  }

  // if (query.includes("minus")) {
  //   const numbers = query.match(/\d+/g)?.map(Number);
  //   if (numbers && numbers.length >= 2) {
  //     return (numbers[0] - numbers[1]).toString();
  //   }
  // }

  // if (query.includes("divided by")) {
  //   const numbers = query.match(/\d+/g)?.map(Number);
  //   if (numbers && numbers.length >= 2) {
  //     return (numbers[0] / numbers[1]).toString();
  //   }
  // }

  // if (query.includes("plus")) {
  //   const numbers = query.match(/\d+/g)?.map(Number);
  //   if (numbers) {
  //     return numbers.reduce((sum, n) => sum + n, 0).toString();
  //   }
  // }
  if (query.includes("multiplied by")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length >= 2) {
      return (numbers[0] * numbers[1]).toString();
    }
  }

  if (query.includes("divided by")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length >= 2) {
      return (numbers[0] / numbers[1]).toString();
    }
  }

  if (query.includes("minus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length >= 2) {
      return (numbers[0] - numbers[1]).toString();
    }
  }

  if (query.includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      return numbers.reduce((sum, n) => sum + n, 0).toString();
    }
  }

  if (query.includes("to the power of")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      // @ts-ignore - this forces TypeScript to ignore the BigInt error
      return (BigInt(numbers[0]) ** BigInt(numbers[1])).toString();
    }
  }



  return "";
}
