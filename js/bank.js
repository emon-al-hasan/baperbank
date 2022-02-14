document.getElementById('login-submit').addEventListener('click',function(){
   const emailFeild=document.getElementById('user-email');
   const userEmail=emailFeild.value;
  //user password
  const passwordFeild=document.getElementById('user-password');
   const userPassword=passwordFeild.value;

if(userEmail=='hallal@gmail.com' && userPassword=='hallal')
{
   window.location.href='banking.html';

   
}
})


