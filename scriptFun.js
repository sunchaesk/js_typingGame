
var words = ['the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'I', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'hot', 'but', 'some', 'what', 'there', 'we', 'can', 'out', 'other', 'were', 'all', 'your', 'when', 'up', 'use', 'word', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 'then', 'them', 'would', 'write', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did', 'my', 'sound', 'no', 'most', 'number', 'who', 'over', 'know', 'water', 'than', 'call', 'first', 'people', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'much', 'great', 'think', 'say', 'help', 'low', 'line', 'before', 'turn', 'cause', 'same', 'mean', 'differ', 'move', 'right', 'boy', 'old', 'too', 'does', 'tell', 'sentence', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'thought', 'let', 'keep', 'eye', 'never', 'last', 'door', 'between', 'city', 'tree', 'cross', 'since', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', "don't", 'while', 'press', 'close', 'night', 'real', 'life', 'few', 'stop', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper', 'often', 'always', 'music', 'those', 'both', 'mark', 'book', 'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'group', 'carry', 'took', 'rain', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'north', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'state', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'farm', 'top', 'whole', 'king', 'size', 'heard', 'best', 'hour', 'better', 'TRUE', 'during', 'hundred', 'am', 'remember', 'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'five', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'science', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'fall', 'power', 'town', 'fine', 'certain', 'fly', 'unit', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'sleep', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'lot', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'yet', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'age', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'yes', 'hot', 'miss', 'brought', 'heat', 'snow', 'bed', 'bring', 'sit', 'perhaps', 'fill', 'east', 'weight', 'language', 'among'];
var prompt = '';
var numberOfWords = 0;
var leng = 0;

function capitalizeString(s){
    //capitalize the received string
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function createPrompt(nOW) {
    var lst = [];
    leng = nOW;
    //get random index (loop it the leng times), set it as var word, and then push it to lst
    for (i = 0; i < leng; i++) {
         var word = words[Math.floor(Math.random() * (words.length))];
         lst.push(word);
    }
    //check if it's capitalize mode and capitalize stuff
    if (checkedCapitalizeMode == true){
        for (i=0;i < lst.length; i++){
             var ifCapitalize = Math.floor(Math.random() * 2);
             if (ifCapitalize == 0){
                 lst[i] = capitalizeString(lst[i])
             }
        }
    }
    //changing the normal list strings into the spongebob format
    if (checkedSpongebobMode == true){
        var lstTemp;
        for (i=0;i<lst.length;i++){
            var word = lst[i]
            var wordTemp;
            for(j=0;j<word.length;j++){
                if(j % 2 == 1){
                    wordTemp += word[j].toUpperCase();
                } else {
                    wordTemp += word[j];
                }
            }
            lstTemp.push(wordTemp);
        }
        lst = lstTemp.slice();
    }
    prompt = lst.join(' ');
    document.getElementById('textOof').innerHTML = prompt;
}

function spellCheck() {
    timerStart();
    var txt = document.getElementById('txt-area').value;
    if (prompt.startsWith(txt)) {
        if (prompt == txt) {
            alert('This is your time: ' + String(leng) + ' words in ' + document.getElementById('stopwatch').textContent + ' time');
            timerReset();
            document.getElementById('txt-area').value = '';
            createPrompt(leng);
        }
        document.getElementById('txt-area').style.borderColor = 'green';
    } else {
        document.getElementById('txt-area').style.borderColor = 'red';
    }
    if (txt == ''){
        document.getElementById('txt-area').style.borderColor = 'orange';
    }
}

function toggleTextArea(s) {
    var x = document.getElementById('textArea');
    if (s == 'true'){
        x.style.display = 'block';
    } else if(s == 'false') {
        x.style.display = 'none';
    }
}

var checkedCapitalizeMode = false;
var checkedSpongebobMode = false;
var checkedNormalMode = false;
function validateForm(){
    numberOfWords = document.getElementById('numberOfWords').value;
    var selectedTypingMode = document.querySelector('input[name="typingMode"]:checked').value;
    if (selectedTypingMode == 'normal'){
        checkedCapitalizeMode = false;
        checkedNormalMode = true;
        checkedSpongebobMode = false;
    } else if (selectedTypingMode == 'spongebob'){
        checkedCapitalizeMode = false;
        checkedNormalMode = false;
        checkedSpongebobMode = true;
    } else {
        checkedCapitalizeMode = true;
        checkedNormalMode = false;
        checkedSpongebobMode = false;
    }

    toggleTextArea('true');
    createPrompt(numberOfWords);
}


//This is where the stopwatch functions start
//Stopwatch var declaration
var ms = 0, s = 0, m = 0;
var timer = false;

var stopwatchEl = document.getElementById('stopwatch');

function timerStart(){
    if(timer == false){
        timer = setInterval(timerRun, 10);
    }
}

function timerRun(){
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;
    if (ms == 100){
        ms = 0;
        s++;
    }
    if (s == 60){
        s = 0;
        m++;
    }
}

function timerReset(){
    clearInterval(timer);
    timer = false;
    ms = 0;
    s = 0;
    m = 0;
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}