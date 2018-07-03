const ora = require('ora');
 
const spinner = ora('开始显示颜色').start();

function generatorColorPromise(color){
    return new Promise(res => {
        setTimeout(()=>{
            spinner.color = color;
            spinner.text = '现在是' + color;
            res(color)
        },1000)
    })
}
var arr = ["black" ,"red" ,"green" ,"yellow" ,"blue" ,"magenta" ,"cyan", "white", "gray"];

(async function(){
    for(var i = 0; i < arr.length; i ++){
        if(i == arr.length - 1){
            spinner.stop()
        }else{
            await generatorColorPromise(arr[i])
        }
    }
})()