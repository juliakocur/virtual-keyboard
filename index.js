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
            </div>
        </div>
        <input class="text" type="text">
    </div>
    `
}

createBody()