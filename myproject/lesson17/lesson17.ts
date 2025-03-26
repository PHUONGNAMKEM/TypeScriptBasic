function handleException (errorMessage: string) : never {
    throw Error(errorMessage);
}

// void không yêu cầu phải luôn kết thúc bằng throw hoặc return - hoặc chạy vô hạn while(true) như never

// bản chất thì để trả ra kết quả thì void vẫn là undefined - còn never thì ko trả ra gì luôn

function runInfinity(): never {
    console.log('hehe')
    while(true) {
        // console.log("running ");
    }
} 

let a = runInfinity();
console.log(">>> check a: ", a);
