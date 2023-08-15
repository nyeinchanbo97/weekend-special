const hiddenNavListBox =
  document.getElementsByClassName("hidden-navList-box")[0];
const navMenu = document.getElementsByClassName("navMenu")[0];
const hiddenNavListA = document.getElementsByClassName("hidden-nav-list-a");
let isOpen = false;

navMenu.addEventListener("click", () => {
  if (isOpen === false) {
    hiddenNavListBox.style.display = "block";
    isOpen = true;
  } else {
    hiddenNavListBox.style.display = "none";
    isOpen = false;
  }
});

for (let i = 0; i < 5; i++) {
  hiddenNavListA[i].addEventListener("click", () => {
    hiddenNavListBox.style.display = "none";
    isOpen = false;
  });
}

const mondayAm = document.getElementById("monday-am");
const mondayAmP = document.getElementById("monday-am-p");
const mondayPm = document.getElementById("monday-pm");
const mondayPmP = document.getElementById("monday-pm-p");

const tuesdayAm = document.getElementById("tuesday-am");
const tuesdayAmP = document.getElementById("tuesday-am-p");
const tuesdayPm = document.getElementById("tuesday-pm");
const tuesdayPmP = document.getElementById("tuesday-pm-p");

const wednesdayAm = document.getElementById("wednesday-am");
const wednesdayAmP = document.getElementById("wednesday-am-p");
const wednesdayPm = document.getElementById("wednesday-pm");
const wednesdayPmP = document.getElementById("wednesday-pm-p");

const thursdayAm = document.getElementById("thursday-am");
const thursdayAmP = document.getElementById("thursday-am-p");
const thursdayPm = document.getElementById("thursday-pm");
const thursdayPmP = document.getElementById("thursday-pm-p");

const fridayAm = document.getElementById("friday-am");
const fridayAmP = document.getElementById("friday-am-p");
const fridayPm = document.getElementById("friday-pm");
const fridayPmP = document.getElementById("friday-pm-p");

const totalAmount = document.getElementById("total-amount");
const totalP = document.getElementById("total-p");

const totalAmount2 = document.getElementById("total-amount-2");
const commissionSa = document.getElementById("commission-sa");
const commissionTotal = document.getElementById("commission-total");
const pSa = document.getElementById("p-sa");
const totalPx = document.getElementById("total-p-x");
const finalResult = document.getElementById("final-result");
const calculateBtn = document.getElementsByClassName("calculate-btn")[0];

calculateBtn.addEventListener("click", () => {
  // total amount
  let value1 =
    parseInt(mondayAm.value) +
    parseInt(mondayPm.value) +
    parseInt(tuesdayAm.value) +
    parseInt(tuesdayPm.value) +
    parseInt(wednesdayAm.value);
  let value2 =
    parseInt(wednesdayPm.value) +
    parseInt(thursdayAm.value) +
    parseInt(thursdayPm.value) +
    parseInt(fridayAm.value) +
    parseInt(fridayPm.value);
  let totalValue = parseInt(value1) + parseInt(value2);
  totalAmount.value = totalValue;
  totalAmount2.value = totalValue;
  //total p
  let p1 =
    parseInt(mondayAmP.value) +
    parseInt(mondayPmP.value) +
    parseInt(tuesdayAmP.value) +
    parseInt(tuesdayPmP.value) +
    parseInt(wednesdayAmP.value);
  let p2 =
    parseInt(wednesdayPmP.value) +
    parseInt(thursdayAmP.value) +
    parseInt(thursdayPmP.value) +
    parseInt(fridayAmP.value) +
    parseInt(fridayPmP.value);
  let p3 = parseInt(p1) + parseInt(p2);
  totalP.value = p3;
  //total commission
  let corSa = parseInt(commissionSa.value);
  commissionTotal.value = totalValue * (corSa / 100);
  //total p sa
  totalPx.value = p3 * parseInt(pSa.value);
  //final result
  let htoeKyay = parseInt(totalValue) - parseInt(commissionTotal.value);
  let paukKyay = parseInt(totalPx.value);
  if (paukKyay > htoeKyay) {
    finalResult.value = `+ ${paukKyay - htoeKyay}`;
  } else if (htoeKyay > paukKyay) {
    finalResult.value = `- ${htoeKyay - paukKyay}`;
  } else if (paukKyay === htoeKyay) {
    finalResult.value = "=";
  }
});

//Save section

const weekendBoxParent2 = document.getElementsByClassName(
  "weekend-box-parent-2"
)[0];
const saveBtn = document.getElementsByClassName("save-btn")[0];
const nameTag = document.getElementsByClassName("name")[0];
const saveItemBox = document.getElementsByClassName("save-item-box");
const cancelBox = document.getElementsByClassName("cancel-box");
const saveItemParent = document.getElementsByClassName("save-item-parent");

const obj1 = {};
let apple = 0;
// let mango = 100;
let obj1AsString = "";

const saving = () => {
  obj1.value1 = parseInt(mondayAm.value);
  obj1.value2 = parseInt(mondayAmP.value);
  obj1.value3 = parseInt(mondayPm.value);
  obj1.value4 = parseInt(mondayPmP.value);

  obj1.value5 = parseInt(tuesdayAm.value);
  obj1.value6 = parseInt(tuesdayAmP.value);
  obj1.value7 = parseInt(tuesdayPm.value);
  obj1.value8 = parseInt(tuesdayPmP.value);

  obj1.value9 = parseInt(wednesdayAm.value);
  obj1.value10 = parseInt(wednesdayAmP.value);
  obj1.value11 = parseInt(wednesdayPm.value);
  obj1.value12 = parseInt(wednesdayPmP.value);

  obj1.value13 = parseInt(thursdayAm.value);
  obj1.value14 = parseInt(thursdayAmP.value);
  obj1.value15 = parseInt(thursdayPm.value);
  obj1.value16 = parseInt(thursdayPmP.value);

  obj1.value17 = parseInt(fridayAm.value);
  obj1.value18 = parseInt(fridayAmP.value);
  obj1.value19 = parseInt(fridayPm.value);
  obj1.value20 = parseInt(fridayPmP.value);

  obj1.value21 = parseInt(totalAmount.value);
  obj1.value22 = parseInt(totalP.value);

  obj1.value23 = parseInt(totalAmount2.value);
  obj1.value24 = parseInt(commissionSa.value);
  obj1.value25 = parseInt(commissionTotal.value);
  obj1.value26 = parseInt(pSa.value);
  obj1.value27 = parseInt(totalPx.value);
  obj1.value28 = finalResult.value;

  obj1.name = nameTag.value;
};
const reFilling = (orange) => {
  mondayAm.value = orange.value1;
  mondayAmP.value = orange.value2;
  mondayPm.value = orange.value3;
  mondayPmP.value = orange.value4;

  tuesdayAm.value = orange.value5;
  tuesdayAmP.value = orange.value6;
  tuesdayPm.value = orange.value7;
  tuesdayPmP.value = orange.value8;

  wednesdayAm.value = orange.value9;
  wednesdayAmP.value = orange.value10;
  wednesdayPm.value = orange.value11;
  wednesdayPmP.value = orange.value12;

  thursdayAm.value = orange.value13;
  thursdayAmP.value = orange.value14;
  thursdayPm.value = orange.value15;
  thursdayPmP.value = orange.value16;

  fridayAm.value = orange.value17;
  fridayAmP.value = orange.value18;
  fridayPm.value = orange.value19;
  fridayPmP.value = orange.value20;

  totalAmount.value = orange.value21;
  totalP.value = orange.value22;

  totalAmount2.value = orange.value23;
  commissionSa.value = orange.value24;
  commissionTotal.value = orange.value25;
  pSa.value = orange.value26;
  totalPx.value = orange.value27;
  finalResult.value = orange.value28;

  nameTag.value = orange.name;
};
saveBtn.addEventListener("click", () => {
  saving();
  if (obj1.name === "") {
    alert("please fill the name");
    return;
  }
  if (obj1.name.length > 9){
    alert("Customer name should not exceed more than 9 character!")
    return;
  }

  apple = localStorage.getItem("a") * 1;
  // mango = localStorage.getItem("b") * 1;

  obj1AsString = JSON.stringify(obj1);
  localStorage.setItem(apple, obj1AsString);
  // localStorage.setItem(mango,nameTag.value);
  // mango += 1;
  apple += 1;
  localStorage.setItem("a", apple);
  // localStorage.setItem("b",mango);

  const savedItemShowingTag = `
  <div class="save-item-parent">
  <div class="save-item-box">
    <h4>${nameTag.value}</h4>
  </div>
  <div class="cancel-box"><i class="fa-solid fa-x fa-fw"></i></div>
</div>
`;
  weekendBoxParent2.innerHTML += savedItemShowingTag;

  for (let i = 0; i < apple; i++) {
    saveItemBox[i].addEventListener("click", () => {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem(i));
      reFilling(dataFromLocalStorage);
    });
  }

  for (let i = 0; i < apple; i++) {
    cancelBox[i].addEventListener("click", () => {
      localStorage.removeItem(i);
      let y = i;
      for (let z = 0; z < apple; z++) {
        let j = y + 1 + z;
        const testFile = JSON.parse(localStorage.getItem(j));
        const testFileString = JSON.stringify(testFile);
        j -= 1;
        localStorage.setItem(j, testFileString);
      }
      apple -= 1;
      localStorage.setItem("a", apple);
      location.reload();
    });
  }

  location.reload();
});

window.addEventListener("load", () => {
  apple = localStorage.getItem("a") * 1;

  for (let i = 0; i < apple; i++) {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(i));
    // console.log(dataFromLocalStorage.value28);

    const savedItemShowingTag = `
    <div class="save-item-parent">
      <div class="save-item-box">
        <h4>${dataFromLocalStorage.name}</h4>
      </div>
      <div class="cancel-box"><i class="fa-solid fa-x fa-fw"></i></div>
    </div>
    `;
    weekendBoxParent2.innerHTML += savedItemShowingTag;
  }
});

window.addEventListener("load", () => {
  apple = localStorage.getItem("a") * 1;

  const saveItemBox = document.getElementsByClassName("save-item-box");
  for (let i = 0; i < apple; i++) {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(i));
    saveItemBox[i].addEventListener("click", () => {
      reFilling(dataFromLocalStorage);
    });
  }
});

window.addEventListener("load", () => {
  apple = localStorage.getItem("a") * 1;

  const cancelBox2 = document.getElementsByClassName("cancel-box");
  for (let i = 0; i < apple; i++) {
    cancelBox[i].addEventListener("click", () => {
      localStorage.removeItem(i);
      let y = i;
      for (let z = 0; z < apple; z++) {
        let j = y + 1 + z;
        const testFile = JSON.parse(localStorage.getItem(j));
        const testFileString = JSON.stringify(testFile);
        j -= 1;
        localStorage.setItem(j, testFileString);
      }
      apple -= 1;
      localStorage.setItem("a", apple);
      location.reload();
    });
  }
});

const clearAllBtn = document.getElementsByClassName("clear-all-btn")[0];
const clearAllBox = document.getElementsByClassName("clear-all-box")[0];
const clearAllDeleteBtn = document.getElementsByClassName(
  "clear-all-delete-btn"
)[0];
const clearAllCancelBtn = document.getElementsByClassName(
  "clear-all-cancel-btn"
)[0];

clearAllBtn.addEventListener("click", () => {
  clearAllBox.classList.remove("dn");
});

clearAllCancelBtn.addEventListener("click", () => {
  clearAllBox.classList.add("dn");
});

clearAllDeleteBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

//to make the button which can show and hide saved items box 
//and to make the instruction 
//so the space for saved items box will only show when the user click the button
//if not the space will be for instruction box
 
const savedItemsBtn = document.getElementsByClassName("saved-items")[0];
const savedItemsIcon = document.getElementsByClassName("saved-items-icon")[0];
const instructionBox = document.getElementsByClassName("instruction-box")[0];

savedItemsBtn.addEventListener("click",()=>{
  if (weekendBoxParent2.classList.contains("isOpen")){
    weekendBoxParent2.style.top = "-639px";
    savedItemsIcon.classList.remove("fa-chevron-up");
    savedItemsIcon.classList.add("fa-chevron-down");
    weekendBoxParent2.classList.remove("isOpen");
    savedItemsBtn.style.display = "none";
    setTimeout(() => {
      savedItemsBtn.style.display = "block";
    }, 500);
    setTimeout(() => {
    instructionBox.style.display = "block";
    }, 500);
  }else{
    weekendBoxParent2.style.top = "-270px";
    savedItemsIcon.classList.remove("fa-chevron-down");
    savedItemsIcon.classList.add("fa-chevron-up");
    weekendBoxParent2.classList.add("isOpen");
    savedItemsBtn.style.display = "none";
    setTimeout(() => {
      savedItemsBtn.style.display = "block";
    }, 500);
    instructionBox.style.display = "none";
  }
})
