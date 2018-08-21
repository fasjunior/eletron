export class AppConfig{
    public static serverMQTT:string     = "192.168.88.91";
    public static portMQTT:number       = 19001;
    public static clientID:string       = "eletron";
    public static apiUrl:string         = "http://192.168.88.91:5074/";
    public static topicsMQTT:string[]   = [
        "eletron/energia"
    ];
}    
