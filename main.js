/**
  * ќпредел¤ет возможные варианты игрового пол¤
  *
  * @var t            игрок
  * @var change       смена игрока
  * @var empty1       значение ¤чейки 1 игрового пол¤
  * @var empty2       значение ¤чейки 2 игрового пол¤
  * @var empty3       значение ¤чейки 3 игрового пол¤
  * @var empty4       значение ¤чейки 4 игрового пол¤
  * @var empty5       значение ¤чейки 5 игрового пол¤
  * @var empty6       значение ¤чейки 6 игрового пол¤
  * @var empty7       значение ¤чейки 7 игрового пол¤
  * @var empty8       значение ¤чейки 8 игрового пол¤
  * @var empty9       значение ¤чейки 9 игрового пол¤
  * @var whogoesnow   Чья сейчас очередь	
*/
function variables() {  
    t = 1;    
    change = 1;   
    empty1 = -1; 
    empty2 = -1; 
    empty3 = -1; 
    empty4 = -1; 
    empty5 = -1; 
    empty6 = -1; 
    empty7 = -1; 
    empty8 = -1; 
    empty9 = -1;  
    whogoesnow = "Turn: Player 1"; 
}; 

/**
  * определение услови¤ победы игрока
*/
function win() { 
    if (empty1==empty2 && empty2==empty3 && empty3==0 || 
        empty4==empty5 && empty5==empty6 && empty6==0 || 
        empty7==empty8 && empty8==empty9 && empty9==0 || 
        empty1==empty4 && empty4==empty7 && empty7==0 || 
        empty2==empty5 && empty5==empty8 && empty8==0 || 
        empty3==empty6 && empty6==empty9 && empty9==0 || 
        empty1==empty5 && empty5==empty9 && empty9==0 || 
        empty3==empty5 && empty5==empty7 && empty7==0) { 
        alert ("Player 1: YOU WON !!!"); 
        history.go(0) 
    }
    if (empty1==empty2 && empty2==empty3 && empty3==1 || 
        empty4==empty5 && empty5==empty6 && empty6==1 ||  
        empty2==empty5 && empty5==empty8 && empty8==1 || 
        empty3==empty6 && empty6==empty9 && empty9==1 || 
        empty1==empty5 && empty5==empty9 && empty9==1 || 
        empty3==empty5 && empty5==empty7 && empty7==1) { 
        alert ("Player 2: YOU WON !!!"); 
        history.go(0) 
};
/**
  * смена игрока
  * если ходил первый игрок, то устанавливаетс¤ новое значение свойства
  * иначе возращаетс¤ исходное значение
  *
  * @param t Текущий игрок
  * @return t   возвращает номер игрока	
*/
function turnchange(t) {
    if (change == 1) { 
        if (t == 0){ 
            t = 1; 
            whogoesnow = "Turn: Player " + 1; 
        } else { 
            t = 0; 
            whogoesnow = "Turn: Player " + 2; 
        }   
    } else { 
        t = t;  
    } 
    change = 1; 
    return (t); 
};
/**
  * измение ¤чеек игрового пол¤ 
  *
  * @return xo  результат ¤чейки	
*/
function changing(clicked) {
    if (clicked == 1) { 
        spot = empty1;
    } 
    if (clicked == 2) { 
        spot = empty2;
    } 
    if (clicked == 3) { 
        spot = empty3;
    } 
    if (clicked == 4) { 
        spot = empty4; 
    } 
    if (clicked == 5) { 
        spot = empty5;
    } 
    if (clicked == 6) { 
        spot = empty6;
    } 
    if (clicked == 7) { 
        spot = empty7;
    } 
    if (clicked == 8) { 
        spot = empty8;
    } 
    if (clicked == 9) { 
        spot = empty9;
    } 
    if (spot == -1) { 
        if (t == 0) { 
            xo = " O "; 
            spot = 0;
        } else { 
            xo = " X "; 
            spot = 1;
        }   

    if (clicked == 1) { 
        spot = empty1;
    } 
    if (clicked == 2) { 
        spot = empty2;
    } 
    if (clicked == 3) { 
        spot = empty3;
    }
    if (clicked == 4) { 
        spot = empty4;
    } 
    if (clicked == 5) { 
        spot = empty5;
    } 
    if (clicked == 6) { 
        spot = empty6;
    } 
    if (clicked == 7) {
        spot = empty7;
    } 
    if (clicked == 8) {
        spot = empty8;
    } 
    if (clicked == 9) { 
        spot = empty9;
    } 
    if (spot == -1) {
        if (t == 0) { 
            xo = " O ";
            spot = 0; 
        } else { 
            xo = " X "; 
            spot = 1; 
        } 
     } 
    if (clicked == 1) { 
        empty1 = spot;
    } 
    if (clicked == 2) { 
        empty2 = spot;
    } 
    if (clicked == 3) { 
        empty3 = spot;
    } 
    if (clicked == 4) { 
        empty4 = spot;
    } 
    if (clicked == 5) { 
        empty5 = spot;
    } 
    if (clicked == 6) { 
        empty6 = spot;
    } 
    if (clicked == 7) { 
        empty7 = spot;
    } 
    if (clicked == 8) { 
        empty8 = spot;
    } 
    if (clicked == 9) { 
        empty9 = spot;
    }  
    if (spot == 0) { 
        xo = " O ";
    } 
    if (spot == 1) { 
        xo = " X ";
    } 
    change = 0;
    return (xo); 
}; 

/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ¤чейку в процессе игры	
*/
function change_b1(form) {  
    clicked = 1; 
    changing(clicked); 
    t = turnchange(t);   
    form.b1.value = xo; 
    form.whoseturn.value = whogoesnow; 
    win(); 
    return; 
}; 
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ¤чейку в процессе игры	
*/
function change_b2(form) { 
    clicked = 2; 
    changing(clicked); 
    form.b2.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow; 
    win(); 
    return; 
}; 
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ¤чейку в процессе игры	
*/ 
function change_b3(form) { 
    clicked = 3; 
    changing(clicked); 
    form.b3.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow;
    win(); 
    return; 
}; 
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ¤чейку в процессе игры	
*/ 
function change_b4(form) { 
    clicked = 4; 
    changing(clicked); 
    form.b4.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow; 
    win(); 
    return; 
}; 
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ¤чейку в процессе игры	
*/  
function change_b5(form) { 
    clicked = 5; 
    changing(clicked); 
    form.b5.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow;
    win(); 
    return; 
}; 
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ¤чейку в процессе игры	
*//  
function change_b6(form) { 
    clicked = 6; 
    changing(clicked); 
    form.b6.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow; 
    win(); 
    return; 
}; 
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ячейку в процессе игры	
*/  
function change_b7(form) { 
    clicked = 7; 
    changing(clicked); 
    form.b7.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow; 
    win(); 
    return; 
};
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ячейку в процессе игры	
*/
function change_b8(form) { 
    clicked = 8; 
    changing(clicked); 
    form.b8.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow; 
    win(); 
    return; 
}; 
/**
  * перерисовка игровой ячейки
  *
  * @param form форма с игровым полем
  *
  * @return  изменённую ¤чейку в процессе игры	
*/  
function change_b9(form) { 
    clicked = 9; 
    changing(clicked); 
    form.b9.value = xo; 
    t = turnchange(t); 
    form.whoseturn.value = whogoesnow; 
    win(); 
    return; 
};