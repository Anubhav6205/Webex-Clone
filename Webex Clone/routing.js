const changeSRC=(src)=>{
    document.getElementById('change-frame').src=src;

}

document.querySelector('.insights').addEventListener('click',()=>changeSRC('./pages/insights.html'));
document.querySelector('.meetings').addEventListener('click',()=>changeSRC('./pages/meetings.html'));
document.querySelector('.callings').addEventListener('click',()=>changeSRC('./pages/callings.html'));
document.querySelector('.contacts').addEventListener('click',()=>changeSRC('./pages/contacts.html'));

