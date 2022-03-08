export const headInp = () => {
    const el = document.querySelector('.main__head_item_inp');
    const edit = document.querySelector('.main__head_item_btn');
    if(el) {
        el.addEventListener('input', () => {
            if(el.value == '') {
                edit.style.display = 'block';
            } else {
                edit.style.display = 'none';
            }
        })
    }
}