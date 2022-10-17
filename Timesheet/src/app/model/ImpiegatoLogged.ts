export class ImpiegatoLogged{

    private codice_fiscale!: String;

    private name!: String;

    private token!: String;

    private role!:String;

    public constructor(codice_fiscale:String,name:String,token:String,role:String){
        this.codice_fiscale=codice_fiscale;
        this.name=name;
        this.token=token;
        this.role=role;
    }

    public Print():String{
        return this.codice_fiscale+" "+this.name+" "+this.token+" "+this.role;
    }

    public GetToken(){
        return this.token;
    }
    public GetRole(){
        return this.role;
    }
    public GetName(){
        return this.name;
    }
    public GetCodice_fiscale(){
        return this.codice_fiscale;
    }

}