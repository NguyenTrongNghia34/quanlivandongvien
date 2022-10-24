const modalclick=document.querySelector('.js-open');
const modalSearch = document.querySelector('.modalSearch');
const modalClose = document.querySelector('.js-close');
function showSearch ()
{
    modalSearch.classList.add('open')
    console.log('Open')
    
}
function hideSearch()
{
    modalSearch.classList.remove('open')
}


modalclick.addEventListener('click', showSearch);
modalClose.addEventListener('click', hideSearch);
const clickmenu=document.querySelector ('.show-menu')
        const openmenu=document.querySelector ('.navbar-nav ul');
        var statusMenu = 0;
        function showMenu()
        {

            if (statusMenu==0 )
            {
                console.log('open')
                openmenu.classList.add('d-block')
                statusMenu=1;
            } else 
            {
                openmenu.classList.remove('d-block')
                statusMenu=0;
            }



        }
       clickmenu.addEventListener('click', showMenu);