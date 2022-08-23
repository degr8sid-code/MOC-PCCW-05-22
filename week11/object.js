export function user(name,age){
            const obj = {
                name,
                age,
                printName: () => console.log(name)
            }

            return obj;    
}
