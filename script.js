//your JS code here. If required.
function validateForm() {
	var  nameInput=document.getElementById('name').value.trim();
	var  ageInput=document.getElementById('age').value.trim();
	if(nameInput===''){
		alert('Name cannot be empty');
		return false;
	}
	if(isNaN(ageInput) || ageInput<1){
		alert('Age must be a valid number greater than 0');
		return false;
	}
	return true;
}
// function to handle the form submission
 document.getElementById('myForm').addEventListener('submit',function(event){
	 event.preventDefault();
	 if(!validateForm()){
		 return;
	 }
	 var name=document.getElementById('name').value.trim();
	 var age=parseInt(document.getElementById('age').value.trim());

	 var promise=new promise((resolve,reject) =>{
		 setTimeOut(()=>{
			 if(age>=18){
				 resolve(`Welcome, ${name}. You can vote.`);
			 }
			 else{
				 reject(`Oh sorry ${name}. You aren't old enough.`);
			 }
		 },4000);
	 });
	 promise.then((message)=>{
		 alert(message);
	 }).catch((errorMessage) =>{
		 alert(errorMessage);
	 });
 });
