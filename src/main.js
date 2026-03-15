const tg = window.Telegram.WebApp;

tg.expand();

async function auth() {
  const user = tg.initDataUnsafe.user;

  const res = await fetch('http://localhost:3000/auth/telegram', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  });

  const data = await res.json();
  console.log('Ответ сервера:', data);
}

auth();
