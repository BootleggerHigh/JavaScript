class ExtendedClock extends Clock{
    constructor(template) {
        super(template);
        const {precision=1000} = template;
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(()=> this.render(),this.precision);
    }
}

let new_clock = new ExtendedClock({template:'h:m:s',precision:1000});
let a = '123';
console.log(a.big().big().bold());