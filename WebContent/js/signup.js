window.addEventListener("load",init,false);
function init(){
  
  // console.log('isUsername',isUsername('a1234567890456'));
  var signUpBtn = document.getElementById('signup-btn');
  var idElement = document.getElementById('id');
  var emailElement = document.getElementById('email')
  var duplicationCheckButtons = document.querySelectorAll('.duplication-check');  

  signUpBtn.addEventListener('click',signUp);
  idElement.addEventListener('change',initDuplicationCheck);
  duplicationCheckButtons.forEach(element => {
    element.addEventListener('click',checkDuplicate);
  });
  // 중복체크 해제
  idElement.addEventListener('change',initDuplicationCheck);
  emailElement.addEventListener('change',initDuplicationCheck);
  

  var pwElement = document.getElementById('pw');
  var pwChkElement = document.getElementById('pwChk');  
  var telElement = document.getElementById('tel');
  var regionElement = document.getElementById('region');
  var genderElement = document.getElementsByName('gender');
  var idErrmsg = document.getElementById('id-errmsg');
  var pwErrmsg = document.getElementById('pw-errmsg');
  var emailErrmsg = document.getElementById('email-errmsg');
  var telErrmsg = document.getElementById('tel-errmsg');
  var regionErrmsg = document.getElementById('region-errmsg');
  var genderErrmsg = document.getElementById('gender-errmsg');  
  idElement.addEventListener('change',(e)=>{idErrmsg.innerHTML=""});
  emailElement.addEventListener('change',(e)=>{emailErrmsg.innerHTML=""});
  pwElement.addEventListener('change',(e)=>{pwErrmsg.innerHTML=""});
  pwChkElement.addEventListener('change',(e)=>{pwErrmsg.innerHTML=""});
  telElement.addEventListener('change',(e)=>{telErrmsg.innerHTML=""});
  regionElement.addEventListener('change',(e)=>{regionErrmsg.innerHTML=""});
  genderElement[0].addEventListener('change',(e)=>{genderErrmsg.innerHTML=""});
  genderElement[1].addEventListener('change',(e)=>{genderErrmsg.innerHTML=""});
  
}
function signUp (){
  var idElement = document.getElementById('id');
  var idDuplicationCheckbox = idElement.parentElement.parentElement.querySelector('input[type="checkbox"]');
  var pwElement = document.getElementById('pw');
  var pwChkElement = document.getElementById('pwChk');
  var emailElement = document.getElementById('email');
  var emailDuplicationCheckbox = emailElement.parentElement.parentElement.querySelector('input[type="checkbox"]');
  var telElement = document.getElementById('tel');
  var regionElement = document.getElementById('region');
  var genderElement = document.getElementsByName('gender');
  var idErrmsg = document.getElementById('id-errmsg');
  var pwErrmsg = document.getElementById('pw-errmsg');
  // var pwChkErrmsg = document.getElementById('pwChk-errmsg');
  var emailErrmsg = document.getElementById('email-errmsg');
  var telErrmsg = document.getElementById('tel-errmsg');
  var regionErrmsg = document.getElementById('region-errmsg');
  var genderErrmsg = document.getElementById('gender-errmsg');  
  console.log('sign up')
  if(idElement.value.length===0){
    idErrmsg.innerHTML="*username을 입력하세요";
    return;
  }
  if(!isUsername(idElement.value)){    
    idErrmsg.innerHTML="*username 형식이 맞지 않습니다.";
    return;
  } 
  else if (idDuplicationCheckbox.getAttribute('checked')==='false'){        
    idErrmsg.innerHTML="*중복체크를 해주세요.";    
    return;   
  }
  console.log(isPassword(pwElement.value));
  if(pwElement.value.length ===0){
    pwErrmsg.innerHTML="*비밀번호를 입력하세요.";
    return;
  }
  else if(!isPassword(pwElement.value)){    
    pwErrmsg.innerHTML="*비밀번호 형식이 맞지 않습니다.";
    return;
  }else if (pwElement.value !== pwChkElement.value){
    pwErrmsg.innerHTML="*입력한 비밀번호가 일치하지 않습니다.";
    return;
  }
  if(emailElement.value.length===0){
    emailErrmsg.innerHTML="*이메일을 입력하세요.";
    return;
  }
  else if(!isEmail(emailElement.value)){    
    emailErrmsg.innerHTML="*이메일 형식이 올바르지 않습니다.";
    return;
  }else if(emailDuplicationCheckbox.getAttribute('checked')==='false'){
    emailErrmsg.innerHTML="*이메일 중복체크를 하십시오.";
    return;
  }
  console.log("isTel(telElement.value)",isTel(telElement.value));
  if(!isTel(telElement.value)){
    telErrmsg.innerHTML="*전화번호 형식에 맞지 않습니다.";
    return;
  }
  // 5) 지역
  if(regionElement.selectedIndex===0){
    regionErrmsg.innerHTML = "지역을 선택해주세요!";
    // flag = flag && false;
    return ;
  }else {
    regionErrmsg.innerHTML = "";    
  }
  // 6) 성별
  var status = false;
  for(var gender of genderElement){
      if(gender.checked){
          status = true;
          break;
      }
  }
  if(!status){
    genderErrmsg.innerHTML="성별을 선택해주세요";
    return ;
  }
  // console.log(idDuplicationCheckbox.checked, !idDuplicationCheckbox.checked)
  // console.log('idDuplicationCheckbox',idDuplicationCheckbox,idDuplicationCheckbox.checked ,idDuplicationCheckbox.getAttribute('checked'));

  window.location.href="../note";
}
// 중복체크 버튼
function checkDuplicate(e){  
  e.preventDefault();
  e.target.parentNode.querySelector('input[type="checkbox"]').setAttribute('checked',true);
  e.target.parentNode.querySelector('.errmsg').innerHTML="";
}

function initDuplicationCheck(e){
  console.log('onchange');
  var duplicationCheckbox=  e.target.parentNode.parentNode.querySelector('input[type="checkbox"]');
  console.log('duplicationCheckbox',duplicationCheckbox)
  duplicationCheckbox.setAttribute('checked',false);
  
}

// username 체크
function  isUsername(asValue){
  // if(asValue.length>20){
  //   return false;
  // }
  // var regExp = /^[a-zA-Z]{1}[0-9a-zA-Z]{5,19}/;  
  var regExp = /[a-zA-Z][0-9a-zA-Z]{5,19}/;  
  return regExp.test(asValue);
  
}
// 이메일 체크 
function isEmail(asValue) {
  
  var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
}

// 핸드폰 번호 체크
function isTel(asValue) {
  var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

//비밀번호 체크 
function isPassword(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}