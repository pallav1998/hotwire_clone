export function getFromLocal(key){
    let arr=localStorage.getItem(key)
    if(arr===null){
        return undefined
    }
    return JSON.parse(arr)
}
export function setInLocal(key,data){
    if(getFromLocal(key)===undefined){
        localStorage.setItem(key,data)
    }
    
}