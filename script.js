let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> Successfully Submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i> Please fix the error !';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation" style="color: #fa9200;"></i> Invalid Input, check again!'

function showToast(msg){
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if(msg.includes('error')){
    toast.classList.add('error');
  }
  if(msg.includes('Invalid')){
    toast.classList.add('invalid');
  }

  setTimeout(()=>{
    toast.remove();
  },6000)
}