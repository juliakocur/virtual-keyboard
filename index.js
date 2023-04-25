const BODY = document.querySelector('body');
function createBody() {
    BODY.innerHTML = `
    <div class="container">
        <div class="keyboard_wrapp">
            <div class="keyboard_keys">
                <div class="row">
                    <div class="keys double_key"><span class="double_key_span">~</span>&#96</div>
                    <div class="keys double_key"><span class="double_key_span">!</span>1</div>
                    <div class="keys double_key"><span class="double_key_span">@</span>2</div>
                    <div class="keys double_key"><span class="double_key_span">#</span>3</div>
                    <div class="keys double_key"><span class="double_key_span">$</span>4</div>
                    <div class="keys double_key"><span class="double_key_span">%</span>5</div>
                    <div class="keys double_key"><span class="double_key_span">:</span>6</div>
                    <div class="keys double_key"><span class="double_key_span">?</span>7</div>
                    <div class="keys double_key"><span class="double_key_span">*</span>8</div>
                    <div class="keys double_key"><span class="double_key_span">(</span>9</div>
                    <div class="keys double_key"><span class="double_key_span">)</span>0</div>
                    <div class="keys double_key"><span class="double_key_span">_</span>-</div>
                    <div class="keys double_key"><span class="double_key_span">+</span>=</div>
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
                    <div class="keys double_key"><span class="double_key_span">/</span>&#92</div>
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
                    <div class="keys">&#9650</div>
                    <div class="keys shift_key shift_right">Shift</div>
                </div>
                <div class="row">
                    <div class="keys ctrl_key ctrl_left">Ctrl</div>
                    <div class="keys win_key">Win</div>
                    <div class="keys alt_key alt_left">Alt</div>
                    <div class="keys space_key"></div>
                    <div class="keys alt_key alt_right">Alt</div>
                    <div class="keys ctrl_key ctrl_right">Ctrl</div>
                    <div class="keys">&#9668</div>
                    <div class="keys">&#9660</div>
                    <div class="keys">&#9658</div>
                </div>
            </div>
        </div>
        <input class="text" type="text">
    </div>
`
}

createBody()