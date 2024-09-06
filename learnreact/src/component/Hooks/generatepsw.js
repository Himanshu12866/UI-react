export default function useGeneratePsw(){
    let pws = "abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123654789@$%&*";
    let generatedpsw = "";
    for (let i = 0; i < 12; i++) {
        let random = Math.floor(Math.random() * 66);
        generatedpsw += pws[random];
    }
    return generatedpsw;
}