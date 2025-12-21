    let words = ["when", "you", "practice", "typing", "every", "day", "your", "fingers", "learn", "where", "each", "key", "is", "located", "without", "looking", "down", "at", "the",
     "keyboard", "this", "muscle", "memory", "helps", "you", "type", "faster", "and", "with", "fewer", "mistakes", "over", "time"];

    let text = words.join(' ');
    let allspans = [];
    let spanIndex =0;
   

    function display(){
        document.querySelector('.input-js').focus();
        document.querySelector('.display').innerHTML = ''; 
       testComplete = false;
        allspans = []
        spanIndex = 0
        wordIndex = 0
        characterIndex = 0
        counter = 0
       totalKeystrokes = 0    
       startTime = null  
  for(let i=0;i<words.length;i++){
    for( let j=0;j<words[i].length;j++){
        let span = document.createElement('span');
        span.classList.add('untyped');
        span.textContent =words[i][j];
        allspans.push(span);
        document.querySelector('.display').appendChild(span);
        
}    if (i < words.length - 1) {
        let spaceSpan = document.createElement('span');
        spaceSpan.classList.add('untyped');
        spaceSpan.textContent = ' ';
        allspans.push(spaceSpan);
        document.querySelector('.display').appendChild(spaceSpan);
}

  
    }
    
      allspans[0].classList.add('cursor');

    }
    function clearScreen(){
       testComplete = false;
        allspans = []
        spanIndex = 0
        wordIndex = 0
        characterIndex = 0
        counter = 0
        totalKeystrokes = 0    
       startTime = null  
        document.querySelector('.display').innerHTML = '';
        document.querySelector('.result-js').style.display = 'none';
        document.querySelector('.timetaken').innerHTML = '';
        document.querySelector('.Accuracy').innerHTML = '';
        document.querySelector('.wpm').innerHTML = '';
    }
    let wordIndex = 0;
    let characterIndex =0;
    let counter =0;
    let totalKeystrokes =0;
    let startTime = null;
    let testComplete = false;


    document.addEventListener('keydown', function(event){

       if(startTime === null) {
        startTime = Date.now();  
    }
        if(event.key!=='Backspace'){
        totalKeystrokes +=1;}

if(event.key === 'Backspace') {
  
    if(spanIndex > 0) {
        allspans[spanIndex].classList.remove('cursor');
         if(allspans[spanIndex - 1].classList.contains('correct')) {
            counter -= 1;
        }
        spanIndex -= 1;

        
        if(allspans[spanIndex].textContent === ' ') {
            wordIndex -= 1;
            characterIndex = words[wordIndex].length;
        } else {
            characterIndex -= 1;
        }
        
        if(allspans[spanIndex].classList.contains('correct')) {
            allspans[spanIndex].classList.replace('correct','untyped');
        } else if(allspans[spanIndex].classList.contains('wrong')) {
            allspans[spanIndex].classList.replace('wrong','untyped');
        }
        
        allspans[spanIndex].classList.add('cursor');
    }
    return;
}


if(event.key === ' ') {
    if(characterIndex > 0 && wordIndex < words.length - 1) {
        allspans[spanIndex].classList.remove('cursor');
        if(characterIndex < words[wordIndex].length) {
            let tempSpanIndex = spanIndex;
            for(let i = characterIndex; i < words[wordIndex].length; i++) {
                allspans[tempSpanIndex].classList.replace('untyped', 'wrong');
                tempSpanIndex++;
            }
            spanIndex = tempSpanIndex;
        }
        allspans[spanIndex].classList.replace('untyped', 'correct');
        wordIndex += 1;
        characterIndex = 0;
        spanIndex += 1;
        if(spanIndex < allspans.length) {
            allspans[spanIndex].classList.add('cursor');
        }
    }
    return;
}

if(characterIndex < words[wordIndex].length && spanIndex < allspans.length) {
    
if(words[wordIndex][characterIndex] === event.key) {
    allspans[spanIndex].classList.replace('untyped','correct');
    counter += 1;
    } else {
        if(event.key.length === 1) {
            allspans[spanIndex].classList.replace('untyped','wrong');
   } else {
            return;
        }
    }
    
    allspans[spanIndex].classList.remove('cursor');
    characterIndex += 1;
    spanIndex += 1;
    
    if(spanIndex < allspans.length) {

        allspans[spanIndex].classList.add('cursor');
      }

      console.log(totalKeystrokes);
}

if(spanIndex >= allspans.length && startTime !== null&&!testComplete) {
    testComplete = true;
    let accuracy = (counter / totalKeystrokes) * 100;
    let timetaken = (Date.now() - startTime) / 1000;
    let wpm = (totalKeystrokes / 5) / (timetaken / 60);
        document.querySelector('.result-js').style.display = 'block'; 
   document.querySelector('.timetaken').innerHTML=`Time : ${timetaken.toFixed(2)}`;
document.querySelector('.Accuracy').innerHTML=`Accuracy : ${accuracy.toFixed(2)}%`;
document.querySelector('.wpm').innerHTML=`WPM : ${wpm.toFixed(2)}`;}
}

)
