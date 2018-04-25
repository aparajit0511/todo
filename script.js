var num=prompt("Enter the age");

if(num <= 18){
	console.log("Sorry FUCK OFF")

}

else if(num >18 && num <21)
{
	console.log("Come in . BUT you will not drink.")
}

else 
console.log("PARTY HARD MOFO");

// var count=5;

// while(count <= 50)
// {
// 	if(count % 5==0 && count % 3==0 ){
// 		console.log("Count is: " + count);
// 	}
	
// 	count++;
// }


function even(num)
{
	if(num%2==0)
		return true;
	else 
		return false;
}

even(4);
even(9);
even(12);
even(16);


function fact(num)
{
	if(num==0)
		return 1;

	var k=1;

	for(var x=1;x<=num;x++)
	{
		k=k*x;
	}

	return k;
}



function reverse(arr)
{
	for(var i=arr.length-1;i>=0;i--)
	{
		console.log(arr[i]);
	}
}


reverse([3,1,0,7]);


function uniform(arr)
{
	var x=arr[0];
	var f=0;

	for(var i=1;i<arr.length;i++)
	{
		if(x===arr[i])
		{
			f=1;

		}
		else
		{
			f=0;
			break;
		}
	}

	if(f==1)
		console.log("Is Uniform");
	else
		console.log("Not Uniform");
}






function sum(arr)
{
	var sum=0;

	for(var i=0;i<arr.length;i++)
	{
		sum+=arr[i];
	}

	console.log("Sum is :" + sum);
}

function tito()
{
	for(var i=0;i<movie.length;i++)
{
    if(movie[i].watched==true)
    {
        console.log("Has Watched " + movie[i].name + " - " movie[i].rating "stars");
    }
    else
    {
    	console.log("GO WATCH IT!!!");
    }
}
}


tito()


var movie=[
{
	name:"coco",
	rating:5,
	watched:true
},
{
	name:"avatar",
	rating:3.5,
	watched:false
},
{
	name:"Logan",
	rating:4,
	watched:true
}
];

