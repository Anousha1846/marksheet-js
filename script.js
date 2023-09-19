var maxMarks = 300;

document.write(
    "<table border = '1'>"+
"<tr>"+
"<th>"+ "NAME"+"</th>"+
"<th>"+"ENGLISH" +"</th>"+
"<th>"+"MATHS" +"</th>"+
"<th>"+"URDU" +"</th>"+
"<th>"+ "TOTAL" +"</th>"+
"<th>"+ "PERCENTAGE" +"</th>"+
"</tr>"+

// second row

"<tr>"+  
 "<td>"+"Ali"   +"</td>"+
 "<td>"+  "80" +"</td>"+
 "<td>"+  "80" +"</td>"+
 "<td>"+ "80"  +"</td>"+
 "<td>"+ "240"  +"</td>"+
 "<td>"+ 240/maxMarks*100+"%" +"</td>"+
"</tr>"+

"<tr>"+  
 "<td>"+"Sara"   +"</td>"+
 "<td>"+  "75" +"</td>"+
 "<td>"+  "70" +"</td>"+
 "<td>"+ "70"  +"</td>"+
 "<td>"+ "215"  +"</td>"+
 "<td>"+Math.round( 215/maxMarks*100)+"%" +"</td>"+
"</tr>"+

"<tr>"+  
 "<td>"+"Faiz"   +"</td>"+
 "<td>"+  "65" +"</td>"+
 "<td>"+  "60" +"</td>"+
 "<td>"+ "65"  +"</td>"+
 "<td>"+ "185"  +"</td>"+
 "<td>"+Math.round( 185/maxMarks*100)+"%" +"</td>"+
"</tr>"+

"<tr>"+  
 "<td>"+"Noor"   +"</td>"+
 "<td>"+  "85" +"</td>"+
 "<td>"+  "85" +"</td>"+
 "<td>"+ "85"  +"</td>"+
 "<td>"+ "255"  +"</td>"+
 "<td>"+Math.round( 255/maxMarks*100)+"%" +"</td>"+
"</tr>"+

"<tr>"+  
 "<td>"+"Zain"   +"</td>"+
 "<td>"+  "90" +"</td>"+
 "<td>"+  "85" +"</td>"+
 "<td>"+ "91"  +"</td>"+
 "<td>"+ "266"  +"</td>"+
 "<td>"+Math.round( 266/maxMarks*100)+"%" +"</td>"+
"</tr>"+

"<tr>"+  
 "<td>"+"Ronaq"   +"</td>"+
 "<td>"+  "80" +"</td>"+
 "<td>"+  "75" +"</td>"+
 "<td>"+ "61"  +"</td>"+
 "<td>"+ "186"  +"</td>"+
 "<td>"+Math.round( 216/maxMarks*100)+"%" +"</td>"+
"</tr>"+

    "<table>"
)