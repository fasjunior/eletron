export class SidebarMenu
{
    private text:string;

    public get Text():string{
        return this.text;
    }

    public set Text(value:string){
        this.text = value;
    }

    private icon:string;

    public get Icon():string{
        return this.icon;
    }

    public set Icon(value:string){
        this.icon = value;
    }

    private url:string;

    public get Url():string{
        return this.url;
    }

    public set Url(value:string){
        this.url = value;
    }

    constructor(text:string, icon:string,url:string )
    {
        this.Text = text;
        this.Icon = icon;
        this.Url  = url;
    }
}