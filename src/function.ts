
window.onload = function () {
    const btn = document.querySelector("button")!;
    const a = document.getElementById("txt1")! as HTMLInputElement;
    const b = document.getElementById("txt2")! as HTMLInputElement;

    let add = function (a:number, b:number,callback: (x: number)=> void) {
        const x = a + b;
        callback(x);
    };

    let addition: (a:number,b:number,cb: (x:number)=> void) => void = add;

    btn.addEventListener("click", function () {

        addition(+a.value,+b.value,(x)=>{
            console.log(x);
        })
    });
}

