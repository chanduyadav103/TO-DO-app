//long
function long(str, minlength) {
    return str.length >= minlength;
}
console.log(long('hello', 4))
console.log(long('laptop', 8))
console.log("--------------------------------------------------");

//first and last char
function firlas(str) {
    let first = str.charAt(0)
    let last = str.charAt(str.length - 1)
    return first + last

}
console.log(firlas('jhon players'))
console.log(firlas('mustang'))
console.log("--------------------------------------------------");

//ascii
function ascii(char) {
    return char.charCodeAt(0)
}
console.log(ascii('j'))
console.log(ascii('s'))
console.log("--------------------------------------------------");

//equal string
function equal(str1, str2) {
    return str1.toUpperCase() == str2.toUpperCase()
}
console.log(equal('Iphone', 'iPhOne'))
console.log(equal('TRIUMPH', 'triumph'))
console.log(equal('hello', 'bye'))
console.log("--------------------------------------------------");

//truncate
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "...";
    }
    else {
        return str
    }
}
console.log(truncate('hello', 5))
console.log(truncate('hondacity', 8))
console.log("--------------------------------------------------");

//presuf 
function presuf(str, part) {
    let isprefix = str.startsWith(part)
    let issuffix = str.endsWith(part)
    return {
        prefix: isprefix,
        suffix: issuffix
    }
}
console.log(presuf('laptop', 'lap'))
console.log(presuf('android', 'id'))
console.log("--------------------------------------------------");
//substring
function substring(str, sub) {
    return str.indexOf(sub)
}
console.log(substring('attack of titan', 'of'))
console.log(substring('naruto', 'saku'))
console.log("--------------------------------------------------");
//count 
function occur(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count++;
        }

    }
    return count;
}
console.log(occur('madam', 'a'))
console.log(occur('hello', 'x'))
console.log("--------------------------------------------------");
//trim
function trim(str) {
    return str.trim()
}
console.log(trim('               sasuke           '))
console.log("--------------------------------------------------");
//trim at start
function trims(str) {
    return str.trimStart()
}
console.log(trims('onepiece          '))
console.log("--------------------------------------------------");
//trim at end
function trime(str) {
    return str.trimEnd()
}
console.log(trime('               attack on titan                                       '))
console.log("--------------------------------------------------");

//remove occurences
function remove(str, oldword, newword) {
    return str.replaceAll(oldword, newword)
}
console.log(remove('onepiece is a great anime.onepiece has highest fan base', 'onepiece', 'attack on titan'))
console.log("--------------------------------------------------");
//split
function split(str) {
    return str.split('')
}
console.log(split('luffy'))
console.log("--------------------------------------------------");
//joinwords
function joinwords(words, seperator) {
    return words.join(seperator)
}
console.log(joinwords(["i", "have", 'a', 'iphone'], " "))
console.log("--------------------------------------------------");
//file extension
function file(filename) {
    let parts = filename.split('.')
    return parts.length > 1 ? parts[parts.length - 1] : " "
}
console.log(file('file.txt'))
console.log(file('word'))
console.log("--------------------------------------------------");
//palin
function palindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(palindrome('mom'))
console.log(palindrome('world'))
console.log("--------------------------------------------------");
//vowels
function vowels(str) {
    let vowels = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'O', 'I', 'U']
    let count = 0
    for (let i = 0; i < str.length; i++)
        if (vowels.includes(str[i])) {
            count++
        }
    return count;
}
console.log(vowels('iphone'))
console.log(vowels('samsung'))
console.log("--------------------------------------------------");
//maskmail
function mask(email) {
    let [username, domain] = email.split('@')
    let masked = username[0] + "****"
    return masked + '@' + domain
}
console.log(mask('luffy12@gmail.com'))
console.log("--------------------------------------------------");
//countwords
function words(str) {
    return str.trim().split("").length
}
console.log(words('laptop'))
console.log("--------------------------------------------------");

