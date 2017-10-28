 function pay()
       {
          var worked = new Array();
          var i=0; 
          var hours;
          var hourly = 15;
          var totalPay = 0;
          var j=1;
          
        
           hours = parseInt(prompt(" Number of hours worked for employee "+j+"? "));
           while(hours===-1){
            alert("You have not entered any hours yet.");
             hours = parseInt(prompt(" Number of hours worked for employee "+j+"? "));

           }
           j++;
          
           while(hours != -1)
           {
               worked[i] = hours;
               i++;
                hours = parseInt(prompt(" Number of hours worked for employee "+j+"? "));
               j++;
           }
          
          
           var payroll = "<table border=2px><tr><td style='width: 100px; text-align: center;'> Employee Number </td>";
           payroll=payroll + "<td style='width: 175px; text-align: center;'> Hours worked </td>";
           payroll=payroll + "<td style='width: 175px; text-align: center;'> Pay </td></tr>";
        
           for(var x=0; x<worked.length; x++)
           {
               var pay = 0;
               if(worked[x] >= 40)
                  pay = parseFloat((40 * hourly) + ((worked[x] - 40)*1.5 *hourly));
               
               else
                   pay = parseFloat(worked[x] * hourly);
      
               totalPay += pay;
               payroll =payroll + "<tr><td style='width: 100px;  text-align: center;'>" + (x+1) + " </td>";
               payroll =payroll + "<td style='width: 175px; text-align: center;'> " + worked[x] + " </td>";
               payroll =payroll +"<td style='width: 175px;text-align: center;'> $" + pay + " </td></tr>"
           }
  
           payroll += "</table>";
  
           document.getElementById("payroll").innerHTML = payroll;
           document.getElementById("total").innerHTML = "Total: $" + totalPay;
       }