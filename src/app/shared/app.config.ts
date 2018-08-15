export class AppConfig{
    public static serverMQTT:string     = "192.168.88.236";
    public static portMQTT:number       = 19001;//8083;
    public static clientID:string       = "eletron";
    public static sqSistema: number     = 1; 
    public static eletron:string        = "eletron/";
    public static apiUrl:string         = "http://192.168.88.236:5074/";
    public static topicsMQTT:string[]   = [
        "eletron/corrente",
        "eletron/potencia",
        "eletron/energia"
    ];
}    