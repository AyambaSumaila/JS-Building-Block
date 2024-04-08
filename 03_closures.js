function counter(){
    let n=0;
    return {
        count: function(){return n++;},
        reset: function(){n = 0;}
    };
}                                                       

let c=counter(), d=counter();
c.count();
d.count();
c.reset();
