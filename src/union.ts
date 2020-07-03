type combinable = number | string;
type status = "number" | "string"

function combine(input1: combinable,input2: combinable,result:status):combinable
{
    let res: combinable;
    if(result == "number")
    {
        res = +input1 + +input2;
    }
    else
    {
        res = input1.toString() + input2.toString();
       
    }
    return res;
}

console.log(combine("3","4","string"));
console.log(combine(3,4,"number"));