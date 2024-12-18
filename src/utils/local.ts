export const saveLocal= (key: string, value: any)=>{
    localStorage.setItem(key, JSON.stringify(value));
}

export const removeLocal = (key: string)=>{
    localStorage.removeItem(key);
}


export const getLocal = (key: string)=>{
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
}