var live, url, city, include, exclude, exclude2, not1, urlfin, req, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, finalreq;
function generate(){
    include = document.getElementById('include');
    city = document.getElementById('city');
    exclude = document.getElementById('exclude');
    exclude2 = '';
    not1 = document.getElementById('not1');
    not2 = document.getElementById('not2');
    check1 = document.getElementById('check1');
    check2 = document.getElementById('check2');
    check3 = document.getElementById('check3');
    check4 = document.getElementById('check4');
    check5 = document.getElementById('check5');
    check6 = document.getElementById('check6');
    check7 = document.getElementById('check7');
    check8 = document.getElementById('check8');
    check9 = document.getElementById('check9');
    check10 = document.getElementById('check10');
    check11 = document.getElementById('check11');
    req = '';
    url = '';
    if(include.checked){
        url +=  include.value;
    }
    if(city.value != ''){
        if(url != ''){
            url += '+';
        }
        url += city.value;
    }
    if(not1.checked){
        exclude2 += not1.value; 
    }
    if(not2.checked){
        exclude2 += '+' + not2.value; 
    }
    if(check1.checked){
        req += "bed+OR+beds";
    }
    if(check2.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'ICU';
    }
    if(check3.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'oxygen';
    }
    if(check4.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'remedesivir';
    }
    if(check5.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'ventilator+OR+ventilators';
    }
    if(check6.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'febiflu';
    }
    if(check7.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'favipiravir';
    }
    if(check8.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'tocilizumab';
    }
    if(check9.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'plasma';
    }
    if(check10.checked){
        if(req != ''){
            req += '+OR+';
        }
        req += 'tiffin+OR+tiffin+service';
    }
    if(check11.value != ''){
        if(req != ''){
            req += '+OR+';
        }
        req += check11.value;
    }
    if(req != ''){
        finalreq = '%28' + req + '%29';
    }
    if(finalreq != ''){
        if(url != ''){
            url += '+';
        }
        url += finalreq;
    }
    if(exclude.checked){
        if(url != ''){
            url += '+';
        }
        url += exclude.value;
    }
    if(not1.checked){
        if(url != ''){
            url += '+';
        }
        url += not1.value;
    }
    if(not2.checked){
        if(url != ''){
            url += '+';
        }
        url += not2.value;
    }
    if(not3.value != ''){
        if(url != ''){
            url += '+';
        }
        url += '-"' + not3.value + '"';
    }
    urlfin = 'https://twitter.com/search?q=' + url + "&f=live";
    window.open(
        urlfin, "_blank"
    );
}