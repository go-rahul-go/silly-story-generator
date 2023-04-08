const stories=[
    "It was 94 fahrenheit outside, so Big Daddy went for a walk. When they got to the White House, they stared in horror for a few moments, then turned into a slug and crawled away. wer saw the whole thing, but was not surprised — Big Daddy weighs 300 pounds, and it was a hot day.",
    "It was 94 fahrenheit outside, so Willy the Goblin went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Willy the Goblin weighs 300 pounds, and it was a hot day.",
    "It was 94 fahrenheit outside, so Father Christmas went for a walk. When they got to Disneyland, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Father Christmas weighs 300 pounds, and it was a hot day."
]


const us=document.querySelector("#us");
const ind=document.querySelector("#ind");
const name=document.querySelector("#name");
const button=document.getElementById("button");
const storyDiv=document.querySelector(".story");
const para=document.createElement("p");

button.addEventListener("click",generateStory);



function generateStory()
{
    var index=Math.round(Math.random() * 2);
    storyDiv.append(para);
    if(ind.checked===true)
    {
        var text=stories[index].replaceAll("fahrenheit","celsius");
        if(name.value.length!=0)
        {
            // var text=text.replaceAll("Willy",name.value);
            // para.innerText=text;
            printStory(text,name.value,true)
        }
        else{
            printStory(text,false)
        }
        
    }
    else if(us.checked===true)
    {
        
        if(name.value.length!=0)
        {
        
            printStory(stories[index],name.value,true)
        }
        else{
            printStory(stories[index],false)
        }
        
    }
}

function printStory(text,name,replacetext)
{
    if(replacetext===true)
    {
        var text=text.replaceAll("Willy",name);
        para.innerText=text;
    }
    else
    {
        para.innerText=text;
    }
}