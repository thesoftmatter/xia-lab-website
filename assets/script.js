document.getElementById('year').textContent = new Date().getFullYear();
function toggleMenu(){
  const nav = document.querySelector('.nav-links');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.right = '20px';
  nav.style.top = '70px';
  nav.style.flexDirection = 'column';
  nav.style.alignItems = 'stretch';
  nav.style.background = 'white';
  nav.style.border = '1px solid var(--line)';
  nav.style.borderRadius = '20px';
  nav.style.padding = '10px';
  nav.style.boxShadow = 'var(--shadow)';
}
function sendMail(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const subject = encodeURIComponent(document.getElementById('subject').value);
  const message = encodeURIComponent(document.getElementById('message').value);
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = `mailto:jingxia@princeton.edu?subject=${subject}&body=${body}`;
}
