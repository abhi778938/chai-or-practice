class apiError extends Error{
    constructor(statusCode,message="something went wrong",Errors=[],stach=""){
        super(message)
this.statusCode=statusCode,
this.message=message,

this.data=null,
this.soccess=false,
this.Errors=this.Errors

if (stack) {
    this.stack=statch
}
else{
    Error.captureStackTrace(this,this.constructor)
}

    }
}



export { apiError}