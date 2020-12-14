// set inputs:
const r = 4;
const arr = [1, 4, 16 ,64, 256, 512, 1024];

const counterFunc = (arr, r) => {

    let count = 0;

    for (let i=0; i < arr.length; i++){
        if ( arr[i] == 1 ) {
            if (arr[i+1] % r == 0 && arr[i+2] % r == 0 ) {
                count = count + 1;
            }
        } else {
            if ( arr[i] % r == 0 && arr[i+1] % r == 0 && arr[i+2] % r == 0 ) {
                count = count + 1;
            }
        }
    }

    console.log(count);

}

counterFunc(arr, r);