function start() {
    const div = document.createElement('div');
    div.id = 'langos';
    div.style.display = 'grid';    
    div.style.gridTemplateColumns = '10% 30% 20% 30% 10%';
    div.style.textAlign = 'center';


    //Bal Oldali számláló:
    const plus1 = document.createElement('button');
    plus1.textContent = '+1';
    plus1.classList.add('plusminus');
    const minus1 = document.createElement('button');
    minus1.textContent = '-1';
    minus1.classList.add('plusminus');
    plus1.style.gridColumnStart = '1';
    minus1.style.gridColumnStart = '1';
    const counter1  = document.createElement('span');
    counter1.textContent = '0';
    counter1.classList.add('counter');
    counter1.style.fontSize = '80px';
    counter1.style.gridColumnStart = '2';
    
    
    //Jobb oldali számláló:
    const plus2 = document.createElement('button');
    plus2.textContent = '+1';
    plus2.classList.add('plusminus2');
    const minus2 = document.createElement('button');
    minus2.textContent = '-1';
    minus2.classList.add('plusminus2');
    plus2.style.gridColumnStart = '5';
    minus2.style.gridColumnStart = '5';
    const counter2  = document.createElement('span');
    counter2.style.gridColumnStart = '4';
    counter2.textContent = '0';
    counter2.classList.add('counter2');
    counter2.style.fontSize = '80px';
    
    
    const reset = document.createElement('button');
    reset.textContent = 'Reset';
    reset.classList.add('reset');   
    reset.style.gridColumnStart = '3';
    
    const magyar = document.createElement('button');
    magyar.textContent = 'Magyar';
    magyar.classList.add('magyar');   
    magyar.style.gridColumnStart = '3';

    const angol = document.createElement('button');
    angol.textContent = 'Angol';
    angol.classList.add('angol');   
    angol.style.gridColumnStart = '3';

    div.appendChild(plus1);
    div.appendChild(minus1);
    div.appendChild(counter1);
    div.appendChild(plus2);
    div.appendChild(minus2);
    div.appendChild(counter2);
    div.appendChild(reset);
    div.appendChild(magyar);
    div.appendChild(angol);
    
    
    document.body.appendChild(div);

    function gombok_kikapcs(disabled) {
        plus1.disabled = disabled;
        minus1.disabled = disabled;
        plus2.disabled = disabled;
        minus2.disabled = disabled;
        reset.disabled = disabled;
        magyar.disabled = disabled;
        angol.disabled = disabled;
    }

    function nyelvek() {
    let jelenleginyelv = 'magyar';

    magyar.addEventListener('click', () => {
        jelenleginyelv = 'magyar';
        magyar.style.backgroundColor = '#89CFF0';
        angol.style.backgroundColor = 'white';
    });

    angol.addEventListener('click', () => {
        jelenleginyelv = 'angol';
        angol.style.backgroundColor = '#89CFF0';
        magyar.style.backgroundColor = 'white';
    });

    const magyar_Ct = new Audio('magyar_Ct.mp3');
    const magyar_T = new Audio('magyar_T.mp3');
    const angol_Ct = new Audio('angol_Ct.mp3');
    const angol_T = new Audio('angol_T.mp3');

    plus1.addEventListener('click', () => {
        count++;
        counter1.textContent = count;
        gombok_kikapcs(true);

        let hang = jelenleginyelv === 'magyar' ? magyar_Ct : angol_Ct;
        hang.currentTime = 0;
        hang.play();
        hang.onended = () => gombok_kikapcs(false);
    });

    plus2.addEventListener('click', () => {
        count2++;
        counter2.textContent = count2;
        gombok_kikapcs(true);

        let hang = jelenleginyelv === 'magyar' ? magyar_T : angol_T;
        hang.currentTime = 0;
        hang.play();
        hang.onended = () => gombok_kikapcs(false);
    });
}


    let count = 0;
    //bal oldal
    
    minus1.addEventListener('click', () => {
        count--;
        counter1.textContent = count; 
    });
    reset.addEventListener('click', () => {
        count = 0;
        counter1.textContent = count;
    });

    //jobb oldal
    let count2 = 0;
    
    minus2.addEventListener('click', () => {
        count2--;
        counter2.textContent = count2;
    }); 
    reset.addEventListener('click', () => {
        count2 = 0;
        counter2.textContent = count2;
    });

    

    nyelvek()
}
