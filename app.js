(function(){
  
  let answerdisplay = document.querySelector('.answerdisplay');
  let keyspace = document.querySelectorAll('.btn');
  let clear = document.querySelector('.clearvalue');
  let equal = document.querySelector('.equal-key');
  
  //retrieve data from numbers that are clicked
  keyspace.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      answerdisplay.value += value;
    })
  });
  
  equal.addEventListener('click', function(e){
    if(answerdisplay.value === ''){
      answerdisplay.value = 'Please Enter a Value';
    } else {
      let answer = eval(answerdisplay.value);
      answerdisplay.value = answer;
    }
  })
  
  clear.addEventListener('click', function(e){
    answerdisplay.value = '';
  })
 
})();