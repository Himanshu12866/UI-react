


export default function useCapcha() {

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let code = ""
    for (let i = 0; i < 6; i++) {
        var num = Math.round(Math.random() * 61);
        code += str[num]
    }
    return code;
}