$('.button').click(()=>{
    let num1 = $('#width').val();
    let num2 = $('#length').val();
    
    console.log(num1, num2, typeof num1, typeof num2);
    
    num1 = +num1;
    num2 = parseInt(num2);
    
    console.log(num1, num2, typeof num1, typeof num2);
    
    const answer = num1 + num2;
    
    $('#outputin').text(answer);
});