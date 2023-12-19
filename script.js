const input = document.querySelector("input");
const p = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  p.innerText = `Result: ${convert(input.value)}`;
});

const code = 4969;

function convert(num) {
  if (num.codePointAt(0) === 4987 && num.length == 1) {
    return 100;
  }
  if (num.length > 1 || num.codePointAt(0) > 4978) {
    if (num.length > 2 || num.codePointAt(0) > 4986) {
      if(num.length > 2 && num.length < 4){
        return geezThreeConverter(num);
      }else if(num.length > 3 && num.length < 5){
        return geezFourConverter(num);
      }else if(num.length > 4 && num.length < 6){
        return geezFiveConverter(num);
      }
    } else {
      return geezTwoConverter(num);
    }
  } else {
    return num.codePointAt(0) - code + 1;
  }
}

function geezTwoConverter(num) {
  const chars = [];
  for (let i = 0; i < num.length; i++) {
    chars.push(num.codePointAt(i));
  }

  if (
    chars[0] === 4979 ||
    chars[0] === 4980 ||
    chars[0] === 4981 ||
    chars[0] === 4982 ||
    chars[0] === 4983 ||
    chars[0] === 4984 ||
    chars[0] === 4985 ||
    chars[0] === 4986
  ) {
    if (chars[0] === 4980) {
      if (chars.length > 1) {
        return chars[0] + 19 - code + chars[1] - code + 1;
      } else {
        return chars[0] + 19 - code;
      }
    } else if (chars[0] === 4981) {
      if (chars.length > 1) {
        return chars[0] + 28 - code + chars[1] - code + 1;
      } else {
        return chars[0] + 28 - code;
      }
    } else if (chars[0] === 4982) {
      if (chars.length > 1) {
        return chars[0] + 37 - code + chars[1] - code + 1;
      } else {
        return chars[0] + 37 - code;
      }
    } else if (chars[0] === 4983) {
      if (chars.length > 1) {
        return chars[0] + 46 - code + chars[1] - code + 1;
      } else {
        return chars[0] + 46 - code;
      }
    } else if (chars[0] === 4984) {
      if (chars.length > 1) {
        return chars[0] + 55 - code + chars[1] - code + 1;
      } else {
        return chars[0] + 55 - code;
      }
    } else if (chars[0] === 4985) {
      if (chars.length > 1) {
        return chars[0] + 64 - code + chars[1] - code + 1;
      } else {
        return chars[0] + 64 - code;
      }
    } else if (chars[0] === 4986) {
      if (chars.length > 1) {
        return chars[0] + 73 - code + chars[1] - code + 1;
      } else {
        return chars[0] + 73 - code;
      }
    }
    if (chars.length > 1) {
      return chars[0] + 10 - code + chars[1] - code + 1;
    } else {
      return chars[0] + 10 - code;
    }
  } else {
    const num1 = chars[0] - code + 1;
    const num2 = chars[1] - code + 1;
    return num1 + num2;
  }
}

function geezThreeConverter(num) {
  const chars = [];
  for (let i = 0; i < num.length; i++) {
    chars.push(num[i]);
  }
  return 100 + geezTwoConverter(`${chars[1]}${chars[2]}`);
}

function geezFourConverter(num){
  const chars = [];
  for(let i = 0; i < num.length; i++){
    chars.push(num[i]);
  }
  return convert(chars[0]) * 100 + geezTwoConverter(`${chars[2]}${chars[3]}`);
}

function geezFiveConverter(num){

}