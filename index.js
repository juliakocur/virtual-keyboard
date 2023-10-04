const BODY = document.querySelector('body');

function createBody() {
    BODY.innerHTML = `
    <div class="container">
        <div class="keyboard_wrapp">
            <div class="keyboard_keys">
                <div class="row">
                    <div class="keys double_key back_quote"><span class="double_key_span">~</span>&#96</div>
                    <div class="keys double_key one"><span class="double_key_span">!</span>1</div>
                    <div class="keys double_key two"><span class="double_key_span">@</span>2</div>
                    <div class="keys double_key three"><span class="double_key_span">#</span>3</div>
                    <div class="keys double_key four"><span class="double_key_span">$</span>4</div>
                    <div class="keys double_key five"><span class="double_key_span">%</span>5</div>
                    <div class="keys double_key six"><span class="double_key_span">:</span>6</div>
                    <div class="keys double_key seven"><span class="double_key_span">?</span>7</div>
                    <div class="keys double_key eight"><span class="double_key_span">*</span>8</div>
                    <div class="keys double_key nine"><span class="double_key_span">(</span>9</div>
                    <div class="keys double_key zero"><span class="double_key_span">)</span>0</div>
                    <div class="keys double_key minus"><span class="double_key_span">_</span>-</div>
                    <div class="keys double_key equal"><span class="double_key_span">+</span>=</div>
                    <div class="keys backspace_key">Backspace</div>
                </div>
                <div class="row">
                    <div class="keys tab_key">Tab</div>
                    <div class="keys">Q</div>
                    <div class="keys">W</div>
                    <div class="keys">E</div>
                    <div class="keys">R</div>
                    <div class="keys">T</div>
                    <div class="keys">Y</div>
                    <div class="keys">U</div>
                    <div class="keys">I</div>
                    <div class="keys">O</div>
                    <div class="keys">P</div>
                    <div class="keys">[</div>
                    <div class="keys">]</div>
                    <div class="keys del_key">DEL</div>
                </div>
                <div class="row">
                    <div class="keys caps_lock_key">Caps Lock</div>
                    <div class="keys">A</div>
                    <div class="keys">S</div>
                    <div class="keys">D</div>
                    <div class="keys">F</div>
                    <div class="keys">G</div>
                    <div class="keys">H</div>
                    <div class="keys">J</div>
                    <div class="keys">K</div>
                    <div class="keys">L</div>
                    <div class="keys">;</div>
                    <div class="keys">'</div>
                    <div class="keys enter_key">ENTER</div>
                </div>
                <div class="row">
                    <div class="keys shift_key shift_left">Shift</div>
                    <div class="keys">&#92</div>
                    <div class="keys">Z</div>
                    <div class="keys">X</div>
                    <div class="keys">C</div>
                    <div class="keys">V</div>
                    <div class="keys">B</div>
                    <div class="keys">N</div>
                    <div class="keys">M</div>
                    <div class="keys">.</div>
                    <div class="keys">,</div>
                    <div class="keys">/</div>
                    <div class="keys arrow_up">&#8593</div>
                    <div class="keys shift_key shift_right">Shift</div>
                </div>
                <div class="row">
                    <div class="keys ctrl_key ctrl_left">Ctrl</div>
                    <div class="keys win_key">Win</div>
                    <div class="keys alt_key alt_left">Alt</div>
                    <div class="keys space_key"></div>
                    <div class="keys alt_key alt_right">Alt</div>
                    <div class="keys ctrl_key ctrl_right">Ctrl</div>
                    <div class="keys arrow_left">&#8592</div>
                    <div class="keys arrow_down">&#8595</div>
                    <div class="keys arrow_right">&#8594</div>
                </div>
            </div>
        </div>
        <textarea class="text" type="text"></textarea>
        <p class="information">Клавиатура выполнена в ОС Windows<br>смена языка не реализована</p>
    </div>
`
}

createBody();

const keys = document.querySelectorAll('.keys');
const space = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLock = document.querySelector('.caps_lock_key');
const toggle = document.querySelector('.toggle_key');
const text = document.querySelector('.text');
const wrapp = document.querySelector('.keyboard_wrapp');
const tab = document.querySelector('.tab_key');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const backQuote = document.querySelector('.back_quote');
const equal = document.querySelector('.equal');
const minus = document.querySelector('.minus');
const altLeft = document.querySelector('.alt_left');
const altRight = document.querySelector('.alt_right');
const del = document.querySelector('.del_key');
const arrowDown = document.querySelector('.arrow_down');
const arrowUp = document.querySelector('.arrow_up');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const enter = document.querySelector('.enter_key');
const ctrlLeft = document.querySelector('.ctrl_left');
const ctrlRight = document.querySelector('.ctrl_right');
const win = document.querySelector('.win_key');

//add attribute lowerCase for keys
for (let i=0;i<keys.length;i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCase', keys[i].innerText.toLowerCase());
}


//add class _active for pressed button
window.addEventListener('keydown',  (e) => {
  text.focus();
  
    for(let i=0; i<keys.length; i++) {
      if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCase')) {
        keys[i].classList.add('_active');
      }  
      if(e.code == 'CapsLock') {
        capsLock.classList.toggle('_active');
        break;
      }
      if (e.code == 'Enter') {
        enter.classList.add('_active');
      }
      if (e.code == 'Tab') {
        tab.classList.add('_active');
        setTimeout(() => {
          tab.classList.remove('_active');
          tab.classList.add('_remove');
      },200)
        text.value = text.value + `   `;
        e.preventDefault();
        break;
      }
      if (e.code == 'ShiftLeft') {
        shiftRight.classList.remove('_active');
      } 
      if (e.code == 'ShiftRight') {
        shiftLeft.classList.remove('_active')
      }
      if (e.code == 'AltLeft') {
        altRight.classList.remove('_active');
      } 
      if (e.code == 'AltRight') {
        altLeft.classList.remove('_active')
      }
      if (e.code == 'Space') {
        space.classList.add('_active')
      }
      if (e.code == 'Digit1') {
        one.classList.add('_active')
      }
      if(e.code == 'Digit2') {
        two.classList.add('_active')
      }
      if (e.code == 'Digit3') {
        three.classList.add('_active')
      }
      if (e.code == 'Digit4') {
        four.classList.add('_active')
      }
      if (e.code == 'Digit5') {
        five.classList.add('_active')
      }
      if (e.code == 'Digit6') {
        six.classList.add('_active')
      }
      if (e.code == 'Digit7') {
        seven.classList.add('_active')
      }
      if (e.code == 'Digit8') {
        eight.classList.add('_active')
      }
      if (e.code == 'Digit9') {
        nine.classList.add('_active')
      }
      if (e.code == 'Digit0') {
        zero.classList.add('_active')
      }
      if (e.code == 'Backquote') {
        backQuote.classList.add('_active')
      }
      if (e.code == 'Equal') {
        equal.classList.add('_active')
      }
      if (e.code == 'Minus') {
        minus.classList.add('_active')
      }
      if (e.code == 'ControlLeft') {
        ctrlLeft.classList.add('_active')
      }
      if (e.code == 'ControlRight') {
        ctrlRight.classList.add('_active')
      }
      if (e.code == 'MetaLeft') {
        win.classList.add('_active')
      }
      if (e.code == 'Delete') {
        del.classList.add('_active');
        let c = text.value.slice(0, -1); 
        text.value = c;
        break;
      }
      if (e.code == 'ArrowUp') {
        e.preventDefault();
        arrowUp.classList.add('_active');
        let arrowText = arrowUp.textContent;
        text.value = text.value + arrowText;
        break;
      }
      if (e.code == 'ArrowDown') {
        e.preventDefault();
        arrowDown.classList.add('_active');
        let arrowText = arrowDown.textContent;
        text.value = text.value + arrowText;
        break;
      }
      if (e.code == 'ArrowLeft') {
        e.preventDefault();
        arrowLeft.classList.add('_active');
        let arrowText = arrowLeft.textContent;
        text.value = text.value + arrowText;
        break;
      }
      if (e.code == 'ArrowRight') {
        e.preventDefault();
        arrowRight.classList.add('_active');
        let arrowText = arrowRight.textContent;
        text.value = text.value + arrowText;
        break;
      }
    }
})



//remove class _active for pressed button
window.addEventListener('keyup', (e) => {
  text.focus();
    for(let i=0; i<keys.length; i++) {
      if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCase')) {
        keys[i].classList.remove('_active');
        keys[i].classList.add('_remove');
        setTimeout(() => {
          keys[i].classList.remove('_remove');
      },200)
      } 
      if (e.code == 'Space') {
        space.classList.remove('_active');
        space.classList.add('_remove');
      }
      if (e.code == 'Enter') {
        enter.classList.remove('_active');
        enter.classList.add('_remove');
      }
      if (e.code == 'ShiftLeft') {
        shiftRight.classList.remove('_active');
        shiftRight.classList.remove('_remove');
      }
      if (e.code == 'ShiftRight') {
        shiftLeft.classList.remove('_active');
        shiftLeft.classList.remove('_remove');
      }
      if (e.code == 'AltLeft') {
        altRight.classList.remove('_active');
        altRight.classList.remove('_remove');
        e.preventDefault();
      }
      if (e.code == 'AltRight') {
        altLeft.classList.remove('_active');
        altLeft.classList.remove('_remove');
        e.preventDefault();
      }
      if (e.code == 'Digit1') {
        one.classList.remove('_active');
        one.classList.add('_remove');
      }
      if (e.code == 'Digit2') {
        two.classList.remove('_active');
        two.classList.add('_remove')
      }
      if (e.code == 'Digit3') {
        three.classList.remove('_active');
        three.classList.add('_remove')
      }
      if (e.code == 'Digit4') {
        four.classList.remove('_active');
        four.classList.add('_remove');
      }
      if (e.code == 'Digit5') {
        five.classList.remove('_active');
        five.classList.add('_remove');
      }
      if (e.code == 'Digit6') {
        six.classList.remove('_active');
        five.classList.add('_remove');
      }
      if (e.code == 'Digit7') {
        seven.classList.remove('_active');
        seven.classList.add('_remove');
      }
      if (e.code == 'Digit8') {
        eight.classList.remove('_active');
        eight.classList.add('_remove')
      }
      if (e.code == 'Digit9') {
        nine.classList.remove('_active');
        nine.classList.add('_remove')
      }
      if (e.code == 'Digit0') {
        zero.classList.remove('_active');
        zero.classList.add('_remove');
      }
      if (e.code == 'Backquote') {
        backQuote.classList.remove('_active');
        backQuote.classList.add('_remove');
      }
      if (e.code == 'Equal') {
        equal.classList.remove('_active');
        equal.classList.add('_remove');
      }
      if (e.code == 'Minus') {
        minus.classList.remove('_active');
        minus.classList.add('_remove');
      }
      if (e.code == 'Delete') {
        del.classList.remove('_active');
        del.classList.add('_remove');
      }
      if (e.code == 'ControlLeft') {
        ctrlLeft.classList.remove('_active');
        ctrlLeft.classList.add('_remove');
      }
      if (e.code == 'ControlRight') {
        ctrlRight.classList.remove('_active');
        ctrlRight.classList.add('_remove');
      }
      if (e.code == 'MetaLeft') {
        win.classList.remove('_active');
        win.classList.add('_remove');
      }
      if (e.code == 'ArrowLeft') {
        arrowLeft.classList.remove('_active');
        arrowLeft.classList.add('_remove');
      }
      if (e.code == 'ArrowRight') {
        arrowRight.classList.remove('_active');
        arrowRight.classList.add('_remove');
      }
      if (e.code == 'ArrowUp') {
        arrowUp.classList.remove('_active');
        arrowUp.classList.add('_remove');
      }
      if (e.code == 'ArrowDown') {
        arrowDown.classList.remove('_active');
        arrowDown.classList.add('_remove');
      }
    }
})

wrapp.addEventListener('click', (e) => {
  text.focus();
  if (e.target.textContent == 'Backspace' || e.target.textContent == 'DEL' ) {
    text.value = text.value.slice(0, -1);
  } 
  else if (e.target.textContent == 'Ctrl' || e.target.textContent == 'Alt' || e.target.textContent == 'Win') {
  }
  else if (e.target.textContent == 'Tab') {
    text.value = text.value+'    ';
  }
  else if (e.target.textContent == 'ENTER') {
    text.value = text.value+'\n';
  }
  else if (e.target.textContent == '') {
    text.value = text.value+' ';
  }
  else if (e.target.textContent == '!1') {
    text.value = text.value+1;
  }
  else if (e.target.textContent == '@2') {
    text.value = text.value+2;
  }
  else if (e.target.textContent == '#3') {
    text.value = text.value+3;
  }
  else if (e.target.textContent == '$4') {
    text.value = text.value+4;
  }
  else if (e.target.textContent == '%5') {
    text.value = text.value+5;
  }
  else if (e.target.textContent == ':6') {
    text.value = text.value+6;
  }
  else if (e.target.textContent == '?7') {
    text.value = text.value+7;
  }
  else if (e.target.textContent == '*8') {
    text.value = text.value+8;
  }
  else if (e.target.textContent == '(9') {
    text.value = text.value+9;
  }
  else if (e.target.textContent == ')0') {
    text.value = text.value+0;
  }
  else if (e.target.textContent == '~`') {
    text.value = text.value+'`';
  }
  else if (e.target.textContent == '_-') {
    text.value = text.value+'-';
  }
  else if (e.target.textContent == '+=') {
    text.value = text.value+'=';
  }
  else if (e.target.className == 'row'){
    console.log(e.target)
  }
  else if (e.target.className == 'keys shift_key shift_left'|| e.target.className == 'keys shift_key shift_left _remove') {
    shiftLeft.classList.add('_active');
    shiftLeft.classList.remove('_remove');
  }
  else if (e.target.className == 'keys shift_key shift_left _active') {
    shiftLeft.classList.remove('_active');
    shiftLeft.classList.add('_remove');
  }
  else if (e.target.className == 'keys shift_key shift_right'|| e.target.className == 'keys shift_key shift_right _remove') {
    shiftRight.classList.add('_active');
    shiftRight.classList.remove('_remove');
  }
  else if (e.target.className == 'keys shift_key shift_right _active') {
    shiftRight.classList.remove('_active');
    shiftRight.classList.add('_remove');
  }
  else if (shiftRight.className == 'keys shift_key shift_right _active') {
    text.value = text.value+e.target.textContent.toUpperCase();
  }
  else if (shiftLeft.className == 'keys shift_key shift_left _active') {
    text.value = text.value+e.target.textContent.toUpperCase();
  }
  else if (e.target.className == 'keys caps_lock_key'||e.target.className == 'keys caps_lock_key _remove'){
    capsLock.classList.add('_active');
    capsLock.classList.remove('_remove');
  }
  else if (e.target.className == 'keys caps_lock_key _active') {
    capsLock.classList.remove('_active');
    capsLock.classList.add('_remove');
  }
  else if (capsLock.className == 'keys caps_lock_key _active') {
    text.value = text.value+e.target.textContent.toUpperCase();
  }

  else if (e.target.className == 'double_key_span') {
    console.log(e.target)
  } else {
    text.value = text.value+e.target.textContent.toLowerCase();
}
})


