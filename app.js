const inputs = document.querySelectorAll('input');
const inp = document.getElementById('inp2');

inputs.forEach(input => {
    input.addEventListener('change', (e) =>{
        inputs.forEach((i) => i.setAttribute("disabled", "true"));
        if(e.target == inp){
            alert("صحيح مبرووووووووووووووووووووووك ");
            // e.target.removeAttribute("disabled");
        }
        else{
            alert("خطأ");
        }
    });
});