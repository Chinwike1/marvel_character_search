// Init ui
const ui = new UI();

// UI Variables and API Key
const thumbnail = document.getElementById('thumbnail'),
      characterInput = document.getElementById('characterInput'),
      form = document.getElementById('form'),
      apikey = '';

let characterName = document.getElementById('characterName'),
    characterBio = document.getElementById('characterBio');

form.addEventListener('submit', validateForm);

function validateForm(e) {
  if (characterInput.value != '') {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${characterInput.value}&apikey=${apikey}`)
    .then(res => res.json())
    .then(response => {
          if(response.data.count === 0) {
            ui.generateAlert('alert-danger', 'Character Not Found!');
          } else {
            // Apply styling for thumbnail
            thumbnail.style.width = '200px';
            thumbnail.style.height = '200px';
            thumbnail.style.borderRadius = '50%';
            thumbnail.setAttribute('src', `${response.data.results[0].thumbnail.path}.jpg`);
            // Update character info into DOM
            characterName.innerText = `${response.data.results[0].name}`;
            const bio = response.data.results[0].description;
            if (bio !== '') {
              characterBio.innerText = bio;
            } else {
              characterBio.innerText = 'There is no bio for this character yet';
            }
            characterBio.style.opacity = '1';
            characterInput.value = '';
          }
    });
  } else {
    ui.generateAlert('alert-danger', 'Fill in the input below');
  }

  e.preventDefault();
}
