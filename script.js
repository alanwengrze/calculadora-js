const insert = (num)=> {
    let res = document.querySelector('#res').innerHTML
    document.querySelector('#res').innerHTML = res + num

}

const clean = ()=>{
    document.querySelector('#res').innerHTML = '';
}

clean()


const back = ()=>{
    let res = document.querySelector('#res').innerHTML
    document.querySelector('#res').innerHTML = res.substring(0,res.length -1)
}


const calcular = ()=>{
    let res =document.querySelector('#res').innerHTML
    if(res){
        document.querySelector('#res').innerHTML = eval(res)
    }
}



