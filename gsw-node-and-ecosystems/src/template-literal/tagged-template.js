let person = "Mike";
let age = 28;

function myTag(strings, personExp, ageExp) {
    console.log(`raw: ${strings.raw}`);
    let [str0, str1, str2] = strings;

    let ageStr;
    if (ageExp > 99) {
        ageStr = "centenarian";
    } else {
        ageStr = "youngster";
    }

    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That\n ${person} is a ${age}.`;
console.log(output);

function template(strings, ...keys) {
    return function (...values) {
        let dict = values[values.length - 1] || {};
        let result = [strings[0]];
        keys.forEach(function (key, i) {
            let value = Number.isInteger(key) ? values[key] : dict[key];
            return result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

let t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure("Y", "A"));
