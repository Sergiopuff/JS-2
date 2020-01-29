// const str = "123 abc 456";

// const regexp1 = /abc/;
// const regexp2 = /999/;

// console.log(regexp1.test(str)); // true
// console.log(regexp2.test(str)); // false

// const str1 = "Geek from GeekBrains";
// const regexp3 = /Geek/g;
// console.log(str1.match(regexp3));

// const str3 = "I am Greek geek from Geekbrains";
// const regexp4 = /(g.+?k)/gi;

// str4 = str3.replace(regexp4, '+$1+');
// console.log(str4);

// const str5 = '000 1221 133331';
// const regexp5 =  /1.+?1/g;
// console.log(str5.match(regexp5));


// ДЗ

class ReplacementText {
    constructor(container = '.text') {
        this.container = container;
        this.getText();
    }
    getText() {
        const data = document.querySelector(this.container);

        let rex = /'/g;
        let res = data.innerHTML.replace((rex), '"');

        rex = /\b"\b/g;
        res = res.replace((rex), '\'');
        data.innerHTML = res;
    }

}

const rpText = new ReplacementText();