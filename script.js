let menuButton = document.querySelector('.menu__button')
let menuItems = document.querySelectorAll('.menu__item')
let menuItemActive

menuItems.forEach( menuItem  => {
    menuItem.addEventListener( 'click', function( e ) {
        
        if( menuItemActive ) {
            
            if( menuItemActive.previousElementSibling ) {
                menuItemActive.previousElementSibling.classList.remove('menu__item--active-previous-sibling')
            }

            menuItemActive.classList.remove('menu__item--active')
            menuItemActive = null
        }
    
        menuItemActive = this
        menuItemActive.classList.add('menu__item--active')
      
        if( menuItemActive.previousElementSibling ) {
            menuItemActive.previousElementSibling.classList.add('menu__item--active-previous-sibling')
        }
    
    } )
});

menuButton.addEventListener( 'click', function( e ) {
    this.classList.toggle('menu__button--active')
    let menu = document.querySelector('.menu')
    menu.classList.toggle( 'menu--active' )
} )

// menuToggleIcons.forEach( menuToggleIcon => {
//     menuToggleIcon.addEventListener( 'click', function( e ){
        
//         if( menuToggleIconActive ) {
//             menuToggleIconActive.classList.remove('menu__toggle-icon--active')
//             menuToggleIconActive = null
//         }

//         menuToggleIconActive = this
//         menuToggleIconActive.classList.add('menu__toggle-icon--active')

//     } )
// } )

