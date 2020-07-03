let userInput :unknown;
let userName :string;

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string,code: number) :never {
    throw({message:message,code:code});
}

let func = (color:number) => {
    console.log(color);
}

enum Color {Red,Green,Blue};
let bg = Color.Green;

func(bg);
generateError("Error",500);
