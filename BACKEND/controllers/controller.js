
function prefix_eval(s){
    const characters = s.split(" ");
    characters.reverse();
    
    const stack = [];
    let i=0;
    for(i=0;i<characters.length;i++){

        if (characters[i] != "+" && characters[i] != "-" && characters[i] != "*" && characters[i] != "/" ){
            stack.push(parseInt(characters[i]));
        }
        else{
            let a = stack.pop()
            let b = stack.pop()

            if (characters[i] == "+"){
                stack.push(a + b)
            }
            else if(characters[i] == "-"){
                stack.push(a - b)
            }

            else if(characters[i] == "*"){
                stack.push(a * b)
            }
            else if(characters[i] == "/"){
                stack.push(a / b)
            }
        }
    }
    console.log(stack[0])
    return stack[0];

}

const computeQuery = async(req,res)=>{
    try {
        const query = req.body.inputString;
        console.log(query);
        const result = prefix_eval(query);
        return res.status(200).json({result : result});
    } 
    catch (error) {
        console.log(error)
        return res.status(404).json({ message: "ERROR", cause: error.message })
    }
    
}

module.exports = {computeQuery};