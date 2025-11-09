const asyncHandler=(fn)=>{(err ,req ,res, next)=>{
    return Promise.resolve(fn(err,req,res,next)).catch((err)=>{
        next(err)
    });
    
}}

export{ asyncHandler }