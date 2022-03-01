export const addInp = () => {
    const btn = document.querySelector('.aside__part_add');

    const list = document.querySelector('#actionList');
    
    let index = 2;

    btn.addEventListener('click', ()=> {
        index++;
        let listItems = list.querySelectorAll('.aside__part_item');

        if(listItems.length == 5) {
            return;
        } else {
            createEl(index);
        }
        


    })

    function createEl(index) {
        let dcv = `
            <span>Branch ${index}</span>
            <input type="text" value="">
        `;

        
        let el = document.createElement('div');
        el.classList.add('aside__part_item', 'input');
        el.innerHTML = dcv;

        list.append(el);
    }
}