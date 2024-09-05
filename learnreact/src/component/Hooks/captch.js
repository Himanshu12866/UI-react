export default function useCapcha(){
    var code = Math.round(Math.random() * 1000000);
    return code;
}