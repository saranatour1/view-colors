export const findColors = (value:string)=>{
  return value.split(/\s+/).filter(word => CSS.supports('color', word))
}


