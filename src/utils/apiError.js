class apiError extends Error{
    constructor(statusCode,message="something went wrong",Errors=[],statch=""){
        super(message)
this.statusCode=statusCode,
this.message=message,

this.data=null,
this.soccess=false,
this.Errors=this.Errors

if (statch) {
    this.statck=statch
}
else{
    Error.captureStackTrace(this,this.constructor)
}

    }
}



export { apiError}