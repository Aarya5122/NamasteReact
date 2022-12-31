const obj = {
    firstName: "Aarya",
    printName: function(){
        console.log(this)
    },
    arrowFun: () => console.log(this),
    inner: {
         norFun: function () { console.log(this)},
         arrowFunctionPrint: () => console.log(this),
        innest: {
            normal: function(){ console.log(this) },
            arrowFunctionPrintInnest: () => console.log(this)
        }
    }
}
console.log(obj.firstName)
obj.printName()
obj.arrowFun()
obj.inner.norFun()
obj.inner.arrowFunctionPrint()
obj.inner.innest.normal()
obj.inner.innest.arrowFunctionPrintInnest()