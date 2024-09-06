export default function GeneratePsw(){
    let pws = "abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123654789@$%&*";
    let generatedpsw = "";
    for (let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * 67);
        generatedpsw += pws[random];
    }
    return generatedpsw;
}