
var clicks=0;
async function redir(n)
{
    location.href="antonyms.html";
    localStorage.setItem("cl", n);

}

function showAntonyms()
{
    var num=localStorage.getItem("cl");
    
    
    document.getElementById("headbar").innerText="CLASS "+num;
    
    if(num==1)
    {
        read_file("classone.txt");
    }
    else if(num==2)
    {
        read_file("classtwo.txt");
    }
    else if(num==3)
    {
        read_file("classthree.txt");
    }
    else if(num==4)
    {
        read_file("classfour.txt");
    }
    else if(num==5)
    {
        read_file("classfive.txt");
    }else if(num==6)
    {
        read_file("classsix.txt");
    }
    else if(num==7)
    {
        read_file("classseven.txt");
    }
    else if(num==8)
    {
        read_file("classeight.txt");
    }
}


function exitClass()
{
    localStorage.clear();
    location.href="index.html";
}

var num_clicks=1;
async function read_file(fn){

    var index=0;    
    let response = await fetch(fn);
    let data = await response.text();
    let data_arr=data.split("~")
    //console.log("Data arr: "+data_arr);
    generate_equation(data_arr, num_clicks)

    
    
}


async function generate_equation(arr_data, numberofClicks){
    
    if(numberofClicks>0){

            if(numberofClicks<arr_data.length){
                days_data=arr_data[numberofClicks-1]
                lst_data=days_data.split("|")
                //console.log("Last: "+lst_data);
                var str, i=1;
                document.getElementById("day").innerText="DAY "+numberofClicks;
                lst_data.forEach(function(slide) {
                ele=slide.split("-")  
                str=`<p>${ele[0]} <hr> ${ele[1]}</p>`;
                document.getElementById(`slideContainer${i}`).innerHTML = str;
                i++;
                });

           
                
            
            next.addEventListener("click", function(){
           
                numberofClicks=numberofClicks+1;
                generate_equation(arr_data, numberofClicks)
            });

            prev.addEventListener("click", function(){
                numberofClicks=numberofClicks-1
                generate_equation(arr_data, numberofClicks)
            }) ;
            
            }
            else{

                numberofClicks=arr_data.length

            }


            }

    else{
    numberofClicks=1

    }
    }
    
    

    


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//read_file()



