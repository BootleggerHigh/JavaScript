export const PI = 3.14;
export const myName = '???';
export function f() {
    alert(myName);
}
export class MyExport {
    constructor() {
        this.PI = PI;
        this.name = myName;
        this.func = function () {
            f();
        }
    }
}