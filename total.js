
// 8GB ram price update

document.getElementById('lessRam').addEventListener('click',function () {

        const a= document.getElementById('extraMemoryPrice');
        const b = a.innerText;
        const c= parseFloat('00');
        a.innerText=c;
        console.log(a.innerText);
    
    // update Total Cost for 8GB ram
    
             document.getElementById('lessRam').disabled=true;
             document.getElementById('highRam').disabled=false;
    
             const finalCost= document.getElementById('finalCost');
             const FinalCost= TotalCost;
         
             finalCost.innerText=FinalCost;

            //  cuppon apply 
    
             document.getElementById('applyButton').addEventListener('click',function () {
                const a=document.getElementById('inputCode');
                const c= a.value;
                if(c=='stevekaku'){
                    const FinalCost2=FinalCost-((FinalCost*20)/100);
                    finalCost.innerText= FinalCost2;
                }
                a.value='';
           
                })
        
         })
        
   
// 16GB ram price update

document.getElementById('highRam').addEventListener('click',function () {
    const a= document.getElementById('extraMemoryPrice');
    const b = a.innerText;
    const c= parseFloat('180');
    a.innerText=c;
    console.log(a.innerText);

   // update Total Cost for 16GB ram 

    const totalCost= document.getElementById('totalCost');

    const TotalCost= parseFloat(totalCost.innerText) + parseFloat(a.innerText);

    totalCost.innerText=TotalCost;

    document.getElementById('lessRam').disabled=false;
    document.getElementById('highRam').disabled=true;

    const finalCost= document.getElementById('finalCost');
    const FinalCost= TotalCost;

    finalCost.innerText=FinalCost;

     //  cuppon apply

    document.getElementById('applyButton').addEventListener('click',function () {
        const a=document.getElementById('inputCode');
        const c= a.value;
        if(c=='stevekaku'){
            const FinalCost2=FinalCost-((FinalCost*20)/100);
            finalCost.innerText= FinalCost2;
        }
        a.value='';
   
       
   })

    
    
})
// 256GB SSD price update

document.getElementById('lowStorage').addEventListener('click',function () {
    const a= document.getElementById('extraStoragePrice');
    const b = a.innerText;
    const c= parseFloat('0');
    a.innerText=c;
    console.log(a.innerText);

    // update Total Cost for 256GB SSD

    const totalCost= document.getElementById('totalCost');

    const TotalCost= parseFloat(totalCost.innerText) + parseFloat(c);

    totalCost.innerText=TotalCost;

    document.getElementById('lowStorage').disabled=true;
    document.getElementById('midStorage').disabled=false;
    document.getElementById('highStorage').disabled=false;

    const finalCost= document.getElementById('finalCost');
    const FinalCost= TotalCost;

    finalCost.innerText=FinalCost;

     //  cuppon apply
    document.getElementById('applyButton').addEventListener('click',function () {
        const a=document.getElementById('inputCode');
        const c= a.value;
        if(c=='stevekaku'){
            const FinalCost2=FinalCost-((FinalCost*20)/100);
            finalCost.innerText= FinalCost2;
        }
        a.value='';
   
       
   })



    
})
// 512GB SSD price update

document.getElementById('midStorage').addEventListener('click',function () {
    const a= document.getElementById('extraStoragePrice');
    const b = a.innerText;
    const c= parseFloat('100');
    a.innerText=c;
    console.log(a.innerText);

    // update Total Cost for 512GB SSD

    const totalCost= document.getElementById('totalCost');

    const TotalCost= parseFloat(totalCost.innerText) + parseFloat(c);

    totalCost.innerText=TotalCost;

    document.getElementById('lowStorage').disabled=false;
    document.getElementById('midStorage').disabled=true;
    document.getElementById('highStorage').disabled=false;

    const finalCost= document.getElementById('finalCost');
    const FinalCost= TotalCost;

    finalCost.innerText=FinalCost;

     //  cuppon apply
    document.getElementById('applyButton').addEventListener('click',function () {
        const a=document.getElementById('inputCode');
        const c= a.value;
        if(c=='stevekaku'){
            const FinalCost2=FinalCost-((FinalCost*20)/100);
            finalCost.innerText= FinalCost2;
        }

        a.value='';
       
   })


    
})
// 1T SSD price update

document.getElementById('highStorage').addEventListener('click',function () {
    const a= document.getElementById('extraStoragePrice');
    const b = a.innerText;
    const c= parseFloat('180');
    a.innerText=c;
    console.log(a.innerText);

        // update Total Cost for 1T SSD

        const totalCost= document.getElementById('totalCost');

        const TotalCost= parseFloat(totalCost.innerText) + parseFloat(c);
    
        totalCost.innerText=TotalCost;

        document.getElementById('lowStorage').disabled=false;
        document.getElementById('midStorage').disabled=false;
        document.getElementById('highStorage').disabled=true;

        const finalCost= document.getElementById('finalCost');
        const FinalCost= TotalCost;
    
        finalCost.innerText=FinalCost;
         //  cuppon apply

        document.getElementById('applyButton').addEventListener('click',function () {
            const a=document.getElementById('inputCode');
            const c= a.value;
            if(c=='stevekaku'){
                const FinalCost2=FinalCost-((FinalCost*20)/100);
                finalCost.innerText= FinalCost2;
            }

            a.value='';
           
       })
    
    
})

// 25 Aug deliveryCost Update 

document.getElementById('lateDelivery').addEventListener('click',function () {
    const a= document.getElementById('deliveryCost');
    const b = a.innerText;
    const c= parseFloat('0');
    a.innerText=c;
    console.log(a.innerText);

        // update Total Cost for delivery Cost 

        const totalCost= document.getElementById('totalCost');

        const TotalCost= parseFloat(totalCost.innerText) + parseFloat(c);
    
        totalCost.innerText=TotalCost;

        document.getElementById('lateDelivery').disabled=true;
        document.getElementById('fastDelivery').disabled=false;

        const finalCost= document.getElementById('finalCost');
        const FinalCost= TotalCost;
    
        finalCost.innerText=FinalCost;

         //  cuppon apply

        document.getElementById('applyButton').addEventListener('click',function () {
            const a=document.getElementById('inputCode');
            const c= a.value;
            if(c=='stevekaku'){
                const FinalCost2=FinalCost-((FinalCost*20)/100);
                finalCost.innerText= FinalCost2;
            }
            a.value='';
       
           
       })
    

    
})
// 21 Aug deliveryCost Update 

document.getElementById('fastDelivery').addEventListener('click',function () {
    const a= document.getElementById('deliveryCost');
    const b = a.innerText;
    const c= parseFloat('30');
    a.innerText=c;
    console.log(a.innerText);

        // update Total Cost for Delivery Cost

       
        document.getElementById('lateDelivery').disabled=false;
        document.getElementById('fastDelivery').disabled=true;


        const totalCost= document.getElementById('totalCost');
        const TotalCost= parseFloat(totalCost.innerText) + parseFloat(c);
    
        totalCost.innerText=TotalCost;

        const finalCost= document.getElementById('finalCost');
        const FinalCost= TotalCost;
        finalCost.innerText=FinalCost;
         //  cuppon apply

        document.getElementById('applyButton').addEventListener('click',function () {
            const a=document.getElementById('inputCode');
            const c= a.value;
            if(c=='stevekaku'){
                const FinalCost2=FinalCost-((FinalCost*20)/100);
                finalCost.innerText= FinalCost2;
            }
                a.value='';
       
       })
        
})
