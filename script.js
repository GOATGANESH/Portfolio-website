let menu=document.getElementById('menu')
let close_menu=document.getElementById('close-menu')
let verticalPanel=document.querySelector('.vertical-panel')
let lightDarkMode=document.getElementById('light-dark-mode')
var darkModeOn=false
let navborder=document.getElementById('nav-bar')
const account=document.getElementById('sign-in')
let explore=document.getElementById('enrollment')
let flag=0

let isSignedIn=false

menu.addEventListener('click',()=>{
    if (darkModeOn) {
         verticalPanel.style.backgroundColor="black"
         document.querySelector('.nav-links').style.color="white"
          
    }
    else{
        verticalPanel.style.backgroundColor="white"
         document.querySelector('.nav-links').style.color="black"
        
    }
    verticalPanel.style.display="block"
        document.querySelector('.nav-links').style.display="flex"

})

close_menu.addEventListener('click',()=>{
    verticalPanel.style.display="none"
   document.querySelector('.nav-links').style.display="none"
})
lightDarkMode.addEventListener('click',()=>{
    if (flag==0) {
        document.body.style.animation="darkbackground 0.6s ease-in";
    setTimeout(()=>{
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        
        document.getElementById('horizontal').style.backgroundColor="white";
    },550)
    flag=1
    darkModeOn=true
    }
    else{
        document.body.style.animation="lightbackground 0.6s ease-in";
    setTimeout(()=>{
        document.body.style.backgroundColor="#fff"
        document.body.style.color="black"
        
        document.getElementById('horizontal').style.backgroundColor="white";
    },550)
    flag=0
    }
    
})

const userForm = document.createElement('div');

userForm.id = 'user-form';
userForm.style.display = 'none';
userForm.innerHTML = `
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Submit">
        </form>
`;
document.querySelector('.content').appendChild(userForm);

account.addEventListener('click', () => {
        document.querySelector('.content').style.visibility="hidden"
        document.querySelector('.right img').style.display="none"
        userForm.style.display = 'block';
});

explore.addEventListener('click',()=>{
    
    document.querySelector('.content').style.animation="left-out 1.5s ease-in-out 0.3s";
    setTimeout(()=>{
        document.querySelector('.newContentOpener').style.display="flex";
        document.querySelector('.newContentOpener').style.animation="left-in 1s ease-in";
        document.querySelector('.oldContent').style.display="none";
        
    },1300)
    
})



