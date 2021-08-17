export class Task{
    constructor(public id:string,public name:string,public desc:string,public date:string){
        [
            {item:id},
            {item:name},
            {item:desc},
            {item:date}
        ]
    }
}