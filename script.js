window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const promise1=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved")
	},1000)
})
const promise2=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved")
	},2000)
})
const promise3=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved")
	},3000)
})
const promise4=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved")
	},4000)
})
const promise5=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved")
	},5000)
})
Promise.any([promise1,promise2,promise3,promise4,promise5]).then(result=>
	document.getElementById("output").innerText=result);
