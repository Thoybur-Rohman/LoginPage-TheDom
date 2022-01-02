  //console.log(window);
//alert(1);
//const form = document.getElementById("my-form");
//console.log(form);
//console.log(document.querySelector(".container"))
 // console.log(document.getElementsByClassName('.item'))
// Single element
  /*
  This is  for getting all the items
   */
 //const items =  document.querySelectorAll('.item');
 // items.forEach((item) => console.log(item));
  //const ul = document.querySelector('.items');
  //ul.remove();
  //ul.lastElementChild.remove()
 //ul.firstElementChild.textContent = "Thoyboou";
 //ul.children[1].innerText = 'Brad';
  //btn.style.background = 'red';
  //const btn = document.querySelector('.btn');

  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');

  // Listen for form submit
  myForm.addEventListener('submit', onSubmit);

  function onSubmit(e) {
      e.preventDefault();

      if(nameInput.value === '' || emailInput.value === '') {
          // alert('Please enter all fields');
          msg.classList.add('error');
          msg.innerHTML = 'Please enter all fields';

          // Remove error after 3 seconds
          setTimeout(() => msg.remove(), 3000);
      } else {
          // Create new list item with user
          const li = document.createElement('li');

          // Add text node with input values
          li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

          // Add HTML
          // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

          // Append to ul
          userList.appendChild(li);

          // Clear fields
          nameInput.value = '';
          emailInput.value = '';
      }
  }