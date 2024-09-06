export default function useGeneratePsw(){
    let pws = "@$%&*abcdefghiklmnopqrstuvwxyz@$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123654789@$%&*";
    let generatedpsw = "";
    for (let i = 0; i < 12; i++) {
        let random = Math.floor(Math.random() * 76);
        generatedpsw += pws[random];
    }
    return generatedpsw;
}