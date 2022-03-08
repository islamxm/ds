import { resCheck } from "./resCheck";

export const addInp = () => {
    // const btns = document.querySelectorAll('.aside__part_add');
    
    //Branchs
    const branchBtn = document.querySelector('#branchAdd');
    let branchIndex = 2;

    //Data Centers
    const dcBtn = document.querySelector('#dcAdd');
    let dcIndex = 1;


    function btnAddEvent(btn, index, name) {
        btn.addEventListener('click', ()=> {
            index++;
            let listItems = btn.previousElementSibling.querySelectorAll('.aside__part_item');
            let listParent = btn.previousElementSibling;
    
            if(listItems.length == 5) {
                return;
            } else {
                createEl(index, name, listParent);
            }
        })
    }
    function createEl(index, name, list) {
        let dcv = `
            <span>${name} ${index}</span>
            <input type="text" value="">
        `;

        
        let el = document.createElement('div');
        el.classList.add('aside__part_item', 'input');
        el.innerHTML = dcv;

        list.append(el);
    }


    function customInpAdd() {
        let testCt = document.querySelector('#pubcAdd');
        let testCtIndex = 11;
        let testList = testCt.previousElementSibling;
        
        if(testCt) {
            testCt.addEventListener('click', () => {
    
                testCtIndex++;
    
                if(testCtIndex < 15) {
                    let el = document.createElement('div');
                    el.classList.add('aside__part_item', 'checkbox');
                    el.innerHTML = `
                        <input type="checkbox" id="ch${testCtIndex}">
                        <label for="ch${testCtIndex}">
                            <div class="custom__inp">
                                <input type="text" value="Custom">
                                <button class="inp_res" type="button">
                                    <img src="./img/inp-res.svg" alt="">
                                </button>
                            </div> 
                            <div class="icon">
                                <div class="icon__in">
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.62829 6.1773L0.947745 3.59953L0 4.51089L3.62829 8L11 0.91136L10.0523 8.60397e-06L3.62829 6.1773Z" fill="white"/>
                                        </svg>
                                </div>
                            </div>
                        </label>
                    `;
    
                    testList.append(el);
    
                    resCheck();
                } else {
                    return;
                }
    
                
    
            })
        }
    }

    function customChAdd() {
        const chBtn = document.querySelector('#chAdd');
        let chIndex = 3;
        let chList = chBtn.previousElementSibling;

        if(chBtn) {
            chBtn.addEventListener('click', () => {

                chIndex++;

                if(chIndex < 8) {
                    let el = document.createElement('div');
                    el.classList.add('aside__part_item', 'checkbox');
                    el.innerHTML = `
                        <input type="checkbox" id="ch${chIndex}">
                        <label for="ch${chIndex}">
                            <div class="custom__inp">
                                <input type="text" value="Custom">
                                <button class="inp_res" type="button">
                                    <img src="./img/inp-res.svg" alt="">
                                </button>
                            </div> 
                            <div class="icon">
                                <div class="icon__in">
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.62829 6.1773L0.947745 3.59953L0 4.51089L3.62829 8L11 0.91136L10.0523 8.60397e-06L3.62829 6.1773Z" fill="white"/>
                                        </svg>
                                </div>
                            </div>
                        </label>
                    `;
    
                    chList.append(el);
    
                    resCheck();
                }
            })
        }

    }


    


    btnAddEvent(branchBtn, branchIndex, 'Branch');
    btnAddEvent(dcBtn, dcIndex, 'DC/CoLo/EDGE');
    customInpAdd();
    customChAdd();
    

    
}