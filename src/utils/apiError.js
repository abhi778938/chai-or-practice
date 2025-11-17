class apiError extends Error{
    constructor(statusCode,message="something went wrong",Errors=[],stack=""){
        super(message)
this.statusCode=statusCode,
this.message=message,

this.data=null,
this.success=false,
this.Errors=this.Errors

if (stack) {
    this.stack=stack
    
}
else{
    Error.captureStackTrace(this,this.constructor)
}

    }
}



export { apiError}