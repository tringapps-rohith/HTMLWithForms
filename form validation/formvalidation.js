const uname=document.getElementById("name");
const pass=document.getElementById("pass");
const rpass=document.getElementById("rpass");
const email=document.getElementById("email");
const contactno=document.getElementById("contactno");
const form=document.getElementById('form');
let formControl;
let small;
let res=0;
form.addEventListener('submit',e=>{
    e.preventDefault();
    submitFunc();
    if(res==5)
    {
        alert("Okay");
    }
});
let submitFunc=()=> {
    validateInputs();
}
let validateInputs=()=>{
    res=0;
    formControl=uname.parentElement;
    small=formControl.querySelector('small');
    small.className='small';
    if(uname.value==='' || uname.value.match(/\d/))
    {
        small.className='smallchange2';
        small.innerText='Your Username is invalid/It not have numbers,Symbols';
        res-=1;
    }
    else{
        small.className='smallchange1';
        small.innerText=uname.value;
        res+=1;
    }
    formControl=email.parentElement;
    small=formControl.querySelector('small');
    small.className='small';
    if(email.value!='')
    {
        small.className='smallchange1';
        small.innerText=email.value;
        res+=1;
    }
    else{
        small.className='smallchange2';
        small.innerText='Enter valid email';
        res-=1;
    }
    formControl=contactno.parentElement;
    small=formControl.querySelector('small');
    small.className='small';
    if(contactno.value.match(/^\d{10}$/) && contactno.value!='')
    {
        small.className='smallchange1';
        small.innerText=contactno.value;
        res+=1;
    }
    else{
        small.className='smallchange2';
        small.innerText='Enter Valid Phone number';
        res-=1;
    }
    formControl=pass.parentElement;
    small=formControl.querySelector('small');
    small.className='small';
    if(pass.value!='')
    {
        small.className='smallchange1';
        small.innerText='You entered password';
        res+=1;
    }
    else{
        small.className='smallchange2';
        small.innerText='Enter password';
        res-=1;
    }
    formControl=rpass.parentElement;
    small=formControl.querySelector('small');
    small.className='small';
    if(rpass.value!='')
    {
        small.className='smallchange1';
        if(pass.value==rpass.value)
        {
        small.innerText='Password matched';
        res+=1;
        }
        else{
            small.innerText='Password Not matched';
            res-=1;
        }
        
    }
    else{
        small.className='smallchange2';
        small.innerText='Enter password';
        res-=1;
    }
}

