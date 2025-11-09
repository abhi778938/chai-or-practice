class appResp{
    constructor(statusCode,data,message="soccess"){
        super()
        this.statusCode=statusCode
        this.data=data,
        this.message=message
        this.success=statusCode
    }
}

export{ appResp}