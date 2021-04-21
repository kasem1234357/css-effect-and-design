const el = document.querySelector('.frame');
for(let i =0; i< 18; i++ )
{
    var square = document.createElement('div');
    square.classList.add('square')
    square.setAttribute('data-range',i *20);
    el.appendChild(square);
    square.animate([
        // keyframes
        { transform: `rotate(${square.getAttribute('data-range') }deg)` },
        { height: `2.5rem` },
        {borderRadius:`50%`}
      ], {
        // timing options
        duration: 3000,
        iterations: Infinity
      });
}