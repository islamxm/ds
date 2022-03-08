export const resCheck = () => {
    let inpRes = document.querySelectorAll('.inp_res');

    if(inpRes) {
        inpRes.forEach(el => {
            el.addEventListener('click', () => {
                el.previousElementSibling.value = '';
            })
        })
    }
}