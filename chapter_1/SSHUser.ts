class SSHUser {
    private privateKey: string;
    public publicKey: string;
    constructor(prvKey: string, pubKey: string){
        this.privateKey = prvKey;
        this.publicKey = pubKey;
    }

    public getBase64(): string {
        return Buffer.from(this.publicKey).toString
        ("base64");
    }
}