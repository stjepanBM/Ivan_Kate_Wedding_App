const uploadBtn = document.getElementById('uploadBtn');
const noteBtn = document.getElementById('noteBtn');
const notesSection = document.getElementById('notes');

// Replace this with your actual Google Drive folder share link:
const GOOGLE_DRIVE_LINK = 'https://drive.google.com/drive/u/2/folders/1HlIPjRRXX4GdnwkWHuLIxR0XPZTbWSFt';

uploadBtn.addEventListener('click', () => {
  window.open(GOOGLE_DRIVE_LINK, '_blank');
});

noteBtn.addEventListener('click', () => {
  const note = prompt('Write your message for the couple 💌:');
  if (note && note.trim() !== '') {
    const div = document.createElement('div');
    div.className = 'p-4 bg-white rounded-xl shadow text-gray-700 text-lg';
    div.textContent = note;
    notesSection.appendChild(div);
  }
});

localStorage.setItem('notes', notesSection.innerHTML);


notesSection.innerHTML = localStorage.getItem('notes') || '';
